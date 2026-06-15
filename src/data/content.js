// All portfolio content, condensed from the case-studies/ source-of-truth docs.
// Image slots are placeholders: drop a file at /public/images/<base>/<id>.png and it appears.
// Placeholders for contact/resume/links are marked TODO — update when finalized.

const GH = 'https://github.com/Ronda1723/portfolio-2026-2027/blob/main/case-studies'

export const PERSON = {
  name: 'Samita Belliganood',
  role: 'Product Designer',
  location: 'San Francisco, CA',
  email: 'hello@samita.design', // TODO: confirm real email
  site: 'samita.design',
  x: '@samitaprakash', // TODO: confirm handle
}

export const START_HERE = {
  title: 'Start Here 👋',
  kicker: 'README — open me first',
  headline: "I'm Samita — a product designer who ships AI interfaces in code.",
  body: "Not wireframes-then-handoff. I prototype AI products by building them — voice tools, Chrome extensions, adaptive planners — because the feel of an AI interaction only becomes real when it runs. I pair that with real research depth (ADHD co-design, a 5-sprint LMS) and real client work.",
  chips: [
    'Deck used in an Insight Partners pitch',
    '8 AI tools shipped in 8 days',
    '5-sprint LMS shipped to a client',
  ],
}

// ----------------------------------------------------------------------------
// CASE STUDIES
// ----------------------------------------------------------------------------
export const CASE_STUDIES = [
  {
    id: 'vibe-coding',
    n: '01',
    name: 'Vibe Coding',
    subtitle: 'AI tools I built to think with',
    meta: 'Personal projects · Hackathons across SF · 2026 · Solo designer-developer',
    accent: '#f54e00',
    hero: "I don't wireframe AI interfaces — I build them. Eight tools shipped in eight days.",
    stats: [
      { v: '8', l: 'tools shipped' },
      { v: '8', l: 'days' },
      { v: '1', l: 'job lead (Day 3)' },
      { v: '12+', l: 'tools/APIs learned' },
    ],
    links: { medium: null, live: 'https://decode--samitaprakash.replit.app', source: `${GH}/vibe-coding/vibe-coding-showcase-source-of-truth.md` },
    heroImg: { id: 'hero', label: 'Montage / hero still', w: 1600, h: 900 },
    overview: {
      problem:
        "A product designer with an HCI Master's who had never shipped code. To stand out at early-stage AI startups, I needed to prove I could build — not just hand off Figma files. So I committed to shipping a new AI tool every couple of days, in public, on X.",
      insight: {
        quote: "AI interfaces can't be designed statically. The feel of a voice interaction, the pacing of a streamed response, the trust signals in an agent's output — these only become real when you build them.",
        by: 'The thesis of the challenge',
      },
      context:
        'Each project solved a real problem I personally had and taught me one new technical concept — APIs, databases, real-time voice, OAuth, browser extensions, game loops.',
    },
    decisions: [
      { title: 'Build to think, not to ship-and-forget', body: 'Every project forced a real interaction-design decision in the first hour — not color or layout, but how humans interact with AI output. When should the AI speak vs. display? When does a loading state need to feel like thinking?', img: { id: 'decision-1', label: 'Annotated UI decision', w: 1200, h: 800 } },
      { title: 'Iteration over perfection', body: 'AI output is never right the first time. The re-prompt box (Prep), side-by-side comparison (Decode), and editable pre-fill (Loop Capture) all solve the same problem: give people a low-friction way to refine.' },
      { title: 'Meet people inside their workflow', body: 'Loop as a standalone app is fine. Loop + a Chrome extension that lives inside LinkedIn is genuinely useful. The best AI tools meet you where you already are.' },
    ],
    gallery: [
      { id: 'ponder', label: 'Ponder — voice → structured output', w: 900, h: 1600, caption: 'Ponder: hold-to-talk voice brain dump' },
      { id: 'decode', label: 'Decode — side-by-side models', w: 1600, h: 1000, caption: 'Decode: GPT-4o vs Claude, same prompt' },
      { id: 'haru', label: 'Haru — mood → day plan', w: 900, h: 1600, caption: 'Haru: mood-first daily planner' },
      { id: 'loop-capture', label: 'Loop Capture — Chrome extension', w: 1200, h: 900, caption: 'Loop Capture: LinkedIn → follow-up' },
    ],
    process: {
      steps: ['Pick a real personal pain', 'Choose one new concept to learn', 'Build in ~3 hrs', 'Ship + post on X', 'Log the decisions'],
      artifacts: [{ id: 'x-posts', label: 'X posts + engagement grid', w: 1400, h: 900, caption: 'Daily build-in-public posts' }],
      role: 'Solo — design, build, ship, and write-up for all eight.',
      outcome:
        'A founder DMed me on X after the Day 3 post (Decode), asking to meet about a role. The Smallest.ai team reposted Ponder. The challenge became a living body of proof that I can own a feature end-to-end.',
    },
  },
  {
    id: 'skan-ai',
    n: '02',
    name: 'Skan AI',
    subtitle: 'Making AI agent systems legible',
    meta: 'Skan AI · Menlo Park, CA · Aug–Nov 2025 · Contract, working directly with the founder',
    accent: '#1d4aff',
    hero: 'AI agents are invisible by default. My job was to make them understandable.',
    stats: [
      { v: '1', l: 'Insight Partners pitch' },
      { v: '41', l: 'slides in 48 hrs' },
      { v: '49+', l: 'concepts / diagram' },
      { v: '50+', l: 'slides redesigned' },
    ],
    links: { medium: null, live: null, source: `${GH}/skan-ai/skan-ai-source-of-truth.md` },
    heroImg: { id: 'hero', label: 'Abstracted hero visual (NDA-safe)', w: 1600, h: 900 },
    overview: {
      problem:
        'Skan AI builds agentic process intelligence for the Fortune 500 — a multimodal Large Process Model that watches how humans do enterprise work, then deploys agents to do it. The pitch audience needs to understand it in 30 seconds, not 30 minutes. The slides looked like engineering schematics.',
      insight: {
        quote: 'Same information, different audience. This is the entire job.',
        by: 'The translation problem',
      },
      context:
        'Two engagements: a full pitch-deck redesign with the founder, then a rebuild of the investor deck used in a real pitch to Insight Partners. Work is under NDA — shown here as abstracted principles.',
    },
    decisions: [
      { title: 'Workflow as narrative, not architecture', body: "Stakeholders don't need to know what's inside the system — they need to know what it does for them. I reframed boxes-and-arrows schematics into sequential narratives: first the agent does X, then identifies Y, then recommends Z.", img: { id: 'decision-1', label: 'Narrative reframing diagram', w: 1400, h: 800 } },
      { title: 'Editability is a deliverable', body: 'Every slide shipped as fully editable elements — no flattened images, no grouped objects — so the founder could fix a typo or re-layout minutes before walking into the room.' },
      { title: 'Push back when the data lies', body: 'I flagged that an ACV chart shown to-scale would visually erase the historical numbers, and proposed scaling only through 2025. Design judgment, not just execution — that earns trust.' },
    ],
    gallery: [
      { id: 'maturity-model', label: 'Customer maturity model (5-stage)', w: 1600, h: 700, caption: 'Process Excellence → Agentic AI' },
      { id: 'architecture', label: 'Architecture diagram → editable slide', w: 1600, h: 1000, caption: '49 concepts, made legible' },
      { id: 'iconography', label: 'Custom agent-action iconography', w: 1200, h: 800, caption: 'A consistent visual language' },
    ],
    beforeAfter: {
      label: 'The translation',
      before: { id: 'before', label: 'Engineering schematic (dense)', w: 1200, h: 800 },
      after: { id: 'after', label: 'Investor narrative (clear)', w: 1200, h: 800 },
    },
    process: {
      steps: ['Raw Draw.io / 19-slide deck', 'Restructure narrative', 'Rebuild + iconography', 'Founder review', 'Insight Partners deck (41 slides)'],
      artifacts: [{ id: 'timeline', label: '24-hour turnaround timeline', w: 1400, h: 500, caption: 'Raw materials → investor-ready in 2 days' }],
      role: 'Sole designer, working directly with the founder (Avinash Misra) and Manish Garg.',
      outcome:
        'The deck I designed went into a real pitch meeting with Insight Partners. The founder kept coming back; the engagement opened a second body of work. The door is still open.',
    },
  },
  {
    id: 'playwise',
    n: '03',
    name: 'Playwise',
    subtitle: 'An LMS for a play-based pedagogy',
    meta: 'INST776 Capstone · UMD · 2024–2025 · Client: Dr. Caro Williams-Pierce · Team of 5',
    accent: '#f9bd2b',
    accentText: '#151515',
    hero: 'Canvas is “awful and inexcusable” for play-based learning. A real professor said that. So we designed the replacement.',
    stats: [
      { v: '5', l: 'sprints' },
      { v: '2', l: 'user types' },
      { v: '9+', l: 'courses use RWP' },
      { v: '1', l: 'client handoff' },
    ],
    links: { medium: null, live: null, source: `${GH}/playwise/playwise-source-of-truth.md` },
    heroImg: { id: 'hero', label: 'Student + instructor views side by side', w: 1600, h: 900 },
    overview: {
      problem:
        'Read-Watch-Play transforms how STEM courses are taught — read, observe, then play. 9+ courses at UMD use it. But Canvas wasn’t built for it. Instructors hack together Miro, Figma, and Canvas just to plan a single week.',
      insight: {
        quote: '"I am a visual planner and Canvas doesn’t support this. I always have to create Miro boards, Figma, and outsource. Grading is awful and inexcusable."',
        by: 'Prof. Anat Sevilla, RWP instructor',
      },
      context:
        'A real client (Dr. Caro Williams-Pierce), real stakeholders, and a development-ready handoff. The most complete end-to-end project in my portfolio.',
    },
    decisions: [
      { title: 'Mobile-first for an LMS', body: 'Students access materials on phones between classes, on commutes, before bed. Every other LMS assumes desktop. RWP’s three clear phases actually reduce cognitive load on mobile.', img: { id: 'decision-1', label: 'Mobile R-W-P navigation', w: 900, h: 1600 } },
      { title: 'Two experiences, one platform', body: 'RWP’s principle: students and instructors should have equivalent experiences. We designed both views simultaneously so a grading interface and a learning interface feel like the same product.' },
      { title: 'Visual planning built in', body: 'Responding directly to Prof. Anat’s pain — we made non-linear, visual course planning native to the LMS, killing the tool-switching to Miro and Figma.' },
    ],
    gallery: [
      { id: 'rwp-cycle', label: 'Read · Watch · Play (1-1-3 pts)', w: 1600, h: 700, caption: 'The pedagogy, mapped to the UI' },
      { id: 'student', label: 'Student view — quests & XP', w: 900, h: 1600, caption: 'Choose-Your-Own assignments' },
      { id: 'instructor', label: 'Instructor view — visual planner', w: 1400, h: 1000, caption: 'Plan a week without leaving the LMS' },
    ],
    beforeAfter: {
      label: 'Canvas → Playwise',
      before: { id: 'before', label: 'Canvas, hacked for RWP', w: 1200, h: 800 },
      after: { id: 'after', label: 'Playwise, purpose-built', w: 1200, h: 800 },
    },
    process: {
      steps: ['Background research', 'Stakeholder interviews', 'Competitive analysis', 'Personas & journeys', 'Lo-fi → hi-fi', 'User testing', 'Client handoff'],
      artifacts: [{ id: 'journey-map', label: 'Journey map / persona', w: 1400, h: 900, caption: 'Research artifacts' }],
      role: 'Primary designer on a 5-person team. Owned the client requirements doc, stakeholder interviews, the “Playwise” visual identity, and the hi-fi mobile-first prototypes.',
      outcome:
        'Delivered a development-ready design system and prototypes to the client across 5 sprints, with a handoff to Dr. Caro, co-PIs, and the parallel technical team.',
    },
  },
  {
    id: 'focusbuddy',
    n: '04',
    name: 'FocusBuddy',
    subtitle: 'Co-designed with ADHD',
    meta: 'INST704 Inclusive Design · UMD · Fall 2024 · Team: Samita, Ruchica Sinha, Urvi Varma',
    accent: '#b62ad9',
    hero: 'Productivity tools are making ADHD worse. We redesigned one from scratch — with the people they’re failing.',
    stats: [
      { v: '3', l: 'rounds of co-design' },
      { v: '5', l: 'ADHD challenges mapped' },
      { v: '2', l: 'concepts tested' },
      { v: '7', l: 'user flows designed' },
    ],
    links: { medium: null, live: null, source: `${GH}/focusbuddy/focusbuddy-source-of-truth.md` },
    heroImg: { id: 'hero', label: 'Research-finding hero visual', w: 1600, h: 900 },
    overview: {
      problem:
        "Graduate students with ADHD don’t just struggle with focus — they struggle with tools designed for people who don’t. Task lists create paralysis. Missed checkboxes create guilt. The tools meant to help become the problem.",
      insight: {
        quote: '"Both participants described feeling WORSE after using productivity tools — not better. The guilt of unchecked boxes was more damaging than having no system at all."',
        by: 'The finding that changed everything',
      },
      context:
        'Participatory design — we co-designed with two graduate students with ADHD across 3 rounds, including sessions where they built their own mockups with a custom UI kit.',
    },
    decisions: [
      { title: 'Never punish a missed task', body: 'No red overdue badges. No broken streaks. Missed tasks just get rescheduled — because guilt doesn’t create productivity.', img: { id: 'decision-1', label: 'No-guilt rescheduling flow', w: 900, h: 1600 } },
      { title: 'Accountability through people, not apps', body: '"I’m never late for group projects, just for myself." So we built StudyBro — peer check-ins that use social motivation instead of app notifications.' },
      { title: 'Automation you can override', body: 'Smart defaults that adapt to your energy, but nothing forced. Users need to feel in control — especially when their relationship with productivity tools is already fraught.' },
    ],
    gallery: [
      { id: 'concept-1', label: 'Concept 1 — structure + StudyBro', w: 900, h: 1600, caption: 'Dashboard + peer accountability' },
      { id: 'concept-2', label: 'Concept 2 — smart + adaptive', w: 900, h: 1600, caption: 'AI breakdowns, no-guilt reflection' },
      { id: 'codesign', label: 'Co-design DIY screens (P1 & P2)', w: 1400, h: 1000, caption: 'Participants’ own mockups' },
    ],
    process: {
      steps: ['Literature review', 'Round 1 interviews', 'Round 2 journey maps', 'Round 3 co-design', 'Prototyping', 'Testing & gap analysis'],
      artifacts: [{ id: 'affinity', label: 'Affinity / empathy maps', w: 1400, h: 900, caption: 'Thematic analysis artifacts' }],
      role: 'Co-led every phase. Owned overdue task management (no-guilt rescheduling), progress tracking & analytics, and Duolingo-inspired customizable notifications.',
      outcome:
        'Two tested concept prototypes, a 5-dimension gap analysis, design principles for neuroinclusive productivity, a Medium article, and a final video presentation.',
    },
  },
]

