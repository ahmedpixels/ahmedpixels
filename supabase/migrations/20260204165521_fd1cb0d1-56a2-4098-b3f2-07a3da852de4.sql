-- Fix conflicting RLS policies by dropping problematic ones and recreating properly

-- Drop all existing SELECT policies on contact_messages to start fresh
DROP POLICY IF EXISTS "No public read access" ON public.contact_messages;
DROP POLICY IF EXISTS "Admin can read contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Admin can read" ON public.contact_messages;
DROP POLICY IF EXISTS "Deny anon read access" ON public.contact_messages;

-- Create single proper admin-only SELECT policy
CREATE POLICY "Only admins can read contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (public.is_admin());

-- Drop all existing SELECT policies on admin_emails  
DROP POLICY IF EXISTS "Authenticated users check own admin status" ON public.admin_emails;
DROP POLICY IF EXISTS "Deny anon access" ON public.admin_emails;
DROP POLICY IF EXISTS "No direct access to admin_emails" ON public.admin_emails;

-- Create single restrictive policy - only is_admin function (SECURITY DEFINER) can access
-- No direct SELECT access for anyone
CREATE POLICY "No direct table access"
ON public.admin_emails
FOR SELECT
USING (false);