'use client'
import { motion } from 'framer-motion'
import { MapPin, Github, Linkedin, ChevronDown } from 'lucide-react'
import { resume } from '@/data/resume'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { Card } from '@/components/ui/card'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen">
      <Card className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left: text content */}
          <div className="flex-1 px-8 md:px-16 py-24 md:py-0 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs text-indigo-400 border border-indigo-500/25 bg-indigo-500/5 px-4 py-2 rounded-full mb-8 w-fit"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Open to new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none"
            >
              <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                {resume.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-indigo-400 font-semibold mb-5 tracking-wide"
            >
              {resume.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-zinc-400 max-w-md mb-10 leading-relaxed text-sm"
            >
              {resume.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href="#experience"
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-colors text-sm"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium rounded-xl transition-colors text-sm"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-6 text-zinc-500"
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

          {/* Right: 3D Spline scene */}
          <div className="flex-1 relative min-h-[360px] md:min-h-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-700 hover:text-zinc-400 transition-colors animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  )
}