// ----------------------------------------------------------------------------
// PROJECTS (the 8 builds)
// ----------------------------------------------------------------------------
export const PROJECTS = [
  {
    id: 'haru', day: 1, name: 'Haru 春', emoji: '🌸', accent: '#f9bd2b',
    one: 'A mood-first daily planner that doesn’t assume you wake up feeling the same every day.',
    tools: ['Claude', 'Cursor'], live: null, link: `${GH}/vibe-coding/project-log-01-haru.md`,
    steps: ['A card slides up like an iOS popup', 'Pick one of 5 moods', 'The card flips (3D animation)', 'Your day reshapes — fewer tasks + bigger buffers when “overwhelmed”'],
    decision: 'Mood as functional input, not decoration — moods change task count and time buffers, not just color.',
    hard: 'First time ever shipping code; the CSS 3D card-flip took many iterations to feel physical.',
    media: [{ id: 'mood', label: 'Mood selection state', w: 900, h: 1600 }, { id: 'plan', label: 'Flipped day-plan state', w: 900, h: 1600 }],
  },
  {
    id: 'maison', day: 2, name: 'Maison', emoji: '🏠', accent: '#30abc6',
    one: 'An AI dream-home generator — describe a vibe, get a luxury concept with a real moodboard.',
    tools: ['Lovable', 'Groq', 'Unsplash'], live: null, link: `${GH}/vibe-coding/project-log-02-maison.md`,
    steps: ['Describe your dream-home vibe', 'Groq generates a design concept', 'Unsplash pulls a real moodboard', 'Editorial layout displays it'],
    decision: 'Real Unsplash photography over AI-generated interiors — real photos feel trustworthy; AI rooms hit the uncanny valley.',
    hard: 'First API integration — “I copy-pasted a key without knowing what a model was.” That confusion inspired Decode.',
    media: [{ id: 'concept', label: 'Generated concept + moodboard', w: 1600, h: 1000 }],
  },
  {
    id: 'decode', day: 3, name: 'Decode', emoji: '🧩', accent: '#1d4aff',
    one: 'Type any concept, see GPT-4o and Claude explain it side by side — different mental models.',
    tools: ['Replit', 'Claude', 'GPT-4o'], live: 'https://decode--samitaprakash.replit.app', link: `${GH}/vibe-coding/project-log-03-decode.md`,
    steps: ['Type a concept', 'Both models fire simultaneously', 'Compare side by side, expand sub-concepts', 'Export a textbook-style PDF'],
    decision: 'Side-by-side comparison as the default view — the value isn’t either answer, it’s seeing how they differ.',
    hard: 'PDF export: html2pdf wouldn’t render fonts/gradients until I added `await document.fonts.ready` before capture.',
    media: [{ id: 'landing', label: 'Landing page', w: 1600, h: 1000 }, { id: 'compare', label: 'Comparison view', w: 1600, h: 1000 }],
  },
  {
    id: 'loop', day: 4, name: 'Loop', emoji: '🔁', accent: '#f54e00',
    one: 'A networking memory assistant — type naturally, it parses, saves, and reminds you to follow up.',
    tools: ['Replit', 'Claude', 'Supabase'], live: null, link: `${GH}/vibe-coding/project-log-04-loop.md`,
    steps: ['Type “just met James at a conf, send portfolio tomorrow”', 'Claude parses name/context/action/date', 'Confirm + save to Supabase', '“Today” view shows what’s due'],
    decision: 'Natural language input over form fields — you think in stories at an event, not in form fields.',
    hard: 'First database. Learned Supabase tables, columns, and Row Level Security from scratch.',
    media: [{ id: 'input', label: 'Natural-language input', w: 900, h: 1600 }, { id: 'today', label: 'Today view', w: 900, h: 1600 }],
  },
  {
    id: 'ponder', day: 5, name: 'Ponder', emoji: '🎙️', accent: '#b62ad9',
    one: 'A voice brain dump — speak freely, get back structured thoughts, action items, and a mood word.',
    tools: ['Smallest.ai', 'Claude', 'Google Calendar'], live: null, link: `${GH}/vibe-coding/project-log-05-ponder.md`,
    steps: ['Hold the orb and speak', 'Smallest.ai transcribes live', 'Claude returns 3 thoughts + actions + mood', 'One tap → Google Calendar'],
    decision: 'Hold-to-talk over push-to-start — the physical gesture creates commitment and a natural endpoint.',
    hard: 'Google Calendar OAuth (Cloud project, origins) + a strategic call to drop Vallo.dev rather than fake an integration.',
    media: [{ id: 'record', label: 'Recording state (orb)', w: 900, h: 1600 }, { id: 'result', label: 'Structured result', w: 900, h: 1600 }],
  },
  {
    id: 'prep', day: 6, name: 'prep.', emoji: '🥗', accent: '#30abc6',
    one: 'A voice-first meal planner — tell it what’s in your fridge, get a full day of meals with nutrition.',
    tools: ['Claude', 'Smallest.ai'], live: null, link: `${GH}/vibe-coding/project-log-06-prep.md`,
    steps: ['Say what ingredients you have', 'Claude plans breakfast/lunch/dinner', 'Get a nutrition verdict — enough, or shop?', 'Re-prompt to refine without restarting'],
    decision: 'The re-prompt box — low-friction iteration matters more than a perfect first output.',
    hard: 'Prompting Claude to consistently return structured plans with accurate nutrition.',
    media: [{ id: 'plan', label: 'Meal plan + nutrition', w: 900, h: 1600 }],
  },
  {
    id: 'loop-capture', day: 7, name: 'Loop Capture', emoji: '🧲', accent: '#f54e00',
    one: 'A Chrome extension that saves any LinkedIn profile to Loop in one click, with AI summaries.',
    tools: ['Claude Code', 'Chrome MV3', 'Supabase'], live: null, link: `${GH}/vibe-coding/project-log-07-loop-capture.md`,
    steps: ['On any LinkedIn profile, click the extension', 'Content script scrapes the page', 'Claude cleans the messy DOM + summarizes', 'Add a follow-up → saves to Loop + Calendar'],
    decision: 'AI-powered data cleaning over brittle selectors — let Claude fix LinkedIn’s ever-changing DOM.',
    hard: 'Chrome MV3 architecture (content/popup/background messaging) + scraping LinkedIn’s dynamic class names.',
    media: [{ id: 'popup', label: 'Extension popup on a profile', w: 1200, h: 900 }],
  },
  {
    id: 'artemis', day: 8, name: 'Artemis II', emoji: '🚀', accent: '#1d4aff',
    one: 'A Flappy-Bird-style tribute game built to celebrate the Artemis II launch.',
    tools: ['Emergent AI'], live: null, link: `${GH}/vibe-coding/project-log-08-artemis-game.md`,
    steps: ['Tap to fly the capsule', 'Dodge space debris', 'Score climbs', 'Space-themed Artemis visuals'],
    decision: 'Tie it to a real-world event happening that day — timely and shareable, not a generic clone.',
    hard: 'Games are a different paradigm — loop-driven (every frame) vs event-driven web apps.',
    media: [{ id: 'gameplay', label: 'Gameplay', w: 1600, h: 1000 }],
  },
]

