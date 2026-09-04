import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Scalability() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const stages = [
    'PROTOTYPE',
    'PILOT CORRIDOR',
    'SELECTED INTERSECTIONS',
    'EMERGENCY SERVICE INTEGRATION',
    'CITY-SCALE NETWORK'
  ]

  return (
    <section className="relative py-24 bg-surface-bg overflow-hidden" id="scalability">
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
            From Pilot Corridor to City Network
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            EROS can be introduced incrementally rather than requiring city-wide deployment on day one.
          </p>
        </motion.div>

        {/* Visual Progression */}
        <div className="relative mt-12 mb-12">
           <div className="flex flex-col gap-4 max-w-lg mx-auto">
             {stages.map((stage, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={inView ? { opacity: 1, scale: 1 } : {}}
                   transition={{ duration: 0.5, delay: 0.2 + (i * 0.15) }}
                   className={`flex flex-col items-center justify-center`}
                >
                   <div className={`w-full py-4 px-6 text-center rounded-xl font-bold tracking-widest text-sm sm:text-base border transition-all ${
                     i === stages.length - 1 ? 'bg-command-navy text-white border-command-navy shadow-lg' :
                     'bg-white text-command-navy border-slate-200 shadow-sm'
                   }`}>
                     {stage}
                   </div>
                   {i < stages.length - 1 && (
                     <div className="h-6 w-0.5 bg-slate-300 mt-4 relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-slate-300 border-r-[4px] border-r-transparent" />
                     </div>
                   )}
                </motion.div>
             ))}
           </div>
        </div>

      </div>
    </section>
  )
}
