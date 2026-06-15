# PROMPT FOR REPLIT: Build the Playwise Case Study Page

## Context
I'm building a case study page for my UX portfolio. I'll upload a source-of-truth markdown document with ALL the project details. But the case study page itself needs to grab attention in the first 10 seconds and redirect anyone who wants depth to the Medium article. Think product landing page, not research report.

My mentor's feedback: "10s hooks. Redirect them to Medium if they want to read more. Show conversions/retention — how much revenue did this feature bring in."

This is an academic project so there are no revenue metrics. But we CAN frame impact through: real client handoff (this is being built), real user pain points with quotes, scope of research (5 sprints, multiple stakeholders), and design decisions that solved measurable problems.

## Design direction
- Clean, modern, mobile-friendly
- Split-screen layout on desktop: Figma prototype fixed on the left, content scrolls on the right
- On mobile: prototype becomes a dedicated section, content scrolls below
- Font: DM Sans
- Color palette: playful but professional — soft greens, warm yellows, clean whites. This is an education/play project, it should feel approachable and alive, not corporate.
- Scroll-reveal animations (fade up, subtle)

## Page structure

### 1. FULL-WIDTH HERO (the 10-second hook)

**Big headline:** "Canvas is 'awful and inexcusable' for play-based learning. A real professor said that. So we designed the replacement."

**Below the headline, 4 impact metrics in a horizontal row:**

| Metric | Value | Label |
|--------|-------|-------|
| Sprints | 5 | of research → design → testing |
| User types | 2 | designed simultaneously (student + instructor) |
| Courses supported | 9+ | across UMD using this pedagogy |
| Outcome | Handoff | development-ready design delivered to client |

These aren't revenue metrics, but framed as scope and real-world impact they demonstrate professional-grade work.

**Small context line:** "INST776 Graduate Capstone · University of Maryland · 2024–2025 · Client: Dr. Caro Williams-Pierce · Team of 5"

**CTA button right in the hero:** "Read the full research on Medium →" (this is the redirect — put it early so anyone who wants depth can click immediately)

---

### 2. SPLIT-SCREEN LAYOUT (starts after hero)

**LEFT COLUMN (sticky, 40% width):**
- iPhone or laptop frame containing the Figma prototype embed as an iframe
- Placeholder URL: [FIGMA_PROTOTYPE_URL]
- Below the frame: "Interactive prototype — explore student & instructor views"
- The frame stays fixed while right column scrolls

**RIGHT COLUMN (scrollable, 60% width):**

---

**Right section A: THE PROBLEM (punchy, 3 sentences)**

"Read-Watch-Play is a pedagogy that transforms how STEM courses are taught — through reading, observing, then playing. 9+ courses at UMD use it. But Canvas wasn't built for it. Instructors use 4 separate tools just to plan a single week."

---

**Right section B: THE SHARPEST QUOTE (large, pull-quote style)**

Label above: "From Prof. Anat Sevilla, RWP instructor"

> "I am a visual planner and Canvas doesn't support this. I always have to create Miro boards, Figma, and always sort of outsource. Grading is awful and inexcusable."

This is the 10-second hook reinforcement — a REAL professor describing a REAL problem with emotion. Much more compelling than any metric.

---

**Right section C: WHAT IS READ-WATCH-PLAY? (visual explainer)**

A simple 3-step visual showing the R-W-P cycle:

**Read** (1pt) — Engage with material
**Watch** (1pt) — Observe demonstrations
**Play** (3pt) — Hands-on experimentation

Design this as a horizontal flow with icons or colored badges — make the "Play" step visually larger/bolder since it's worth 3x the points and is the heart of the pedagogy. Keep it to ONE visual, not a paragraph of explanation.

Below: "The pedagogy is revolutionary. The platform wasn't. We designed one that matches."

---

**Right section D: WHAT WE DESIGNED (two cards stacked)**

**Card 1: "For Students"**
- Mobile-first course navigation structured around R-W-P phases
- "Choose Your Own" quest-based assignments
- XP-based progress tracking (gamified)
- Integrated play activities (no more switching to external tools)

**Card 2: "For Instructors"**
- Visual course planning (replacing Miro + Figma + Canvas hacks)
- Unified grading view (see all of one student's work in one place)
- Flexible R-W-P content builder
- Student engagement analytics

Each card gets a placeholder for a prototype screenshot.

---

**Right section E: KEY DESIGN DECISIONS (3 cards)**

**"Mobile-first for an LMS"**
"Students access course materials on phones between classes, during commutes, before bed. Every other LMS assumes desktop. We designed for how students actually learn — on the go."

**"Two experiences, one platform"**
"RWP's principle: students and instructors should have equivalent experiences. We designed both views simultaneously — the instructor's planning tools and the student's learning interface feel like the same product."

**"Visual planning built in"**
"Prof. Anat told us she has to outsource to Miro and Figma every week just to plan her courses. We made visual, non-linear course planning native to the LMS — no more tool-switching."

---

**Right section F: THE RESEARCH (compressed timeline + CTA)**

A simple horizontal step indicator:
Background Research → Stakeholder Interviews → Competitive Analysis → Personas & Journeys → Prototyping → User Testing → Client Handoff

ONE paragraph below:
"Across 5 sprints, we interviewed the client, co-PI instructors, and students. We ran competitive analysis against existing LMS platforms, created personas and journey maps, paper prototyped, iterated through lo-fi to hi-fi, tested with users, and delivered a development-ready handoff."

**Big CTA button:** "Read the full research and process on Medium →"

---

**Right section G: MY ROLE (brief)**

"I was the primary designer on a 5-person team, working directly with Dr. Caro Williams-Pierce as our client. My specific contributions: the client requirements document, stakeholder interview facilitation, visual identity and branding ('Playwise'), and the hi-fi mobile-first prototypes for both student and instructor views."

---

**Right section H: WHY THIS MATTERS (forward-looking)**

"Playwise taught me how to design for a philosophy, not just a feature list. Translating the Read-Watch-Play pedagogy into interaction patterns — flexible structure, play as a first-class interaction, equivalent multi-user experiences — is the same challenge I now bring to AI product design: making complex systems feel natural, adaptive, and human."

**CTA:** "See my other work →" (links back to portfolio)

---

### 3. FOOTER (full-width)
Back to portfolio. Contact info.

---

## CRITICAL: Mobile layout
Below 768px:
- Hero stays full-width
- Split-screen collapses — prototype becomes a dedicated "Explore the prototype" section between the hero and the content
- Right column content becomes a single scrolling column
- All cards stack vertically

## Technical requirements
- React or Next.js
- Tailwind CSS
- Scroll-reveal animations (Intersection Observer, fade up)
- Responsive: great on mobile AND desktop
- Lazy-load the prototype iframe
- Fast, no heavy libraries

## What I'll provide after initial build
- Figma prototype embed URL (for the left panel iframe)
- Real screenshots to replace placeholders
- Medium article link
- Any additional quotes or metrics

## Tone & vibe
- This should feel like a product that was designed BY a professional team FOR a real client — not a school project
- The professor quotes do the heavy lifting — they prove the problem is real and emotional, not hypothetical
- The metrics (5 sprints, 9+ courses, 2 user types, development handoff) prove professional scope
- The "Read the full research on Medium" CTA appears TWICE (hero + research section) — making it easy to find but not pushy
- Overall vibe: "This designer handled a complex, multi-stakeholder systems design challenge and delivered something real."
