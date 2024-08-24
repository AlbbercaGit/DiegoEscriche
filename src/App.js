import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Discos from './components/Discos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Discos />
      <Footer />
    </div>
  );
}

export default App;