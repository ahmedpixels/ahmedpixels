import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Search,
  ShoppingCart,
  Building2,
  Cpu,
  LayoutGrid,
  Store,
  FileText,
} from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "WordPress Development",
    level: "Advanced",
    description: "Custom themes, plugins, and complex WordPress solutions",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    level: "Expert",
    description: "On-page, technical, and performance optimization",
    color: "from-orange-600 to-red-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    level: "Advanced",
    description: "WooCommerce and custom e-commerce solutions",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Building2,
    title: "B2B Websites",
    level: "Advanced",
    description: "Professional corporate and business platforms",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Cpu,
    title: "Tech Websites",
    level: "Advanced",
    description: "Technology-focused sites with modern aesthetics",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: LayoutGrid,
    title: "Catalogue Websites",
    level: "Advanced",
    description: "Product showcases and digital catalogues",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Store,
    title: "Shopify Stores",
    level: "Proficient",
    description: "Complete Shopify store setup and customization",
    color: "from-amber-600 to-orange-600",
  },
  {
    icon: FileText,
    title: "Single & Multi-page Sites",
    level: "Expert",
    description: "Landing pages to complex multi-page applications",
    color: "from-orange-400 to-red-400",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section id="skills" className="section-padding bg-section-dark" ref={ref} aria-labelledby="skills-heading">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Skills & Services
          </span>
          <h2 id="skills-heading" className="heading-lg text-hero-text mt-4">
            What I <span className="text-gradient">Bring to the Table</span>
          </h2>
          <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-4">
            From concept to deployment, I deliver comprehensive web solutions 
            that help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-hero-bg/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 overflow-hidden gradient-border-card glow-border"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                <skill.icon className="text-primary-foreground" size={28} aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-hero-text text-lg mb-1">{skill.title}</h3>
              <span className="text-primary text-sm font-medium">{skill.level}</span>
              <p className="text-hero-muted text-sm mt-3 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
