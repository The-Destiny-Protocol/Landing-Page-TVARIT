import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

export default function PublishedResearch() {
  return (
    <section className="relative w-full bg-white py-24 border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-deep-blue animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-deep-blue uppercase">Academic Research</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display leading-tight">
              S.I.R.E.N.: Sensor Fusion and Multi-Layered Architecture
            </h2>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              Read our comprehensive research paper detailing the 7-layer architecture designed to resolve critical transit blockages for emergency preemption systems.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-surface-border space-y-4">
              <h4 className="font-bold text-command-navy text-sm uppercase tracking-wide">Key Highlights</h4>
              <ul className="space-y-3">
                {[
                  'Trilateral sensor fusion (Cloud GPS, V2X, Edge-AI)',
                  'Mitigation of queue spillback and secondary gridlock',
                  'Targets a preventable mortality pool of ~1,754 deaths/year in Odisha'
                ].map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-corridor-green shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="text-sm text-text-secondary font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/SIREN_Research_Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-command-navy hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md"
              >
                <FileText size={18} />
                Read Paper
              </a>
              <a
                href="/SIREN_Research_Paper.pdf"
                download
                className="inline-flex items-center justify-center gap-2 border border-surface-border hover:border-command-navy text-command-navy font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 bg-white"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-surface-border shadow-2xl bg-white aspect-[3/4] max-w-sm mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Mockup of the paper first page */}
              <div className="absolute inset-0 p-8 flex flex-col opacity-90">
                <h3 className="text-center font-bold text-sm text-command-navy mb-2">S.I.R.E.N.: Sensor Fusion and Multi-Layered Architecture for Emergency Preemption Systems</h3>
                <p className="text-center text-[8px] text-text-secondary mb-6 italic">Rohit Jain, Avanish Padhy, Arpita Padhi, Sahil Kumar Sahoo, Ritisha Sahoo, Swadhin Dibya Jyoti</p>
                
                <div className="text-[7px] text-justify text-slate-500 leading-relaxed mb-4 font-serif">
                  <strong>Abstract—</strong>Emergency medical transit in densely populated urban networks is severely bottlenecked by traffic congestion, inadequate preemption systems, and uncoordinated infrastructure, leading to catastrophic delays during the critical "Golden Hour." This paper proposes S.I.R.E.N. (Smart Intelligent Response and Emergency Navigation), a novel 7-layer architecture designed to resolve these critical transit blockages. Unlike conventional systems that rely on prohibitive single-modality sensors, S.I.R.E.N. utilizes a trilateral sensor fusion approach combining macro-level cloud GPS routing, deterministic sub-GHz V2X micro-actuation, and edge-AI visual-acoustic fallbacks.
                </div>
                
                <div className="flex gap-4 mb-4">
                    <div className="flex-1 space-y-1.5">
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-5/6 bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-4/6 bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                    </div>
                    <div className="flex-1 space-y-1.5">
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-5/6 bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-4/6 bg-slate-200 rounded" />
                        <div className="h-1.5 w-1/2 bg-slate-200 rounded" />
                    </div>
                </div>

                 <div className="flex gap-4">
                    <div className="flex-1 space-y-1.5">
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-5/6 bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                        <div className="h-1.5 w-full bg-slate-200 rounded" />
                    </div>
                    <div className="flex-1 space-y-1.5">
                        <div className="h-24 w-full bg-slate-200 rounded flex items-center justify-center">
                            <span className="text-slate-400 text-[8px] font-medium">Figure 1</span>
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-1.5 bg-deep-blue" />
            </div>
            
            <div className="absolute -inset-4 bg-deep-blue/5 rounded-3xl -z-10 transform -rotate-3 max-w-md mx-auto" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
