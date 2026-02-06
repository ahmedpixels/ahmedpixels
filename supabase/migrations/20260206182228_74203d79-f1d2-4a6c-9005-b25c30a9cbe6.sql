-- Add explicit DENY policies for UPDATE and DELETE on contact_messages
-- This ensures no unauthorized modifications can occur

-- Deny all UPDATE operations on contact_messages
CREATE POLICY "No updates allowed"
ON public.contact_messages
FOR UPDATE
USING (false);

-- Allow admins to delete contact messages if needed
CREATE POLICY "Admins can delete contact messages"
ON public.contact_messages
FOR DELETE
TO authenticated
USING (public.is_admin());