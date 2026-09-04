import { motion } from 'framer-motion'

const prototypes = [
  {
    title: 'Command Center Dashboard',
    description: 'Live monitoring and coordination interface for dispatchers.',
    image: '/images/command-center.png',
    colSpan: ''
  },
  {
    title: 'Hardware Integration',
    description: 'Full integrated system with GPS, processing, and communication modules.',
    image: '/images/hardware-setup.jpg',
    colSpan: ''
  },
  {
    title: 'Ambulance Module',
    description: 'In-vehicle unit transmitting real-time location and emergency status.',
    image: '/images/ambulance-module.jpg',
    colSpan: ''
  },
  {
    title: 'Traffic Junction Unit',
    description: 'Signal controller interface for dynamic preemption.',
    image: '/images/traffic-junction.jpg',
    colSpan: ''
  }
]

export default function PrototypeShowcase() {
  return (
    <section className="relative w-full bg-slate-50 py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-corridor-green animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-corridor-green uppercase">Working Prototypes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display mb-4">
            Built for the Real World
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From physical hardware nodes to the comprehensive command center, TVARIT is a fully realized end-to-end solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prototypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-surface-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col ${item.colSpan}`}
            >
              <div className="relative w-full h-64 sm:h-80 bg-slate-100 overflow-hidden border-b border-surface-border">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-bold text-command-navy mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
