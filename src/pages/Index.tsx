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
        <meta property="og:image" content="https://ahmedpixels.pro/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmed - WordPress Developer & SEO Specialist" />
        <meta name="twitter:description" content="I craft high-performance websites that rank and convert." />
        <meta name="twitter:image" content="https://ahmedpixels.pro/og-image.png" />
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to build a WordPress website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A typical WordPress website takes 1-3 weeks depending on complexity. A simple single-page site can be done in 5-7 days, while a full e-commerce store with custom features may take 2-4 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide ongoing support after the website is launched?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! I offer maintenance packages that include regular updates, security monitoring, backups, and technical support. The first month of basic support is included in most packages."
                }
              },
              {
                "@type": "Question",
                "name": "What is your SEO process?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "My SEO process includes keyword research, on-page optimization (meta tags, headings, content), technical SEO (speed, mobile-friendliness, schema markup), and setting up Google Analytics & Search Console for tracking."
                }
              },
              {
                "@type": "Question",
                "name": "Can you help with an existing WordPress website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! I can help redesign, optimize, fix issues, add new features, or improve the SEO of your existing WordPress site. I'll first audit your site and provide recommendations."
                }
              },
              {
                "@type": "Question",
                "name": "What payment methods do you accept?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I accept bank transfers, JazzCash, Easypaisa, and for international clients - PayPal and Wise. Payment is typically 50% upfront and 50% upon completion."
                }
              },
              {
                "@type": "Question",
                "name": "Will my website be mobile-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "100% yes! All websites I build are fully responsive and optimized for mobile, tablet, and desktop. Mobile-friendliness is also crucial for SEO and is always a priority."
                }
              }
            ]
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
