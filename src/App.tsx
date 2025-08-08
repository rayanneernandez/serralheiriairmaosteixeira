import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    // Atualizar título da página
    document.title = 'Irmãos Teixeira - Serralheria e Estruturas Metálicas';
    
    // Atualizar favicon com a nova logo
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/logo.png'; // Usar a nova logo como favicon
    }
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;