# Samita Belliganood — Portfolio Case Study Briefs

> **Purpose:** Content architecture + copy for 4 case studies. Each brief is structured so Claude Code (or you) can build the page directly from this document.
>
> **Order on portfolio:** 01 Vibe Coding → 02 Skan AI → 03 Playwise → 04 FocusBuddy
>
> **Design principle for all case studies:** Lead with outcome, not process. The first screen (above the fold) must answer "so what?" in under 3 seconds. Process and methodology go below the fold for people who are already hooked.

---

## Universal Case Study Structure

Every case study follows this skeleton. Sections marked **[ABOVE FOLD]** must be visible without scrolling. Everything else is progressive depth.

```
[ABOVE FOLD]
├── Hero headline (1 sentence — the insight, not the project name)
├── Hero media (screen recording, prototype embed, or key visual)
├── Role / Timeline / Context (small, muted text — 1 line)
│
[BELOW FOLD — scrolls into view]
├── The Problem (2–3 sentences max)
├── Key Decisions (the interesting design choices — NOT a process timeline)
├── The Work (screens, embeds, annotated visuals)
├── Outcome / Impact / What I Learned
└── (Optional) Process Footnote — compressed methodology for deep readers
```

**Content ratios (approximate):**
- 30% — Problem + Outcome (the bookends)
- 30% — Key Decisions + Design Thinking (the substance)
- 25% — Visual Work / Screens / Demos
- 15% — Process / Research / Methodology

**Media hierarchy (most → least impact):**
1. Embedded screen recording or video demo (15–30 sec)
2. Interactive Figma prototype embed
3. Annotated screenshots with callouts
4. Static screenshots
5. Process artifacts (journey maps, flows, wireframes)

---

## Case Study 01: Vibe Coding — "AI Tools I Built to Think With"

### Position on portfolio
**First.** This is the most differentiated thing you have. No other designer applying to early-stage AI startups can show 6 shipped AI prototypes built by hand. Lead with this.

### What this case study proves
You design by building. You prototype at the speed of thought. You can ship a working AI interface in a day. You're not just a designer who hands off Figma files — you're someone who can own a feature end-to-end at a startup.

---

### [ABOVE FOLD]

**Hero headline:**
> "I don't wireframe AI interfaces — I build them. Six tools shipped in six weeks."

**Hero media:**
A 15–20 second screen recording montage — quick cuts between Ponder (voice going in, structured output coming out), Haru (mood selection → generated day plan), and SalesMAXXing (Chrome extension in action). Fast, punchy, no narration needed. The motion itself is the hook.

*If a montage video is too heavy to build right now, use a grid of 3 hero screenshots side by side — Ponder, Haru, SalesMAXXing — each showing the most impressive screen.*

**Context line:**
`Personal projects · Hackathons across SF · 2024–2025 · Solo designer-developer`

---

### [BELOW FOLD]

**Section: Why I build to think**
> Most designers prototype in Figma. I prototype in code — not because I'm an engineer, but because AI interfaces can't be designed statically. The feel of a voice interaction, the pacing of a streamed response, the trust signals in an agent's output — these only become real when you build them. Over six weeks, I shipped six AI tools to explore different interaction patterns. Each one taught me something I couldn't have learned in a wireframe.

**Section: The projects**

For each project, use this format:

---

**Ponder** — Voice brain dump tool
`Voice HackSprint 2.0 · Shipped to Vercel · Smallest.ai + Claude API + Google Calendar`

*The idea:* You speak freely for 60 seconds. Ponder transcribes in real-time, then returns 3 key thoughts, action items, and your mood in one word.

*The design decision:* I chose a hold-to-talk interaction over push-to-start because the physical gesture of holding creates commitment — you talk more openly when your hand is involved. The output card uses progressive disclosure: mood word first (emotional hook), then thoughts (cognitive), then actions (practical).

*Media:* Screen recording of Ponder working end-to-end (voice in → structured output). Alternatively, Figma prototype embed.

---

**Haru (春)** — Mood-based daily planner
`Solo project · Single HTML prototype`

*The idea:* Five emotional states shape a personalised day plan. Instead of asking "what do you need to do today?", Haru asks "how are you feeling?"

*The design decision:* I mapped moods to planning strategies, not just aesthetics. "Overwhelmed" doesn't just change the color — it reduces the number of tasks shown and increases time buffer estimates. The interface adapts its complexity to your emotional bandwidth.

*Media:* Screenshot or recording showing mood selection → plan transformation. Show the contrast between two moods generating different plans.

---

**SalesMAXXing** — AI-powered sales prospecting Chrome extension
`AI Agent Glow Up Hackathon at WorkOS · Sole designer on team`

*The idea:* A Chrome extension that scores LinkedIn profiles for sales fit using AI, right in the browser.

