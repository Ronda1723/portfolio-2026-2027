# FocusBuddy — Source of Truth Document

> **What this document is:** The single, comprehensive reference for Samita Belliganood's FocusBuddy case study. Contains every detail about the research, design decisions, participants, findings, and outcomes. Any future portfolio, case study, interview prep, or Claude Code session should pull from this document.
>
> **Last updated:** April 3, 2026
> **Author:** Samita Belliganood
> **Status:** Living document
> **Source files:** Google Drive folder (13jHEyFLMy-ka6PqUqsLUDfF6OjzMccJD)

---

## Part 1: Project Overview

### The basics

| Field | Detail |
|-------|--------|
| Project name | FocusBuddy: Co-Designed with ADHD |
| One-liner | A participatory UX research project co-designing a low-cognitive-load task management app with graduate students who have ADHD |
| Type | Academic course project |
| Course | INST704: Inclusive Design in HCI, University of Maryland |
| Date | October–December 2024 |
| Team | Samita Prakash Belliganood, Ruchica Sinha, Urvi Varma |
| Collaboration model | Equal contribution across all phases — research, synthesis, design |
| Methodology | Participatory design (co-design with users, not for users) |
| Deliverables | Literature review, 3 rounds of interviews, thematic analysis, affinity mapping, journey maps, empathy maps, storyboards, co-design sessions, 2 concept prototypes, user testing, gap analysis, Medium article, final video presentation |

### What this project is about

Graduate students with ADHD face unique challenges managing academic responsibilities. Executive functioning difficulties — task initiation, focus disruptions, time awareness, emotional regulation — make traditional productivity tools not just unhelpful but actively harmful. These tools add cognitive load instead of reducing it.

FocusBuddy was designed through a participatory process: rather than designing *for* ADHD users based on assumptions, the team co-designed *with* two graduate students with ADHD across three rounds of interviews and co-creation sessions. The result is a low-cognitive-load app concept that supports time awareness, task initiation, and accountability — built from the lived experience of the people who would use it.

### Why this project matters for Samita's portfolio

This case study demonstrates:
1. **Deep, rigorous UX research** — 3 rounds of interviews, thematic analysis, affinity mapping, empathy maps, journey maps, storyboards, gap analysis
2. **Participatory/inclusive design methodology** — co-designing with users, not for them
3. **Critical thinking about default assumptions** — questioning why productivity tools assume neurotypical focus patterns
4. **The ability to translate research into design** — from raw interviews to wireframes to testable prototypes
5. **Relevance to AI design** — adaptive interfaces, personalization based on user state, and low-cognitive-load design are all directly applicable to AI product design

---

## Part 2: The Research

### Secondary research — literature review

The team conducted a thorough literature review covering:

**Samita's research focus:** Graduate school expectations and academic culture — the structural pressures that make ADHD management especially difficult in graduate programs (unstructured time, self-directed work, long-term projects without clear milestones)

**Urvi's research focus:** Deep ADHD literature — executive functioning, attention regulation, emotional dysregulation, time blindness, task initiation barriers, and how existing interventions address (or fail to address) these challenges

**Ruchica's research focus:** Existing productivity tools and their limitations for neurodivergent users

**Key findings from secondary research:**
- ADHD is not just about attention — it involves executive functioning, emotional regulation, time perception, and motivation systems
- Graduate school is uniquely challenging for ADHD students because it requires sustained self-directed work without external structure
- Most productivity tools are designed for neurotypical focus patterns: linear attention, interruptible focus, resume-able tasks
- The tools that ADHD students use (complex Excel trackers, multiple overlapping apps) often become sources of cognitive overload themselves

### Primary research — participants

| | Participant 1 (P1) | Participant 2 (P2) |
|---|---|---|
| Background | Doctoral engineering student, 26 y/o | Master's design student, 28 y/o |
| ADHD context | Navigating graduate research with executive function challenges | Managing design coursework and creative projects |
| Current tools | Complex Excel trackers with multiple tabs | Had a preferred app but struggled with its interface |
| Key quote | "I work when I can focus — can't say that I work from 8-4, I work when I feel productive." | "Group projects keep me accountable — not solo tasks." |

### Interview rounds

**Round 1: Understanding context and current behavior**
- Contextual interviews exploring daily routines, tool usage, and pain points
- Discovered: both participants had elaborate workaround systems that were themselves sources of stress
- P1's Excel tracker was simultaneously their lifeline and their biggest source of overwhelm
- P2 highlighted that their preferred productivity app had good features buried under poor interface design

