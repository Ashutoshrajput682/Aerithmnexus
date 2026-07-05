import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Target, Award, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div id="about" className="relative w-full  text-white overflow-hidden py-24 z-10">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 w-fit backdrop-blur-md">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">About Our Agency</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Products</span> That Drive Growth
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              We are a premium Website and Software Development Company specializing in Custom Software, React, Next.js, and scalable cloud architectures. We don't just write code; we craft digital experiences that accelerate business growth and maximize revenue.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">100+</span>
                <span className="text-sm text-gray-400">Projects Delivered</span>
              </div>
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">99%</span>
                <span className="text-sm text-gray-400">Client Satisfaction</span>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/About">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors">
                  Read Our Full Story <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-[500px] rounded-3xl overflow-hidden group border border-white/10 hidden md:block">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                 alt="Our Team" 
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
               />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center gap-4">
              <div className="flex text-amber-400"><Star fill="currentColor" className="w-5 h-5"/><Star fill="currentColor" className="w-5 h-5"/><Star fill="currentColor" className="w-5 h-5"/><Star fill="currentColor" className="w-5 h-5"/><Star fill="currentColor" className="w-5 h-5"/></div>
              <div>
                <p className="text-white font-bold">4.9 Rating</p>
                <p className="text-gray-300 text-xs">Top Rated Agency</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
