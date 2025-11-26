import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="nosotros">
          <About />
        </section>
        <section id="servicios">
          <Services />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contacto">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;