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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? "bg-hero-bg/95 backdrop-blur-xl border-b border-border/10"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-20">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to="/" 
                className="text-2xl font-bold text-hero-text font-space focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg"
                aria-label="Ahmed - Home"
              >
                AHMED<span className="text-primary" aria-hidden="true">.</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8" role="menubar">
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
                    className={`font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg px-2 py-1 ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                    role="menuitem"
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-6 py-2.5 bg-gradient-orange text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Open contact form"
                >
                  Get In Touch
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-hero-text p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
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
              className="md:hidden bg-hero-bg/95 backdrop-blur-xl border-t border-border/10"
              role="menu"
            >
              <div className="container-custom px-8 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-hero-muted hover:text-primary"
                    }`}
                    role="menuitem"
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="px-6 py-3 bg-gradient-orange text-primary-foreground rounded-full font-semibold text-center mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Open contact form"
                >
                  Get In Touch
                </button>
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
