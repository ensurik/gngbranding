
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import TrustSignals from "@/components/TrustSignals";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const Index = () => {
  useCanonicalUrl();
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustSignals />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
