import { useCallback, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BootScreen from './components/BootScreen.jsx'
import MenuBar from './components/MenuBar.jsx'
import Window from './components/Window.jsx'
import WindowContent from './components/WindowContent.jsx'
import { DESKTOP_ICONS } from './data/content.js'

const TITLES = {
  about: 'About Me', experience: 'Experience', resume: 'Resume', contact: 'Contact',
  blog: 'Blog', projects: 'Projects', caseStudies: 'Case Studies', trash: 'Trash',
}

const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 700

function sizeFor(type) {
  if (isMobile()) {
    return { w: window.innerWidth - 12, h: window.innerHeight - 80 }
  }
  switch (type) {
    case 'caseStudy': return { w: 640, h: 540 }
    case 'about': case 'experience': case 'resume': case 'contact': case 'project': return { w: 560, h: 460 }
    case 'projects': case 'caseStudies': return { w: 480, h: 380 }
    case 'blog': return { w: 560, h: 480 }
    default: return { w: 520, h: 420 }
  }
}

export default function App() {
  const [booted, setBooted] = useState(false)
  const [theme, setTheme] = useState('light')
  const [crt, setCrt] = useState(true)
  const [wins, setWins] = useState([])
  const z = useRef(10)
  const seq = useRef(0)

  const focus = useCallback((key) => {
    z.current += 1
    setWins((w) => w.map((win) => (win.key === key ? { ...win, z: z.current, minimized: false } : win)))
  }, [])

  const open = useCallback((type, payload = null, title = null) => {
    setWins((w) => {
      const existing = w.find((win) => win.type === type && win.payload === payload)
      if (existing) {
        z.current += 1
        return w.map((win) => (win.key === existing.key ? { ...win, z: z.current, minimized: false } : win))
      }
      z.current += 1
      seq.current += 1
      const n = w.length
      const sz = sizeFor(type)
      const baseX = isMobile() ? 6 : 70 + (n % 6) * 28
      const baseY = isMobile() ? 30 : 44 + (n % 6) * 26
      const newWin = {
        key: `${type}-${payload || ''}-${seq.current}`,
        type, payload,
        title: title || TITLES[type] || 'Window',
        x: baseX, y: baseY, ...sz,
        z: z.current, minimized: false, maximized: false,
      }
      return [...w, newWin]
    })
  }, [])

  const close = (key) => setWins((w) => w.filter((win) => win.key !== key))
  const minimize = (key) => setWins((w) => w.map((win) => (win.key === key ? { ...win, minimized: true } : win)))
  const maximize = (key) => setWins((w) => w.map((win) => (win.key === key ? { ...win, maximized: !win.maximized } : win)))
  const move = (key, x, y) => setWins((w) => w.map((win) => (win.key === key ? { ...win, x, y } : win)))

  const restart = () => {
    setWins([])
    setBooted(false)
  }

  const topZ = Math.max(0, ...wins.filter((w) => !w.minimized).map((w) => w.z))
  const minimized = wins.filter((w) => w.minimized)

  return (
    <div className={`${theme === 'dark' ? 'theme-dark' : ''} ${crt ? 'crt' : ''} w-full h-full`}>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      <div className="desktop-bg w-full h-full relative overflow-hidden">
        <MenuBar
          onOpen={open}
          theme={theme}
          onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          crt={crt}
          onToggleCrt={() => setCrt((c) => !c)}
          onRestart={restart}
        />

        {/* Desktop icons — top-right column, classic Finder placement */}
        <div className="absolute top-7 right-3 flex flex-col gap-3 z-[100]">
          {DESKTOP_ICONS.map((ic) => (
            <DesktopIcon key={ic.id} icon={ic} onOpen={() => open(ic.type)} />
          ))}
        </div>

        {/* Welcome hint */}
        {booted && wins.length === 0 && (
          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 text-center pointer-events-none">
            <div className="mac-window inline-block px-5 py-4 pointer-events-auto">
              <div className="font-bold text-[15px]">Welcome — double-click a folder to explore.</div>
              <div className="text-[12px] opacity-70 mt-1">Try <b>Case Studies</b> or <b>Projects</b>. Drag windows by their title bar.</div>
            </div>
          </div>
        )}

        {/* Windows */}
        <AnimatePresence>
          {wins.filter((w) => !w.minimized).map((win) => (
            <Window
              key={win.key}
              win={win}
              active={win.z === topZ}
              onFocus={() => focus(win.key)}
              onClose={() => close(win.key)}
              onMinimize={() => minimize(win.key)}
              onMaximize={() => maximize(win.key)}
              onMove={(x, y) => move(win.key, x, y)}
            >
              <WindowContent win={win} open={open} />
            </Window>
          ))}
        </AnimatePresence>

        {/* Trash (bottom-right) */}
        <button
          className="absolute bottom-3 right-4 z-[100] flex flex-col items-center gap-1 group"
          onDoubleClick={() => open('trash')}
          title="Double-click to open Trash"
        >
          <span className="text-4xl icon-emoji">🗑️</span>
          <span className="text-[11px] text-black/80 group-hover:bg-black group-hover:text-[#f5f5ef] px-1">Trash</span>
        </button>

        {/* Dock for minimized windows (bottom-left) */}
        {minimized.length > 0 && (
          <div className="absolute bottom-3 left-3 z-[100] flex gap-2">
            {minimized.map((win) => (
              <button
                key={win.key}
                className="mac-window px-2 py-1 text-[12px] font-semibold"
                onClick={() => focus(win.key)}
                title="Restore"
              >
                ▭ {win.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function DesktopIcon({ icon, onOpen }) {
  return (
    <button
      onDoubleClick={onOpen}
      className="flex flex-col items-center gap-1 w-[78px] p-1 outline-none group"
      title={`Double-click to open ${icon.label}`}
    >
      <span className="text-4xl icon-emoji drop-shadow-[1px_1px_0_rgba(0,0,0,0.4)]">{icon.emoji}</span>
      <span className="text-[12px] text-center leading-tight px-1 bg-[#f5f5ef]/80 group-focus:bg-black group-focus:text-[#f5f5ef]">
        {icon.label}
      </span>
    </button>
  )
}
