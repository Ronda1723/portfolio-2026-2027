# Playwise — Source of Truth Document

> **What this document is:** The single, comprehensive reference for Samita Belliganood's Playwise case study. Contains the full project context, research, design decisions, deliverables, and outcomes from a 2-semester graduate capstone project designing a Learning Management System for an innovative pedagogy.
>
> **Last updated:** April 4, 2026
> **Author:** Samita Belliganood
> **Status:** Living document
> **Source files:** Google Drive folders (1hpb69bKZN9fx1JzDMUbJsV-OSbPoCNoM, 1wLlLL1ArF82H49dgwwlIYBxtXCvcfEQz)

---

## Part 1: Project Overview

### The basics

| Field | Detail |
|-------|--------|
| Project name | Playwise (originally "Read-Watch-Play LMS") |
| One-liner | Designing a new Learning Management System for a play-based pedagogy that reimagines how STEM courses are taught and experienced |
| Type | Graduate capstone client project |
| Course | INST776: Graduate Capstone, University of Maryland |
| Client | Dr. Caro Williams-Pierce, University of Maryland College of Information |
| Timeline | Fall 2024 – Spring 2025 (2 semesters, 5 sprints) |
| Team | Samarth Ashwathanarayana, Sanjay Balaji, Samita Belliganood, Ananya Kaipa, Yabing Yang |
| Samita's primary role | Designer (with rotating sprint responsibilities across the team) |
| Parallel team | A Master of Information Management (MIM) team handled technical feasibility, database architecture, and backend design |
| Final deliverables | Hi-fi mobile-first prototypes (student + instructor views), design system, visual identity, research documentation, client handoff |

### What is Playwise actually about?

**This is NOT "adaptive learning for children."** The current portfolio description is inaccurate and needs to be corrected.

Playwise is an LMS designed for the **Read-Watch-Play (RWP) pedagogy** — a teaching methodology created by Dr. Caro Williams-Pierce at UMD. RWP structures course content into three phases: Read (engage with material), Watch (observe demonstrations/lectures), and Play (hands-on experimentation and application). The pedagogy emphasizes failure and feedback, student autonomy, and learning through play — even in university-level STEM courses.

The problem: existing LMS platforms (Canvas/ELMS) don't support this pedagogy. They're linear, rigid, and grade-focused. RWP needs an LMS that is flexible, playful, and structured around the R-W-P cycle rather than traditional assignment submission flows.

The project designed a mobile-first LMS from scratch — both student and instructor views — through 5 sprints of research, ideation, prototyping, and testing, culminating in a development-ready handoff to the client.

### Why this project matters for Samita's portfolio

1. **Real client, real stakeholders, real handoff** — this isn't a class exercise. Dr. Caro Williams-Pierce is a real professor with real courses using RWP, and the design was handed off for development.
2. **Full design lifecycle** — 5 sprints covering empathize → define → ideate → prototype → test → handoff. The most complete end-to-end project in Samita's portfolio.
3. **Complex stakeholder landscape** — balancing the needs of the client (Dr. Caro), multiple co-PI professors, students, TAs, and a parallel technical team.
4. **Systems design** — designing an entire LMS is a systems problem, not a screen problem. Information architecture, user flows for two distinct user types (students and instructors), and scalability across multiple courses.
5. **Directly relevant to AI/edtech roles** — personalized learning, adaptive content delivery, gamification, and engagement are hot problems in AI-powered education.

---

## Part 2: The Client and the Pedagogy

### Who is Dr. Caro Williams-Pierce?

Dr. Caro Williams-Pierce is a professor at UMD's College of Information who designs next-generation game-based and online math learning tools. Her research focuses on designing digital media for mathematical play — using novel representations and interactions to help students learn through experimentation rather than rote instruction. She created the Read-Watch-Play pedagogy and has implemented it across multiple courses at UMD.

### What is Read-Watch-Play?

RWP is a structured pedagogical framework where each week of a course is organized into three phases:

**Read** — Students engage with material (readings, articles, resources). Sometimes this is literally reading; sometimes it's a podcast, a video, or exploratory material. Worth ~1 point.

**Watch** — Students observe demonstrations, lectures, or worked examples. They write reflections or responses. Worth ~1 point.

**Play** — Students apply what they've learned through hands-on activities, experiments, prototypes, or creative work. This is the heart of the pedagogy — learning through doing. Worth ~3 points.

