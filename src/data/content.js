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
    lede: "A public building challenge that turned a designer who'd never shipped code into someone who prototypes AI products end-to-end — and got noticed for it.",
    links: { medium: null, live: 'https://decode--samitaprakash.replit.app', source: `${GH}/vibe-coding/vibe-coding-showcase-source-of-truth.md` },
    snapshot: {
      role: 'Designer & builder (solo)',
      duration: '~6 weeks · ongoing',
      team: 'Solo — design, build, ship, write-up',
      company: 'Personal · in public on X',
      impact: ['8 AI tools shipped', 'Inbound job lead from Day 3', 'Featured by the Smallest.ai team'],
      summary: '"Taught myself to ship AI interfaces by building eight working tools in public — and turned it into real conversations."',
    },
    heroImg: { id: 'hero', label: 'Montage / hero still of the tools', w: 1600, h: 900 },
    execSummary: {
      challenge: "As a designer who had never shipped code, I needed to prove I could build AI products — not just mock them up. The risk: spend weeks polishing one thing nobody sees, or ship small and often in public and learn what actually resonates.",
      metrics: [{ v: '8', l: 'tools shipped in 8 days' }, { v: '12+', l: 'APIs & tools learned' }, { v: '1', l: 'inbound job lead' }],
    },
    execImg: { id: 'exec', label: 'Before → after: empty Figma vs. shipped, live tools', w: 1200, h: 800 },
    problem: {
      intro: "For the roles I want — product design at early-stage AI startups — a Figma portfolio isn't enough. Teams need designers who can sit in the codebase with engineers.",
      quote: 'AI interfaces can’t be designed statically — the feel only becomes real when the thing runs.',
      bullets: ['Static mockups can’t show the feel of a voice or streamed AI interaction.', '“Designs by building” is easy to claim and hard to prove.', 'Learning in private produces no signal and no audience.'],
      note: "If nothing changed, I'd keep being read as “just a designer” in a market that rewards builders.",
    },
    problemImg: { id: 'problem', label: 'Concept map: why static mockups fall short for AI', w: 1400, h: 900 },
    understanding: {
      intro: 'Across eight builds, three patterns made the difference between a tool that felt alive and one that felt like a demo.',
      themes: [
        { title: 'Latency is a design material', body: 'You can’t design a streamed response in a static frame — pacing and “thinking” states only become real wired to a live API.' },
        { title: 'Iteration beats first-output', body: 'AI is wrong on the first try; cheap correction (re-prompt, compare, edit) matters more than a perfect answer.' },
        { title: 'Tools should live where you already are', body: 'The most useful builds extended an existing workflow instead of asking people to come to a new app.' },
      ],
    },
    synthesisImg: { id: 'synthesis', label: 'Synthesis board — patterns across the 8 builds', w: 1500, h: 950 },
    opportunity: {
      intro: 'Three ways to run the challenge:',
      options: [
        { label: 'Option A — one big polished app', note: 'Most impressive single artifact, slowest signal.' },
        { label: 'Option B — many small shipped tools, in public', note: 'Fastest learning + audience. Chosen.' },
        { label: 'Option C — tutorials / clones', note: 'Lowest risk, weakest proof.' },
      ],
      chosen: 'I chose B: ship a real, personal-pain tool every couple of days and write down the decision behind each.',
    },
    opportunityImg: { id: 'opportunity', label: 'Tradeoff sketch: impact vs. speed of signal', w: 1400, h: 850 },
    decisions: [
      { title: 'Build to think, not to demo', body: 'Every project forced a real interaction decision in the first hour — when should the system speak vs. display, when should a loading state feel like thinking. Those surface only when you feel the real latency.', img: { id: 'decision-1', label: 'Annotated interaction decision', w: 1200, h: 850 } },
      { title: 'Design for cheap iteration', body: 'The re-prompt box (Prep), the always-visible compare (Decode), the editable pre-fill (Loop Capture) — three shapes of one idea: give people a low-friction way to refine.', img: { id: 'decision-2', label: 'Re-prompt / compare patterns', w: 1200, h: 850 } },
      { title: 'Meet people inside their workflow', body: 'Loop as an app is fine; Loop as a Chrome extension living inside the LinkedIn profile you’re already on is genuinely useful. Day 7 extended Day 4 on purpose.', img: { id: 'decision-3', label: 'Loop → Loop Capture ecosystem', w: 1200, h: 850 } },
    ],
    collaboration: {
      body: 'A solo build, but never in a vacuum — the “team” was the audience, in public, every day.',
      points: ['Posted every build with the honest hard parts, not just the wins.', 'Replies from founders and engineers directly shaped later builds.', 'A founder’s DM after Day 3 (Decode) turned the feed into a real conversation about a role.'],
    },
    collabImg: { id: 'collab', label: 'X thread + replies from founders/engineers', w: 1400, h: 900 },
    launch: {
      title: 'Shipping in public',
      intro: 'Each tool followed the same tight release loop:',
      phases: [{ label: 'Build', note: '~3 hrs, one new concept' }, { label: 'Ship', note: 'deploy + record a demo' }, { label: 'Post', note: 'X write-up with the decision' }],
    },
    launchImg: { id: 'launch', label: 'Timeline of the 8 daily ships', w: 1500, h: 520 },
    results: {
      cards: [{ v: '8', l: 'tools shipped' }, { v: '1', l: 'job lead (Day 3)' }, { v: 'Live', l: 'public demo — Decode' }, { v: 'Repost', l: 'by the Smallest.ai team' }],
      note: 'Qualitative by design — the goal was proof and signal, not product metrics.',
    },
    resultsImg: { id: 'results', label: 'Engagement grid across the daily posts', w: 1500, h: 900 },
    learnings: [
      'The strongest ideas came from genuine personal pain — the weakest from building “to learn a concept”.',
      'Voice input isn’t a gimmick; for capture it’s the difference between doing the thing and not.',
      'Shipping in public compounds — each post built an audience that became real conversations.',
    ],
    reflection: "I'd add lightweight analytics from day one to see which tools people actually opened, and turn the two strongest (Loop, Ponder) into maintained products rather than demos.",
  },
  {
    id: 'skan-ai', n: '02', name: 'Skan AI',
    subtitle: 'Making AI agent systems legible',
    meta: 'Skan AI · Menlo Park, CA · Aug–Nov 2025 · Contract, working directly with the founder',
    accent: '#2d89c7',
    hero: 'AI agents are invisible by default. My job was to make them understandable.',
    lede: 'An enterprise AI startup needed to pitch a Large Process Model to investors. I translated 49 technical concepts into a deck that went into the room with Insight Partners.',
    links: { medium: null, live: null, source: `${GH}/skan-ai/skan-ai-source-of-truth.md` },
    snapshot: {
      role: 'Product / visual designer (contract)',
      duration: '~3 months (Aug–Nov 2025)',
      team: 'Direct with the founder + a second stakeholder',
      company: 'Skan AI · Menlo Park, CA',
      impact: ['Deck used in an Insight Partners pitch', '41 investor-ready slides in 48 hrs', 'Return engagement secured'],
      summary: '"Translated a Large Process Model’s architecture into investor-ready slides — the deck went into a real Insight Partners pitch."',
    },
    heroImg: { id: 'hero', label: 'Abstracted hero visual (NDA-safe)', w: 1600, h: 900 },
    execSummary: {
      challenge: 'Skan’s technology is genuinely deep, but investors needed to grasp it in 30 seconds. The pitch slides read like engineering schematics — accurate, dense, and impossible to parse at a glance — so the story was lost under the complexity that made it worth telling.',
      metrics: [{ v: '49+', l: 'concepts in one diagram' }, { v: '48 hrs', l: 'to a 41-slide deck' }, { v: '50+', l: 'slides redesigned' }],
    },
    beforeAfter: { label: 'Engineering schematic → investor narrative', before: { id: 'before', label: 'Dense engineering schematic', w: 1200, h: 800 }, after: { id: 'after', label: 'Clear investor narrative', w: 1200, h: 800 } },
    problem: {
      intro: 'For a fundraising company the deck isn’t decoration — it’s the instrument. If investors can’t follow the story in seconds, the round gets harder.',
      quote: 'Same information, different audience. That is the entire job.',
      bullets: ['Architecture slides looked like engineering docs, not a narrative.', 'The strongest proof points were buried under technical density.', 'Every edit risked breaking the founder’s ability to iterate live.'],
      note: 'If nothing changed, a strong technology would keep under-selling itself in the room.',
    },
    problemImg: { id: 'problem', label: 'Comprehension funnel (NDA-safe, abstracted)', w: 1400, h: 900 },
    understanding: {
      intro: 'Working directly with the founder, three things became clear about what the deck needed.',
      themes: [
        { title: 'Comprehension in seconds', body: 'Investors needed the “what it does for me” before the “how it works”.' },
        { title: 'Accuracy is non-negotiable', body: '49+ real technical concepts had to stay correct — legible, never dumbed down.' },
        { title: 'Live editability', body: 'The founder edits up to the moment he walks in; nothing could be flattened or grouped.' },
      ],
    },
    synthesisImg: { id: 'synthesis', label: 'Notes from founder feedback loops', w: 1500, h: 950 },
    opportunity: {
      intro: 'Three directions for the work:',
      options: [
        { label: 'Option A — light cleanup', note: 'Fastest, but schematics stay schematics.' },
        { label: 'Option B — narrative rebuild + editable architecture', note: 'Highest impact. Chosen.' },
        { label: 'Option C — net-new visual system', note: 'Most polished, too slow for the pitch timeline.' },
      ],
      chosen: 'We chose B: reframe workflows as narrative and convert the dense diagrams into fully editable, professional slides.',
    },
    opportunityImg: { id: 'opportunity', label: 'Scope tradeoff: impact vs. timeline', w: 1400, h: 850 },
    decisions: [
      { title: 'Workflow as narrative, not architecture', body: 'Stakeholders don’t need what’s inside the system; they need what it does for them. I reframed boxes-and-arrows into sequences: first the agent observes X, then recognizes Y, then recommends Z.', img: { id: 'decision-1', label: 'Narrative reframing diagram', w: 1400, h: 800 } },
      { title: 'Editability is a deliverable', body: 'Every slide shipped as separable elements — no flattened images, no grouped objects — so the founder could re-type, re-layout, and animate minutes before a pitch.', img: { id: 'decision-2', label: 'Editable element breakdown', w: 1400, h: 800 } },
      { title: 'Push back when the data lies', body: 'A to-scale ACV chart would have visually erased the historical numbers that built the story. I flagged it and proposed scaling only through 2025 — judgment offered before being asked.', img: { id: 'decision-3', label: 'ACV chart, rescaled', w: 1400, h: 800 } },
    ],
    collaboration: {
      body: 'Async and direct — WhatsApp, Zoom, terse feedback, fast loops. I matched the founder’s brisk, action-oriented style.',
      points: ['Tight feedback loops: one change at a time, confirmed before moving on.', 'Pushed back on the ACV chart and proposed a clearer alternative.', 'Handed off to a second stakeholder “on priority” — a direct trust signal.'],
    },
    collabImg: { id: 'collab', label: 'Founder feedback thread (abstracted)', w: 1400, h: 900 },
    launch: {
      title: 'Delivery',
      intro: 'The work shipped in tight, high-stakes passes:',
      phases: [{ label: 'Pass 1', note: 'Pitch-deck redesign with the founder' }, { label: 'Pass 2', note: '4 architecture SVGs → editable slides' }, { label: 'Pass 3', note: 'Insight Partners deck — 41 slides / 48 hrs' }],
    },
    launchImg: { id: 'launch', label: '24-hour turnaround timeline', w: 1500, h: 520 },
    results: {
      cards: [{ v: 'Insight', l: 'Partners pitch used the deck' }, { v: '48 hrs', l: 'raw → 41 slides' }, { v: '49+', l: 'concepts made legible' }, { v: 'Open', l: 'door for more work' }],
      note: 'Under NDA — shown as abstracted principles. The metric that matters is the named outcome, not hours billed.',
    },
    resultsImg: { id: 'results', label: 'Before/after slide pair (abstracted)', w: 1500, h: 900 },
    learnings: [
      'The same AI capability reads as “powerful” or “confusing” depending entirely on presentation.',
      'Making complex systems legible to non-technical decision-makers is the core skill of AI product design.',
      'At this scale of work, speed and quality are the same thing, not opposites.',
    ],
    reflection: "I'd close the loop by asking for the funding outcome, and propose a small reusable slide system so the founder isn't dependent on me for the next deck.",
  },
  {
    id: 'playwise', n: '03', name: 'Playwise',
    subtitle: 'An LMS for a play-based pedagogy',
    meta: 'INST776 Capstone · UMD · 2024–2025 · Client: Dr. Caro Williams-Pierce · Team of 5',
    accent: '#4e9130',
    hero: 'Canvas is “awful and inexcusable” for play-based learning. A real professor said that. So we designed the replacement.',
    lede: 'A two-semester, five-sprint capstone designing a mobile-first LMS for the Read-Watch-Play pedagogy — for a real client, ending in a development-ready handoff.',
    links: { medium: null, live: null, source: `${GH}/playwise/playwise-source-of-truth.md` },
    snapshot: {
      role: 'Primary designer (capstone)',
      duration: '2 semesters · 5 sprints (2024–2025)',
      team: 'Team of 5 + parallel technical (MIM) team',
      company: 'UMD capstone · Client: Dr. Caro Williams-Pierce',
      impact: ['Development-ready handoff delivered', 'Student + instructor views designed', 'Brand identity (“Playwise”) created'],
      summary: '"Designed a mobile-first LMS for the Read-Watch-Play pedagogy across five sprints, ending in a development-ready handoff."',
    },
    heroImg: { id: 'hero', label: 'Student + instructor views side by side', w: 1600, h: 900 },
    execSummary: {
      challenge: 'Read-Watch-Play runs 9+ courses at UMD, but Canvas was never built for it. Instructors hack together Miro, Figma, and Canvas to plan a single week, and students fight rigid, linear navigation.',
      metrics: [{ v: '5', l: 'sprints' }, { v: '2', l: 'user types' }, { v: '9+', l: 'courses use RWP' }],
    },
    beforeAfter: { label: 'Canvas, hacked → Playwise, purpose-built', before: { id: 'before', label: 'Canvas hacked for RWP', w: 1200, h: 800 }, after: { id: 'after', label: 'Playwise, purpose-built', w: 1200, h: 800 } },
    problem: {
      intro: 'When the pedagogy is great but the platform fights it, the work falls on instructors — and the experience degrades for everyone.',
      quote: '"Grading is awful and inexcusable. I always have to outsource to Miro and Figma." — Prof. Anat Sevilla',
      bullets: ['Instructors outsourced course planning to external tools every week.', 'Grading was scattered — no single view of one student’s work.', 'Students valued RWP’s clarity but struggled with Canvas’s rigidity.'],
      note: 'Left unchanged, RWP’s adoption stays capped by the platform’s friction.',
    },
    problemImg: { id: 'problem', label: 'Instructor journey map (planning pain)', w: 1400, h: 900 },
    understanding: {
      intro: 'Through stakeholder interviews, a student focus group, and competitive analysis, three themes emerged.',
      themes: [
        { title: 'Planning is the real pain', body: 'The biggest friction wasn’t the student app — it was course creation.' },
        { title: 'Students learn on phones', body: 'Materials are consumed between classes and before bed, not at a desk.' },
        { title: 'Equivalent, not identical', body: 'RWP asks for equivalent student/instructor experiences with different jobs.' },
      ],
    },
    synthesisImg: { id: 'synthesis', label: 'Affinity map / persona board', w: 1500, h: 950 },
    opportunity: {
      intro: 'Three directions, scoped with the client:',
      options: [
        { label: 'Option A — student app only', note: 'Fastest, ignores the real pain.' },
        { label: 'Option B — both views + native visual planning', note: 'Highest impact. Chosen.' },
        { label: 'Option C — a Canvas plugin', note: 'Lowest effort, inherits Canvas’s limits.' },
      ],
      chosen: 'We chose B: design both views mobile-first, with visual course planning built into the platform.',
    },
    opportunityImg: { id: 'opportunity', label: 'Opportunity map with the client', w: 1400, h: 850 },
    decisions: [
      { title: 'Mobile-first — for an LMS', body: 'Students engage on phones between classes and before bed. RWP’s three clear phases reduce a week to three legible actions, which works unusually well on mobile.', img: { id: 'decision-1', label: 'Mobile R-W-P navigation', w: 900, h: 1600 } },
      { title: 'Two experiences, one product', body: 'Students and instructors should have equivalent experiences. We designed both views together so a grading interface and a learning interface still feel like the same product.', img: { id: 'decision-2', label: 'Student vs instructor parity', w: 1400, h: 950 } },
      { title: 'Visual planning, built in', body: 'Responding to the planning pain, we made non-linear, visual course planning native to the LMS — no more weekly tool-switching to Miro and Figma.', img: { id: 'decision-3', label: 'Native visual course planner', w: 1400, h: 950 } },
    ],
    collaboration: {
      body: 'A five-person design team, a parallel technical (MIM) team, and a real client over two semesters.',
      points: ['Owned the client requirements doc that scoped the whole project.', 'Coordinated design with the MIM team so XP/quest features stayed feasible.', 'Ran feedback loops with Dr. Caro and co-PI professors each sprint.'],
    },
    collabImg: { id: 'collab', label: 'Cross-team coordination board', w: 1400, h: 900 },
    launch: {
      title: 'Rollout & Handoff',
      intro: 'Five sprints, empathize → handoff:',
      phases: [{ label: 'Sprints 1–2', note: 'Research, IA, lo-fi' }, { label: 'Sprints 3–4', note: 'Hi-fi, design system, brand' }, { label: 'Sprint 5', note: 'Testing + dev-ready handoff' }],
    },
    launchImg: { id: 'launch', label: '5-sprint timeline', w: 1500, h: 520 },
    results: {
      cards: [{ v: '5', l: 'sprints delivered' }, { v: '2', l: 'views handed off' }, { v: 'Dev-ready', l: 'design system' }, { v: '9+', l: 'courses on RWP' }],
      note: 'An academic client project — outcomes are deliverables and handoff readiness, not production metrics.',
    },
    resultsImg: { id: 'results', label: 'Final hi-fi screens', w: 1500, h: 900 },
    learnings: [
      'Designing for a pedagogy, not a feature list, means translating a philosophy into interaction patterns.',
      'The richest insight came from a stakeholder pain we didn’t expect — planning, not delivery.',
      '“Equivalent but different” experiences for two user types is a genuinely hard, rewarding problem.',
    ],
    reflection: "I'd test with students during the semester (not just retrospectively) and build a partial working prototype to validate the visual planner in real use.",
  },
  {
    id: 'focusbuddy', n: '04', name: 'FocusBuddy',
    subtitle: 'Co-designed with ADHD',
    meta: 'INST704 Inclusive Design · UMD · Fall 2024 · Team: Samita, Ruchica Sinha, Urvi Varma',
    accent: '#b5587e',
    hero: 'Productivity tools are making ADHD worse. We redesigned one from scratch — with the people they’re failing.',
    lede: 'A participatory research project that co-designed a low-cognitive-load task app with graduate students who have ADHD — and found the real problem was emotional, not functional.',
    links: { medium: null, live: null, source: `${GH}/focusbuddy/focusbuddy-source-of-truth.md` },
    snapshot: {
      role: 'UX researcher & designer (co-led)',
      duration: '1 semester · Fall 2024',
      team: 'Team of 3',
      company: 'UMD · INST704 Inclusive Design',
      impact: ['3 rounds of participatory co-design', '2 concepts tested with participants', 'Neuroinclusive principles defined'],
      summary: '"Co-designed a low-cognitive-load task app with ADHD grad students — and found the real problem was emotional, not functional."',
    },
    heroImg: { id: 'hero', label: 'Research-finding hero visual', w: 1600, h: 900 },
    execSummary: {
      challenge: 'Productivity tools assume neurotypical focus. For graduate students with ADHD they add cognitive load and, worse, guilt — quietly becoming the problem they were meant to solve.',
      metrics: [{ v: '3', l: 'co-design rounds' }, { v: '2', l: 'concepts tested' }, { v: '7', l: 'user flows' }],
    },
    execImg: { id: 'exec', label: 'The guilt finding, visualized', w: 1200, h: 800 },
    problem: {
      intro: 'Traditional task tools fail ADHD users in a specific way you can feel — and it compounds.',
      quote: '"Both participants felt WORSE after using productivity tools — the guilt was more damaging than no system at all."',
      bullets: ['Task lists create paralysis, not clarity.', 'Missed checkboxes generate guilt that compounds avoidance.', 'Elaborate personal workarounds become their own source of overwhelm.'],
      note: 'Left unaddressed, the “help” keeps making things worse.',
    },
    problemImg: { id: 'problem', label: 'Journey map of the guilt cycle', w: 1400, h: 900 },
    understanding: {
      intro: 'Across interviews, journey mapping, and a co-design session, three themes emerged.',
      themes: [
        { title: 'Guilt, not features', body: 'The emotional cost of the tools outweighed their function — the most important finding.' },
        { title: 'Social beats self', body: '“I’m never late for group projects, just for myself.” External accountability worked.' },
        { title: 'Control over automation', body: 'They wanted smart help they could always override — forced automation felt punishing.' },
      ],
    },
    synthesisImg: { id: 'synthesis', label: 'Affinity / empathy maps', w: 1500, h: 950 },
    opportunity: {
      intro: 'Two concept directions to test against the guilt finding:',
      options: [
        { label: 'Concept 1 — structure + StudyBro', note: 'Daily dashboard + peer accountability.' },
        { label: 'Concept 2 — smart + adaptive', note: 'AI breakdowns + no-guilt reflection.' },
      ],
      chosen: 'Rather than pick one early, we prototyped both and tested them directly against the emotional finding.',
    },
    opportunityImg: { id: 'opportunity', label: 'Two concepts, mapped to needs', w: 1400, h: 850 },
    decisions: [
      { title: 'Never punish a missed task', body: 'No red badges, no broken streaks, no guilt language — missed tasks just reschedule. Guilt doesn’t create productivity; it creates avoidance.', img: { id: 'decision-1', label: 'No-guilt rescheduling flow', w: 900, h: 1600 } },
      { title: 'Accountability through people', body: 'Social motivation worked where self-motivation failed, so we built StudyBro — peer check-ins instead of another ignorable notification.', img: { id: 'decision-2', label: 'StudyBro peer check-ins', w: 900, h: 1600 } },
      { title: 'Automation you can override', body: 'Smart defaults that adapt to energy, but nothing forced. Users with a fraught relationship to these tools need to feel in control.', img: { id: 'decision-3', label: 'Adaptive, overridable defaults', w: 900, h: 1600 } },
    ],
    collaboration: {
      body: 'Participatory design — we co-designed with users, not for them.',
      points: ['Participants built their own mockups with a custom UI kit (the breakthrough session).', 'Three-person team with equal contribution across research, synthesis, and design.', 'The emotional finding reframed the whole team’s direction mid-project.'],
    },
    collabImg: { id: 'collab', label: 'Co-design session artifacts', w: 1400, h: 900 },
    launch: {
      title: 'Testing & Validation',
      intro: 'We validated the concepts against the core finding:',
      phases: [{ label: 'Prototype', note: 'Two concepts, 7 flows' }, { label: 'Test', note: 'Sessions with P1 & P2' }, { label: 'Synthesize', note: '5-dimension gap analysis' }],
    },
    launchImg: { id: 'launch', label: 'Testing + gap-analysis summary', w: 1500, h: 520 },
    results: {
      cards: [{ v: '2', l: 'concepts tested' }, { v: '5-dim', l: 'gap analysis' }, { v: 'Principles', l: 'for neuroinclusive design' }, { v: '1', l: 'Medium article + video' }],
      note: 'A research project — outcomes are validated concepts and transferable principles, not production metrics.',
    },
    resultsImg: { id: 'results', label: 'Design principles + tested concepts', w: 1500, h: 900 },
    learnings: [
      'Emotional experience is a design material — the guilt finding changed everything downstream.',
      'Co-designing WITH people produces fundamentally different insight than testing FOR them.',
      'The principles transfer directly to AI: adapt to state, stay forgiving, automate with consent.',
    ],
    reflection: "I'd recruit more participants beyond a narrow demographic, and build a working prototype to test whether the design actually lowers cognitive load over weeks, not minutes.",
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
