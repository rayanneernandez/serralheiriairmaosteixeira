import React from 'react';

const ContactCallToAction: React.FC = () => {
  // Link para WhatsApp - ajuste seu número aqui
  const whatsappLink = "https://wa.me/5521987615163?text=Olá!%20Quero%20conhecer%20mais%20sobre%20os%20serviços%20e%20solicitar%20um%20orçamento.";

  
  return (
    <section className="bg-[#003a77] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white max-w-xl">
          <p className="uppercase tracking-widest mb-2 text-sm font-semibold">Alguma dúvida? ou Solicitação de orçamento?</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Entre em contato conosco já!
          </h2>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#003a77] font-semibold rounded shadow-lg px-8 py-3 hover:shadow-xl transition-shadow"
        >
          Entre em contato
        </a>
      </div>
    </section>
  );
};

export default ContactCallToAction;
