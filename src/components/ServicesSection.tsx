import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const packages = [
  {
    name: "Starter",
    icon: Zap,
    price: "From $299",
    description: "Perfect for small businesses starting online",
    features: [
      "Single Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
      "1 Week Delivery",
    ],
    popular: false,
  },
  {
    name: "Professional",
    icon: Crown,
    price: "From $599",
    description: "Ideal for growing businesses & e-commerce",
    features: [
      "Multi-Page WordPress Site",
      "E-commerce Ready (WooCommerce)",
      "Advanced SEO Optimization",
      "Speed Optimization",
      "SSL & Security Setup",
      "Google Analytics Integration",
      "2 Weeks Delivery",
      "1 Month Free Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "Custom",
    description: "Complete solution for large-scale projects",
    features: [
      "Custom WordPress Development",
      "Full E-commerce Solution",
      "Complete SEO Strategy",
      "Custom Plugin Development",
      "Performance Optimization",
      "Ongoing Maintenance",
      "Priority Support",
      "Dedicated Project Manager",
    ],
    popular: false,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="services" className="section-padding bg-section-dark" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="heading-lg text-hero-text mt-4">
            Service <span className="text-gradient">Packages</span>
          </h2>
          <p className="body-lg text-hero-text/60 max-w-2xl mx-auto mt-4">
            Transparent pricing for quality work. Choose a package that fits your needs 
            or contact me for a custom quote.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative bg-hero-bg/50 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 ${
                pkg.popular
                  ? "border-primary shadow-xl shadow-primary/10"
                  : "border-border/10 hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-orange text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-orange flex items-center justify-center mb-4`}
                >
                  <pkg.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-hero-text">{pkg.name}</h3>
                <p className="text-hero-text/50 text-sm mt-2">{pkg.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-hero-text/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full py-3 rounded-full font-bold text-center transition-all ${
                  pkg.popular
                    ? "bg-gradient-orange text-primary-foreground shadow-lg glow-orange"
                    : "border-2 border-hero-text/20 text-hero-text hover:border-primary hover:text-primary"
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
