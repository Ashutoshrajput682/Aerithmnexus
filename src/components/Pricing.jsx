import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Star, Shield, Zap, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { plans, currencySymbols } from '../data/pricing';

const Pricing = () => {
  const currency = 'USD';
  const billing  = 'onetime';

  return (
    <section id="pricing" className="py-24 relative z-10 font-sans text-slate-50">
      {/* Glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Heading ── */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Trusted by 100+ Businesses Worldwide
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl"
          >
            Flexible{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
              Pricing Plans
            </span>
          </motion.h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Choose the perfect website, software, SEO or digital marketing package for your business.
          </p>
        </div>

        {/* ── Trust Bar ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {['Free Consultation','100% Custom Design','No Hidden Charges','Source Code Included','Secure Payment','Fast Delivery'].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
              <Check className="w-3.5 h-3.5" /> {t}
            </span>
          ))}
        </div>

        {/* ── Cards (overview: show all 4, compact) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, i) => {
            const sym   = currencySymbols[currency];
            const price = plan.prices[billing][currency];

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col rounded-[2rem] border backdrop-blur-xl overflow-hidden transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-blue-500/10 to-violet-500/10 border-blue-400/40 shadow-[0_0_40px_rgba(99,102,241,0.25)]'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(139,92,246,0.1)]'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute inset-0 border-2 border-transparent rounded-[2rem]"
                    style={{ background: 'linear-gradient(#0f172a,#0f172a) padding-box, linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899) border-box' }}
                  />
                )}

                {plan.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      plan.badge === 'Most Popular'
                        ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="relative z-10 p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-extrabold text-white">{sym}{price.toLocaleString()}</span>
                    <span className="text-slate-400 text-sm">/project</span>
                  </div>

                  {/* Top 6 features only */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {Object.entries(plan.features).slice(0, 6).map(([feat, val]) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                        {val ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                        )}
                        <span className={!val ? 'text-slate-600' : ''}>{feat}</span>
                        {typeof val === 'string' && val !== 'true' && (
                          <span className="ml-auto text-[10px] font-semibold text-blue-300">{val}</span>
                        )}
                      </li>
                    ))}
                    <li className="text-[11px] text-slate-500 mt-1">+ more features...</li>
                  </ul>

                  <Link
                    to="/Pricing"
                    className={`w-full py-3 px-4 rounded-xl text-sm font-bold text-center transition-all ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}
                  >
                    View Plan
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── View Full Pricing CTA ── */}
        <div className="text-center">
          <Link
            to="/Pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-bold transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] group"
          >
            <Zap className="w-4 h-4" />
            View Full Pricing & Compare Plans
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-slate-500 text-sm mt-4">
            Includes comparison table, FAQ, payment process & custom quote options
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
