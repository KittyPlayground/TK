import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {ParallaxProvider} from "react-scroll-parallax";


function App() {
  return (
      <ParallaxProvider>
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </ParallaxProvider>
  );
}

export default App;