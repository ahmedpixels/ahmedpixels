import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Palette, CheckCircle, ArrowRight, Layers, Paintbrush, Monitor, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Paintbrush,
    title: "Brand Identity Design",
    description: "Transform any theme to perfectly match your brand colors, fonts, and visual identity.",
  },
  {
    icon: Layers,
    title: "Layout Customization",
    description: "Modify page layouts, sections, and components to create your unique look.",
  },
  {
    icon: Monitor,
    title: "Responsive Optimization",
    description: "Ensure your customized theme looks perfect on all screen sizes and devices.",
  },
  {
    icon: Sparkles,
    title: "Advanced Features",
    description: "Add custom functionality, animations, and interactive elements to your theme.",
  },
];

const benefits = [
  "Premium Theme Customization",
  "Pixel-Perfect Design Execution",
  "Mobile-First Approach",
  "Brand Consistency Across Pages",
  "Custom Color Schemes",
  "Typography Enhancement",
];

const ThemeCustomizationPage = () => {
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

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
        <title>WordPress Theme Customization | Ahmed</title>
        <meta
          name="description"
          content="Transform premium WordPress themes to match your brand identity with pixel-perfect customizations, mobile optimization, and modern design."
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
              <Link
                to="/services"
                className="text-primary font-semibold text-sm uppercase tracking-wider hover:underline"
              >
                ← Back to Services
              </Link>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mx-auto mt-6 mb-6">
                <Palette className="text-white" size={40} />
              </div>
              <h1 className="heading-xl text-hero-text">
                WordPress Theme{" "}
                <span className="text-gradient">Customization</span>
              </h1>
              <p className="body-lg text-hero-muted mt-6 max-w-2xl mx-auto">
                Transform premium themes to match your brand identity with pixel-perfect
                customizations and modern design enhancements.
              </p>
              <motion.a
                href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I'm%20interested%20in%20Theme%20Customization"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-8 py-4 rounded-full mt-8 shadow-[0_0_30px_rgba(236,72,153,0.4)]"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-section-dark" ref={featuresRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Features
              </span>
              <h2 className="heading-lg text-hero-text mt-4">
                What You <span className="text-gradient">Get</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 gap-8"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-hero-bg/80 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-hero-bg" ref={benefitsRef}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Benefits
                </span>
                <h2 className="heading-lg text-hero-text mt-4">
                  Why Customize Your <span className="text-gradient">Theme?</span>
                </h2>
                <p className="text-hero-muted mt-4">
                  Stand out from competitors with a uniquely branded website that reflects
                  your business personality and values.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={benefitsInView ? "visible" : "hidden"}
                className="space-y-4"
              >
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit}
                    variants={itemVariants}
                    className="flex items-center gap-3 glass-card p-4 rounded-xl"
                  >
                    <CheckCircle className="text-pink-500 flex-shrink-0" size={20} />
                    <span className="text-white font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-section-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-12 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-rose-500" />
              <div className="relative z-10">
                <h2 className="heading-lg text-white">
                  Ready to Transform Your <span className="text-gradient">Theme?</span>
                </h2>
                <p className="text-white/70 mt-4 max-w-xl mx-auto">
                  Let's create a stunning, branded website that perfectly represents your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <motion.a
                    href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I'm%20interested%20in%20Theme%20Customization"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(236,72,153,0.4)]"
                  >
                    Get a Free Quote
                    <ArrowRight size={20} />
                  </motion.a>
                  <Link to="/contact">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 border-2 border-hero-text/20 text-hero-text font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-colors"
                    >
                      Contact Me
                    </motion.span>
                  </Link>
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

export default ThemeCustomizationPage;
