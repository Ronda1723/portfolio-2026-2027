// All portfolio content, drawn from the case-studies/ source-of-truth docs.
// Image slots are placeholders: drop a file at /public/images/<base>/<id>.png and it appears.
// Contact/resume/links marked TODO — update when finalized.

const GH = 'https://github.com/Ronda1723/portfolio-2026-2027/blob/main/case-studies'

export const PERSON = {
  name: 'Samita Belliganood',
  role: 'Product Designer',
  location: 'San Francisco, CA',
  email: 'hello@samita.design', // TODO
  site: 'samita.design',
  x: '@samitaprakash', // TODO
}

export const START_HERE = {
  title: 'Start Here',
  kicker: 'README — open me first',
  headline: "I'm a product designer who ships AI interfaces in code.",
  body: [
    "Most designers stop at the Figma file. I keep going — because the things that make an AI product good or bad don't show up in a static mockup. The feel of a voice interaction. The pacing of a streamed response. Whether you trust what an agent just did. Those only become real when the thing actually runs.",
    "So I build. Over six weeks I shipped eight AI tools — voice brain-dumps, a model-comparison engine, a networking assistant, a Chrome extension, even a game — each solving a real problem I had, each teaching me a new piece of the stack. I pair that speed with genuine research depth: three rounds of ADHD co-design, a five-sprint LMS shipped to a real client, and contract design for an enterprise AI startup whose deck went into an Insight Partners pitch.",
  ],
  chips: [
    'Deck used in an Insight Partners pitch',
    '8 AI tools in 8 days',
    '5-sprint LMS shipped to a client',
    'HCI Master’s · University of Maryland',
  ],
  lookingFor: "I'm looking for a product design role at an early-stage AI startup — somewhere I can own a feature end-to-end, from research through shipped code.",
}

