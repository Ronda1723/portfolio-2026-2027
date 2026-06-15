# Project Log: Haru (春)
> **Day 1 of 60-day challenge · March 9, 2026 · Filled from conversation transcripts**

---

## The basics

**Project name:** Haru (春 — Japanese for "spring day")
**One-liner:** A mood-first daily planner that doesn't assume you wake up feeling the same every day.
**Day number:** 1
**Date built:** March 9, 2026
**Time spent:** ~3 hours
**Tools used:** Claude + Cursor

---

## The story

**What problem does this solve?**
Most productivity and planning apps assume you wake up in the same state every day. They show the same task list, the same interface, the same expectations. But how you feel fundamentally changes what you're capable of. Haru asks one question first — "How are you feeling?" — and reshapes your entire day around the answer.

**How did the idea come up?**
This was Day 1 of the challenge — Samita had never shipped code before and needed something creative, small, and honest about the learning process. The mood-first concept came from her own experience of mornings where she felt overwhelmed and her task list made it worse, not better.

**What does it actually do?**
1. A card slides up from the bottom of the screen (like an AirPods popup on iOS)
2. The card asks you to pick from 5 mood states
3. You tap a mood
4. The card flips with a physical card-flip animation
5. The reverse shows your day plan — one featured task, a short list, and a quote
6. The plan adapts based on mood: "overwhelmed" reduces task count and increases time buffers; "energized" shows more ambitious items

---

## Decisions you made

**What's the most interesting design/product decision you made and why?**
Mood as functional input, not decoration. The 5 moods don't just change the color scheme — they change the content structure: number of tasks shown, time buffer estimates, complexity of the featured task. "Overwhelmed" mode genuinely reduces cognitive load, not just aesthetics. This was a core insight: emotional state should be a first-class input in adaptive interfaces.

**Did you consider an alternative approach and reject it? What and why?**
Considered building as an iOS widget (native Swift, App Store submission) but that was way too complex for Day 1. Also considered a standard app layout but chose the card metaphor because it creates a 10-second interaction — much lower friction than opening a full app at 7am. The card slides up, you interact, it goes away. No app to get lost in.

**What would you do differently if you had more time?**
Build as a real PWA installable on the homescreen. Add actual task persistence (database). Let the mood data accumulate over time and show patterns ("you've been overwhelmed 4 out of 5 mornings this week").

---

## What was hard

**What broke, confused you, or took way longer than expected?**
Card flip animation required multiple iterations to feel physically convincing. CSS 3D transforms were new territory. Also tried to build a React Native version in Cursor but got blocked by an Expo Go version incompatibility — had to pivot to a pure HTML prototype.

**What technical concept did you learn today?**
Shipping code for the first time. HTML/CSS/JS fundamentals. CSS 3D transforms for the card flip.

**Rate your understanding of that concept now (1-5):** 3

---

## The build

**New tool or API you used for the first time?** Cursor (AI-powered code editor)

**Is it deployed? URL:** Not deployed as a standalone app

**Code location:** Local HTML file + demo page for X recording

---

## The post

**X caption:**
> Day 1 of building with AI.
>
> I'm a product designer who's never shipped code. Excited to change that!
>
> Today I built Haru (春 - spring day), a mood-first daily planner. An app that doesn't assume you wake up feeling the same everyday.
>
> You pick how you're feeling. The card flips. Your day reshapes around that.
>
> Built with: Claude + Cursor

**Engagement** (fill in from your screenshots):
- Likes: [TODO]
- Reposts: [TODO]
- Replies: [TODO]
- Notable replies: Multiple supportive comments. One person (dnu) gave detailed App Store submission advice unprompted — an expert engaging with the work. Rounak, Tanusha, Shruti, Brian, Siri Yasha, Sujan, Malini, Lucian, Sajit, Harshit, Hari Haran, Tiago, Harshita, Aditya, Victor-Almond all replied.

**Did anything happen because of this post?**
Strong first-day engagement set the tone for the challenge. Multiple people asked about the tech stack and build process.

---

## Media

Check what you have:
- [x] Screenshots of the key screens (card in mood-selection state + flipped day-plan state)
- [x] Screen recording / demo video (X demo page built specifically for screen recording)
- [ ] X post screenshot with engagement [TODO: capture]
- [ ] Live URL (not deployed)

Additional assets:
- Interactive HTML prototype (v5b) — full card flip, transparent notch, scrolling, close button, fixed height
- X demo page — Post Post aesthetic landing page that transitions into iPhone prototype
- iOS 26 Liquid Glass homescreen mockup behind the card

---

## The takeaway

**In one sentence, what does this project prove about you as a designer?**
A designer who has never shipped code can go from zero to a working, aesthetically polished prototype in a single day — and the design thinking (mood as functional input, not decoration) is what makes it interesting, not the code.

---

## Visual / aesthetic details (for portfolio reference)

- **Typography:** DM Serif Display + IBM Plex Mono
- **Color palette:** Mustard yellow check-in side, cream paper day plan side
- **Physical metaphors:** Stacked physical cards, hotel key card notch cutout at top, receipt-style details, dashed tear lines
- **Inspiration:** Post Post / Hobonichi aesthetic — warm, analog, intentionally non-digital feeling
