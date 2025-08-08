import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5521999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-5 bottom-5 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 flex items-center justify-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.4 14.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0-.2-.1-.9-.3-1.6-1.1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3 0-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.4.1-.5.2-.2.1-.7.7-.7 1.7s.7 2 .8 2.1c.1.1 1.4 2.1 3.3 2.9.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4 0 1.1-.5 1.3-.9.2-.5.2-.9.1-1 0-.1-.2-.1-.4-.2m-4.1 5.7h-.1c-1.1 0-2.2-.3-3.2-.9l-.2-.1-2.4.6.6-2.3-.2-.2a6.8 6.8 0 01-1-3.5c0-3.7 3-6.8 6.8-6.8 1.8 0 3.5.7 4.8 2a6.7 6.7 0 012 4.8c0 3.7-3 6.7-6.8 6.7m5.8-12.5c-1.5-1.5-3.6-2.3-5.8-2.3a8 8 0 00-8.3 8.3c0 1.5.4 2.9 1.1 4.1L2 24l6.3-1.6c1.2.6 2.5 1 3.9 1 4.6 0 8.3-3.7 8.3-8.3 0-2.2-.8-4.3-2.4-5.9" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;