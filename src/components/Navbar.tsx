import { useState, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { lazy, Suspense } from "react";

const ContactFormModal = lazy(() => import("./ContactFormModal"));

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = useCallback((href: string) => location.pathname === href, [location.pathname]);
  const isHomePage = location.pathname === "/";

  const openContactModal = useCallback(() => setIsContactModalOpen(true), []);
  const closeContactModal = useCallback(() => setIsContactModalOpen(false), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? "bg-hero-bg/90 backdrop-blur-xl border-b border-primary/10 shadow-lg"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Gradient line at top */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-300 ${isScrolled || !isHomePage ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className="container-custom px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-20">
            <Link 
              to="/" 
              className="text-2xl font-bold text-hero-text font-space focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg hover:opacity-80 transition-opacity"
              aria-label="Ahmed - Home"
            >
              AHMED<span className="text-gradient">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2" role="menubar">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg px-4 py-2 ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                  role="menuitem"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={openContactModal}
                className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Open contact form"
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
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
              transition={{ duration: 0.2 }}
              className="md:hidden bg-hero-bg/95 backdrop-blur-xl border-t border-primary/10"
              role="menu"
            >
              <div className="container-custom px-8 py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className={`py-3 px-4 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded-xl flex items-center gap-3 ${
                      isActive(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-hero-muted hover:text-white hover:bg-white/5"
                    }`}
                    role="menuitem"
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {isActive(link.href) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    closeMobileMenu();
                    openContactModal();
                  }}
                  className="px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-center mt-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg"
                  aria-label="Open contact form"
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Contact Form Modal - Lazy loaded */}
      {isContactModalOpen && (
        <Suspense fallback={null}>
          <ContactFormModal
            isOpen={isContactModalOpen}
            onClose={closeContactModal}
          />
        </Suspense>
      )}
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
