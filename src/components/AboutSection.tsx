import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Quick turnaround without compromising quality",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "SEO-focused development for maximum visibility",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Clear communication and collaborative approach",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always staying updated with latest trends",
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
    <section id="about" className="section-padding bg-section-light" ref={ref}>
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
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
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
                My journey began at <strong className="text-foreground">UAY Brains College, Baghwanpura</strong>, where 
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
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Let's Work Together
                <span>→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-orange rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
