import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We discuss your project requirements, goals, and vision to understand exactly what you need.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "I create a detailed plan including site structure, features, and SEO strategy tailored to your business.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Design & Development",
    description: "Building your website with clean code, responsive design, and optimized performance.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Testing & Launch",
    description: "Thorough testing across devices and browsers before launching your website live.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing support to keep your website updated, secure, and performing at its best.",
  },
];

const ProcessSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-section-light" ref={ref} aria-labelledby="process-heading">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Process
          </span>
          <h2 id="process-heading" className="heading-lg text-foreground mt-4">
            How I <span className="text-gradient">Work</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            A streamlined process to deliver your project on time with clear communication at every step.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                  <div className="glass-card p-6 inline-block border border-border/30 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300">
                    <span className="text-primary font-bold text-sm">{step.number}</span>
                    <h3 className="text-xl font-bold text-foreground mt-2">{step.title}</h3>
                    <p className="text-muted-foreground mt-2 max-w-sm">{step.description}</p>
                  </div>
                </div>

                {/* Icon - Center */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25" aria-hidden="true">
                    <step.icon className="text-primary-foreground" size={28} aria-hidden="true" />
                  </div>
                </div>

                {/* Empty space for alignment */}
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
