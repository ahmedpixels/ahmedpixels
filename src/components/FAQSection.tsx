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
    gradient: "from-amber-500 to-orange-500",
  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer: "Yes! I offer maintenance packages that include regular updates, security monitoring, backups, and technical support. The first month of basic support is included in most packages.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    question: "What is your SEO process?",
    answer: "My SEO process includes keyword research, on-page optimization (meta tags, headings, content), technical SEO (speed, mobile-friendliness, schema markup), and setting up Google Analytics & Search Console for tracking.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    question: "Can you help with an existing WordPress website?",
    answer: "Absolutely! I can help redesign, optimize, fix issues, add new features, or improve the SEO of your existing WordPress site. I'll first audit your site and provide recommendations.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept bank transfers, JazzCash, Easypaisa, and for international clients - PayPal and Wise. Payment is typically 50% upfront and 50% upon completion.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "100% yes! All websites I build are fully responsive and optimized for mobile, tablet, and desktop. Mobile-friendliness is also crucial for SEO and is always a priority.",
    gradient: "from-fuchsia-500 to-pink-500",
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
                className="relative bg-hero-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group data-[state=open]:border-white/20 transition-all duration-300"
              >
                {/* Gradient accent on left */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${faq.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
                
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10 px-6">
                  <AccordionTrigger className="text-left text-white font-semibold hover:text-white transition-colors py-5">
                    <span className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${faq.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-hero-muted mb-4">Still have questions?</p>
          <motion.a
            href="https://wa.me/923216479192?text=Hi%20Ahmed,%20I%20have%20a%20question"
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
