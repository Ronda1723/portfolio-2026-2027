import { useRef, useState } from 'react'

function Side({ slot, base }) {
  const src = `/images/${base}/${slot.id}.png`
  const [status, setStatus] = useState('loading')
  if (status === 'ok') {
    return <img src={src} alt={slot.label} className="w-full h-full object-cover block" draggable={false} />
  }
  return (
    <div className="img-slot w-full h-full">
      <span className="tag">{slot.label}</span>
      <span className="path">{`${slot.id}.png · ${slot.w}×${slot.h}`}</span>
      {status === 'loading' && (
        <img src={src} alt="" style={{ display: 'none' }} onLoad={() => setStatus('ok')} onError={() => setStatus('error')} />
      )}
    </div>
  )
}

export default function BeforeAfter({ before, after, base, label }) {
  const [pct, setPct] = useState(50)
  const wrap = useRef(null)

  const onDrag = (e) => {
    const move = (ev) => {
      const rect = wrap.current.getBoundingClientRect()
      const x = ('touches' in ev ? ev.touches[0].clientX : ev.clientX) - rect.left
      setPct(Math.max(0, Math.min(100, (x / rect.width) * 100)))
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
    move(e)
  }

  return (
    <div>
      <div className="ba-wrap" ref={wrap} style={{ aspectRatio: '3 / 2' }} onMouseDown={onDrag} onTouchStart={onDrag}>
        <Side slot={before} base={base} />
        <div className="ba-after" style={{ width: `${pct}%` }}>
          <div style={{ width: wrap.current ? wrap.current.offsetWidth : '100%', height: '100%' }}>
            <Side slot={after} base={base} />
          </div>
        </div>
        <div className="ba-divider" style={{ left: `${pct}%` }} />
        <div className="ba-knob" style={{ left: `${pct}%` }}>⇆</div>
        <span className="chip" style={{ position: 'absolute', left: 6, bottom: 6 }}>Before</span>
        <span className="chip" style={{ position: 'absolute', right: 6, bottom: 6 }}>After</span>
      </div>
      {label && <div className="img-caption">{label} — drag the handle</div>}
    </div>
  )
}
