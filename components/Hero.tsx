'use client'
import { motion } from 'framer-motion'
import { MapPin, Github, Linkedin, ChevronDown, MousePointer2 } from 'lucide-react'
import { resume } from '@/data/resume'
import { AntiGravityCanvas } from '@/components/ui/particle-effect-for-hero'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-black overflow-hidden">
      {/* Interactive particle canvas */}
      <AntiGravityCanvas />

      {/* Hero content — centered overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs text-indigo-400 border border-indigo-500/25 bg-indigo-500/5 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Open to new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-4 leading-none"
        >
          <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            {resume.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-indigo-400 font-semibold mb-5 tracking-wide"
        >
          {resume.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-400 max-w-lg mx-auto mb-10 leading-relaxed text-sm sm:text-base"
        >
          {resume.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <a
            href="#experience"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-colors text-sm"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium rounded-xl transition-colors text-sm backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center justify-center gap-6 text-zinc-500"
        >
          <span className="flex items-center gap-1.5 text-sm">
            <MapPin size={13} className="text-indigo-400" />
            {resume.location}
          </span>
          <a
            href={resume.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>
      </div>

      {/* Interact hint — hidden on touch devices */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-white/25 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Move cursor to interact</span>
        <MousePointer2 size={14} />
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-700 hover:text-zinc-400 transition-colors animate-bounce z-20"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  )
}
