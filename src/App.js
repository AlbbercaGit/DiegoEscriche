import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Discos from './components/Discos';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import { ReactLenis, useLenis } from 'lenis/react'

function Layout() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })



}

function App() {
  return (
    <div className="App">
          <ReactLenis root>
      <Header />
      <Hero />
      <Discos />
      <Galeria />
      <Footer />
      </ReactLenis>
    </div>
  );
}

export default App;