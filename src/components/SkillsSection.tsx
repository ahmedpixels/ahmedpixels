import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  },
  {
    icon: Search,
    title: "SEO Optimization",
    level: "Expert",
    description: "On-page, technical, and performance optimization",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    level: "Advanced",
    description: "WooCommerce and custom e-commerce solutions",
  },
  {
    icon: Building2,
    title: "B2B Websites",
    level: "Advanced",
    description: "Professional corporate and business platforms",
  },
  {
    icon: Cpu,
    title: "Tech Websites",
    level: "Advanced",
    description: "Technology-focused sites with modern aesthetics",
  },
  {
    icon: LayoutGrid,
    title: "Catalogue Websites",
    level: "Advanced",
    description: "Product showcases and digital catalogues",
  },
  {
    icon: Store,
    title: "Shopify Stores",
    level: "Proficient",
    description: "Complete Shopify store setup and customization",
  },
  {
    icon: FileText,
    title: "Single & Multi-page Sites",
    level: "Expert",
    description: "Landing pages to complex multi-page applications",
  },
];

const SkillsSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-section-dark" ref={ref} aria-labelledby="skills-heading">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Skills & Services
          </span>
          <h2 id="skills-heading" className="heading-lg text-hero-text mt-4">
            What I <span className="text-gradient">Bring to the Table</span>
          </h2>
          <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-4">
            From concept to deployment, I deliver comprehensive web solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-hero-bg/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-border/20 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300" aria-hidden="true">
                <skill.icon className="text-primary" size={28} aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-hero-text text-lg mb-1">{skill.title}</h3>
              <span className="text-primary text-sm font-medium">{skill.level}</span>
              <p className="text-hero-muted text-sm mt-3 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
