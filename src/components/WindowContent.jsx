import { useState, useRef } from 'react'
import {
  ABOUT, EXPERIENCE, RESUME, BLOG, PROJECTS, CASE_STUDIES, PERSON, START_HERE,
} from '../data/content.js'
import ImageSlot from './ImageSlot.jsx'
import BeforeAfter from './BeforeAfter.jsx'
import FlappyGame from './FlappyGame.jsx'

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
    case 'games': return <Games open={open} />
    case 'game': return <FlappyGame />
    case 'trash': return <Trash open={open} />
    default: return <div className="p-4">Empty folder.</div>
  }
}

const FinderBar = ({ count, label }) => (
  <div className="flex items-center justify-between px-4 py-1.5 border-b border-black text-[12px] pixel" style={{ background: 'var(--cream-2)' }}>
    <span>{count} items</span><span className="opacity-70">{label}</span>
  </div>
)

function FolderGrid({ items, onOpen }) {
  return (
    <div className="cqgrid cqgrid-folder p-5">
      {items.map((it) => (
        <button key={it.id} onDoubleClick={() => onOpen(it)}
          className="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-black/5 focus:bg-black focus:text-[#f5f5ef] outline-none transition-colors"
          title="Double-click to open">
          <span className="text-[40px] icon-emoji leading-none">{it.emoji}</span>
          <span className="text-[12px] text-center leading-tight pixel">{it.name}</span>
        </button>
      ))}
    </div>
  )
}

// ---------- Start Here ----------
function StartHere({ open }) {
  return (
    <div>
      <div className="px-6 py-2 border-b border-black kicker" style={{ background: 'var(--yellow)', color: '#151515' }}>{START_HERE.kicker}</div>
      <div className="p-7 prose-mac max-w-[620px] mx-auto">
        <div className="headline text-[27px] mb-4">{START_HERE.headline}</div>
        {START_HERE.body.map((p, i) => <p key={i} className={i === 0 ? 'lead' : ''}>{p}</p>)}
        <div className="my-4">{START_HERE.chips.map((c, i) => <span key={i} className="chip">✦ {c}</span>)}</div>
        <p className="text-[14px]" style={{ color: 'var(--muted)' }}>{START_HERE.lookingFor}</p>
        <div className="flex flex-wrap gap-2.5 mt-5">
          <button className="mac-btn mac-btn-primary" style={{ background: 'var(--orange)' }} onClick={() => open('caseStudies')}>📂 Case Studies</button>
          <button className="mac-btn" onClick={() => open('projects')}>📁 Projects</button>
          <button className="mac-btn" onClick={() => open('resume')}>📝 Resume</button>
          <button className="mac-btn" onClick={() => open('contact')}>✉️ Contact</button>
        </div>
        <p className="text-[11px] mt-5" style={{ color: 'var(--muted)' }}>Tip: double-click desktop folders, drag windows by their title bar, press ⌘K to search.</p>
      </div>
    </div>
  )
}

// ---------- Pages ----------
function About() {
  return (
    <div className="p-7 prose-mac max-w-[640px] mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[40px]">🧑‍💻</span>
        <div>
          <div className="headline text-xl">{PERSON.name}</div>
          <div className="text-[13px]" style={{ color: 'var(--muted)' }}>{PERSON.role} · {PERSON.location}</div>
        </div>
      </div>
      <p className="lead">{ABOUT.intro}</p>
      {ABOUT.body.map((p, i) => <p key={i}>{p}</p>)}
      <h2>How I work</h2>
      <ul>{ABOUT.howIWork.map((h, i) => <li key={i}>{h}</li>)}</ul>
      <h2>What I’m looking for</h2>
      <p>{ABOUT.lookingFor}</p>
    </div>
  )
}

