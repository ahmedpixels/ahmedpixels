import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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
    const { name, email, phone, service, message, budget, timeline, reference_url }: ContactNotificationRequest = await req.json();
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
