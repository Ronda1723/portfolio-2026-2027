# Project Log: Decode
> **Day 3 of 60-day challenge · March 11, 2026 · Filled from conversation transcripts**

---

## The basics

**Project name:** Decode
**One-liner:** Type any concept, see GPT-4o and Claude explain it side by side — same question, different mental models.
**Day number:** 3
**Date built:** March 11, 2026
**Time spent:** ~4 hours (including extensive UI iteration)
**Tools used:** Replit + Claude (Anthropic API) + OpenAI (GPT-4o)

---

## The story

**What problem does this solve?**
When learning new concepts (especially in AI/tech), you get one explanation from one source and either it clicks or it doesn't. Seeing two different AI models explain the same thing reveals which aspects each one prioritizes, which examples they choose, and which sub-concepts they consider fundamental — giving you a richer, multi-perspective understanding.

**How did the idea come up?**
Directly from Day 2's confusion. After building Maison, Samita realized she had used AI APIs without understanding what a "model" was or why different ones exist. She'd also been using AI to learn new concepts throughout the challenge. The two realizations collided: "What if I built a tool that shows me how different models think about the same thing?"

The idea evolved through conversation — started as a simple "explain it to me" tool, then grew into a structured comparison with expandable sub-concepts, full-screen reading mode, and PDF export. Each addition came from Samita's UX instincts: "What if the concepts were broken into smaller pieces?" "What if I could download it as a textbook page?" "What if I could go full-screen on one model and come back to comparison?"

**What does it actually do?**
1. **Landing page:** Clean input with example topic chips you can tap
2. **Type any concept** and hit Decode
3. **Both APIs fire simultaneously** — GPT-4o and Claude Sonnet
4. **Comparison view:** Two side-by-side cards, each with:
   - Model name and color-coded badge (indigo for GPT-4o, orange for Claude)
   - Summary at the top
   - Expandable dropdown list of related sub-concepts
   - Each sub-concept contains: definition, explanation, real-world example, "why it matters"
5. **Full-screen mode:** Click either card to expand and read deeply
6. **PDF export:** Download button creates a clean textbook-style PDF
7. **Home icon:** Reset and start fresh

---

## Decisions you made

**What's the most interesting design/product decision you made and why?**
Side-by-side comparison as the default view — not tabs, not toggle. Both models always visible. The value isn't either answer alone — it's seeing how they differ. For "prompt engineering," GPT-4o went broad (Prompt Design, Iterative Refinement, Understanding AI Capabilities) while Claude went tactical (Few-Shot Prompting, Chain-of-Thought, Role Assignment). Same topic, completely different mental models. That difference IS the product.

**Other key decisions:**
- Structured prompting forces both models to respond in identical format (summary → sub-concepts → definition/explanation/example/why-it-matters) so comparisons are apples-to-apples
- Expandable sub-concepts let you quickly see WHICH concepts each model chose to include without being overwhelmed
- PDF export turns sessions into personal learning artifacts — Decode isn't just a comparison tool, it's a study tool
- Color coding (indigo vs orange) creates instant visual distinction without reading labels

**Did you consider an alternative approach and reject it? What and why?**
Considered flashcard format (front = concept, flip = explanation) but it hides the comparison which is the whole point. Considered accordion/dropdown that hides one model at a time but same problem — you lose the side-by-side insight. The simultaneous display was non-negotiable.

Also considered including images/infographics per concept but decided it was too much complexity for a day build and would derail the learning focus. Saved that idea for a potential future project.

**What would you do differently if you had more time?**
Add a "save library" of decoded concepts. Let users click a sub-concept to decode IT further (recursive learning). Add a "Which model was better?" voting mechanism. Let users input their own notes alongside each explanation.

---

## What was hard

**What broke, confused you, or took way longer than expected?**
- OpenAI API requires prepaid credits ($5 minimum) — discovered live during the build, had to pause and set up billing
- PDF export was a nightmare: html2pdf doesn't render CSS gradients or Google Fonts reliably. Fonts loaded AFTER the screenshot was taken, making text invisible in the PDF. Fixed by adding `await document.fonts.ready` before capture.
- Badge in PDF header was invisible (white text on white background after gradient was stripped). Had to switch from rgba to solid hex colors.
- UI required extensive iteration — multiple rounds of reference screenshots, corner radius adjustments, shadow spread changes, badge positioning. The transcript shows 15+ rounds of UI refinement.

**What technical concept did you learn today?**
What AI models actually are, how different models approach the same question differently, how to call two APIs simultaneously, PDF export from web apps.

**Rate your understanding of that concept now (1-5):** 4

---

## The build

**New tool or API you used for the first time?** Replit (first time), OpenAI API (GPT-4o), html2pdf library

**Is it deployed? URL:** Live at https://decode--samitaprakash.replit.app

**Code location:** Replit project

**Key files:**
- `pages/decode-app.tsx` — main app with all three screens
- `components/model-split-card.tsx` — comparison card component
- `components/model-fullscreen-view.tsx` — full-screen reading mode with PDF export

---

## The post

**X caption:**
> Day 3 of building with AI.
>
> Yesterday I used APIs for the first time. But I realized I had no idea what a "model" actually was or why everyone keeps picking different ones.
>
> So I built something to help me figure it out.
>
> Decode lets you type any concept and see GPT-4o and Claude explain it side by side. I wanted to see how they actually think differently — and honestly it's been the best way to learn.
>
> Feels right that I used AI to build a tool that helps me understand AI.
>
> Try it: https://decode--samitaprakash.replit.app
>
> Built with: Replit + Claude + GPT-4o

**Engagement:**
- Likes: [TODO]
- Reposts: [TODO]
- Replies: [TODO]
- Notable replies: Someone said "the difference in reasoning was more distinct than I expected" — validating the core concept. A founder DMed asking to meet.

**Did anything happen because of this post?**
**A founder DMed Samita directly on X asking to meet about a role.** This is the most concrete proof that the challenge is working — a job lead from a social media post about a project built in a day.

---

## Media

- [ ] Screenshot of landing page
- [ ] Screenshot of comparison view (use "prompt engineering" as demo topic — shows the most interesting model differences)
- [ ] Screenshot of full-screen learning mode
- [ ] Screenshot of exported PDF
- [x] Live URL: https://decode--samitaprakash.replit.app
- [ ] X post screenshot with engagement [TODO]
- [ ] Screen recording of full flow

---

## The takeaway

**In one sentence, what does this project prove about you as a designer?**
The most interesting products come from genuine confusion — Samita didn't understand AI models, so she built a tool to figure it out, and in the process created something genuinely useful that directly led to a job opportunity.

---

## UI design details (for portfolio reference)

- **Typography:** DM Serif Display (headlines) + DM Sans (body/UI)
- **Color system:** Indigo for GPT-4o, Orange for Claude — distinct without labels
- **Layout:** Landing → side-by-side comparison → full-screen reading → PDF export
- **Style:** Clean SaaS dashboard aesthetic, soft shadows (spread, not tight), pill-shaped inputs and buttons, white cards on light grey background
- **Inspiration:** Modern dashboard UIs — clean, lots of white space, soft shadows, rounded cards
