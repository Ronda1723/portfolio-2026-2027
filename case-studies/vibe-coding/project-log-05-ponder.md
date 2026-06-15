# Project Log: Ponder
> **Day 5 of 60-day challenge / Voice HackSprint 2.0 · March 14, 2026 · Filled from conversation transcripts**

---

## The basics

**Project name:** Ponder
**One-liner:** A voice brain dump tool — speak freely for 60 seconds, get back structured thoughts, action items, and a mood word.
**Day number:** 5
**Date built:** March 14, 2026
**Time spent:** ~3 hours (hackathon time constraint)
**Tools used:** Smallest.ai (WebSocket STT) + Claude (Anthropic API) + Google Calendar API + Vercel

---

## The story

**What problem does this solve?**
After every busy meeting, gym session, or commute, your head is full of scattered thoughts. Typing is too slow and structured. Notes apps become graveyards. Ponder lets you just speak — stream of consciousness, no structure needed — and returns your key thoughts, action items, and emotional state in a clean summary. One tap sends action items to Google Calendar so they actually get done.

**How did the idea come up?**
Built at Voice HackSprint 2.0, organized by Smallest.ai. The hackathon theme was voice-powered tools. Samita started with a vague "voice journaling" concept but pushed for something solving a specific, universal problem. The reframe came from a conversation: "it's not journaling — it's what happens when your head is full and typing is too slow."

The name "Ponder" was chosen from alternatives (Gather, Sift, Stow, Glean, Tend, Harvest) because it captured the reflective quality — you're not just recording, you're having your thoughts reflected back in structured form.

Original working title was "Dump" (voice brain dump) but was renamed to something more refined.

**What does it actually do?**
1. **Press and hold** the orb button to record
2. **Speak freely** for up to 90 seconds — no structure needed
3. **Real-time transcription** by Smallest.ai appears as you speak
4. **On release,** transcript goes to Claude API
5. **Claude returns structured output:**
   - 3 key things on your mind
   - 1-2 action items (verb-first, actionable)
   - Mood in one word
6. **"+ Cal" button** on each action item — creates a Google Calendar event
7. **History tab** — all past brain dumps with summaries logged

---

## Decisions you made

**What's the most interesting design/product decision you made and why?**
Hold-to-talk over push-to-start. The physical gesture of holding creates commitment — you talk more openly when your hand is involved in the act. It also creates a natural endpoint (release = done) versus push-to-start where you awkwardly decide when to stop. This is a subtle interaction design choice rooted in psychology, not technology.

**Other key decisions:**
- **Output order is intentional:** thoughts first (emotional hook — "oh, that IS what's on my mind"), then actions (practical — "here's what to do"), then mood (reflective — one word that captures your state). Progressive deepening from recognition → action → reflection.
- **Google Calendar integration:** Action items that sit in a list don't get done. One tap sends them to a real calendar event. This turns Ponder from a reflection tool into a productivity pipeline.
- **Fallback to Web Speech API** if Smallest.ai WebSocket fails — the demo won't die from an API hiccup.
- **iPhone mockup presentation:** Dynamic Island, real clock, status bar icons. Makes the demo feel like a real app, not a web page.

**Did you consider an alternative approach and reject it? What and why?**
Planned to integrate Vallo.dev for background agents (async follow-ups from action items) but Vallo was in private beta with no public API. Made the strategic call to skip it rather than fake it, and mention it as "future architecture" in the pitch. "2 solid real integrations > 3 where one is fake."

**What would you do differently if you had more time?**
Vallo background agent for async follow-ups. Weekly summary of mood trends. Sharing brain dumps with a trusted person. Voice-back feature where Ponder reads your summary back to you.

---

## What was hard

**What broke, confused you, or took way longer than expected?**
- WebSocket connection to Smallest.ai required debugging
- Google Calendar OAuth was complex: had to create a Google Cloud project, enable Calendar API, create OAuth 2.0 credentials, understand authorized origins, and serve from localhost (not a local file) due to origin restrictions — couldn't use `null` as an origin
- Vallo.dev was impossible to integrate (private beta, no API) — required a strategic pivot
- Demo video scripting and recording in under 45 minutes
- The 3-hour hackathon time constraint forced aggressive scope cutting

**What technical concept did you learn today?**
Real-time voice streaming via WebSocket, OAuth 2.0 authentication flow, Google Calendar API, building under extreme time pressure.