// ----------------------------------------------------------------------------
// CASE STUDIES
// ----------------------------------------------------------------------------
export const CASE_STUDIES = [
  {
    id: 'vibe-coding', n: '01', name: 'Vibe Coding',
    subtitle: 'AI tools I built to think with',
    meta: 'Personal projects · Hackathons across SF · 2026 · Solo designer-developer',
    accent: '#f7a501', accentText: '#2a241e',
    hero: "I don't wireframe AI interfaces — I build them. Eight tools shipped in eight days.",
    lede: "A public 60-day building challenge that turned a designer who'd never shipped code into someone who prototypes AI products end-to-end — and got noticed for it.",
    stats: [
      { v: '8', l: 'tools shipped' },
      { v: '8', l: 'days' },
      { v: '1', l: 'job lead (Day 3)' },
      { v: '12+', l: 'tools / APIs learned' },
    ],
    links: { medium: null, live: 'https://decode--samitaprakash.replit.app', source: `${GH}/vibe-coding/vibe-coding-showcase-source-of-truth.md` },
    heroImg: { id: 'hero', label: 'Montage / hero still', w: 1600, h: 900 },
    overview: {
      problem:
        "I'm a product designer with an HCI Master's — and until March 2026, I had never shipped a line of code. In a market where AI startups want designers who can sit in the codebase with engineers, that was a gap. Wireframes weren't going to prove I could build. So I made a public commitment on X: ship a new, working AI tool every couple of days, in the open, and write down what I learned. No tutorials-for-show — real tools solving real problems I personally had.",
      insight: {
        quote: "AI interfaces can't be designed statically. The feel of a voice interaction, the pacing of a streamed response, the trust signals in an agent's output — these only become real when you build them.",
        by: 'The thesis of the whole challenge',
      },
      context:
        "Each build paired a real personal pain with exactly one new technical concept to learn: APIs (Maison), how models differ (Decode), databases (Loop), real-time voice + OAuth (Ponder), combining skills (Prep), browser extensions (Loop Capture), and game loops (Artemis). Eight days, eight concepts, eight shipped things — and a body of proof that grows in public.",
    },
    decisions: [
      { title: 'Build to think, not to demo', body: "Every project forced a real interaction-design decision in the first hour — not color or layout, but how a human should meet AI output. When should the system speak versus display text? When does a loading state need to feel like thinking rather than just waiting? When does more information help, and when does it overwhelm? Those questions don't surface in Figma; they surface the moment you wire up a real API and feel the latency.", img: { id: 'decision-1', label: 'Annotated UI decision', w: 1200, h: 800 } },
      { title: 'Iteration over perfection', body: "First-generation AI output is never right. Rather than chase a perfect first answer, I designed for cheap correction. The re-prompt box in Prep (\"no rice, something quicker\"), the always-visible side-by-side in Decode, the editable pre-fill in Loop Capture — three different shapes of the same principle: give people a low-friction way to refine, and the imperfect first output stops mattering." },
      { title: 'Meet people inside their existing workflow', body: "Loop as a standalone app is fine. Loop plus a Chrome extension that lives inside the LinkedIn profile you're already looking at is genuinely useful. The best AI tools don't ask you to come to them — they show up where you already are. That's why Day 7 extended Day 4 instead of starting something new." },
      { title: 'Treat emotional state as a real input', body: "Haru asks how you feel before it plans your day, and 'overwhelmed' actually reduces the task count and widens time buffers — not just the color scheme. Ponder returns a one-word mood alongside your action items. Emotion isn't decoration here; it's functional data that changes what the interface does." },
    ],
    gallery: [
      { id: 'ponder', label: 'Ponder — voice → structured output', w: 900, h: 1600, caption: 'Ponder: hold-to-talk voice brain dump' },
      { id: 'decode', label: 'Decode — side-by-side models', w: 1600, h: 1000, caption: 'Decode: GPT-4o vs Claude, same prompt' },
      { id: 'haru', label: 'Haru — mood → day plan', w: 900, h: 1600, caption: 'Haru: mood-first daily planner' },
      { id: 'loop-capture', label: 'Loop Capture — Chrome extension', w: 1200, h: 900, caption: 'Loop Capture: LinkedIn → follow-up' },
    ],
    process: {
      steps: ['Pick a real personal pain', 'Choose one new concept', 'Build in ~3 hours', 'Ship + post on X', 'Log the decisions'],
      artifacts: [{ id: 'x-posts', label: 'X posts + engagement grid', w: 1400, h: 900, caption: 'Building in public, every day' }],
      role: 'Solo — ideation, design, build, ship, and write-up for all eight. No team, no handoff; just a designer with an idea in the morning and a working, deployed tool by the evening.',
      outcome:
        "The challenge worked as proof. A founder DMed me on X the day I posted Decode, asking to meet about a role. The Smallest.ai team reposted Ponder after their hackathon. Decode is live and usable at a public URL. More importantly, the body of work shows — not tells — that I can take a feature from a vague idea to a shipped, working AI interface in hours, and explain every decision along the way.",
      learnings: [
        'The strongest ideas came from genuine personal pain — the weakest from building “to learn a concept” in the abstract.',
        'Voice input isn’t a gimmick; for brain-dumps and quick capture it’s the difference between doing the thing and not.',
        'Shipping in public compounds — each post built an audience that turned into real conversations and a job lead.',
      ],
    },
  },
  {
    id: 'skan-ai', n: '02', name: 'Skan AI',
    subtitle: 'Making AI agent systems legible',
    meta: 'Skan AI · Menlo Park, CA · Aug–Nov 2025 · Contract, working directly with the founder',
    accent: '#2d89c7',
    hero: 'AI agents are invisible by default. My job was to make them understandable.',
    lede: "An enterprise AI startup needed to pitch a Large Process Model to investors. I translated 49 technical concepts into a deck that went into the room with Insight Partners.",
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
        "Skan AI builds agentic process intelligence for the Fortune 500. Their core technology is a Large Process Model — a multimodal vision-language system that learns enterprise workflows by watching how humans do them, then deploys AI agents to do the same work, with self-correction and KPI-driven optimization. The technology is genuinely deep. But the people who needed to understand it — investors, enterprise buyers, partners — needed to get it in 30 seconds, not 30 minutes. The pitch slides looked like engineering schematics: dense, accurate, hierarchical, and impossible to parse at a glance. The story was buried under the very complexity that made it worth telling.",
      insight: { quote: 'Same information, different audience. That is the entire job.', by: 'The translation problem, in one line' },
      context:
        "I came in as the sole designer across two engagements: first a comprehensive redesign of the founder's pitch deck, then a rebuild of the investor deck used in a real pitch to Insight Partners. This is the only paid AI work in my portfolio and the proof point that the rest of it translates to a real company with real stakes. The work is under NDA, so it's shown here as abstracted principles rather than literal slides.",
    },
    decisions: [
      { title: 'Workflow as narrative, not architecture', body: "Engineers default to architecture diagrams — boxes and arrows showing what's inside the system. But a stakeholder doesn't need to know what's inside; they need to know what it does for them. I reframed the schematics as sequential narratives: first the agent observes X, then it recognizes Y, then it recommends Z. Same information, completely different framing — and suddenly a slide that took five minutes to decode reads in ten seconds.", img: { id: 'decision-1', label: 'Narrative reframing diagram', w: 1400, h: 800 } },
      { title: 'Editability is a deliverable, not a nicety', body: "The founder's rule was explicit: never flatten, never group, never join images so they can't be edited. Every slide shipped as fully separable elements he could re-type, re-layout, and animate minutes before walking into a room. It sounds like a boring constraint; it's actually what lets a founder trust a designer at pitch speed." },
      { title: 'Push back when the data lies', body: "On the ACV growth chart, showing the 110M figure to-scale would have visually erased every historical number that built the story. I flagged it and proposed scaling only through 2025 instead. That's the difference between a contractor who executes and a collaborator a founder keeps coming back to — design judgment, offered before being asked." },
      { title: 'Translate without dumbing down', body: "Multimodal VLMs, GRPO-based reasoning pretraining, LLM-as-judge evaluation, exception handling — I didn't need to build any of it, but I had to preserve every technical term and connector relationship while making the whole thing legible. Forty-nine concepts in a single diagram stayed accurate and became readable. Accuracy was the constraint; legibility was the deliverable." },
    ],
    gallery: [
      { id: 'maturity-model', label: 'Customer maturity model (5-stage)', w: 1600, h: 700, caption: 'Process Excellence → Agentic AI' },
      { id: 'architecture', label: 'Architecture diagram → editable slide', w: 1600, h: 1000, caption: '49 concepts, made legible' },
      { id: 'iconography', label: 'Custom agent-action iconography', w: 1200, h: 800, caption: 'A consistent visual language across 50+ slides' },
    ],
    beforeAfter: { label: 'The translation', before: { id: 'before', label: 'Engineering schematic (dense)', w: 1200, h: 800 }, after: { id: 'after', label: 'Investor narrative (clear)', w: 1200, h: 800 } },
    process: {
      steps: ['Raw Draw.io / 19-slide deck', 'Restructure the narrative', 'Rebuild + custom iconography', 'Founder review', 'Insight Partners deck — 41 slides'],
      artifacts: [{ id: 'timeline', label: '24-hour turnaround timeline', w: 1400, h: 500, caption: 'Raw materials → investor-ready in two days' }],
      role: "Sole designer, working async and direct with the founder (Avinash Misra) and Manish Garg — WhatsApp, Zoom, tight feedback loops, no committees. I matched the founder's working style: brief, fast, action-oriented. The hardest single task was converting four dense Draw.io architecture SVGs into editable, professional PowerPoint slides while renaming every “Large Action Model” to “Large Process Model” without breaking a single relationship.",
      outcome:
        "The deck I designed went into a real pitch meeting with Insight Partners — one of the most prominent venture firms in enterprise software. Forty-one investor-ready slides, from raw materials to delivered, in 48 hours. The founder kept coming back; the engagement opened a second body of work, and the door is still open. The metric that matters isn't hours billed — it's that real work, for a real company, went into the room with investors.",
      learnings: [
        'The same AI capability reads as “powerful” or “confusing” depending entirely on how it’s presented.',
        'Making complex systems legible to non-technical decision-makers is the core skill of AI product design.',
        'Speed and quality aren’t opposites at this scale of work — they’re the same thing.',
      ],
    },
  },
  {
    id: 'playwise', n: '03', name: 'Playwise',
    subtitle: 'An LMS for a play-based pedagogy',
    meta: 'INST776 Capstone · UMD · 2024–2025 · Client: Dr. Caro Williams-Pierce · Team of 5',
    accent: '#4e9130',
    hero: 'Canvas is “awful and inexcusable” for play-based learning. A real professor said that. So we designed the replacement.',
    lede: "A two-semester, five-sprint capstone designing a mobile-first Learning Management System for the Read-Watch-Play pedagogy — for a real client, ending in a development-ready handoff.",
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
        "Read-Watch-Play (RWP) is a pedagogy created by Dr. Caro Williams-Pierce at the University of Maryland. It restructures a course week into three phases — Read (engage with material), Watch (observe demonstrations), and Play (hands-on experimentation, worth 3× the points). It treats failure as informative, gives students autonomy, and makes play serious learning even in rigorous STEM courses. 9+ courses at UMD run on it. The problem: Canvas was never built for it. It's linear, rigid, and grade-focused, so instructors hack it together — building Miro boards, Figma files, and external playlists just to plan a single week.",
      insight: { quote: '"I am a visual planner and Canvas doesn’t support this. I always have to create Miro boards, Figma, and outsource. Grading is awful and inexcusable — I can’t see one student’s submissions in one place."', by: 'Prof. Anat Sevilla, RWP instructor (interview notes I took)' },
      context:
        "This was a real client engagement, not a class exercise — Dr. Caro has real courses running RWP, and our work was handed off for development. Across five sprints we ran the full design lifecycle for two distinct-but-equivalent user types, coordinating with a parallel Master of Information Management team handling the database and backend. It's the most complete end-to-end project in my portfolio.",
    },
    decisions: [
      { title: 'Mobile-first — for an LMS', body: "Every other LMS assumes a desktop. But students actually engage with course material on their phones — between classes, on the commute, in bed before sleep. RWP's three clear phases map unusually well to a phone because they reduce a week down to three legible actions. Designing mobile-first wasn't a constraint here; it matched how students really learn.", img: { id: 'decision-1', label: 'Mobile R-W-P navigation', w: 900, h: 1600 } },
      { title: 'Two experiences, one product', body: "A core RWP principle is that students and instructors should have equivalent experiences. That created a real design tension — an instructor needs planning, content creation, and grading; a student needs navigation, submission, and progress. We designed both views simultaneously so a grading interface and a learning interface still feel like the same product." },
      { title: 'Visual planning, built in', body: "The most unexpected research finding was that the instructors' biggest pain wasn't the student-facing side — it was course creation. Prof. Anat was outsourcing planning to Miro and Figma every single week. So we made non-linear, visual course planning native to the LMS, and it changed the project's direction." },
    ],
    gallery: [
      { id: 'rwp-cycle', label: 'Read · Watch · Play (1-1-3 pts)', w: 1600, h: 700, caption: 'The pedagogy, mapped to the UI' },
      { id: 'student', label: 'Student view — quests & XP', w: 900, h: 1600, caption: 'Choose-Your-Own assignments, gamified progress' },
      { id: 'instructor', label: 'Instructor view — visual planner', w: 1400, h: 1000, caption: 'Plan a week without leaving the LMS' },
    ],
    beforeAfter: { label: 'Canvas → Playwise', before: { id: 'before', label: 'Canvas, hacked for RWP', w: 1200, h: 800 }, after: { id: 'after', label: 'Playwise, purpose-built', w: 1200, h: 800 } },
    process: {
      steps: ['Background research', 'Stakeholder interviews', 'Competitive analysis', 'Personas & journeys', 'Lo-fi → hi-fi', 'User testing', 'Client handoff'],
      artifacts: [{ id: 'journey-map', label: 'Journey map / persona', w: 1400, h: 900, caption: 'Research artifacts from the empathize sprint' }],
      role: "Primary designer on a five-person team. I owned the client requirements document (the foundational scope doc), facilitated and took notes for the key stakeholder interviews, coordinated the cross-team meeting with the technical MIM team, created the “Playwise” visual identity and brand, and built the hi-fi mobile-first prototypes for both the student and instructor views.",
      outcome:
        "We delivered a development-ready design system and functional mobile-first prototypes across five sprints, with a formal handoff to Dr. Caro, the co-PI professors, and the parallel technical team. The deliverable wasn't a class project that ends at the critique — it was a design built to be implemented for courses real students take.",
      learnings: [
        'Designing for a pedagogy, not a feature list, means translating a teaching philosophy into interaction patterns.',
        'The richest insight came from a stakeholder’s pain we didn’t expect — planning, not delivery.',
        '“Equivalent but different” experiences for two user types is a genuinely hard, rewarding design problem.',
      ],
    },
  },
  {
    id: 'focusbuddy', n: '04', name: 'FocusBuddy',
    subtitle: 'Co-designed with ADHD',
    meta: 'INST704 Inclusive Design · UMD · Fall 2024 · Team: Samita, Ruchica Sinha, Urvi Varma',
    accent: '#b5587e',
    hero: 'Productivity tools are making ADHD worse. We redesigned one from scratch — with the people they’re failing.',
    lede: "A participatory research project that co-designed a low-cognitive-load task app with graduate students who have ADHD — and discovered the problem was emotional, not functional.",
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
        "Graduate students with ADHD don't just struggle with focus — they struggle with tools designed for people who don't. Executive-function difficulties (task initiation, time blindness, emotional regulation) make traditional productivity tools not merely unhelpful but actively harmful: they add cognitive load instead of removing it. Task lists create paralysis. Missed checkboxes create guilt. The tools meant to help quietly become the problem. Rather than design for ADHD users from assumptions, we co-designed with them.",
      insight: { quote: '"Both participants described feeling WORSE after using productivity tools — not better. The guilt of unchecked boxes was more damaging than having no system at all."', by: 'The finding that reframed the entire project' },
      context:
        "We ran participatory design across three rounds with two graduate students with ADHD — contextual interviews, journey and empathy mapping, and a co-design session where they built their own mockups with a custom UI kit. That last session was the breakthrough: their own designs revealed preferences we'd never have guessed from observation, especially the desire for automation they could override.",
    },
    decisions: [
      { title: 'Never punish a missed task', body: "No red overdue badges. No broken streaks. No guilt-inducing language. Missed tasks simply get rescheduled, because the research was unambiguous: guilt doesn't create productivity, it creates avoidance. The single most important design principle of the whole project came directly from the emotional finding — the tool must never make the user feel bad about their productivity.", img: { id: 'decision-1', label: 'No-guilt rescheduling flow', w: 900, h: 1600 } },
      { title: 'Accountability through people, not apps', body: "\"I'm never late for group projects, just for myself.\" Social motivation worked where self-motivation failed, so we built StudyBro — peer-based check-ins and shared study sessions. Instead of another app notification you'll learn to ignore, the accountability comes from a real person who's counting on you." },
      { title: 'Automation you can always override', body: "Smart defaults that adapt to your energy and productive times — but nothing forced. The co-design sessions made this explicit: users with a fraught relationship to productivity tools need to feel in control. Forced automation, however clever, reproduces the exact loss-of-agency that made the old tools feel punishing." },
    ],
    gallery: [
      { id: 'concept-1', label: 'Concept 1 — structure + StudyBro', w: 900, h: 1600, caption: 'Daily dashboard + peer accountability' },
      { id: 'concept-2', label: 'Concept 2 — smart + adaptive', w: 900, h: 1600, caption: 'AI breakdowns, no-guilt reflection' },
      { id: 'codesign', label: 'Co-design DIY screens (P1 & P2)', w: 1400, h: 1000, caption: 'Participants designing their own ideal tool' },
    ],
    process: {
      steps: ['Literature review', 'Round 1 interviews', 'Round 2 journey maps', 'Round 3 co-design', 'Prototyping', 'Testing & gap analysis'],
      artifacts: [{ id: 'affinity', label: 'Affinity / empathy maps', w: 1400, h: 900, caption: 'Thematic analysis across three rounds' }],
      role: "I co-led every phase alongside Ruchica and Urvi. My specific contributions: overdue task management (the no-guilt rescheduling flow), progress tracking and productivity analytics (an app that learns when you're most productive), and customizable notifications inspired by Duolingo's persistent-but-friendly approach — repetitive, but never negative.",
      outcome:
        "We produced two tested concept prototypes, a systematic five-dimension gap analysis (What / Where / When / Who / How), a set of design principles for neuroinclusive productivity, a co-authored Medium article, and a final video presentation. The work proved you can't design a good productivity tool for ADHD by bolting on “accessibility features” — you have to question the foundational interaction model.",
      learnings: [
        'Emotional experience is a design material — the guilt finding changed everything downstream.',
        'Participatory design produces fundamentally different insight than user testing: co-designing WITH people beats designing FOR them.',
        'The principles transfer directly to AI: adapt to user state, stay forgiving, automate with consent.',
      ],
    },
  },
]

