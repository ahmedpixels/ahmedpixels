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
    level: "Expert",
    description: "Custom themes, theme customization, plugin configuration, and complete WordPress site builds from scratch",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    level: "Expert",
    description: "On-page SEO, meta tags, schema markup, Google Search Console setup, sitemap, and Core Web Vitals optimization",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Stores",
    level: "Advanced",
    description: "Full e-commerce setup with product listings, payment gateways, shipping configuration, and order management",
  },
  {
    icon: Building2,
    title: "Business & B2B Websites",
    level: "Advanced",
    description: "Professional corporate websites with service pages, contact forms, WhatsApp integration, and lead generation",
  },
  {
    icon: Cpu,
    title: "Speed Optimization",
    level: "Advanced",
    description: "Image optimization, caching setup, lazy loading, database cleanup, and sub-3-second load times",
  },
  {
    icon: LayoutGrid,
    title: "Product Catalogues",
    level: "Advanced",
    description: "Organized product showcase websites with categories, filters, and inquiry forms for manufacturers and wholesalers",
  },
  {
    icon: Store,
    title: "Shopify Stores",
    level: "Advanced",
    description: "Complete Shopify store setup — theme customization, product uploads, payment setup, and basic SEO configuration",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    level: "Expert",
    description: "High-converting single-page websites designed to capture leads with clear CTAs and fast loading speeds",
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
              className="group relative bg-hero-bg/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-border/20 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300" aria-hidden="true">
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
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
