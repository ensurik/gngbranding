
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