**Rate your understanding of that concept now (1-5):** 4

---

## The build

**New tool or API you used for the first time?** Smallest.ai (WebSocket STT), Google Calendar API, Google Cloud Console (OAuth), Vercel (deployment)

**Is it deployed? URL:** Deployed to Vercel [TODO: confirm URL]

**Code location:** Single HTML file (ponder.html) + separate 6-slide presentation HTML

**Technical stack:**
- Smallest.ai WebSocket streaming: `wss://waves-api.smallest.ai/api/v1/lightning/stream`
- Fallback: `v1/lightning/transcribe` (REST) and Web Speech API
- Anthropic API: `claude-sonnet-4-20250514`, `anthropic-version: 2023-06-01`
- Google Calendar API: v3 (`/calendar/v3/calendars/primary/events`)
- OAuth 2.0 Web Client for Google

---

## The hackathon

**Event:** Voice HackSprint 2.0 by Smallest.ai
**Location:** San Francisco
**Duration:** ~4 hours total (including ideation)
**Build time:** ~3 hours
**Submission deadline:** 3:30 PM

**Judging criteria (5 points each):**
1. Problem Clarity & Relevance
2. Technical Depth & Execution
3. Integration of Partner Technologies
4. Demo Creativity

**Partner technologies used:**
- ✅ Smallest.ai — core voice STT integration
- ✅ Claude (Anthropic) — AI summarization
- ❌ Vallo.dev — private beta, no API access
- ❌ Entelligence.ai — code review tool, didn't fit use case
- ❌ Emergent — no credits confirmed

**Demo video:** 6-slide presentation structure with scripted ~85-second narration

**Demo script (as used):**
> [Slide 1] "This is Ponder."
> [Slide 2] "Middle of a meeting. End of a gym set. Walking to your car. Your head is full — but it comes out scattered and stays that way."
> [Slide 3] "Three steps, zero friction. Speak. Transcribe. Organize."
> [Slide 4] "Built on Smallest AI for real-time voice, and Claude for structured thinking."
> [Slide 5 — Live demo] "Watch." [record ~20 sec, release] "Ponder breaks it down — three thoughts, pulled straight from what I said. And two action items, verb-first, ready to act on." [tap + Cal] "One tap — it syncs directly to Google Calendar as a reminder." [navigate to History] "And every session is logged here."
> [Slide 6] "That's Ponder. Speak freely. Think clearly."

---

## The post

**X caption:**
> Day 5 of building with AI.
>
> Built Ponder today at a hackathon — 3 hours, start to finish.
>
> You know that feeling after a meeting, a gym set, a walk? Head full of thoughts but by the time you open a notes app it comes out scattered and stays that way.
>
> Ponder lets you just speak. Smallest AI transcribes in real time. Claude organizes it into your key thoughts, action items, and a mood word. One tap sends it to Google Calendar.
>
> First hackathon. First time building under a deadline. Learned a lot.
>
> Built with: Smallest AI + Claude + Google Calendar API

**Engagement:**
- Likes: [TODO]
- Reposts: [TODO]
- Replies: [TODO]
- Notable replies: Smallest.ai team member reposted the post. Rounak engaged. Rajeev suggested deployment as a next step.

**Did anything happen because of this post?**
Smallest.ai team engagement (repost). The deployment suggestion from Rajeev influenced future challenge direction.

---

## Media

- [x] Demo video (90-second hackathon submission)
- [x] 6-slide HTML presentation file (ponder.html)
- [ ] Screenshots of app states (recording → processing → results → calendar)
- [ ] X post screenshot with engagement [TODO]
- [ ] Vercel deployment URL [TODO: confirm]

---

## The takeaway

**In one sentence, what does this project prove about you as a designer?**
Under hackathon pressure, Samita made real architectural decisions rooted in psychology (hold-to-talk for commitment), structured output for emotional engagement (thoughts → actions → mood), and integrated a real calendar API so outputs aren't just displayed but scheduled — this is product design thinking expressed through code.

---

## Visual / aesthetic details

- **Typography:** JetBrains Mono + Instrument Serif
- **Color:** Dark background + gold accent
- **Key visual:** Orb button pulses red while recording, spins gold while processing
- **Presentation:** iPhone mockup with Dynamic Island, real clock, battery/signal icons
