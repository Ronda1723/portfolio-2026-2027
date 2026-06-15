import { useState } from 'react'
import {
  ABOUT, EXPERIENCE, RESUME, BLOG, PROJECTS, CASE_STUDIES, PERSON, START_HERE,
} from '../data/content.js'
import ImageSlot from './ImageSlot.jsx'
import BeforeAfter from './BeforeAfter.jsx'
import Tabs from './Tabs.jsx'

export default function WindowContent({ win, open }) {
  switch (win.type) {
    case 'startHere': return <StartHere open={open} />
    case 'about': return <About />
    case 'experience': return <Experience />
    case 'resume': return <Resume />
    case 'contact': return <Contact />
    case 'blog': return <Blog />
    case 'projects': return <Projects open={open} />
    case 'caseStudies': return <CaseStudies open={open} />
    case 'caseStudy': return <CaseStudyDetail id={win.payload} open={open} />
    case 'project': return <ProjectDetail id={win.payload} open={open} />
    case 'picture': return <Picture payload={win.payload} />
    case 'trash': return <Trash open={open} />
    default: return <div className="p-4">Empty folder.</div>
  }
}

const FinderBar = ({ count, label }) => (
  <div className="flex items-center justify-between px-3 py-1 border-b border-black text-[12px]" style={{ background: 'var(--cream-2)' }}>
    <span>{count} items</span>
    <span className="opacity-70">{label}</span>
  </div>
)

function FolderGrid({ items, onOpen }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4">
      {items.map((it) => (
        <button
          key={it.id}
          onDoubleClick={() => onOpen(it)}
          className="flex flex-col items-center gap-1 p-2 rounded hover:bg-black/5 focus:bg-black focus:text-[#f5f5ef] outline-none"
          title="Double-click to open"
        >
          <span className="text-4xl icon-emoji leading-none" style={it.accent ? { filter: 'none' } : {}}>{it.emoji}</span>
          <span className="text-[12px] text-center leading-tight">{it.name}</span>
        </button>
      ))}
    </div>
  )
}

// ---------- Start Here ----------
function StartHere({ open }) {
  return (
    <div>
      <div className="px-5 py-2 border-b border-black text-[11px] uppercase tracking-widest" style={{ background: 'var(--yellow)' }}>
        {START_HERE.kicker}
      </div>
      <div className="p-5 prose-mac max-w-[560px]">
        <div className="text-[22px] font-bold leading-snug">{START_HERE.headline}</div>
        <p className="mt-3">{START_HERE.body}</p>
        <div className="my-3">
          {START_HERE.chips.map((c, i) => <span key={i} className="chip">✦ {c}</span>)}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <button className="mac-btn mac-btn-primary" onClick={() => open('caseStudies')}>📂 Case Studies</button>
          <button className="mac-btn" onClick={() => open('projects')}>📁 Projects</button>
          <button className="mac-btn" onClick={() => open('resume')}>📝 Resume</button>
          <button className="mac-btn" onClick={() => open('contact')}>✉️ Contact</button>
        </div>
        <p className="text-[11px] opacity-60 mt-4">Tip: double-click folders on the desktop, drag windows by their title bar, press ⌘K to search.</p>
      </div>
    </div>
  )
}

