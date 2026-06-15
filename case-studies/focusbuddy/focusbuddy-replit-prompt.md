# PROMPT FOR REPLIT: Build the FocusBuddy Case Study Page

## Context
I'm building a case study page for my UX portfolio. I'll upload a source-of-truth markdown document that has ALL the research details. But the case study page itself should NOT be a research paper — it should be a fast, visually compelling overview that grabs attention in the first 3 seconds and makes someone want to read the full Medium article.

Think of it like a movie trailer, not the movie.

## Design direction
- Clean, modern, lots of whitespace
- Mobile-friendly
- Scroll-based storytelling — each section reveals as you scroll
- Use my existing font: DM Sans
- Color palette: warm, accessible — soft purples and teals to feel approachable without being clinical
- No heavy academic language anywhere

## Page structure

### SECTION 1: FULL-WIDTH HERO (above the fold — the 3-second hook)

**Big headline:** "Productivity tools are making ADHD worse. We redesigned one from scratch — with the people they're failing."

**Below the headline, show 3 impact stats in a horizontal row:**
- "3 rounds of co-design research"
- "5 key ADHD challenges mapped"
- "2 prototype concepts tested"

**Small context line:** "INST704: Inclusive Design · University of Maryland · Fall 2024 · Team: Samita Belliganood, Ruchica Sinha, Urvi Varma"

**Scroll indicator** at the bottom of the hero (subtle arrow or "scroll to explore" text).

---

### SECTION 2: SPLIT-SCREEN LAYOUT (starts after the hero)

This is the core layout of the case study. Two columns:

**LEFT COLUMN (sticky/fixed on scroll):**
- A mobile phone frame (iPhone mockup) containing my Lovable prototype as an iframe
- Placeholder URL for now: [LOVABLE_PROTOTYPE_URL]
- The phone frame should be styled with rounded corners, subtle shadow, and a thin bezel
- It stays fixed in place while the right column scrolls
- Below the phone, add small text: "Interactive prototype — try it yourself"
- The left column takes about 40% of the width

**RIGHT COLUMN (scrollable content — 60% width):**
All the following sections scroll on the right while the prototype stays visible on the left:

---

**Right section A: THE PROBLEM**
"Graduate students with ADHD don't just struggle with focus — they struggle with tools designed for people who don't. Task lists create paralysis. Missed checkboxes create guilt. The tools meant to help become the problem."

---

**Right section B: THE SHARPEST INSIGHT**
Pull-quote style, large text:
"Both participants described feeling WORSE after using productivity tools — not better. The guilt of unchecked boxes was more damaging than having no system at all."

Small label above it: "The finding that changed everything"

---

**Right section C: WHAT WE DESIGNED**
Two stacked cards (they're in a single column now since we're in the right panel):

**Card 1: "Structure + Accountability"**
Daily task dashboard, StudyBro peer accountability pairing, focus sessions with break presets, visual achievements.

**Card 2: "Smart + Adaptive"**
AI-driven task breakdowns, priority conflict resolution, reflection prompts (no guilt), adaptive rescheduling.

Each card should have a placeholder for a prototype screenshot.

---

**Right section D: KEY DESIGN DECISIONS**
Three stacked cards:

**"Never punish a missed task"**
"No red overdue badges. No broken streaks. Missed tasks just get rescheduled — because guilt doesn't create productivity."

**"Accountability through people, not apps"**
"P1 told us: 'I'm never late for group projects, just for myself.' So we built StudyBro — peer-based check-ins that use social motivation instead of app notifications."

**"Automation you can override"**
"Smart defaults that adapt to your energy, but nothing forced. Users need to feel in control — especially when their relationship with productivity tools is already fraught."

---

**Right section E: THE RESEARCH (compressed)**
A simple visual timeline or step indicator:
Literature Review → 3 Rounds of Interviews → Co-Design Sessions → Prototyping → Testing & Validation

One paragraph:
"We used participatory design — co-designing with our users, not for them. Across 3 rounds of interviews and co-design sessions, P1 and P2 built their own mockups using a custom UI component kit, revealing preferences we never would have anticipated from observation alone."

**CTA button:** "Read the full research on Medium →" (link to Medium article)

---

**Right section F: MY ROLE**
"I co-led every phase alongside Ruchica Sinha and Urvi Varma. My specific design contributions: overdue task management (no-guilt rescheduling), progress tracking and productivity analytics, and customizable notification systems inspired by Duolingo's persistent-but-friendly approach."

---

**Right section G: WHAT I'D DO NEXT**
"FocusBuddy started as a research project. I'm now building a working prototype using skills from my 60-day vibe coding challenge. The principles here — adaptive interfaces, low cognitive load, never punishing the user — inform every AI product I design."

**CTA:** "See my vibe coding projects →"

---

### SECTION 3: FOOTER (full-width again, below the split layout)
Back to portfolio link. Contact info.

---

## CRITICAL: Mobile layout
On screens below 768px, the split layout collapses:
- The phone prototype becomes a full-width sticky element at the TOP of the page (about 40vh height), and the content scrolls below it
- OR (simpler): the prototype becomes a dedicated section between the hero and the content, with a "Try the prototype" heading, and the rest of the page scrolls normally as a single column
- Pick whichever is technically simpler — the desktop split-screen is the priority layout

---

## Technical requirements
- React or Next.js (whatever Replit defaults to)
- Tailwind CSS for styling
- Smooth scroll-reveal animations (fade up on scroll using Intersection Observer — nothing heavy)
- Responsive: looks great on mobile AND desktop
- The iframe embed for the Lovable prototype should be lazy-loaded
- Fast. No heavy libraries.

## What I'll provide after the initial build
- Real screenshots to replace placeholders
- The Lovable prototype URL for the iframe embed
- Link to the Medium article
- Any additional metrics or quotes from the source-of-truth doc

## Important
- Do NOT make this look like a research paper or academic report
- Do NOT use bullet point lists on the actual page — use cards, pull quotes, and visual hierarchy instead
- DO make it feel like a product page — clean, confident, visual
- The vibe should be: "This designer does serious research AND can make it look beautiful"
