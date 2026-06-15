# Vibe Coding Showcase — Source of Truth Document

> **What this document is:** The single, comprehensive reference for Samita Belliganood's vibe coding case study. Contains every project, every decision, every tool, every constraint, and every outcome from the 60-day public building challenge. Any future portfolio, case study, pitch deck, interview prep, or Claude Code session should pull from this document.
>
> **Last updated:** April 2, 2026
> **Author:** Samita Belliganood
> **Status:** Living document — update as new projects are added or details change

---

## Part 1: The Overarching Story

### What is this case study about?

Samita is a product designer with an HCI Master's degree who had never shipped code before March 2026. She launched a 60-day public building challenge on X (Twitter), committing to build and ship a new AI-powered tool every few days — learning APIs, databases, deployment, voice interfaces, browser extensions, and game development along the way. Each project solved a real problem she personally had, and each one taught her a new technical concept.

The challenge was documented publicly on X with daily posts, attracting engagement from founders, engineers, and other designers — and directly leading to job interview opportunities (a founder reached out on Day 3 asking to meet).

### Why does this case study matter?

For the roles Samita is targeting (product designer at early-stage AI startups), this case study proves three things no other portfolio piece can:

1. **She designs by building.** Not wireframes-then-handoff. She prototypes in code to feel out interactions before committing to them.
2. **She ships fast.** Multiple working products built in hours, not weeks. Each one solving a real problem.
3. **She understands the full stack.** APIs, databases, real-time, voice, browser extensions, AI model integration — she's not a designer who needs everything explained. She's a designer who can sit in the code with engineers.

### The narrative arc

The challenge has a natural learning progression that makes a compelling story:

- **Day 1 (Haru):** First time shipping code. A mood-first daily planner. Learning: "I can build things."
- **Day 2 (Maison):** First API integration. Learning: "I can connect to real services."
- **Day 3 (Decode):** First multi-model AI comparison. Learning: "I understand what AI models are and how they differ."
- **Day 4 (Loop):** First database. Learning: "I can save and retrieve data."
- **Day 5 (Ponder):** First hackathon build. First voice interface. Learning: "I can build under pressure with real APIs."
- **Day 6 (Prep):** Voice + AI for a personal problem. Learning: "I can combine what I've learned into something genuinely useful."
- **Day 7 (Loop Capture):** First Chrome extension. Learning: "I can build tools that live inside other tools."
- **Day 8 (Artemis Flappy Bird):** First game. Learning: "Game loops, physics, collision detection — a completely new paradigm."

### The meta-story

The portfolio website itself is part of this case study. Samita is building her portfolio in Claude Code with a voice-enabled chat agent as the hero feature (using Claude API, ElevenLabs TTS with a voice clone, and Smallest.ai STT). The portfolio IS a vibe-coded project — making the case study self-referential in a way that's genuinely impressive.

---

## Part 2: The 60-Day Challenge — Context

### Origin

Samita is a product designer based in San Francisco, job searching at early-stage AI startups. She's on OPT with a visa deadline in mid-July 2026. She realized that to stand out in the current market, she needed to demonstrate she could build — not just design. The 60-day challenge was her way of learning in public and building a body of proof.

### Format

- **Platform:** X (Twitter), with posts also shared to LinkedIn and Instagram
- **Cadence:** Roughly every 1-2 days (not strictly daily)
- **Post structure:** Each post follows a consistent template:
  - "Day [N] of building with AI."
  - What she learned / what problem she solved
  - Brief description of what she built
  - Honest reflection on what was hard
  - "Built with: [tools]"
- **Engagement:** Posts received replies from founders, engineers, designers, and hackathon organizers. A job lead came directly from Day 3.

### Tools learned across the challenge

| Tool | What it is | First used |
|------|-----------|------------|
| Cursor | AI-powered code editor | Day 1 (Haru) |
| Claude (API) | Anthropic's LLM, used for AI features | Day 1+ |
| Lovable | AI-powered app builder | Day 2 (Maison) |
| Groq | Fast inference API for open source models | Day 2 (Maison) |
| Unsplash API | Image search API | Day 2 (Maison) |
| Replit | Browser-based IDE with deployment | Day 3 (Decode) |
| OpenAI (GPT-4o) | OpenAI's model, used for comparison | Day 3 (Decode) |
| Supabase | Database + real-time backend | Day 4 (Loop) |
| Smallest.ai | Real-time voice-to-text (WebSocket STT) | Day 5 (Ponder) |
| Google Calendar API | Calendar event creation | Day 5 (Ponder) |
| Chrome Extension API | Browser extension development | Day 7 (Loop Capture) |
| Emergent AI | AI-powered app builder | Day 8 (Artemis game) |
| Claude Code | Anthropic's coding agent | Various days |
| Vercel | Deployment platform | Day 5 (Ponder) |
| html2pdf | PDF export library | Day 3 (Decode) |

### Public reception

- Job interview opportunity directly from a Day 3 X post (founder DMed asking to meet)
- Engagement from Smallest.ai team (repost from team member after Ponder hackathon)
- Consistent replies from designers, engineers, and founders across posts
- Growing follower engagement over the 8 days documented

