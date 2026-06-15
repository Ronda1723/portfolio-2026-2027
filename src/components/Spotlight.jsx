import { useEffect, useRef, useState } from 'react'
import { SEARCH_INDEX } from '../data/content.js'

export default function Spotlight({ onOpen, onClose }) {
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  const results = q.trim()
    ? SEARCH_INDEX.filter(
        (it) => it.label.toLowerCase().includes(q.toLowerCase()) || it.sub.toLowerCase().includes(q.toLowerCase()) || it.kind.toLowerCase().includes(q.toLowerCase()),
      ).slice(0, 8)
    : SEARCH_INDEX.slice(0, 6)

  const choose = (it) => {
    if (!it) return
    onOpen(it.type, it.payload, it.label)
    onClose()
  }

  const onKey = (e) => {
    if (e.key === 'Escape') onClose()
    else if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(results.length - 1, s + 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(0, s - 1)) }
    else if (e.key === 'Enter') { e.preventDefault(); choose(results[sel]) }
  }

  return (
    <div className="spotlight-overlay" onMouseDown={onClose}>
      <div className="spotlight-box mac-window" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 px-3 py-2 border-b border-black">
          <span className="text-lg">🔎</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => { setQ(e.target.value); setSel(0) }}
            onKeyDown={onKey}
            placeholder="Find anything — case studies, projects, posts…"
            className="flex-1 bg-transparent outline-none text-[15px]"
          />
          <span className="text-[11px] opacity-50">esc</span>
        </div>
        <div className="max-h-[320px] overflow-auto mac-scroll">
          {results.length === 0 && <div className="px-3 py-4 text-[13px] opacity-60">No results.</div>}
          {results.map((it, i) => (
            <button
              key={`${it.type}-${it.label}`}
              onMouseEnter={() => setSel(i)}
              onClick={() => choose(it)}
              className={`w-full text-left px-3 py-2 flex items-center gap-3 ${i === sel ? 'bg-black text-[#f5f5ef]' : ''}`}
            >
              <span className={`chip ${i === sel ? '!bg-white !text-black' : ''}`}>{it.kind}</span>
              <span className="flex-1">
                <span className="font-semibold text-[14px] block leading-tight">{it.label}</span>
                <span className="text-[11px] opacity-70 block leading-tight truncate">{it.sub}</span>
              </span>
              <span className="text-[11px] opacity-50">↵</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
