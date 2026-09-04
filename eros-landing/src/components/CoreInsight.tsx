import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, TrafficCone, Hospital, CarFront, RadioTower, ShieldAlert } from 'lucide-react'

export default function CoreInsight() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="core-insight">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Statement */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold text-emergency-red tracking-widest uppercase mb-4">
            The Problem is Bigger Than a Red Light
          </h2>
          <h3 className="text-4xl sm:text-5xl font-black text-command-navy font-display mb-6">
            A Green Light Doesn't Guarantee a Clear Road.
          </h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            EROS goes beyond basic signal preemption to understand the actual emergency path — including real-time routing, physical blockages, responder coordination, and hospital handoff.
          </p>
        </motion.div>

        {/* The Flawed Current Model Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-32"
        >
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-surface-bg p-8 rounded-3xl border border-surface-border w-full max-w-4xl">
              <div className="flex flex-col items-center text-center w-full md:w-1/3">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 mb-4">
                   <div className="w-6 h-6 bg-emergency-red rounded-full" />
                 </div>
                 <h4 className="font-bold text-command-navy">Red Signal</h4>
                 <p className="text-xs text-slate-500 mt-2">Ambulance approaches</p>
              </div>

              <div className="hidden md:block w-12 h-1 bg-slate-300 relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-slate-300 border-b-[4px] border-b-transparent" />
              </div>
              <div className="md:hidden w-1 h-8 bg-slate-300 my-2" />

              <div className="flex flex-col items-center text-center w-full md:w-1/3">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 mb-4">
                   <div className="w-6 h-6 bg-corridor-green rounded-full" />
                 </div>
                 <h4 className="font-bold text-command-navy">Signal Cleared</h4>
                 <p className="text-xs text-slate-500 mt-2">Traditional systems stop here</p>
              </div>

              <div className="hidden md:block w-12 h-1 bg-slate-300 relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-slate-300 border-b-[4px] border-b-transparent" />
              </div>
              <div className="md:hidden w-1 h-8 bg-slate-300 my-2" />

              <div className="flex flex-col items-center text-center w-full md:w-1/3 bg-emergency-red/5 p-6 rounded-2xl border border-emergency-red/20">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-emergency-red/30 mb-4 text-emergency-red">
                   <AlertTriangle size={28} strokeWidth={2.5} />
                 </div>
                 <h4 className="font-bold text-emergency-red">Road Still Blocked</h4>
                 <p className="text-xs text-slate-600 mt-2">Crowds, vendors, side-friction</p>
              </div>
           </div>
        </motion.div>


        {/* Bold New Direction */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-command-navy font-display mb-4">
            CLEAR THE PATH. NOT JUST THE SIGNAL.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            An IoT + AI framework designed to orchestrate the entire physical emergency mobility chain.
          </p>
        </motion.div>

        {/* Vertical Journey Line */}
        <div className="relative max-w-lg mx-auto">
           {/* Line connecting everything */}
           <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-corridor-green/20 -translate-x-1/2" />
           <motion.div 
             initial={{ height: 0 }}
             animate={inView ? { height: '100%' } : {}}
             transition={{ duration: 2, ease: "linear", delay: 0.6 }}
             className="absolute left-1/2 top-8 bottom-8 w-1 bg-corridor-green -translate-x-1/2 origin-top"
           />

           <div className="relative z-10 flex flex-col gap-10">
              
              <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.8 }} className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-white border-2 border-command-navy rounded-full flex items-center justify-center shadow-md mb-2">
                   <CarFront size={28} className="text-command-navy" />
                 </div>
                 <span className="font-bold text-command-navy uppercase tracking-wider text-sm">Ambulance</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 1 }} className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-white border-2 border-deep-blue rounded-full flex items-center justify-center shadow-md mb-2">
                   <RadioTower size={28} className="text-deep-blue" />
                 </div>
                 <span className="font-bold text-deep-blue uppercase tracking-wider text-sm">GPS & Telemetry</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 1.2 }} className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-white border-2 border-traffic-amber rounded-full flex items-center justify-center shadow-md mb-2">
                   <TrafficCone size={28} className="text-traffic-amber" />
                 </div>
                 <span className="font-bold text-traffic-amber uppercase tracking-wider text-sm">Traffic Control</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 1.4 }} className="flex flex-col items-center bg-emergency-red/5 p-4 rounded-3xl border border-emergency-red/20 w-48 mx-auto">
                 <div className="w-16 h-16 bg-white border-2 border-emergency-red rounded-full flex items-center justify-center shadow-md mb-2">
                   <AlertTriangle size={28} className="text-emergency-red" />
                 </div>
                 <span className="font-bold text-emergency-red uppercase tracking-wider text-sm text-center">Physical Obstruction</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 1.6 }} className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-white border-2 border-command-navy rounded-full flex items-center justify-center shadow-md mb-2">
                   <ShieldAlert size={28} className="text-command-navy" />
                 </div>
                 <span className="font-bold text-command-navy uppercase tracking-wider text-sm text-center">Police / Responder</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 1.8 }} className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-white border-2 border-corridor-green rounded-full flex items-center justify-center shadow-md mb-2">
                   <Hospital size={28} className="text-corridor-green" />
                 </div>
                 <span className="font-bold text-corridor-green uppercase tracking-wider text-sm">Hospital</span>
              </motion.div>
           </div>
        </div>

      </div>
    </section>
  )
}