*[TODO: Add specific engagement metrics — likes, reposts, reply counts per post — from X screenshots]*

---

## Part 3: Individual Project Documentation

---

### Project 01: Haru (春)
**Day 1 of the challenge**

#### Overview

| Field | Detail |
|-------|--------|
| Name | Haru (春 — Japanese for "spring day") |
| One-liner | A mood-first daily planner that doesn't assume you wake up feeling the same every day |
| Type | Personal / self-initiated |
| Timeline | Built in ~3 hours |
| Tools | Claude + Cursor |
| Status | Interactive HTML prototype, demo-ready |
| Deployed | Not currently live as a standalone app |

#### The problem it solves

Most productivity and planning apps assume you wake up in the same emotional and cognitive state every day. They present the same task list, the same interface, the same expectations. But how you feel fundamentally changes what you're capable of. Haru asks one question first: "How are you feeling?" — and reshapes your day around the answer.

#### What it does (step by step)

1. A card slides up from the bottom of the screen (like an AirPods popup on iOS)
2. The card asks you to pick from 5 mood states
3. You tap a mood
4. The card flips (physical card-flip animation)
5. The reverse shows your day plan — one featured task, a short list of other items, and a quote
6. The plan adapts based on mood: "overwhelmed" reduces task count and increases time buffers; "energized" shows more ambitious items

#### Key design decisions

**Decision 1: Card metaphor over app interface**
Haru doesn't feel like an app — it feels like a card that appears on your homescreen. This was intentional. A full app creates the expectation of sustained engagement. A card creates a 10-second interaction. For something you do at 7am, the lower the friction the better.

**Decision 2: Mood as input, not decoration**
The 5 moods don't just change the color scheme. They change the content structure: number of tasks shown, time buffer estimates, complexity of the featured task. "Overwhelmed" mode genuinely reduces cognitive load, not just aesthetics.

**Decision 3: Post Post / Hobonichi aesthetic**
The visual language is deliberately analog — stacked physical cards, mustard yellow check-in side, cream paper day plan side, DM Serif Display + IBM Plex Mono typography, hotel key card notch cutout, receipt-style details, dashed tear lines. This signals warmth and intentionality, contrasting with the sterile productivity app market.

#### What was hard / what went wrong

- First time ever shipping code — the learning curve was the entire experience
- Card flip animation required multiple iterations to feel physically convincing
- Wanted to build as a native iOS widget but that requires Swift + App Store submission — pivoted to web prototype
- Expo Go version incompatibility blocked the React Native path

#### Technical details

- Pure HTML/CSS/JS prototype (single file)
- Card flip uses CSS 3D transforms
- 5 mood states with mapped content variations
- Demo page built separately for X screen recording (Post Post aesthetic landing page that transitions into iPhone prototype)
- iOS 26 Liquid Glass homescreen mockup behind the card for demo

#### Media inventory

- [ ] Interactive HTML prototype (v5b) — full card flip, transparent notch, scrolling, close button
- [ ] X demo page for screen recording
- [ ] X post with engagement (Day 1 post)
- [ ] Screenshots of the card in both states (mood selection + day plan)

#### X post caption (as posted)

> Day 1 of building with AI.
>
> I'm a product designer who's never shipped code. Excited to change that!
>
> Today I built Haru (春 - spring day), a mood-first daily planner. An app that doesn't assume you wake up feeling the same everyday.
>
> You pick how you're feeling. The card flips. Your day reshapes around that.
>
> Built with: Claude + Cursor

#### What this project proves

A designer can go from zero code experience to a working, aesthetically polished prototype in a single day using AI tools. And more importantly — the design thinking (mood as functional input, not decoration) is what makes this interesting, not the code.

---

### Project 02: Maison
**Day 2 of the challenge**

#### Overview

| Field | Detail |
|-------|--------|
| Name | Maison |
| One-liner | An AI-powered dream home generator — describe your vibe, get a luxury concept with a real moodboard |
| Type | Personal / self-initiated |
| Timeline | Built in ~3 hours |
| Tools | Lovable + Claude + Groq + Unsplash API |
| Status | Prototype complete |
| Deployed | On GitHub |

#### The problem it solves

Home design inspiration is fragmented across Pinterest boards, Instagram saves, and magazine screenshots. Maison lets you describe a vibe in natural language ("warm minimalist Scandinavian with dark wood accents") and generates a cohesive design concept with a real moodboard pulled from Unsplash.

#### What it does (step by step)

1. User describes their dream home vibe in a text input
2. Groq API generates the design concept (style description, key elements, color palette)
3. Unsplash API pulls relevant moodboard images based on the generated concept
4. Results display in a luxury editorial layout — concept description + moodboard grid

#### Key design decisions

**Decision 1: Sanctuary-inspired UI**
The interface itself needed to feel like a luxury design magazine, not a tech demo. Clean typography, generous whitespace, editorial layout. The tool should feel like the homes it's describing.

