import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Cpu
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/servicesData';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const service = servicesData[serviceId];

  // Handle document title and description updates for SEO
  useEffect(() => {
    if (service) {
      document.title = service.seoTitle;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = service.seoDesc;
    } else {
      // If service not found, redirect to main services page
      navigate('/Services');
    }
  }, [service, serviceId, navigate]);

  if (!service) return null;

  const IconComponent = service.icon;

  return (
    <>
      {/* Background with dark theme and custom service-specific gradient glow */}
      <div className="fixed inset-0 z-0 bg-transparent">
        <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr ${service.gradient} rounded-full blur-[128px] opacity-20`} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 flex flex-col w-full min-h-screen font-sans text-slate-50">
        <Navbar />

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/Services"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-violet-300 font-medium text-sm mb-6">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span>Premium Enterprise Service</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                    {service.title}{' '}
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient.replace('/20', '')}`}>
                      Solutions
                    </span>
                  </h1>

                  <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                    {service.tagline}
                  </p>
                </motion.div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center border-2 ${service.iconBg} shadow-[0_0_50px_rgba(139,92,246,0.15)]`}
                >
                  <IconComponent className={`w-16 h-16 md:w-20 md:h-20 ${service.iconColor}`} />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE OVERVIEW */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-bold text-white mb-6">Service Overview</h2>
                <p className="text-slate-300 leading-relaxed text-lg mb-6 font-light">
                  {service.overview}
                </p>
                
                {/* Tech Stack */}
                {service.techStack && (
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-violet-400" /> Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-6">Why Partner With Us?</h3>
                <div className="space-y-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className={`w-10 h-10 shrink-0 rounded-xl border flex items-center justify-center ${service.iconBg}`}>
                        <CheckCircle2 className={`w-5 h-5 ${service.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE FEATURES */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                What We Offer
              </h2>
              <p className="text-slate-400 font-light">
                Comprehensive, robust features designed to meet modern standards and yield maximum performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-white mb-4 flex items-center justify-center gap-3">
                <HelpCircle className={`w-8 h-8 ${service.iconColor}`} /> Frequently Asked Questions
              </h2>
              <p className="text-slate-400 font-light">
                Got questions? We have answers. Learn more about how we deliver our {service.title} services.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-white hover:bg-white/[0.02] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {activeFaq === index ? (
                      <ChevronUp className={`w-5 h-5 ${service.iconColor}`} />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 bg-slate-950/20">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-pink-600/20" />
              <div className="relative z-10 px-8 py-16 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  Let's Build Your {service.title} Project
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light">
                  Ready to elevate your business? Get in touch with our experts to discuss custom requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/Contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-bold transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServiceDetailPage;
