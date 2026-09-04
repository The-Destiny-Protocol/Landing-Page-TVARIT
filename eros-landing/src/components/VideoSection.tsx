import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section className="relative w-full bg-white py-20 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emergency-red animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-emergency-red uppercase">Live Demonstration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display mb-4">
            See SIREN in Action
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Watch how our platform seamlessly coordinates emergency response and traffic management in real-time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-surface-border bg-slate-900 flex flex-col h-full"
          >
            <div className="relative w-full pb-[56.25%] flex-shrink-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/4Cl_1SkXkDk"
                title="SIREN Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-command-navy p-4 flex-grow flex items-center justify-center">
              <span className="text-white font-semibold text-sm">Project Demonstration Video</span>
            </div>
          </motion.div>

          {/* PDF Presentation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-surface-border bg-slate-900 flex flex-col h-full"
          >
            <div className="relative w-full pb-[56.25%] bg-white flex-shrink-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="/SIREN_Presentation.pdf#view=FitH"
                title="SIREN Final Presentation"
              ></iframe>
            </div>
            <div className="bg-command-navy p-4 flex-grow flex items-center justify-between px-6">
              <span className="text-white font-semibold text-sm">SIH Final Presentation</span>
              <a 
                href="/SIREN_Presentation.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded transition-colors"
              >
                Open Fullscreen
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
