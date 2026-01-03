import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { ShoppingCart, CheckCircle, ArrowRight, CreditCard, Package, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description: "Secure payment processing with popular gateways like Stripe, PayPal, and local payment methods.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Complete product and stock management with automated inventory tracking and alerts.",
  },
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    description: "Comprehensive reports and analytics to track sales, customers, and business growth.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "SSL encryption, secure checkout, and PCI compliance for safe customer transactions.",
  },
];

const benefits = [
  "Complete E-commerce Functionality",
  "Multiple Payment Options",
  "Automated Order Management",
  "Product Variations & Attributes",
  "Shipping & Tax Configuration",
  "Customer Account Management",
];

const WooCommercePage = () => {
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
        <title>WooCommerce & E-commerce Development | Ahmed</title>
        <meta
          name="description"
          content="Launch your online store with WooCommerce. Full e-commerce functionality, secure payments, inventory management, and easy order management."
        />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-hero-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(139_92%_246%/0.1),transparent_50%)]" />
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
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mx-auto mt-6 mb-6">
                <ShoppingCart className="text-white" size={40} />
              </div>
              <h1 className="heading-xl text-hero-text">
                WooCommerce &{" "}
                <span className="text-gradient">E-commerce Development</span>
              </h1>
              <p className="body-lg text-hero-muted mt-6 max-w-2xl mx-auto">
                Launch your online store with full e-commerce functionality, secure payments,
                and easy management tools to grow your business.
              </p>
              <motion.a
                href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I'm%20interested%20in%20WooCommerce%20Development"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold px-8 py-4 rounded-full mt-8 shadow-[0_0_30px_rgba(139,92,246,0.4)]"
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
                  className="bg-hero-bg/80 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                  Why Choose <span className="text-gradient">WooCommerce?</span>
                </h2>
                <p className="text-hero-muted mt-4">
                  WooCommerce powers over 30% of all online stores worldwide. It's flexible,
                  scalable, and perfect for businesses of all sizes.
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
                    <CheckCircle className="text-violet-500 flex-shrink-0" size={20} />
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
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
              <div className="relative z-10">
                <h2 className="heading-lg text-white">
                  Ready to Launch Your <span className="text-gradient">Online Store?</span>
                </h2>
                <p className="text-white/70 mt-4 max-w-xl mx-auto">
                  Let's build a powerful e-commerce platform that drives sales and grows your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <motion.a
                    href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I'm%20interested%20in%20WooCommerce%20Development"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.4)]"
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

export default WooCommercePage;
