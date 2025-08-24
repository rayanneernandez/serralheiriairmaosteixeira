import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redireciona para WhatsApp no número principal com a mensagem personalizada
    window.open(
      'https://wa.me/552187615163?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20dos%20irmãos%20teixeira.',
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades e transformar suas ideias em realidade. 
            Entre em contato para um orçamento sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de contato + Mapa */}
          <div className="bg-slate-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-lg text-white mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">Pilares - Rio de Janeiro, RJ</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-lg text-white mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Telefone</h4>
                  <p className="text-gray-600">(21) 98761-5163 / (21) 98630-1941</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-lg text-white mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                  <p className="text-gray-600">serralheriairmaosteixeira@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.265290437013!2d-43.2952328!3d-22.8806291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997cf97cbc015d%3A0x7dd6ddc297dbefd0!2sPilares%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1692899930000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização - Pilares"
              ></iframe>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 text-white"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 text-white"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 text-white"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block mb-2 text-sm font-medium">Serviço de Interesse</label>
                <select 
                  id="service" 
                  className="w-full p-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 text-white"
                  required
                >
                  <option value="">Selecione um serviço</option>
                  <option value="portoes">Portões e Grades</option>
                  <option value="estruturas">Estruturas Metálicas</option>
                  <option value="residencial">Serralheria Residencial</option>
                  <option value="manutencao">Manutenção e Reparos</option>
                  <option value="projetos">Projetos Industriais</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 text-white"
                  placeholder="Descreva seu projeto ou necessidade..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Enviar Mensagem
                <Send size={18} className="ml-2" />
              </button>

              <p className="text-sm text-gray-400 text-center mt-4">
                Ou entre em contato diretamente via WhatsApp:
              </p>
              <a 
                href="https://wa.me/552187615163?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20dos%20irmãos%20teixeira." 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Falar via WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
