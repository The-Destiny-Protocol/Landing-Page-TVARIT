import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SIRENDifference() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const traditional = ['GPS', 'Signal', 'Green']
  const SIREN = ['GPS', 'Route', 'Traffic', 'Physical Blockage', 'Signal Priority', 'Police Response', 'Hospital']

  return (
    <section className="relative py-24 bg-command-navy overflow-hidden" id="SIREN-difference">
      <div className="absolute inset-0 bg-grid-light opacity-[0.03]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight mb-6">
            MOST SYSTEMS TRACK. <br className="hidden sm:block"/> SIREN COORDINATES.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            SIREN extends the coordination layer beyond basic signal timing, orchestrating the entire physical and digital response.
          </p>
        </motion.div>

        {/* Comparison Flow */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-16 mb-32">
          
          {/* Traditional Approach */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm"
          >
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 text-center">
              Traditional Approach
            </h3>
            <div className="flex flex-col items-center gap-4">
              {traditional.map((item, i) => (
                <div key={`trad-${i}`} className="flex flex-col items-center">
                  <div className="bg-slate-700/50 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-medium min-w-[140px] text-center">
                    {item}
                  </div>
                  {i < traditional.length - 1 && (
                    <div className="h-6 w-0.5 bg-slate-600 my-2" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* SIREN Approach */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 bg-gradient-to-br from-[#1a3a5c] to-command-navy p-8 rounded-3xl border border-corridor-green/30 shadow-[0_0_40px_rgba(22,163,74,0.1)] backdrop-blur-sm"
          >
            <h3 className="text-sm font-bold text-corridor-green uppercase tracking-widest mb-10 text-center flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-corridor-green animate-pulse" />
              SIREN
            </h3>
            <div className="flex flex-col items-center gap-3">
              {SIREN.map((item, i) => (
                <div key={`SIREN-${i}`} className="flex flex-col items-center w-full">
                  <div className={`px-6 py-3 rounded-lg border font-bold min-w-[200px] text-center w-full max-w-xs transition-all ${
                    i === SIREN.length - 1 ? 'bg-corridor-green text-white border-corridor-green shadow-lg' :
                    i === 0 ? 'bg-deep-blue text-white border-blue-500' :
                    'bg-white/10 text-white border-white/20 hover:bg-white/15'
                  }`}>
                    {item}
                  </div>
                  {i < SIREN.length - 1 && (
                    <div className="h-4 w-0.5 bg-corridor-green/50 my-1" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Network Hub */}
        <motion.div 
           initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.6 }}
           className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white font-display mb-16">
            ONE EMERGENCY. ONE COORDINATED NETWORK.
          </h2>

          <div className="relative w-full max-w-2xl mx-auto h-[400px] flex items-center justify-center">
            
            {/* Center SIREN */}
            <div className="relative z-20 bg-command-navy w-24 h-24 rounded-full border-4 border-corridor-green shadow-[0_0_30px_rgba(22,163,74,0.4)] flex items-center justify-center">
              <span className="text-xl font-black text-white font-display tracking-wider">SIREN</span>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-20" aria-hidden="true">
               {/* Radial lines from center (50%, 50%) to nodes */}
               <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#16A34A" strokeWidth="2" strokeDasharray="6 4" />
               <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#16A34A" strokeWidth="2" strokeDasharray="6 4" />
               <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#16A34A" strokeWidth="2" strokeDasharray="6 4" />
               <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#16A34A" strokeWidth="2" strokeDasharray="6 4" />
               <line x1="50%" y1="50%" x2="25%" y2="85%" stroke="#16A34A" strokeWidth="2" strokeDasharray="6 4" />
            </svg>

            {/* Orbiting / Connected Nodes */}
            <div className="absolute top-[5%] left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-600 text-white px-4 py-2 rounded-lg font-bold tracking-wide z-10 shadow-lg">
              AMBULANCES
            </div>
            
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-600 text-white px-4 py-2 rounded-lg font-bold tracking-wide z-10 shadow-lg">
              HOSPITALS
            </div>

            <div className="absolute left-[5%] top-1/2 -translate-y-1/2 bg-slate-800 border border-slate-600 text-white px-4 py-2 rounded-lg font-bold tracking-wide z-10 shadow-lg">
              POLICE
            </div>

            <div className="absolute right-[5%] top-1/2 -translate-y-1/2 bg-slate-800 border border-slate-600 text-white px-4 py-2 rounded-lg font-bold tracking-wide z-10 shadow-lg">
              TRAFFIC
            </div>

            <div className="absolute bottom-[10%] left-[15%] bg-slate-800 border border-slate-600 text-white px-4 py-2 rounded-lg font-bold tracking-wide z-10 shadow-lg">
              GPS
            </div>

            <div className="absolute top-[15%] right-[15%] bg-slate-800 border border-slate-600 text-white px-4 py-2 rounded-lg font-bold tracking-wide z-10 shadow-lg">
              AI / EDGE
            </div>
            
          </div>
          <p className="mt-8 text-slate-400 font-medium">
            SIREN is not another ambulance-tracking app. It is a coordination layer between emergency actors.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