// ----------------------------------------------------------------------------
// PROJECTS
// ----------------------------------------------------------------------------
export const PROJECTS = [
  {
    id: 'haru', day: 1, name: 'Haru 春', emoji: '🌸', accent: '#ffd166',
    one: 'A mood-first daily planner that doesn’t assume you wake up feeling the same every day.',
    tools: ['Claude', 'Cursor'], live: null, link: `${GH}/vibe-coding/project-log-01-haru.md`,
    steps: ['A card slides up like an iOS popup', 'Pick one of 5 moods', 'The card flips with a physical 3D animation', 'Your day reshapes — fewer tasks and wider time buffers when you choose “overwhelmed”'],
    decision: 'Mood as functional input, not decoration. The five moods change the actual content — task count, time-buffer estimates, the complexity of the featured task — not just the color scheme. “Overwhelmed” genuinely lowers cognitive load.',
    why: 'This became the seed for a recurring theme across the challenge: emotional state is valid, functional input for an adaptive interface — an idea that also runs straight through the FocusBuddy research.',
    hard: 'My first time ever shipping code. The CSS 3D card-flip took many iterations to feel physically convincing, and an Expo Go incompatibility forced a pivot from React Native to a pure HTML prototype.',
    media: [{ id: 'mood', label: 'Mood selection state', w: 900, h: 1600 }, { id: 'plan', label: 'Flipped day-plan state', w: 900, h: 1600 }],
  },
  {
    id: 'maison', day: 2, name: 'Maison', emoji: '🏠', accent: '#7ccbd6',
    one: 'An AI dream-home generator — describe a vibe, get a luxury concept with a real moodboard.',
    tools: ['Lovable', 'Groq', 'Unsplash'], live: null, link: `${GH}/vibe-coding/project-log-02-maison.md`,
    steps: ['Describe your dream-home vibe in plain language', 'Groq generates a cohesive design concept', 'Unsplash pulls a real moodboard from the concept keywords', 'Results lay out in a luxury editorial grid'],
    decision: 'Real Unsplash photography over AI-generated interiors. AI rooms still hit the uncanny valley, and in a design context where visual quality is the product, real photos feel more trustworthy and aspirational.',
    why: 'A deliberate choice to prioritize user trust over technical novelty — the kind of judgment call that matters more than which model you used.',
    hard: 'My first API integration. I didn’t understand what a “model” even was — I copy-pasted a key without knowing what I was choosing. That exact confusion became the idea for Decode the next day.',
    media: [{ id: 'concept', label: 'Generated concept + moodboard', w: 1600, h: 1000 }],
  },
  {
    id: 'decode', day: 3, name: 'Decode', emoji: '🧩', accent: '#7fbcee',
    one: 'Type any concept, see GPT-4o and Claude explain it side by side — different mental models.',
    tools: ['Replit', 'Claude', 'GPT-4o'], live: 'https://decode--samitaprakash.replit.app', link: `${GH}/vibe-coding/project-log-03-decode.md`,
    steps: ['Type any concept', 'Both models fire simultaneously', 'Compare side by side; expand sub-concepts for definition, example, and “why it matters”', 'Export the session as a clean, textbook-style PDF'],
    decision: 'Side-by-side comparison as the default — never tabs or a toggle. The value isn’t either model’s answer; it’s seeing how they differ. For “prompt engineering,” GPT-4o went broad and conceptual while Claude went tactical. That difference is the product.',
    why: 'Born straight out of Day 2’s confusion about models — and it’s the project that landed a job lead. A founder DMed me on X the day I posted it.',
    hard: 'PDF export was a nightmare — html2pdf wouldn’t render fonts or gradients until I added `await document.fonts.ready` before capture, and a white-on-white badge had to switch from rgba to solid hex.',
    media: [{ id: 'landing', label: 'Landing page', w: 1600, h: 1000 }, { id: 'compare', label: 'Comparison view', w: 1600, h: 1000 }],
  },
  {
    id: 'loop', day: 4, name: 'Loop', emoji: '🔁', accent: '#f7a501',
    one: 'A networking memory assistant — type naturally, it parses, saves, and reminds you to follow up.',
    tools: ['Replit', 'Claude', 'Supabase'], live: null, link: `${GH}/vibe-coding/project-log-04-loop.md`,
    steps: ['Type “just met James at a conf, send my portfolio tomorrow”', 'Claude parses name, context, next action, and due date', 'Confirm the parsed data and save to Supabase', 'The “Today” view shows only what’s due now'],
    decision: 'Natural language over form fields. At an event you think in stories, not in form fields — so the input is one text box you talk into like you’re texting yourself, and the AI does the structuring.',
    why: 'Solved a real pain from my own SF networking — and set up Day 7’s Chrome extension, showing product thinking that spans multiple days instead of isolated demos.',
    hard: 'My first database. I learned Supabase from scratch — tables, columns, and Row Level Security — and wiring the frontend to it was the trickiest part.',
    media: [{ id: 'input', label: 'Natural-language input', w: 900, h: 1600 }, { id: 'today', label: 'Today view', w: 900, h: 1600 }],
  },
  {
    id: 'ponder', day: 5, name: 'Ponder', emoji: '🎙️', accent: '#d98bb0',
    one: 'A voice brain dump — speak freely, get back structured thoughts, action items, and a mood word.',
    tools: ['Smallest.ai', 'Claude', 'Google Calendar'], live: null, link: `${GH}/vibe-coding/project-log-05-ponder.md`,
    steps: ['Hold the orb and speak freely for up to 90 seconds', 'Smallest.ai transcribes in real time', 'Claude returns 3 key thoughts, 1–2 action items, and a one-word mood', 'One tap sends an action item to Google Calendar'],
    decision: 'Hold-to-talk over push-to-start. The physical gesture of holding creates commitment — you talk more openly when your hand is involved — and gives a natural endpoint when you release.',
    why: 'Built at Smallest.ai’s Voice HackSprint 2.0 in three hours. I made the strategic call to drop a planned integration (Vallo.dev, private beta) rather than fake it — two real integrations beat three where one is fake.',
    hard: 'Google Calendar OAuth (Cloud project, credentials, authorized origins, serving from localhost) plus debugging a live WebSocket connection — all under a hard hackathon deadline.',
    media: [{ id: 'record', label: 'Recording state (orb)', w: 900, h: 1600 }, { id: 'result', label: 'Structured result', w: 900, h: 1600 }],
  },
  {
    id: 'prep', day: 6, name: 'prep.', emoji: '🥗', accent: '#84c95e',
    one: 'A voice-first meal planner — tell it what’s in your fridge, get a full day of meals with nutrition.',
    tools: ['Claude', 'Smallest.ai'], live: null, link: `${GH}/vibe-coding/project-log-06-prep.md`,
    steps: ['Say what ingredients you have', 'Claude plans breakfast, lunch, and dinner', 'Get a nutrition verdict — is this enough for a healthy day, or do you need to shop?', 'Re-prompt to refine (“no rice, something quicker”) without starting over'],
    decision: 'The re-prompt box. First-generation AI output is never perfect, so low-friction iteration matters more than a perfect first answer. It’s the most transferable principle of the whole challenge.',
    why: 'Solved a real post-move pain (eating badly, hate cooking) and combined skills from Ponder (voice) and Loop (parsing) into one cohesive tool — proof the pieces were starting to compound.',
    hard: 'Getting Claude to consistently return structured meal plans with accurate nutrition required real iteration on the system prompt.',
    media: [{ id: 'plan', label: 'Meal plan + nutrition', w: 900, h: 1600 }],
  },
  {
    id: 'loop-capture', day: 7, name: 'Loop Capture', emoji: '🧲', accent: '#f2a93c',
    one: 'A Chrome extension that saves any LinkedIn profile to Loop in one click, with AI summaries.',
    tools: ['Claude Code', 'Chrome MV3', 'Supabase'], live: null, link: `${GH}/vibe-coding/project-log-07-loop-capture.md`,
    steps: ['On any LinkedIn profile, click the extension', 'A content script scrapes the page', 'Claude cleans the messy DOM and writes a short summary', 'Add a follow-up — it saves to Loop and creates a Google Calendar task'],
    decision: 'AI-powered data cleaning over brittle selectors. LinkedIn’s class names change constantly, so instead of precise selectors that break next week, I used five fallback scraping strategies and let Claude clean up whatever raw text came back.',
    why: 'Extending an existing project (Loop) instead of starting fresh is ecosystem thinking — the combination is worth more than either piece alone, and it lives inside a workflow you’re already in.',
    hard: 'Chrome Manifest V3 was a whole new paradigm — content scripts, popup, background, and the messaging between them — plus CORS for talking to Supabase from inside an extension.',
    media: [{ id: 'popup', label: 'Extension popup on a profile', w: 1200, h: 900 }],
  },
  {
    id: 'artemis', day: 8, name: 'Artemis II', emoji: '🚀', accent: '#6fb4e8',
    one: 'A Flappy-Bird-style tribute game built to celebrate the Artemis II launch.',
    tools: ['Emergent AI'], live: null, link: `${GH}/vibe-coding/project-log-08-artemis-game.md`,
    steps: ['Tap to fly the capsule upward', 'Dodge the space-debris field', 'Watch the score climb', 'Enjoy space-themed Artemis visuals'],
    decision: 'Tie it to a real-world event happening that day. Building it on the Artemis II launch made a generic Flappy Bird clone feel timely, intentional, and shareable.',
    why: 'Range. Going from voice interfaces to databases to extensions to a game in eight days shows a designer who isn’t intimidated by any technical domain.',
    hard: 'Games are a completely different paradigm — loop-driven (update every frame) versus the event-driven web apps I’d been building all week.',
    media: [{ id: 'gameplay', label: 'Gameplay', w: 1600, h: 1000 }],
  },
]

