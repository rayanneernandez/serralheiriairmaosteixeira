import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../img/logo.png'; // ajuste o caminho conforme onde salvou

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          
          {/* Logo + Nome */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Logo Irmãos Teixeira" 
              className="h-12 w-auto" 
            />
            {/* Nome só no desktop */}
            <span className="hidden md:inline text-white font-bold text-2xl">
              <span className="text-blue-500">Irmãos</span> Teixeira
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Início', 'Serviços', 'Projetos', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-500 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:+5521987615163" 
              className="flex items-center text-white"
            >
              <Phone size={18} className="mr-2" />
              (21) 98761-5163
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 mt-4 rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              {['Início', 'Serviços', 'Projetos', 'Sobre', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-500 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="tel:+5521999999999" 
                className="flex items-center text-white py-2"
              >
                <Phone size={18} className="mr-2" />
                (21) 99999-9999
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
