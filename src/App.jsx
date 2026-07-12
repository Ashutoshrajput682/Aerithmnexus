import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingAIPoweredSEO from './pages/PricingAIPoweredSEO';
import PricingSMO from './pages/PricingSMO';
import PricingWebDev from './pages/PricingWebDev';
import PricingAEOGEO from './pages/PricingAEOGEO';

function App() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-slate-50 font-sans">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/pricing/ai-powered-seo" element={<PricingAIPoweredSEO />} />
        <Route path="/pricing/smo" element={<PricingSMO />} />
        <Route path="/pricing/web-dev" element={<PricingWebDev />} />
        <Route path="/pricing/aeo-geo" element={<PricingAEOGEO />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
