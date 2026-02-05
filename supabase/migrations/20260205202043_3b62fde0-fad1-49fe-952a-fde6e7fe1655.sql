-- Fix duplicate PERMISSIVE SELECT policies on contact_messages
-- Drop both existing SELECT policies
DROP POLICY IF EXISTS "Admins can read contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Only admins can read contact messages" ON public.contact_messages;

-- Create single RESTRICTIVE policy for admin-only SELECT access
CREATE POLICY "Admins can read contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (public.is_admin());