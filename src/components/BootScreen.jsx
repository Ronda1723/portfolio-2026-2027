import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Classic "Happy Mac" + startup progress, then a Welcome chime card.
export default function BootScreen({ onDone }) {
  const [phase, setPhase] = useState(0) // 0 happy mac, 1 welcome/loading

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1300)
    const t2 = setTimeout(() => onDone(), 3600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onDone])

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#b8b8b8] desktop-bg">
      {phase === 0 ? (
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
          className="flex flex-col items-center"
        >
          <HappyMac />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mac-window w-[340px] px-7 py-8 flex flex-col items-center text-center"
        >
          <div className="text-[14px] font-semibold tracking-wide" style={{ color: 'var(--muted)' }}>Welcome to</div>
          <div className="mt-1 display text-3xl font-bold tracking-tight">Samita OS</div>
          <div className="mt-1 text-[12px] pixel opacity-70">System 7.0.1 · Portfolio Edition</div>
          <div className="mt-5 w-full h-4 border border-black bg-white overflow-hidden">
            <motion.div
              className="h-full bg-black"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          </div>
          <div className="mt-2 text-[11px] opacity-70">Starting up…</div>
        </motion.div>
      )}
    </div>
  )
}

function HappyMac() {
  return (
    <div className="flex flex-col items-center" style={{ imageRendering: 'pixelated' }}>
      <svg width="120" height="140" viewBox="0 0 60 70" shapeRendering="crispEdges">
        {/* body */}
        <rect x="4" y="2" width="52" height="62" fill="#dcdcd4" stroke="#000" strokeWidth="1.5" />
        {/* screen */}
        <rect x="10" y="8" width="40" height="32" fill="#fff" stroke="#000" strokeWidth="1.5" />
        {/* eyes */}
        <rect x="20" y="18" width="4" height="6" fill="#000" />
        <rect x="36" y="18" width="4" height="6" fill="#000" />
        {/* smile */}
        <path d="M19 28 Q30 36 41 28" fill="none" stroke="#000" strokeWidth="2" />
        {/* drive slot */}
        <rect x="14" y="48" width="22" height="3" fill="#000" />
        <rect x="40" y="46" width="8" height="8" fill="none" stroke="#000" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
