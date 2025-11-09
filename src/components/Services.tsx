
import { Globe, PenTool, Smartphone, Megaphone, ArrowRight, Award, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Helper function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  const services = [
    {
      icon: <Globe className="h-16 w-16 text-[#0e1f33]" />,
      title: "Nettsider & Nettbutikker",
      description: "Vi designer og utvikler skreddersydde nettsider og komplette nettbutikker. Fra enkle presentasjonssider til avanserte e-handelsløsninger med betalingsintegrasjon og produktkatalog.",
      benefits: ["Gratis demo", "Rask leveringstid", "SEO-optimalisert", "Mobilvennlig"],
      link: "/tjenester/webdesign"
    },
    {
      icon: <Smartphone className="h-16 w-16 text-[#0e1f33]" />,
      title: "SEO & Optimalisering",
      description: "Få nettsiden din på Google. Vi optimaliserer nettsider for søkemotorer slik at din bedrift blir funnet av de rette kundene når de søker etter dine tjenester.",
      benefits: ["Høyere ranking", "Mer trafikk", "Økt synlighet"],
      link: "/tjenester/seo-nettside"
    },
    {
      icon: <PenTool className="h-16 w-16 text-[#0e1f33]" />,
      title: "Design & Innholdsproduksjon",
      description: "Vi produserer profesjonelt innhold til nettsiden din - fra tekster og bilder til videoer og grafisk design som engasjerer dine besøkende.",
      benefits: ["Profesjonelt design", "Skreddersydd innhold", "Konsistent uttrykk"],
      link: "/tjenester/grafisk-design"
    },
    {
      icon: <Megaphone className="h-16 w-16 text-[#0e1f33]" />,
      title: "Nettside for Bedrifter",
      description: "Profesjonelle bedriftsnettsider med GDPR-sikkerhet, dedikert support og langsiktig vedlikehold. Vi sikrer at din bedrift får en trygg og pålitelig digital plattform.",
      benefits: ["Gratis demo", "Mobilvennlig", "GDPR-sikker", "Rask leveringstid"],
      link: "/tjenester/nettside-bedrift"
    },
  ];
  
  const advantages = [
    {
      icon: <Award className="h-10 w-10 text-[#0e1f33]" />,
      title: "Kvalitetsgaranti",
      description: "Vi er så sikre på kvaliteten på arbeidet vårt at vi tilbyr 100% fornøyd-garanti."
    },
    {
      icon: <Zap className="h-10 w-10 text-[#0e1f33]" />,
      title: "Rask levering",
      description: "Vi leverer prosjekter på tid, uten å gå på kompromiss med kvaliteten."
    },
    {
      icon: <Clock className="h-10 w-10 text-[#0e1f33]" />,
      title: "Gratis oppfølging",
      description: "3 måneders gratis support og oppfølging etter lansering av prosjektet."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#e74c3c] font-semibold text-sm uppercase tracking-wider mb-2">Våre tjenester</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f33] mb-4">Våre Tjenester og Ekspertise</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Vi tilbyr et bredt spekter av tjenester for å hjelpe din bedrift med å bygge et sterkt digitalt nærvær som skaper resultater.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full group"
            >
              <div className="mb-6 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#0e1f33] mb-3 text-center">{service.title}</h3>
              <p className="text-brand-gray mb-6 flex-grow text-center">{service.description}</p>
              
              <ul className="mb-6 space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e74c3c] mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <div className="text-center mt-auto">
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-[#0e1f33] font-medium hover:text-[#e74c3c] transition-colors"
                  onClick={scrollToTop}
                >
                  Les mer
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0e1f33] mb-6 text-center">Hvorfor velge oss?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4">{advantage.icon}</div>
                  <h4 className="text-lg font-bold text-[#0e1f33] mb-2">{advantage.title}</h4>
                  <p className="text-brand-gray">{advantage.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0e1f33] text-white font-medium rounded-md hover:bg-[#0e1f33]/90 transition-colors"
                onClick={scrollToTop}
              >
                Få et uforpliktende tilbud
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