// ---------- Simple pages ----------
function About() {
  return (
    <div className="p-5 prose-mac max-w-[640px]">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-4xl">🧑‍💻</span>
        <div>
          <div className="text-xl font-bold">{PERSON.name}</div>
          <div className="text-[13px] opacity-70">{PERSON.role} · {PERSON.location}</div>
        </div>
      </div>
      {ABOUT.body.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  )
}

function Experience() {
  return (
    <div className="p-5">
      <div className="text-[12px] uppercase tracking-widest font-bold border-b border-black pb-1">Work &amp; Research</div>
      <div className="flex flex-col gap-3 mt-3">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="border border-black shadow-mac p-3" style={{ background: 'var(--paper)' }}>
            <div className="flex justify-between items-baseline gap-2 flex-wrap">
              <div className="font-bold text-[15px]">{e.role}</div>
              <div className="text-[12px] opacity-70">{e.when}</div>
            </div>
            <div className="text-[13px] font-semibold mb-1">{e.org}</div>
            <div className="prose-mac text-[14px]">{e.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Resume() {
  return (
    <div className="p-5 prose-mac max-w-[620px]">
      <div className="text-xl font-bold mb-1">{RESUME.title}</div>
      <p className="text-[14px]">{RESUME.summary}</p>
      <h2>Highlights</h2>
      <ul className="list-disc pl-5 text-[14px] space-y-1">
        {RESUME.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      <div className="mt-5 flex gap-2">
        <button className="mac-btn mac-btn-primary" onClick={() => alert('Drop resume.pdf in /public and link it here.')}>⬇ Download PDF</button>
        <a className="mac-btn" href={`mailto:${PERSON.email}`}>Request latest</a>
      </div>
      <p className="text-[11px] opacity-60 mt-3">Placeholder — wire a real PDF in /public.</p>
    </div>
  )
}

function Contact() {
  const Row = ({ k, v, href }) => (
    <a href={href} target="_blank" rel="noreferrer" className="flex justify-between px-3 py-2 hover:bg-black hover:text-[#f5f5ef]">
      <span className="font-semibold">{k}</span><span className="underline">{v}</span>
    </a>
  )
  return (
    <div className="p-5 prose-mac max-w-[560px]">
      <div className="text-xl font-bold mb-2">Let’s talk ✉️</div>
      <p>Looking for a product designer who prototypes in code? I’m open to roles at early-stage AI startups.</p>
      <div className="mt-3 border border-black shadow-mac divide-y divide-black/20" style={{ background: 'var(--paper)' }}>
        <Row k="Email" v={PERSON.email} href={`mailto:${PERSON.email}`} />
        <Row k="Web" v={PERSON.site} href={`https://${PERSON.site}`} />
        <Row k="X / Twitter" v={PERSON.x} href={`https://x.com/${PERSON.x.replace('@', '')}`} />
      </div>
      <p className="text-[11px] opacity-60 mt-3">Contact details are placeholders — update in src/data/content.js.</p>
    </div>
  )
}

function Blog() {
  return (
    <div>
      <FinderBar count={BLOG.length} label="Building with AI" />
      <div className="flex flex-col">
        {BLOG.map((b) => (
          <a key={b.id} href={b.link} target="_blank" rel="noreferrer" className="border-b border-black/20 px-3 py-3 hover:bg-black/5 block">
            <div className="font-bold text-[15px]">📰 {b.title}</div>
            <div className="prose-mac text-[13px] mt-1">{b.excerpt}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

// ---------- Projects ----------
function Projects({ open }) {
  const [q, setQ] = useState('')
  const items = PROJECTS.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.one.toLowerCase().includes(q.toLowerCase()))
  return (
    <div>
      <div className="flex items-center gap-2 px-3 py-2 border-b border-black" style={{ background: 'var(--cream-2)' }}>
        <span className="text-[12px]">🔎 Find:</span>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" className="flex-1 border border-black px-2 py-[2px] text-[13px]" style={{ background: 'var(--paper)' }} />
      </div>
      <FolderGrid items={items.map((p) => ({ id: p.id, name: p.name, emoji: p.emoji }))} onOpen={(it) => open('project', it.id, it.name)} />
    </div>
  )
}

function ProjectDetail({ id, open }) {
  const p = PROJECTS.find((x) => x.id === id)
  if (!p) return <div className="p-4">Not found.</div>
  const base = `projects/${p.id}`
  return (
    <div>
      <div className="px-5 py-5" style={{ background: p.accent, color: '#151515' }}>
        <div className="text-[12px] uppercase tracking-widest opacity-80">Project · Day {p.day}</div>
        <div className="text-2xl font-bold mt-1">{p.emoji} {p.name}</div>
        <div className="text-[15px] mt-1 max-w-[520px]">{p.one}</div>
        <div className="mt-3">{p.tools.map((t) => <span key={t} className="chip">{t}</span>)}</div>
      </div>
      <div className="p-5 prose-mac max-w-[620px]">
        <h2>What it does</h2>
        <ol className="list-decimal pl-5 text-[14px] space-y-1">{p.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
        <h2>Key decision</h2>
        <p>{p.decision}</p>
        <h2>What was hard</h2>
        <p>{p.hard}</p>
        <h2>Screens</h2>
        <div className="grid grid-cols-2 gap-3">
          {p.media.map((m) => <ImageSlot key={m.id} slot={m} base={base} open={open} />)}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.live && <a className="mac-btn mac-btn-primary" href={p.live} target="_blank" rel="noreferrer">▶ Live demo</a>}
          <a className="mac-btn" href={p.link} target="_blank" rel="noreferrer">📄 Build log</a>
        </div>
      </div>
    </div>
  )
}

// ---------- Case studies ----------
function CaseStudies({ open }) {
  return (
    <div>
      <FinderBar count={CASE_STUDIES.length} label="Case Studies" />
      <div className="grid grid-cols-2 gap-3 p-4">
        {CASE_STUDIES.map((c) => (
          <button key={c.id} onDoubleClick={() => open('caseStudy', c.id, c.name)} className="border border-black shadow-mac p-3 text-left hover:translate-x-[-1px] hover:translate-y-[-1px]" style={{ background: 'var(--paper)' }} title="Double-click to open">
            <div className="w-7 h-5 mb-2" style={{ background: c.accent, border: '1px solid #000' }} />
            <div className="font-bold text-[15px] leading-tight">{c.n} · {c.name}</div>
            <div className="text-[12px] opacity-70">{c.subtitle}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

function CaseStudyDetail({ id, open }) {
  const c = CASE_STUDIES.find((x) => x.id === id)
  const [tab, setTab] = useState('overview')
  if (!c) return <div className="p-4">Not found.</div>
  const base = `case-studies/${c.id}`
  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'decisions', label: 'Decisions' },
    { key: 'gallery', label: 'Gallery' },
    { key: 'process', label: 'Process' },
  ]
  const textOn = c.accentText || '#fff'

  return (
    <div>
      {/* hero band */}
      <div className="px-6 py-6 border-b border-black" style={{ background: c.accent, color: textOn }}>
        <div className="text-[12px] uppercase tracking-widest opacity-90">Case {c.n} · {c.name}</div>
        <div className="text-2xl font-bold leading-snug mt-2 max-w-[640px]">{c.hero}</div>
        <div className="text-[12px] opacity-90 mt-3">{c.meta}</div>
        <div className="grid grid-cols-4 gap-2 mt-4 max-w-[520px]">
          {c.stats.map((s, i) => <div key={i} className="stat" style={{ color: '#151515' }}><b>{s.v}</b><span>{s.l}</span></div>)}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {c.links.medium && <a className="mac-btn" href={c.links.medium} target="_blank" rel="noreferrer">Read on Medium →</a>}
          {c.links.live && <a className="mac-btn" href={c.links.live} target="_blank" rel="noreferrer">▶ Live</a>}
          {c.links.source && <a className="mac-btn" href={c.links.source} target="_blank" rel="noreferrer">📄 Source doc</a>}
        </div>
      </div>

      <Tabs tabs={tabs} active={tab} onChange={setTab} />

      <div className="p-6 prose-mac max-w-[680px]">
        {tab === 'overview' && (
          <>
            <ImageSlot slot={c.heroImg} base={base} open={open} className="mb-4" />
            <h2>The problem</h2>
            <p>{c.overview.problem}</p>
            <div className="pull-quote">{c.overview.insight.quote}<div className="text-[11px] opacity-60 mt-2">— {c.overview.insight.by}</div></div>
            <p>{c.overview.context}</p>
          </>
        )}
        {tab === 'decisions' && (
          <>
            <h2>Key design decisions</h2>
            {c.decisions.map((d, i) => (
              <div key={i} className="border border-black shadow-mac p-3 mb-3" style={{ background: 'var(--paper)' }}>
                <div className="font-bold text-[15px]">{d.title}</div>
                <p className="text-[14px] mt-1 mb-2">{d.body}</p>
                {d.img && <ImageSlot slot={d.img} base={base} open={open} />}
              </div>
            ))}
          </>
        )}
        {tab === 'gallery' && (
          <>
            {c.beforeAfter && (<><h2>{c.beforeAfter.label}</h2><BeforeAfter before={c.beforeAfter.before} after={c.beforeAfter.after} base={base} label={c.beforeAfter.label} /></>)}
            <h2>The work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {c.gallery.map((g) => <ImageSlot key={g.id} slot={g} base={base} open={open} />)}
            </div>
          </>
        )}
        {tab === 'process' && (
          <>
            <h2>Process</h2>
            <div className="flex flex-wrap items-center gap-1 mb-3">
              {c.process.steps.map((s, i) => (
                <span key={i} className="flex items-center">
                  <span className="chip">{s}</span>
                  {i < c.process.steps.length - 1 && <span className="opacity-50 mx-1">→</span>}
                </span>
              ))}
            </div>
            {c.process.artifacts?.map((a) => <ImageSlot key={a.id} slot={a} base={base} open={open} className="mb-3" />)}
            <h2>My role</h2>
            <p>{c.process.role}</p>
            <h2>Outcome</h2>
            <p>{c.process.outcome}</p>
          </>
        )}
      </div>
    </div>
  )
}

// ---------- Picture viewer ----------
function Picture({ payload }) {
  return (
    <div className="p-3 flex flex-col items-center" style={{ background: '#111' }}>
      <img src={payload.src} alt={payload.label} className="max-w-full max-h-[70vh] border border-black" />
      <div className="text-[12px] text-white/80 mt-2">{payload.label}</div>
    </div>
  )
}

// ---------- Trash ----------
function Trash({ open }) {
  const experimental = PROJECTS.filter((p) => ['artemis', 'maison', 'haru'].includes(p.id))
  return (
    <div>
      <FinderBar count={experimental.length} label="Experiments & archive" />
      <div className="px-4 py-3 prose-mac text-[13px]">Nothing’s really deleted here — just early experiments and playful builds.</div>
      <FolderGrid items={experimental.map((p) => ({ id: p.id, name: p.name, emoji: p.emoji }))} onOpen={(it) => open('project', it.id, it.name)} />
    </div>
  )
}
