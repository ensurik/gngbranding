
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedWork = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Utvalgte Prosjekter</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Ta en titt på noen av våre nyeste prosjekter der vi har hjulpet kunder med å styrke deres digitale tilstedeværelse.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Featured Project */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 bg-gray-300 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/30">
                <span className="text-white text-2xl font-bold">Kalbakken Engros</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-blue mb-2">Kalbakken Engros</h3>
              <p className="text-brand-gray mb-4">
                En komplett merkevare- og nettsidefornyelse for Kalbakken Engros, en ledende grossist i Oslo.
              </p>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center text-brand-blue hover:text-brand-accent transition-colors"
              >
                Se prosjektet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Placeholder for future projects */}
          <div className="bg-brand-lightGray rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-xl font-bold text-brand-blue mb-4">Din Bedrift Kan Være Her</h3>
            <p className="text-brand-gray mb-6">
              La oss samarbeide for å skape en nettside og merkevare som skiller seg ut fra konkurrentene.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white font-medium rounded hover:bg-blue-800 transition-colors"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white font-medium rounded hover:bg-blue-800 transition-colors"
          >
            Se hele porteføljen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
