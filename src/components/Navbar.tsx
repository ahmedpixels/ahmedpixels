import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? "bg-hero-bg/90 backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_rgba(138,43,226,0.15)]"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Gradient line at top */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${isScrolled || !isHomePage ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className="container-custom px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Link 
                to="/" 
                className="text-2xl font-bold text-hero-text font-space focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg relative group"
                aria-label="Ahmed - Home"
              >
                <span className="relative z-10">AHMED</span>
                <span className="text-gradient relative z-10" aria-hidden="true">.</span>
                <motion.span 
                  className="absolute -inset-2 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2" role="menubar">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  role="none"
                >
                  <Link
                    to={link.href}
                    className={`relative font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg px-4 py-2 group ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-white/80 hover:text-white"
                    }`}
                    role="menuitem"
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {/* Hover background */}
                    <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActive(link.href) 
                        ? 'bg-primary/15' 
                        : 'bg-transparent group-hover:bg-white/5'
                    }`} />
                    {/* Active indicator dot */}
                    {isActive(link.href) && (
                      <motion.span 
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_2px_hsl(var(--primary))]"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="ml-4"
              >
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="relative px-6 py-2.5 bg-gradient-purple text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-[0_8px_30px_rgba(138,43,226,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background overflow-hidden group"
                  aria-label="Open contact form"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-hero-text p-2.5 focus:outline-none focus:ring-2 focus:ring-primary rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-hero-bg/95 backdrop-blur-2xl border-t border-primary/10"
              role="menu"
            >
              <div className="container-custom px-8 py-6 flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`py-3 px-4 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded-xl flex items-center gap-3 ${
                        isActive(link.href)
                          ? "text-primary bg-primary/10"
                          : "text-hero-muted hover:text-white hover:bg-white/5"
                      }`}
                      role="menuitem"
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      {isActive(link.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_2px_hsl(var(--primary))]" />
                      )}
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="px-6 py-3.5 bg-gradient-purple text-primary-foreground rounded-xl font-semibold text-center mt-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg"
                  aria-label="Open contact form"
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
