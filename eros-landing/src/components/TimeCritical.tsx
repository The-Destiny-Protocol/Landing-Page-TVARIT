import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TimeCritical() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    { label: 'Dispatch', time: '0:00' },
    { label: 'Road Access', time: 'Traffic friction begins' },
    { label: 'Ambulance Movement', time: 'En route' },
    { label: 'Traffic Clearance', time: 'Signal coordination' },
    { label: 'Hospital Arrival', time: 'Handoff' },
  ]

  return (
    <section className="relative py-24 bg-surface-bg overflow-hidden" id="time-critical">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-command-navy font-display uppercase tracking-tight mb-6">
            Time is a Clinical Resource.
          </h2>
          <div className="max-w-3xl mx-auto p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
             <p className="text-lg md:text-xl text-text-secondary font-medium italic text-center">
               "SIREN focuses on the mobility and coordination delays that technology can directly address during emergency transport."
             </p>
          </div>
        </motion.div>

        {/* Visual Journey (Horizontal Timeline) */}
        <div className="relative max-w-5xl mx-auto mt-24 mb-12 px-4 sm:px-0">
          {/* Base Line */}
          <div className="hidden sm:block absolute top-6 left-0 right-0 h-1 bg-slate-200" />
          
          {/* Animated Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : {}}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
            className="hidden sm:block absolute top-6 left-0 h-1 bg-gradient-to-r from-command-navy to-corridor-green origin-left"
          />

          <div className="flex flex-col sm:flex-row justify-between relative z-10 gap-8 sm:gap-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
                className="flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-0 w-full sm:w-1/5 relative"
              >
                {/* Mobile vertical line connecting nodes */}
                {index !== steps.length - 1 && (
                  <div className="sm:hidden absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-slate-200 z-0" />
                )}

                {/* Node Point */}
                <div className="relative z-10 w-12 h-12 bg-white rounded-full border-[3px] border-command-navy flex items-center justify-center shadow-md mb-0 sm:mb-4 shrink-0">
                  <div className="w-4 h-4 bg-command-navy rounded-full" />
                </div>
                
                <div className="flex flex-col sm:items-center w-full">
                   <h4 className="font-bold text-command-navy text-sm md:text-base uppercase tracking-wider">{step.label}</h4>
                   <span className="text-xs text-slate-500 font-medium mt-1">{step.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
