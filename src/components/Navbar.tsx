
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-blue">GnG</span>
              <span className="text-2xl font-medium text-brand-accent">Branding</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-brand-gray hover:text-brand-blue transition-colors duration-200">
              Hjem
            </Link>
            <Link to="/about" className="text-brand-gray hover:text-brand-blue transition-colors duration-200">
              Om oss
            </Link>
            <Link to="/portfolio" className="text-brand-gray hover:text-brand-blue transition-colors duration-200">
              Portefølje
            </Link>
            <Link to="/contact" className="text-brand-gray hover:text-brand-blue transition-colors duration-200">
              Kontakt
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray hover:text-brand-blue focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-gray hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Hjem
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-gray hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Om oss
            </Link>
            <Link 
              to="/portfolio" 
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-gray hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Portefølje
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-gray hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
