import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Eye, BrainCircuit, TrafficCone, ShieldAlert, Hospital } from 'lucide-react'

export default function HowErosCreatesValue() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const stages = [
    { title: 'TRACK', desc: 'Real-time ambulance telemetry', icon: <MapPin size={24} /> },
    { title: 'DETECT', desc: 'Vision + acoustic intelligence', icon: <Eye size={24} /> },
    { title: 'UNDERSTAND', desc: 'Geospatial reasoning', icon: <BrainCircuit size={24} /> },
    { title: 'PREEMPT', desc: 'Traffic priority', icon: <TrafficCone size={24} /> },
    { title: 'RESPOND', desc: 'Police / emergency escalation', icon: <ShieldAlert size={24} /> },
    { title: 'ARRIVE', desc: 'Hospital route visibility', icon: <Hospital size={24} /> },
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="how-eros-creates-value">
      <div className="absolute inset-0 bg-road-pattern opacity-[0.03]" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Connected Operational Flow */}
        <div ref={ref} className="relative mt-12 mb-12">
          
          {/* Continuous Path Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 md:-translate-x-1/2 rounded-full" />
          
          {/* Animated Route Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-command-navy via-deep-blue to-corridor-green md:-translate-x-1/2 rounded-full z-0 origin-top"
          />

          <div className="relative z-10 flex flex-col gap-12 md:gap-16">
            {stages.map((stage, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.4 }}
                  className={`flex items-center gap-6 md:gap-12 w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Empty side for layout on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Icon Node */}
                  <div className="relative shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-white border-[3px] border-command-navy shadow-lg text-command-navy z-10 mx-0 md:-mx-8">
                    {stage.icon}
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 md:w-1/2 pb-2">
                    <h4 className="text-2xl font-black text-command-navy font-display mb-1">{stage.title}</h4>
                    <p className="text-lg text-slate-500 font-medium">{stage.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
