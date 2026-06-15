# PROMPT FOR REPLIT: Build the Skan AI Case Study Page

## Context
I'm building a case study page for my UX portfolio. I'll upload a source-of-truth markdown document with all the project details, plus a separate editorial copy document with the literal text for the page. This case study covers real client work for an enterprise AI startup (Skan AI), under NDA, so I can't show literal screenshots. Instead, the page leans on a clean problem-work-impact narrative, named outcomes, and custom infographics I'm creating.

Mentor feedback I'm working with: "10s hooks. Redirect to Medium for depth. Show conversions/retention/revenue."

## Format direction: editorial longform
Think Stripe Press, a16z essays, or The Pudding. Long-scroll, mostly single column, generous whitespace, beautiful typography, custom infographics breaking up the text at strategic moments. The page should read like a confident product narrative — not a research report, not a transcript, not a behind-the-scenes story. Just: here's the problem, here's what I built, here's the impact.

NOT split-screen. NOT a grid of cards. NOT a deck-style horizontal scroll.

## Design direction
- Generous max-width (around 680-720px for body text)
- Body font: a serif (Source Serif 4, Lora, or Tiempos) for the article body
- Headline font: DM Sans (matches the rest of my portfolio)
- Lots of whitespace between sections
- Subtle horizontal rules or section dividers
- Pull quotes and infographics get full-bleed treatment — break out of the column
- Color palette: warm off-white background (#FAF9F6), deep charcoal text, single accent color (deep navy or warm orange)
- Smooth, subtle scroll-reveal animations (fade up only)
- Mobile-first

---

## Page structure

### 1. HERO

**Eyebrow text (small, accent color, uppercase):** "Case study · Skan AI · 2025"

**Headline (very large, serif, tight line-height):**
Use the headline from the editorial copy doc.

**Subhead:**
Use the subhead from the editorial copy doc.

**Stat strip (thin, refined — magazine byline, not marketing landing page):**
Four metrics from the editorial copy doc.

**CTA button (subtle, accent color):** "Read the full breakdown on Medium →"

---

### 2. THE PROBLEM (~120 words)

A short, confident opening that states what Skan AI does, who they pitch to, and what was broken about how their story was being told visually. Use the editorial copy. No conversational backstory. Just: here's the company, here's the audience, here's the problem.

---

### 3. INFOGRAPHIC #1 — "The Translation" (full-bleed)

This is the most important visual on the page. Break out of the text column to full width.

Placeholder spec for now (I'll replace with my real graphic):

**Two-panel comparison:**
- LEFT (or top on mobile): A messy, overwhelming "before" diagram — many boxes and tangled arrows, no hierarchy, deliberately chaotic. Label: "Engineering schematic"
- RIGHT (or bottom on mobile): A clean "after" diagram — same structural information, but with clear visual hierarchy, layered depth, consistent iconography. Label: "Investor narrative"

For the placeholder, render two contrasting box-and-arrow diagrams using SVG.

**Caption underneath (centered, small italic serif):**
Use the caption from the editorial copy doc.

---

### 4. THE WORK (~250 words)

Subhead: **"What I designed."**

Use the editorial copy. This section describes the actual scope and deliverables — what was built, how complex it was, what problems were solved. Written in clean first-person ("I designed," "I rebuilt," "I converted") with no quotes, no scenes, no transcript moments. Just the facts of the work.

---

### 5. INFOGRAPHIC #2 — "The 24-hour turnaround" (full-bleed)

A horizontal timeline visualization showing the Insight Partners deck delivery:

- **Hour 0** — Raw materials received (Draw.io SVG + 19-slide existing deck)
- **Hour 24** — v1 delivered (34 slides — restructured, rebuilt, expanded)
- **Hour 48** — Final delivered (41 slides — polished, presentation-ready)

Render as a clean horizontal SVG timeline with three milestone markers.

**Caption underneath:** Use the caption from the editorial copy doc.

---

### 6. THE SKILLS (~200 words)

Subhead: **"Five skills this work required."**

A clean numbered list (not bullets — numbered with breathing space between each). Each item has a bold label and a one-sentence explanation. Use the editorial copy.

---

### 7. IMPACT MOMENT (full-bleed)

A single full-bleed line — the case study's emotional center. Use the line from the editorial copy doc. Big serif text, generous space above and below, no other elements competing.

---

### 8. THE IMPACT (~180 words)

Subhead: **"Why this work mattered."**

Use the editorial copy. This section is about outcomes and what the engagement represents — not anecdotes. Confident, forward-looking, metric-aware.

---

### 9. INFOGRAPHIC #3 — "Anatomy of an investor slide" (full-bleed)

A single anonymized slide layout with annotation callouts pointing to specific design decisions:

- "Bidirectional arrow — reflects the actual data relationship"
- "Layered depth — suggests stack architecture without explaining it"
- "Custom iconography — consistent visual vocabulary across 50+ slides"
- "Editable elements — founder can iterate live before pitching"
- "White space — signals confidence, not crowding"

Render as a clean SVG slide layout with 5 annotation callouts.

**Caption:** Use the caption from the editorial copy doc.

---

### 10. CLOSING (~100 words)

Subhead: **"What this case study represents."**

Use the editorial copy. Short, confident, forward-looking.

---

### 11. CTA SECTION (full-width, centered)

**Big headline:** "Want the full story?"

**Two CTAs side by side:**
- **Primary:** "Read the in-depth Medium article →"
- **Secondary:** "See my other case studies →"

**Below the CTAs, small disclaimer:**
"Skan AI work is under NDA. The infographics on this page are abstracted versions of the design principles I applied."

---

### 12. FOOTER

Standard portfolio footer.

---

## Important style notes

- **Use the editorial copy doc for the literal text of every section.** Don't rewrite or paraphrase. Just lay it out.
- **The page is text-forward but not personal.** No conversation snippets, no "the founder said," no transcript moments. Just problem, work, impact.
- **The full-bleed impact line is reserved for the named outcome** — not for personality.
- **Infographics break out of the column to full width** — even on a 720px article, visuals reach the edges of the viewport.
- **Mobile responsiveness:** Single column always. Full-bleed elements stay full-bleed with comfortable padding.
- **Animations:** Fade-up on scroll for each major section. Nothing fancy.

## Technical requirements

- React or Next.js
- Tailwind CSS
- Serif font import for body text (Google Fonts: Source Serif 4 or Lora)
- Intersection Observer for scroll-reveal animations
- Mobile responsive
- Fast — no heavy libraries
- All infographics should be SVG placeholders that I can swap out for real graphics later

## What I'll provide after the initial build

- Custom infographics to replace the SVG placeholders
- Final copy edits if needed
- Medium article URL when ready