**Round 2: Deeper exploration and journey mapping**
- Created journey maps WITH participants (not about them) — tracing daily interactions with productivity tools
- Mapped executive function challenges: procrastination cycles, overwhelm points, task-switching failures
- Built empathy maps capturing mental states, needs, goals, and frustrations
- Discovered recurring patterns:
  - Overcompensating with overly complex organizational systems
  - Abandoning tools due to lack of meaningful alerts or feedback loops
  - Emotional fatigue from constantly failing to meet self-imposed productivity expectations

**Round 3: Co-design sessions**
- Used a custom UI component kit — participants built DIY mockups of their ideal productivity tool
- This was the most valuable session: participants' own designs revealed preferences the team hadn't anticipated
- Clear design preferences emerged:
  - Minimal interface, clear visuals
  - Automation with optional manual control (not forced automation)
  - Peer-based accountability tools
  - Flexible structure that adapts to energy levels, not rigid schedules

### Thematic analysis

The team conducted thematic analysis across all three rounds, identifying patterns in:
- **Task initiation barriers** — the hardest part isn't doing the task, it's starting it
- **Time blindness** — inability to accurately estimate how long things take or how much time has passed
- **Emotional relationship with productivity** — guilt, shame, and frustration around tools that were supposed to help
- **Social accountability as the strongest motivator** — P1: "I'm never ever late when it comes to group projects... I'm a great worker... just not for myself"
- **Hyperfocus as double-edged** — when focus kicks in, it's intense but unsustainable, and basic needs (eating, drinking water) get forgotten

### The most important insight

**Guilt around productivity tools.** Both participants described feeling worse, not better, when using productivity tools. The tools created expectations they couldn't meet, and each missed deadline or unchecked box reinforced a narrative of personal failure. This emotional dimension — that the tools themselves cause harm — was the most significant finding and directly shaped the design philosophy: FocusBuddy must never make the user feel bad about their productivity.

---

## Part 3: The Design

### Design principles (from research)

Based on the research, the team established key design principles documented in their "Things to remember for design" file:

1. **Low cognitive load above all** — every screen, every interaction should require minimum mental effort
2. **Never punish missed tasks** — no red indicators, no guilt-inducing "overdue" language, no streaks to break
3. **Automation with user control** — smart defaults that can be manually overridden, never forced automation
4. **Social accountability over self-accountability** — peer features (StudyBro) because external motivation works when internal motivation doesn't
5. **Flexible structure** — adapts to energy levels and productive times, not rigid schedules
6. **Persistent but friendly notifications** — inspired by Duolingo's approach: repetitive but never negative

### Storyboards

Created two storyboards to visualize user journeys:

**Storyboard 1 — Maya's research journey:** Follows a graduate student confronting an open-ended research task. Key themes: engagement and motivation through structured planning, battling overwhelm through small accomplishments, leveraging body doubling and accountability.

**Storyboard 2 — Post-diagnosis identity journey:** Explores a student's transformative journey after ADHD diagnosis. Key themes: self-identity and redefining capability, overcoming internalized stigma, finding empowerment through community.

### User flows

The team designed 7 core user flows plus sub-flows. **Samita specifically owned:**

- **Flow 5: Overdue Task Management** — how users address overdue tasks without guilt (rescheduling with integrated calendar, no punitive visual language)
- **Flow 6: Progress Tracking & Analytics** — visual insights into productivity patterns (tasks completed, time in focus sessions, weekly summaries)
- **Flow 6a (subflow): Productivity patterns** — the app learns when users are most productive and suggests optimal work times; includes maps showing locations where the user was most focused; gentle break reminders during hyperfocus sessions
- **Flow 7: Customizable Notifications** — persistent, friendly reminders inspired by Duolingo (repetitive but never negative); includes quick-action buttons (Snooze, Mark Complete)

**Ruchica owned:** Flow 1 (Task Creation with Calendar Integration), Flow 1a (Recurring Tasks), Flow 2 (Task Prioritization & Sorting)

**Urvi owned:** Flow 3 (Focus Mode with Customizable Breaks), Flow 4 (Accountability Partner Interaction), Alarms subflow

### Two concept directions

**Concept 1: Dashboard with daily structure and social accountability**
- Daily task list with quick priority visualization
- StudyBro: accountability partner system — team up with peers for shared study sessions and task check-ins ("Because everyone needs a buddy who keeps them on track")
- Focus sessions with adjustable breaks and environment presets (sounds, disturbance levels)
- Visual wins / achievements to reinforce positive behavior
- Calendar view for scheduling focus blocks
- Integration with LMS (Canvas) and digital calendars

