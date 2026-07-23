import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Rocket, Shield, Zap, Code, Smartphone, Globe,
  Search, Server, Cloud, Database, Layout, Cpu,
  CheckCircle, ArrowRight, Star, Users, Briefcase,
  Award, TrendingUp, Target, Eye, Lock, Clock,
  ThumbsUp, MessageCircle, ChevronDown, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- DATA ARRAYS ---

const CORE_VALUES = [
  { title: 'Innovation', icon: <Zap className="w-6 h-6 text-blue-400" />, desc: 'Pushing boundaries with cutting-edge tech.' },
  { title: 'Transparency', icon: <Eye className="w-6 h-6 text-purple-400" />, desc: 'Clear communication at every step.' },
  { title: 'Quality', icon: <Award className="w-6 h-6 text-pink-400" />, desc: 'Uncompromising standard of excellence.' },
  { title: 'Security', icon: <Lock className="w-6 h-6 text-emerald-400" />, desc: 'Enterprise-grade protection standard.' },
  { title: 'Customer Success', icon: <ThumbsUp className="w-6 h-6 text-amber-400" />, desc: 'Your growth is our primary metric.' },
  { title: 'Long-Term Partnership', icon: <Users className="w-6 h-6 text-cyan-400" />, desc: 'Building relationships that last.' },
  { title: 'Agile Development', icon: <Rocket className="w-6 h-6 text-orange-400" />, desc: 'Fast, iterative, and flexible.' },
  { title: 'Scalable Solutions', icon: <TrendingUp className="w-6 h-6 text-indigo-400" />, desc: 'Architecture that grows with you.' },
];

const WHY_CHOOSE_US = [
  { title: '100% Custom Development', icon: <Code /> },
  { title: 'SEO Optimized', icon: <Search /> },
  { title: 'Mobile Responsive', icon: <Smartphone /> },
  { title: 'Clean Code', icon: <Layout /> },
  { title: 'Scalable Architecture', icon: <Database /> },
  { title: 'Lightning Fast Performance', icon: <Zap /> },
  { title: 'Secure Development', icon: <Shield /> },
  { title: 'Modern UI/UX', icon: <Rocket /> },
  { title: 'Dedicated Project Manager', icon: <Users /> },
  { title: '24/7 Support', icon: <Clock /> },
  { title: 'Affordable Pricing', icon: <Target /> },
  { title: 'Lifetime Technical Guidance', icon: <Globe /> },
];

const STATISTICS = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Industries Served' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 20, suffix: '+', label: 'Expert Developers' },
  { value: 10, suffix: '+', label: 'Countries Served' },
];

const EXPERTISE = [
  'React', 'Next.js', 'Node.js', 'Express', 'Laravel', 'PHP', 'WordPress',
  'Shopify', 'WooCommerce', 'Flutter', 'React Native', 'TypeScript',
  'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase',
  'Docker', 'AWS', 'Azure', 'Google Cloud', 'Cloudflare', 'GitHub', 'Git',
  'REST API', 'GraphQL', 'OpenAI', 'ChatGPT API', 'Stripe', 'Razorpay'
];

const DEVELOPMENT_PROCESS = [
  { id: 1, title: 'Requirement Analysis', desc: 'Understanding your business goals and technical needs.' },
  { id: 2, title: 'Research & Planning', desc: 'Strategic blueprinting and technology stack selection.' },
  { id: 3, title: 'Wireframe & UI Design', desc: 'Crafting pixel-perfect, user-centric interfaces.' },
  { id: 4, title: 'Development', desc: 'Writing clean, scalable, and secure code.' },
  { id: 5, title: 'Testing & QA', desc: 'Rigorous testing for flawless performance.' },
  { id: 6, title: 'Deployment', desc: 'Smooth launch to production environments.' },
  { id: 7, title: 'Maintenance & Support', desc: 'Ongoing optimization and feature updates.' },
];

const INDUSTRIES = [
  'Healthcare', 'Finance', 'Education', 'Real Estate', 'Travel',
  'Restaurant', 'Construction', 'Legal', 'Fitness', 'Manufacturing',
  'Logistics', 'Ecommerce', 'Startup', 'Enterprise'
];

const TRUST_SECTION = [
  'NDA Available', 'Source Code Included', 'Dedicated Support',
  'Agile Development', 'Free Consultation', 'Secure Payment',
  'Performance Optimized', 'SEO Ready', 'GDPR Friendly', 'Clean Code Standards'
];

