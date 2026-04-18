import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import OptimizedImage from "@/components/OptimizedImage";
import ahmedPortrait from "@/assets/ahmed-portrait-optimized.jpg";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Globe,
  Award,
  Briefcase,
  Code2,
  Search,
  ShoppingBag,
  CheckCircle2,
  ExternalLink,
  Calendar,
} from "lucide-react";

const AboutPage = () => {
  const facts = [
    { label: "Full Name", value: "Ahmed (Ahmed Pixels)" },
    { label: "Profession", value: "WordPress Developer & SEO Specialist" },
    { label: "Location", value: "Lahore, Punjab, Pakistan" },
    { label: "Experience", value: "2+ Years Professional" },
    { label: "Projects Delivered", value: "50+ Successful Websites" },
    { label: "Languages", value: "English, Urdu, Punjabi" },
  ];

  const expertise = [
    { icon: Code2, title: "WordPress Development", desc: "Custom themes, plugins, and full website builds" },
    { icon: ShoppingBag, title: "WooCommerce & Shopify", desc: "E-commerce stores with payment integration" },
    { icon: Search, title: "SEO Optimization", desc: "Technical SEO, on-page, and Google rankings" },
    { icon: Globe, title: "B2B & Catalogue Sites", desc: "Enterprise-grade business platforms" },
  ];

  const socialProfiles = [
    { name: "LinkedIn", url: "https://pk.linkedin.com/in/ahmedpixels", icon: Linkedin },
    { name: "Website", url: "https://ahmedpixels.com", icon: Globe },
    { name: "WhatsApp", url: "https://wa.me/ahmedpixels", icon: Phone },
    { name: "Email", url: "mailto:info@ahmedpixels.com", icon: Mail },
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ahmedpixels.com/#ahmedpixels",
    "name": "Ahmed Pixels",
    "alternateName": ["Ahmed", "AhmedPixels", "Ahmed Pixels Developer"],
    "description":
      "Ahmed Pixels is a professional WordPress Developer and SEO Specialist based in Lahore, Pakistan with 2+ years of experience and 50+ successful projects delivered.",
    "url": "https://ahmedpixels.com/about",
    "image": "https://ahmedpixels.com/og-image.png",
    "jobTitle": "WordPress Developer & SEO Specialist",
    "gender": "Male",
    "nationality": { "@type": "Country", "name": "Pakistan" },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK",
    },
    "email": "info@ahmedpixels.com",
    "worksFor": {
      "@type": "Organization",
      "name": "Ahmed Pixels",
      "url": "https://ahmedpixels.com",
    },
    "knowsAbout": [
      "WordPress Development",
      "WooCommerce",
      "Shopify Development",
      "SEO (Search Engine Optimization)",
      "Technical SEO",
      "On-Page SEO",
      "E-commerce Development",
      "B2B Website Development",
      "Web Performance Optimization",
      "PHP",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Elementor",
      "Custom WordPress Themes",
    ],
    "knowsLanguage": [
      { "@type": "Language", "name": "English" },
      { "@type": "Language", "name": "Urdu" },
      { "@type": "Language", "name": "Punjabi" },
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "WordPress Developer & SEO Specialist",
      "occupationLocation": { "@type": "City", "name": "Lahore, Pakistan" },
      "skills": "WordPress, WooCommerce, Shopify, SEO, PHP, JavaScript, Elementor",
    },
    "sameAs": [
      "https://pk.linkedin.com/in/ahmedpixels",
      "https://ahmedpixels.com",
      "https://wa.me/ahmedpixels",
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "About Ahmed Pixels",
    "description":
      "Official profile of Ahmed Pixels - WordPress Developer & SEO Specialist from Lahore, Pakistan.",
    "url": "https://ahmedpixels.com/about",
    "mainEntity": { "@id": "https://ahmedpixels.com/#ahmedpixels" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ahmedpixels.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ahmedpixels.com/about" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>About Ahmed Pixels | WordPress Developer & SEO Specialist Lahore</title>
        <meta
          name="description"
          content="Ahmed Pixels is a professional WordPress Developer and SEO Specialist from Lahore, Pakistan. 2+ years experience, 50+ projects delivered. Know more about Ahmed Pixels."
        />
        <meta
          name="keywords"
          content="Ahmed Pixels, who is Ahmed Pixels, ahmedpixels, Ahmed WordPress Developer, Ahmed SEO Specialist Lahore, Ahmed Pakistan, Ahmed Pixels Lahore, ahmedpixels.com"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Ahmed Pixels" />
        <link rel="canonical" href="https://ahmedpixels.com/about" />

        <meta property="og:title" content="About Ahmed Pixels | Official Profile" />
        <meta
          property="og:description"
          content="Official profile of Ahmed Pixels - WordPress Developer & SEO Specialist from Lahore, Pakistan with 2+ years experience and 50+ projects delivered."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ahmedpixels.com/about" />
        <meta property="og:image" content="https://ahmedpixels.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ahmed Pixels - WordPress Developer & SEO Specialist" />
        <meta property="profile:first_name" content="Ahmed" />
        <meta property="profile:last_name" content="Pixels" />
        <meta property="profile:username" content="ahmedpixels" />
        <meta property="profile:gender" content="male" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Ahmed Pixels" />
        <meta name="twitter:description" content="WordPress Developer & SEO Specialist from Lahore, Pakistan." />
        <meta name="twitter:image" content="https://ahmedpixels.com/og-image.png" />

        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(profilePageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-hero-bg pt-32 pb-20">
        <div className="container-custom px-8 md:px-12 lg:px-16 xl:px-24">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
            aria-labelledby="about-heading"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-44 h-44 md:w-52 md:h-52 mx-auto mb-8"
            >
              <motion.div
                className="absolute inset-[-12px] rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[60px] scale-90" />
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-primary/50">
                <div className="w-full h-full rounded-full bg-hero-bg" />
              </div>
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <OptimizedImage
                  src={ahmedPortrait}
                  alt="Ahmed Pixels - Official Profile Photo - WordPress Developer & SEO Specialist Lahore Pakistan"
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
            </motion.div>

            <span className="text-primary font-semibold mb-4 block uppercase tracking-wider text-sm">
              Official Profile
            </span>
            <h1 id="about-heading" className="heading-xl text-hero-text mb-6">
              About <span className="text-gradient">Ahmed Pixels</span>
            </h1>
            <p className="text-hero-muted text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Ahmed Pixels is a professional <strong className="text-hero-text">WordPress Developer</strong> and{" "}
              <strong className="text-hero-text">SEO Specialist</strong> based in{" "}
              <strong className="text-hero-text">Lahore, Pakistan</strong>. With over 2 years of hands-on experience,
              Ahmed Pixels has successfully delivered 50+ websites — specializing in custom WordPress development,
              WooCommerce stores, Shopify, and search engine optimization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-hero-muted">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> Lahore, Pakistan
              </span>
              <span className="flex items-center gap-2">
                <Briefcase size={16} className="text-primary" /> 2+ Years
              </span>
              <span className="flex items-center gap-2">
                <Award size={16} className="text-primary" /> 50+ Projects
              </span>
            </div>
          </motion.section>

          {/* Quick Facts */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            aria-labelledby="facts-heading"
          >
            <h2 id="facts-heading" className="text-3xl font-bold text-hero-text text-center mb-10">
              Quick Facts About <span className="text-gradient">Ahmed Pixels</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-primary/10 border border-primary/20 rounded-xl p-5 hover:border-primary/40 hover:bg-primary/15 transition-all duration-300 flex items-start gap-3"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-primary-light text-sm">{fact.label}</div>
                    <div className="text-hero-text font-semibold">{fact.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Expertise */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            aria-labelledby="expertise-heading"
          >
            <h2 id="expertise-heading" className="text-3xl font-bold text-hero-text text-center mb-4">
              What Does <span className="text-gradient">Ahmed Pixels</span> Do?
            </h2>
            <p className="text-hero-muted text-center max-w-2xl mx-auto mb-10">
              Specialized in building high-performance websites and ranking them on Google.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-primary/10 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] hover:bg-primary/15 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="text-primary-foreground" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-hero-text mb-2">{item.title}</h3>
                  <p className="text-primary-light text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Biography */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12"
            aria-labelledby="bio-heading"
          >
            <h2 id="bio-heading" className="text-3xl font-bold text-hero-text mb-6">
              About <span className="text-gradient">Ahmed Pixels</span>
            </h2>
            <div className="space-y-4 text-hero-muted leading-relaxed">
              <p>
                <strong className="text-hero-text">Ahmed Pixels</strong> (full name: Ahmed) is a Pakistani web
                professional who started his journey in 2021 by self-learning HTML, CSS, and JavaScript. After
                completing formal web development training in 2022, Ahmed launched his freelance career focused on
                WordPress development and SEO.
              </p>
              <p>
                Today, Ahmed Pixels operates as an independent WordPress Developer & SEO Specialist serving clients
                through <a href="https://ahmedpixels.com" className="text-primary hover:underline">ahmedpixels.com</a>.
                His portfolio includes E-commerce stores, B2B platforms, technology websites, product catalogues, and
                fully-optimized landing pages — all built with a focus on speed, accessibility, and search-engine
                visibility.
              </p>
              <p>
                Ahmed Pixels is known for delivering projects with 100% client satisfaction, providing affordable
                pricing tailored for small-to-medium businesses, and offering ongoing support including maintenance,
                speed optimization, and SEO audits.
              </p>
            </div>
          </motion.section>

          {/* Career Highlights */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            aria-labelledby="career-heading"
          >
            <h2 id="career-heading" className="text-3xl font-bold text-hero-text text-center mb-10">
              Career <span className="text-gradient">Highlights</span>
            </h2>
            <div className="space-y-4">
              {[
                { year: "2023 - Present", title: "Senior WordPress Developer & SEO Specialist", desc: "Independent freelance professional handling enterprise WordPress builds and SEO campaigns." },
                { year: "2022", title: "Freelance Career Launched", desc: "Started serving clients with WordPress development and SEO optimization." },
                { year: "2022", title: "Web Development Certified", desc: "Completed formal training in WordPress and modern web development." },
                { year: "2021", title: "Started Learning Web Development", desc: "Began self-taught journey in HTML, CSS, JavaScript, and WordPress." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-primary/10 border border-primary/20 rounded-xl p-5 flex items-start gap-4 hover:border-primary/40 hover:bg-primary/15 transition-all"
                >
                  <Calendar className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div className="flex-1">
                    <span className="text-primary text-sm font-bold">{item.year}</span>
                    <h3 className="text-hero-text font-semibold">{item.title}</h3>
                    <p className="text-primary-light text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Verified Profiles */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            aria-labelledby="connect-heading"
          >
            <h2 id="connect-heading" className="text-3xl font-bold text-hero-text text-center mb-4">
              Verified <span className="text-gradient">Profiles</span>
            </h2>
            <p className="text-hero-muted text-center max-w-2xl mx-auto mb-10">
              Official online presence of Ahmed Pixels. These are the authentic channels to connect.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialProfiles.map((profile, i) => (
                <a
                  key={i}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="bg-primary/10 border border-primary/20 rounded-xl p-5 text-center hover:border-primary/40 hover:bg-primary/15 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] transition-all duration-300 group"
                  aria-label={`Ahmed Pixels on ${profile.name}`}
                >
                  <profile.icon className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <div className="text-hero-text font-semibold text-sm">{profile.name}</div>
                  <ExternalLink className="text-primary-light mx-auto mt-2" size={12} />
                </a>
              ))}
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            aria-labelledby="faq-heading"
          >
            <h2 id="faq-heading" className="text-3xl font-bold text-hero-text text-center mb-10">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  q: "Who is Ahmed Pixels?",
                  a: "Ahmed Pixels is a professional WordPress Developer and SEO Specialist based in Lahore, Pakistan, with 2+ years of experience and 50+ projects delivered.",
                },
                {
                  q: "Where is Ahmed Pixels located?",
                  a: "Ahmed Pixels is based in Lahore, Punjab, Pakistan.",
                },
                {
                  q: "What services does Ahmed Pixels offer?",
                  a: "Ahmed Pixels offers WordPress development, WooCommerce stores, Shopify development, SEO optimization, website maintenance, and custom theme development.",
                },
                {
                  q: "How can I contact Ahmed Pixels?",
                  a: "You can reach Ahmed Pixels via WhatsApp at wa.me/ahmedpixels, email at info@ahmedpixels.com, or through the contact form on ahmedpixels.com.",
                },
                {
                  q: "Is Ahmed Pixels a real person or a company?",
                  a: "Ahmed Pixels is the professional brand name of Ahmed, an individual freelance WordPress Developer and SEO Specialist operating from Lahore, Pakistan.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="bg-primary/10 border border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-all group"
                >
                  <summary className="text-hero-text font-semibold cursor-pointer list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-primary-light text-sm mt-3 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    { "@type": "Question", "name": "Who is Ahmed Pixels?", "acceptedAnswer": { "@type": "Answer", "text": "Ahmed Pixels is a professional WordPress Developer and SEO Specialist based in Lahore, Pakistan, with 2+ years of experience and 50+ projects delivered." } },
                    { "@type": "Question", "name": "Where is Ahmed Pixels located?", "acceptedAnswer": { "@type": "Answer", "text": "Ahmed Pixels is based in Lahore, Punjab, Pakistan." } },
                    { "@type": "Question", "name": "What services does Ahmed Pixels offer?", "acceptedAnswer": { "@type": "Answer", "text": "Ahmed Pixels offers WordPress development, WooCommerce stores, Shopify development, SEO optimization, website maintenance, and custom theme development." } },
                    { "@type": "Question", "name": "How can I contact Ahmed Pixels?", "acceptedAnswer": { "@type": "Answer", "text": "You can reach Ahmed Pixels via WhatsApp at wa.me/ahmedpixels, email at info@ahmedpixels.com, or through the contact form on ahmedpixels.com." } },
                    { "@type": "Question", "name": "Is Ahmed Pixels a real person or a company?", "acceptedAnswer": { "@type": "Answer", "text": "Ahmed Pixels is the professional brand name of Ahmed, an individual freelance WordPress Developer and SEO Specialist operating from Lahore, Pakistan." } },
                  ],
                }),
              }}
            />
          </motion.section>

          {/* Internal links */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-2xl font-bold text-hero-text mb-6">
              Explore More About <span className="text-gradient">Ahmed Pixels</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Services", to: "/services" },
                { label: "Portfolio Projects", to: "/projects" },
                { label: "Contact Ahmed Pixels", to: "/contact" },
              ].map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="px-5 py-2.5 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium hover:bg-primary/20 hover:border-primary/40 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.section>

          <CTASection
            title="Want to Work with"
            highlight="Ahmed Pixels?"
            subtitle="Let's discuss your WordPress or SEO project. Ahmed Pixels is available for new clients."
            primaryText="Get a Free Quote"
            secondaryText="View Portfolio"
            secondaryLink="/projects"
            className="mt-12 -mx-8 md:-mx-12 lg:-mx-16 xl:-mx-24"
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
