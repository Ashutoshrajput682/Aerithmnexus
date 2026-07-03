import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, CheckCircle, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const technologies = [
  'React','Next.js','Vue.js','Node.js','Express.js','Laravel','PHP','Python',
  'Django','MongoDB','PostgreSQL','MySQL','Firebase','Tailwind CSS','TypeScript',
  'WordPress','Shopify','AWS','Docker','GraphQL','REST API','Framer Motion','Figma',
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 sm:pt-30 pb-12 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-300 text-xs sm:text-sm font-medium shadow-lg mb-6 sm:mb-8"
          >
            <Code className="w-4 h-4" />
            Premium Web Development Company
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-5 sm:mb-6 drop-shadow-xl">
            Custom Website
            <br className="hidden sm:block" />
            {' '}Development &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
              Digital Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 sm:mb-10 px-2">
            We build modern websites, web applications, eCommerce platforms, custom software and
            SEO-friendly digital solutions that help businesses grow faster online.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 mb-10 sm:mb-12">
            {['Free Consultation', 'SEO Optimized', 'Mobile Responsive', 'Fast Delivery'].map((t) => (
              <div key={t} className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                {t}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-5 mb-16 sm:mb-20 px-4 xs:px-0">
            <Link
              to="/Contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-9 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_40px_rgba(99,102,241,0.7)] transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/Projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-9 sm:py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 font-semibold text-sm sm:text-base transition-all duration-300"
            >
              <Zap className="w-4 h-4" />
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto mb-14 sm:mb-16">
            {[
              { val: '100+', label: 'Projects Delivered' },
              { val: '50+',  label: 'Happy Clients' },
              { val: '5+',   label: 'Years Experience' },
              { val: '5.0',  label: 'Client Rating', star: true },
            ].map((s) => (
              <div key={s.label} className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all">
                <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-1">
                  {s.val}
                  {s.star && <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Technologies */}
          {/* <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-5 sm:mb-6">
              Technologies We Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm hover:border-blue-500 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;