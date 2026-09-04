import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ResearchComparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const approaches = [
    { name: 'Existing Signal Preemption', focus: 'Signal-focused' },
    { name: 'Existing Green-Wave Approaches', focus: 'Route-focused' },
    { name: 'Manual Green Corridors', focus: 'Coordination-heavy' },
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="research-comparison">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-command-navy font-display uppercase tracking-tight mb-6">
            Why SIREN is Different
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            "SIREN extends the coordination layer beyond signal timing."
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
           
           {/* Existing Approaches */}
           <div className="flex flex-col gap-4">
              {approaches.map((item, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   animate={inView ? { opacity: 1, x: 0 } : {}}
                   transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                   className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                   <span className="font-semibold text-command-navy">{item.name}</span>
                   <span className="text-xs font-bold bg-slate-200 text-slate-500 px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                     {item.focus}
                   </span>
                </motion.div>
              ))}
           </div>

           {/* SIREN Approach */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={inView ? { opacity: 1, scale: 1 } : {}}
             transition={{ duration: 0.7, delay: 0.5 }}
             className="bg-command-navy rounded-3xl p-8 border border-corridor-green/30 shadow-lg relative overflow-hidden h-full flex flex-col justify-center"
           >
              <div className="absolute inset-0 bg-corridor-green/5" />
              
              <div className="relative z-10">
                 <h3 className="text-2xl font-black text-corridor-green font-display mb-6 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-corridor-green animate-pulse" />
                   SIREN
                 </h3>
                 
                 <div className="flex flex-wrap gap-2 mb-6">
                    {['Route', 'Traffic', 'Obstruction', 'Responder', 'Hospital'].map((tag, i) => (
                       <span key={i} className="bg-white/10 text-white border border-white/20 px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide">
                          {tag}
                       </span>
                    ))}
                 </div>
                 
                 <p className="text-slate-300 font-medium leading-relaxed">
                   A unified emergency mobility ecosystem connecting every node from dispatch to hospital handoff.
                 </p>
              </div>
           </motion.div>

        </div>

      </div>
    </section>
  )
}
