import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, X, Star, Shield, Zap, ArrowRight, ChevronDown,
  MessageCircle, Phone, Calendar, CreditCard,
  CheckCircle2, HelpCircle, Users, Globe, FolderOpen, Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  plans, comparisonRows, faqItems, processSteps,
  trustBadges, paymentMethods, currencySymbols,
} from '../data/pricing';

// ─── Small helpers ───────────────────────────────────────────────────────────

const FeatureVal = ({ val }) => {
  if (val === false)
    return <X className="w-4 h-4 text-rose-400 mx-auto shrink-0" />;
  if (val === true)
    return <Check className="w-4 h-4 text-emerald-400 mx-auto shrink-0" />;
  return <span className="text-xs font-semibold text-blue-300">{val}</span>;
};

const billingLabels = { monthly: 'Monthly', onetime: 'One Time', yearly: 'Yearly' };

// ─── Component ───────────────────────────────────────────────────────────────
const PricingPage = () => {
  const [billing,  setBilling]  = useState('onetime');
  const [currency, setCurrency] = useState('USD');
  const [openFaq,  setOpenFaq]  = useState(null);

  const sym = currencySymbols[currency];

  const getPrice = (plan) => {
    const raw = plan.prices[billing][currency];
    return `${sym}${raw.toLocaleString()}`;
  };

  return (
    <>
      {/* ── Background ── */}
      <div className="fixed inset-0 z-0 bg-slate-950">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-fuchsia-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 flex flex-col w-full min-h-screen">
        <Navbar />

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Trusted by 100+ Businesses Worldwide
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5 leading-tight drop-shadow-xl">
              Flexible{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
                Pricing Plans
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Choose the perfect website, software, SEO or digital marketing package for your business.
              Website Development Pricing tailored for every budget.
            </p>
          </motion.div>
        </section>

        {/* ══ TRUST BAR ═════════════════════════════════════════════════════ */}
        <section className="pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {trustBadges.map((t) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                >
                  <Check className="w-3.5 h-3.5" /> {t}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ══ BILLING TOGGLE + CURRENCY ══════════════════════════════════════ */}
        <section className="pb-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6">

            {/* Billing Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              {Object.entries(billingLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setBilling(key)}
                  className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    billing === key
                      ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {label}
                  {key === 'yearly' && (
                    <span className="absolute -top-2 -right-1 text-[9px] font-bold bg-emerald-500 text-white px-1.5 py-0.5 rounded-full">-20%</span>
                  )}
                </button>
              ))}
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              {Object.keys(currencySymbols).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                    currency === c
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {currencySymbols[c]} {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PRICING CARDS ═════════════════════════════════════════════════ */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`relative flex flex-col rounded-[2rem] border backdrop-blur-xl overflow-hidden transition-all duration-500 ${
                    plan.highlighted
                      ? 'bg-gradient-to-b from-blue-500/10 via-violet-500/5 to-transparent border-violet-500/40 shadow-[0_0_60px_rgba(99,102,241,0.3)] scale-105'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:shadow-[0_8px_50px_rgba(139,92,246,0.12)]'
                  }`}
                >
                  {/* Gradient border for highlighted */}
                  {plan.highlighted && (
                    <div className="absolute inset-0 rounded-[2rem] pointer-events-none"
                      style={{ padding: '2px', background: 'linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}
                    />
                  )}

                  {/* Animated glow for highlighted */}
                  {plan.highlighted && (
                    <motion.div
                      className="absolute inset-0 rounded-[2rem] pointer-events-none"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 70%)' }}
                    />
                  )}

                  {/* Badge */}
                  {plan.badge && (
                    <div className="relative z-20 text-center pt-4">
                      <span className={`inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        plan.badge === 'Most Popular'
                          ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]'
                          : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                      }`}>
                        {plan.badge === 'Most Popular' ? '🔥 Most Popular' : '⭐ Best Value'}
                      </span>
                    </div>
                  )}

                  <div className="relative z-10 p-7 flex flex-col flex-grow">
                    <div className="mb-6">
                      <h3 className={`text-2xl font-extrabold mb-1 ${plan.highlighted ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400' : 'text-white'}`}>
                        {plan.name}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${billing}-${currency}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="mb-2"
                      >
                        <span className="text-5xl font-black text-white">{getPrice(plan)}</span>
                        <span className="text-slate-400 text-sm ml-1">
                          {billing === 'monthly' ? '/mo' : billing === 'yearly' ? '/yr' : '/project'}
                        </span>
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center gap-2 mb-6">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs text-amber-300 font-semibold">Delivery: {plan.delivery}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-8 flex-grow">
                      {Object.entries(plan.features).map(([feat, val]) => (
                        <li key={feat} className={`flex items-center gap-3 text-sm ${!val ? 'opacity-40' : ''}`}>
                          {val ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-rose-400 shrink-0" />
                          )}
                          <span className="text-slate-200">{feat}</span>
                          {typeof val === 'string' && (
                            <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300">{val}</span>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* Buttons */}
                    <div className="space-y-3 mt-auto">
                      <Link
                        to="/Contact"
                        className={`w-full py-3.5 px-5 rounded-xl font-bold text-center text-sm flex items-center justify-center gap-2 transition-all ${
                          plan.highlighted
                            ? 'bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_40px_rgba(99,102,241,0.7)]'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/25'
                        }`}
                      >
                        <Zap className="w-4 h-4" /> Start Project
                      </Link>
                      <Link
                        to="/Contact"
                        className="w-full py-3 px-5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                      >
                        <Calendar className="w-4 h-4" /> Get Free Quote
                      </Link>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank" rel="noopener noreferrer"
                        className="w-full py-3 px-5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-emerald-300 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-all"
                      >
                        <MessageCircle className="w-4 h-4" /> WhatsApp Consultation
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COMPARISON TABLE ══════════════════════════════════════════════ */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Full Feature{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Comparison</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                See exactly what's included in each Web Development Package.
              </p>
            </motion.div>

            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-5 px-6 text-left text-sm font-semibold text-slate-400 w-1/4">Feature</th>
                    {plans.map((p) => (
                      <th key={p.name} className={`py-5 px-4 text-center text-sm font-extrabold ${p.highlighted ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400' : 'text-white'}`}>
                        {p.name}
                        {p.highlighted && <div className="text-[10px] text-violet-400 font-normal mt-0.5">Most Popular</div>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row}
                      className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] ${idx % 2 === 0 ? '' : 'bg-white/[0.01]'}`}
                    >
                      <td className="py-4 px-6">
                        <span className="text-sm text-slate-300 font-medium">{row}</span>
                      </td>
                      {plans.map((p) => (
                        <td key={p.name} className={`py-4 px-4 text-center ${p.highlighted ? 'bg-violet-500/5' : ''}`}>
                          <FeatureVal val={p.comparison[row]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══ PAYMENT PROCESS ═══════════════════════════════════════════════ */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Our Payment{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Process</span>
              </h2>
              <p className="text-slate-400">Simple, transparent and milestone-based.</p>
            </div>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-0">
              {processSteps.map((s, i) => (
                <React.Fragment key={s.step}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/5 border border-white/10 flex-1 min-w-[120px]"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-black text-sm mb-3 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                      {s.step}
                    </div>
                    <p className="text-xs font-semibold text-slate-200 leading-snug">{s.label}</p>
                  </motion.div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:flex items-center px-1 text-slate-600 shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="mt-10 text-center">
              <p className="text-slate-400 text-sm mb-4 font-medium">We Accept</p>
              <div className="flex flex-wrap justify-center gap-3">
                {paymentMethods.map((m) => (
                  <span key={m} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CLIENT TRUST STATS ════════════════════════════════════════════ */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: Star,       val: '4.9/5',  label: 'Client Rating',       color: 'text-yellow-400' },
                { icon: FolderOpen, val: '100+',   label: 'Projects Delivered',   color: 'text-blue-400' },
                { icon: Users,      val: '50+',    label: 'Happy Clients',        color: 'text-violet-400' },
                { icon: Globe,      val: '15+',    label: 'Industries Served',    color: 'text-pink-400' },
                { icon: Award,      val: '99%',    label: 'Client Satisfaction',  color: 'text-emerald-400' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all"
                  >
                    <Icon className={`w-6 h-6 mb-3 ${s.color}`} />
                    <div className="text-3xl font-black text-white mb-1">{s.val}</div>
                    <div className="text-xs text-slate-400 font-medium">{s.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ FAQ ═══════════════════════════════════════════════════════════ */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Questions</span>
              </h2>
              <p className="text-slate-400">Everything you need to know about our Web Development Packages and pricing.</p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left text-white font-semibold hover:bg-white/5 transition-colors gap-4"
                    aria-expanded={openFaq === i}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-violet-400 shrink-0" />
                      {item.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-slate-300 text-sm leading-relaxed pl-12">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ BOTTOM CTA ════════════════════════════════════════════════════ */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-pink-600/20" />
              <div className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
              />

              <div className="relative z-10 px-8 py-20 md:px-16 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(139,92,246,0.5)]"
                >
                  <Zap className="w-7 h-7 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl">
                  Need a Custom Solution?
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light">
                  Let's discuss your project and provide the best pricing for your business.
                  From Custom Software Development to Enterprise Solutions — we handle it all.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                  <Link
                    to="/Contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-bold transition-all shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_40px_rgba(99,102,241,0.7)]"
                  >
                    <Calendar className="w-4 h-4" /> Schedule Free Consultation
                  </Link>
                  <Link
                    to="/Contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold border border-white/15 hover:border-white/25 transition-all"
                  >
                    <Shield className="w-4 h-4" /> Request Custom Quote
                  </Link>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-500/25 transition-all"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