**Concept 2: Smart adaptive task manager**
- AI-driven task breakdowns — automatically divides large assignments into manageable chunks
- Priority conflict resolution — when multiple deadlines approach, prompts user to decide what to tackle first
- Task completion with rescheduling prompts — after completing a task, offers to reschedule the next occurrence
- Reflection screen — if rescheduling, asks "what went wrong in your planning?" (framed as learning, not blame)
- Auto-prioritization based on urgency and importance
- Subtask management for breaking complex work into smaller pieces

### Key features across both concepts

| Feature | What it does | Research insight it addresses |
|---------|-------------|------------------------------|
| **StudyBro** | Peer accountability pairing | "I'm never late for group projects... just not for myself" |
| **Focus Sessions** | Timed work blocks with break presets | Hyperfocus causes forgotten meals; structured breaks prevent burnout |
| **AI Task Breakdowns** | Auto-splits large tasks into chunks | Task initiation is the hardest part; smaller pieces reduce starting friction |
| **Low-Cognitive-Load UI** | Minimalist, distraction-free | Complex tools become sources of overwhelm themselves |
| **Calendar + LMS Integration** | Syncs academic deadlines automatically | "Over Organization — a lot of things aren't integrated" |
| **Adaptive Notifications** | Persistent but friendly reminders | Users ignore standard notifications; Duolingo-style works better |
| **Productivity Time Learning** | App learns when you're most productive | "I work when I can focus, not 8-4" |
| **Overdue Task Rescheduling** | No guilt, just reschedule | Emotional harm from seeing overdue items |

---

## Part 4: Validation & Gap Analysis

### User testing

Conducted user testing sessions with P1 and P2 on both concept prototypes. Testing focused on:
- Whether the concepts matched their mental models of task management
- Whether the low-cognitive-load principle was actually achieved
- Which features they gravitated toward vs. ignored
- Emotional response to the interface (did it trigger productivity guilt?)

### Gap analysis (5 dimensions)

The team conducted a systematic gap analysis across five dimensions:

**What (Task Management):**
- Current: Users struggle with task initiation, prioritization, and progress tracking
- Gap: Existing tools are disconnected, lack focus aids, and fail to support ADHD-specific needs
- Solution: Integration, focus tools, overdue task management, adaptive notifications

**Where (Organization):**
- Current: Task prioritization and scheduling conflicts cause inefficiency
- Gap: Disjointed systems fail to provide clarity in prioritization or calendar-task syncing
- Solution: Unified task-calendar interface with conflict alerts and sorting options

**When (Timing):**
- Current: Notifications and overdue tasks are often ignored or missed
- Gap: Users lack meaningful notifications and overdue task management features
- Solution: Persistent notifications, overdue sections, and rescheduling tools

**Who (Agency):**
- Current: Users manually prioritize tasks and fix errors in workflows
- Gap: Tools rely heavily on user input, increasing cognitive load for ADHD users
- Solution: Build automation for prioritization and integrate social accountability features

**How (Integration):**
- Current: Existing tools operate in isolation, causing inefficiency
- Gap: Current tools lack integration and tailored support for ADHD needs
- Solution: Cross-functional task management features with iterative user feedback

### Unmet needs identified for future development

- AI-based task segmentation (automatically breaking work into right-sized chunks)
- Predictive time estimation models (combating time blindness with data-driven estimates)
- Expanded user testing beyond women aged 25-30
- Integration with more academic tools and platforms
- Adaptive prioritization that learns from user behavior

---

## Part 5: Reflections & Learnings

### What worked well

- **Remote, participatory methods increased authenticity** — participants were more open and creative in their own environments
- **The co-design sessions (Round 3) were the breakthrough** — having participants build their own mockups revealed preferences the team hadn't anticipated (particularly the desire for automation with manual override control)
- **The emotional dimension changed the project direction** — discovering that productivity tools cause guilt, not just frustration, reframed the entire design philosophy

### What Samita would do differently

- **More participants** — two is deep but narrow; more participants would strengthen the findings and reveal whether patterns are universal or individual
- **Longer engagement period** — the semester timeline compressed the co-design and testing phases; ideally would do multiple rounds of prototype testing
- **Build a working prototype** — the wireframes and concepts are solid but a functional prototype would have enabled real-world testing over days/weeks, revealing whether the design actually reduces cognitive load in practice

### What this project taught about design

