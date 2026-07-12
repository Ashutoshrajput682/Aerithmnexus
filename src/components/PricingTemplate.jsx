import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingTemplate = ({ title, packages }) => {
  return (
    <div className="relative w-full overflow-hidden bg-[#031525] text-slate-50 font-sans min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        {/* HERO SECTION */}
        <section className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden">
          {/* Orbit Backgrounds */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="absolute w-[300px] h-[300px] rounded-full border border-slate-400"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border border-slate-400"></div>
            <div className="absolute w-[900px] h-[900px] rounded-full border border-slate-400"></div>
            <div className="absolute w-[1200px] h-[1200px] rounded-full border border-slate-400 border-dashed"></div>
            <div className="absolute w-[100px] h-[100px] rounded-full bg-blue-500 blur-[80px] opacity-50"></div>
          </div>

          {/* Floating Icons (Simulated) */}
          <div className="absolute inset-0 pointer-events-none">
             {/* We can place generic icons here representing the tech stack shown in screenshot */}
             <div className="absolute top-[20%] left-[20%] w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-[0_0_15px_rgba(255,255,255,0.2)]">f</div>
             <div className="absolute top-[40%] left-[30%] w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]">in</div>
             <div className="absolute top-[60%] left-[25%] w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(255,255,255,0.2)]">X</div>
             <div className="absolute top-[30%] right-[25%] w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] font-bold">5</div>
             <div className="absolute top-[65%] right-[20%] w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-800 shadow-[0_0_15px_rgba(255,255,255,0.2)] font-bold">W</div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-10 text-white"
            >
              {title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-6"
            >
              <Link to="/Contact" className="group flex items-center gap-2 bg-[#004e92] hover:bg-[#003b70] text-white px-6 py-3 rounded-full font-medium transition-all">
                Discuss With Us
                <span className="bg-white text-[#004e92] p-1 rounded-full group-hover:rotate-45 transition-transform"><ArrowUpRight className="w-4 h-4" /></span>
              </Link>
              <Link to="/Contact" className="group flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-6 py-3 rounded-full font-medium transition-all backdrop-blur-sm">
                Know More
                <span className="bg-white text-slate-900 p-1 rounded-full group-hover:rotate-45 transition-transform"><ArrowUpRight className="w-4 h-4" /></span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-10">
          <div className="text-center mb-12">
            <h2 className="text-sm tracking-widest text-slate-400 font-bold mb-6 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-sky-500"></span>
              BEST FOR RANKING
              <span className="w-8 h-[1px] bg-sky-500"></span>
            </h2>
            <div className="flex items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-400" /> Included</span>
              <span className="flex items-center gap-1"><X className="w-4 h-4 text-rose-400" /> Not Included</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Conditional / Client Dependent</span>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 ${packages.length === 3 ? 'lg:grid-cols-3' : 'xl:grid-cols-4'} gap-6 items-end`}>
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col rounded-3xl border ${pkg.isPopular ? 'border-sky-500 shadow-[0_0_30px_rgba(14,165,233,0.2)] z-10' : 'border-white/10 bg-[#061e35]'} overflow-hidden transition-all duration-300 hover:-translate-y-2`}
              >
                {pkg.isPopular && (
                  <div className="bg-sky-500 text-white text-xs font-bold text-center py-2 uppercase tracking-wider">
                    ★ BEST SELLER
                  </div>
                )}
                
                <div className={`p-8 ${pkg.isPopular ? 'bg-[#004e92]' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4 font-serif">{pkg.name}</h3>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-4xl font-bold text-sky-400">${pkg.price}</span>
                    {pkg.originalPrice ? (
                      <span className="text-sm text-slate-400 line-through mb-1">${pkg.originalPrice} / month</span>
                    ) : (
                      <span className="text-sm text-slate-400 mb-1">/ month</span>
                    )}
                  </div>
                  {pkg.savePercent ? (
                    <div className="inline-block px-3 py-1 bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-full mb-8">
                      SAVE {pkg.savePercent}%
                    </div>
                  ) : (
                    <div className="mb-8 h-[26px]"></div>
                  )}
                  
                  <Link to="/Contact" className="w-full group flex items-center justify-between border border-white/20 hover:border-white text-white px-6 py-3 rounded-full font-bold transition-all">
                    Buy Now
                    <span className="bg-white text-slate-900 p-1 rounded-full group-hover:rotate-45 transition-transform"><ArrowUpRight className="w-4 h-4" /></span>
                  </Link>
                </div>

                <div className={`flex-1 p-8 border-t ${pkg.isPopular ? 'bg-[#004e92]/80 border-white/10' : 'bg-[#031525]/50 border-white/5'}`}>
                  {pkg.sections ? (
                    pkg.sections.map((section, sIdx) => (
                      <React.Fragment key={sIdx}>
                        {sIdx > 0 && <div className="w-full h-[1px] bg-white/10 my-6"></div>}
                        <h4 className="text-xs font-bold text-sky-400 mb-6 uppercase tracking-wider">{section.title}</h4>
                        <ul className="space-y-4">
                          {section.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              {feature.status === 'included' && <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                              {feature.status === 'not-included' && <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
                              {feature.status === 'conditional' && <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />}
                              <span className={`text-sm ${feature.status === 'not-included' ? 'text-slate-500' : 'text-slate-300'}`}>{feature.text}</span>
                            </li>
                          ))}
                        </ul>
                      </React.Fragment>
                    ))
                  ) : (
                    <>
                      <h4 className="text-xs font-bold text-sky-400 mb-6 uppercase tracking-wider">Scope of Work</h4>
                      <ul className="space-y-4">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            {feature.status === 'included' && <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                            {feature.status === 'not-included' && <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
                            {feature.status === 'conditional' && <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />}
                            <span className={`text-sm ${feature.status === 'not-included' ? 'text-slate-500' : 'text-slate-300'}`}>{feature.text}</span>
                          </li>
                        ))}
                      </ul>

                      {pkg.reports && pkg.reports.length > 0 && (
                        <>
                          <div className="w-full h-[1px] bg-white/10 my-6"></div>
                          <h4 className="text-xs font-bold text-sky-400 mb-6 uppercase tracking-wider">Reports</h4>
                          <ul className="space-y-4">
                            {pkg.reports.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                {feature.status === 'included' && <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                                {feature.status === 'not-included' && <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
                                {feature.status === 'conditional' && <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />}
                                <span className={`text-sm ${feature.status === 'not-included' ? 'text-slate-500' : 'text-slate-300'}`}>{feature.text}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {pkg.customerSupport && pkg.customerSupport.length > 0 && (
                        <>
                          <div className="w-full h-[1px] bg-white/10 my-6"></div>
                          <h4 className="text-xs font-bold text-sky-400 mb-6 uppercase tracking-wider">Customer Support</h4>
                          <ul className="space-y-4">
                            {pkg.customerSupport.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                {feature.status === 'included' && <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                                {feature.status === 'not-included' && <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
                                {feature.status === 'conditional' && <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />}
                                <span className={`text-sm ${feature.status === 'not-included' ? 'text-slate-500' : 'text-slate-300'}`}>{feature.text}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingTemplate;
