import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Globe, Mail, MessageCircle, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-slate-800/60 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/img/logo.svg" alt="Aerithmnexus Logo" className="h-8 sm:h-10 w-auto object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              Creating digital experiences that inspire and convert. We combine modern design with
              cutting-edge technology to build premium web solutions.
            </p>
            <div className="flex gap-3">
              {[Globe, Mail, MessageCircle, Phone].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home',     href: '/' },
                { name: 'Services', href: '/Services' },
                { name: 'Projects', href: '/Projects' },
                { name: 'Pricing',  href: '/Pricing' },
                { name: 'About Us', href: '/About' },
                { name: 'Contact',  href: '/Contact' },
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-1 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-all" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Web Development','Mobile Apps','UI/UX Design','SEO Services','Ecommerce','Digital Marketing'].map((s) => (
                <li key={s}>
                  <Link to="/Services" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-1 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-all" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4">Legal</h4>
            <ul className="space-y-2.5 mb-6">
              {['Privacy Policy','Terms of Service','Cookie Policy','Refund Policy'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">{l}</a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3">Contact</h4>
            <ul className="space-y-1.5">
              <li><a href="mailto:hello@webdevagency.com" className="text-slate-400 hover:text-blue-400 text-xs sm:text-sm transition-colors">hello@webdevagency.com</a></li>
              <li><a href="tel:+15551234567" className="text-slate-400 hover:text-blue-400 text-xs sm:text-sm transition-colors">+1 (555) 123-4567</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 text-slate-500 text-xs sm:text-sm">
          <p>&copy; {year} WebDev Agency. All rights reserved.</p>
          <p className="text-slate-600">Built with React · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
