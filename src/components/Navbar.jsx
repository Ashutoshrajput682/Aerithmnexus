import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ChevronRight, ChevronDown } from 'lucide-react';
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

const servicesCategories = [
  {
    title: 'DEVELOPMENT',
    items: [
      { name: 'Web Development', href: '/Services' },
      { name: 'ERP Development', href: '/Services' },
      { name: 'Core PHP Development', href: '/Services' },
      { name: 'E-Commerce Development', href: '/Services' },
      { name: 'Laravel Development', href: '/Services' },
      { name: 'Web Application Development', href: '/Services' },
      { name: 'PSD To HTML Conversion', href: '/Services' },
    ]
  },
  {
    title: 'DESIGNING',
    items: [
      { name: 'Website Designing', href: '/Services' },
      { name: 'Website Redesigning', href: '/Services' },
      { name: 'Logo Designing', href: '/Services' },
    ]
  },
  {
    title: 'CMS DEVELOPMENT',
    items: [
      { name: 'Wordpress Development', href: '/Services' },
      { name: 'Moodle Development', href: '/Services' },
      { name: 'Drupal Development', href: '/Services' },
    ]
  }
];

const Navbar = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

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
                onMouseEnter={() => link.name === 'Services' && setActiveDropdown('Services')}
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
                  {link.name === 'Services' && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'Services' ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Desktop Mega Menu */}
                {link.name === 'Services' && (
                  <AnimatePresence>
                    {activeDropdown === 'Services' && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[120%] left-1/2 -translate-x-1/2 w-[700px] lg:w-[800px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 lg:p-8 z-50 flex gap-6 lg:gap-8 before:absolute before:content-[''] before:-top-4 before:left-0 before:w-full before:h-4"
                      >
                        {servicesCategories.map((category) => (
                          <div key={category.title} className="flex-1">
                            <h3 className="text-sm font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
                              {category.title}
                              <span className="h-[2px] w-4 bg-blue-500 rounded-full inline-block"></span>
                            </h3>
                            <ul className="space-y-3">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="text-sm text-slate-300 hover:text-emerald-400 hover:bg-white/5 px-2 py-1.5 -mx-2 rounded-lg transition-all duration-200 block"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
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
                        if (link.name !== 'Services') setIsOpen(false);
                      }}
                      className={`flex-1 flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        location.pathname === link.href
                          ? 'text-white bg-white/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      {link.name !== 'Services' && <ChevronRight className="w-4 h-4 opacity-40" />}
                    </Link>
                    
                    {link.name === 'Services' && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileServicesOpen(!mobileServicesOpen);
                        }}
                        className="p-3 text-slate-300 hover:text-white focus:outline-none"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Services Accordion */}
                  {link.name === 'Services' && (
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-6 pr-4 py-2 space-y-4">
                            {servicesCategories.map((category) => (
                              <div key={category.title}>
                                <h4 className="text-xs font-bold text-white/70 mb-2 uppercase tracking-wider">{category.title}</h4>
                                <ul className="space-y-1">
                                  {category.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        to={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-sm text-slate-300 hover:text-emerald-400 py-1.5"
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
