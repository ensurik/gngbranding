
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Shield, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0e1f33] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src="/lovable-uploads/a2a7ebd8-4472-46d5-b442-47bc4d9d980c.png" alt="GnG Branding Logo" className="h-14" />
              <p className="text-xs mt-1 text-gray-400">BRANDING SOLUTIONS</p>
            </div>
            <p className="mb-4 text-gray-300">
              Vi hjelper din bedrift med å bygge et sterkt merkevare og digitalt nærvær som skaper resultater og vekst.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links and Services */}
          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-xl font-bold mb-4">Hurtiglenker</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                    <span className="h-1 w-1 rounded-full bg-[#e74c3c] mr-2"></span>
                    Hjem
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                    <span className="h-1 w-1 rounded-full bg-[#e74c3c] mr-2"></span>
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                    <span className="h-1 w-1 rounded-full bg-[#e74c3c] mr-2"></span>
                    Portefølje
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                    <span className="h-1 w-1 rounded-full bg-[#e74c3c] mr-2"></span>
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Tjenester</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/tjenester/webdesign" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                    <span className="h-1 w-1 rounded-full bg-[#e74c3c] mr-2"></span>
                    Webdesign
                  </Link>
                </li>
                <li>
                  <Link to="/tjenester/grafisk-design" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                    <span className="h-1 w-1 rounded-full bg-[#e74c3c] mr-2"></span>
                    Grafisk Design
                  </Link>
                </li>
                <li>
                  <Link to="/tjenester/digital-markedsføring" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                    <span className="h-1 w-1 rounded-full bg-[#e74c3c] mr-2"></span>
                    Digital Markedsføring
                  </Link>
                </li>
                <li>
                  <Link to="/tjenester/merkevare" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                    <span className="h-1 w-1 rounded-full bg-[#e74c3c] mr-2"></span>
                    Merkevarebygging
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt oss</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#e74c3c]" />
                <span>Oslo, Norge</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#e74c3c]" />
                <span>+47 123 45 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#e74c3c]" />
                <span>kontakt@gngbranding.no</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-[#e74c3c]" />
                <span>Man-Fre: 09.00 - 16.00</span>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-[#e74c3c]" />
                <span className="text-sm">Sikker betaling</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-[#e74c3c]" />
                <span className="text-sm">Kvalitetsgaranti</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} GnGBranding. Alle rettigheter reservert.
            </p>
            <div className="flex space-x-4">
              <Link to="/personvern" className="text-gray-300 hover:text-white text-sm">Personvern</Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white text-sm">Cookies</Link>
              <Link to="/vilkar" className="text-gray-300 hover:text-white text-sm">Vilkår</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
