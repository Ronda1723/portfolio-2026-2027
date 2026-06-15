import { useEffect, useRef, useState } from 'react'

export default function MenuBar({ onOpen, theme, onToggleTheme, onRestart, crt, onToggleCrt, muted, onToggleMute, onSearch }) {
  const [open, setOpen] = useState(null) // which menu is open
  const ref = useRef(null)
  const [clock, setClock] = useState(formatClock())

  useEffect(() => {
    const t = setInterval(() => setClock(formatClock()), 10000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(null)
    }
    window.addEventListener('mousedown', close)
    return () => window.removeEventListener('mousedown', close)
  }, [])

  const menus = {
    apple: {
      label: '',
      items: [
        { label: 'About This Portfolio', action: () => onOpen('about') },
        { sep: true },
        { label: theme === 'dark' ? '✓ Dark Appearance' : 'Dark Appearance', action: onToggleTheme },
        { label: crt ? '✓ CRT Screen Filter' : 'CRT Screen Filter', action: onToggleCrt },
        { label: muted ? 'Sound: Off' : '✓ Sound: On', action: onToggleMute },
        { sep: true },
        { label: 'Restart', action: onRestart },
      ],
    },
    portfolio: { label: 'Portfolio', items: [
      { label: 'About Me', action: () => onOpen('about') },
      { label: 'Resume', action: () => onOpen('resume') },
      { label: 'Contact', action: () => onOpen('contact') },
    ]},
    projects: { label: 'Projects', items: [
      { label: 'All Projects', action: () => onOpen('projects') },
      { label: 'Case Studies', action: () => onOpen('caseStudies') },
    ]},
    experience: { label: 'Experience', items: [
      { label: 'Work & Research', action: () => onOpen('experience') },
    ]},
    blog: { label: 'Blog', items: [
      { label: 'Building with AI', action: () => onOpen('blog') },
    ]},
    contact: { label: 'Contact', items: [
      { label: 'Get in touch', action: () => onOpen('contact') },
    ]},
  }

  return (
    <div ref={ref} className="menu-bar fixed top-0 left-0 right-0 z-[9000] flex items-center px-2 text-[13px] font-semibold select-none">
      {Object.entries(menus).map(([key, m]) => (
        <div key={key} className="relative">
          <button
            className={`px-2 h-[22px] leading-[22px] ${open === key ? 'bg-black text-[#f5f5ef]' : ''} ${key === 'apple' ? 'text-[15px]' : ''}`}
            onMouseDown={(e) => {
              e.stopPropagation()
              setOpen(open === key ? null : key)
            }}
            onMouseEnter={() => open && setOpen(key)}
          >
            {m.label}
          </button>
          {open === key && (
            <div className="absolute left-0 top-[22px] min-w-[190px] mac-window py-1 z-[9100]">
              {m.items.map((it, i) =>
                it.sep ? (
                  <div key={i} className="my-1 border-t border-black/30" />
                ) : (
                  <button
                    key={i}
                    className="w-full text-left px-3 py-[3px] text-[13px] hover:bg-black hover:text-[#f5f5ef]"
                    onMouseDown={(e) => {
                      e.stopPropagation()
                      it.action()
                      setOpen(null)
                    }}
                  >
                    {it.label}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      ))}
      <div className="ml-auto flex items-center gap-2 pr-1">
        <button className="px-2 h-[22px]" title="Search (⌘K)" onMouseDown={(e) => { e.stopPropagation(); onSearch() }}>🔎</button>
        <span className="hidden sm:inline text-[12px]">★ Samita OS</span>
        <span className="px-2 border-l border-black/30">{clock}</span>
      </div>
    </div>
  )
}

function formatClock() {
  try {
    return new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  } catch {
    return ''
  }
}
