import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold sections for faster initial load
const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

// Simple loading fallback
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ahmed Pixels | WordPress Developer & SEO Specialist - Lahore, Pakistan</title>
        <meta
          name="description"
          content="Hire Ahmed Pixels — top WordPress Developer & SEO Specialist in Lahore, Pakistan. Custom WordPress, WooCommerce, Shopify & SEO services. 50+ projects delivered. Get a free quote today!"
        />
        <meta
          name="keywords"
          content="Ahmed Pixels, WordPress Developer Lahore, SEO Specialist Pakistan, WooCommerce Expert, Shopify Developer, E-commerce Website, Web Developer Lahore, Freelance WordPress Developer Pakistan"
        />
        <meta property="og:title" content="Ahmed Pixels | WordPress Developer & SEO Specialist" />
        <meta
          property="og:description"
          content="I craft high-performance WordPress websites that rank and convert. 50+ projects delivered with 100% client satisfaction."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmedpixels.com" />
        <meta property="og:image" content="https://ahmedpixels.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ahmed Pixels - WordPress Developer & SEO Specialist in Lahore Pakistan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmed Pixels | WordPress Developer & SEO Specialist" />
        <meta name="twitter:description" content="I craft high-performance WordPress websites that rank and convert." />
        <meta name="twitter:image" content="https://ahmedpixels.com/og-image.png" />
        <link rel="canonical" href="https://ahmedpixels.com" />
        <link rel="alternate" hreflang="en" href="https://ahmedpixels.com" />
        <link rel="alternate" hreflang="x-default" href="https://ahmedpixels.com" />

        {/* WebPage schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://ahmedpixels.com/#webpage",
            "url": "https://ahmedpixels.com",
            "name": "Ahmed Pixels - WordPress Developer & SEO Specialist",
            "description": "Professional WordPress Developer & SEO Specialist in Lahore, Pakistan.",
            "isPartOf": { "@id": "https://ahmedpixels.com/#website" },
            "about": { "@id": "https://ahmedpixels.com/#person" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://ahmedpixels.com/og-image.png" },
            "inLanguage": "en-US"
          })}
        </script>

        {/* Service catalog with AggregateRating for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "WordPress Development & SEO Services",
            "provider": { "@id": "https://ahmedpixels.com/#organization" },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom WordPress Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WooCommerce E-commerce Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify Store Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Optimization" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Maintenance & Support" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Theme Customization" } }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "50",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
      </Helmet>

      <main className="overflow-x-hidden" id="main-content">
        <Navbar />
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SkillsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ProcessSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <PortfolioSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <CTASection 
            title="Ready to Start Your"
            highlight="Project?"
            subtitle="Let's discuss your requirements and create something amazing together. Get a free consultation today!"
            primaryText="Start Your Project"
            secondaryText="View Services"
            secondaryLink="/services"
          />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
