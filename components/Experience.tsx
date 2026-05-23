'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, MapPin, Calendar } from 'lucide-react'
import { resume } from '@/data/resume'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-zinc-950/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-2">02. Experience</p>
          <h2 className="text-3xl font-bold text-white">Work History</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800" />

          <div className="space-y-8 pl-8">
            {resume.experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.125rem] top-5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#0a0a0a] group-hover:scale-125 transition-transform" />

                <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-white">{job.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-zinc-500">
                        <span className="flex items-center gap-1 text-indigo-400 font-medium">
                          <Building2 size={11} />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {job.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-indigo-500 mt-1.5 shrink-0 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
