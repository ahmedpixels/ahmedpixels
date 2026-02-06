import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Allowed origins for the contact form (add your production domain)
const ALLOWED_ORIGINS = [
  "https://ahmedpixels.com",
  "https://ahmedpixels.lovable.app",
  "https://id-preview--2edc5261-3626-4be1-818b-d5c94250d08c.lovable.app",
  "http://localhost:5173",
  "http://localhost:8080"
];

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  record.count++;
  return false;
}

// Input validation
function validateInput(data: ContactNotificationRequest): { valid: boolean; error?: string } {
  if (!data.name || typeof data.name !== 'string' || data.name.length > 100) {
    return { valid: false, error: 'Invalid name' };
  }
  if (!data.email || typeof data.email !== 'string' || data.email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { valid: false, error: 'Invalid email' };
  }
  if (!data.phone || typeof data.phone !== 'string' || data.phone.length > 20) {
    return { valid: false, error: 'Invalid phone' };
  }
  if (!data.service || typeof data.service !== 'string' || data.service.length > 100) {
    return { valid: false, error: 'Invalid service' };
  }
  if (!data.message || typeof data.message !== 'string' || data.message.length > 2000) {
    return { valid: false, error: 'Invalid message' };
  }
  if (data.budget && (typeof data.budget !== 'string' || data.budget.length > 50)) {
    return { valid: false, error: 'Invalid budget' };
  }
  if (data.timeline && (typeof data.timeline !== 'string' || data.timeline.length > 50)) {
    return { valid: false, error: 'Invalid timeline' };
  }
  if (data.reference_url && (typeof data.reference_url !== 'string' || data.reference_url.length > 500)) {
    return { valid: false, error: 'Invalid reference URL' };
  }
  return { valid: true };
}

interface ContactNotificationRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  budget?: string;
  timeline?: string;
  reference_url?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send contact notification");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check origin header for basic abuse prevention
    const origin = req.headers.get("origin");
    if (origin && !ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed.replace(/\/$/, '')))) {
      console.warn(`Blocked request from unauthorized origin: ${origin}`);
      return new Response(
        JSON.stringify({ error: "Unauthorized origin" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Rate limiting by IP
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";
    
    if (isRateLimited(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const requestData: ContactNotificationRequest = await req.json();
    
    // Server-side validation
    const validation = validateInput(requestData);
    if (!validation.valid) {
      console.warn(`Validation failed: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, phone, service, message, budget, timeline, reference_url } = requestData;
    console.log("Processing contact from:", name, email);

    // Send notification email to yourself
    const notificationResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["ahmedpixelspro@gmail.com"],
      subject: `🚀 New Project Request: ${service} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6b35; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">New Project Request</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 150px;">Name</td>
              <td style="padding: 10px; background: #fafafa;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Email</td>
              <td style="padding: 10px; background: #fafafa;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">WhatsApp/Phone</td>
              <td style="padding: 10px; background: #fafafa;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Service</td>
              <td style="padding: 10px; background: #fafafa; color: #ff6b35; font-weight: bold;">${service}</td>
            </tr>
            ${budget ? `<tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Budget</td>
              <td style="padding: 10px; background: #fafafa;">${budget}</td>
            </tr>` : ''}
            ${timeline ? `<tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Timeline</td>
              <td style="padding: 10px; background: #fafafa;">${timeline}</td>
            </tr>` : ''}
            ${reference_url ? `<tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Reference</td>
              <td style="padding: 10px; background: #fafafa;"><a href="${reference_url}">${reference_url}</a></td>
            </tr>` : ''}
          </table>
          
          <h3 style="color: #333;">Project Details:</h3>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #ff6b35; margin: 10px 0;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">Reply directly to this email or contact them at ${email} | WhatsApp: ${phone}</p>
        </div>
      `,
      reply_to: email,
    });

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation email to the sender
    const confirmationResponse = await resend.emails.send({
      from: "Ahmed <onboarding@resend.dev>",
      to: [email],
      subject: "✅ I received your project request!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6b35;">Thank you for reaching out, ${name}!</h2>
          <p>I've received your project request for <strong>${service}</strong> and will review the details shortly.</p>
          <p>I typically respond within <strong>24 hours</strong>. If your project is urgent, feel free to WhatsApp me directly!</p>
          
          <h3 style="color: #333;">Your Request Summary:</h3>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #ff6b35; margin: 10px 0;">
            <p><strong>Service:</strong> ${service}</p>
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
            <p><strong>Details:</strong><br>${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p style="margin-top: 20px;">Best regards,<br><strong>Ahmed</strong><br>WordPress Developer & SEO Specialist</p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ success: true, notification: notificationResponse, confirmation: confirmationResponse }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
