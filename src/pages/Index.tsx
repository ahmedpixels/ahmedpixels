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
        <title>Ahmed - WordPress Developer & SEO Specialist | Lahore, Pakistan</title>
        <meta
          name="description"
          content="Professional WordPress Developer and SEO Specialist based in Lahore, Pakistan. I create high-performance websites including E-commerce, B2B, Tech, and Shopify stores that rank and convert."
        />
        <meta
          name="keywords"
          content="WordPress Developer, SEO Specialist, Web Developer Lahore, E-commerce Developer, Shopify Expert, B2B Website, Pakistan"
        />
        <meta property="og:title" content="Ahmed - WordPress Developer & SEO Specialist" />
        <meta
          property="og:description"
          content="I craft high-performance websites that rank and convert. Transform your ideas into stunning digital experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmedpixels.com" />
        <meta property="og:image" content="https://ahmedpixels.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmed - WordPress Developer & SEO Specialist" />
        <meta name="twitter:description" content="I craft high-performance websites that rank and convert." />
        <meta name="twitter:image" content="https://ahmedpixels.com/og-image.png" />
        <link rel="canonical" href="https://ahmedpixels.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ahmed",
            "jobTitle": "WordPress Developer & SEO Specialist",
            "url": "https://ahmedpixels.com",
            "address": { "@type": "PostalAddress", "addressLocality": "Lahore", "addressCountry": "Pakistan" }
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
