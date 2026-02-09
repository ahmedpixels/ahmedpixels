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
    question: "How long does it take to build a WordPress website?",
    answer: "A typical WordPress website takes 1-3 weeks depending on complexity. A simple single-page site can be done in 5-7 days, while a full e-commerce store with custom features may take 2-4 weeks.",
  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer: "Yes! I offer maintenance packages that include regular updates, security monitoring, backups, and technical support. The first month of basic support is included in most packages.",
  },
  {
    question: "What is your SEO process?",
    answer: "My SEO process includes keyword research, on-page optimization (meta tags, headings, content), technical SEO (speed, mobile-friendliness, schema markup), and setting up Google Analytics & Search Console for tracking.",
  },
  {
    question: "Can you help with an existing WordPress website?",
    answer: "Absolutely! I can help redesign, optimize, fix issues, add new features, or improve the SEO of your existing WordPress site. I'll first audit your site and provide recommendations.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept bank transfers, JazzCash, Easypaisa, and for international clients - PayPal and Wise. Payment is typically 50% upfront and 50% upon completion.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "100% yes! All websites I build are fully responsive and optimized for mobile, tablet, and desktop. Mobile-friendliness is also crucial for SEO and is always a priority.",
  },
];

const FAQSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-section-dark" ref={ref} aria-labelledby="faq-heading">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 id="faq-heading" className="heading-lg text-hero-text mt-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-4">
            Got questions? Here are answers to the most common ones.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="relative bg-hero-bg/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/20 hover:border-primary/30 transition-colors duration-300"
              >
                {/* Gradient accent on left */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/60" />
                
                <div className="relative z-10 px-6">
                  <AccordionTrigger className="text-left text-white font-semibold hover:text-white transition-colors py-5">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-5 leading-relaxed pl-11">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-hero-muted mb-4">Still have questions?</p>
          <a
            href="https://wa.me/923216479192?text=Hi%20Ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Ask Me Directly
          </a>
        </div>
      </div>
    </section>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection;
