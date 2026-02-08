import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, MapPin, Phone, Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "WordPress Development",
  "SEO Optimization",
  "E-commerce Websites",
  "Shopify Stores",
];

const socialLinks = [
  { icon: Linkedin, href: "https://pk.linkedin.com/in/ahmedpixels", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/itx_ahmed_.0/", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/923216479192?text=Hi%20Ahmed", label: "WhatsApp" },
];

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-hero-bg relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Top Gradient Line */}
      <div className="h-1 bg-primary" aria-hidden="true" />

      <div className="container-custom px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-bold text-hero-text font-space inline-block mb-4">
              AHMED<span className="text-primary">.</span>
            </Link>
            <p className="text-hero-text/60 mb-6 leading-relaxed">
              Crafting high-performance websites that rank and convert.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-hero-text/5 hover:bg-primary/20 border border-border/20 hover:border-primary/30 rounded-xl flex items-center justify-center text-hero-text/60 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={`Follow on ${social.label}`}
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="text-hero-text font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-hero-text/60 hover:text-primary transition-colors duration-300 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/#portfolio"
                  className="text-hero-text/60 hover:text-primary transition-colors duration-300 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                >
                  <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" aria-hidden="true" />
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h4 className="text-hero-text font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3" aria-label="Services offered">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-hero-text/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" aria-hidden="true" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-hero-text font-bold text-lg mb-6">Get In Touch</h4>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                  <span className="text-hero-text/60">Lahore, Pakistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                  <a 
                    href="https://wa.me/923216479192?text=Hi%20Ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hero-text/60 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                    aria-label="Contact via WhatsApp"
                  >
                    +923216479192
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                  <a 
                    href="mailto:info@ahmedpixels.com"
                    className="text-hero-text/60 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                    aria-label="Send email"
                  >
                    info@ahmedpixels.com
                  </a>
                </li>
              </ul>
            </address>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Start a conversation on WhatsApp"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-hero-text/40 text-sm">
            Copyright © {currentYear} All rights reserved.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="text-primary-foreground" size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
