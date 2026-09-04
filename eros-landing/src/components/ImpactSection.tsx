import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HeartPulse, Users, Landmark, Scale, Leaf } from 'lucide-react'

export default function ImpactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const socialImpacts = [
    { title: 'HUMAN', desc: 'Potentially reduce avoidable emergency mobility delays.', icon: <HeartPulse size={20} /> },
    { title: 'SOCIAL', desc: 'Improve emergency visibility and coordination across congested areas.', icon: <Users size={20} /> },
    { title: 'GOVERNANCE', desc: 'Give traffic and emergency authorities a shared operational view.', icon: <Landmark size={20} /> },
    { title: 'EQUITY', desc: 'Reduce the geographic penalty of congestion for people who depend on emergency transport.', icon: <Scale size={20} /> },
  ]

  const economicCosts = ['ROAD CRASH', 'MEDICAL COST', 'LOST INCOME', 'LOST PRODUCTIVITY', 'TRAFFIC DISRUPTION']

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="impact">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SOCIAL IMPACT */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-32">
          <h2 className="text-3xl md:text-5xl font-black text-command-navy font-display mb-12 text-center uppercase tracking-tight">
            The Impact Extends Beyond the Ambulance
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {socialImpacts.map((impact, i) => (
              <div key={i} className="bg-surface-bg p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-command-navy mb-4">
                   {impact.icon}
                 </div>
                 <h4 className="font-bold text-command-navy mb-2 tracking-wider">{impact.title}</h4>
                 <p className="text-sm text-text-secondary leading-relaxed flex-1">{impact.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
             <p className="text-lg text-command-navy font-medium italic mb-2">
               "More than 75% of poor households surveyed reported income decline after a road crash."
             </p>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
               World Bank survey evidence
             </p>
          </div>
        </motion.div>

        {/* ECONOMIC IMPACT */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="mb-32">
          <h2 className="text-3xl md:text-5xl font-black text-command-navy font-display mb-12 text-center uppercase tracking-tight">
            Road Safety is Also An Economic Issue.
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mb-12">
            
            <div className="text-center">
               <div className="text-6xl md:text-8xl font-black text-emergency-red font-display mb-4 leading-none">3.14%</div>
               <div className="text-xl md:text-2xl font-bold text-command-navy uppercase tracking-wider mb-2">OF GDP</div>
               <p className="text-sm text-slate-500 font-medium max-w-[200px] mx-auto">
                 Estimated socioeconomic cost of road crashes in India
               </p>
               <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mt-4">
                 Source: Government of India / DIMTS + TRIPP-IIT Delhi study
               </p>
            </div>

            <div className="flex flex-col items-center">
               {economicCosts.map((cost, i) => (
                 <div key={i} className="flex flex-col items-center">
                   <div className="px-6 py-3 bg-slate-800 text-white rounded-lg font-bold text-sm tracking-wider w-56 text-center shadow-md">
                     {cost}
                   </div>
                   {i < economicCosts.length - 1 && (
                     <div className="h-6 w-0.5 bg-slate-300 my-1 relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-slate-300 border-r-[4px] border-r-transparent" />
                     </div>
                   )}
                 </div>
               ))}
            </div>

          </div>

          <div className="max-w-4xl mx-auto text-center p-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-slate-200">
             <h3 className="text-2xl md:text-3xl font-black text-command-navy font-display leading-tight">
               EROS targets the coordination layer that can reduce avoidable emergency mobility friction.
             </h3>
          </div>
        </motion.div>

        {/* ENVIRONMENTAL IMPACT */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-4xl mx-auto">
           <div className="bg-corridor-green/5 border border-corridor-green/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm border border-corridor-green/30 text-corridor-green">
                 <Leaf size={40} />
              </div>
              <div>
                 <h3 className="text-2xl font-black text-corridor-green font-display mb-4 uppercase tracking-wide">
                   Less Idling. Better Flow.
                 </h3>
                 <p className="text-lg text-slate-600 leading-relaxed">
                   Smarter emergency movement can reduce unnecessary stop-and-go around affected intersections and help minimize avoidable vehicle idling.
                 </p>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  )
}