**Decision 2: Real images over AI-generated ones**
Used Unsplash (real photography) instead of DALL-E/Midjourney for the moodboard. Real photos feel more trustworthy and aspirational than AI-generated interiors, which still have an uncanny quality.

**Decision 3: Blur-cursor effect**
Added a smooth blur effect that follows the cursor — a subtle design detail that elevates the experience from "AI tool" to "design experience."

#### What was hard / what went wrong

- First time working with APIs — didn't understand what a "model" actually was or why different platforms (Gemini, Groq) have different ones
- API keys felt like magic — "I just copy-pasted a key but didn't understand what I was choosing"
- Gemini API key integration initially broken, had to debug
- This confusion directly inspired Day 3 (Decode)

#### Technical details

- Built with Lovable (AI app builder)
- Groq API for fast text generation
- Unsplash API for real image search
- Blur-cursor effect using CSS/JS

#### Media inventory

- [ ] Screenshots of generated concepts
- [ ] X post with engagement (Day 2 post)
- [ ] GitHub link

#### X post caption (as posted)

> Day 2 of building with AI.
>
> Today I learned what an API actually is.
>
> Built Maison, a dream home generator. Lets you describe your vibe and generates a concept and pulls a real moodboard.
>
> Fought with API keys, quota limits, and model names that no longer exist. Learned a lot in 3 hours.
>
> Built with: Lovable + Claude + Groq + Unsplash

#### What this project proves

Day 2 and already integrating external APIs and multiple AI services. The willingness to work with unfamiliar tools and the honesty about not understanding them ("I just copy-pasted an API key") is part of the story.

---

### Project 03: Decode
**Day 3 of the challenge**

#### Overview

| Field | Detail |
|-------|--------|
| Name | Decode |
| One-liner | Type any concept, see GPT-4o and Claude explain it side by side — same question, different mental models |
| Type | Personal / self-initiated |
| Timeline | Built in ~4 hours |
| Tools | Replit + Claude (Anthropic API) + OpenAI (GPT-4o) |
| Status | Complete, fully functional |
| Deployed | Live at decode--samitaprakash.replit.app |

#### The problem it solves (and how the idea emerged)

On Day 2, Samita realized she had used AI APIs without understanding what a "model" actually was — she just copy-pasted keys without knowing what she was choosing. She'd also been using AI tools to learn new concepts throughout the challenge. These two realizations collided into the idea: build a tool that lets you type any concept and see how different AI models explain it differently.

#### What it does (step by step)

1. **Input screen:** Clean landing page with a text input and example topic chips ("prompt engineering", "cognitive load", etc.)
2. **User types a concept and hits Decode**
3. **Both APIs called simultaneously** — GPT-4o and Claude Sonnet
4. **Comparison view:** Two side-by-side cards, each showing:
   - Model name and badge
   - Summary of the topic
   - List of related sub-concepts as expandable dropdowns
   - Each sub-concept expands to show: definition, deeper explanation, real-world example, and "why it matters"
5. **Full-screen mode:** Click either card to expand and read in depth
6. **PDF export:** Download button in full-screen mode exports the textbook-style content as a PDF
7. **Home reset:** Icon to start fresh with a new topic

#### Key design decisions

**Decision 1: Side-by-side comparison as the core interaction**
Not tabs, not toggle — always both visible. The value isn't in either model's answer alone. It's in seeing how they think differently about the same thing. For "prompt engineering," GPT-4o went broad and conceptual while Claude went technical and actionable. That difference IS the product.

**Decision 2: Textbook-style structured responses**
Each model is prompted to respond in a consistent structure (summary → sub-concepts → definition/explanation/example/why-it-matters). This makes the comparison meaningful — you're comparing apples to apples, not freeform paragraphs of different lengths.

