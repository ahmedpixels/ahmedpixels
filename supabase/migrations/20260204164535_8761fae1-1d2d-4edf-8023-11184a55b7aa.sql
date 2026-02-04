-- Fix admin_emails table - deny all SELECT for anon users
DROP POLICY IF EXISTS "Check own admin status" ON public.admin_emails;

-- Only authenticated users can check their own admin status
CREATE POLICY "Authenticated users check own admin status"
ON public.admin_emails
FOR SELECT
TO authenticated
USING (email = (auth.jwt() ->> 'email'));

-- Deny all access to anon users
CREATE POLICY "Deny anon access"
ON public.admin_emails
FOR SELECT
TO anon
USING (false);

-- Note: contact_messages already has proper SELECT policy via is_admin() function
-- The "Admins can read contact messages" policy restricts SELECT to admins only
-- No additional changes needed for contact_messages SELECT