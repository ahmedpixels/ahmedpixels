import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  Globe,
  ShoppingCart,
  Palette,
  Wrench,
  Rocket,
  Target,
  MessageSquare,
  Code,
  TestTube,
  Headphones,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Globe,
    title: "Custom WordPress Website Development",
    description:
      "Build a unique, professional website tailored to your business needs with clean code and modern design.",
    features: [
      "Responsive design",
      "Fast loading",
      "SEO-friendly",
      "Secure architecture",
    ],
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce / E-commerce Development",
    description:
      "Launch your online store with full e-commerce functionality, secure payments, and easy management.",
    features: [
      "Product setup",
      "Payment gateway integration",
      "Order management",
      "Inventory tracking",
    ],
  },
  {
    icon: Palette,
    title: "Theme Customization",
    description:
      "Transform premium themes to match your brand identity with pixel-perfect customizations.",
    features: [
      "Premium theme customization",
      "Mobile optimization",
      "Modern design",
      "Brand consistency",
    ],
  },
  {
    icon: Wrench,
    title: "Website Maintenance & Support",
    description:
      "Keep your website running smoothly with regular updates, backups, and proactive monitoring.",
    features: [
      "Regular updates",
      "Automated backups",
      "Security monitoring",
      "Bug fixing",
    ],
  },
  {
    icon: Rocket,
    title: "Performance Optimization & SEO",
    description:
      "Boost your website speed and search rankings with technical optimizations and SEO best practices.",
    features: [
      "Speed optimization",
      "SEO-friendly coding",
      "Caching setup",
      "Core Web Vitals",
    ],
  },
  {
    icon: Target,
    title: "Landing Pages / Marketing Pages",
    description:
      "Create high-converting landing pages designed to capture leads and drive business results.",
    features: [
      "High-conversion pages",
      "CTA optimization",
      "Form integration",
      "A/B testing ready",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Requirement Gathering",
    description:
      "We discuss your goals, target audience, and project requirements to create a clear roadmap.",
  },
  {
    number: "02",
    icon: Code,
    title: "Design & Development",
    description:
      "I design and build your website with attention to detail, keeping you updated at every step.",
  },
  {
    number: "03",
    icon: TestTube,
    title: "Testing & Launch",
    description:
      "Rigorous testing across devices and browsers before a smooth, successful launch.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Support & Maintenance",
    description:
      "Ongoing support to keep your website secure, updated, and performing at its best.",
  },
];

const highlights = [
  "Experienced WordPress Developer",
  "Responsive & Mobile-Friendly",
  "SEO & Performance Optimized",
  "Secure & Bug-Free",
  "Quick Turnaround",
  "Clear Communication",
];

const ServicesPage = () => {
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const highlightsRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const highlightsInView = useInView(highlightsRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <>
      <Helmet>
        <title>WordPress Development Services | Ahmed - Professional Web Developer</title>
        <meta
          name="description"
          content="Professional WordPress development services including custom websites, WooCommerce, theme customization, plugin development, SEO optimization, and ongoing support."
        />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-hero-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                What I Offer
              </span>
              <h1 className="heading-xl text-hero-text mt-4">
                Professional WordPress{" "}
                <span className="text-gradient">Development Services</span>
              </h1>
              <p className="body-lg text-hero-muted mt-6 max-w-2xl mx-auto">
                I help businesses build powerful, fast, and secure WordPress websites that
                drive results. From custom development to ongoing maintenance, I've got you
                covered.
              </p>
              <motion.a
                href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I'm%20interested%20in%20your%20WordPress%20services"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-orange text-primary-foreground font-bold px-8 py-4 rounded-full mt-8 glow-orange"
              >
                Get a Free Quote
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-section-dark" ref={servicesRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Services
              </span>
              <h2 className="heading-lg text-hero-text mt-4">
                What I <span className="text-gradient">Offer</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 rounded-3xl group hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-white/70 text-sm"
                      >
                        <CheckCircle className="text-primary flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-hero-bg" ref={processRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                How I Work
              </span>
              <h2 className="heading-lg text-hero-text mt-4">
                My <span className="text-gradient">Process</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="relative text-center"
                >
                  <div className="relative inline-block mb-6">
                    <span className="absolute -top-2 -left-2 text-6xl font-black text-primary/10">
                      {step.number}
                    </span>
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-orange flex items-center justify-center">
                      <step.icon className="text-primary-foreground" size={28} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-primary/20" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="section-padding bg-section-dark" ref={highlightsRef}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={highlightsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Why Choose Me
                </span>
                <h2 className="heading-lg text-hero-text mt-4">
                  Your Success is My <span className="text-gradient">Priority</span>
                </h2>
                <p className="text-hero-muted mt-4">
                  With years of experience in WordPress development and a passion for
                  delivering quality work, I ensure every project exceeds expectations.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={highlightsInView ? "visible" : "hidden"}
                className="grid sm:grid-cols-2 gap-4"
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    variants={itemVariants}
                    className="flex items-center gap-3 glass-card p-4 rounded-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-300"
                  >
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-white font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-hero-bg">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
              <div className="relative z-10">
                <h2 className="heading-lg text-white">
                  Ready to Start Your <span className="text-gradient">Project?</span>
                </h2>
                <p className="text-white/70 mt-4 max-w-xl mx-auto">
                  Let's discuss your requirements and create something amazing together.
                  Get a free consultation today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <motion.a
                    href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I'm%20interested%20in%20your%20WordPress%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-orange text-primary-foreground font-bold px-8 py-4 rounded-full glow-orange"
                  >
                    Get a Free Quote
                    <ArrowRight size={20} />
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 border-2 border-hero-text/20 text-hero-text font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-colors"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;