const TIMELINE = [
  { year: '2019', title: 'Founded', desc: 'Started our journey with a small team of passionate developers.' },
  { year: '2020', title: 'First 10 Clients', desc: 'Successfully delivered foundational projects.' },
  { year: '2021', title: '50 Projects', desc: 'Expanded team and expertise across multiple domains.' },
  { year: '2022', title: '100 Projects', desc: 'Achieved a major milestone in project delivery.' },
  { year: '2023', title: 'International Clients', desc: 'Expanded our reach to a global audience.' },
  { year: '2024+', title: 'Future Vision', desc: 'Leading the AI & Web3 digital transformation.' },
];

const AWARDS = [
  'Google Partner', 'AWS Ready', 'Meta Business', 'Microsoft Partner', 'ISO Standards'
];

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

// --- COUNTER COMPONENT ---
const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, { threshold: 0.5 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
      {count}{suffix}
    </span>
  );
};

// --- MAIN COMPONENT ---
export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden selection:bg-purple-500/30 font-sans">
      <Navbar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-32 pt-32 pb-24">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center gap-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium tracking-wide">Trusted by 100+ Businesses Worldwide</span>
          </motion.div>

          <motion.h1 
            variants={fadeUp} initial="hidden" animate="visible"
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
          >
            <span className="block text-lg md:text-2xl text-gray-400 font-medium mb-4 uppercase tracking-widest">About Our Company</span>
            Create Powerful <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Digital Experiences
            </span> <br className="hidden md:block" />
            That Drive Growth
          </motion.h1>
        </section>

        {/* SEO CONTENT & HIGHLIGHT BOX */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              As a premier <strong>Website Development Company</strong> and <strong>Software Development Company</strong>, we specialize in <strong>Custom Software Development</strong> tailored to scale your business. Our expertise spans modern stacks including <strong>React Development</strong>, <strong>Next.js Development</strong>, and <strong>Node.js Development</strong> to build lightning-fast web applications.
            </p>
            <p>
              We provide end-to-end <strong>Digital Transformation</strong> through robust <strong>Laravel Development</strong>, <strong>PHP Development</strong>, and bespoke <strong>WordPress Development</strong>. From <strong>Ecommerce Development</strong> with <strong>Shopify Development</strong> to native <strong>Mobile App Development</strong>, our <strong>UI UX Design</strong> team ensures intuitive and engaging user journeys.
            </p>
            <p>
              Beyond development, we offer comprehensive <strong>Digital Marketing</strong> and <strong>SEO Services</strong> to boost your visibility. Our <strong>Cloud Solutions</strong>, secure <strong>API Development</strong>, cutting-edge <strong>AI Development</strong>, and <strong>AI Automation</strong> empower businesses to operate smarter. We guarantee top-tier <strong>Website Maintenance</strong>, unmatched <strong>Performance Optimization</strong>, and enterprise-grade <strong>Security</strong> for all our clients.
            </p>
          </motion.div>
          
          <motion.div 
            variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-blue-500/50 to-purple-500/50 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl p-8 md:p-10 rounded-2xl flex flex-col justify-center gap-6 border border-white/5">
              <span className="text-6xl text-purple-400/20 absolute top-4 left-4 font-serif">"</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug relative z-10 text-white">
                We don't just build websites.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  We build digital products that increase revenue, improve customer experience and accelerate business growth.
                </span>
              </h3>
            </div>
          </motion.div>
        </section>

        {/* IMAGE SECTION */}
        <section className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden group border border-white/10 hidden sm:block">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
               alt="Our Team" 
               className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
             />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="absolute bottom-10 left-10 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center gap-4 hidden md:flex"
          >
            <div className="flex text-amber-400"><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/></div>
            <div>
              <p className="text-white font-bold text-xl">4.9 Rating</p>
              <p className="text-gray-300 text-sm">From 50+ Clients</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="absolute top-10 right-10 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl text-center hidden md:block"
          >
            <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">100+</p>
            <p className="text-gray-200 font-medium">Projects Delivered</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="absolute bottom-10 right-10 p-6 rounded-2xl bg-purple-900/40 backdrop-blur-md border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)] text-center hidden lg:block"
          >
            <p className="text-4xl font-black text-white">5+</p>
            <p className="text-purple-200 font-medium">Years Experience</p>
          </motion.div>
        </section>

        {/* MISSION & VISION */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-colors" />
            <Target className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower businesses by engineering scalable, innovative, and user-centric digital solutions that drive measurable growth and foster long-term digital transformation in a rapidly evolving technological landscape.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-colors" />
            <Eye className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the globally recognized leader in custom software development and digital innovation, setting industry standards for excellence, security, and performance while building a better digital future for everyone.
            </p>
          </motion.div>
        </section>

        {/* CORE VALUES */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold">Our Core Values</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide our work, define our culture, and ensure we deliver excellence every single time.</p>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all group backdrop-blur-sm">
                <div className="p-3 bg-white/5 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{val.title}</h4>
                <p className="text-sm text-gray-500">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* STATISTICS */}
        <section className="py-10 border-y border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10 blur-3xl" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-12 relative z-10 text-center">
            {STATISTICS.slice(0, 4).map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">We combine technical excellence with business acumen to deliver solutions that give you a competitive edge.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="text-blue-400">{item.icon}</div>
                <span className="font-medium text-sm md:text-base text-gray-200">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        {/* <section className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Mastering the modern tech stack to build robust, scalable, and future-proof applications.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {EXPERTISE.map((tech, i) => (
              <motion.span 
                key={i} whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-default text-gray-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section> */}

        {/* DEVELOPMENT PROCESS */}
        <section className="space-y-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">A proven, systematic approach to turning your vision into a successful digital reality.</p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 hidden md:block" />
            
            <div className="space-y-12">
              {DEVELOPMENT_PROCESS.map((step, i) => (
                <motion.div 
                  key={step.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col md:flex-row gap-6 items-start md:items-center relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'}`}>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                  
                  {/* Center Node */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#0a0a0a] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)] shrink-0 font-bold text-xl text-purple-300 mx-auto md:mx-0">
                    {step.id}
                  </div>

                  {/* Mobile Content */}
                  <div className="md:hidden text-center w-full mt-4">
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES SERVED & TRUST SECTION */}
        <section className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold">Industries We Serve</h3>
            <div className="flex flex-wrap gap-3">
              {INDUSTRIES.map((ind, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-blue-900/20 text-blue-300 border border-blue-500/20 text-sm">
                  {ind}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold">Why Trust Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST_SECTION.map((trust, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="font-medium text-sm">{trust}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPANY TIMELINE */}
        <section className="py-16 rounded-3xl bg-white/[0.02] border border-white/5 px-6 md:px-12 space-y-12">
           <h3 className="text-2xl sm:text-3xl font-bold text-center">Our Journey</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {TIMELINE.map((point, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-3 relative">
                  <span className="text-purple-400 font-bold text-xl">{point.year}</span>
                  <div className="w-full h-px bg-white/20 relative hidden sm:block">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">{point.title}</h5>
                    <p className="text-xs text-gray-500">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* TESTIMONIAL PREVIEW */}
        <section className="max-w-4xl mx-auto text-center space-y-8 px-4">
          <div className="inline-flex gap-1 text-amber-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
          </div>
          <blockquote className="text-2xl sm:text-3xl md:text-5xl font-medium leading-tight text-white">
            "Our experience was outstanding. The team delivered exactly what we wanted, exceeding all expectations in performance and design."
          </blockquote>
          <div>
            <p className="text-xl font-semibold text-white">Sarah Jenkins</p>
            <p className="text-gray-400">CTO, TechNova Enterprise</p>
          </div>
        </section>

        {/* AWARDS & LOGOS */}
        <section className="space-y-12 pt-10 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {AWARDS.map((award, i) => (
               <div key={i} className="flex items-center gap-2 font-bold text-lg sm:text-xl">
                 <Award className="w-6 h-6" />
                 {award}
               </div>
             ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="relative rounded-3xl overflow-hidden mt-10 md:mt-20 group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl group-hover:opacity-100 transition-opacity opacity-70" />
          <div className="relative p-8 sm:p-12 md:p-24 text-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center gap-8">
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl">
              Ready to Build Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Product?</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
              Let's discuss your project and create a powerful website, application or software solution tailored to your business growth.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-4 w-full sm:w-auto">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </motion.button>
              <Link to="/Contact" className="w-full sm:w-auto">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-semibold flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-colors">
                  Book Free Consultation
                </motion.button>
              </Link>
              <a href="https://wa.me/919801568951" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-8 py-4 rounded-full bg-green-500/10 text-green-400 font-semibold flex items-center justify-center gap-2 border border-green-500/20 hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </motion.button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
