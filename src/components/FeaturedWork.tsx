
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import KalbakkenEngrosLogo from "@/assets/kalbakken-engros-logo.png";
import DBLydLysLogo from "@/assets/db-lyd-lys-logo.png";

const FeaturedWork = () => {
  // Helper function to scroll to top and navigate
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-accent font-semibold text-sm uppercase tracking-wider mb-2">Portefølje</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Våre Nyeste Prosjekter</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Ta en titt på noen av våre nyeste prosjekter der vi har hjulpet kunder med å styrke deres digitale tilstedeværelse.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Featured Project 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300">
            <div className="h-64 bg-[#9C2642] relative overflow-hidden flex items-center justify-center p-6">
              <img 
                src={KalbakkenEngrosLogo} 
                alt="Kalbakken Engros Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-blue mb-2">Kalbakken Engros</h3>
              <p className="text-brand-gray mb-4">
                En komplett merkevare- og nettsidefornyelse for Kalbakken Engros, en ledende grossist i Oslo.
              </p>
              <Link 
                to="/portfolio/kalbakken-engros" 
                className="inline-flex items-center text-brand-blue hover:text-brand-accent transition-colors"
                onClick={scrollToTop}
              >
                Se detaljer
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Featured Project 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300">
            <div className="h-64 bg-[#1a1a2e] relative overflow-hidden flex items-center justify-center p-6">
              <img 
                src={DBLydLysLogo} 
                alt="DB Lyd & Lys Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-blue mb-2">DB Lyd & Lys</h3>
              <p className="text-brand-gray mb-4">
                Komplett nettløsning for DB Lyd & Lys, et ledende russebuss og lydutstyr utleieselskap.
              </p>
              <Link 
                to="/portfolio/db-lyd-lys" 
                className="inline-flex items-center text-brand-blue hover:text-brand-accent transition-colors"
                onClick={scrollToTop}
              >
                Se detaljer
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-medium rounded-md hover:bg-brand-blue/90 transition-colors"
            onClick={scrollToTop}
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
