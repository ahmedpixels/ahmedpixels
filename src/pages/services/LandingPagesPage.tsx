import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Target, CheckCircle, ArrowRight, MousePointer, FileText, BarChart, Repeat } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: MousePointer,
    title: "High-Converting Design",
    description: "Strategically designed layouts that guide visitors toward your desired action.",
  },
  {
    icon: FileText,
    title: "Compelling Copy",
    description: "Persuasive content that communicates your value proposition and drives conversions.",
  },
  {
    icon: BarChart,
    title: "Analytics Integration",
    description: "Built-in tracking to measure performance, conversions, and user behavior.",
  },
  {
    icon: Repeat,
    title: "A/B Testing Ready",
    description: "Easily test different versions to optimize for maximum conversion rates.",
  },
];

const benefits = [
  "Optimized for Lead Generation",
  "Mobile-Responsive Design",
  "Fast Loading Speed",
  "Clear Call-to-Actions",
  "Form Integration & Validation",
  "Social Proof Elements",
];

const LandingPagesPage = () => {
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
        <title>Landing Pages & Marketing Pages | Ahmed</title>
        <meta
          name="description"
          content="Create high-converting landing pages designed to capture leads and drive business results with CTA optimization and A/B testing."
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
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mt-6 mb-6">
                <Target className="text-white" size={40} />
              </div>
              <h1 className="heading-xl text-hero-text">
                Landing Pages &{" "}
                <span className="text-gradient">Marketing Pages</span>
              </h1>
              <p className="body-lg text-hero-muted mt-6 max-w-2xl mx-auto">
                Create high-converting landing pages designed to capture leads and drive
                business results with optimized CTAs and compelling design.
              </p>
              <motion.a
                href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I'm%20interested%20in%20Landing%20Page%20Development"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full mt-8 shadow-[0_0_30px_rgba(245,158,11,0.4)]"
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
                  className="bg-hero-bg/80 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                  Why Landing Pages <span className="text-gradient">Work?</span>
                </h2>
                <p className="text-hero-muted mt-4">
                  Focused landing pages convert 5-10x better than regular website pages
                  because they're designed with a single goal in mind.
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
                    <CheckCircle className="text-amber-500 flex-shrink-0" size={20} />
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
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600" />
              <div className="relative z-10">
                <h2 className="heading-lg text-white">
                  Ready to Boost Your <span className="text-gradient">Conversions?</span>
                </h2>
                <p className="text-white/70 mt-4 max-w-xl mx-auto">
                  Let's create a high-converting landing page that captures leads and grows your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <motion.a
                    href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I'm%20interested%20in%20Landing%20Page%20Development"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)]"
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

export default LandingPagesPage;
