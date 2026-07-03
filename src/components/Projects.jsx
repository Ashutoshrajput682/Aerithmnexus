import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, FileText, CheckCircle2, ArrowRight, FolderOpen, Users, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const stats = [
  { value: '100+', label: 'Projects Delivered', icon: FolderOpen },
  { value: '50+', label: 'Happy Clients', icon: Users },
  { value: '15+', label: 'Industries Served', icon: Globe },
  { value: '99%', label: 'Client Satisfaction', icon: Star }
];

const Projects = () => {
  // Take only the first 6 projects for the homepage overview
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative z-10 font-sans text-slate-50">
      
      {/* ── Background Glow ── */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Heading ── */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-xl"
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
              Portfolio
            </span>
          </motion.h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Explore a curated selection of our latest website, mobile app, ecommerce, SaaS and AI projects.
          </p>
        </div>

        {/* ── Statistics Section ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center flex flex-col items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:border-white/20 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-3xl font-black text-white mb-1 drop-shadow-md">{stat.value}</h4>
                <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-500"
            >
              {/* Gradient overlay top bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
              
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="relative z-20 p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-white/[0.02]">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-300 mb-5 line-clamp-3 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details Grid */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-xs text-slate-400 border-y border-white/10 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Client</span>
                    <span className="text-slate-200 truncate">{project.clientType}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Location</span>
                    <span className="text-slate-200 truncate">{project.country}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Timeline</span>
                    <span className="text-slate-200 truncate">{project.duration}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Performance</span>
                    <span className="text-emerald-400 font-medium truncate flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {project.performance}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all border border-white/10"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/20 to-violet-500/20 hover:from-blue-500/30 hover:to-violet-500/30 text-blue-300 text-sm font-semibold transition-all border border-blue-500/20"
                    >
                      <FileText className="w-4 h-4" /> Case Study
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shrink-0"
                      title="View Source Code"
                    >
                      <Code className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* ── View All Projects Button ── */}
        <div className="flex justify-center mb-24">
          <Link
            to="/Projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold border border-white/10 hover:border-white/20 transition-all group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-pink-600/10" />
          
          <div className="relative z-10 px-8 py-16 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light">
              Let's build your next website, application or digital product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-bold transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]"
              >
                Start Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/Contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold border border-white/10 hover:border-white/20 transition-all"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Projects;