- **Designing for neurodivergent users isn't about adding "accessibility features"** — it's about questioning the foundational interaction model
- **Participatory design is not the same as user testing** — co-designing WITH users produces fundamentally different insights than showing them something and asking for feedback
- **Emotional experience is a design material** — the guilt finding changed everything; you can't design a good productivity tool without understanding the emotional relationship people have with productivity itself
- **The same principles apply to AI interfaces** — adaptive behavior based on user state, low cognitive load, never making the user feel bad about their performance, transparent automation with user control

---

## Part 6: Connection to Broader Design Philosophy

### How FocusBuddy connects to Samita's other work

FocusBuddy's core principles map directly onto AI product design challenges:

| FocusBuddy principle | AI product design equivalent |
|---------------------|------------------------------|
| Low cognitive load | AI interfaces must not overwhelm with options or outputs |
| Never punish the user | AI error states should be forgiving, not blaming |
| Automation with control | AI should suggest, not dictate; users need override ability |
| Adaptive to user state | AI should personalize based on context, energy, and mood (cf. Haru) |
| Social accountability | AI-mediated collaboration and shared progress |
| Transparent behavior | Users need to understand what the system is doing and why (cf. Skan AI) |

### How FocusBuddy connects to the vibe coding challenge

- **Haru (Day 1)** — mood as functional input, not decoration — directly inspired by FocusBuddy's research on emotional state affecting capability
- **Prep (Day 6)** — the re-prompt pattern (iterate, don't restart) echoes FocusBuddy's "automation with manual override" principle
- **Loop (Day 4)** — natural language input over form fields parallels FocusBuddy's low-cognitive-load philosophy

---

## Part 7: Media & Assets Inventory

### What exists

- [x] Full portfolio case study on samita.design (current Framer site)
- [x] Medium article (co-authored)
- [x] Final video presentation
- [x] Wireframes / prototype screens for both concepts (in Figma)
- [x] Journey maps, empathy maps, storyboards (visual artifacts)
- [x] Co-design session outputs (DIY screens from P1 and P2)
- [x] Full Google Drive folder with all research documents

### Research documents in Google Drive

| Document | Type | Key content |
|----------|------|-------------|
| Secondary Research Document | Literature review | Grad school context + ADHD literature |
| Interview Script (Round 1) | Protocol | Full question set for contextual interviews |
| User Interview Round 1, 2, 3 | Notes + recordings | Raw interview data across all sessions |
| Affinity Notes (Round 1, 2, 3) | Synthesis | Clustered insights from interviews |
| Thematic Analysis | Analysis | Identified themes and patterns |
| 11/24 Research Session Synthesis | Synthesis | Consolidated findings across rounds |
| Insights and Features | Analysis → Design | Research insights mapped to specific features with participant quotes |
| Co-Design Protocol | Protocol | Structure for co-design sessions |
| Things to remember for design | Design principles | Key principles to guide UI decisions |
| User Flows (all) - Draft 1 | Design | 7 user flows with ownership assignments |
| Gap Analysis | Validation | 5-dimension gap analysis (What, Where, When, Who, How) |
| Storyboards | Narrative | 2 user journey storyboards |
| User Testing Session (Final) | Validation | Testing protocol and findings |
| Medium Article | Publication | Published article about the project |
| Video Presentation Prep + Final | Presentation | Script and final video |

### What could be created for portfolio

- [ ] Annotated screenshots of key wireframe screens with callouts explaining design decisions
- [ ] Before/after showing the gap analysis visually (current state → designed state)
- [ ] A highlight reel of the strongest participant quotes
- [ ] The co-design DIY screens from P1 and P2 with annotations showing what each participant prioritized

---

## Part 8: How to Use This Document

### For portfolio case study (Claude Code)
The hero should NOT lead with "course project" or "INST704." Lead with the insight: "Most productivity tools make ADHD worse, not better. We found out why — and designed something different." The research depth is the differentiator. Show the co-design artifacts (participants' own mockups) prominently — they prove you designed WITH users, not for them.

### For interview prep
The strongest talking points are:
1. The guilt finding — productivity tools cause emotional harm, not just frustration
2. The participatory method — co-designing WITH users produced insights you couldn't get from user testing
3. The design principles that transfer to AI — adaptive behavior, low cognitive load, transparent automation
4. Your specific contributions — overdue task management (no-guilt rescheduling), progress tracking (productivity time learning), customizable notifications (Duolingo-inspired)

### For future updates
If you ever build a working prototype of FocusBuddy (even a simplified version using your vibe coding skills), add it to this document. A working demo would transform this from a strong research case study into an exceptional end-to-end product design case study.

---

*Document created April 3, 2026*
*Sources: Google Drive research folder, samita.design portfolio page, conversation with Samita*
