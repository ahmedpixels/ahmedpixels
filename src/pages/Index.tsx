import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
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
        <link rel="canonical" href="https://ahmed.dev" />
      </Helmet>

      <main className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ClientLogosSection />
        <AboutSection />
        <SkillsSection />
        
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
