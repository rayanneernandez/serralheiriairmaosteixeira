import React from 'react';
import { Shield, Home, Building, PenTool as Tool, Cog, Truck, PanelsTopLeft } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl group"
      data-aos="fade-up"
    >
      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors duration-300">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Portões e Grades',
      description:
        'Portões automáticos, grades de segurança, portões basculantes e deslizantes fabricados com materiais de alta qualidade.',
      icon: <Shield size={32} />,
    },
    {
      title: 'Estruturas de Alumínio',
      description:
        'Estruturas de alumínio e vidros para coberturas, escadas, galpões e outras aplicações industriais e residenciais.',
      icon: <Building size={32} />,
    },
    {
      title: 'Serralheria Residencial',
      description:
        'Soluções personalizadas em alumínio e vidros para residências, incluindo corrimãos, janelas e portas.',
      icon: <Home size={32} />,
    },
    {
      title: 'Manutenção e Reparos',
      description:
        'Serviços de manutenção e reparo em estruturas de alumínios, portões, grades e outras instalações de serralheria.',
      icon: <Tool size={32} />,
    },
    {
      title: 'Projetos Industriais',
      description:
        'Desenvolvimento e execução de projetos industriais em alumínio em vidro, atendendo às especificações técnicas e de segurança.',
      icon: <Cog size={32} />,
    },
    {
      title: 'Instalação e Transporte',
      description:
        'Serviços de instalação profissional e transporte seguro para todas as nossas soluções em serralheria.',
      icon: <Truck size={32} />,
    },

    {
      title: 'Vidros / Blindex',
      description: 'Tudo em vidros laminados, temperados e Box blindex, com qualidade e segurança garantidas.',
      icon: <PanelsTopLeft size={32} />,
    },

  ];

  return (
    <section id="serviços" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços de serralheria para atender às suas
            necessidades residenciais e comerciais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
