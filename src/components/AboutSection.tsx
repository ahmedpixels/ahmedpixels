import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Target, Users, Zap, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Most websites delivered within 1-2 weeks with daily progress updates",
    number: "01",
  },
  {
    icon: Target,
    title: "SEO Built-In",
    description: "Every website comes with proper on-page SEO and Google Search Console setup",
    number: "02",
  },
  {
    icon: Users,
    title: "40+ Happy Clients",
    description: "Clients from Pakistan, Saudi Arabia, USA, and UK trust my work",
    number: "03",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    description: "Staying updated with latest WordPress, WooCommerce, and SEO best practices",
    number: "04",
  },
];

const AboutSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-section-dark relative overflow-hidden" ref={ref} aria-labelledby="about-heading">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-semibold text-xs uppercase tracking-[0.15em]" id="about-heading">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                About Me
              </span>
            </div>

            <h2 className="heading-lg text-hero-text mb-8">
              Building Digital Excellence with{" "}
              <span className="text-gradient">WordPress & SEO</span>
            </h2>

            <div className="space-y-5 text-hero-muted text-lg leading-relaxed">
              <p>
                I'm Ahmed, a <strong className="text-hero-text font-semibold">WordPress Developer and SEO Specialist</strong> based 
                in Lahore, Pakistan. Over the past <strong className="text-primary font-semibold">2+ years</strong>, I've built 
                50+ websites for clients across Pakistan, Saudi Arabia, USA, and the UK — helping them get found on Google and grow their business online.
              </p>
              <p>
                I specialize in <strong className="text-hero-text font-semibold">WooCommerce stores, business websites, 
                Shopify stores, and landing pages</strong> — all built with proper on-page SEO, fast loading speeds, and mobile-first design so your site actually performs where it matters.
              </p>
              <p>
                Whether you need a brand new website or want to fix and optimize an existing one, I handle everything — from <strong className="text-hero-text font-semibold">theme customization and plugin setup to technical SEO and Google Search Console configuration</strong>.
              </p>
            </div>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-primary font-semibold text-lg hover:gap-5 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg p-1"
                aria-label="Navigate to contact section"
              >
                Let's Work Together
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Premium Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-5" role="list" aria-label="Key highlights">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="premium-card p-7 group hover:-translate-y-2 transition-all duration-500"
                role="listitem"
              >
                <div className="relative z-10">
                  {/* Number watermark */}
                  <span className="absolute -top-2 -right-1 text-5xl font-black text-primary/5 select-none">{item.number}</span>
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500" aria-hidden="true">
                    <item.icon className="text-primary-foreground" size={26} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-hero-text text-lg mb-2">{item.title}</h3>
                  <p className="text-hero-muted text-sm leading-relaxed">{item.description}</p>
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