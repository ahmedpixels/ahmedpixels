import { memo, useRef, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import {
  Globe,
  Search,
  ShoppingCart,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  Quote,
  Sparkles,
} from "lucide-react";

import ahmedPortrait from "@/assets/ahmed-portrait.png";
import eleeva from "@/assets/projects/eleevaadhesives.png";
import jeddah from "@/assets/projects/jeddahautospareparts.png";
import rockshine from "@/assets/projects/rockshinegroup.png";
import silkspool from "@/assets/projects/silkspool.png";

const ParticlesBackground = lazy(() => import("@/components/ParticlesBackground"));

// Demo data — in full system this comes from DB
const city = "Lahore";
const service = "WordPress Developer";
const slug = "wordpress-developer-in-lahore";

const benefits = [
  "Custom WordPress themes tailored to your brand",
  "Mobile-responsive, fast-loading websites",
  "WooCommerce & e-commerce integration",
  "On-page SEO optimization included",
  "Ongoing maintenance & support",
  "Google Analytics & Search Console setup",
];

const relatedServices = [
  { icon: Globe, title: "WordPress Development", desc: "Custom themes, plugins & full-stack WordPress solutions" },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google with proven SEO strategies" },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "WooCommerce stores that convert visitors into buyers" },
  { icon: Cpu, title: "Technical SEO", desc: "Speed optimization, schema markup & core web vitals" },
];

const projects = [
  { title: "Eleeva Adhesives", category: "Corporate Website", image: eleeva },
  { title: "Jeddah Auto Spare Parts", category: "E-commerce", image: jeddah },
  { title: "Rockshine Group", category: "Corporate Website", image: rockshine },
  { title: "SilkSpool", category: "E-commerce", image: silkspool },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, TechStart Inc.", content: "Ahmed transformed our outdated website into a modern, SEO-optimized platform. Our organic traffic increased by 200% within 3 months.", avatar: "SM" },
  { name: "Michael Chen", role: "Founder, E-Commerce Hub", content: "Working with Ahmed was a game-changer for our online store. He built a fast, beautiful WooCommerce site that our customers love.", avatar: "MC" },
  { name: "Fatima Al-Hassan", role: "Marketing Director", content: "Ahmed delivered our B2B platform ahead of schedule and under budget. His WordPress expertise helped us rank #1 for our target keywords.", avatar: "FA" },
];

const faqs = [
  {
    q: `How much does a WordPress website cost in ${city}?`,
    a: `WordPress website costs in ${city} range from PKR 30,000 for a basic site to PKR 200,000+ for complex e-commerce stores. The final price depends on features, design complexity, and functionality required.`,
  },
  {
    q: `How long does it take to build a WordPress site in ${city}?`,
    a: `A standard WordPress website takes 1–3 weeks. Simple landing pages can be delivered in 5–7 days, while feature-rich e-commerce stores may take 3–4 weeks.`,
  },
  {
    q: `Do you provide WordPress maintenance in ${city}?`,
    a: `Yes. I offer monthly maintenance packages that include security updates, backups, performance monitoring, and technical support for businesses in ${city}.`,
  },
  {
    q: `Can you redesign my existing WordPress site?`,
    a: `Absolutely. I can audit your current site, identify improvements, and deliver a modern redesign that improves speed, SEO, and conversions.`,
  },
];

const StarRating = memo(({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={14} className="fill-primary text-primary" />
    ))}
  </div>
));
StarRating.displayName = "StarRating";

