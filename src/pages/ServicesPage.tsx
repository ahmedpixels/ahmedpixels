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
import CTASection from "@/components/CTASection";
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
    gradient: "from-orange-500 to-amber-500",
    iconBg: "bg-gradient-to-br from-orange-500 to-amber-500",
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
    gradient: "from-violet-500 to-purple-500",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
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
    gradient: "from-pink-500 to-rose-500",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
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
    gradient: "from-cyan-500 to-blue-500",
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500",
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
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
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
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
];

const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Requirement Gathering",
    description:
      "We discuss your goals, target audience, and project requirements to create a clear roadmap.",
    gradient: "from-violet-500 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    number: "02",
    icon: Code,
    title: "Design & Development",
    description:
      "I design and build your website with attention to detail, keeping you updated at every step.",
    gradient: "from-orange-500 to-amber-500",
    glowColor: "rgba(249, 115, 22, 0.3)",
  },
  {
    number: "03",
    icon: TestTube,
    title: "Testing & Launch",
    description:
      "Rigorous testing across devices and browsers before a smooth, successful launch.",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.3)",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Support & Maintenance",
    description:
      "Ongoing support to keep your website secure, updated, and performing at its best.",
    gradient: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.3)",
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
        <title>WordPress Development Services | Ahmed - Professional Web Developer Lahore</title>
        <meta
          name="description"
          content="Professional WordPress development services in Lahore, Pakistan. Custom websites, WooCommerce stores, theme customization, SEO optimization, and ongoing maintenance support."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://ahmedpixels.com/services" />
        <meta property="og:title" content="WordPress Development Services | Ahmed" />
        <meta property="og:description" content="Professional WordPress development services including custom websites, WooCommerce, and SEO optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmedpixels.com/services" />
        <meta property="og:image" content="https://ahmedpixels.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ahmedpixels.com/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ahmedpixels.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ahmedpixels.com/services" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "WordPress Development Services",
            "provider": {
              "@type": "Person",
              "name": "Ahmed",
              "address": { "@type": "PostalAddress", "addressLocality": "Lahore", "addressCountry": "Pakistan" }
            },
            "serviceType": ["WordPress Development", "WooCommerce Development", "SEO Optimization", "Website Maintenance"],
            "areaServed": "Worldwide",
            "description": "Professional WordPress development services including custom websites, WooCommerce, theme customization, and SEO optimization."
          })}
        </script>
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
                href="https://wa.me/ahmedpixels?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold px-8 py-4 rounded-full mt-8 shadow-lg shadow-primary/30"
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
                  className="relative bg-primary/10 backdrop-blur-sm border border-primary/20 p-8 rounded-3xl group hover:border-primary/40 hover:bg-primary/15 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient accent line at top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <service.icon className="text-primary-foreground" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-hero-text mb-3">
                      {service.title}
                    </h3>
                    <p className="text-hero-muted text-sm mb-5">{service.description}</p>
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-primary-light text-sm"
                        >
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className="text-primary-foreground" size={12} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                  whileHover={{ y: -5 }}
                  className="relative text-center group"
                >
                  {/* Card Container */}
                  <div className="relative bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-6 hover:border-primary/40 hover:bg-primary/15 transition-all duration-300 overflow-hidden">
                    {/* Gradient accent at top */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient}`} />
                    
                    {/* Hover glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="relative inline-block mb-4">
                        <span className={`absolute -top-3 -left-3 text-5xl font-black bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-30`}>
                          {step.number}
                        </span>
                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                          <step.icon className="text-primary-foreground" size={24} />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-hero-text mb-2">{step.title}</h3>
                      <p className="text-hero-muted text-sm">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Connecting line */}
                  {index < processSteps.length - 1 && (
                    <div className={`hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r ${step.gradient} opacity-30`} />
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
                    className="flex items-center gap-3 bg-primary/10 border border-primary/20 p-4 rounded-xl hover:border-primary/40 hover:bg-primary/15 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300"
                  >
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-hero-text font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          title="Ready to Start Your"
          highlight="Project?"
          subtitle="Let's discuss your requirements and create something amazing together. Get a free consultation today!"
          primaryText="Get a Free Quote"
          secondaryText="View My Work"
          secondaryLink="/projects"
        />
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;
