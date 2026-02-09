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
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    level: "Expert",
    description: "On-page SEO, meta tags, schema markup, Google Search Console setup, sitemap, and Core Web Vitals optimization",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Stores",
    level: "Advanced",
    description: "Full e-commerce setup with product listings, payment gateways, shipping configuration, and order management",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Building2,
    title: "Business & B2B Websites",
    level: "Advanced",
    description: "Professional corporate websites with service pages, contact forms, WhatsApp integration, and lead generation",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Cpu,
    title: "Speed Optimization",
    level: "Advanced",
    description: "Image optimization, caching setup, lazy loading, database cleanup, and sub-3-second load times",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: LayoutGrid,
    title: "Product Catalogues",
    level: "Advanced",
    description: "Organized product showcase websites with categories, filters, and inquiry forms for manufacturers and wholesalers",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: Store,
    title: "Shopify Stores",
    level: "Advanced",
    description: "Complete Shopify store setup — theme customization, product uploads, payment setup, and basic SEO configuration",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    level: "Expert",
    description: "High-converting single-page websites designed to capture leads with clear CTAs and fast loading speeds",
    gradient: "from-fuchsia-500 to-purple-500",
  },
];

const SkillsSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-hero-bg relative overflow-hidden" ref={ref} aria-labelledby="skills-heading">
      {/* Background effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-semibold text-xs uppercase tracking-[0.15em] mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Skills & Services
          </span>
          <h2 id="skills-heading" className="heading-lg text-hero-text mt-4">
            What I <span className="text-gradient">Bring to the Table</span>
          </h2>
          <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-5">
            From concept to deployment, I deliver comprehensive web solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group premium-card p-7 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${skill.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              {/* Icon */}
              <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`} aria-hidden="true">
                <skill.icon className="text-primary-foreground" size={26} aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-bold text-hero-text text-lg mb-1">{skill.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  {skill.level}
                </span>
                <p className="text-hero-muted text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;