import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ImpactFlywheel() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    'REAL-TIME DATA',
    'BETTER VISIBILITY',
    'FASTER COORDINATION',
    'SMOOTHER EMERGENCY MOVEMENT',
    'BETTER RESOURCE UTILIZATION',
    'SMARTER CITY RESPONSE',
  ]

  return (
    <section className="relative py-24 bg-surface-bg overflow-hidden" id="impact-flywheel">
      <div className="absolute inset-0 bg-road-pattern opacity-[0.03]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flywheel Container */}
        <div ref={ref} className="relative w-full max-w-3xl mx-auto h-[600px] flex items-center justify-center mt-12">
           
           {/* Center Logo */}
           <motion.div 
             initial={{ scale: 0 }}
             animate={inView ? { scale: 1 } : {}}
             transition={{ type: "spring", duration: 1 }}
             className="absolute z-20 w-32 h-32 bg-command-navy rounded-full shadow-[0_0_50px_rgba(16,42,67,0.3)] flex flex-col items-center justify-center border-4 border-white"
           >
             <span className="text-3xl font-black text-white font-display tracking-widest">SIREN</span>
             <span className="text-[10px] text-corridor-green font-bold tracking-widest uppercase mt-1">Flywheel</span>
           </motion.div>

           {/* Rotating Ring / Labels */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border border-slate-200"
           >
              {steps.map((step, i) => {
                 const angle = (i * (360 / steps.length)) * (Math.PI / 180)
                 const radius = 225 // Half of 450px
                 // Positioning for desktop (450px radius)
                 const left = `calc(50% + ${Math.cos(angle) * radius}px)`
                 const top = `calc(50% + ${Math.sin(angle) * radius}px)`
                 
                 return (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0 }}
                     animate={inView ? { opacity: 1 } : {}}
                     transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                     style={{ left, top }}
                     className="absolute -translate-x-1/2 -translate-y-1/2 hidden sm:block"
                   >
                     {/* Counter-rotate the label so it stays upright */}
                     <motion.div
                       animate={{ rotate: -360 }}
                       transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                       className="bg-white px-4 py-2 rounded-xl shadow-md border border-slate-200 whitespace-nowrap text-xs font-bold text-command-navy tracking-wide"
                     >
                       {step}
                     </motion.div>
                   </motion.div>
                 )
              })}
           </motion.div>
           
           {/* Mobile List Fallback (if ring is too tight) */}
           <div className="absolute inset-0 flex sm:hidden flex-col items-center justify-between py-8 pointer-events-none z-10">
              {steps.map((step, i) => (
                 <div key={i} className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 text-[10px] font-bold text-command-navy text-center max-w-[150px]">
                   {step}
                 </div>
              ))}
           </div>
           
           {/* Connection Arrows SVG */}
           <motion.svg 
             initial={{ opacity: 0 }}
             animate={inView ? { opacity: 0.3 } : {}}
             transition={{ duration: 1, delay: 1 }}
             className="absolute inset-0 w-full h-full z-0" 
             viewBox="0 0 600 600"
           >
             <circle cx="300" cy="300" r="225" fill="none" stroke="#16A34A" strokeWidth="2" strokeDasharray="10 10" />
           </motion.svg>
        </div>

      </div>
    </section>
  )
}