export const ABOUT = {
  title: 'About Me',
  intro: "Hi — I'm Samita Belliganood, a product designer based in San Francisco with an HCI Master's from the University of Maryland.",
  body: [
    "I design by building. Instead of handing off static Figma files and hoping, I prototype AI interfaces in real code to feel out the interaction before committing to it — voice tools, Chrome extensions, adaptive planners, even a small game. It's not that I want to be an engineer; it's that the qualities that make an AI product good simply don't exist in a static mockup.",
    "My work lives at the intersection of two things people usually treat as opposites: rigorous research and fast building. On one side, three rounds of participatory co-design with ADHD students and a five-sprint LMS capstone delivered to a real client. On the other, a public 60-day challenge shipping AI tools in hours and contract design for an enterprise AI startup whose deck went into an Insight Partners pitch.",
  ],
  howIWork: [
    'Start from a real problem and a real person, never from a feature list.',
    'Prototype in code early — the interaction is the design.',
    'Treat emotional state and trust as functional inputs, not decoration.',
    'Design for cheap iteration over a perfect first output.',
    'Push back with judgment; the best collaborators do.',
  ],
  lookingFor: "I'm looking for a product design role at an early-stage AI startup — somewhere I can own a feature end-to-end, from the first user conversation through shipped, working code.",
}

