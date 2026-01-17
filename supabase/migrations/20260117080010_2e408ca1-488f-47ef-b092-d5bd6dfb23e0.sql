-- Add a policy to allow authenticated admin users to read contact messages
-- Using email-based check for the admin user

CREATE POLICY "Admin can read contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'ahmedpixelspro@gmail.com'
);