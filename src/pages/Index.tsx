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
            "@type": "LocalBusiness",
            "name": "Ahmed - WordPress Developer & SEO Specialist",
            "description": "Professional WordPress Developer and SEO Specialist creating high-performance websites that rank and convert.",
            "url": "https://ahmedpixels.pro/",
            "telephone": "+92-321-6479192",
            "email": "contact@ahmedpixels.pro",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lahore",
              "addressRegion": "Punjab",
              "addressCountry": "PK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "31.5204",
              "longitude": "74.3587"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Sa 09:00-18:00",
            "sameAs": [
              "https://wa.me/923216479192"
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "31.5204",
                "longitude": "74.3587"
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WordPress Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Optimization" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify Store Setup" } }
              ]
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ahmed - WordPress Developer & SEO Specialist",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "50",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sarah Mitchell" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Ahmed transformed our outdated website into a modern, SEO-optimized platform. Our organic traffic increased by 200% within 3 months. His attention to detail and communication is exceptional."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Michael Chen" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Working with Ahmed was a game-changer for our online store. He built a fast, beautiful WooCommerce site that our customers love. Sales have doubled since the launch!"
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Fatima Al-Hassan" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Ahmed delivered our B2B platform ahead of schedule and under budget. His WordPress expertise and SEO knowledge helped us rank #1 for our target keywords."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "David Thompson" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Our Shopify store looks absolutely premium. Ahmed understood our brand perfectly and created an experience that reflects our quality. Highly recommend his services!"
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Aisha Malik" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Professional, responsive, and incredibly talented. Ahmed rebuilt our tech company website with stunning animations and perfect mobile optimization. A true expert!"
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "James Wilson" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "The catalogue website Ahmed created for us is a work of art. Our clients constantly compliment the design. He truly understands how to showcase products beautifully."
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Web Development Portfolio",
            "description": "Portfolio of websites built by Ahmed - WordPress Developer & SEO Specialist",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": "PixelHash Tech",
                  "description": "Digital agency website with modern design and cutting-edge animations",
                  "url": "https://pixelhashtech.com/",
                  "creator": { "@type": "Person", "name": "Ahmed", "url": "https://ahmedpixels.pro/" },
                  "dateCreated": "2024",
                  "genre": "Tech Website"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Shine Wall Stone",
                  "description": "Premium stone and marble company showcase website",
                  "url": "https://shinewallstone.com/",
                  "creator": { "@type": "Person", "name": "Ahmed", "url": "https://ahmedpixels.pro/" },
                  "dateCreated": "2024",
                  "genre": "Business Website"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Silks Pool",
                  "description": "Industrial sewing machine parts distributor e-commerce platform",
                  "url": "https://silkspool.com/",
                  "creator": { "@type": "Person", "name": "Ahmed", "url": "https://ahmedpixels.pro/" },
                  "dateCreated": "2024",
                  "genre": "E-commerce Website"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Jeddah Auto Spare Parts",
                  "description": "Premium automotive filters store with comprehensive product catalog",
                  "url": "https://jeddahautospareparts.com/",
                  "creator": { "@type": "Person", "name": "Ahmed", "url": "https://ahmedpixels.pro/" },
                  "dateCreated": "2024",
                  "genre": "E-commerce Website"
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Eleeva Adhesives",
                  "description": "Industrial adhesives manufacturer corporate website",
                  "url": "https://eleevaadhesives.com/",
                  "creator": { "@type": "Person", "name": "Ahmed", "url": "https://ahmedpixels.pro/" },
                  "dateCreated": "2024",
                  "genre": "Corporate Website"
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
