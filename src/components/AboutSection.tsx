import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Target, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Most websites delivered within 1-2 weeks with daily progress updates",
  },
  {
    icon: Target,
    title: "SEO Built-In",
    description: "Every website comes with proper on-page SEO and Google Search Console setup",
  },
  {
    icon: Users,
    title: "40+ Happy Clients",
    description: "Clients from Pakistan, Saudi Arabia, USA, and UK trust my work",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    description: "Staying updated with latest WordPress, WooCommerce, and SEO best practices",
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
                I'm Ahmed, a <strong className="text-foreground">WordPress Developer and SEO Specialist</strong> based 
                in Lahore, Pakistan. Over the past <strong className="text-primary">2+ years</strong>, I've built 
                50+ websites for clients across Pakistan, Saudi Arabia, USA, and the UK — helping them get found on Google and grow their business online.
              </p>
              <p>
                I specialize in <strong className="text-foreground">WooCommerce stores, business websites, 
                Shopify stores, and landing pages</strong> — all built with proper on-page SEO, fast loading speeds, and mobile-first design so your site actually performs where it matters.
              </p>
              <p>
                Whether you need a brand new website or want to fix and optimize an existing one, I handle everything — from <strong className="text-foreground">theme customization and plugin setup to technical SEO and Google Search Console configuration</strong>.
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
