import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Discos from './components/Discos';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  const lenis = useLenis(({ scroll }) => {
    // Aquí puedes manejar eventos de scroll
    console.log(`Scroll position: ${scroll}`);
  });

  return (
    <ReactLenis root>
      <div className="App">
        <Header />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <Discos />
        </section>
        <section id="contact">
        <Galeria />
        </section>
        <Contacto />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
