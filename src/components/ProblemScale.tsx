import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemScale() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 bg-surface-bg overflow-hidden" id="problem-scale">
      <div className="absolute inset-0 bg-road-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-emergency-red rounded" />
            <span className="text-xs font-semibold text-emergency-red tracking-widest uppercase">National Context</span>
            <span className="w-8 h-0.5 bg-emergency-red rounded" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-command-navy font-display tracking-tight">
            The Scale of the Problem
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            India faces a substantial and measurable road-safety burden.
          </p>
        </motion.div>

        {/* Story Flow: Accidents -> Deaths -> Injured -> Severity */}
        <div className="relative max-w-3xl mx-auto mb-32">
          {/* Connecting Line (Vertical) */}
          <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-slate-200" />
          <motion.div 
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-emergency-red origin-top"
          />

          <div className="relative z-10 flex flex-col gap-16">
            
            {/* Top row: Accidents & Deaths */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-4 w-full">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center w-full sm:w-64"
              >
                <div className="text-4xl font-black text-command-navy font-display mb-1">4.80L</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Reported Accidents</div>
              </motion.div>

              <div className="hidden sm:block absolute left-1/2 top-10 w-full -translate-x-1/2 h-0.5 bg-slate-200 -z-10" />
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-emergency-red/5 p-6 rounded-2xl border border-emergency-red/20 shadow-sm text-center w-full sm:w-64 relative"
              >
                <div className="text-4xl font-black text-emergency-red font-display mb-1">1.72L</div>
                <div className="text-sm font-bold text-command-navy uppercase tracking-wide">Fatalities</div>
              </motion.div>

            </div>

            {/* Middle row: Injured */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }}
              className="mx-auto bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center w-full sm:w-64"
            >
              <div className="text-4xl font-black text-traffic-amber font-display mb-1">4.62L</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">People Injured</div>
            </motion.div>

            {/* Bottom row: Severity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 1 }}
              className="mx-auto bg-command-navy p-6 rounded-2xl shadow-lg text-center w-full max-w-sm"
            >
              <div className="text-5xl font-black text-white font-display mb-2">36</div>
              <div className="text-sm font-medium text-slate-300">
                Fatalities per 100 reported road accidents
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
             <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Source: MoRTH, Road Accidents in India 2023</p>
          </div>
        </div>

        {/* Highway Disproportion Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-black text-command-navy font-display mb-8 text-center max-w-2xl mx-auto">
            A Small Part of the Network Carries a Disproportionate Share of the Loss.
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            
            {/* 5% Network */}
            <div className="flex flex-col items-center text-center">
               <div className="text-5xl font-black text-slate-300 font-display mb-4">~5%</div>
               <p className="text-sm font-semibold text-slate-500 max-w-[150px]">
                 Approximate share of India's road network represented by highways
               </p>
            </div>

            {/* Expanding Visual Arrow */}
            <div className="hidden md:flex flex-col items-center justify-center relative w-32 h-20">
               <motion.div 
                 initial={{ width: '0%' }}
                 animate={inView ? { width: '100%' } : {}}
                 transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                 className="h-1 bg-gradient-to-r from-slate-200 to-emergency-red absolute top-1/2 -translate-y-1/2 left-0"
               />
               <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-emergency-red border-b-[6px] border-b-transparent" />
            </div>
            
            <div className="md:hidden w-1 h-12 bg-gradient-to-b from-slate-200 to-emergency-red my-4" />

            {/* 59% Fatalities */}
            <div className="flex flex-col items-center text-center">
               <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ type: "spring", duration: 0.8, delay: 1.8 }}
                  className="text-6xl font-black text-emergency-red font-display mb-4"
               >
                 59%
               </motion.div>
               <p className="text-sm font-semibold text-command-navy max-w-[180px]">
                 Share of reported road fatalities occurring on highways in 2023
               </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
             <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Source: MoRTH — Road Accidents in India 2023</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
