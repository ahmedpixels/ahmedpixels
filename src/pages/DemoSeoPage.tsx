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
} from "lucide-react";

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
              address: {
                "@type": "PostalAddress",
                addressLocality: city,
                addressCountry: "Pakistan",
              },
            },
            areaServed: {
              "@type": "City",
              name: city,
            },
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

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-card border-b border-border">
          <div className="container-custom py-3">
            <nav className="text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li>/</li>
                <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
                <li>/</li>
                <li className="text-foreground font-medium">{service} in {city}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  <MapPin size={16} />
                  <span>{city}, Pakistan</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
                  Professional{" "}
                  <span className="text-primary">{service}</span>{" "}
                  in {city}
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  I build fast, secure, and conversion-focused WordPress websites for businesses in {city}.
                  From custom themes to full e-commerce stores — your website will be optimized to rank on Google and convert visitors into customers.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/923216479192?text=Hi%20Ahmed%2C%20I%20need%20a%20WordPress%20developer%20in%20Lahore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={18} />
                    Get a Free Quote
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-semibold text-foreground hover:bg-card transition-colors"
                  >
                    <Phone size={18} />
                    Contact Me
                  </a>
                </div>
              </motion.div>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-border"
              >
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "3+", label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1 ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Why Choose Me as Your {service} in {city}?
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  With 50+ successful projects and deep expertise in WordPress, I deliver websites that
                  don't just look great — they perform. Every site is built for speed, SEO, and conversions.
                </p>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background rounded-2xl border border-border p-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Get a Free Consultation</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell me about your project and I'll send you a custom quote within 24 hours.
                </p>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="tel" placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <textarea placeholder="Tell me about your project..." rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Send Message <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
              Services I Offer in {city}
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Comprehensive web development and SEO services tailored for businesses in {city}.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((s) => (
                <div
                  key={s.title}
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-card">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Common questions about WordPress development services in {city}.
            </p>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-background overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-foreground hover:text-primary transition-colors list-none">
                    {faq.q}
                    <ArrowRight size={16} className="shrink-0 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
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
              href="https://wa.me/923216479192?text=Hi%20Ahmed%2C%20I%20need%20a%20WordPress%20developer%20in%20Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              WhatsApp Me Now
            </a>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
              Also Available In
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Sialkot"].map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
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
