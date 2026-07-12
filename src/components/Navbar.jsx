import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Home',     href: '/' },
  { name: 'Services', href: '/Services' },
  { name: 'Projects', href: '/Projects' },
  { name: 'Pricing',  href: '/Pricing' },
  { name: 'About',    href: '/About' },
  { name: 'Contact',  href: '/Contact' },
];

const servicesColumns = [
  {
    title: 'SEO',
    items: [
      { name: 'Ecommerce SEO Service', href: '/Services' },
      { name: 'Local SEO Service', href: '/Services' },
      { name: 'Technical SEO Service', href: '/Services' },
      { name: 'SEO Reseller Service', href: '/Services' },
      { name: 'White Label SEO Service', href: '/Services' },
    ]
  },
  {
    title: 'Performance Marketing',
    items: [
      { name: 'PPC Ads', href: '/Services' },
      { name: 'Meta Ads', href: '/Services' },
    ]
  },
  {
    title: 'Website Design &\nDevelopment',
    items: [
      { name: 'WordPress Development', href: '/Services' },
    ]
  },
  {
    title: 'Local SEO Services',
    items: [
      { name: 'Small Business SEO', href: '/Services' },
    ]
  },
  {
    title: 'Ecommerce Development',
    items: [
      { name: 'Shopify Development', href: '/Services' },
    ]
  },
  {
    title: 'Social Media Marketing',
    items: [
      { name: 'Social Media Optimization', href: '/Services' },
      { name: 'Social Media Advertising', href: '/Services' },
    ]
  }
];

const pricingPackages = [
  { name: 'AI-POWERED SEO', href: '/pricing/ai-powered-seo' },
  { name: 'SMO', href: '/pricing/smo' },
  { name: 'WEB DEV', href: '/pricing/web-dev' },
  { name: 'AEO + GEO', href: '/pricing/aeo-geo' }
];

const Navbar = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({ Services: false, Pricing: false });
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <nav
      className={`fixed top-3 left-3 right-3 sm:top-4 sm:left-6 sm:right-6 md:left-8 md:right-8 z-50 rounded-2xl border transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-slate-950/90 border-white/15 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl'
          : 'bg-white/5 border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/img/logo.svg" alt="Aerithmnexus Logo" className="h-10 sm:h-10 w-60 object-contain" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (link.name === 'Services' || link.name === 'Pricing') {
                    setActiveDropdown(link.name);
                  }
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    location.pathname === link.href || activeDropdown === link.name
                      ? 'text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.08)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/8'
                  }`}
                >
                  {link.name}
                  {(link.name === 'Services' || link.name === 'Pricing') && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Services Mega Menu */}
                {link.name === 'Services' && (
                  <AnimatePresence>
                    {activeDropdown === 'Services' && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[120%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1000px] bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 lg:p-8 z-50 flex flex-col before:absolute before:content-[''] before:-top-4 before:left-0 before:w-full before:h-4"
                      >
                         <h2 className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest border-b border-slate-100 pb-2">OUR SERVICES</h2>
                         <div className="flex gap-6 justify-between flex-wrap">
                          {servicesColumns.map((category, idx) => (
                            <div key={idx} className="flex-1 min-w-[140px]">
                              <h3 className="text-[15px] font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 whitespace-pre-line leading-tight">
                                {category.title}
                              </h3>
                              <ul className="space-y-3">
                                {category.items.map((item) => (
                                  <li key={item.name} className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-slate-400 mt-[2px] shrink-0" />
                                    <Link
                                      to={item.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="text-[14px] text-slate-600 hover:text-blue-600 transition-colors duration-200 block leading-tight"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Pricing Dropdown */}
                {link.name === 'Pricing' && (
                  <AnimatePresence>
                    {activeDropdown === 'Pricing' && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[120%] left-1/2 -translate-x-1/2 w-[340px] bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 z-50 flex flex-col before:absolute before:content-[''] before:-top-4 before:left-0 before:w-full before:h-4"
                      >
                         <h2 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">OUR PACKAGES</h2>
                         <div className="space-y-3 flex-1 mb-6">
                            {pricingPackages.map((pkg) => (
                              <Link
                                key={pkg.name}
                                to={pkg.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-center justify-between px-5 py-4 border border-slate-100 rounded-2xl hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300"
                              >
                                <span className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{pkg.name}</span>
                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                              </Link>
                            ))}
                         </div>
                         
                         <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[13px] text-slate-500">Need a custom quote?</span>
                            <Link
                              to="/Contact"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[13px] font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"
                            >
                              Talk to us &rarr;
                            </Link>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link
              to="/Contact"
              className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-3 py-3 space-y-1 bg-slate-950/80 backdrop-blur-xl rounded-b-2xl max-h-[80vh] overflow-y-auto">
              {links.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between group">
                    <Link
                      to={link.href}
                      onClick={() => {
                        if (link.name !== 'Services' && link.name !== 'Pricing') setIsOpen(false);
                      }}
                      className={`flex-1 flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        location.pathname === link.href
                          ? 'text-white bg-white/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      {link.name !== 'Services' && link.name !== 'Pricing' && <ChevronRight className="w-4 h-4 opacity-40" />}
                    </Link>
                    
                    {(link.name === 'Services' || link.name === 'Pricing') && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown(link.name);
                        }}
                        className="p-3 text-slate-300 hover:text-white focus:outline-none"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdowns[link.name] ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Services Accordion */}
                  {link.name === 'Services' && (
                    <AnimatePresence>
                      {mobileDropdowns['Services'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-slate-900/50 rounded-xl mt-1 mb-2"
                        >
                          <div className="px-4 py-3 space-y-5">
                            {servicesColumns.map((category, idx) => (
                              <div key={idx}>
                                <h4 className="text-xs font-bold text-white/70 mb-2 uppercase tracking-wider">{category.title.replace('\n', ' ')}</h4>
                                <ul className="space-y-1 pl-2 border-l border-white/10">
                                  {category.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        to={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-sm text-slate-300 hover:text-blue-400 py-1.5 pl-2"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Mobile Pricing Accordion */}
                  {link.name === 'Pricing' && (
                    <AnimatePresence>
                      {mobileDropdowns['Pricing'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-slate-900/50 rounded-xl mt-1 mb-2"
                        >
                          <div className="px-4 py-3 space-y-2">
                             <h4 className="text-xs font-bold text-white/50 mb-3 uppercase tracking-wider">OUR PACKAGES</h4>
                            {pricingPackages.map((pkg) => (
                              <Link
                                key={pkg.name}
                                to={pkg.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between text-sm text-slate-200 hover:text-white py-2 px-3 hover:bg-white/5 rounded-lg border border-white/5"
                              >
                                {pkg.name}
                                <ArrowRight className="w-4 h-4 text-white/30" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  to="/Contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-bold shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
