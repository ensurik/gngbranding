
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-blue">GnG</span>
              <span className="text-2xl font-medium text-brand-accent">Branding</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" isActive={isActive('/')}>
              Hjem
            </NavLink>
            <NavLink to="/about" isActive={isActive('/about')}>
              Om oss
            </NavLink>
            <NavLink to="/portfolio" isActive={isActive('/portfolio')}>
              Portefølje
            </NavLink>
            <NavLink to="/contact" isActive={isActive('/contact')}>
              Kontakt
            </NavLink>
            <a href="tel:+4712345678" className="ml-4 inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-md hover:bg-brand-blue/90 transition-all text-sm">
              <Phone className="mr-2 h-4 w-4" />
              +47 123 45 678
            </a>
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
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" isActive={isActive('/')} onClick={() => setIsMenuOpen(false)}>
              Hjem
            </MobileNavLink>
            <MobileNavLink to="/about" isActive={isActive('/about')} onClick={() => setIsMenuOpen(false)}>
              Om oss
            </MobileNavLink>
            <MobileNavLink to="/portfolio" isActive={isActive('/portfolio')} onClick={() => setIsMenuOpen(false)}>
              Portefølje
            </MobileNavLink>
            <MobileNavLink to="/contact" isActive={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </MobileNavLink>
            <div className="py-3">
              <a href="tel:+4712345678" className="inline-flex items-center w-full px-4 py-2 bg-brand-blue text-white rounded-md hover:bg-brand-blue/90 transition-all text-sm">
                <Phone className="mr-2 h-4 w-4" />
                +47 123 45 678
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop Nav Link Component
const NavLink = ({ to, isActive, children }: { to: string; isActive: boolean; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className={`px-3 py-2 text-sm font-medium rounded-md ${
        isActive 
          ? 'text-brand-blue bg-gray-100' 
          : 'text-brand-gray hover:text-brand-blue hover:bg-gray-50'
      } transition-colors`}
    >
      {children}
    </Link>
  );
};

// Mobile Nav Link Component
const MobileNavLink = ({ to, isActive, onClick, children }: { 
  to: string; 
  isActive: boolean; 
  onClick: () => void;
  children: React.ReactNode 
}) => {
  return (
    <Link 
      to={to} 
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive 
          ? 'text-brand-blue bg-gray-100' 
          : 'text-brand-gray hover:text-brand-blue hover:bg-gray-50'
      } transition-colors`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