**Key principles of RWP:**
- **Failure and feedback** — designing environments where failure is safe and informative, not punitive
- **Student autonomy** — "Choose Your Own" (CYO) assignments where students select their own path
- **Play as serious learning** — even in rigorous STEM courses, the "play" phase creates engagement and deeper understanding
- **Community building** — RWP creates conversations, debates, and cross-talk rather than isolated individual work

### Courses currently using RWP at UMD

INST204, INST327, INST367, INST406, INST631, LBSC745, INST801, IMDM127, and advanced undergraduate mathematics courses.

### The core problem

Canvas (ELMS) is the university's LMS. It was designed for traditional course delivery: linear modules, assignment submission, grade tracking. RWP doesn't fit this model. Instructors have to hack Canvas to make it work — creating workarounds, linking to external tools (Miro, Figma, Spotify playlists), and manually managing the R-W-P structure within a system not designed for it.

From the Prof. Anat interview (notes taken by Samita):
- "I am a visual planner and ELMS doesn't support this. I have to come with the final output and come to ELMS to implement it."
- "ELMS does not support the planning (like mind-mapping) of it."
- "I always have to create Miro boards, Figma, etc. and always sort of outsource."
- "Grading is awful and inexcusable. I can't see an individual student's submissions in one place."
- "Where do I put inspirational links on Canvas? I have to create a separate page, it just doesn't work."
- On RWP itself: "It's life saving. I am a big supporter of it. I hope everyone can have access to it."

---

## Part 3: The Research

### Sprint 1 — Empathize

**What happened:** Background research, competitive analysis, stakeholder mapping, client meetings, interview protocols, and initial user research.

**Competitive analysis:** Analyzed existing LMS platforms (Canvas, Moodle, etc.) and identified specific gaps in supporting RWP-style pedagogy — particularly around flexible content organization, play-based activities, and non-linear learning paths.

**Stakeholder interviews:**
- **Dr. Caro Williams-Pierce** (client) — defined the RWP pedagogy and its requirements
- **Prof. Anat Sevilla** (RWP instructor) — provided detailed insight into implementing RWP in practice. Key insight: the biggest limitation of Canvas is that it doesn't support planning/brainstorming. RWP works well because of its structure and clarity, but the platform doesn't match the pedagogy's flexibility.
- **INST631 students** (focus group) — explored student experience of RWP courses vs. traditional courses. Questions covered course experience, LMS usage, and learning impact.

**Key research findings from Sprint 1:**
- Instructors need visual planning tools integrated into the LMS (not separate Miro/Figma boards)
- Students value the clear structure of R-W-P (knowing exactly what to do each week) but struggle with Canvas's rigid linear navigation
- The grading model (1-1-3 for R-W-P) provides clarity and reduces stress about grades
- CYO (Choose Your Own) assignments are powerful but create tracking challenges for instructors
- Play-based activities often require external tools — the LMS needs to support or integrate with them

### Sprint 2 — Define, Ideate

**What happened:** Personas, user stories, use cases, information architecture, user journey maps, wireframing.

**Key design artifacts:**
- Use cases and flows for both student and instructor views
- Information architecture for the full platform
- Low-fidelity wireframes for key flows
- Client feedback sessions

### Sprint 3 — Ideate, Prototype, Test

**What happened:** Medium-fidelity prototypes, initial user testing, feature development.

**Key design artifacts:**
- Medium-fidelity prototype flows based on client feedback
- Initial testing with users
- Feature-wise development and iteration

### Sprint 4 — Ideate, Prototype

**What happened:** High-fidelity prototypes, design system, visual identity ("Playwise" branding).

**Key design artifacts:**
- High-fidelity prototypes for student and instructor views (mobile-first)
- Design system with iterative development
- Visual identity / branding — this is where "Playwise" as a name and brand was established
- Client feedback integration

### Sprint 5 — Test, Implement

**What happened:** Final testing, client handoff, documentation.

**Key deliverables handed off to client:**
- Final hi-fi prototypes (mobile-first, with web support)
- Design system (development-ready)
- Research documentation
- Handoff meeting with Dr. Caro, co-PIs, and the MIM technical team

---

## Part 4: Samita's Specific Contributions

### Primary role: Designer

While the team rotated through PM, Designer, and Researcher roles across sprints, Samita was **primarily the designer** — owning visual design, UI decisions, and prototype creation.

### Specific contributions documented in Drive:

- **Client Requirements Document** — Samita owned this document (it's in her Google Drive, she's listed as owner). This is the foundational document that defined the project scope, deliverables, key tasks, risks, and sprint milestones.
- **Prof. Anat interview notes** — Samita was the note-taker for this critical stakeholder interview, which produced some of the most actionable insights about Canvas's limitations and RWP's strengths.
- **MIM collaboration meeting notes** — Samita took notes for the cross-team meeting between the HCIM design team and the MIM technical feasibility team, coordinating design requirements with technical constraints.
- **Sprint 3 documentation** — Samita is listed as the last modifier, suggesting active involvement in the prototyping sprint.
- **Visual identity and branding** — the "Playwise" name and visual direction.
- **Hi-fi prototype design** — mobile-first prototypes for both student and instructor views.

### Design decisions Samita should speak to in interviews:

1. **Mobile-first approach** — why mobile-first for an LMS? Students access course materials on phones between classes, during commutes, before bed. The traditional LMS assumes desktop. RWP's structure (clear R-W-P phases) actually works better on mobile because it reduces cognitive load to three clear actions.

2. **Two distinct but connected views** — student and instructor experiences needed to be equivalent (a core RWP principle) while serving fundamentally different needs. The instructor needs planning, content creation, and grading. The student needs navigation, submission, and progress tracking.

3. **Visual planning integration** — responding directly to Prof. Anat's pain point about having to use Miro and Figma externally for course planning. The LMS needed to support non-linear, visual course planning natively.

4. **Play as a first-class interaction** — in traditional LMS, play activities are treated as assignments. In Playwise, play is a distinct interaction pattern with its own UI — potentially linking to external tools, supporting multimedia submission, and facilitating peer interaction.

5. **Gamification through XP and quests** — the MIM team's technical architecture supported XP-based progression and "quest" style assignment selection (CYO). Samita's design needed to make this gamification feel natural and motivating, not gimmicky.

---

## Part 5: The Handoff and Outcomes

### What was delivered

- Mobile-first functional prototypes of both student and instructor views
- Desktop view prototypes
- Development-ready design system
- Full research documentation (competitor analysis, interviews, personas, journey maps, etc.)
- Visual identity for Playwise

### Client reception

The handoff meeting included Dr. Caro (via Zoom), Prof. Pam Duffy, Prof. Jason, Emily Dacquisto, and the MIM team. Both HCIM and MIM teams presented their work. The MIM team's technical deliverables (ERD, data dictionary, SQL scripts, XP flow model) were designed to align with the HCIM team's design.

### MIM team's technical architecture (relevant for context)

- Flexible and scalable data architecture
- "Choose Your Own" assignments as quests students can select
- XP-based progression (gamified)
- Personalized dashboard
- Weekly reflection and engagement tracking
- FERPA-compliant data handling

---

## Part 6: Key Insights and Learnings

### What makes this project unique

1. **Designing for a pedagogy, not just a product.** Most LMS projects start from feature lists. This one started from understanding a teaching philosophy and translating it into interaction design. The R-W-P structure isn't just content organization — it's a cognitive framework that shapes how students experience learning.

2. **The planning problem.** The most unexpected finding was that instructors' biggest pain point wasn't the student-facing LMS — it was the planning and course creation experience. Prof. Anat's insight about needing visual planning tools changed the project direction significantly.

3. **Equivalent but different experiences.** RWP's principle that students and instructors should have equivalent experiences on the platform created interesting design tensions — how do you make a grading interface and a learning interface feel like the same product?

4. **Cross-team coordination.** Working alongside the MIM team meant design decisions had to account for technical feasibility from day one. The XP system, quest-based assignments, and real-time dashboard features were co-designed between the two teams.

### What Samita learned

- How to manage a real client relationship over 2 semesters (not a one-off class project)
- How to coordinate between a design team and a development/technical team
- How to translate a pedagogical philosophy into interaction patterns
- How to design at the systems level — not just screens, but information architecture, user flows for multiple user types, and scalability across courses

### What she would do differently

- More user testing with actual students DURING the semester (not just retrospective interviews)
- Build a working prototype (even partial) to test real-world usage over weeks
- Deeper exploration of the CYO (Choose Your Own) pattern — Prof. Anat flagged that it creates tracking problems, and that tension between student autonomy and instructor visibility is a rich design problem

---

## Part 7: Connection to Broader Design Philosophy

### How Playwise connects to AI product design

