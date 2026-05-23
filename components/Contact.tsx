'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { resume } from '@/data/resume'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-zinc-950/60">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-2">06. Contact</p>
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            I&apos;m open to new opportunities and collaborations. Whether you have a project in mind or just want to talk engineering, feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href={`mailto:${resume.email}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-colors"
          >
            <Mail size={18} />
            {resume.email}
          </a>

          <div className="flex items-center gap-6 text-zinc-500">
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors text-sm"
            >
              <Github size={16} />
              GitHub
            </a>
            <div className="w-px h-4 bg-zinc-800" />
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors text-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <div className="w-px h-4 bg-zinc-800" />
            <span className="flex items-center gap-1.5 text-sm">
              <MapPin size={14} />
              {resume.location}
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-xs text-zinc-700"
        >
          © 2026 {resume.name} · Built with Next.js &amp; Tailwind CSS
        </motion.p>
      </div>
    </section>
  )
}
