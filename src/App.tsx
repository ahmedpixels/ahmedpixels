import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import WhoIsAhmedPixelsPage from "./pages/WhoIsAhmedPixelsPage";

import SitemapCheckPage from "./pages/SitemapCheckPage";
import NotFound from "./pages/NotFound";
import ChatbotWidget from "@/components/ChatbotWidget";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has already seen loading screen in this session
    const visited = sessionStorage.getItem("hasVisited");
    if (visited) {
      setIsLoading(false);
      setHasVisited(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AnimatePresence mode="wait">
            {isLoading && !hasVisited && (
              <LoadingScreen onComplete={handleLoadingComplete} />
            )}
          </AnimatePresence>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/who-is-ahmed-pixels" element={<WhoIsAhmedPixelsPage />} />
              
              <Route path="/sitemap-check" element={<SitemapCheckPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <ChatbotWidget />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
