import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TIPS = [
  "Hi, I'm Floppy! Double-click a folder to open it.",
  'New here? Open Case Studies → try Skan AI first.',
  'Drag any window by its striped title bar.',
  'Press ⌘K (or click 🔎 up top) to search everything.',
  'The little squares in a title bar = close · minimize · zoom.',
  'Go idle for a bit… you might see some stars. ✨',
  'Toggle Dark Appearance in the  menu.',
  'Images are placeholders — Samita drops real ones in later.',
]

export default function Mascot() {
  const [i, setI] = useState(0)
  const [open, setOpen] = useState(true)
  const [hidden, setHidden] = useState(false)
  if (hidden) return null

  return (
    <div className="fixed bottom-3 left-3 z-[200] flex items-end gap-2 select-none">
      <button onClick={() => { setI((x) => (x + 1) % TIPS.length); setOpen(true) }} title="Floppy — click for a tip" className="relative">
        <FloppySprite />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            className="bubble mb-2"
          >
            <button onClick={() => setHidden(true)} className="absolute -top-2 -right-2 title-btn" title="Dismiss Floppy">×</button>
            <div className="pr-1">{TIPS[i]}</div>
            <div className="text-[10px] opacity-60 mt-1">click me for another →</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FloppySprite() {
  return (
    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>
      <svg width="46" height="46" viewBox="0 0 22 22" shapeRendering="crispEdges">
        <rect x="2" y="2" width="18" height="18" fill="#1d4aff" stroke="#000" strokeWidth="1" />
        <polygon points="16,2 20,6 20,2" fill="#000" />
        {/* metal shutter */}
        <rect x="5" y="2" width="9" height="6" fill="#cfd3e6" stroke="#000" strokeWidth="0.6" />
        <rect x="9" y="2" width="3" height="6" fill="#8a90a8" />
        {/* label */}
        <rect x="5" y="10" width="12" height="8" fill="#f5f5ef" stroke="#000" strokeWidth="0.6" />
        {/* eyes + smile on the label */}
        <rect x="7" y="12" width="1.6" height="2" fill="#000" />
        <rect x="13" y="12" width="1.6" height="2" fill="#000" />
        <path d="M8 15.5 Q11 17.5 14 15.5" fill="none" stroke="#000" strokeWidth="0.8" />
      </svg>
    </motion.div>
  )
}
