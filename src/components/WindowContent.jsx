import { useState } from 'react'
import {
  ABOUT, EXPERIENCE, RESUME, BLOG, PROJECTS, CASE_STUDIES, PERSON,
} from '../data/content.js'

export default function WindowContent({ win, open }) {
  switch (win.type) {
    case 'about': return <About />
    case 'experience': return <Experience />
    case 'resume': return <Resume />
    case 'contact': return <Contact />
    case 'blog': return <Blog />
    case 'projects': return <Projects open={open} />
    case 'caseStudies': return <CaseStudies open={open} />
    case 'caseStudy': return <CaseStudyDetail id={win.payload} />
    case 'project': return <ProjectDetail id={win.payload} />
    case 'trash': return <Trash open={open} />
    default: return <div className="p-4">Empty folder.</div>
  }
}

const FinderBar = ({ count, label }) => (
  <div className="flex items-center justify-between px-3 py-1 border-b border-black text-[12px] bg-[#e8e8e0]">
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
          onClick={(e) => { if (e.detail === 1) e.currentTarget.focus() }}
          className="flex flex-col items-center gap-1 p-2 rounded hover:bg-black/5 focus:bg-black focus:text-[#f5f5ef] outline-none"
          title="Double-click to open"
        >
          <span className="text-4xl icon-emoji leading-none">{it.emoji}</span>
          <span className="text-[12px] text-center leading-tight">{it.name}</span>
        </button>
      ))}
    </div>
  )
}

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
      <FinderBarHeader title="Work & Research" />
      <div className="flex flex-col gap-3 mt-3">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="border border-black bg-white shadow-mac p-3">
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

function FinderBarHeader({ title }) {
  return <div className="text-[12px] uppercase tracking-widest font-bold border-b border-black pb-1">{title}</div>
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
        <button className="mac-btn mac-btn-primary" onClick={() => alert('Hook up the real PDF here — drop resume.pdf in /public and link it.')}>⬇ Download PDF</button>
        <a className="mac-btn" href={`mailto:${PERSON.email}`}>Request latest</a>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="p-5 prose-mac max-w-[560px]">
      <div className="text-xl font-bold mb-2">Let’s talk ✉️</div>
      <p>Looking for a product designer who prototypes in code? I’m open to roles at early-stage AI startups.</p>
      <div className="mt-3 border border-black bg-white shadow-mac divide-y divide-black/20">
        <Row k="Email" v={PERSON.email} href={`mailto:${PERSON.email}`} />
        <Row k="Web" v={PERSON.site} href={`https://${PERSON.site}`} />
        <Row k="X / Twitter" v={PERSON.x} href={`https://x.com/${PERSON.x.replace('@', '')}`} />
      </div>
      <p className="text-[11px] opacity-60 mt-3">Note: contact details are placeholders — update them in src/data/content.js.</p>
    </div>
  )
}
const Row = ({ k, v, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex justify-between px-3 py-2 hover:bg-black hover:text-[#f5f5ef]">
    <span className="font-semibold">{k}</span>
    <span className="underline">{v}</span>
  </a>
)

function Blog() {
  return (
    <div className="p-4">
      <FinderBar count={BLOG.length} label="Building with AI" />
      <div className="flex flex-col">
        {BLOG.map((b) => (
          <a key={b.id} href={b.link} target="_blank" rel="noreferrer"
             className="border-b border-black/20 px-3 py-3 hover:bg-black/5 block">
            <div className="font-bold text-[15px]">📰 {b.title}</div>
            <div className="prose-mac text-[13px] mt-1">{b.excerpt}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

function Projects({ open }) {
  const [q, setQ] = useState('')
  const items = PROJECTS.filter(
    (p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.one.toLowerCase().includes(q.toLowerCase()),
  )
  return (
    <div>
      <div className="flex items-center gap-2 px-3 py-2 border-b border-black bg-[#e8e8e0]">
        <span className="text-[12px]">🔎 Find:</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects…"
          className="flex-1 border border-black px-2 py-[2px] text-[13px] bg-white"
        />
      </div>
      <FolderGrid
        items={items.map((p) => ({ id: p.id, name: `${p.name}`, emoji: emojiFor(p.id) }))}
        onOpen={(it) => open('project', it.id, it.name)}
      />
    </div>
  )
}

function emojiFor(id) {
  return {
    haru: '🌸', maison: '🏠', decode: '🧩', loop: '🔁',
    ponder: '🎙️', prep: '🥗', 'loop-capture': '🧲', artemis: '🚀',
  }[id] || '📄'
}

function ProjectDetail({ id }) {
  const p = PROJECTS.find((x) => x.id === id)
  if (!p) return <div className="p-4">Not found.</div>
  return (
    <div className="p-5 prose-mac max-w-[600px]">
      <div className="text-2xl font-bold">{emojiFor(p.id)} {p.name}</div>
      <div className="text-[12px] opacity-70 mb-3">Day {p.day} · 60-day build challenge</div>
      <p className="text-[15px]">{p.one}</p>
      <h2>Built with</h2>
      <p>{p.tools}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.live && <a className="mac-btn mac-btn-primary" href={p.live} target="_blank" rel="noreferrer">▶ Live demo</a>}
        <a className="mac-btn" href={p.link} target="_blank" rel="noreferrer">📄 Read the build log</a>
      </div>
    </div>
  )
}

function Trash({ open }) {
  const experimental = PROJECTS.filter((p) => ['artemis', 'maison', 'haru'].includes(p.id))
  return (
    <div>
      <FinderBar count={experimental.length} label="Experiments & archive" />
      <div className="px-4 py-3 prose-mac text-[13px]">
        Nothing’s really deleted here — just early experiments and playful builds.
      </div>
      <FolderGrid
        items={experimental.map((p) => ({ id: p.id, name: p.name, emoji: emojiFor(p.id) }))}
        onOpen={(it) => open('project', it.id, it.name)}
      />
    </div>
  )
}

function CaseStudies({ open }) {
  return (
    <div>
      <FinderBar count={CASE_STUDIES.length} label="Case Studies" />
      <FolderGrid
        items={CASE_STUDIES.map((c) => ({ id: c.id, name: c.name, emoji: '📂' }))}
        onOpen={(it) => {
          const c = CASE_STUDIES.find((x) => x.id === it.id)
          open('caseStudy', it.id, c.name)
        }}
      />
    </div>
  )
}

function CaseStudyDetail({ id }) {
  const c = CASE_STUDIES.find((x) => x.id === id)
  if (!c) return <div className="p-4">Not found.</div>
  return (
    <div className="prose-mac">
      <div className="px-6 py-6 border-b border-black" style={{ background: c.accent, color: '#fff' }}>
        <div className="text-[12px] uppercase tracking-widest opacity-90">Case {c.n} · {c.name}</div>
        <div className="text-2xl font-bold leading-snug mt-2 max-w-[640px]">{c.hero}</div>
        <div className="text-[12px] opacity-90 mt-3">{c.meta}</div>
      </div>
      <div className="px-6 py-5 max-w-[680px]">
        {c.sections.map((s, i) => (
          <div key={i}>
            <h2>{s.h}</h2>
            {s.quote && <div className="pull-quote">{s.quote}</div>}
            {s.body && <p>{s.body}</p>}
          </div>
        ))}
        {c.projectsNote && <p className="text-[13px] opacity-70">{c.projectsNote}</p>}
        <div className="mt-5 flex flex-wrap gap-2">
          <a className="mac-btn mac-btn-primary" href={c.source} target="_blank" rel="noreferrer">📄 Source-of-truth doc</a>
        </div>
      </div>
    </div>
  )
}
