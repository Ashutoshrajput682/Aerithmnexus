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

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'We build scalable, high-performance websites and web applications tailored to your unique business needs.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    items: [
      'Custom Website Development',
      'Web Application Development',
      'React & Next.js Development',
      'Node.js & Express.js Development',
      'PHP & Laravel Development',
      'WordPress & Headless CMS'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Create engaging and intuitive mobile experiences for both Android and iOS platforms with modern tech.',
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    items: [
      'Android App Development',
      'iOS App Development',
      'React Native Development',
      'Flutter Development'
    ]
  },
  {
    icon: Palette,
    title: 'UI / UX Design',
    description: 'We craft beautiful, user-centric interfaces that enhance user engagement and provide seamless experiences.',
    gradient: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10 border-pink-500/20',
    items: [
      'UI Design',
      'UX Design',
      'Landing Page Design',
      'Dashboard Design',
      'Figma to React'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Development',
    description: 'Robust and scalable ecommerce solutions designed to maximize conversions and streamline your sales.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    items: [
      'Shopify Development',
      'WooCommerce Development',
      'Magento Development',
      'Custom Ecommerce Development'
    ]
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Boost your visibility and drive organic traffic with our comprehensive data-driven SEO strategies.',
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    items: [
      'Technical SEO & SEO Audit',
      'Ecommerce & Local SEO',
      'Enterprise SEO',
      'White Label SEO',
      'On Page & Off Page SEO'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Accelerate your business growth with targeted, ROI-focused digital marketing and advertising campaigns.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    items: [
      'Google Ads & Meta Ads',
      'PPC Campaigns',
      'Social Media Marketing',
      'Social Media Optimization',
      'Content & Email Marketing'
    ]
  },
  {
    icon: Plug,
    title: 'API Development',
    description: 'Secure and scalable API solutions to seamlessly connect your platforms and third-party services.',
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
    iconColor: 'text-fuchsia-400',
    iconBg: 'bg-fuchsia-500/10 border-fuchsia-500/20',
    items: [
      'REST API Development',
      'Third Party API Integration',
      'Payment Gateway Integration',
      'CRM Integration'
    ]
  },
  {
    icon: Bot,
    title: 'AI Solutions',
    description: 'Leverage artificial intelligence to automate processes, enhance customer support, and scale operations.',
    gradient: 'from-rose-500/20 to-red-500/20',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-500/10 border-rose-500/20',
    items: [
      'AI Chatbot Development',
      'OpenAI Integration',
      'AI Automation',
      'Business Automation'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Streamline your deployments and scale effortlessly with modern cloud infrastructure and CI/CD pipelines.',
    gradient: 'from-indigo-500/20 to-blue-500/20',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    items: [
      'AWS & Cloudflare',
      'Docker Containers',
      'CI/CD Pipelines',
      'Server & Vercel Deployment'
    ]
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Design, optimize, and manage highly available databases tailored for your complex data requirements.',
    gradient: 'from-teal-500/20 to-emerald-500/20',
    iconColor: 'text-teal-400',
    iconBg: 'bg-teal-500/10 border-teal-500/20',
    items: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Supabase'
    ]
  },
  {
    icon: Zap,
    title: 'Website Optimization',
    description: 'Maximize performance, fortify security, and ensure flawless operation of your digital assets.',
    gradient: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    items: [
      'Website Speed Optimization',
      'Core Web Vitals Optimization',
      'Security & SSL Installation',
      'Bug Fixes & Maintenance'
    ]
  }
];

const ServicesPage = () => {
  return (
    <>
      {/* Background with dark theme and blue/purple gradient glow */}
      <div className="fixed inset-0 z-0 bg-transparent">
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
                We provide end-to-end digital solutions for startups, businesses, enterprises and agencies using modern technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative flex flex-col h-full rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-500"
                  >
                    {/* Animated Border Top */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Glow Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <div className="relative z-10 p-8 flex flex-col flex-grow">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${service.iconBg}`}>
                        <Icon className={`w-7 h-7 ${service.iconColor}`} />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-400 transition-all duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-400 leading-relaxed mb-6 h-[3rem] line-clamp-2">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8 flex-grow">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckCircle2 className={`w-5 h-5 shrink-0 ${service.iconColor}`} />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6 mt-auto border-t border-white/10">
                        <Link
                          to={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className={`inline-flex items-center gap-2 text-sm font-semibold ${service.iconColor} hover:text-white transition-colors group/link`}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
