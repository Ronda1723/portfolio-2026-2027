// All portfolio content, condensed from the case-studies/ source-of-truth docs.
// Placeholders (links/handles) are marked with TODO — update when finalized.

const GH = 'https://github.com/Ronda1723/portfolio-2026-2027/blob/main/case-studies'

export const PERSON = {
  name: 'Samita Belliganood',
  role: 'Product Designer',
  tagline: 'I design by building. AI interfaces, shipped.',
  location: 'San Francisco, CA',
  email: 'hello@samita.design', // TODO: confirm real email
  site: 'samita.design',
  x: '@samitaprakash', // TODO: confirm handle
}

export const CASE_STUDIES = [
  {
    id: 'vibe-coding',
    n: '01',
    name: 'Vibe Coding',
    folder: 'Vibe Coding',
    subtitle: 'AI tools I built to think with',
    meta: 'Personal projects · Hackathons across SF · 2026 · Solo designer-developer',
    hero: "I don't wireframe AI interfaces — I build them. Eight tools shipped in eight days.",
    accent: '#ff7a00',
    source: `${GH}/vibe-coding/vibe-coding-showcase-source-of-truth.md`,
    sections: [
      {
        h: 'The problem',
        body: "A product designer with an HCI Master's who'd never shipped code. To stand out at early-stage AI startups, I needed to prove I could build — not just hand off Figma files. So I committed to shipping a new AI tool every couple of days, in public, on X.",
      },
      {
        h: 'Why I build to think',
        body: "AI interfaces can't be designed statically. The feel of a voice interaction, the pacing of a streamed response, the trust signals in an agent's output — these only become real when you build them. Each project forced a real interaction-design decision in the first hour, not about color or layout, but about how humans interact with AI output.",
      },
      {
        h: 'Design principles that emerged',
        body: "AI interfaces need iteration, not perfection (the re-prompt box). Voice removes the friction that matters most. Products should extend into existing workflows. Mood and emotional state are valid functional inputs. The best ideas come from personal pain.",
      },
      {
        h: 'The outcome',
        body: "A founder DMed me on X after the Day 3 post (Decode), asking to meet about a role. The Smallest.ai team reposted Ponder. A growing public body of proof that I can own a feature end-to-end — APIs, databases, voice, browser extensions, games.",
      },
    ],
    projectsNote: 'Open the Projects folder on the desktop to explore all eight builds.',
  },
  {
    id: 'skan-ai',
    n: '02',
    name: 'Skan AI',
    folder: 'Skan AI',
    subtitle: 'Making AI agent systems legible',
    meta: 'Skan AI · Menlo Park, CA · Aug–Nov 2025 · Contract, working directly with the founder',
    hero: 'AI agents are invisible by default. My job was to make them understandable.',
    accent: '#1f3a8a',
    source: `${GH}/skan-ai/skan-ai-source-of-truth.md`,
    sections: [
      {
        h: 'The problem',
        body: 'Skan AI builds agentic process intelligence for the Fortune 500 — a multimodal Large Process Model that watches how humans do enterprise work and deploys agents to do the same. The technology is deep. The pitch audience — investors, enterprise buyers — needs to understand it in 30 seconds, not 30 minutes. The slides looked like engineering schematics.',
      },
      {
        h: 'What I designed',
        body: 'Two engagements: a full pitch-deck redesign with the founder, then a rebuild of an investor deck used in a real pitch to Insight Partners. Custom iconography, layered depth, a coherent visual language across 50+ slides, the customer maturity model, and the hardest deliverable — four dense Draw.io architecture diagrams (49+ technical concepts in one) converted into fully editable, professional slides.',
      },
      {
        h: 'Key decision: workflow as narrative, not architecture',
        body: "Stakeholders don't need to know what's inside the system. They need to know what it does for them. I reframed boxes-and-arrows schematics as sequential narratives, kept every element editable so the founder could iterate live, and pushed back on a to-scale ACV chart that would have erased the historical story.",
      },
      {
        h: 'The impact',
        body: 'The deck I designed went into a real pitch meeting with Insight Partners — 41 investor-ready slides produced in 48 hours. The founder kept coming back; the engagement opened a second body of work. (Work is under NDA — shown here as abstracted principles.)',
      },
    ],
  },
  {
    id: 'playwise',
    n: '03',
    name: 'Playwise',
    folder: 'Playwise',
    subtitle: 'An LMS for a play-based pedagogy',
    meta: 'INST776 Graduate Capstone · UMD · 2024–2025 · Client: Dr. Caro Williams-Pierce · Team of 5',
    hero: "Canvas is “awful and inexcusable” for play-based learning. A real professor said that. So we designed the replacement.",
    accent: '#2e7d32',
    source: `${GH}/playwise/playwise-source-of-truth.md`,
    sections: [
      {
        h: 'The problem',
        body: 'Read-Watch-Play transforms how STEM courses are taught — through reading, observing, then playing. 9+ courses at UMD use it. But Canvas wasn’t built for it. Instructors hack together Miro, Figma, and Canvas just to plan a single week.',
      },
      {
        h: 'The sharpest quote',
        quote: '"I am a visual planner and Canvas doesn’t support this. I always have to create Miro boards, Figma, and always sort of outsource. Grading is awful and inexcusable."',
        body: '— Prof. Anat Sevilla, RWP instructor',
      },
      {
        h: 'Key decisions',
        body: 'Mobile-first for an LMS — students learn on phones between classes. Two experiences, one platform — student and instructor views designed simultaneously to feel like the same product. Visual planning built natively into the LMS, killing the tool-switching.',
      },
      {
        h: 'The outcome',
        body: 'Across 5 sprints: stakeholder interviews, competitive analysis, personas, journey maps, lo-fi to hi-fi prototyping, user testing, and a development-ready handoff to the client. My contributions: the client requirements doc, stakeholder interviews, the "Playwise" visual identity, and the hi-fi mobile-first prototypes for both views.',
      },
    ],
  },
  {
    id: 'focusbuddy',
    n: '04',
    name: 'FocusBuddy',
    folder: 'FocusBuddy',
    subtitle: 'Co-designed with ADHD',
    meta: 'INST704 Inclusive Design · UMD · Fall 2024 · Team: Samita, Ruchica Sinha, Urvi Varma',
    hero: 'Productivity tools are making ADHD worse. We redesigned one from scratch — with the people they’re failing.',
    accent: '#6a4c93',
    source: `${GH}/focusbuddy/focusbuddy-source-of-truth.md`,
    sections: [
      {
        h: 'The problem',
        body: "Graduate students with ADHD don’t just struggle with focus — they struggle with tools designed for people who don’t. Task lists create paralysis. Missed checkboxes create guilt. The tools meant to help become the problem.",
      },
      {
        h: 'The finding that changed everything',
        quote: '"Both participants described feeling WORSE after using productivity tools — not better. The guilt of unchecked boxes was more damaging than having no system at all."',
        body: 'This emotional dimension reframed the entire design philosophy.',
      },
      {
        h: 'Key decisions',
        body: 'Never punish a missed task — no red badges, no broken streaks, just rescheduling. Accountability through people, not apps (StudyBro peer check-ins). Automation you can override — smart defaults, nothing forced.',
      },
      {
        h: 'My role',
        body: 'I co-led every phase across 3 rounds of co-design research. My specific contributions: overdue task management (no-guilt rescheduling), progress tracking and productivity analytics, and customizable notifications inspired by Duolingo’s persistent-but-friendly approach.',
      },
    ],
  },
]

