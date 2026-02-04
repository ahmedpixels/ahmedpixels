-- Fix 1: Drop conflicting restrictive policies
DROP POLICY IF EXISTS "No public read access" ON public.contact_messages;
DROP POLICY IF EXISTS "Admin can read contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON public.contact_messages;

-- Fix 2: Create admin_emails table instead of hardcoding
CREATE TABLE IF NOT EXISTS public.admin_emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on admin_emails
ALTER TABLE public.admin_emails ENABLE ROW LEVEL SECURITY;

-- Only allow reading admin emails for authenticated users checking their own access
CREATE POLICY "Check own admin status"
ON public.admin_emails
FOR SELECT
TO authenticated
USING (email = (auth.jwt() ->> 'email'));

-- Insert current admin email
INSERT INTO public.admin_emails (email) VALUES ('ahmedpixelspro@gmail.com')
ON CONFLICT (email) DO NOTHING;

-- Fix 3: Create security definer function to check admin status
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_emails
    WHERE email = (auth.jwt() ->> 'email')
  )
$$;

-- Fix 4: Create proper PERMISSIVE policies for contact_messages
-- Admin read access using the function
CREATE POLICY "Admins can read contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (public.is_admin());

-- Public insert with basic validation (not just 'true')
CREATE POLICY "Public can submit contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (
  -- Ensure required fields are not empty
  length(name) > 0 AND
  length(email) > 0 AND
  length(message) > 0 AND
  -- Basic email format check
  email ~ '^[^@]+@[^@]+\.[^@]+$'
);