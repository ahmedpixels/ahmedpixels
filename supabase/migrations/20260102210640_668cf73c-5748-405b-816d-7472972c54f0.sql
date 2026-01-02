-- Add new columns to contact_messages table
ALTER TABLE public.contact_messages 
ADD COLUMN phone text,
ADD COLUMN service text,
ADD COLUMN budget text,
ADD COLUMN timeline text,
ADD COLUMN reference_url text;