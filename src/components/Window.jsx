import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Window({ win, active, onFocus, onClose, onMinimize, onMaximize, onMove, children }) {
  const drag = useRef(null)

  const startDrag = (e) => {
    if (win.maximized) return
    onFocus()
    const point = 'touches' in e ? e.touches[0] : e
    drag.current = { sx: point.clientX, sy: point.clientY, ox: win.x, oy: win.y }

    const move = (ev) => {
      if (!drag.current) return
      const p = 'touches' in ev ? ev.touches[0] : ev
      const nx = drag.current.ox + (p.clientX - drag.current.sx)
      const ny = drag.current.oy + (p.clientY - drag.current.sy)
      onMove(Math.max(0, nx), Math.max(22, ny))
    }
    const up = () => {
      drag.current = null
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('touchend', up)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
    window.addEventListener('touchmove', move, { passive: false })
    window.addEventListener('touchend', up)
  }

  const style = win.maximized
    ? { left: 0, top: 22, width: '100vw', height: 'calc(100vh - 22px)', zIndex: win.z }
    : {
        left: win.x,
        top: win.y,
        width: win.w,
        height: win.h,
        maxWidth: 'calc(100vw - 8px)',
        maxHeight: 'calc(100vh - 30px)',
        zIndex: win.z,
      }

  return (
    <motion.div
      className="mac-window absolute flex flex-col"
      style={style}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.12 }}
      onMouseDown={onFocus}
    >
      <div
        className={`title-bar ${active ? 'active' : ''}`}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onDoubleClick={onMaximize}
      >
        <div className="flex items-center gap-1 pl-1.5 z-10">
          <button className="title-btn" title="Close" onClick={(e) => { e.stopPropagation(); onClose() }} onMouseDown={(e) => e.stopPropagation()} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="title-text">{win.title}</span>
        </div>
        <div className="flex items-center gap-1 ml-auto pr-1.5 z-10">
          <button className="title-btn" title="Minimize" onClick={(e) => { e.stopPropagation(); onMinimize() }} onMouseDown={(e) => e.stopPropagation()}>
            <span style={{ fontSize: 8, lineHeight: 0 }}>–</span>
          </button>
          <button className="title-btn" title="Zoom" onClick={(e) => { e.stopPropagation(); onMaximize() }} onMouseDown={(e) => e.stopPropagation()}>
            <span style={{ width: 5, height: 5, borderTop: '2px solid #000' }} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto mac-scroll bg-[#f5f5ef]">{children}</div>
    </motion.div>
  )
}
