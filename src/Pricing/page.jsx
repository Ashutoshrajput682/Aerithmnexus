import React from 'react';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import Projects from './components/Projects';
import Pricing from './components/Pricing';
// import About from './components/About';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import CanvasContainer from './components/CanvasContainer';

function App() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-slate-50 font-sans">
      {/* <CanvasContainer /> */}
      <div className="relative z-10 flex flex-col w-full">
        <Navbar />
        <main>
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