export const ABOUT = {
  title: 'About Me',
  body: [
    "Hi — I’m Samita Belliganood, a product designer based in San Francisco with an HCI Master’s from the University of Maryland.",
    "I design by building. Instead of handing off static Figma files, I prototype AI interfaces in code to feel out the interaction before committing to it — voice tools, Chrome extensions, adaptive planners, even a game.",
    "My work sits at the intersection of rigorous research (co-design with ADHD students, a 5-sprint LMS capstone) and fast, hands-on building (a 60-day public AI challenge, contract design for an enterprise AI startup).",
    "I’m looking for a product design role at an early-stage AI startup — somewhere I can own a feature end-to-end.",
  ],
}

export const EXPERIENCE = [
  { role: 'Design (Contract)', org: 'Skan AI — Menlo Park', when: 'Aug – Nov 2025', body: 'Translated dense enterprise AI architecture into investor-ready visual narratives. Designed the deck used in a real Insight Partners pitch.' },
  { role: '60-Day Build Challenge', org: 'Self-directed · in public on X', when: '2026 – present', body: 'Shipping a new AI-powered tool every few days. Learned APIs, databases, voice, OAuth, browser extensions, and game dev by building.' },
  { role: 'UX Designer (Capstone)', org: 'Playwise · UMD + Dr. Caro Williams-Pierce', when: '2024 – 2025', body: 'Primary designer on a 5-person team designing a mobile-first LMS for the Read-Watch-Play pedagogy. Delivered a development-ready handoff.' },
  { role: 'UX Researcher', org: 'FocusBuddy · INST704 Inclusive Design', when: 'Fall 2024', body: 'Participatory research co-designing a low-cognitive-load task app with graduate students who have ADHD.' },
]

