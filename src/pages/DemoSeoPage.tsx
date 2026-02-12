import { memo } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Globe,
  Search,
  ShoppingCart,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import ahmedPortrait from "@/assets/ahmed-portrait.png";
import eleeva from "@/assets/projects/eleevaadhesives.png";
import jeddah from "@/assets/projects/jeddahautospareparts.png";
import rockshine from "@/assets/projects/rockshinegroup.png";
import silkspool from "@/assets/projects/silkspool.png";

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

const DemoSeoPage = memo(() => {
  const pageTitle = `${service} in ${city} | Fast, Secure & SEO-Optimized Websites`;
  const pageDesc = `Looking for a professional ${service.toLowerCase()} in ${city}? I build fast, secure, and conversion-focused WordPress websites. 50+ projects delivered with 100% client satisfaction.`;
  const waLink = `https://wa.me/923216479192?text=${encodeURIComponent(`Hi Ahmed, I need a ${service} in ${city}. Can you share a quote?`)}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`https://ahmedpixels.com/${slug}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ahmedpixels.com/${slug}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service} in ${city}`,
            description: pageDesc,
            provider: {
              "@type": "Person",
              name: "Ahmed",
              url: "https://ahmedpixels.com",
              address: { "@type": "PostalAddress", addressLocality: city, addressCountry: "Pakistan" },
            },
            areaServed: { "@type": "City", name: city },
            serviceType: "WordPress Development",
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

      <main className="min-h-screen bg-[hsl(240,10%,4%)]">
        {/* Breadcrumb */}
        <div className="bg-[hsl(240,10%,7%)] border-b border-white/10">
          <div className="container-custom py-3">
            <nav className="text-sm text-white/50" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li>/</li>
                <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
                <li>/</li>
                <li className="text-white/80 font-medium">{service} in {city}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero — Text Left + Portrait Right */}
        <section className="section-padding bg-[hsl(240,10%,4%)]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left — Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  <MapPin size={16} />
                  <span>{city}, Pakistan</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                  Professional{" "}
                  <span className="text-primary">{service}</span>{" "}
                  in {city}
                </h1>

                <p className="text-lg text-white/60 leading-relaxed mb-8">
                  I build fast, secure, and conversion-focused WordPress websites for businesses in {city}.
                  From custom themes to full e-commerce stores — optimized to rank and convert.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={18} />
                    Get a Free Quote
                  </a>
                  <a
                    href="tel:+923216479192"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 rounded-xl font-semibold text-white hover:bg-white/5 transition-colors"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
                  {[
                    { value: "50+", label: "Projects Delivered" },
                    { value: "100%", label: "Satisfaction" },
                    { value: "3+", label: "Years Experience" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <span className="text-2xl font-bold text-primary">{stat.value}</span>
                      <span className="text-sm text-white/50 ml-2">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right — Portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden lg:flex justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
                  <img
                    src={ahmedPortrait}
                    alt="Ahmed - WordPress Developer & SEO Specialist in Lahore"
                    className="relative w-80 h-80 object-cover rounded-3xl border-2 border-primary/30"
                    loading="eager"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[hsl(240,10%,7%)] border border-white/10 rounded-2xl px-5 py-3 flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-primary text-primary" />
                    ))}
                    <span className="text-sm text-white/70 ml-1">5.0</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-[hsl(240,10%,7%)]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  Why Choose Me as Your {service} in {city}?
                </h2>
                <p className="text-white/55 mb-8 leading-relaxed">
                  With 50+ successful projects and deep expertise in WordPress, I deliver websites that
                  don't just look great — they perform. Every site is built for speed, SEO, and conversions.
                </p>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-white/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[hsl(240,10%,10%)] rounded-2xl border border-white/10 p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <MessageCircle size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">Get a Free Consultation</h3>
                <p className="text-white/55 mb-6 leading-relaxed">
                  Message me on WhatsApp and I'll reply with a custom quote within 24 hours. No forms, no waiting.
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity w-full justify-center"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
                <p className="text-xs text-white/40 mt-4">
                  Or call directly: <a href="tel:+923216479192" className="text-primary font-medium">+92 321 6479192</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="section-padding bg-[hsl(240,10%,4%)]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Recent <span className="text-primary">Projects</span>
              </h2>
              <p className="text-white/55 max-w-2xl mx-auto">
                A selection of WordPress websites I've built for clients across industries.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-colors"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[hsl(240,10%,7%)]">
                    <img
                      src={project.image}
                      alt={`${project.title} - WordPress project by Ahmed`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-white font-heading font-bold text-lg mt-1">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                View All Projects <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-[hsl(240,10%,7%)]">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
              Services I Offer in {city}
            </h2>
            <p className="text-white/55 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive web development and SEO services tailored for businesses in {city}.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((s) => (
                <div
                  key={s.title}
                  className="group p-6 rounded-2xl border border-white/10 bg-[hsl(240,10%,10%)] hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[hsl(240,10%,4%)]">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-white/55 text-center mb-12">
              Common questions about WordPress development services in {city}.
            </p>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-[hsl(240,10%,7%)] overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-white hover:text-primary transition-colors list-none">
                    {faq.q}
                    <ArrowRight size={16} className="shrink-0 text-white/40 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 text-white/55 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Build Your Website in {city}?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Let's discuss your project. Get a free quote within 24 hours — no commitment required.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(240,10%,4%)] text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              WhatsApp Me Now
            </a>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section-padding bg-[hsl(240,10%,4%)]">
          <div className="container-custom">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              Also Available In
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Sialkot"].map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-xl border border-white/10 text-sm text-white/50 hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
                >
                  {service} in {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
});

DemoSeoPage.displayName = "DemoSeoPage";

export default DemoSeoPage;
