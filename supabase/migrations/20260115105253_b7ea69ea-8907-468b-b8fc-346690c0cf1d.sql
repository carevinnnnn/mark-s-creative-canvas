-- Create storage bucket for contact form attachments
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('contact-attachments', 'contact-attachments', false, 5242880); -- 5MB limit

-- Allow authenticated users to upload to contact-attachments bucket
CREATE POLICY "Anyone can upload contact attachments"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'contact-attachments');

-- Allow service role to read attachments (for edge function)
CREATE POLICY "Service role can read contact attachments"
ON storage.objects FOR SELECT
USING (bucket_id = 'contact-attachments');

-- Create table to track rate limiting for contact form
CREATE TABLE public.contact_rate_limits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ip_address TEXT NOT NULL,
    email TEXT NOT NULL,
    last_sent_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;

-- Allow inserts from edge function (service role)
CREATE POLICY "Service role can manage rate limits"
ON public.contact_rate_limits FOR ALL
USING (true)
WITH CHECK (true);