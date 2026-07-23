import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, X, Star, Shield, Zap, ArrowRight, ChevronDown,
  MessageCircle, Phone, Calendar, CreditCard,
  CheckCircle2, HelpCircle, Users, Globe, FolderOpen, Award, Share2, Layout
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
const servicePackages = [
  {
    name: 'AI-Powered SEO',
    description: 'Boost your organic traffic and dominate search results with our advanced AI-driven SEO strategies. From basic audits to enterprise-level keyword analysis.',
    link: '/pricing/ai-powered-seo',
    priceStarting: '$750',
    features: ['Initial Website Audit', 'Keyword Analysis', 'On-Page Optimization', 'Off-Page Optimization', 'AI Search Visibility', 'Monthly Reporting'],
    icon: Zap,
    color: 'from-blue-500 to-sky-500',
    shadow: 'shadow-blue-500/20'
  },
  {
    name: 'Social Media Optimization (SMO)',
    description: 'Enhance your brand visibility and engage your audience across major platforms with data-driven social media strategies.',
    link: '/pricing/smo',
    priceStarting: '$200',
    features: ['Social Media Strategy', 'Profile Creation', 'Content Creation & Posting', 'Community Building', 'Monthly Analytics'],
    icon: Share2,
    color: 'from-violet-500 to-fuchsia-500',
    shadow: 'shadow-violet-500/20'
  },
  {
    name: 'Web Development',
    description: 'Build a stunning, responsive, and high-performance website tailored to your business needs, from simple landing pages to complex e-commerce.',
    link: '/pricing/web-dev',
    priceStarting: '$500',
    features: ['Custom UI/UX Design', 'Responsive Development', 'CMS Integration', 'E-commerce Functionality', 'Security & Maintenance', 'Performance Tuning'],
    icon: Layout,
    color: 'from-emerald-500 to-teal-500',
    shadow: 'shadow-emerald-500/20'
  }
];

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
      <div className="fixed inset-0 z-0 bg-transparent">
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

        {/* ══ PRICING CATEGORIES ═════════════════════════════════════════════════ */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicePackages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`relative flex flex-col rounded-[2.5rem] p-8 border border-white/10 bg-[#061e35]/80 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]`}
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${pkg.color} rounded-full blur-[80px] opacity-20 pointer-events-none`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6 shadow-lg ${pkg.shadow}`}>
                      <pkg.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-white mb-3">
                      {pkg.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    <div className="mb-8">
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Starting From</p>
                      <p className="text-4xl font-black text-white">{pkg.priceStarting}<span className="text-base text-slate-400 font-normal">/mo</span></p>
                    </div>

                    <div className="flex-grow">
                      <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Key Features</h4>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-slate-300">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={pkg.link}
                      className={`w-full py-4 px-6 rounded-2xl font-bold text-center text-sm flex items-center justify-center gap-2 transition-all bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white shadow-lg ${pkg.shadow}`}
                    >
                      View Detailed Pricing <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
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