const DemoSeoPage = memo(() => {
  const pageTitle = `${service} in ${city} | Fast, Secure & SEO-Optimized Websites`;
  const pageDesc = `Looking for a professional ${service.toLowerCase()} in ${city}? I build fast, secure, and conversion-focused WordPress websites. 50+ projects delivered with 100% client satisfaction.`;
  const waLink = `https://wa.me/923216479192?text=${encodeURIComponent(`Hi Ahmed, I need a ${service} in ${city}. Can you share a quote?`)}`;

  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const portfolioRef = useRef(null);
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`https://ahmedpixels.com/${slug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ahmedpixels.com/${slug}`} />
        <meta property="og:image" content="https://ahmedpixels.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Ahmed - WordPress Developer" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content="https://ahmedpixels.com/og-image.png" />
        <meta name="twitter:creator" content="@ahmedpixels" />

        {/* Additional SEO */}
        <meta name="keywords" content={`WordPress Developer ${city}, Web Developer ${city}, WooCommerce Developer ${city}, SEO Expert ${city}, Website Development ${city}, WordPress Developer Pakistan`} />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content={city} />
        <meta name="author" content="Ahmed" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service} in ${city}`,
            description: pageDesc,
            url: `https://ahmedpixels.com/${slug}`,
            provider: {
              "@type": "Person",
              name: "Ahmed",
              url: "https://ahmedpixels.com",
              telephone: "+923216479192",
              email: "ahmedpixelspro@gmail.com",
              image: "https://ahmedpixels.com/favicon.png",
              address: { "@type": "PostalAddress", addressLocality: city, addressRegion: "Punjab", addressCountry: "PK" },
              sameAs: ["https://pk.linkedin.com/in/ahmedpixels", "https://www.instagram.com/itx_ahmed_.0/"],
            },
            areaServed: { "@type": "City", name: city, containedInPlace: { "@type": "Country", name: "Pakistan" } },
            serviceType: "WordPress Development",
            aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "50", bestRating: "5" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ahmedpixels.com" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://ahmedpixels.com/services" },
              { "@type": "ListItem", position: 3, name: `${service} in ${city}` },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="overflow-x-hidden" id="main-content">
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center">
          <Suspense fallback={null}>
            <ParticlesBackground />
          </Suspense>

          {/* Gradient bg */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <div className="container-custom relative z-10 px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-28">
              {/* Left Content */}
              <div className="order-2 lg:order-1 animate-fade-in">
                {/* Breadcrumb */}
                <nav className="text-sm text-hero-muted/50 mb-5" aria-label="Breadcrumb">
                  <ol className="flex items-center gap-1.5 flex-wrap">
                    <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                    <li className="text-hero-muted/30">/</li>
                    <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
                    <li className="text-hero-muted/30">/</li>
                    <li className="text-primary font-medium">{service} in {city}</li>
                  </ol>
                </nav>

                {/* Location Badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <MapPin size={16} className="text-primary" />
                    <span className="text-sm text-hero-muted">{city}, Pakistan</span>
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                  </div>
                </div>

                <p className="text-hero-muted text-xl mb-3 font-light">
                  <span className="text-primary">&lt;</span> Professional {service} <span className="text-primary">/&gt;</span>
                </p>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-2">
                  <span className="text-gradient inline-block">{service}</span>
                </h1>
                <div className="text-3xl md:text-4xl font-bold text-hero-text/80 mb-6">
                  in {city}
                </div>

                <div className="relative mb-10 max-w-lg">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                  <p className="text-hero-muted text-lg leading-relaxed pl-2">
                    I build fast, secure, and conversion-focused WordPress websites for businesses in {city}.
                    From custom themes to full e-commerce stores — optimized to rank and convert.
                  </p>
                </div>

                {/* CTA */}
                <nav className="flex flex-wrap gap-4" aria-label="Primary actions">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-transform hover:scale-105 shadow-lg shadow-primary/30"
                  >
                    <MessageCircle size={18} className="inline mr-2" />
                    Get a Free Quote
                  </a>
                  <a
                    href="tel:+923216479192"
                    className="group relative px-8 py-4 bg-transparent text-hero-text rounded-full font-semibold border border-primary/30 hover:border-primary/60 transition-colors"
                  >
                    <Phone size={18} className="inline mr-2" />
                    Call Now
                  </a>
                </nav>

                {/* Stats */}
                <div className="flex gap-8 mt-12 pt-8 border-t border-hero-text/10">
                  {[
                    { number: "50+", label: "Projects" },
                    { number: "100%", label: "Satisfaction" },
                    { number: "3+", label: "Years Exp." },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-hero-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Portrait with rings */}
              <motion.div
                className="order-1 lg:order-2 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-[-20px] rounded-full border-2 border-dashed border-primary/20" />
                  <div className="absolute inset-[-40px] rounded-full border border-primary/10" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-90" />

                  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                    <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-primary/50">
                      <div className="w-full h-full rounded-full bg-hero-bg" />
                    </div>
                    <div className="absolute inset-3 rounded-full overflow-hidden">
                      <OptimizedImage
                        src={ahmedPortrait}
                        alt={`Ahmed - ${service} in ${city}`}
                        className="w-full h-full object-cover"
                        priority={true}
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <a
              href="#benefits"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
              <ArrowDown size={18} className="animate-bounce" />
            </a>
          </div>
        </section>

        {/* ═══════════════════════ BENEFITS ═══════════════════════ */}
        <section id="benefits" className="section-padding bg-section-dark" ref={benefitsRef}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Me</span>
                <h2 className="heading-lg text-hero-text mt-4 mb-6">
                  Your {service} in <span className="text-gradient">{city}</span>
                </h2>
                <p className="text-hero-muted mb-8 leading-relaxed">
                  With 50+ successful projects and deep expertise in WordPress, I deliver websites that
                  don't just look great — they perform. Every site is built for speed, SEO, and conversions.
                </p>
                <ul className="space-y-4">
                  {benefits.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-hero-muted">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* WhatsApp CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative rounded-2xl p-8 text-center overflow-hidden border border-primary/20 bg-hero-bg/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-5">
                    <MessageCircle size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-hero-text mb-3">Get a Free Consultation</h3>
                  <p className="text-hero-muted mb-6 leading-relaxed">
                    Message me on WhatsApp and I'll reply with a custom quote within 24 hours. No forms, no waiting.
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-transform w-full justify-center"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                  <p className="text-xs text-hero-muted/60 mt-4">
                    Or call directly: <a href="tel:+923216479192" className="text-primary font-medium">+92 321 6479192</a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ PORTFOLIO ═══════════════════════ */}
        <section className="section-padding bg-hero-bg" ref={portfolioRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
              <h2 className="heading-lg text-hero-text mt-4">
                Recent <span className="text-gradient">Projects</span>
              </h2>
              <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-4">
                A selection of WordPress websites built for clients across industries.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden border border-border/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-section-dark">
                    <img
                      src={project.image}
                      alt={`${project.title} - WordPress project by Ahmed in ${city}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-hero-text font-bold text-lg mt-1">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
              >
                View All Projects <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ SERVICES ═══════════════════════ */}
        <section className="section-padding bg-section-dark" ref={servicesRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Services</span>
              <h2 className="heading-lg text-hero-text mt-4">
                What I Offer in <span className="text-gradient">{city}</span>
              </h2>
              <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-4">
                Comprehensive web development and SEO services tailored for businesses in {city}.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((s, index) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-hero-bg/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-border/20 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <s.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="font-bold text-hero-text text-lg mb-2">{s.title}</h3>
                  <p className="text-hero-muted text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
        <section className="section-padding bg-hero-bg" ref={testimonialsRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="heading-lg text-hero-text mt-4">
                What Clients <span className="text-gradient">Say</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative bg-hero-bg/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-colors"
                >
                  <Quote size={24} className="text-primary/30 mb-4" />
                  <p className="text-hero-muted text-sm leading-relaxed mb-6">"{t.content}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xs font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-hero-text font-semibold text-sm">{t.name}</div>
                      <div className="text-hero-muted text-xs">{t.role}</div>
                    </div>
                    <div className="ml-auto">
                      <StarRating />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ FAQ ═══════════════════════ */}
        <section className="section-padding bg-section-dark" ref={faqRef}>
          <div className="container-custom max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="heading-lg text-hero-text mt-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-4">
                Common questions about WordPress development in {city}.
              </p>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative bg-hero-bg/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/20 hover:border-primary/30 transition-colors"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/60" />
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-hero-text hover:text-primary transition-colors list-none">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {faq.q}
                    </span>
                    <ArrowRight size={16} className="shrink-0 text-hero-muted group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 text-hero-muted leading-relaxed pl-[4.25rem]">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CTA ═══════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 md:py-20"
        >
          <div className="container-custom px-4 md:px-8">
            <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.15)] bg-hero-bg">
              <div className="absolute inset-0 bg-gradient-to-br from-hero-bg via-section-dark to-primary/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.1),transparent_50%)]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />

              <div className="relative z-10">
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
                  Ready to Build Your <span className="text-gradient">Website in {city}?</span>
                </h2>
                <p className="text-hero-muted max-w-2xl mx-auto mb-10 text-lg">
                  Let's discuss your project. Get a free quote within 24 hours — no commitment required.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-shadow"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Me Now
                    <ArrowRight size={20} />
                  </motion.a>
                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary/40 text-hero-text font-bold px-10 py-4 rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                  >
                    View Services
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══════════════════════ INTERNAL LINKS ═══════════════════════ */}
        <section className="section-padding bg-section-dark">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-hero-text mb-6">
              Also Available In
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Sialkot"].map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full border border-border/20 text-sm text-hero-muted hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
                >
                  {service} in {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
});

DemoSeoPage.displayName = "DemoSeoPage";

export default DemoSeoPage;
