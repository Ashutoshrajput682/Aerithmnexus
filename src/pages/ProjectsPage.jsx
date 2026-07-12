import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  Code,
  FileText,
  CheckCircle2,
  Trophy,
  Users,
  Globe,
  FolderOpen,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { categories, projects } from '../data/projects';

const stats = [
  { icon: FolderOpen, label: 'Projects Completed', value: '120+', color: 'text-blue-400', glow: 'shadow-[0_0_30px_rgba(59,130,246,0.2)]' },
  { icon: Users, label: 'Happy Clients', value: '50+', color: 'text-violet-400', glow: 'shadow-[0_0_30px_rgba(139,92,246,0.2)]' },
  { icon: Globe, label: 'Countries', value: '15+', color: 'text-pink-400', glow: 'shadow-[0_0_30px_rgba(236,72,153,0.2)]' },
  { icon: Trophy, label: 'Awards', value: '8+', color: 'text-amber-400', glow: 'shadow-[0_0_30px_rgba(245,158,11,0.2)]' },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ── Fixed Background ── */}
      <div className="fixed inset-0 z-0 bg-slate-950">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fuchsia-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 flex flex-col w-full min-h-screen">
        <Navbar />

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-violet-300 font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Our Portfolio</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-xl">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
                  Projects
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                A curated showcase of our finest work — from sleek landing pages to complex full-stack platforms. Every pixel, every line of code, crafted with passion.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FILTER TABS
        ══════════════════════════════════════════════ */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    activeFilter === cat
                      ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white border-transparent shadow-[0_0_20px_rgba(139,92,246,0.35)]'
                      : 'bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.08] hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            PROJECT CARDS GRID
        ══════════════════════════════════════════════ */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
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
                      
                      <p className="text-sm text-slate-300 mb-5 line-clamp-3 font-light leading-relaxed flex-grow">
                        {project.description}
                      </p>



                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
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
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            STATS SECTION
        ══════════════════════════════════════════════ */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Our Track Record
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Numbers that speak for themselves. We let our results do the talking.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className={`flex flex-col items-center text-center p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.06] transition-all duration-500 ${stat.glow}`}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                      <Icon className={`w-7 h-7 ${stat.color}`} />
                    </div>
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 drop-shadow-lg">
                      {stat.value}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════════════ */}
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
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(139,92,246,0.4)]"
                >
                  <Sparkles className="w-7 h-7 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                  Have a Project in Mind?
                </h2>
                <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8 font-light">
                  Let's turn your vision into reality. Whether it's a brand-new product or a redesign — we're ready to build it with you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/Contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-bold transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]"
                  >
                    Start a Project <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/Pricing"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold border border-white/10 hover:border-white/20 transition-all"
                  >
                    View Pricing <Zap className="w-4 h-4" />
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

export default ProjectsPage;
