import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ChevronRight } from 'lucide-react';
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

const Navbar = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
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
            <Code2 className="text-blue-400 w-7 h-7 sm:w-8 sm:h-8 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <span className="font-extrabold text-base sm:text-xl tracking-tight text-white">
               Aerithmnexus
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.href
                    ? 'text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.08)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/8'
                }`}
              >
                {link.name}
              </Link>
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
            <div className="px-3 py-3 space-y-1 bg-slate-950/80 backdrop-blur-xl rounded-b-2xl">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === link.href
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </Link>
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
