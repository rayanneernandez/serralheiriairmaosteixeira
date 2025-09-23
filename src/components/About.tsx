import React from 'react';
import { Award, Users, CheckCircle } from 'lucide-react';
import equipeTrabalho from "../img/equipetrabalho.jpg";
import fazendo from "../img/fazendo.png";
import trabalho from "../img/trabalhando.png";   
import janela from "../img/janelamercado.png";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="text-blue-600 mb-3">
        {icon}
      </div>
      <div className="text-3xl font-bold text-slate-800 mb-1">{value}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Sobre a Irmãos Teixeira</h2>
            <div className="w-24 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 mb-6">
              Há mais de 7 anos no mercado, a Irmãos Teixeira se destaca como referência em serviços de serralheria de alta qualidade. 
              Nossa trajetória é marcada pelo compromisso com a excelência e a satisfação dos clientes.
            </p>
            <p className="text-gray-600 mb-6">
              Contamos com uma equipe de profissionais altamente qualificados e equipamentos modernos e matéria-prima de primeira linha, garantindo resultados superiores em cada projeto que executamos.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Nossos Valores</h3>
              <ul className="space-y-3">
                {[
                  'Comprometimento com a qualidade e durabilidade',
                  'Pontualidade na entrega dos projetos',
                  'Atendimento personalizado e atencioso',
                  'Responsabilidade e ética profissional',
                  'Inovação constante em técnicas e materiais'
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={equipeTrabalho}
                  alt="Equipe de trabalho"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden shadow-lg md:mt-12">
                <img 
                  src={fazendo}
                  alt="fazendo trabalho"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden shadow-lg md:mt-12">
                <img 
                  src={trabalho}
                  alt="serviço"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={janela}
                  alt="janela mercado"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
