import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUpRight, Zap } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', url: '#', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { name: 'Instagram', url: '#', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
    { name: 'X', url: '#', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg> },
    { name: 'LinkedIn', url: '#', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> }
  ];

  return (
    <footer className="relative bg-slate-950 pt-20 sm:pt-24 pb-8 sm:pb-10 border-t border-white/5 overflow-hidden z-10">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-500/10 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Call to Action Banner inside Footer */}
        <div className="mb-20 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-sky-900/40 to-blue-900/40 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Ready to elevate your brand?</h3>
            <p className="text-sky-200/80 text-lg max-w-lg">Join hundreds of successful businesses scaling their digital presence with us.</p>
          </div>
          <Link to="/Contact" className="group flex items-center gap-3 bg-white text-slate-900 hover:bg-sky-50 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 shrink-0">
            Start Your Journey
            <span className="bg-slate-900 text-white p-1 rounded-full group-hover:rotate-45 transition-transform"><ArrowUpRight className="w-4 h-4" /></span>
          </Link>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src="/img/logo.svg" alt="Aerithmnexus Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Creating digital experiences that inspire and convert. We combine modern design with cutting-edge technology to build premium web solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  aria-label={link.name}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all hover:-translate-y-1 shadow-lg"
                >
                  {link.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:ml-8">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wider uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span> Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home',     href: '/' },
                { name: 'Services', href: '/Services' },
                { name: 'Projects', href: '/Projects' },
                { name: 'Pricing',  href: '/Pricing' },
                { name: 'About Us', href: '/About' },
                { name: 'Contact',  href: '/Contact' },
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-slate-400 hover:text-sky-400 text-sm sm:text-base transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                    <span className="group-hover:translate-x-1 transition-transform">{l.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wider uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span> Services
            </h4>
            <ul className="space-y-4">
              {['Web Development','Mobile Apps','UI/UX Design','SEO Services','Ecommerce','Digital Marketing'].map((s) => (
                <li key={s}>
                  <Link to="/Services" className="text-slate-400 hover:text-sky-400 text-sm sm:text-base transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                    <span className="group-hover:translate-x-1 transition-transform">{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wider uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span> Legal
            </h4>
            <ul className="space-y-4 mb-8">
              {['Privacy Policy','Terms of Service','Refund Policy'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-slate-400 hover:text-sky-400 text-sm sm:text-base transition-colors">{l}</a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span> Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@aerithmnexus.com" className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm sm:text-base transition-colors group">
                  <Mail className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  hello@aerithmnexus.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm sm:text-base transition-colors group">
                  <Phone className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p className="flex items-center gap-1">
            &copy; {year} <span className="text-white font-semibold">Aerithmnexus</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Built with <Zap className="w-4 h-4 text-sky-400" /> & Passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
