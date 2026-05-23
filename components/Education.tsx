'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import { resume } from '@/data/resume'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-2">05. Education</p>
          <h2 className="text-3xl font-bold text-white">Academic Background</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {resume.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-indigo-500/30 transition-colors"
            >
              <GraduationCap size={22} className="text-indigo-400 mb-4" />
              <p className="text-xs text-indigo-400 font-mono mb-1">{edu.degree}</p>
              <h3 className="text-base font-semibold text-white mb-1">{edu.field}</h3>
              <p className="text-sm text-zinc-400 mb-4">{edu.school}</p>
              <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                <Calendar size={11} />
                {edu.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
