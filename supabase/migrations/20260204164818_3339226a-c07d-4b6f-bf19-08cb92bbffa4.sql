-- Fix 1: Add explicit deny policy for anon SELECT on contact_messages
CREATE POLICY "Deny anon read access"
ON public.contact_messages
FOR SELECT
TO anon
USING (false);

-- Fix 2: Drop existing admin_emails policies and recreate with RESTRICTIVE
DROP POLICY IF EXISTS "Authenticated users check own admin status" ON public.admin_emails;
DROP POLICY IF EXISTS "Deny anon access" ON public.admin_emails;

-- Create RESTRICTIVE policy - only the is_admin function (SECURITY DEFINER) can access this table
-- No direct SELECT access for anyone
CREATE POLICY "No direct access to admin_emails"
ON public.admin_emails
FOR SELECT
USING (false);