import { Globe, PenTool, Smartphone, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-16 w-16 text-brand-blue" />,
      title: "Webdesign",
      description: "Vi utvikler responsive, brukervennlige og estetisk tiltalende nettsider som reflekterer din merkevare og konverterer besøkende til kunder.",
      link: "/tjenester/webdesign"
    },
    {
      icon: <PenTool className="h-16 w-16 text-brand-blue" />,
      title: "Grafisk Design",
      description: "Fra logoer til markedsføringsmateriell – vi skaper visuell identitet som forsterker din bedrifts budskap og gjør deg gjenkjennelig i markedet.",
      link: "/tjenester/grafisk-design"
    },
    {
      icon: <Smartphone className="h-16 w-16 text-brand-blue" />,
      title: "Digital Markedsføring",
      description: "Vi hjelper deg å nå ditt publikum gjennom målrettet digital markedsføring, søkemotoroptimalisering og sosiale mediestrategier.",
      link: "/tjenester/digital-markedsføring"
    },
    {
      icon: <Megaphone className="h-16 w-16 text-brand-blue" />,
      title: "Merkevarebygging",
      description: "Vi utvikler helhetlige merkevarestrategier som differensierer din bedrift i et konkurranseutsatt marked og bygger langsiktig kundelojalitet.",
      link: "/tjenester/merkevare"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-accent font-semibold text-sm uppercase tracking-wider mb-2">Våre tjenester</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Hva vi kan hjelpe deg med</h2>
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
              <h3 className="text-xl font-bold text-brand-blue mb-3 text-center">{service.title}</h3>
              <p className="text-brand-gray mb-6 flex-grow text-center">{service.description}</p>
              <div className="text-center">
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-brand-blue font-medium hover:text-brand-accent transition-colors"
                >
                  Les mer
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
