
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-blue to-brand-lightBlue rounded-lg overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Klar til å ta din merkevare til neste nivå?
              </h2>
              <p className="text-lg text-gray-200 mb-8 max-w-3xl">
                La oss hjelpe deg med å skape en sterk digital tilstedeværelse som tiltrekker kunder og driver vekst. Ta kontakt for en uforpliktende samtale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="tel:+4712345678" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-blue font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +47 123 45 678
                </a>
                <a 
                  href="mailto:kontakt@gngbranding.no" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  kontakt@gngbranding.no
                </a>
              </div>
            </div>
            <div className="md:w-2/5">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-white font-bold rounded-md hover:bg-red-700 transition-colors w-full text-lg"
              >
                Kontakt oss i dag
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
