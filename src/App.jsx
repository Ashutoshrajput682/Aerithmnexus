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
import ServiceDetailPage from './pages/ServiceDetailPage';
import AIBackground from './components/AIBackground';
import GetQuotePage from './pages/GetQuotePage';

function App() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-950 text-slate-50 font-sans">
      <AIBackground />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/pricing/ai-powered-seo" element={<PricingAIPoweredSEO />} />
        <Route path="/pricing/smo" element={<PricingSMO />} />
        <Route path="/pricing/web-dev" element={<PricingWebDev />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
      </Routes>
    </div>
  );
}

export default App;
