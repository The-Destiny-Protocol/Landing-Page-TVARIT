import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SourcesPanel() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const sources = [
    { title: 'Ministry of Road Transport & Highways', desc: 'Road Accidents in India 2023', link: '#' },
    { title: 'Government of India / PIB', desc: 'Socioeconomic impact assessments', link: '#' },
    { title: 'World Bank', desc: 'Traffic Crash Injuries and Disabilities: The Burden on Indian Society', link: '#' },
    { title: 'WHO', desc: 'Global status report on road safety', link: '#' },
    { title: 'Project Research', desc: 'SIH Technical & Feasibility Research 2026', link: '#' },
  ]

  return (
    <section className="relative py-16 bg-surface-bg border-t border-surface-border">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
            Research & Sources
          </h3>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {sources.map((source, i) => (
               <div key={i} className="flex flex-col">
                  <a href={source.link} className="text-xs font-semibold text-command-navy hover:text-deep-blue transition-colors">
                    {source.title}
                  </a>
                  <span className="text-[10px] text-slate-500">{source.desc}</span>
               </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-200">
             <p className="text-[10px] text-slate-400 max-w-3xl leading-relaxed">
               All external statistics presented on this page are drawn from published national and international reports.
               Projections regarding SIREN's capabilities refer to the system's design intent and prototype functionality.
             </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
