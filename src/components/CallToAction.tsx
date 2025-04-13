
import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const benefits = [
    "Få en profesjonell nettside som konverterer besøkende til kunder",
    "Bygg en sterk merkevare som skiller deg ut i markedet",
    "Øk din synlighet på nett og nå flere potensielle kunder",
    "Gratis oppfølging i 3 måneder etter lansering"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0e1f33] to-[#2e4562] rounded-lg overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-7/12 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Klar til å ta din merkevare til neste nivå?
              </h2>
              <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                La oss hjelpe deg med å skape en sterk digital tilstedeværelse som tiltrekker kunder og driver vekst.
              </p>
              
              <ul className="space-y-2 mb-6 max-w-md mx-auto md:mx-0">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#e74c3c] shrink-0 mt-0.5" />
                    <span className="text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="tel:+4712345678" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0e1f33] font-medium rounded-md hover:bg-gray-100 transition-colors"
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
            <div className="md:w-4/12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0e1f33] mb-4">Få et uforpliktende tilbud</h3>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Ditt navn" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0e1f33]/50" />
                  </div>
                  <div>
                    <input type="email" placeholder="Din e-post" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0e1f33]/50" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Ditt telefonnummer" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0e1f33]/50" />
                  </div>
                  <div>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0e1f33]/50">
                      <option value="">Velg tjeneste</option>
                      <option value="webdesign">Webdesign</option>
                      <option value="branding">Merkevarebygging</option>
                      <option value="marketing">Digital Markedsføring</option>
                    </select>
                  </div>
                  <button type="button" className="w-full bg-[#e74c3c] text-white font-bold py-3 px-4 rounded hover:bg-[#c0392b] transition-colors flex items-center justify-center">
                    Send forespørsel
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Vi svarer normalt innen 24 timer på hverdager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
