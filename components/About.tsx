'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { resume } from '@/data/resume'

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '6', label: 'Companies' },
  { value: '4', label: 'Degrees' },
  { value: '4', label: 'Certifications' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-2">01. About</p>
          <h2 className="text-3xl font-bold text-white">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-zinc-400 leading-relaxed"
          >
            <p>{resume.summary}</p>
            <p className="text-zinc-500 text-sm border-l-2 border-indigo-500/40 pl-4">
              Currently pursuing dual Master&apos;s degrees at Indiana University in Strategy &amp; Leadership and Business Analytics, bridging deep engineering expertise with executive-level business acumen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-indigo-500/30 transition-colors"
              >
                <div className="text-3xl font-extrabold text-indigo-400 mb-1">{s.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
