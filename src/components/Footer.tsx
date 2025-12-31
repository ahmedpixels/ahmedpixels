import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-hero-bg border-t border-border/10">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <a href="#" className="text-2xl font-bold text-hero-text font-space">
              Ahmed<span className="text-primary">.</span>
            </a>
            <p className="text-hero-text/50 text-sm">
              WordPress Developer & SEO Specialist
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-8"
          >
            <a
              href="#about"
              className="text-hero-text/60 hover:text-primary transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-hero-text/60 hover:text-primary transition-colors text-sm"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="text-hero-text/60 hover:text-primary transition-colors text-sm"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-hero-text/60 hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
          </motion.nav>

          {/* Scroll to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center shadow-lg"
          >
            <ArrowUp className="text-primary-foreground" size={20} />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-6 border-t border-border/10"
        >
          <p className="text-center text-hero-text/40 text-sm flex items-center justify-center gap-1">
            © {currentYear} Ahmed. All rights reserved. Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-primary inline" size={14} fill="currentColor" />
            </motion.span>{" "}
            in Lahore, Pakistan
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
