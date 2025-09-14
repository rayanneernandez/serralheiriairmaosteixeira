import React from 'react'; 
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-blue-600">Irmãos</span>Teixeira
            </div>
            <p className="text-gray-400 mb-6">
              Soluções em serralheria com qualidade, compromisso e excelência para projetos residenciais e comerciais.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/irmaos.teixeira.7587/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/serralheriairmaosteixeira?igsh=NjgxcTZmdGpzbGVp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {['Início', 'Serviços', 'Projetos', 'Sobre', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {[
                'Portões de Aluminios',
                'Estruturas de Aluminio',
                'Serralheria Residencial',
                'Vidros Temperados',
                'Projetos Industriais'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#serviços"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">(21) 98761-5163 / </span> 
                <span className="text-gray-400">(21) 98630-1941</span>

              </li>
              <li className="flex items-start"> 
                <Mail size={18} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">serralheriairmaosteixeira@gmail.com</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16.25A3.75 3.75 0 1 1 15.75 15 3.75 3.75 0 0 1 12 18.25z"></path>
                  </svg>
                </div>
                <span className="text-gray-400">Pilares - Rio de Janeiro, RJ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Irmãos Teixeira Serralheria. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-300">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-300">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
