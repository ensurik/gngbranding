
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-blue to-brand-lightBlue rounded-lg overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:py-16 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Klar til å ta din merkevare til neste nivå?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              La oss hjelpe deg med å skape en sterk digital tilstedeværelse som tiltrekker kunder og driver vekst.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-blue font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Kontakt oss i dag
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
