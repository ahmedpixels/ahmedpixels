

## LinkedIn URL Fix

Aap ka correct LinkedIn URL `https://pk.linkedin.com/in/ahmedpixels` hai. Abhi 3 files mein purana/galat URL (`https://www.linkedin.com/in/ahmed-pixels/`) lagaa hua hai. Yeh fix karna hai:

### Changes

**1. `index.html`** - JSON-LD structured data mein LinkedIn URL update karni hai.

**2. `src/pages/ContactPage.tsx`** - 2 jagah fix:
   - Social links array mein href
   - JSON-LD schema mein sameAs array

**3. `supabase/functions/chatbot/index.ts`** - AI chatbot ke system prompt mein LinkedIn URL update karni hai, taake chatbot bhi correct link share kare.

Sab jagah `https://pk.linkedin.com/in/ahmedpixels` set ho jayega — consistent across the entire site.