**Decision 3: Expandable sub-concepts over flat lists**
The dropdown/accordion pattern lets the page stay scannable while offering depth. You can quickly see WHICH concepts each model chose to include (that's already interesting) without being overwhelmed by the full explanations.

**Decision 4: PDF export as a learning artifact**
The insight that this isn't just a comparison tool — it's a learning tool. You should be able to save what you learned. The PDF export turns each session into a personal textbook page.

**Decision 5: DM Serif Display + DM Sans typography, indigo/orange color coding**
GPT-4o gets indigo, Claude gets orange — immediately distinguishable without reading labels. The typography (serif for headlines, sans for body) creates a textbook feel that matches the educational purpose.

#### What was hard / what went wrong

- OpenAI API requires prepaid credits ($5 minimum) — discovered this live during the build
- PDF export initially broke because html2pdf doesn't render CSS gradients or Google Fonts reliably — fonts loaded after the screenshot was taken, making text invisible
- Fixed the font issue by adding `await document.fonts.ready` before the PDF capture
- The badge in the PDF header was invisible (white on white) — had to switch from rgba to solid hex colors
- UI required significant iteration — started generic, refined through multiple rounds of inspiration screenshots and style adjustments
- Rounded corners, shadow spread, badge positioning all required fine-tuning

#### Technical details

- React + Vite app built on Replit
- Anthropic API (Claude Sonnet) + OpenAI API (GPT-4o) called simultaneously
- System prompts force structured JSON responses from both models
- html2pdf library for PDF export (with font-loading fix)
- Tailwind CSS + custom styles
- DM Sans + DM Serif Display from Google Fonts
- Deployed on Replit

#### Outcome / impact

- **A founder DMed Samita on X after seeing the Day 3 post, asking to meet about a role** — this is the most concrete proof that the challenge is working
- Live and usable at a public URL
- The most polished project in the challenge so far

#### Media inventory

- [ ] Screenshot of landing page
- [ ] Screenshot of comparison view (recommend "prompt engineering" as the demo topic)
- [ ] Screenshot of full-screen learning mode
- [ ] Screenshot of exported PDF
- [ ] X post with engagement (Day 3 post)
- [ ] Live URL: decode--samitaprakash.replit.app
- [x] Screen recording of full flow (if available)

#### X post caption (as posted)

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
> Try it: [link]
>
> Built with: Replit + Claude + GPT-4o

#### What this project proves

The most interesting projects come from genuine confusion. Samita didn't understand AI models, so she built a tool to figure it out — and in the process created something genuinely useful for anyone learning about AI. The design decisions (structured comparison, expandable depth, PDF export) show product thinking, not just technical ability.

---

### Project 04: Loop
**Day 4 of the challenge**

#### Overview

| Field | Detail |
|-------|--------|
| Name | Loop |
| One-liner | A personal networking memory assistant — type naturally, it parses, saves, and reminds you |
| Type | Personal / self-initiated |
| Timeline | Built in ~3 hours |
| Tools | Replit + Claude (Anthropic API) + Supabase |
| Status | Functional prototype |
| Deployed | On Replit |

#### The problem it solves

Samita had been networking heavily in SF — attending hackathons, conferences, meetups — and kept forgetting what she promised people. "I'll send my resume tomorrow" — forgotten. "I'll follow up next week" — never happened. She needed a way to quickly capture networking interactions in natural language and get reminded of follow-ups.

#### What it does (step by step)

1. **Input:** A single text box at the bottom where you type naturally, e.g.: "Just met James at a design conference, he wants to collaborate on a fintech app, I'll send my portfolio on LinkedIn tomorrow"
2. **AI parsing:** Claude API extracts structured data from the natural language: name, context (where you met), next action, due date
3. **Confirmation:** Shows the parsed data before saving
4. **Save:** Stores to Supabase database
5. **Today view (home):** Cards showing contacts with follow-ups due today or overdue, each with a "Done" button
6. **All view:** Scrollable list of every saved contact with status

#### Key design decisions

**Decision 1: Natural language input over forms**
No form fields. No dropdowns. Just one text box where you type like you're texting yourself. The AI does the parsing. This is fundamentally more aligned with how you actually experience a networking interaction — as a stream of context, not as a set of fields.

**Decision 2: "Today" as the default view**
The home screen doesn't show everything — it shows what you need to do TODAY. This is the difference between a CRM (shows everything) and an assistant (shows what matters right now).

**Decision 3: "Done" as the primary action**
Each card's main affordance is marking it done. Not editing, not expanding, not categorizing. The whole point is to clear your follow-ups, not manage a database.

#### What was hard / what went wrong

- First time working with a database — the concept felt intimidating ("my friend said it's a hard concept")
- Had to learn how Supabase works: tables, columns, Row Level Security (had to disable RLS to avoid auth complexity)
- Connecting the frontend to the database was the "hard part" — but with Supabase + AI assistance it was mostly copy-paste
- Natural language parsing required careful Claude prompting to consistently extract the right fields

#### Technical details

- React app on Replit
- Supabase for database (PostgreSQL)
- Anthropic API for natural language → structured data parsing
- Table: contacts (id, name, context, next_action, due_date, created_at, done)
- DM Sans typography, white cards, soft shadows

#### Media inventory

- [ ] Screenshot of natural language input
- [ ] Screenshot of Today view with cards
- [ ] X post with engagement (Day 4 post)
- [ ] Screen recording of full flow

#### X post caption (as posted)

> Day 4 of building with AI.
>
> Today I learned what a database is. And why every app you've ever used has one.
>
> Built Loop — a networking memory assistant. You type "just met James at a design conference, he wants to collaborate on a fintech app, I'll send my portfolio tomorrow" and it saves it, parses it, reminds you.
>
> The new thing today was Supabase. It's where the data actually lives. Without it, everything disappears when you close the app. Now it doesn't.
>
> Small concept. Big unlock.
>
> Built with: Replit + Claude + Supabase

#### What this project proves

The best tools solve problems you personally have. Loop emerged from a real pain point in Samita's job search. And it sets up the Day 7 extension — showing product thinking that spans multiple days, not just isolated demos.

---

### Project 05: Ponder
**Day 5 / Voice HackSprint 2.0**

#### Overview

| Field | Detail |
|-------|--------|
| Name | Ponder |
| One-liner | A voice brain dump tool — speak freely, get back structured thoughts, action items, and a mood word |
| Type | Hackathon build (Voice HackSprint 2.0 by Smallest.ai) |
| Timeline | Built in ~3 hours under hackathon deadline pressure |
| Tools | Smallest.ai (WebSocket STT) + Claude (Anthropic API) + Google Calendar API |
| Status | Complete, shipped |
| Deployed | Shipped to Vercel with live URL |

#### The problem it solves

After every busy meeting, gym session, or commute, your head is full of scattered thoughts. By the time you open a notes app and start typing, half of it's gone or comes out disorganized. Ponder lets you just speak — stream of consciousness, no structure needed — and returns your key thoughts, action items, and emotional state in a clean summary.

#### What it does (step by step)

1. **Press and hold** the orb button to record (physical gesture of holding creates commitment)
2. **Speak freely** for up to 90 seconds — no structure needed
3. **Real-time transcription** by Smallest.ai appears as you speak
4. **On release,** the transcript is sent to Claude API
5. **Claude returns structured output:**
   - 3 key things on your mind
   - 1-2 action items (verb-first, actionable)
   - Mood in one word
6. **"+ Cal" button** on each action item creates a Google Calendar event for the next day
7. **History tab** shows all past brain dumps with their summaries

#### How the idea emerged

This was built at Voice HackSprint 2.0, organized by Smallest.ai. The hackathon theme was voice-powered tools. Samita started with a vague "voice journaling" concept, but pushed for something that solved a real, specific problem. The reframe: "it's not journaling — it's what happens when your head is full and typing is too slow."

The name "Ponder" was chosen from a list of alternatives (Gather, Sift, Stow, Glean, Tend, Harvest) because it captured the reflective quality of the interaction — you're not just recording, you're having your thoughts reflected back to you in a structured way.

#### Key design decisions

**Decision 1: Hold-to-talk over push-to-start**
The physical gesture of holding creates commitment — you talk more openly when your hand is involved. It also creates a natural endpoint (release = done) versus a push-to-start interaction where you have to decide when to stop.

**Decision 2: Output structure — thoughts first, actions second, mood last**
The output order is intentional: thoughts (emotional hook — "oh, that IS what's on my mind"), then actions (practical — "okay, here's what to do"), then mood (reflective — a single word that captures your state). Progressive deepening from recognition to action to reflection.

**Decision 3: Google Calendar integration for action items**
Action items that just sit in a list don't get done. One tap sends them to Google Calendar as a real event — turning Ponder from a reflection tool into a productivity pipeline. This was the demo's strongest moment.

**Decision 4: Mobile-first phone mockup presentation**
The prototype is presented inside an iPhone mockup with Dynamic Island, real clock, and status bar icons. This makes the demo feel like a real app, not a web page. The orb button pulses red while recording and spins gold while processing — visual feedback that makes the "thinking" moment feel intentional.

**Decision 5: Dark background + gold accent color**
JetBrains Mono + Instrument Serif typography. Dark bg signals focus and premium. Gold accent creates warmth and attention on the key interactive elements (the orb, the action items). Consistent with the "thinking space" metaphor.

#### The hackathon experience

- **Time constraint:** 3 hours total, start to finish
- **API integrations:** Smallest.ai (voice STT), Claude (summarization), Google Calendar (action items)
- **Vallo.dev was planned but impossible** — turned out to be in private beta with no public API. Pivoted to mentioning it as "future architecture" rather than faking an integration
- **Demo video:** 6-slide presentation structure (Title → Problem → How it works → Tech stack → Live demo → Fin) with a scripted 85-second narration
- **Submission:** Deployed to Vercel, submitted with demo video link
- **Reception:** Smallest.ai team member reposted the X post about Ponder

#### Demo video script (as used)

> [Slide 1] "This is Ponder."
>
> [Slide 2] "Middle of a meeting. End of a gym set. Walking to your car. Your head is full — but it comes out scattered and stays that way."
>
> [Slide 3] "Three steps, zero friction. Speak. Transcribe. Organize."
>
> [Slide 4] "Built on Smallest AI for real-time voice, and Claude for structured thinking."
>
> [Slide 5 — Live demo] "Watch." [record, speak ~20 sec, release, results appear] "Ponder breaks it down — three thoughts, pulled straight from what I said. And two action items, verb-first, ready to act on." [tap + Cal] "One tap — it syncs directly to Google Calendar as a reminder." [navigate to History] "And every session is logged here."
>
> [Slide 6] "That's Ponder. Speak freely. Think clearly."

#### Technical details

- Single HTML file with embedded JavaScript
- Smallest.ai WebSocket streaming API (`wss://waves-api.smallest.ai/api/v1/lightning/stream`)
- Fallback to Web Speech API if Smallest.ai connection fails
- Anthropic API (Claude Sonnet) for structured summarization
- Google Calendar API (OAuth 2.0, web client) for event creation
- Google Cloud Console project set up for OAuth credentials
- Deployed to Vercel via drag-and-drop
- iPhone mockup with Dynamic Island for presentation

#### What was hard / what went wrong

- WebSocket connection to Smallest.ai required debugging
- Google Calendar OAuth required setting up a Google Cloud project, enabling the Calendar API, creating OAuth credentials, and serving from localhost (not a local file) due to origin restrictions
- Vallo.dev integration was impossible (private beta) — had to make a strategic decision to skip it
- Time pressure meant aggressive scope cutting
- Demo video scripting and recording had to happen in under 45 minutes

#### Media inventory

- [x] Demo video (90 seconds, scripted)
- [ ] 6-slide HTML presentation file (ponder.html)
- [ ] Screenshots of the app in different states (recording, processing, results)
- [ ] X post with engagement (Day 5 post)
- [ ] Vercel deployment URL
- [ ] Screen recording of live voice capture → results

#### X post caption (as posted)

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

#### What this project proves

Under hackathon pressure, Samita made real architectural decisions: choosing hold-to-talk over push-to-start for psychological reasons, structuring output for progressive emotional engagement, integrating a real calendar API so actions aren't just listed but scheduled. This is product design thinking expressed through code, not Figma.

---

### Project 06: Prep
**Day 6 of the challenge**

#### Overview

| Field | Detail |
|-------|--------|
| Name | Prep (stylized as "prep.") |
| One-liner | A voice-first meal planning app — tell it what's in your fridge, get a full day of meals |
| Type | Personal / self-initiated |
| Timeline | Built in ~2 hours |
| Tools | Claude (Anthropic API) + Smallest.ai |
| Status | Working prototype |
| Deployed | Partial |

#### The problem it solves (and how the idea emerged)

Samita had just moved to a new place in SF. She doesn't enjoy cooking, doesn't know what to make, and was eating poorly. She wanted something where she could quickly say what she has and get told what to eat — not recipes with 47 ingredients, just real, practical food guidance.

The original idea was "if it told me why that's good for me, I'd be more happy" — she wanted nutritional context, not just meal suggestions. And she wanted to use voice because she'd just built Ponder with voice and loved the interaction pattern.

#### What it does (step by step)

1. **Input:** Voice or text — say/type what ingredients you have ("I have eggs, some rice, leftover chicken, and oat milk")
2. **AI processing:** Claude generates a full day of meals (breakfast, lunch, dinner) using those ingredients
3. **Output includes:**
   - Meal suggestions with brief descriptions
   - Nutritional breakdown
   - Whether what you have is sufficient for the day or if you need to shop/eat out
4. **Re-prompt box:** If the first suggestion isn't right, you can refine ("I don't want rice") without starting over
5. **Past logs:** localStorage-based history of previous meal plans so the app builds a lightweight record of what you've eaten

#### Key design decisions

**Decision 1: Voice-first input**
Inspired by Ponder. Speaking "I have eggs, rice, and chicken" is faster and more natural than typing it. The voice interaction removes friction from the most annoying part — listing what you have.

**Decision 2: Nutritional verdict, not just recipes**
The differentiator: Prep doesn't just tell you what to make. It tells you whether what you have is *enough* for a healthy day, and if not, what to grab from the store or whether to eat out. This is the "smart friend who knows your fridge" framing.

**Decision 3: Re-prompt box for iteration**
First-generation AI output is never perfect. The re-prompt box is more important than getting the first answer right — it gives users a low-friction way to refine without starting over. This is a transferable insight about AI interface design.

**Decision 4: Past logs via localStorage**
Lightweight persistence without a database. The app builds a history of what you've planned, which over time becomes useful data about eating patterns.

#### Technical details

- Built with Claude Code
- Anthropic API for meal planning logic
- Smallest.ai for voice input
- localStorage for past meal plan history
- Re-prompt box for iterative refinement

#### Media inventory

- [ ] Screenshot of voice input
- [ ] Screenshot of meal plan output with nutritional breakdown
- [ ] Screen recording of full flow
- [ ] X post with engagement (Day 6 post)

#### X post caption (as posted)

> Day 6 of building with AI.
>
> After building with voice-to-text recently, I kept thinking — where else could this actually be useful in my life?
>
> I just moved. I don't enjoy cooking much. I open my fridge and have no idea what to make.
>
> So I built Prep. You speak or type what you have, and it plans your full day — breakfast, lunch, dinner, nutritional breakdown, and whether you need to make a quick store run.
>
> For anyone who'd rather just eat well without the mental load.
>
> Built with: Claude + Smallest AI

#### What this project proves

The best product ideas come from personal pain points. And the re-prompt box insight — that AI interfaces need low-friction iteration, not perfect first outputs — is a design principle that applies to every AI product.

---

### Project 07: Loop Capture (Chrome Extension)
**Day 7 of the challenge**

#### Overview

| Field | Detail |
|-------|--------|
| Name | Loop Capture |
| One-liner | A Chrome extension that saves LinkedIn profiles to your Loop follow-up list in one click |
| Type | Personal / self-initiated (extends Day 4's Loop) |
| Timeline | Built in ~2 hours |
| Tools | Claude Code + Chrome Extension API + Google Calendar API |
| Status | Working extension |
| Deployed | Local Chrome extension (not on Chrome Web Store) |

#### The problem it solves

Loop (Day 4) required manually typing everything about who you met. But if you're already ON someone's LinkedIn profile, why type their name and title? The extension removes that friction entirely — one click and the profile is parsed, enriched, and saved.

#### What it does (step by step)

1. **User is on a LinkedIn profile page**
2. **Clicks the Loop Capture extension icon**
3. **Content script scrapes the page** — extracts name, job title, company from LinkedIn's DOM
4. **Claude normalizes and enriches** the scraped data (LinkedIn's class names are dynamic, so scraping is messy — Claude cleans it up and writes a brief summary)
5. **Popup shows pre-filled form** — name, context, with fields for next action and due date
6. **User adds their next action and saves**
7. **Data saves to the Loop database** (same Supabase instance from Day 4)
8. **Google Calendar integration** — the action item also creates a Calendar task as a reminder

#### Key design decisions

**Decision 1: Extending an existing project, not building from scratch**
This is product thinking, not just coding. Loop Capture makes Loop genuinely useful in a real workflow. The story of "I built something on Day 4, then on Day 7 I made it fit into how I actually work" is more compelling than 7 disconnected projects.

**Decision 2: AI-powered data cleaning**
LinkedIn's DOM is notoriously messy — class names are dynamic and change constantly. Instead of building brittle selectors, Samita used 5 different scraping strategies as fallbacks, with Claude cleaning up whatever raw text gets scraped. This is a pragmatic, AI-first approach to a hard problem.

**Decision 3: Pre-filled form, not auto-save**
The extension pre-fills the form but doesn't auto-save. You still add your own context (next action, due date). This gives you a moment of intentionality — you're not just collecting contacts, you're committing to a follow-up.

#### What was hard / what went wrong

- LinkedIn's DOM structure is dynamic and changes constantly — required multiple fallback scraping strategies
- Chrome extension architecture (manifest.json, content scripts, popup, background script, messaging between them) was a new paradigm
- Getting the extension to communicate with Supabase required understanding CORS and extension permissions

#### Technical details

- Chrome Manifest V3 extension
- Content script: scrapes LinkedIn profile page
- Popup: mini form UI (320px wide, DM Sans, warm orange save button)
- Background script: handles messaging between content script and popup
- Anthropic API: normalizes scraped data, generates contact summary
- Supabase: same database as Loop (Day 4)
- Google Calendar API: creates task/reminder from action items

#### Media inventory

- [ ] Screenshot of extension popup on a LinkedIn profile
- [ ] Screen recording showing the full flow (LinkedIn → extension → saved)
- [ ] X post with engagement (Day 7 post)

#### X post caption (as posted)

> Day 7 of building with AI.
>
> On Day 4 I built Loop, a networking tracker where you log who you met and what you promised them.
>
> Today I turned it into a Chrome extension — thinking how perfect it would be to sync it directly to the Loop app. Now I can be on anyone's LinkedIn profile, click the extension, and it saves them to my follow-up list automatically. It also adds the action directly to my Google Calendar as a task.
>
> The hardest part was getting it to reliably read a LinkedIn page. Lots of trial and error.
>
> Built with: Claude Code + Google Calendar API

#### What this project proves

Product thinking that spans multiple days — not just isolated demos. And the willingness to tackle a genuinely hard technical problem (scraping LinkedIn's dynamic DOM) with a pragmatic AI-first approach rather than brittle traditional selectors.

---

### Project 08: Artemis II Flappy Bird Game
**Day 8 of the challenge**

#### Overview

| Field | Detail |
|-------|--------|
| Name | Artemis II Tribute Game (Flappy Bird style) |
| One-liner | A flappy bird-style space game celebrating the Artemis II launch — pilot the capsule through space |
| Type | Personal / self-initiated, timed with Artemis II launch |
| Timeline | Built in ~2 hours |
| Tools | Emergent AI |
| Status | Complete, playable |
| Deployed | TBD |

#### The problem it solves / why it exists

This one isn't a productivity tool — it's a celebration. Artemis II launched on the day Samita built this, and she wanted to mark the moment by building something fun. She had also never built a game before and wanted to start somewhere.

#### What it does

- Tap/click to fly the space capsule
- Dodge obstacles (space debris / asteroid field style)
- Score counter
- Space-themed visuals matching the Artemis II mission aesthetic

#### Key design decisions

**Decision 1: Tie it to a real-world event**
Building the game on the day of the Artemis II launch makes it timely, relevant, and shareable — not just another Flappy Bird clone.

**Decision 2: Keep it simple — first game ever**
Deliberately chose Flappy Bird as the template because it's the simplest game mechanic (tap to fly, avoid obstacles). The learning was about game development fundamentals (game loops, physics, collision detection), not complexity.

**Decision 3: New tool — Emergent AI**
Used Emergent AI for the first time, adding another tool to the building toolkit.

#### What was hard / what went wrong

- Game development is a completely different paradigm from web apps — game loops, frame-by-frame rendering, collision detection, physics
- First time thinking about real-time animation and frame rates

#### Technical details

- Built with Emergent AI
- Game loop, tap/click physics, collision detection
- Score tracking
- Space-themed visual assets

#### Media inventory

- [ ] Screenshot of gameplay
- [ ] Screen recording of playing the game
- [ ] X post with engagement (Day 8 post)

#### X post caption (as posted)

> Day 8 of building with AI.
>
> Artemis II launched today. I built a game to celebrate.
>
> I've never built a game before so I wanted to start somewhere simple. A flappy bird style tribute where you pilot the capsule through space.
>
> Building a game is a completely different challenge from everything else I've done this challenge. Excited to make more.
>
> Built with: Emergent AI

#### What this project proves

Range. Going from voice interfaces to databases to browser extensions to game development in 8 days shows a designer who isn't afraid of any technical domain. The Artemis II timing also shows cultural awareness and the ability to make work feel relevant and timely.

---

## Part 4: Cross-Project Analysis

### Technical concepts learned across the challenge

| Day | Concept | Project |
|-----|---------|---------|
| 1 | Shipping code for the first time | Haru |
| 2 | APIs and external services | Maison |
| 3 | AI models and how they differ | Decode |
| 4 | Databases and persistence | Loop |
| 5 | Real-time voice streaming, OAuth | Ponder |
| 6 | Combining voice + AI + personal data | Prep |
| 7 | Browser extensions and page scraping | Loop Capture |
| 8 | Game development fundamentals | Artemis game |

### Design principles that emerged

These principles weren't planned — they emerged from building:

1. **AI interfaces need iteration, not perfection.** First-generation AI output is never perfect. The re-prompt box (Prep), the side-by-side comparison (Decode), and the editable pre-fill (Loop Capture) all solve this same problem differently.

2. **Voice removes the friction that matters most.** For brain dumps (Ponder), ingredient listing (Prep), and quick captures, voice input isn't a gimmick — it's the difference between doing the thing and not doing it.

3. **Products should extend into existing workflows.** Loop as a standalone app is good. Loop Capture as a Chrome extension that lives inside LinkedIn is genuinely useful. The best AI tools meet you where you already are.

4. **Mood and emotional state are valid inputs.** Haru's mood-first approach and Ponder's mood word output both treat emotional state as functional data, not decoration. This is a transferable principle for any AI product that personalizes.

5. **The best ideas come from personal pain.** Every strong project in the challenge (Loop, Ponder, Prep) started with a real problem Samita personally had. The weaker ones are the ones built for abstract learning.

### Tools comparison (from experience)

| Tool | Best for | Limitations |
|------|----------|-------------|
| Claude Code | Multi-file projects, debugging, complex logic | Overkill for simple single-file builds |
| Cursor | Day 1 starting point, AI-assisted editing | Less useful once you understand the code yourself |
| Replit | Quick deploys, live URLs, hosted apps | Limited design control |
| Lovable | Fast visual prototypes with API integration | Less control over code structure |
| Emergent AI | Quick game/app builds | Limited exposure so far |

---

## Part 5: Media & Assets Inventory

### What exists

- [x] X post captions for all 8 days
- [x] X engagement screenshots (to be added)
- [x] Demo video for Ponder (90-second hackathon submission)
- [ ] Screen recordings for individual projects (can be created)
- [ ] Screenshots of each project's key screens (can be captured)

### What needs to be created

- [ ] Hero montage video (15-20 sec — quick cuts between Ponder, Decode, Loop, Haru showing the best moment of each)
- [ ] Individual project screen recordings for portfolio embeds
- [ ] Engagement metrics summary from X posts

### Deployed URLs

| Project | URL | Status |
|---------|-----|--------|
| Decode | decode--samitaprakash.replit.app | Live |
| Ponder | [Vercel URL — to be confirmed] | Deployed |
| Loop | [Replit URL — to be confirmed] | On Replit |
| Others | Local / GitHub | Not deployed |

---

## Part 6: How to Use This Document

### For portfolio case study (Claude Code)
Feed the relevant sections to Claude Code with your page component structure. The hero headline, section copy, and media placeholders are all here. Focus on Part 1 (the story) and Part 3 (individual projects) — Part 4 (cross-project analysis) is great for a summary section at the bottom.

### For interview prep
Read Part 4 (design principles) — these are the insights that make you sound thoughtful in interviews, not just "I built stuff." Each principle connects to a broader AI design philosophy.

### For pitch / networking
The one-liner for the whole case study: "I'm a product designer who taught herself to build by shipping 8 AI tools in 8 days — voice interfaces, Chrome extensions, games, databases — all documented publicly."

### For future updates
As you continue the 60-day challenge, add new projects to Part 3 using the same template. The document grows with you.

---

*Document created April 2, 2026*
*Source: Conversations between Samita Belliganood and Claude across March–April 2026*
