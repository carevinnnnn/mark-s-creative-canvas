import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, Paperclip, X, Loader2 } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z.string()
    .trim()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 5MB",
          variant: "destructive",
        });
        return;
      }
      // Check file type
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file",
          variant: "destructive",
        });
        return;
      }
      setAttachment(file);
    }
  };

  const removeAttachment = () => {
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const startCooldown = (seconds: number) => {
    setCooldownSeconds(seconds);
    const interval = setInterval(() => {
      setCooldownSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const validateField = (field: keyof typeof contactSchema.shape, value: string): string | undefined => {
    try {
      contactSchema.shape[field].parse(value);
      return undefined;
    } catch (err) {
      if (err instanceof z.ZodError) {
        return err.errors[0]?.message;
      }
      return "Invalid input";
    }
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const value = field === "name" ? name : field === "email" ? email : message;
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleFieldChange = (field: keyof FormErrors, value: string) => {
    if (field === "name") setName(value);
    else if (field === "email") setEmail(value);
    else setMessage(value);

    // Clear error when user starts typing (if field was touched)
    if (touched[field] && errors[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cooldownSeconds > 0) {
      toast({
        title: "Please wait",
        description: `You can send another message in ${cooldownSeconds} seconds`,
        variant: "destructive",
      });
      return;
    }

    // Validate all fields
    const result = contactSchema.safeParse({ name, email, message });
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      setTouched({ name: true, email: true, message: true });
      
      toast({
        title: "Validation error",
        description: "Please fix the errors below",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let attachmentUrl: string | undefined;
      let attachmentName: string | undefined;

      // Upload attachment if exists
      if (attachment) {
        const fileExt = attachment.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from("contact-attachments")
          .upload(fileName, attachment);

        if (uploadError) {
          console.error("Upload error:", uploadError);
          toast({
            title: "Upload failed",
            description: "Failed to upload attachment. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }

        attachmentUrl = fileName;
        attachmentName = attachment.name;
      }

      // Send email via edge function
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          attachmentUrl,
          attachmentName,
        },
      });

      if (error) {
        throw error;
      }

      if (data?.error) {
        if (data.waitTime) {
          startCooldown(data.waitTime);
        }
        throw new Error(data.error);
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setAttachment(null);
      setErrors({});
      setTouched({});
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Start cooldown after successful send
      startCooldown(60);
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className={errors.name && touched.name ? "text-destructive" : ""}>
          Name *
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => handleFieldChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          placeholder="Your name"
          disabled={isSubmitting}
          maxLength={100}
          className={errors.name && touched.name ? "border-destructive focus-visible:ring-destructive" : ""}
          aria-invalid={errors.name && touched.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && touched.name && (
          <p id="name-error" className="text-sm text-destructive flex items-center gap-1">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={errors.email && touched.email ? "text-destructive" : ""}>
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          placeholder="your@email.com"
          disabled={isSubmitting}
          maxLength={255}
          className={errors.email && touched.email ? "border-destructive focus-visible:ring-destructive" : ""}
          aria-invalid={errors.email && touched.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && touched.email && (
          <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={errors.message && touched.message ? "text-destructive" : ""}>
          Message *
        </Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => handleFieldChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          placeholder="Your message..."
          rows={5}
          disabled={isSubmitting}
          maxLength={2000}
          className={errors.message && touched.message ? "border-destructive focus-visible:ring-destructive" : ""}
          aria-invalid={errors.message && touched.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <div className="flex justify-between items-center">
          {errors.message && touched.message ? (
            <p id="message-error" className="text-sm text-destructive">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-muted-foreground">
            {message.length}/2000
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Attachment (optional)</Label>
        <div className="flex items-center gap-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            disabled={isSubmitting}
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={isSubmitting}
            className="gap-2"
          >
            <Paperclip className="h-4 w-4" />
            Attach Image
          </Button>
          {attachment && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md">
              <span className="text-sm truncate max-w-[150px]">{attachment.name}</span>
              <button
                type="button"
                onClick={removeAttachment}
                className="hover:text-destructive transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground">Max 5MB, images only</p>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || cooldownSeconds > 0}
        className="w-full gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : cooldownSeconds > 0 ? (
          `Wait ${cooldownSeconds}s`
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
