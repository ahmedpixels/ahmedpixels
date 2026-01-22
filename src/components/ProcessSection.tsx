import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="process" className="section-padding bg-section-light" ref={ref} aria-labelledby="process-heading">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 inline-block gradient-border-card glow-border"
                  >
                    <span className="text-primary font-bold text-sm">{step.number}</span>
                    <h3 className="text-xl font-bold text-foreground mt-2">{step.title}</h3>
                    <p className="text-muted-foreground mt-2 max-w-sm">{step.description}</p>
                  </motion.div>
                </div>

                {/* Icon - Center */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-orange rounded-2xl flex items-center justify-center shadow-lg"
                    aria-hidden="true"
                  >
                    <step.icon className="text-primary-foreground" size={28} aria-hidden="true" />
                  </motion.div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
