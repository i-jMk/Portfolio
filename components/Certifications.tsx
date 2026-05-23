'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Clock, ExternalLink } from 'lucide-react'
import { resume } from '@/data/resume'

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" ref={ref} className="py-24 px-6 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-2">04. Certifications</p>
          <h2 className="text-3xl font-bold text-white">Credentials</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resume.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors flex flex-col gap-3"
            >
              {/* Icon + Status row */}
              <div className="flex items-start justify-between gap-2">
                {cert.status === 'Active' ? (
                  <Award size={22} className="text-indigo-400 shrink-0 mt-0.5" />
                ) : (
                  <Clock size={22} className="text-amber-400 shrink-0 mt-0.5" />
                )}
                <span
                  className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                    cert.status === 'Active'
                      ? 'bg-green-500/10 text-green-400 border-green-500/25'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/25'
                  }`}
                >
                  {cert.status === 'Active' ? 'Active' : 'In Progress'}
                </span>
              </div>

              {/* Cert name */}
              <p className="text-sm font-semibold text-zinc-100 leading-snug">{cert.name}</p>

              {/* Issuer / date / credential ID (only for enriched certs) */}
              {'issuer' in cert && (
                <div className="flex flex-col gap-1 border-t border-zinc-800 pt-3 mt-1">
                  <p className="text-xs text-zinc-400">
                    <span className="text-zinc-500">Issuer: </span>
                    {(cert as any).issuer}
                  </p>
                  <p className="text-xs text-zinc-400">
                    <span className="text-zinc-500">Issued: </span>
                    {(cert as any).issued}
                  </p>
                  <p className="text-xs text-zinc-500 font-mono truncate">
                    ID: {(cert as any).credentialId}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
