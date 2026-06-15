import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BootScreen from './components/BootScreen.jsx'
import MenuBar from './components/MenuBar.jsx'
import Window from './components/Window.jsx'
import WindowContent from './components/WindowContent.jsx'
import Spotlight from './components/Spotlight.jsx'
import Mascot from './components/Mascot.jsx'
import Screensaver from './components/Screensaver.jsx'
import { DESKTOP_ICONS } from './data/content.js'
import { sfx, setMuted as setSfxMuted, resumeAudio } from './lib/sound.js'

const TITLES = {
  about: 'About Me', experience: 'Experience', resume: 'Resume', contact: 'Contact',
  blog: 'Blog', projects: 'Projects', caseStudies: 'Case Studies', trash: 'Trash',
  startHere: 'Start Here', picture: 'Picture Viewer', games: 'Games', game: 'Artemis II — Flappy',
}

const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 700

function sizeFor(type) {
  if (isMobile()) return { w: window.innerWidth - 12, h: window.innerHeight - 90 }
  switch (type) {
    case 'caseStudy': return { w: 820, h: 660 }
    case 'startHere': return { w: 720, h: 620 }
    case 'picture': return { w: 880, h: 660 }
    case 'project': case 'about': case 'experience': case 'resume': case 'contact': return { w: 680, h: 580 }
    case 'projects': case 'caseStudies': case 'games': return { w: 640, h: 520 }
    case 'game': return { w: 392, h: 690 }
    case 'blog': return { w: 680, h: 580 }
    default: return { w: 620, h: 520 }
  }
}

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export default function App() {
  const [booted, setBooted] = useState(false)
  const [theme, setTheme] = useState('light')
  const [crt, setCrt] = useState(true)
  const [muted, setMutedState] = useState(false)
  const [wins, setWins] = useState([])
  const [spotlight, setSpotlight] = useState(false)
  const [saver, setSaver] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [iconPos, setIconPos] = useState(() => {
    const right = (typeof window !== 'undefined' ? window.innerWidth : 1200) - 92
    const obj = {}
    DESKTOP_ICONS.forEach((ic, i) => { obj[ic.id] = { left: right, top: 32 + i * 84 } })
    return obj
  })
  const z = useRef(10)
  const seq = useRef(0)
  const lastActivity = useRef(Date.now())

  const focus = useCallback((key) => {
    z.current += 1
    setWins((w) => w.map((win) => (win.key === key ? { ...win, z: z.current, minimized: false } : win)))
  }, [])

  const open = useCallback((type, payload = null, title = null) => {
    sfx.open()
    setWins((w) => {
      const existing = w.find((win) => win.type === type && win.payload === payload && type !== 'picture')
      if (existing) {
        z.current += 1
        return w.map((win) => (win.key === existing.key ? { ...win, z: z.current, minimized: false } : win))
      }
      z.current += 1
      seq.current += 1
      const n = w.length
      const sz = sizeFor(type)
      const cx = isMobile() ? 6 : Math.max(20, (window.innerWidth - sz.w) / 2 - 60 + (n % 5) * 30)
      const cy = isMobile() ? 28 : 40 + (n % 5) * 28
      return [...w, {
        key: `${type}-${typeof payload === 'string' ? payload : ''}-${seq.current}`,
        type, payload, title: title || TITLES[type] || 'Window',
        x: cx, y: cy, ...sz, z: z.current, minimized: false, maximized: false,
      }]
    })
  }, [])

  const close = (key) => { sfx.close(); setWins((w) => w.filter((win) => win.key !== key)) }
  const minimize = (key) => { sfx.click(); setWins((w) => w.map((win) => (win.key === key ? { ...win, minimized: true } : win))) }
  const maximize = (key) => setWins((w) => w.map((win) => (win.key === key ? { ...win, maximized: !win.maximized } : win)))
  const move = (key, x, y) => setWins((w) => w.map((win) => (win.key === key ? { ...win, x, y } : win)))
  const resize = (key, ww, hh) => setWins((w) => w.map((win) => (win.key === key ? { ...win, w: ww, h: hh } : win)))

  const restart = () => { setWins([]); setBooted(false) }

  // open Start Here + chime once booted
  useEffect(() => {
    if (booted) {
      resumeAudio(); sfx.chime()
      const t = setTimeout(() => open('startHere'), 350)
      return () => clearTimeout(t)
    }
  }, [booted, open])

  // mute wiring
  useEffect(() => { setSfxMuted(muted) }, [muted])

  // idle screensaver
  useEffect(() => {
    if (!booted) return
    const bump = () => { lastActivity.current = Date.now(); resumeAudio() }
    ;['mousemove', 'mousedown', 'keydown', 'touchstart', 'wheel'].forEach((e) => window.addEventListener(e, bump))
    const iv = setInterval(() => {
      if (!saver && Date.now() - lastActivity.current > 45000) setSaver(true)
    }, 2000)
    return () => { clearInterval(iv); ['mousemove','mousedown','keydown','touchstart','wheel'].forEach((e) => window.removeEventListener(e, bump)) }
  }, [booted, saver])

  // keyboard: ⌘K / / for spotlight, konami egg
  useEffect(() => {
    let buf = []
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setSpotlight((s) => !s) }
      else if (e.key === '/' && !/input|textarea/i.test(document.activeElement?.tagName || '')) { e.preventDefault(); setSpotlight(true) }
      buf = [...buf, e.key].slice(-KONAMI.length)
      if (buf.join(',') === KONAMI.join(',')) { setConfetti(true); sfx.chime(); setTimeout(() => setConfetti(false), 2800) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const dragIcon = (id, e) => {
    const point = 'touches' in e ? e.touches[0] : e
    const start = { sx: point.clientX, sy: point.clientY, ...iconPos[id] }
    let moved = false
    const mv = (ev) => {
      const p = 'touches' in ev ? ev.touches[0] : ev
      moved = true
      setIconPos((s) => ({ ...s, [id]: { left: Math.max(0, start.left + (p.clientX - start.sx)), top: Math.max(24, start.top + (p.clientY - start.sy)) } }))
    }
    const up = () => { window.removeEventListener('mousemove', mv); window.removeEventListener('mouseup', up); window.removeEventListener('touchmove', mv); window.removeEventListener('touchend', up) }
    window.addEventListener('mousemove', mv); window.addEventListener('mouseup', up)
    window.addEventListener('touchmove', mv, { passive: false }); window.addEventListener('touchend', up)
    return () => moved
  }

  const topZ = Math.max(0, ...wins.filter((w) => !w.minimized).map((w) => w.z))
  const minimized = wins.filter((w) => w.minimized)
  const anyMax = wins.some((w) => w.maximized && !w.minimized)

  return (
    <div className={`${theme === 'dark' ? 'theme-dark' : ''} ${crt ? 'crt' : ''} w-full h-full`}>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      <div className="desktop-bg w-full h-full relative overflow-hidden">
        {!anyMax && <div className="desktop-watermark">samita<br/>OS</div>}
        <MenuBar
          onOpen={open}
          theme={theme}
          onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          crt={crt}
          onToggleCrt={() => setCrt((c) => !c)}
          muted={muted}
          onToggleMute={() => setMutedState((m) => !m)}
          onRestart={restart}
          onSearch={() => setSpotlight(true)}
        />

        {/* Draggable desktop icons — hidden when a window is maximized */}
        {!anyMax && DESKTOP_ICONS.map((ic) => (
          <DesktopIcon key={ic.id} icon={ic} pos={iconPos[ic.id]} onDragStart={(e) => dragIcon(ic.id, e)} onOpen={() => open(ic.type)} />
        ))}

        {/* Windows */}
        <AnimatePresence>
          {wins.filter((w) => !w.minimized).map((win) => (
            <Window key={win.key} win={win} active={win.z === topZ}
              onFocus={() => focus(win.key)} onClose={() => close(win.key)}
              onMinimize={() => minimize(win.key)} onMaximize={() => maximize(win.key)}
              onMove={(x, y) => move(win.key, x, y)} onResize={(ww, hh) => resize(win.key, ww, hh)}>
              <WindowContent win={win} open={open} />
            </Window>
          ))}
        </AnimatePresence>

        {/* Trash */}
        {!anyMax && (
          <button className="absolute bottom-3 right-4 z-[100] flex flex-col items-center gap-1 group" onDoubleClick={() => { sfx.trash(); open('trash') }} title="Double-click to open Trash">
            <span className="text-4xl icon-emoji">🗑️</span>
            <span className="text-[11px] px-1 pixel" style={{ background: 'var(--cream)' }}>Trash</span>
          </button>
        )}

        {/* Dock for minimized */}
        {!anyMax && minimized.length > 0 && (
          <div className="absolute bottom-3 left-3 z-[150] flex gap-2 items-end" style={{ marginLeft: 64 }}>
            {minimized.map((win) => (
              <button key={win.key} className="mac-window px-2 py-1 text-[12px] font-semibold bouncing" onClick={() => { sfx.open(); focus(win.key) }} title="Restore">
                ▭ {win.title}
              </button>
            ))}
          </div>
        )}

        {!anyMax && <Mascot />}

        {spotlight && <Spotlight onOpen={open} onClose={() => setSpotlight(false)} />}
        {saver && <Screensaver onWake={() => { lastActivity.current = Date.now(); setSaver(false) }} />}
        {confetti && <Confetti />}
      </div>
    </div>
  )
}

function DesktopIcon({ icon, pos, onDragStart, onOpen }) {
  const movedRef = useRef(null)
  return (
    <button
      onMouseDown={(e) => { movedRef.current = onDragStart(e) }}
      onTouchStart={(e) => { movedRef.current = onDragStart(e) }}
      onDoubleClick={onOpen}
      className="absolute flex flex-col items-center gap-1 w-[78px] p-1 outline-none group z-[100]"
      style={{ left: pos.left, top: pos.top }}
      title={`Double-click to open ${icon.label}`}
    >
      <span className="text-[40px] icon-emoji drop-shadow-[1px_1px_0_rgba(0,0,0,0.35)]">{icon.emoji}</span>
      <span className="text-[12px] text-center leading-tight px-1.5 py-0.5 rounded pixel group-focus:bg-black group-focus:text-[#f5f5ef]" style={{ background: 'color-mix(in srgb, var(--cream) 78%, transparent)' }}>
        {icon.label}
      </span>
    </button>
  )
}

function Confetti() {
  const bits = Array.from({ length: 60 })
  const emojis = ['🌟', '✨', '🎉', '🟧', '🟦', '🟪', '🟨']
  return (
    <div className="fixed inset-0 z-[9600] pointer-events-none overflow-hidden">
      {bits.map((_, i) => {
        const left = (i * 53) % 100
        const delay = (i % 10) * 0.08
        const dur = 1.8 + ((i % 5) * 0.3)
        return (
          <span key={i} style={{ position: 'absolute', left: `${left}%`, top: '-30px', fontSize: 18, animation: `fall ${dur}s linear ${delay}s` }}>
            {emojis[i % emojis.length]}
          </span>
        )
      })}
      <style>{`@keyframes fall { to { transform: translateY(110vh) rotate(540deg); opacity: 0.2; } }`}</style>
    </div>
  )
}
