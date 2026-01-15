import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
  attachmentUrl?: string;
  attachmentName?: string;
}

const RATE_LIMIT_SECONDS = 60; // 1 minute

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, attachmentUrl, attachmentName }: ContactEmailRequest = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";

    // Initialize Supabase client with service role
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check rate limit
    const oneMinuteAgo = new Date(Date.now() - RATE_LIMIT_SECONDS * 1000).toISOString();
    
    const { data: recentAttempts } = await supabase
      .from("contact_rate_limits")
      .select("*")
      .or(`ip_address.eq.${clientIp},email.eq.${email}`)
      .gte("last_sent_at", oneMinuteAgo);

    if (recentAttempts && recentAttempts.length > 0) {
      const lastAttempt = recentAttempts[0];
      const waitTime = Math.ceil(
        (RATE_LIMIT_SECONDS * 1000 - (Date.now() - new Date(lastAttempt.last_sent_at).getTime())) / 1000
      );
      
      return new Response(
        JSON.stringify({ 
          error: `Please wait ${waitTime} seconds before sending another message`,
          waitTime 
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Prepare email content
    let attachments: { filename: string; content: string }[] = [];
    
    if (attachmentUrl && attachmentName) {
      try {
        // Download the attachment from storage
        const { data: fileData, error: downloadError } = await supabase.storage
          .from("contact-attachments")
          .download(attachmentUrl);

        if (!downloadError && fileData) {
          const arrayBuffer = await fileData.arrayBuffer();
          const base64Content = btoa(
            String.fromCharCode(...new Uint8Array(arrayBuffer))
          );
          attachments = [{ filename: attachmentName, content: base64Content }];
        }
      } catch (err) {
        console.error("Error downloading attachment:", err);
      }
    }

    // Send email to site owner using Resend API directly
    const emailPayload: Record<string, unknown> = {
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["mcdaluson@asist.edu.ph"],
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        ${attachmentUrl ? `<p><strong>Attachment:</strong> ${attachmentName}</p>` : ""}
      `,
    };

    if (attachments.length > 0) {
      emailPayload.attachments = attachments;
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      throw new Error(errorData.message || "Failed to send email");
    }

    const emailResponse = await resendResponse.json();

    console.log("Email sent successfully:", emailResponse);

    // Record rate limit
    await supabase.from("contact_rate_limits").insert({
      ip_address: clientIp,
      email: email,
    });

    // Clean up old rate limit records (older than 1 hour)
    const oneHourAgo = new Date(Date.now() - 3600 * 1000).toISOString();
    await supabase.from("contact_rate_limits").delete().lt("created_at", oneHourAgo);

    // Clean up the uploaded attachment after sending
    if (attachmentUrl) {
      await supabase.storage.from("contact-attachments").remove([attachmentUrl]);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
