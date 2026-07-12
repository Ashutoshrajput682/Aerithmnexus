import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, ArrowRight, MessageCircle, Clock, 
  CheckCircle, Globe, Zap, Code, Shield, Users, Target, Layout, Database, 
  Star, ChevronDown, Upload, Calendar, Rocket
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- DATA ---

const SERVICES = [
  'Website Development', 'Software Development', 'Mobile App Development', 'React Development', 
  'Next.js Development', 'Node.js Development', 'Laravel Development', 'PHP Development', 
  'WordPress Development', 'Shopify', 'SEO', 'Digital Marketing', 'AI Development', 
  'Cloud', 'DevOps', 'UI UX', 'Maintenance', 'Support', 'API Development'
];

const PROJECT_TYPES = [
  'Landing Page', 'Business Website', 'Corporate Website', 'Portfolio', 'Ecommerce', 
  'CRM', 'ERP', 'Hospital Management', 'School Management', 'Restaurant Website', 
  'Travel Website', 'AI Chatbot', 'Dashboard', 'Custom Software'
];

const WHY_CHOOSE_US = [
  { title: '100% Custom Design', icon: Layout },
  { title: 'SEO Ready', icon: Target },
  { title: 'Modern UI', icon: Zap },
  { title: 'Fast Performance', icon: Rocket },
  { title: 'Secure Code', icon: Shield },
  { title: 'Scalable Architecture', icon: Database },
  { title: 'Clean Code', icon: Code },
  { title: 'Dedicated Team', icon: Users },
  { title: 'Daily Updates', icon: Clock },
  { title: 'On-Time Delivery', icon: CheckCircle },
  { title: 'Lifetime Support', icon: Phone },
  { title: 'Affordable Pricing', icon: Target },
];
// Hack for icon reference since Rocket wasn't imported above, I will just use Zap again
function getIcon(IconComp) { return IconComp ? <IconComp className="w-5 h-5" /> : <Zap className="w-5 h-5" />; }

const PROCESS = [
  'Requirement', 'Research', 'Planning', 'Design', 'Development', 'Testing', 'Deployment', 'Support'
];

const TECH_CLOUD = [
  'React', 'Next.js', 'Node.js', 'Laravel', 'PHP', 'TypeScript', 'Tailwind CSS', 'MongoDB', 
  'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Docker', 'AWS', 'Azure', 'Cloudflare', 
  'GitHub', 'OpenAI', 'Stripe', 'GraphQL'
];

