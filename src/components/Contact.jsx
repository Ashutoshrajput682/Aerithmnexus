import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="relative py-24 bg-[#050505] text-white overflow-hidden z-10">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Something Amazing</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Ready to transform your business? Reach out to us today.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"><Mail className="w-4 h-4" /></div>
              <div>
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Email Us</p>
                <p className="text-xl font-medium">Aerithmnexus@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="p-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400"><Phone className="w-4 h-4" /></div>
              <div>
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Call Us</p>
                <p className="text-xl font-medium">9801568951</p>
              </div>
            </div>
            
            <Link to="/Contact" className="inline-block mt-3">
              <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold flex items-center gap-2 border border-white/20 hover:bg-white/20 transition-colors">
                View Full Contact Options <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Quick Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <form className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col gap-4">
              <h3 className="text-2xl font-bold mb-2">Quick Message</h3>
              <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors" required />
              <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors" required />
              <textarea name="message" placeholder="How can we help?" rows={4} value={form.message} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" required />
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold flex justify-center items-center gap-2 mt-2">
                Send Message <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
