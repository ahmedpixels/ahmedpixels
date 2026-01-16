import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Quick turnaround without compromising quality",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "SEO-focused development for maximum visibility",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Clear communication and collaborative approach",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always staying updated with latest trends",
    gradient: "from-pink-500 to-rose-500",
  },
];

const AboutSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="about" className="section-padding bg-section-light" ref={ref} aria-labelledby="about-heading">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider" id="about-heading">
                About Me
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="heading-lg text-foreground mb-6">
              Building Digital Excellence with{" "}
              <span className="text-gradient">WordPress & SEO</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Ahmed, a passionate <strong className="text-foreground">WordPress Developer and SEO Specialist</strong> based 
                in Lahore, Pakistan. With <strong className="text-primary">2 years of dedicated experience</strong>, I've 
                helped businesses establish powerful online presences that drive real results.
              </p>
              <p>
                My journey began at <strong className="text-foreground">Brains College, Baghwanpura</strong>, where 
                I mastered the intricacies of web development and search engine optimization. Since then, 
                I've been transforming ideas into high-performing websites.
              </p>
              <p>
                I specialize in creating <strong className="text-foreground">E-commerce stores, B2B platforms, 
                Tech websites, Catalogue sites, and Shopify stores</strong>. Every project I undertake is 
                built with a focus on performance, user experience, and search visibility.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg p-1"
                aria-label="Navigate to contact section"
              >
                Let's Work Together
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-6"
            role="list"
            aria-label="Key highlights"
          >
            {highlights.map((item) => (
              <motion.article
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-hero-bg/60 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300 overflow-hidden group"
                role="listitem"
              >
                {/* Gradient accent at top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} aria-hidden="true" />
                
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} aria-hidden="true" />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`} aria-hidden="true">
                    <item.icon className="text-white" size={24} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
