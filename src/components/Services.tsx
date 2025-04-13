
import { Globe, PenTool, Smartphone, Megaphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-brand-blue" />,
      title: "Webdesign",
      description: "Vi utvikler responsive, brukervennlige og estetisk tiltalende nettsider som reflekterer din merkevare.",
    },
    {
      icon: <PenTool className="h-12 w-12 text-brand-blue" />,
      title: "Grafisk Design",
      description: "Fra logoer til markedsføringsmateriell – vi skaper visuell identitet som forsterker din bedrifts budskap.",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-brand-blue" />,
      title: "Digital Markedsføring",
      description: "Vi hjelper deg å nå ditt publikum gjennom målrettet digital markedsføring og sosiale mediestrategier.",
    },
    {
      icon: <Megaphone className="h-12 w-12 text-brand-blue" />,
      title: "Merkevarebygging",
      description: "Vi utvikler helhetlige merkevarestrategier som differensierer din bedrift i et konkurranseutsatt marked.",
    },
  ];

  return (
    <section className="py-20 bg-brand-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Våre tjenester</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Vi tilbyr et bredt spekter av tjenester for å hjelpe din bedrift med å bygge et sterkt digitalt nærvær.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h3>
              <p className="text-brand-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
