'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { resume } from '@/data/resume'

const categoryStyles: Record<string, string> = {
  'Core Competencies': 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20',
  'Business Intelligence & ERP': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20',
  'Design & Analysis (CAD/CAE)': 'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20',
  'Programming & Automation': 'bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/20',
}

const headerStyles: Record<string, string> = {
  'Core Competencies': 'text-indigo-400',
  'Business Intelligence & ERP': 'text-emerald-400',
  'Design & Analysis (CAD/CAE)': 'text-violet-400',
  'Programming & Automation': 'text-amber-400',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-2">03. Skills</p>
          <h2 className="text-3xl font-bold text-white">Technical Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {Object.entries(resume.skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
            >
              <h3 className={`text-xs font-mono font-semibold tracking-wider uppercase mb-4 ${headerStyles[category] ?? 'text-zinc-400'}`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors cursor-default ${
                      categoryStyles[category] ?? 'bg-zinc-800 text-zinc-300 border-zinc-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