| Playwise challenge | AI product design equivalent |
|---|---|
| Designing for a pedagogy (RWP) not just features | Designing for user intent and mental models, not just capabilities |
| Equivalent student/instructor experiences | Multi-user AI products where different roles need different views of the same system |
| Planning tools for course creation | AI-assisted workflow builders, content creation tools |
| Gamification (XP, quests) | Engagement design in AI products, progress tracking |
| Flexible structure that adapts to teaching style | Adaptive AI interfaces that personalize to user context |
| Cross-team coordination (HCIM + MIM) | Designers working with ML engineers on AI product teams |

### How Playwise connects to other case studies

- **FocusBuddy:** Both projects deal with educational contexts and emotional states affecting engagement. FocusBuddy focuses on ADHD-specific needs; Playwise focuses on pedagogical structure that supports ALL learners through play.
- **Vibe coding challenge:** The "play" philosophy in RWP (learning through doing, failure as feedback) directly mirrors Samita's approach in the 60-day challenge — she learns by building, not by reading about building.
- **Skan AI:** Both involve making complex systems legible to non-technical users. Playwise makes a pedagogy legible through an LMS; Skan AI makes AI agent workflows legible through visual communication.

---

## Part 8: Portfolio Framing — IMPORTANT

### What needs to change from the current portfolio

The current portfolio describes Playwise as "adaptive learning experiences that meet children where they are — emotionally and cognitively." This is **inaccurate** and needs to be updated:

- It's not for children — it's for university students and instructors
- It's not about emotional/cognitive adaptation — it's about designing an LMS for a specific pedagogy (Read-Watch-Play)
- It IS about making learning more playful, flexible, and engaging — but through pedagogical design, not emotional state detection

### Recommended portfolio framing

**Hero headline option 1:** "Canvas wasn't built for play-based learning. So we designed an LMS that was."

**Hero headline option 2:** "When the pedagogy is revolutionary but the platform isn't — we redesigned the entire LMS experience."

**The hook:** A real professor said Canvas's grading is "awful and inexcusable" and that she has to use 4 separate tools to plan a single course. We designed one platform that does it all.

### What to emphasize

- Real client, real problem, real handoff to development
- 5-sprint professional design process
- Two user types designed simultaneously (student + instructor)
- Mobile-first approach for an LMS (unusual and forward-thinking)
- The planning insight — instructors' biggest pain point was course creation, not course delivery

### What to de-emphasize

- Academic/course context (mention briefly, don't lead with it)
- Research methodology details (link to deeper documentation)
- Team dynamics (focus on your specific contributions)

---

## Part 9: Media & Assets Inventory

### What exists

- [x] Full Google Drive folder with all sprint documentation
- [x] Client requirements document
- [x] Interview notes and transcripts
- [x] Focus group questions
- [ ] Figma prototypes — hi-fi, mobile-first (student + instructor views) [TODO: confirm Figma link]
- [ ] Design system [TODO: confirm deliverable format]
- [ ] Visual identity / branding assets [TODO: confirm]
- [ ] Competitive analysis [in Drive, folder format]
- [ ] Final presentation / handoff materials [in Drive]
- [ ] Screenshots of key prototype screens [TODO: capture from Figma]

### What should be created for portfolio

- [ ] Hero visual showing the student and instructor views side by side
- [ ] Before/after: Canvas (messy, hacked) vs. Playwise (clean, purpose-built)
- [ ] Annotated prototype screens highlighting key design decisions
- [ ] Short screen recording of the prototype walkthrough
- [ ] A visual showing the R-W-P structure and how it maps to the UI

---

## Part 10: How to Use This Document

### For portfolio case study (Claude Code / Replit)
Lead with the Canvas problem + professor quotes, not "this was a capstone project." Show the prototype prominently. Emphasize real client, real handoff, 5-sprint professional process. De-emphasize academic context.

### For interview prep
Strongest talking points:
1. The planning insight — instructors' biggest problem wasn't the student-facing LMS, it was course creation tools
2. Designing for a pedagogy, not a feature list — translating RWP philosophy into interaction patterns
3. Two user types with "equivalent but different" experiences — a rich design tension
4. Mobile-first LMS — unusual choice, well-justified (students access materials on phones)
5. Cross-team coordination with MIM technical team

### For future updates
If the Playwise design is ever built or if there are updates from Dr. Caro's team, add them here. A note about real-world implementation would strengthen this case study significantly.

---

*Document created April 4, 2026*
*Sources: Google Drive project folders, client documentation, interview notes, handoff meeting notes*
