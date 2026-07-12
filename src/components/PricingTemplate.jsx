import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, X, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingTemplate = ({ title, packages }) => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-950 text-slate-50 font-sans min-h-screen flex flex-col">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-500/20 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      <Navbar />

      <main className="flex-grow pt-24 pb-20 relative z-10">
        {/* HERO SECTION */}
        <section className="relative w-full pt-20 pb-16 lg:pt-28 lg:pb-24 flex flex-col items-center justify-center">
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 text-sm font-medium mb-6 backdrop-blur-md shadow-lg"
            >
              <Zap className="w-4 h-4 text-sky-400" />
              <span>Transparent Pricing, Premium Results</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-sans font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-300 tracking-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
            >
              Choose the perfect plan tailored for your business growth. No hidden fees, just pure value.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link to="/Contact" className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:-translate-y-1">
                Discuss With Us
                <span className="bg-white/20 text-white p-1 rounded-full group-hover:rotate-45 transition-transform"><ArrowUpRight className="w-4 h-4" /></span>
              </Link>
              <Link to="/Contact" className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-md hover:-translate-y-1">
                Know More
                <span className="bg-white/10 text-white p-1 rounded-full group-hover:rotate-45 transition-transform"><ArrowUpRight className="w-4 h-4" /></span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-slate-300 mb-16 bg-white/5 border border-white/10 rounded-full py-4 px-8 backdrop-blur-md max-w-3xl mx-auto shadow-xl">
            <span className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-400 bg-emerald-400/10 p-0.5 rounded-full" /> <span className="font-medium">Included</span></span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-600"></span>
            <span className="flex items-center gap-2"><X className="w-5 h-5 text-rose-400 bg-rose-400/10 p-0.5 rounded-full" /> <span className="font-medium">Not Included</span></span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-600"></span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400 bg-sky-400/10 p-0.5 rounded-full" /> <span className="font-medium">Conditional / Client Dependent</span></span>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 ${packages.length === 3 ? 'lg:grid-cols-3' : 'xl:grid-cols-4'} gap-8 items-stretch`}>
            {packages.map((pkg, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative flex flex-col rounded-[2.5rem] ${pkg.isPopular ? 'border border-sky-400/50 bg-gradient-to-b from-sky-900/40 to-slate-900/80 shadow-[0_0_40px_rgba(14,165,233,0.15)] md:-mt-4 md:mb-4' : 'border border-white/10 bg-slate-900/60 hover:bg-slate-800/80 hover:border-white/20'} backdrop-blur-xl overflow-hidden transition-all duration-500`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {pkg.isPopular && (
                  <div className="absolute top-0 inset-x-0">
                    <div className="bg-gradient-to-r from-sky-400 to-blue-600 text-white text-[10px] sm:text-xs font-bold text-center py-2 uppercase tracking-[0.2em] shadow-lg">
                      Most Popular Choice
                    </div>
                  </div>
                )}
                
                <div className={`p-8 sm:p-10 ${pkg.isPopular ? 'pt-14 sm:pt-16' : ''}`}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight text-white">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">${pkg.price}</span>
                    <span className="text-sm text-slate-400 font-medium">/ month</span>
                  </div>
                  
                  <div className="flex items-center gap-3 h-[32px] mb-8">
                    {pkg.originalPrice && (
                      <span className="text-sm text-slate-500 line-through decoration-slate-600">${pkg.originalPrice}</span>
                    )}
                    {pkg.savePercent && (
                      <span className="inline-flex px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">
                        SAVE {pkg.savePercent}%
                      </span>
                    )}
                  </div>
                  
                  <Link to="/Contact" className={`w-full group/btn flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${pkg.isPopular ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-[0_8px_20px_-6px_rgba(14,165,233,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(14,165,233,0.6)]' : 'bg-white/10 hover:bg-white/20 text-white border border-white/5 hover:border-white/20'}`}>
                    Get Started
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex-1 p-8 sm:p-10 pt-0">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                  
                  <div className="space-y-8 overflow-y-auto max-h-[60vh] md:max-h-[50vh] pr-2 custom-scrollbar">
                    {pkg.sections ? (
                      pkg.sections.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-4">
                          <h4 className="text-[11px] font-bold text-sky-400 uppercase tracking-[0.15em] flex items-center gap-2">
                            <span className="w-3 h-[2px] bg-sky-400 rounded-full"></span>
                            {section.title}
                          </h4>
                          <ul className="space-y-3.5">
                            {section.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                {feature.status === 'included' && <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 bg-emerald-400/10 p-0.5 rounded-full" />}
                                {feature.status === 'not-included' && <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 bg-rose-400/10 p-0.5 rounded-full" />}
                                {feature.status === 'conditional' && <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 bg-sky-400/10 p-0.5 rounded-full" />}
                                <span className={`${feature.status === 'not-included' ? 'text-slate-500' : 'text-slate-300'} leading-snug`}>{feature.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="space-y-4">
                          <h4 className="text-[11px] font-bold text-sky-400 uppercase tracking-[0.15em] flex items-center gap-2">
                            <span className="w-3 h-[2px] bg-sky-400 rounded-full"></span>
                            Scope of Work
                          </h4>
                          <ul className="space-y-3.5">
                            {pkg.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                {feature.status === 'included' && <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 bg-emerald-400/10 p-0.5 rounded-full" />}
                                {feature.status === 'not-included' && <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 bg-rose-400/10 p-0.5 rounded-full" />}
                                {feature.status === 'conditional' && <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 bg-sky-400/10 p-0.5 rounded-full" />}
                                <span className={`${feature.status === 'not-included' ? 'text-slate-500' : 'text-slate-300'} leading-snug`}>{feature.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {pkg.reports && pkg.reports.length > 0 && (
                          <div className="space-y-4 mt-8">
                            <h4 className="text-[11px] font-bold text-sky-400 uppercase tracking-[0.15em] flex items-center gap-2">
                              <span className="w-3 h-[2px] bg-sky-400 rounded-full"></span>
                              Reports
                            </h4>
                            <ul className="space-y-3.5">
                              {pkg.reports.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                  {feature.status === 'included' && <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 bg-emerald-400/10 p-0.5 rounded-full" />}
                                  {feature.status === 'not-included' && <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 bg-rose-400/10 p-0.5 rounded-full" />}
                                  {feature.status === 'conditional' && <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 bg-sky-400/10 p-0.5 rounded-full" />}
                                  <span className={`${feature.status === 'not-included' ? 'text-slate-500' : 'text-slate-300'} leading-snug`}>{feature.text}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {pkg.customerSupport && pkg.customerSupport.length > 0 && (
                          <div className="space-y-4 mt-8">
                            <h4 className="text-[11px] font-bold text-sky-400 uppercase tracking-[0.15em] flex items-center gap-2">
                              <span className="w-3 h-[2px] bg-sky-400 rounded-full"></span>
                              Customer Support
                            </h4>
                            <ul className="space-y-3.5">
                              {pkg.customerSupport.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                  {feature.status === 'included' && <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 bg-emerald-400/10 p-0.5 rounded-full" />}
                                  {feature.status === 'not-included' && <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 bg-rose-400/10 p-0.5 rounded-full" />}
                                  {feature.status === 'conditional' && <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 bg-sky-400/10 p-0.5 rounded-full" />}
                                  <span className={`${feature.status === 'not-included' ? 'text-slate-500' : 'text-slate-300'} leading-snug`}>{feature.text}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Custom Scrollbar Styles for the features list */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  );
};

export default PricingTemplate;