export const EXPERIENCE = [
  { role: 'Design (Contract)', org: 'Skan AI — Menlo Park', when: 'Aug – Nov 2025', body: 'Translated dense enterprise AI architecture into investor-ready visual narratives. Designed the deck used in a real Insight Partners pitch; the engagement opened a second body of work and the door is still open.' },
  { role: '60-Day Build Challenge', org: 'Self-directed · in public on X', when: '2026 – present', body: 'Shipping a new AI-powered tool every few days. Learned APIs, databases, real-time voice, OAuth, browser extensions, and game development by building — and landed a job lead from a single Day-3 post.' },
  { role: 'UX Designer (Capstone)', org: 'Playwise · UMD + Dr. Caro Williams-Pierce', when: '2024 – 2025', body: 'Primary designer on a five-person team designing a mobile-first LMS for the Read-Watch-Play pedagogy. Owned the requirements doc, brand identity, and hi-fi prototypes; delivered a development-ready handoff.' },
  { role: 'UX Researcher', org: 'FocusBuddy · INST704 Inclusive Design', when: 'Fall 2024', body: 'Participatory research co-designing a low-cognitive-load task app with graduate students who have ADHD, across three rounds of interviews and co-design.' },
]

export const RESUME = {
  title: 'Resume.pdf',
  summary: 'Product designer who prototypes in code. HCI Master’s, University of Maryland. Research depth paired with startup-speed building, focused on AI products.',
  highlights: [
    'Designed an investor deck used in a real Insight Partners pitch (Skan AI)',
    '8 AI tools shipped in 8 days during a public 60-day challenge',
    '5-sprint mobile-first LMS capstone delivered to a real client',
    '3 rounds of participatory ADHD co-design research',
    'Comfortable across APIs, databases, real-time voice, OAuth, and browser extensions',
  ],
}

