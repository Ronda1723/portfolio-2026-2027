import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Window({ win, active, onFocus, onClose, onMinimize, onMaximize, onMove, onResize, children }) {
  const drag = useRef(null)

  const startResize = (e) => {
    e.stopPropagation()
    onFocus()
    const point = 'touches' in e ? e.touches[0] : e
    const start = { sx: point.clientX, sy: point.clientY, ow: win.w, oh: win.h }
    const move = (ev) => {
      const p = 'touches' in ev ? ev.touches[0] : ev
      const nw = Math.max(280, start.ow + (p.clientX - start.sx))
      const nh = Math.max(180, start.oh + (p.clientY - start.sy))
      onResize(nw, nh)
    }
    const up = () => {
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
        {/* left spacer keeps the title visually centered without overlapping the controls */}
        <div className="flex-none" style={{ width: 64 }} />
        <div className="flex-1 min-w-0 flex justify-center">
          <span className="title-text">{win.title}</span>
        </div>
        <div className="flex-none flex items-center gap-1.5 pr-2 z-10">
          <button className="title-btn" title="Minimize" onClick={(e) => { e.stopPropagation(); onMinimize() }} onMouseDown={(e) => e.stopPropagation()}>
            <span className="tb-glyph">–</span>
          </button>
          <button className="title-btn" title="Zoom" onClick={(e) => { e.stopPropagation(); onMaximize() }} onMouseDown={(e) => e.stopPropagation()}>
            <span className="tb-glyph">+</span>
          </button>
          <button className="title-btn close" title="Close" onClick={(e) => { e.stopPropagation(); onClose() }} onMouseDown={(e) => e.stopPropagation()}>
            <span className="tb-glyph">×</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto mac-scroll win-body" style={{ background: 'var(--paper)' }}>{children}</div>
      {!win.maximized && <div className="resize-handle" onMouseDown={startResize} onTouchStart={startResize} />}
    </motion.div>
  )
}
