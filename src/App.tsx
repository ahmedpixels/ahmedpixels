import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import WordPressDevPage from "./pages/services/WordPressDevPage";
import WooCommercePage from "./pages/services/WooCommercePage";
import ThemeCustomizationPage from "./pages/services/ThemeCustomizationPage";
import MaintenancePage from "./pages/services/MaintenancePage";
import SEOOptimizationPage from "./pages/services/SEOOptimizationPage";
import LandingPagesPage from "./pages/services/LandingPagesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/wordpress-development" element={<WordPressDevPage />} />
            <Route path="/services/woocommerce" element={<WooCommercePage />} />
            <Route path="/services/theme-customization" element={<ThemeCustomizationPage />} />
            <Route path="/services/maintenance" element={<MaintenancePage />} />
            <Route path="/services/seo-optimization" element={<SEOOptimizationPage />} />
            <Route path="/services/landing-pages" element={<LandingPagesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
