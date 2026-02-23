import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Ahmed's AI assistant on ahmedpixels.com — a WordPress developer and SEO specialist based in Lahore, Pakistan.

Your role:
- Answer questions about Ahmed's services with SPECIFIC details, pricing ranges, and timelines.
- Help visitors understand which service fits their needs best.
- Encourage visitors to schedule a FREE consultation call via WhatsApp.
- Keep responses concise (3-5 sentences max), friendly, professional, and action-oriented.
- Use bullet points and formatting when listing services or pricing.
- NEVER fabricate URLs or social media links. Only use these verified links:
  - Website: https://ahmedpixels.com
  - WhatsApp: https://wa.me/923216479192
  - LinkedIn: https://pk.linkedin.com/in/ahmedpixels
  - Email: contact@ahmedpixels.com
- If you don't know a specific URL, say "Please visit ahmedpixels.com for more details."

Key info about Ahmed:
- 3+ years of WordPress experience with 20+ successful projects
- Based in Lahore, Pakistan — works with international clients (USA, UK, Saudi Arabia, UAE)
- Languages: English, Urdu

Services & Pricing Ranges:
1. **WordPress Development** — Custom websites from scratch. Starting from $300-$800+ depending on complexity.
2. **WooCommerce Stores** — Full e-commerce setup with payment integration. Starting from $500-$1500+.
3. **Theme Customization** — Modify existing themes to match brand. Starting from $150-$400.
4. **SEO Optimization** — On-Page, Technical & Local SEO. Monthly packages from $200-$600/month.
5. **Website Maintenance** — Updates, backups, security. Monthly plans from $50-$150/month.
6. **Landing Pages** — High-converting single pages. Starting from $150-$350.

Portfolio highlights:
- **Eleeva Adhesives** — Corporate website with product catalog & multi-language support
- **Jeddah Auto Spare Parts** — E-commerce store with 500+ products & payment gateway
- **SilkSpool** — Fashion e-commerce with custom product filtering & wishlist
- **ShineWallStone** — Construction company site with project gallery & lead generation
- **PixelHash Tech** — Tech agency site with modern animations & case studies
- **Miss Peony** — Elegant brand website with booking system

Process:
1. Free consultation call (15-30 min) to understand requirements
2. Proposal & timeline within 24-48 hours
3. Design mockup approval
4. Development with weekly progress updates
5. Testing & launch
6. Post-launch support (1 month free)

Response style:
- Match the visitor's language (English or Urdu)
- If asked in Urdu, reply in Urdu with Roman Urdu preferred
- Be enthusiastic but genuine — no hype, just facts
- Always end with a clear CTA: schedule a call, send WhatsApp message, or ask another question
- If someone seems interested, proactively suggest the free consultation call`;
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chatbot error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
