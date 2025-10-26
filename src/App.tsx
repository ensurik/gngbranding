
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

// Import service pages
import WebDesign from "./pages/services/WebDesign";
import GraphicDesign from "./pages/services/GraphicDesign";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import Branding from "./pages/services/Branding";

// Import portfolio project pages
import KalbakkenEngrosProject from "./pages/portfolio/KalbakkenEngros";
import DBLydLysProject from "./pages/portfolio/DBLydLys";

// Import legal pages
import Personvern from "./pages/Personvern";
import Cookies from "./pages/Cookies";
import Vilkar from "./pages/Vilkar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        
        {/* Portfolio project routes */}
        <Route path="/portfolio/kalbakken-engros" element={<KalbakkenEngrosProject />} />
        <Route path="/portfolio/db-lyd-lys" element={<DBLydLysProject />} />
        
        {/* Service routes */}
        <Route path="/tjenester/webdesign" element={<WebDesign />} />
        <Route path="/tjenester/grafisk-design" element={<GraphicDesign />} />
        <Route path="/tjenester/digital-markedsføring" element={<DigitalMarketing />} />
        <Route path="/tjenester/merkevare" element={<Branding />} />
        
        {/* Legal routes */}
        <Route path="/personvern" element={<Personvern />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/vilkar" element={<Vilkar />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
