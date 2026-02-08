-- Fix MISSING_RLS: Add write protection policies to admin_emails table
-- Using deny-all approach since admin list should only be managed through migrations

-- Deny all INSERT operations (admin list is static, managed via migrations)
CREATE POLICY "No direct INSERT" ON public.admin_emails 
FOR INSERT 
WITH CHECK (false);

-- Deny all UPDATE operations
CREATE POLICY "No direct UPDATE" ON public.admin_emails 
FOR UPDATE 
USING (false);

-- Deny all DELETE operations
CREATE POLICY "No direct DELETE" ON public.admin_emails 
FOR DELETE 
USING (false);