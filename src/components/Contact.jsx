import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};
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

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Info Side */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"><Mail className="w-4 h-4" /></div>
              <div>
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Email Us</p>
                <p className="text-xl font-medium">Aerithmnexus@gmail.com</p>
              </div>
            </div>
            <a href="tel:9801568951" className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group">
              <div className="p-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-colors"><Phone className="w-4 h-4" /></div>
              <div>
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider group-hover:text-purple-400 transition-colors">Call Us</p>
                <p className="text-xl font-medium">9801568951</p>
              </div>
            </a>
            <a href="https://wa.me/919801568951" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group">
              <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 group-hover:bg-green-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </div>
              <div>
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider group-hover:text-green-400 transition-colors">WhatsApp</p>
                <p className="text-xl font-medium">9801568951</p>
              </div>
            </a>

            <Link to="/Contact" className="inline-block mt-3 w-full">
              <motion.button whileHover={{ scale: 1.03 }} className="w-full px-8 py-4 rounded-full bg-white/10 text-white font-semibold flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-colors">
                View Full Contact Page <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-3xl" />
            <h3 className="text-3xl font-bold mb-2">Send Us a Message</h3>
            <p className="text-slate-400 mb-8">Fill in the form below and we'll get back to you within 30 minutes.</p>
            {/* <form className="space-y-6" onSubmit={(e) => e.preventDefault()}> */}
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Full Name <span className="text-blue-400">*</span></label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={handleChange}
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
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Phone Number <span className="text-blue-400">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Service <span className="text-blue-400">*</span></label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a Service</option>
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
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project or requirement..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold flex justify-center items-center gap-2 hover:from-blue-600 hover:to-purple-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all text-lg"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
