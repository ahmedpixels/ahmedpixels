import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

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
        <meta property="og:url" content="https://ahmedpixels.pro/" />
        <link rel="canonical" href="https://ahmedpixels.pro/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Ahmed - WordPress Developer & SEO Specialist",
            "description": "Professional WordPress Developer and SEO Specialist based in Lahore, Pakistan.",
            "url": "https://ahmedpixels.pro/",
            "mainEntity": {
              "@type": "Person",
              "name": "Ahmed",
              "jobTitle": "WordPress Developer & SEO Specialist",
              "address": { "@type": "PostalAddress", "addressLocality": "Lahore", "addressCountry": "Pakistan" }
            }
          })}
        </script>
      </Helmet>

      <main className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        
        <AboutSection />
        <SkillsSection />
        
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