export const RESUME = {
  title: 'Resume.pdf',
  summary: 'Product designer who prototypes in code. HCI Master’s, UMD. Research depth + startup-speed building.',
  highlights: [
    'Designed an investor deck used in a real Insight Partners pitch (Skan AI)',
    '8 AI tools shipped in 8 days during a public 60-day challenge',
    '5-sprint LMS capstone delivered to a real client',
    '3 rounds of participatory ADHD co-design research',
  ],
}

export const BLOG = PROJECTS.map((p) => ({
  id: p.id,
  title: `Day ${p.day} of building with AI — ${p.name}`,
  excerpt: p.one,
  link: p.link,
}))

export const DESKTOP_ICONS = [
  { id: 'projects', label: 'Projects', emoji: '📁', type: 'projects' },
  { id: 'case-studies', label: 'Case Studies', emoji: '📂', type: 'caseStudies' },
  { id: 'about', label: 'About Me', emoji: '📄', type: 'about' },
  { id: 'experience', label: 'Experience', emoji: '💼', type: 'experience' },
  { id: 'resume', label: 'Resume', emoji: '📝', type: 'resume' },
  { id: 'blog', label: 'Blog', emoji: '📰', type: 'blog' },
  { id: 'contact', label: 'Contact', emoji: '✉️', type: 'contact' },
]

// Flat index for Spotlight search
export const SEARCH_INDEX = [
  ...CASE_STUDIES.map((c) => ({ kind: 'Case Study', label: c.name, sub: c.subtitle, type: 'caseStudy', payload: c.id })),
  ...PROJECTS.map((p) => ({ kind: 'Project', label: p.name, sub: p.one, type: 'project', payload: p.id })),
  ...BLOG.map((b) => ({ kind: 'Blog', label: b.title, sub: b.excerpt, type: 'blog', payload: null })),
  { kind: 'Page', label: 'About Me', sub: 'Who I am', type: 'about', payload: null },
  { kind: 'Page', label: 'Experience', sub: 'Work & research', type: 'experience', payload: null },
  { kind: 'Page', label: 'Resume', sub: 'Highlights + download', type: 'resume', payload: null },
  { kind: 'Page', label: 'Contact', sub: 'Get in touch', type: 'contact', payload: null },
]
