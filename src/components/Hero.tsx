
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-brand-blue to-brand-lightBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn">
            Vi gir din merkevare et kraftig digitalt nærvær
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fadeIn" style={{animationDelay: "0.2s"}}>
            GnGBranding hjelper bedrifter med å skape sterke merkevareopplevelser som engasjerer kunder og driver vekst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{animationDelay: "0.4s"}}>
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-brand-accent text-white font-medium rounded hover:bg-red-700 transition-colors">
              Kontakt oss
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-medium rounded hover:bg-white hover:text-brand-blue transition-colors">
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
