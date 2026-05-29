import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(() => onComplete(), 1850)
    return () => window.clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-baby text-rosewood"
    >
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <div className="relative h-24 w-24 rounded-full border border-ivory/30 bg-white/5 shadow-glow backdrop-blur-2xl">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cream via-champagne to-transparent opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center text-3xl font-script text-rosewood">P&S</div>
        </div>
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.35em] text-rosewood/70">Inviting you to a timeless celebration</p>
          <p className="text-2xl font-serif tracking-[0.14em] text-rosewood/90">Loading the wedding invitation</p>
        </div>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-rosewood to-rosewater"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2.6, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  )
}




