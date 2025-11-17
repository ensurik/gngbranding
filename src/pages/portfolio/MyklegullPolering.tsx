
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Breadcrumb from "@/components/Breadcrumb";
import MyklegullLogo from "@/assets/myklegull-logo.jpg";
import { ExternalLink } from "lucide-react";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const MyklegullPoleringProject = () => {
  useCanonicalUrl();
  
  const project = {
    title: "Myklegull Polering & Vask",
    category: "Webdesign & Bookingløsning",
    description: "Profesjonell nettside for Myklegull Polering & Vask i Kristiansand. Selskapet tilbyr premium bilpolering og bilvask med fokus på høy kvalitet og kundetilfredshet.",
    challenges: "Som et nyoppstartet selskap hadde Myklegull ingen digital tilstedeværelse. De trengte en komplett nettløsning som kunne bygge troverdighet, vise frem tjenestene deres, og gjøre det enkelt for kunder å bestille time.",
    solutions: "Vi skapte en moderne, visuelt imponerende nettside som fremhever selskapets profesjonalitet og kvalitetsfokus. Designet kombinerer kraftige visuelle elementer med tydelig informasjon om tjenester og priser. Det integrerte bookingsystemet gjør det enkelt for kunder å velge tjeneste, dato og tidspunkt direkte på nettsiden.",
    url: "https://myklegull.no",
    bgColor: "#000000"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Breadcrumb 
        items={[
          { label: "Hjem", href: "/" },
          { label: "Portefølje", href: "/portfolio" },
          { label: project.title }
        ]}
      />
      
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-accent font-semibold text-sm uppercase tracking-wider mb-2">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        </div>
      </div>
      
      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div 
              className="h-96 rounded-lg flex items-center justify-center p-8"
              style={{ backgroundColor: project.bgColor }}
            >
              <img 
                src={MyklegullLogo} 
                alt="Myklegull Polering & Vask Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Om Prosjektet</h2>
              <p className="text-brand-gray text-lg mb-8">{project.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-brand-blue mb-3">Utfordringer</h3>
                <p className="text-brand-gray">{project.challenges}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-brand-blue mb-3">Løsning</h3>
                <p className="text-brand-gray">{project.solutions}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-brand-blue mb-4">Leveranser</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">✓</span>
                    Responsiv nettside med moderne design
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">✓</span>
                    Integrert bookingløsning for tjenester
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">✓</span>
                    Detaljert tjenestekatalog med priser
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">✓</span>
                    SEO-optimalisering for lokale søk
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">✓</span>
                    GDPR-kompatibel løsning
                  </li>
                </ul>
              </div>

              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-blue hover:text-brand-accent transition-colors"
              >
                Besøk nettside
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default MyklegullPoleringProject;