export const BLOG = PROJECTS.map((p) => ({ id: p.id, title: `Day ${p.day} of building with AI — ${p.name}`, excerpt: p.one, link: p.link }))

export const DESKTOP_ICONS = [
  { id: 'projects', label: 'Projects', emoji: '📁', type: 'projects' },
  { id: 'case-studies', label: 'Case Studies', emoji: '📂', type: 'caseStudies' },
  { id: 'about', label: 'About Me', emoji: '📄', type: 'about' },
  { id: 'experience', label: 'Experience', emoji: '💼', type: 'experience' },
  { id: 'resume', label: 'Resume', emoji: '📝', type: 'resume' },
  { id: 'blog', label: 'Blog', emoji: '📰', type: 'blog' },
  { id: 'games', label: 'Games', emoji: '🎮', type: 'games' },
  { id: 'contact', label: 'Contact', emoji: '✉️', type: 'contact' },
]

export const SEARCH_INDEX = [
  ...CASE_STUDIES.map((c) => ({ kind: 'Case Study', label: c.name, sub: c.subtitle, type: 'caseStudy', payload: c.id })),
  ...PROJECTS.map((p) => ({ kind: 'Project', label: p.name, sub: p.one, type: 'project', payload: p.id })),
  ...BLOG.map((b) => ({ kind: 'Blog', label: b.title, sub: b.excerpt, type: 'blog', payload: null })),
  { kind: 'Page', label: 'About Me', sub: 'Who I am', type: 'about', payload: null },
  { kind: 'Page', label: 'Experience', sub: 'Work & research', type: 'experience', payload: null },
  { kind: 'Page', label: 'Resume', sub: 'Highlights + download', type: 'resume', payload: null },
  { kind: 'Page', label: 'Contact', sub: 'Get in touch', type: 'contact', payload: null },
  { kind: 'Game', label: 'Artemis II — Flappy', sub: 'Fly the capsule through asteroids', type: 'game', payload: 'artemis' },
]
