import React from 'react';
import { ArrowRight } from 'lucide-react';
import aluminioImg from '../img/aluminio.jpg'; // ajuste o caminho conforme a pasta real

const Hero: React.FC = () => {
  return (
    <section id="aluminio" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${aluminioImg})`, // usando a importação
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transformando <span className="text-blue-500">Alumínio</span> e <span className="text-blue-500">Vidro</span> em Arte com Precisão

          </h1>
          <p className="text-xl mb-8 text-gray-200" data-aos="fade-up" data-aos-delay="200">
            Soluções personalizadas em serralheria para sua casa ou empresa.
            <br /> 
            Portões, portas, janelas, gradil, blindex, caixas de ar condicionado e muito mais com qualidade e excelência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
            <a 
              href="https://wa.me/5521987615163?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Solicitar Orçamento
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a 
              href="#serviços" 
              className="border-2 border-white hover:border-blue-500 hover:text-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
