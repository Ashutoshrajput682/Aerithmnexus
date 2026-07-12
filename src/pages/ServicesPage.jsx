import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Palette,
  ShoppingCart,
  Search,
  TrendingUp,
  Plug,
  Bot,
  Cloud,
  Database,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  {
    title: 'SEO',
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    items: [
      { name: 'Ecommerce SEO Service', slug: 'ecommerce-seo', desc: 'Boost your online store visibility and drive targeted traffic.' },
      { name: 'Local SEO Service', slug: 'local-seo', desc: 'Dominate local search results and attract nearby customers.' },
      { name: 'Technical SEO Service', slug: 'technical-seo', desc: 'Optimize your website architecture for better crawling.' },
      { name: 'SEO Reseller Service', slug: 'seo-reseller', desc: 'Partner with us for reliable SEO delivery for your clients.' },
      { name: 'White Label SEO Service', slug: 'white-label-seo', desc: 'Premium SEO services delivered entirely under your brand.' }
    ]
  },
  {
    title: 'Performance Marketing',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    items: [
      { name: 'PPC Ads', slug: 'ppc-ads', desc: 'Instant traffic and conversions with Google pay-per-click ads.' },
      { name: 'Meta Ads', slug: 'meta-ads', desc: 'Highly targeted advertising campaigns on Facebook & Instagram.' }
    ]
  },
  {
    title: 'Website Design & Development',
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
    iconColor: 'text-violet-400',
    items: [
      { name: 'WordPress Development', slug: 'wordpress-development', desc: 'Custom, fast, and secure WordPress websites and blogs.' }
    ]
  },
  {
    title: 'Local SEO Services',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    items: [
      { name: 'Small Business SEO', slug: 'small-business-seo', desc: 'Tailored and affordable SEO strategies for small enterprises.' }
    ]
  },
  {
    title: 'Ecommerce Development',
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400',
    items: [
      { name: 'Shopify Development', slug: 'shopify-development', desc: 'Build scalable and high-converting Shopify ecommerce stores.' }
    ]
  },
  {
    title: 'Social Media Marketing',
    gradient: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400',
    items: [
      { name: 'Social Media Optimization', slug: 'social-media-optimization', desc: 'Build your brand and community organically on social platforms.' },
      { name: 'Social Media Advertising', slug: 'social-media-advertising', desc: 'Drive massive ROI with targeted social media advertising.' }
    ]
  }
];

const ServicesPage = () => {
  return (
    <>
      {/* Background with dark theme and blue/purple gradient glow */}
      <div className="fixed inset-0 z-0 bg-slate-950">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fuchsia-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 flex flex-col w-full min-h-screen font-sans text-slate-50">
        <Navbar />

        {/* HERO SECTION */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-violet-300 font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Premium Services</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-xl">
                Our Professional{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
                  Services
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                Explore our comprehensive suite of digital solutions designed to accelerate your growth and dominate your industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, i) => (
                    <Link
                      key={item.name}
                      to={`/services/${item.slug}`}
                      className="group relative flex flex-col p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Hover Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className={`text-xl font-bold text-white group-hover:${category.iconColor} transition-colors duration-300`}>
                            {item.name}
                          </h3>
                          <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${category.iconColor}`} />
                        </div>
                        
                        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-pink-600/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />

              <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                  Ready to Grow Your Business?
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light">
                  Let's build a fast, secure and scalable digital solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/Contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-bold transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    to="/Contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold border border-white/10 hover:border-white/20 transition-all"
                  >
                    Schedule Free Consultation
                  </Link>
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

export default ServicesPage;
