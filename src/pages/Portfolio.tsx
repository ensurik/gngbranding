
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { ExternalLink } from "lucide-react";
import KalbakkenEngrosLogo from "@/assets/kalbakken-engros-logo.png";
import DBLydLysLogo from "@/assets/db-lyd-lys-logo.png";
import MyklegullLogo from "@/assets/myklegull-logo.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "Kalbakken Engros",
      category: "Webdesign & Merkevare",
      description: "En fullstendig merkevarerenovering og ny nettside for Kalbakken Engros, en ledende grossist i Oslo-området. Prosjektet inkluderte ny visuell identitet, responsiv nettside og digital strategi.",
      challenges: "Kunden trengte en moderne digital tilstedeværelse som reflekterte deres etablerte posisjon i markedet samtidig som den appellerte til nye kunder.",
      solutions: "Vi utviklet en brukervennlig nettside med e-handelsløsning, integrert med deres lagersystem for sanntids lagerstatus. Den nye visuelle identiteten kombinerer tradisjon med moderne elementer.",
      url: "https://kalbakkenengros.no",
      logo: KalbakkenEngrosLogo,
      bgColor: "#9C2642",
      slug: "kalbakken-engros"
    },
    {
      title: "DB Lyd & Lys",
      category: "Webdesign & Digital Strategi",
      description: "Komplett nettløsning for DB Lyd & Lys, et ledende russebuss og lydutstyr utleieselskap. Fra konsept til ferdig nettside med booking-funksjonalitet og moderne design.",
      challenges: "Kunden hadde ikke nettsted fra før av og trengte en profesjonell digital tilstedeværelse for å nå ut til potensielle kunder og effektivisere bookingprosessen.",
      solutions: "Vi bygget en komplett nettside fra bunnen av med intuitiv navigasjon, visuelt tiltalende design som reflekterer deres energiske merkevare, og et brukervennlig booking-system for utstyr og tjenester.",
      url: "https://dblydoglys.no/",
      logo: DBLydLysLogo,
      bgColor: "#1a1a2e",
      slug: "db-lyd-lys"
    },
    {
      title: "Myklegull Polering & Vask",
      category: "Webdesign & Bookingløsning",
      description: "Profesjonell nettside for Myklegull Polering & Vask i Kristiansand. Selskapet tilbyr premium bilpolering og bilvask, og trengte en digital tilstedeværelse som reflekterte deres høye kvalitet og profesjonalitet.",
      challenges: "Som et nytt selskap hadde Myklegull ingen nettside fra før. De trengte en komplett digital løsning som kunne vise frem deres tjenester, bygge tillit hos potensielle kunder, og håndtere bookinger effektivt.",
      solutions: "Vi utviklet en moderne, visuelt imponerende nettside med integrert bookingløsning. Designet fremhever selskapets fokus på kvalitet og detaljorientering, med høykvalitets bilder og tydelig informasjon om tjenester og priser. Bookingsystemet gjør det enkelt for kunder å bestille time direkte på nettsiden.",
      url: "https://myklegull.no",
      logo: MyklegullLogo,
      bgColor: "#000000",
      slug: "myklegull-polering"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Vår Portefølje</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Utforsk noen av våre nyeste prosjekter og se hvordan vi har hjulpet våre kunder med å bygge sterke digitale løsninger.
          </p>
        </div>
      </div>
      
      {/* Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div 
                  className={`h-80 rounded-lg flex items-center justify-center p-6 ${index % 2 === 1 ? 'lg:order-last' : ''}`}
                  style={{ backgroundColor: project.bgColor || '#f3f4f6' }}
                >
                  {project.logo ? (
                    <img 
                      src={project.logo} 
                      alt={`${project.title} Logo`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-500 text-xl font-semibold">{project.title}</span>
                  )}
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
                  
                  {project.slug ? (
                    <div className="flex space-x-4">
                      <Link 
                        to={`/portfolio/${project.slug}`}
                        className="inline-flex items-center text-brand-blue hover:text-brand-accent transition-colors"
                      >
                        Se detaljer
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                      
                      {project.url !== "#" && (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-brand-blue hover:text-brand-accent transition-colors"
                        >
                          Besøk nettside
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  ) : (
                    project.url !== "#" && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brand-blue hover:text-brand-accent transition-colors"
                      >
                        Besøk nettside
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Portfolio;
