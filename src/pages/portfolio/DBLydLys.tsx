import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { ExternalLink } from "lucide-react";
import DBLydLysLogo from "@/assets/db-lyd-lys-logo.png";
import { useEffect } from "react";

const DBLydLysProject = () => {
  const project = {
    title: "DB Lyd & Lys",
    category: "Webdesign & Digital Strategi",
    description: "Komplett nettløsning for DB Lyd & Lys, et ledende russebuss og lydutstyr utleieselskap. Fra konsept til ferdig nettside med booking-funksjonalitet og moderne design.",
    challenges: "Kunden hadde ikke nettsted fra før av og trengte en profesjonell digital tilstedeværelse for å nå ut til potensielle kunder og effektivisere bookingprosessen.",
    solutions: "Vi bygget en komplett nettside fra bunnen av med intuitiv navigasjon, visuelt tiltalende design som reflekterer deres energiske merkevare, og et brukervennlig booking-system for utstyr og tjenester.",
    url: "https://dblydoglys.no/",
    bgColor: "#1a1a2e"
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {project.category}
          </p>
        </div>
      </div>
      
      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className="h-80 rounded-lg flex items-center justify-center p-6"
              style={{ backgroundColor: project.bgColor }}
            >
              <img 
                src={DBLydLysLogo} 
                alt={`${project.title} Logo`} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <span className="text-brand-accent font-medium mb-2 block">{project.category}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">{project.title}</h2>
              <p className="text-brand-gray mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">Utfordringer</h3>
                <p className="text-brand-gray">{project.challenges}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">Løsninger</h3>
                <p className="text-brand-gray">{project.solutions}</p>
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

export default DBLydLysProject;
