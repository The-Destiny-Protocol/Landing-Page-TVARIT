import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Zap, Route, ShieldCheck, Settings, Layers, DollarSign } from 'lucide-react'

export default function Feasibility() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const techStack = ['EDGE', 'MQTT', 'FASTAPI', 'REDIS', 'POSTGIS', 'ROUTING', 'WEBSOCKET', 'COMMAND CENTER']

  const matrix = [
    { title: 'TECHNICAL', desc: 'Existing software architecture + IoT + GIS + WebSockets', label: 'Technically demonstrable', icon: <Server size={20}/> },
    { title: 'OPERATIONAL', desc: 'Existing ambulances + police + traffic signals + hospitals', label: 'Operationally integrable', icon: <Settings size={20}/> },
    { title: 'INFRASTRUCTURAL', desc: 'Retrofitting rather than rebuilding', label: 'Incrementally deployable', icon: <Layers size={20}/> },
    { title: 'ECONOMIC', desc: 'Software-first + targeted hardware additions', label: 'Cost-conscious', icon: <DollarSign size={20}/> },
  ]

  return (
    <section className="relative py-24 bg-surface-bg overflow-hidden" id="feasibility">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-command-navy font-display uppercase tracking-tight mb-6">
            Built For Real-World Infrastructure
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Designed to integrate with existing city assets rather than requiring expensive, decades-long infrastructure overhauls.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          
          {/* Pillar 1 */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-black text-command-navy font-display mb-6">LOW-COST HARDWARE</h3>
            <div className="flex-1 flex flex-col justify-center items-center py-8 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
              <span className="text-4xl font-black text-emergency-red font-display mb-2">₹2,500–₹3,800</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest text-center">per vehicle</span>
            </div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide flex items-center gap-2">
              <ShieldCheck size={14} className="text-corridor-green"/> Estimated prototype hardware cost
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-black text-command-navy font-display mb-6">RETROFIT, NOT REBUILD</h3>
            <div className="flex-1 flex flex-col justify-center gap-3 py-6 px-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6 font-semibold text-sm text-command-navy">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-300"/> Existing roads</div>
              <div className="text-slate-400 pl-1">+</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-300"/> Existing traffic signals</div>
              <div className="text-slate-400 pl-1">+</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-300"/> Existing CCTV infra</div>
              <div className="text-slate-400 pl-1">+</div>
              <div className="flex items-center gap-2 text-corridor-green"><div className="w-2 h-2 rounded-full bg-corridor-green"/> SIREN Intelligence</div>
            </div>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Integrates with existing infrastructure rather than requiring new road construction.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="bg-command-navy p-8 rounded-3xl shadow-lg flex flex-col h-full">
            <h3 className="text-xl font-black text-white font-display mb-6">SOFTWARE-FIRST CORRIDORS</h3>
            <div className="flex-1 flex flex-col justify-center gap-3 py-6 px-4 bg-slate-800 rounded-2xl border border-slate-700 mb-6 font-semibold text-sm text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-corridor-green/5" />
              <div className="relative z-10 text-deep-blue bg-blue-500/20 py-1.5 rounded-lg border border-blue-500/30">GPS</div>
              <div className="relative z-10 text-slate-500 text-lg">↓</div>
              <div className="relative z-10 text-traffic-amber bg-amber-500/20 py-1.5 rounded-lg border border-amber-500/30">Decision Engine</div>
              <div className="relative z-10 text-slate-500 text-lg">↓</div>
              <div className="relative z-10 text-corridor-green bg-green-500/20 py-1.5 rounded-lg border border-green-500/30">Virtual Emergency Corridor</div>
            </div>
            <h4 className="text-lg font-black text-white font-display">No Dedicated Ambulance Lane Required.</h4>
          </motion.div>

        </div>

        {/* Tech Stack Strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.8 }} className="mb-24">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-4">
            {techStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-4">
                <span className="px-4 py-2 bg-slate-100 border border-slate-200 text-command-navy font-bold text-xs md:text-sm rounded-lg shadow-sm">
                  {tech}
                </span>
                {i < techStack.length - 1 && (
                  <span className="text-slate-300 font-bold">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm font-medium text-slate-500">
            Existing prototype components already demonstrate this architecture.
          </p>
        </motion.div>

        {/* Feasibility Matrix */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 1 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {matrix.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-command-navy mb-4">
                 {item.icon}
               </div>
               <h4 className="font-black text-command-navy font-display mb-2">{item.title}</h4>
               <p className="text-sm text-text-secondary mb-6 min-h-[40px]">{item.desc}</p>
               <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-corridor-green/10 text-corridor-green text-xs font-bold rounded-full">
                 <Zap size={12} /> {item.label}
               </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
