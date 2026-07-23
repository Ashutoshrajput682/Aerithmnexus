import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, CheckCircle2, Sparkles, Code2, Smartphone,
  Palette, ShoppingCart, Search, TrendingUp, Plug,
  Bot, Cloud, Database, Zap, ArrowRight, Loader2,
  DollarSign, Calendar, Users, Globe, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  { icon: Code2, label: 'Web Development', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
  { icon: Smartphone, label: 'Mobile App Development', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/30' },
  { icon: Palette, label: 'UI / UX Design', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/30' },
  { icon: ShoppingCart, label: 'Ecommerce Development', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
  { icon: Search, label: 'SEO Services', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
  { icon: TrendingUp, label: 'Digital Marketing', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/30' },
  { icon: Plug, label: 'API Development', color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10 border-fuchsia-500/30' },
  { icon: Bot, label: 'AI Solutions', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' },
  { icon: Cloud, label: 'Cloud & DevOps', color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/30' },
  { icon: Database, label: 'Database Solutions', color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/30' },
  { icon: Zap, label: 'Website Optimization', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/30' },
];

const budgets = [
  '$500 – $1,000', '$1,000 – $3,000', '$3,000 – $7,000',
  '$7,000 – $15,000', '$15,000 – $30,000', '$30,000+'
];

const timelines = [
  'ASAP (Less than 2 weeks)', '2 – 4 Weeks', '1 – 2 Months',
  '2 – 4 Months', '4+ Months', 'Flexible / Not Sure'
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } })
};

const STEPS = ['Project Info', 'Budget & Timeline', 'Your Details'];

export default function GetQuotePage() {
  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleService = (label) => {
    setSelectedServices(prev =>
      prev.includes(label) ? prev.filter(s => s !== label) : [...prev, label]
    );
  };

  const nextStep = () => {
    if (step === 0 && selectedServices.length === 0) {
      setError('Please select at least one service.');
      return;
    }
    if (step === 1 && (!budget || !timeline)) {
      setError('Please select a budget and timeline.');
      return;
    }
    setError('');
    setStep(s => s + 1);
  };

  const prevStep = () => { setError(''); setStep(s => s - 1); };

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) { setError('Name and email are required.'); return; }
    setLoading(true);
    setError('');
    // Simulate submit — connect to your real API here
    await new Promise(r => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <div className="relative z-10 flex flex-col w-full min-h-screen font-sans text-slate-50">
        <Navbar />

        {/* HERO */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-violet-300 font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Free Project Consultation</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                Get Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
                  Free Quote
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
                Tell us about your project and we'll send you a detailed, transparent proposal within 24 hours. No obligation, no spam.
              </p>
            </motion.div>

            {/* Step Indicators */}
            <div className="flex items-center justify-center gap-3 mt-10">
              {STEPS.map((s, i) => (
                <React.Fragment key={i}>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    i === step
                      ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                      : i < step
                      ? 'bg-white/10 text-emerald-400'
                      : 'bg-white/5 text-slate-500'
                  }`}>
                    {i < step ? <CheckCircle2 className="w-4 h-4" /> : <span>{i + 1}</span>}
                    <span className="hidden sm:block">{s}</span>
                  </div>
                  {i < STEPS.length - 1 && <div className={`h-px w-8 sm:w-12 transition-all duration-500 ${i < step ? 'bg-violet-500' : 'bg-white/10'}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* FORM CARD */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-12"
                >
                  {/* STEP 0 — Select Services */}
                  {step === 0 && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">What services do you need?</h2>
                      <p className="text-slate-400 text-sm mb-8">Select all that apply — we'll tailor your quote accordingly.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map(({ icon: Icon, label, color, bg }) => {
                          const selected = selectedServices.includes(label);
                          return (
                            <button
                              key={label}
                              onClick={() => toggleService(label)}
                              className={`relative flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-200 ${
                                selected
                                  ? `${bg} border-opacity-80 shadow-[0_0_20px_rgba(139,92,246,0.15)]`
                                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
                              }`}
                            >
                              <Icon className={`w-5 h-5 shrink-0 ${color}`} />
                              <span className={`text-sm font-medium ${selected ? 'text-white' : 'text-slate-300'}`}>{label}</span>
                              {selected && (
                                <CheckCircle2 className="w-4 h-4 text-violet-400 absolute top-3 right-3" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 1 — Budget & Timeline */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Budget & Timeline</h2>
                      <p className="text-slate-400 text-sm mb-8">Help us understand your investment range and urgency.</p>
                      
                      <div className="mb-10">
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-4">
                          <DollarSign className="w-4 h-4 text-emerald-400" /> Estimated Budget
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {budgets.map(b => (
                            <button
                              key={b}
                              onClick={() => setBudget(b)}
                              className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                                budget === b
                                  ? 'bg-gradient-to-r from-blue-500/20 to-violet-500/20 border-violet-500/60 text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                                  : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white'
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-4">
                          <Calendar className="w-4 h-4 text-blue-400" /> Project Timeline
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {timelines.map(t => (
                            <button
                              key={t}
                              onClick={() => setTimeline(t)}
                              className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                                timeline === t
                                  ? 'bg-gradient-to-r from-blue-500/20 to-violet-500/20 border-violet-500/60 text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                                  : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2 — Your Details */}
                  {step === 2 && (
                    <form onSubmit={handleSubmit}>
                      <h2 className="text-2xl font-bold text-white mb-2">Your Contact Details</h2>
                      <p className="text-slate-400 text-sm mb-8">We'll send your custom quote to your inbox within 24 hours.</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        {[
                          { name: 'name', label: 'Full Name *', placeholder: 'John Smith', icon: Users },
                          { name: 'email', label: 'Email Address *', placeholder: 'john@company.com', icon: Send },
                          { name: 'phone', label: 'Phone / WhatsApp', placeholder: '+1 234 567 8900', icon: Globe },
                          { name: 'company', label: 'Company / Brand', placeholder: 'Your Company Name', icon: Globe },
                        ].map(({ name, label, placeholder, icon: Icon }) => (
                          <div key={name}>
                            <label className="block text-sm font-medium text-slate-400 mb-2">{label}</label>
                            <div className="relative">
                              <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                              <input
                                type={name === 'email' ? 'email' : 'text'}
                                name={name}
                                value={form[name]}
                                onChange={handleChange}
                                placeholder={placeholder}
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-400 mb-2">Project Description</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe your project, goals, and any specific requirements..."
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all resize-none"
                        />
                      </div>

                      {/* Summary */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 mb-6">
                        <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Your Quote Summary</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex flex-wrap gap-2">
                            <span className="text-slate-500 w-24 shrink-0">Services:</span>
                            <span className="text-slate-200">{selectedServices.join(', ')}</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-slate-500 w-24 shrink-0">Budget:</span>
                            <span className="text-slate-200">{budget}</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-slate-500 w-24 shrink-0">Timeline:</span>
                            <span className="text-slate-200">{timeline}</span>
                          </div>
                        </div>
                      </div>

                      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-bold text-base transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Sending your quote request...</>
                        ) : (
                          <><Send className="w-5 h-5" /> Send My Free Quote Request</>
                        )}
                      </button>
                    </form>
                  )}

                  {/* Error message for steps 0 & 1 */}
                  {error && step < 2 && (
                    <p className="text-red-400 text-sm mt-4">{error}</p>
                  )}

                  {/* Navigation Buttons */}
                  {step < 2 && (
                    <div className="flex items-center justify-between mt-10">
                      {step > 0 ? (
                        <button
                          onClick={prevStep}
                          className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white text-sm font-medium transition-all"
                        >
                          ← Back
                        </button>
                      ) : <div />}
                      <button
                        onClick={nextStep}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                /* SUCCESS STATE */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[2rem] border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-xl p-12 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                  </div>
                  <h2 className="text-4xl font-extrabold text-white mb-4">Quote Request Sent! 🎉</h2>
                  <p className="text-slate-400 text-lg max-w-md mx-auto mb-10 font-light">
                    Thank you, <span className="text-white font-semibold">{form.name}</span>! We've received your request and our team will send you a detailed, customized quote within <span className="text-emerald-400 font-semibold">24 hours</span>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-bold transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)]"
                    >
                      Back to Home
                    </Link>
                    <Link
                      to="/Services"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold border border-white/10 transition-all"
                    >
                      Explore Services
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
