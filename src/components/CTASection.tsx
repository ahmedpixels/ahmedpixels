import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryText?: string;
  secondaryText?: string;
  secondaryLink?: string;
  className?: string;
}

const CTASection = memo(function CTASection({
  title = "Ready to Start Your",
  highlight = "Project?",
  subtitle = "Let's discuss your requirements and create something amazing together. Get a free consultation today!",
  primaryText = "Start Your Project",
  secondaryText = "View Services",
  secondaryLink = "/services",
  className = "",
}: CTASectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`py-16 md:py-20 ${className}`}
    >
      <div className="container-custom px-4 md:px-8">
        <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.15)] bg-hero-bg">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-hero-bg via-section-dark to-primary/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.1),transparent_50%)]" />
          
          {/* Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm mb-6"
            >
              <Sparkles size={16} />
              Let's Connect
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-text mb-4">
              {title} <span className="text-gradient">{highlight}</span>
            </h2>
            <p className="text-hero-muted max-w-2xl mx-auto mb-10 text-lg">
              {subtitle}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/923216479192?text=Hi%20Ahmed%2C%20I%27m%20interested%20in%20discussing%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-shadow"
              >
                {primaryText}
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href={secondaryLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary/40 text-hero-text font-bold px-10 py-4 rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
              >
                {secondaryText}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default CTASection;