function Experience() {
  return (
    <div className="p-6 max-w-[700px] mx-auto">
      <div className="headline text-lg mb-1">Work &amp; Research</div>
      <div className="text-[13px] mb-4" style={{ color: 'var(--muted)' }}>The long and the short of it.</div>
      <div className="flex flex-col gap-3">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="card">
            <div className="flex justify-between items-baseline gap-2 flex-wrap">
              <div className="headline text-[16px]">{e.role}</div>
              <div className="text-[12px] pixel" style={{ color: 'var(--muted)' }}>{e.when}</div>
            </div>
            <div className="text-[13px] font-semibold mb-2" style={{ color: 'var(--muted)' }}>{e.org}</div>
            <div className="prose-mac text-[14.5px]">{e.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Resume() {
  return (
    <div className="p-7 prose-mac max-w-[620px] mx-auto">
      <div className="headline text-2xl mb-1">{RESUME.title}</div>
      <p className="lead">{RESUME.summary}</p>
      <h2>Highlights</h2>
      <ul>{RESUME.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
      <div className="mt-6 flex gap-2.5">
        <button className="mac-btn mac-btn-primary" style={{ background: 'var(--orange)' }} onClick={() => alert('Drop resume.pdf in /public and link it here.')}>⬇ Download PDF</button>
        <a className="mac-btn" href={`mailto:${PERSON.email}`}>Request latest</a>
      </div>
      <p className="text-[11px] mt-3" style={{ color: 'var(--muted)' }}>Placeholder — wire a real PDF in /public.</p>
    </div>
  )
}

function Contact() {
  const Row = ({ k, v, href }) => (
    <a href={href} target="_blank" rel="noreferrer" className="flex justify-between px-4 py-3 hover:bg-black hover:text-[#f5f5ef] transition-colors">
      <span className="font-semibold">{k}</span><span className="underline">{v}</span>
    </a>
  )
  return (
    <div className="p-7 prose-mac max-w-[560px] mx-auto">
      <div className="headline text-2xl mb-2">Let’s talk ✉️</div>
      <p className="lead">Looking for a product designer who prototypes in code? I’m open to roles at early-stage AI startups.</p>
      <div className="mt-3 card !p-0 overflow-hidden divide-y divide-black/15">
        <Row k="Email" v={PERSON.email} href={`mailto:${PERSON.email}`} />
        <Row k="Web" v={PERSON.site} href={`https://${PERSON.site}`} />
        <Row k="X / Twitter" v={PERSON.x} href={`https://x.com/${PERSON.x.replace('@', '')}`} />
      </div>
      <p className="text-[11px] mt-3" style={{ color: 'var(--muted)' }}>Contact details are placeholders — update in src/data/content.js.</p>
    </div>
  )
}

function Blog() {
  return (
    <div>
      <FinderBar count={BLOG.length} label="Building with AI" />
      <div className="flex flex-col max-w-[760px] mx-auto w-full">
        {BLOG.map((b) => (
          <a key={b.id} href={b.link} target="_blank" rel="noreferrer" className="border-b border-black/15 px-5 py-4 hover:bg-black/5 block transition-colors">
            <div className="headline text-[16px]">📰 {b.title}</div>
            <div className="prose-mac text-[14px] mt-1" style={{ color: 'var(--muted)' }}>{b.excerpt}</div>
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
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black" style={{ background: 'var(--cream-2)' }}>
        <span className="text-[12px] pixel">🔎 Find:</span>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" className="flex-1 border border-black rounded-md px-2.5 py-1 text-[13px]" style={{ background: 'var(--paper)' }} />
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
    <div style={{ '--accent': p.accent }}>
      <div className="px-7 py-6" style={{ background: p.accent, color: '#151515' }}>
        <div className="center-col max-w-[620px]">
          <div className="kicker opacity-80">Project · Day {p.day}</div>
          <div className="headline text-[26px] mt-1.5">{p.emoji} {p.name}</div>
          <div className="text-[16px] mt-2 max-w-[520px] font-medium">{p.one}</div>
          <div className="mt-3">{p.tools.map((t) => <span key={t} className="chip">{t}</span>)}</div>
        </div>
      </div>
      <div className="p-7 prose-mac max-w-[620px] mx-auto">
        <h2>What it does</h2>
        <ol>{p.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
        <h2>Key decision</h2>
        <p>{p.decision}</p>
        <h2>Why it matters</h2>
        <p>{p.why}</p>
        <h2>What was hard</h2>
        <p>{p.hard}</p>
        <h2>Screens</h2>
        <div className="cqgrid cqgrid-2">{p.media.map((m) => <ImageSlot key={m.id} slot={m} base={base} open={open} />)}</div>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {p.live && <a className="mac-btn mac-btn-primary" style={{ background: p.accent, color: '#151515' }} href={p.live} target="_blank" rel="noreferrer">▶ Live demo</a>}
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
      <div className="cqgrid cqgrid-2 p-5">
        {CASE_STUDIES.map((c) => (
          <button key={c.id} onDoubleClick={() => open('caseStudy', c.id, c.name)} className="card card-hover text-left" title="Double-click to open">
            <div className="w-9 h-6 mb-2.5 rounded" style={{ background: c.accent, border: '1.5px solid #151515' }} />
            <div className="headline text-[16px] leading-tight">{c.n} · {c.name}</div>
            <div className="text-[12.5px] mt-0.5" style={{ color: 'var(--muted)' }}>{c.subtitle}</div>
            <div className="text-[13px] mt-2 prose-mac">{c.lede}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

const SECTIONS = [
  ['summary', 'Summary'], ['problem', 'Problem'], ['research', 'Research'],
  ['opportunity', 'Opportunity'], ['solution', 'Solution'], ['team', 'Leadership'],
  ['launch', 'Launch'], ['results', 'Results'], ['reflection', 'Reflection'],
]

function CaseStudyDetail({ id, open }) {
  const idx = CASE_STUDIES.findIndex((x) => x.id === id)
  const c = CASE_STUDIES[idx]
  const refs = useRef({})
  if (!c) return <div className="p-4">Not found.</div>
  const base = `case-studies/${c.id}`
  const textOn = c.accentText || '#fff'
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length]
  const Sec = ({ id: sid, children }) => <div ref={(el) => (refs.current[sid] = el)} style={{ scrollMarginTop: 8 }}>{children}</div>
  const go = (sid) => refs.current[sid]?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div style={{ '--accent': c.accent }}>
      {/* HERO */}
      <div className="px-7 py-7 border-b border-black" style={{ background: c.accent, color: textOn }}>
        <div className="center-col max-w-[720px]">
          <div className="kicker opacity-90">Case {c.n} · {c.name}</div>
          <div className="headline text-[26px] sm:text-[30px] mt-2.5">{c.hero}</div>
          <div className="text-[15px] mt-3 font-medium" style={{ opacity: 0.94 }}>{c.lede}</div>
          <div className="text-[12px] mt-3 pixel" style={{ opacity: 0.85 }}>{c.meta}</div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {c.links.medium && <a className="mac-btn" href={c.links.medium} target="_blank" rel="noreferrer">Read on Medium →</a>}
            {c.links.live && <a className="mac-btn" href={c.links.live} target="_blank" rel="noreferrer">▶ Live</a>}
            {c.links.source && <a className="mac-btn" href={c.links.source} target="_blank" rel="noreferrer">📄 Source doc</a>}
          </div>
        </div>
      </div>

      {/* sticky section nav */}
      <div className="tabbar overflow-x-auto sticky top-0 z-10" style={{ position: 'sticky' }}>
        {SECTIONS.map(([sid, label]) => (
          <button key={sid} className="tab" onClick={() => go(sid)}>{label}</button>
        ))}
      </div>

      <div className="p-7 prose-mac max-w-[700px]">
        {/* HERO IMAGE + SNAPSHOT */}
        <ImageSlot slot={c.heroImg} base={base} open={open} className="mb-5" />
        <div className="card mb-2">
          <div className="kicker mb-2" style={{ color: 'var(--muted)' }}>Project Snapshot</div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-[13.5px]">
            <Field k="Role" v={c.snapshot.role} />
            <Field k="Duration" v={c.snapshot.duration} />
            <Field k="Team" v={c.snapshot.team} />
            <Field k="Context" v={c.snapshot.company} />
          </div>
          <div className="mt-3 pt-3 border-t border-black/15">
            <div className="kicker mb-1" style={{ color: 'var(--muted)' }}>Impact</div>
            <div className="flex flex-wrap gap-1.5">{c.snapshot.impact.map((i, k) => <span key={k} className="chip">✦ {i}</span>)}</div>
            <div className="pull-quote mt-3 !text-[16px]">{c.snapshot.summary}</div>
          </div>
        </div>

        {/* EXECUTIVE SUMMARY */}
        <Sec id="summary">
          <h2>Executive summary</h2>
          <div className="exec-grid">
            <p className="!mb-0">{c.execSummary.challenge}</p>
            <div className="grid gap-2">
              {c.execSummary.metrics.map((m, i) => <div key={i} className="stat"><b>{m.v}</b><span>{m.l}</span></div>)}
            </div>
          </div>
          <div className="mt-4">
            {c.beforeAfter
              ? <BeforeAfter before={c.beforeAfter.before} after={c.beforeAfter.after} base={base} label={c.beforeAfter.label} />
              : c.execImg && <ImageSlot slot={c.execImg} base={base} open={open} />}
          </div>
        </Sec>

        {/* PROBLEM */}
        <Sec id="problem">
          <h2>The problem</h2>
          <p>{c.problem.intro}</p>
          {c.problem.quote && <div className="pull-quote">{c.problem.quote}</div>}
          <ul>{c.problem.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          <p style={{ color: 'var(--muted)' }}><strong>If nothing changed:</strong> {c.problem.note}</p>
          <ImageSlot slot={c.problemImg} base={base} open={open} />
        </Sec>

        {/* RESEARCH / UNDERSTANDING */}
        <Sec id="research">
          <h2>Understanding the problem</h2>
          <p>{c.understanding.intro}</p>
          {c.understanding.themes.map((th, i) => (
            <div key={i} className="card mb-2.5">
              <div className="headline text-[15px]">Theme {i + 1} — {th.title}</div>
              <p className="text-[14px] mt-1 !mb-0">{th.body}</p>
            </div>
          ))}
          <ImageSlot slot={c.synthesisImg} base={base} open={open} className="mt-2" />
        </Sec>

        {/* OPPORTUNITY */}
        <Sec id="opportunity">
          <h2>Defining the opportunity</h2>
          <p>{c.opportunity.intro}</p>
          <div className="cqgrid cqgrid-3">
            {c.opportunity.options.map((o, i) => (
              <div key={i} className="card !p-3"><div className="font-semibold text-[13.5px]">{o.label}</div><div className="text-[12.5px] mt-1" style={{ color: 'var(--muted)' }}>{o.note}</div></div>
            ))}
          </div>
          <p className="mt-3"><strong>Decision:</strong> {c.opportunity.chosen}</p>
          <ImageSlot slot={c.opportunityImg} base={base} open={open} />
        </Sec>

        {/* SOLUTION / DECISIONS */}
        <Sec id="solution">
          <h2>Designing the solution</h2>
          {c.decisions.map((d, i) => (
            <div key={i} className="card mb-3.5">
              <div className="kicker" style={{ color: 'var(--muted)' }}>Decision {i + 1}</div>
              <div className="headline text-[16px] mt-0.5">{d.title}</div>
              <p className="text-[14.5px] mt-1.5 mb-2">{d.body}</p>
              {d.img && <ImageSlot slot={d.img} base={base} open={open} />}
            </div>
          ))}
        </Sec>

        {/* COLLABORATION & LEADERSHIP */}
        <Sec id="team">
          <h2>Collaboration &amp; leadership</h2>
          <p>{c.collaboration.body}</p>
          <ul>{c.collaboration.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
          {c.collabImg && <ImageSlot slot={c.collabImg} base={base} open={open} />}
        </Sec>

        {/* LAUNCH */}
        <Sec id="launch">
          <h2>{c.launch.title || 'Launch strategy'}</h2>
          <p>{c.launch.intro}</p>
          <div className="flex flex-wrap items-stretch gap-2.5">
            {c.launch.phases.map((ph, i) => (
              <div key={i} className="card !p-3 flex-1 min-w-[120px]"><div className="font-semibold text-[13.5px]">{ph.label}</div><div className="text-[12.5px] mt-1" style={{ color: 'var(--muted)' }}>{ph.note}</div></div>
            ))}
          </div>
          {c.launchImg && <ImageSlot slot={c.launchImg} base={base} open={open} className="mt-3" />}
        </Sec>

        {/* RESULTS */}
        <Sec id="results">
          <h2>Results</h2>
          <div className="cqgrid cqgrid-4">
            {c.results.cards.map((m, i) => <div key={i} className="stat" style={{ borderColor: c.accent }}><b style={{ color: c.accent }}>{m.v}</b><span>{m.l}</span></div>)}
          </div>
          <p className="text-[13px] mt-3" style={{ color: 'var(--muted)' }}>{c.results.note}</p>
          {c.resultsImg && <ImageSlot slot={c.resultsImg} base={base} open={open} />}
        </Sec>

        {/* LEARNED */}
        <h2>What I learned</h2>
        <ol>{c.learnings.map((l, i) => <li key={i}>{l}</li>)}</ol>

        {/* REFLECTION */}
        <Sec id="reflection">
          <h2>Reflection</h2>
          <p>{c.reflection}</p>
        </Sec>

        {/* NEXT */}
        <div className="mt-6 pt-5 border-t border-black/15">
          <div className="kicker mb-2" style={{ color: 'var(--muted)' }}>Next case study</div>
          <button className="card card-hover w-full text-left flex items-center gap-3" onClick={() => open('caseStudy', next.id, next.name)}>
            <span className="w-9 h-7 rounded flex-none" style={{ background: next.accent, border: '1.5px solid var(--border)' }} />
            <span className="flex-1">
              <span className="headline text-[15px] block">{next.n} · {next.name}</span>
              <span className="text-[12.5px] block" style={{ color: 'var(--muted)' }}>{next.subtitle}</span>
            </span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function Field({ k, v }) {
  return <div><div className="kicker" style={{ color: 'var(--muted)' }}>{k}</div><div className="font-semibold leading-tight">{v}</div></div>
}

// ---------- Games ----------
function Games({ open }) {
  return (
    <div>
      <FinderBar count={1} label="Arcade" />
      <div className="cqgrid cqgrid-2 p-5 max-w-[760px] mx-auto">
        <div className="card">
          <div className="rounded-lg mb-3 flex items-center justify-center text-5xl" style={{ background: '#0b1020', height: 120, border: '1.5px solid #151515' }}>🚀</div>
          <div className="headline text-[16px]">Artemis II — Flappy</div>
          <div className="text-[13px] mt-1 mb-3 prose-mac" style={{ color: 'var(--muted)' }}>
            A Flappy-Bird-style tribute to the Artemis II launch. Tap, click, or hit Space to fly the capsule through the asteroid field.
          </div>
          <div className="flex flex-wrap gap-2.5">
            <button className="mac-btn mac-btn-primary" style={{ background: 'var(--orange)' }} onClick={() => open('game', 'artemis', 'Artemis II — Flappy')}>▶ Play</button>
            <button className="mac-btn" onClick={() => open('project', 'artemis', 'Artemis II')}>📄 About this build</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------- Picture viewer ----------
function Picture({ payload }) {
  return (
    <div className="p-3 flex flex-col items-center" style={{ background: '#111' }}>
      <img src={payload.src} alt={payload.label} className="max-w-full max-h-[70vh] border border-black rounded" />
      <div className="text-[12px] text-white/80 mt-2 pixel">{payload.label}</div>
    </div>
  )
}

// ---------- Trash ----------
function Trash({ open }) {
  const experimental = PROJECTS.filter((p) => ['artemis', 'maison', 'haru'].includes(p.id))
  return (
    <div>
      <FinderBar count={experimental.length} label="Experiments & archive" />
      <div className="px-5 py-3 prose-mac text-[14px]" style={{ color: 'var(--muted)' }}>Nothing’s really deleted here — just early experiments and playful builds.</div>
      <FolderGrid items={experimental.map((p) => ({ id: p.id, name: p.name, emoji: p.emoji }))} onOpen={(it) => open('project', it.id, it.name)} />
    </div>
  )
}
