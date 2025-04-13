
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-brand-blue to-brand-lightBlue text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M42.8,-65.2C54.9,-56.3,64.2,-43.4,70.5,-28.8C76.8,-14.2,80.1,2,75.6,15.3C71.1,28.5,58.9,38.8,46.4,48.9C33.9,59.1,21.2,69,5.8,75.3C-9.6,81.5,-27.7,84.1,-41.6,76.6C-55.5,69.1,-65.1,51.4,-73.6,32.9C-82.1,14.4,-89.4,-4.9,-87.4,-23.6C-85.3,-42.2,-73.9,-60.2,-58.3,-68.1C-42.6,-76,-21.3,-73.8,-2.9,-69.7C15.5,-65.6,30.7,-74.1,42.8,-65.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 relative z-10">
        <div className="md:w-3/5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            Profesjonell <span className="text-white/90">webdesign</span> og <span className="text-white/90">merkevarebygging</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-xl animate-fadeIn" style={{animationDelay: "0.2s"}}>
            Vi hjelper din bedrift med å skape en sterk digital tilstedeværelse som konverterer besøkende til kunder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{animationDelay: "0.4s"}}>
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-4 bg-white text-brand-blue font-medium rounded-md hover:bg-gray-100 transition-colors">
              Få et uforpliktende tilbud
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center justify-center px-6 py-4 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
              Se våre prosjekter
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
