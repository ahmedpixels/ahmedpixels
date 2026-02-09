import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const AboutSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-section-light" ref={ref} aria-labelledby="about-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider" id="about-heading">
                About Me
              </span>
            </div>

            <h2 className="heading-lg text-foreground mb-6">
              Building Digital Excellence with{" "}
              <span className="text-gradient">WordPress & SEO</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Ahmed, a passionate <strong className="text-foreground">WordPress Developer and SEO Specialist</strong> based 
                in Lahore, Pakistan. With <strong className="text-primary">2 years of dedicated experience</strong>, I've 
                helped businesses establish powerful online presences that drive real results.
              </p>
              <p>
                My journey began at <strong className="text-foreground">Brains College, Baghwanpura</strong>, where 
                I mastered the intricacies of web development and search engine optimization.
              </p>
              <p>
                I specialize in creating <strong className="text-foreground">E-commerce stores, B2B platforms, 
                Tech websites, Catalogue sites, and Shopify stores</strong>.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg p-1"
                aria-label="Navigate to contact section"
              >
                Let's Work Together
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6" role="list" aria-label="Key highlights">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 overflow-hidden group border border-border/30 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] hover:-translate-y-1"
                role="listitem"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <item.icon className="text-primary-foreground" size={24} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
