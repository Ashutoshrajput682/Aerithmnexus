import React from 'react';
import Navbar from '../components/Navbar';
import CanvasContainer from '../components/CanvasContainer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
// import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <CanvasContainer />
      <div className="relative z-10 flex flex-col w-full">
        <Navbar />
        <main>
          <Hero />
           <About />
          <Services />
          <Projects />
          {/* <Pricing /> */}
         
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
