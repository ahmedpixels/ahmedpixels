import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Requirement Discussion",
    description: "WhatsApp ya call pe baat karte hain — aapka business, target audience, aur website mein kya chahiye. Reference websites share karein to aur behtar.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planning & Sitemap",
    description: "Pages ka structure, features list, aur SEO keywords plan karta hoon. Aapko complete roadmap milta hai before any work starts.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    icon: Code2,
    title: "Design & Development",
    description: "WordPress pe theme setup, customization, content placement, WooCommerce/Shopify setup — sab step by step with daily updates.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "SEO & Testing",
    description: "On-page SEO, speed optimization, mobile testing, cross-browser check, aur Google Search Console setup — sab launch se pehle.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Launch & Support",
    description: "Website live karne ke baad 1 month free support — bug fixes, minor changes, aur WordPress updates. Monthly maintenance bhi available hai.",
    gradient: "from-rose-500 to-pink-500",
  },
];

const ProcessSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-section-dark relative overflow-hidden" ref={ref} aria-labelledby="process-heading">
      {/* Background effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[180px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-semibold text-xs uppercase tracking-[0.15em] mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Process
          </span>
          <h2 id="process-heading" className="heading-lg text-hero-text mt-4">
            How I <span className="text-gradient">Work</span>
          </h2>
          <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-5">
            A streamlined process to deliver your project on time with clear communication at every step.
          </p>
        </motion.div>

        {/* Process Steps - Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                  <motion.div 
                    className="premium-card p-7 group hover:-translate-y-1 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${step.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                    
                    <div className="relative z-10">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent font-black text-sm mb-3`}>
                        Step {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-hero-text mt-1 mb-2">{step.title}</h3>
                      <p className="text-hero-muted text-sm leading-relaxed max-w-sm">{step.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Icon - Center */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    aria-hidden="true"
                  >
                    <step.icon className="text-primary-foreground" size={28} aria-hidden="true" />
                  </motion.div>
                </div>

                {/* Empty space */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ProcessSection.displayName = "ProcessSection";

export default ProcessSection;