const FAQS = [
  { q: 'How long does a typical project take?', a: 'Depending on complexity, between 2 to 12 weeks.' },
  { q: 'Do you offer custom software development?', a: 'Yes, 100% bespoke solutions tailored to you.' },
  { q: 'What is your payment structure?', a: 'Typically 50% upfront, 25% at beta, 25% on launch.' },
  { q: 'Do you sign NDAs?', a: 'Absolutely, we ensure your IP is fully protected.' },
  { q: 'Do you provide ongoing support?', a: 'Yes, we offer flexible maintenance packages.' },
  { q: 'Can you work with existing codebases?', a: 'Yes, we frequently audit and upgrade existing apps.' },
  { q: 'Are your websites SEO optimized?', a: 'Yes, technical SEO is baked into our core process.' },
  { q: 'Who owns the code after launch?', a: 'You do. 100% intellectual property transfer.' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const InputField = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">{label}</label>
    <input type={type} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" {...props} />
  </div>
);

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      <Navbar />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col gap-24">
        
        {/* 1 & 2. HERO & TRUST BADGE */}
        <section className="text-center flex flex-col items-center gap-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium tracking-wide">4.9 Google Rating from 100+ Clients</span>
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Let's Build Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Product</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-lg text-gray-400 max-w-2xl">
            Partner with a world-class Website Development Company & Software Development Company to scale your business with custom tech solutions.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Book Consultation</button>
            <a href="https://wa.me/919801568951" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold flex items-center justify-center gap-2 hover:bg-blue-500/20 transition-colors w-fit"><MessageCircle className="w-5 h-5"/> WhatsApp Us</a>
          </motion.div>
        </section>

        {/* 3 & 4. CONTACT INFO & MASSIVE FORM */}
        <section className="grid lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-8">
              <h3 className="text-2xl font-bold">Contact Info</h3>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Mail className="w-6 h-6"/></div>
                <div>
                  <p className="font-semibold text-gray-400">Email</p>
                  <p className="text-lg">aerithmnexus@gmail.com</p>
                </div>
              </div>
              <a href="tel:9801568951" className="flex gap-4 items-start group">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-purple-500/20 transition-colors"><Phone className="w-6 h-6"/></div>
                <div>
                  <p className="font-semibold text-gray-400 group-hover:text-purple-400 transition-colors">Phone</p>
                  <p className="text-lg">9801568951</p>
                </div>
              </a>
              <a href="https://wa.me/919801568951" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start group">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:bg-green-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-400 group-hover:text-green-400 transition-colors">WhatsApp</p>
                  <p className="text-lg">9801568951</p>
                </div>
              </a>
              {/* <div className="flex gap-4 items-start">
                <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400"><MapPin className="w-6 h-6"/></div>
                <div>
                  <p className="font-semibold text-gray-400">Headquarters</p>
                  <p className="text-lg">123 Tech Street, Silicon Valley, CA</p>
                </div>
              </div> */}
            </div>

            {/* 7. Response Timeline */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 backdrop-blur-md space-y-6">
              <h3 className="text-xl font-bold">Response Timeline</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Average Reply</span><span className="font-semibold text-green-400">Within 30 Mins</span></div>
                <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Project Proposal</span><span className="font-semibold text-blue-400">Within 24 Hours</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Development Starts</span><span className="font-semibold text-purple-400">Within 48 Hours</span></div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-3xl" />
            <h3 className="text-3xl font-bold mb-2">Send Us a Message</h3>
            <p className="text-slate-400 mb-8">Fill in the form below and we'll get back to you within 30 minutes.</p>
            <form className="space-y-6">

              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Full Name <span className="text-blue-400">*</span></label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Email Address <span className="text-blue-400">*</span></label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Phone Number <span className="text-blue-400">*</span></label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Service <span className="text-blue-400">*</span></label>
                <select
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled selected>Select a Service</option>
                  <option value="web-development">Web Development</option>
                  <option value="seo">SEO</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="digital-marketing">Digital Marketing</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Message <span className="text-blue-400">*</span></label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project or requirement..."
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold flex justify-center items-center gap-2 hover:from-blue-600 hover:to-purple-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-[0.98] transition-all text-lg"
              >
                Send Message <Send className="w-5 h-5" />
              </button>

            </form>
          </motion.div>
        </section>

        {/* 5. WHY CHOOSE US */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Why Choose Us</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We provide premium quality React Development Company services and Custom Software Development.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {WHY_CHOOSE_US.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="text-blue-400">{getIcon(item.icon)}</div>
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. OUR PROCESS */}
        <section className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center">Our Process</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
            {PROCESS.map((step, i) => (
              <React.Fragment key={step}>
                <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/10 text-sm font-bold tracking-widest uppercase">
                  {step}
                </div>
                {i < PROCESS.length - 1 && <ArrowRight className="w-5 h-5 text-gray-500 hidden md:block" />}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* 10. TECHNOLOGY CLOUD */}
        <section className="space-y-12 p-12 rounded-3xl bg-white/5 border border-white/10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Technologies We Master</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_CLOUD.map(tech => (
              <span key={tech} className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm hover:border-blue-500 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 13. FAQ */}
        {/* <section className="space-y-12 max-w-4xl mx-auto w-full">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeFaq === i ? 'rotate-180 text-blue-400' : 'text-gray-400'}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-gray-400">
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section> */}

        {/* 14. GOOGLE MAP */}
        <section className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/80" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-bounce">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Visit Our Office</h3>
            <p className="text-gray-300">123 Tech Street, Innovation Hub, Silicon Valley, CA</p>
            <div className="flex gap-4 mt-4">
              <button className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200">Get Directions</button>
              <button className="px-6 py-2 rounded-full bg-black/50 border border-white/20 text-white font-semibold backdrop-blur-md">Street View</button>
            </div>
          </div>
        </section>

        {/* 15. FINAL CTA */}
        <section className="relative p-12 md:p-24 rounded-3xl border border-white/10 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-2xl" />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Ready to Transform?</h2>
            <p className="text-xl text-gray-400 max-w-2xl">Start your project with the leading Web Design Company and Enterprise Software experts.</p>
            <button className="px-10 py-5 mt-6 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              Start Your Project Now <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>

      </main>
      
      {/* LIVE FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href="https://wa.me/919801568951" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-110 transition-transform">
          <MessageCircle className="w-7 h-7" />
        </a>
        <a href="tel:9801568951" className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-110 transition-transform">
          <Phone className="w-7 h-7" />
        </a>
      </div>

      <Footer />
    </div>
  );
}
