import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "WordPress website banane mein kitna time lagta hai?",
    answer: "Simple business website 5-7 din mein ready ho jati hai. Agar WooCommerce store chahiye with product upload, payment gateway, and proper SEO setup — to 2-3 weeks lag sakte hain depending on products ki quantity aur features. Shopify store usually 1-2 weeks mein done ho jata hai.",
  },
  {
    question: "Kya aap website launch ke baad bhi support dete hain?",
    answer: "Bilkul! Main har project ke saath 1 month free support deta hoon jismein bug fixes, minor changes, aur WordPress/plugin updates shamil hain. Uske baad monthly maintenance packages available hain jo include karte hain security monitoring, regular backups, speed optimization, aur content updates.",
  },
  {
    question: "SEO se meri website Google pe rank karegi?",
    answer: "Main har website ke saath proper on-page SEO karta hoon — meta titles, descriptions, heading structure, image alt tags, schema markup, XML sitemap, aur Google Search Console setup. Technical SEO bhi cover hota hai jaise page speed optimization, mobile-friendliness, aur Core Web Vitals. Results depend karte hain competition pe, lekin mere clients consistently Google pe first page pe rank kar rahe hain apne target keywords ke liye.",
  },
  {
    question: "Kya aap existing WordPress website fix ya redesign kar sakte hain?",
    answer: "Haan, yeh mera common kaam hai. Bohat se clients aate hain jinki website slow hai, design outdated hai, ya SEO bilkul nahi hai. Main pehle aapki site ka full audit karta hoon — speed, security, SEO, aur design check karta hoon — phir detailed recommendations deta hoon with pricing. Redesign se lekar complete migration tak, sab handle karta hoon.",
  },
  {
    question: "Payment kaise hoti hai?",
    answer: "Pakistan mein bank transfer, JazzCash, aur Easypaisa accept karta hoon. International clients ke liye PayPal aur Wise available hai. Payment structure simple hai — 50% advance project start karne se pehle, aur 50% project complete hone ke baad jab aap satisfied ho.",
  },
  {
    question: "Kya website mobile pe bhi achi dikhegi?",
    answer: "100%. Main har website mobile-first approach se banata hoon kyunke aaj kal 70%+ traffic mobile se aata hai. Responsive design, fast loading on 3G/4G, aur touch-friendly navigation — yeh sab by default included hota hai. Google bhi mobile-first indexing use karta hai, to yeh SEO ke liye bhi zaroori hai.",
  },
  {
    question: "WooCommerce aur Shopify mein kya farq hai? Mere liye kya better hai?",
    answer: "WooCommerce best hai agar aapko full control chahiye, custom features chahiye, aur long-term mein hosting cost save karna ho — yeh WordPress pe chalta hai. Shopify better hai agar aap quickly start karna chahte hain aur technical cheezon se door rehna chahte hain — lekin monthly fee lagti hai. Main dono pe kaam karta hoon aur aapke business ke hisaab se best option suggest karunga.",
  },
];

const FAQSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-hero-bg relative overflow-hidden" ref={ref} aria-labelledby="faq-heading">
      {/* Background effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[180px]" />
      </div>

      <div className="container-custom max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-semibold text-xs uppercase tracking-[0.15em] mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            FAQ
          </span>
          <h2 id="faq-heading" className="heading-lg text-hero-text mt-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-5">
            Got questions? Here are answers to the most common ones.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="premium-card overflow-hidden group"
              >
                {/* Gradient accent on left */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-accent opacity-40 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 px-7">
                  <AccordionTrigger className="text-left text-hero-text font-semibold hover:text-primary transition-colors py-6 text-[15px]">
                    <span className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-hero-muted pb-6 leading-relaxed pl-[52px] text-sm">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-hero-muted mb-5 text-sm">Still have questions?</p>
          <motion.a
            href="https://wa.me/923216479192?text=Hi%20Ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ask Me Directly
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection;