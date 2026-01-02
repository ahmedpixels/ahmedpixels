import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-section-dark" ref={ref}>
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="heading-lg text-hero-text mt-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-4">
            Got questions? Here are answers to the most common ones. Feel free to reach out if you need more info!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-hero-bg/50 backdrop-blur-sm border border-border/10 rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-hero-text font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-hero-muted pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-hero-muted mb-4">Still have questions?</p>
          <motion.a
            href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-orange text-primary-foreground rounded-full font-bold shadow-lg glow-orange"
          >
            Ask Me Directly
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