*The design decision:* I used a Notion-inspired B&W aesthetic with DM Sans because the extension lives inside LinkedIn's already-cluttered UI. It needed to feel like a quiet tool, not another attention-grabber. The circular SVG score badges give an instant read without requiring the user to parse numbers.

*Media:* Screenshot of extension in context on LinkedIn. Annotated callout showing the score badge system.

---

**prep.** — Voice-first meal planning
`Solo project · In progress`

*The idea:* Tell the app what ingredients you have. It generates a meal plan. Voice or text input, AI-generated output with a re-prompt box for iteration.

*The design decision:* I added a "past logs" feature using localStorage so the app builds a lightweight history of what you've cooked. The re-prompt box was critical — first-generation AI output is never perfect, and giving users a low-friction way to refine it is more important than getting the first answer right.

*Media:* Screen recording if available. Otherwise, annotated screenshot of the re-prompt flow.

---

*(Include any other vibe coding projects briefly — 2–3 sentences each, with a screenshot. These don't need the full treatment.)*

---

**Section: What this taught me**
> Building fast doesn't mean building carelessly. Each of these projects forced a real design decision in the first hour — not about colors or layout, but about how humans interact with AI output. When should the AI speak vs. display text? When does a loading state need to feel like thinking vs. just waiting? When does more information help vs. overwhelm? These are the questions I now bring to every AI interface I touch.

---

### Media checklist for this case study
- [ ] Screen recording montage or individual recordings of Ponder, Haru, SalesMAXXing
- [ ] Screenshots of each project's key screen
- [ ] (Optional) Figma prototype embeds
- [ ] (Optional) Link to live deployed versions (Ponder on Vercel, etc.)

---
---

## Case Study 02: Skan AI — "Making AI Agent Systems Legible"

### Position on portfolio
**Second.** This is your only professional industry experience in AI, and the framing needs to be honest but strategic. The work was visual communication design for a complex AI product — not product UI design. The story is about *the skill of translation*: taking opaque AI agent workflows and making them understandable to humans who aren't technical.

### What this case study proves
You can take complex, abstract AI systems and make them clear to non-technical stakeholders. You worked directly with a founder. You understand the AI agent space at a systems level, not just a surface level.

### Honest framing note
Do NOT claim you designed the product's user interface. The work was presentation/visualization design for investor and executive communication. But the *underlying capability* — making AI legible — is exactly what product design for AI requires. Frame the skill, not the deliverable format.

---

### [ABOVE FOLD]

**Hero headline:**
> "AI agents are invisible by default. My job was to make them understandable."

**Hero media:**
A before/after showing a complex AI system diagram (messy, technical, illegible) next to your redesigned version (clear, structured, visual hierarchy applied). If you don't have a literal before/after, create one — take a raw technical diagram and show your cleaned-up version side by side.

*Alternative if confidential:* A stylised/anonymised version of a workflow visualization you created, showing the transformation from complexity to clarity.

**Context line:**
`Skan AI · San Jose, CA · Aug 2025–Present · Solo designer, working directly with Founder`

---

### [BELOW FOLD]

**Section: The challenge**
> Skan AI builds AI-powered process intelligence — autonomous agents that analyze and automate enterprise workflows. The technology is sophisticated, but the challenge wasn't technical. It was communicational: how do you explain what AI agents *do* to executives, investors, and enterprise buyers who can't see the technology working?
>
> I was brought in as the sole designer, working directly with the Founder, to solve this translation problem.

**Section: What I actually did**
> I took multi-step AI decision pipelines — the kind of thing that lives as a whiteboard diagram or an engineer's architecture doc — and turned them into clear visual narratives. This meant:
>
> - Designing a consistent visual system for representing agent workflows, decision points, and automation sequences
> - Building process visualizations that showed *what the AI does* without requiring the viewer to understand *how it works*
> - Creating presentation materials that could carry the product story to investors and enterprise stakeholders
> - Establishing visual hierarchy and information architecture for deeply technical content

**Section: Key design decisions**

*Decision 1: Workflow as narrative, not architecture*
> Technical teams default to architecture diagrams — boxes and arrows showing system components. But stakeholders don't need to know what's *inside* the system. They need to know what it *does for them*. I redesigned the workflow visualizations as sequential narratives: "First the agent does X, then it identifies Y, then it recommends Z." Same information, completely different framing.

*Decision 2: Consistent visual language for agent actions*
> I created a repeatable visual system where each type of agent action (analyze, decide, automate, escalate) had a distinct but cohesive visual treatment. This meant any new workflow could be quickly visualized using the same vocabulary, and stakeholders could read a new diagram without re-learning the visual language.

*Decision 3: Progressive complexity*
> Investor decks needed the 30-second version. Internal strategy decks needed the 5-minute version. I designed both from the same source material using progressive disclosure — high-level summary slides that could expand into detailed process views when the audience needed depth.

**Section: The bigger picture — why this matters for product design**
> This work wasn't product UI, but it exercised the exact muscle that AI product design requires: making complex, autonomous systems legible to humans. Every AI product faces this problem — users need to understand what the AI did, why it did it, and whether they should trust the output. The Skan AI work taught me to think about legibility as a design material, not just an aesthetic preference.

**Section: What I'd do differently / What I learned**
> Working this close to the founder gave me direct exposure to how AI products are positioned and sold — not just used. I learned that the same AI capability can be perceived as "powerful" or "confusing" depending entirely on how it's presented. If I were designing Skan AI's actual product interface, I'd bring these same principles: workflow as narrative, consistent agent action vocabulary, and progressive complexity based on user expertise.

---

### Media checklist for this case study
- [ ] Before/after of a workflow visualization (can be anonymised)
- [ ] 2–3 examples of cleaned-up process diagrams or deck slides
- [ ] (Optional) A visual system/vocabulary sheet showing your agent action iconography
- [ ] (Optional) A diagram showing the progressive complexity approach (30-sec vs 5-min versions)

### ⚠️ Important
If any of this work is under NDA, you can still show:
- The *approach* using anonymised/recreated examples
- The *visual system* you developed without specific product details
- A written narrative about the design decisions without showing deliverables

---
---

## Case Study 03: Playwise — "Adaptive Learning That Meets Kids Where They Are"

### Position on portfolio
**Third.** This is your deepest research-to-design project and demonstrates rigorous HCI thinking. The reframe: don't lead with "capstone" — lead with the insight about adaptive learning.

### What this case study proves
You can do deep, methodical research and translate it into a designed system. You think about edge cases, emotional states, and adaptive behavior — the same skills needed for AI personalization and context-aware interfaces.

---

### [ABOVE FOLD]

**Hero headline:**
> "Most learning apps treat every child the same. I designed one that adapts to how they feel."

**Hero media:**
A side-by-side or animated transition showing how the same app screen changes based on a child's emotional/cognitive state. This is the "aha" moment — showing the adaptation in action is more powerful than explaining it.

*If you have a Figma prototype that demonstrates this, embed it directly.*

**Context line:**
`HCI Master's Capstone · 2024 · UX Research + Interaction Design`

---

### [BELOW FOLD]

**Section: The problem**
> Educational technology typically adapts to *performance* — if a child gets answers wrong, the difficulty decreases. But learning isn't just cognitive. A child who is frustrated, anxious, or overstimulated will disengage regardless of difficulty level. Playwise was designed to respond to emotional and cognitive state together — meeting children where they actually are, not just where their test scores say they are.

**Section: The research**
> *(Keep this concise — 3–4 sentences about your research approach, then jump to insights. Don't list every method.)*
>
> I conducted [X interviews/observations/etc.] with [children/parents/educators] to understand how emotional states affect learning engagement. The key insight was [your sharpest finding]. This finding directly shaped the adaptive model I designed.

**Section: Key design decisions**

*Decision 1: Emotional check-in as interaction, not interruption*
> How do you ask a child how they feel without breaking their flow? I designed [describe the mechanism — was it a visual check-in, a behavioral inference, a mood selector?]. The key constraint was making it feel like part of the experience, not a clinical assessment.

*Decision 2: Adaptation that's felt, not announced*
> The interface doesn't say "we noticed you're frustrated, so we're making things easier." That's patronizing. Instead, [describe how the adaptation manifests — fewer items, more breathing room, different interaction patterns, etc.]. The child experiences a different feel without being told they're being adjusted for.

*Decision 3: [A third meaningful design choice]*
> [Describe it]

**Section: The outcome**
> [What did you produce? A working prototype? A design system? User test results? Be specific about the deliverable and any feedback/validation you got.]

**Section: Why this matters for AI design**
> Adaptive interfaces are the future of every AI product — systems that respond to user context, not just user input. Playwise was my first deep exploration of this pattern, and the principles (infer state, adapt silently, respect autonomy) directly apply to how I think about AI personalization today.

---

### Media checklist for this case study
- [ ] Side-by-side showing adaptive states (the hero moment)
- [ ] Figma prototype embed (if available)
- [ ] 1–2 research artifacts (journey map, key insight visualization — not the whole research deck)
- [ ] Final design screens (3–5 key screens)
- [ ] (Optional) User testing feedback or quotes

---
---

## Case Study 04: FocusBuddy — "Why Productivity Tools Fail People with ADHD"

### Position on portfolio
**Fourth.** This is your research-depth piece. It shows empathy, critical thinking, and the ability to challenge assumptions. The key: it must have a design output, not just research insights. Even a speculative prototype or a set of design principles counts — the case study can't end at "I discovered the problem."

### What this case study proves
You do rigorous user research. You challenge default assumptions (neurotypical design patterns). You can translate research insights into actionable design direction. You care about inclusive design — not as a checkbox, but as a design philosophy.

---

### [ABOVE FOLD]

**Hero headline:**
> "Productivity tools are designed for brains that can sustain linear focus. Most brains can't."

**Hero media:**
Your sharpest research finding, visualized. This could be a data point, a quote from research, or an annotated screenshot of a mainstream productivity app with callouts showing the neurotypical assumptions baked in. The visual should make someone immediately understand the problem.

**Context line:**
`UX Research Project · 2024 · Research + Design Principles + [Prototype if applicable]`

---

### [BELOW FOLD]

**Section: The problem**
> Digital productivity tools — to-do apps, focus timers, habit trackers — assume a neurotypical model of attention: that focus is linear, interruptible, and resume-able. For people with ADHD, this model is fundamentally wrong. Hyperfocus, task paralysis, time blindness, and emotional dysregulation aren't edge cases — they're the primary experience. I wanted to understand exactly where and how these tools fail, and what a better approach would look like.

**Section: The research**
> [Describe your research approach briefly — who you talked to, what methods you used, what you were looking for. Keep to 3–4 sentences.]
>
> The sharpest findings were:
> 1. [Most important insight — e.g., "Task lists create paralysis, not clarity, for ADHD users"]
> 2. [Second insight — e.g., "Time estimates are useless when you experience time blindness"]
> 3. [Third insight — e.g., "The biggest drop-off isn't in starting tasks, it's in transitioning between them"]

**Section: What's wrong with current tools (the critique)**
> [This is where you annotate existing products and show exactly what's broken. Pick 2–3 mainstream apps and show the specific interaction patterns that assume neurotypical focus. This is the most shareable, memorable part of the case study — a well-argued critique is extremely compelling to hiring managers.]

**Section: Design principles for neuroinclusive productivity**
> Based on the research, I established [X] design principles for productivity tools that work with ADHD brains, not against them:
>
> - Principle 1: [Name] — [1 sentence explanation]
> - Principle 2: [Name] — [1 sentence explanation]
> - Principle 3: [Name] — [1 sentence explanation]

**Section: Design output**
> [This is critical — you need to show SOMETHING designed, not just researched. Options:]
> - A speculative prototype showing what a neuroinclusive productivity tool looks like
> - Redesigned screens of an existing app applying your principles
> - A design system / pattern library for ADHD-friendly interaction patterns
> - If you have actual FocusBuddy UI, show it here with annotations

**Section: What I learned**
> Designing for neurodivergent users isn't about adding "accessibility features" to a neurotypical product. It's about questioning the foundational interaction model. This research changed how I think about every interface I design — not just for ADHD, but for any context where the user's cognitive state varies (stress, fatigue, multitasking, information overload). These are the same conditions that make AI interfaces succeed or fail.

---

### Media checklist for this case study
- [ ] Research insight visualization (the hero)
- [ ] Annotated screenshots of mainstream apps showing neurotypical assumptions
- [ ] Design principles as a designed artifact (not just a text list)
- [ ] Design output — prototype, redesigned screens, or pattern library
- [ ] (Optional) Research deliverables — persona, journey map, affinity diagram
- [ ] (Optional) Quotes from research participants

---
---

## Quick Reference: Copy Tone Guide

Use this across all case studies for consistency.

| Do | Don't |
|---|---|
| "I designed..." / "I built..." / "I discovered..." | "We conducted a comprehensive analysis..." |
| Short, direct sentences. 15 words max where possible. | Long compound sentences with multiple clauses. |
| Name specific tools: "Claude API", "Smallest.ai", "Figma" | Vague references: "various AI tools", "prototyping software" |
| Describe the *decision*: "I chose X because Y" | Describe the *process*: "First I did research, then I ideated, then I..." |
| Honest about constraints: "This was a hackathon, so I had 4 hours" | Inflated scope: "Through extensive iteration..." |
| Connect to AI design: "This pattern applies to any adaptive interface" | Generic takeaways: "I learned the value of user-centered design" |

## How to use these briefs in Claude Code

Paste the relevant case study brief into Claude Code with a prompt like:

> "Here's the content brief for my [case study name] page. I already have the page component structure in my repo. Use this brief to populate the content — hero headline, section copy, media placeholders, and structure. Match my existing site typography and layout patterns. Leave placeholder comments where I need to add screen recordings or Figma embeds."

For the Skan AI case study specifically, you may want to do a working session where you describe the actual projects to me first, and I help you write the specific content before handing it to Claude Code.

---

*Document created April 2026 for Samita Belliganood's portfolio at samita.design*