export const PROJECTS = [
  { id: 'haru', day: 1, name: 'Haru 春', one: 'A mood-first daily planner that doesn’t assume you wake up feeling the same every day.', tools: 'Claude + Cursor', link: `${GH}/vibe-coding/project-log-01-haru.md`, live: null },
  { id: 'maison', day: 2, name: 'Maison', one: 'An AI dream-home generator — describe a vibe, get a luxury concept with a real moodboard.', tools: 'Lovable + Groq + Unsplash', link: `${GH}/vibe-coding/project-log-02-maison.md`, live: null },
  { id: 'decode', day: 3, name: 'Decode', one: 'Type any concept, see GPT-4o and Claude explain it side by side — different mental models.', tools: 'Replit + Claude + GPT-4o', link: `${GH}/vibe-coding/project-log-03-decode.md`, live: 'https://decode--samitaprakash.replit.app' },
  { id: 'loop', day: 4, name: 'Loop', one: 'A networking memory assistant — type naturally, it parses, saves, and reminds you to follow up.', tools: 'Replit + Claude + Supabase', link: `${GH}/vibe-coding/project-log-04-loop.md`, live: null },
  { id: 'ponder', day: 5, name: 'Ponder', one: 'A voice brain dump — speak freely, get back structured thoughts, action items, and a mood word.', tools: 'Smallest.ai + Claude + Google Calendar', link: `${GH}/vibe-coding/project-log-05-ponder.md`, live: null },
  { id: 'prep', day: 6, name: 'prep.', one: 'A voice-first meal planner — tell it what’s in your fridge, get a full day of meals with nutrition.', tools: 'Claude + Smallest.ai', link: `${GH}/vibe-coding/project-log-06-prep.md`, live: null },
  { id: 'loop-capture', day: 7, name: 'Loop Capture', one: 'A Chrome extension that saves any LinkedIn profile to Loop in one click, with AI summaries.', tools: 'Claude Code + Chrome MV3 + Supabase', link: `${GH}/vibe-coding/project-log-07-loop-capture.md`, live: null },
  { id: 'artemis', day: 8, name: 'Artemis II', one: 'A Flappy-Bird-style tribute game built to celebrate the Artemis II launch.', tools: 'Emergent AI', link: `${GH}/vibe-coding/project-log-08-artemis-game.md`, live: null },
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
