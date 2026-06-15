# Project Log: Loop
> **Day 4 of 60-day challenge · March 12, 2026 · Filled from conversation transcripts**

---

## The basics

**Project name:** Loop
**One-liner:** A personal networking memory assistant — type naturally about who you met, it parses, saves, and reminds you to follow up.
**Day number:** 4
**Date built:** March 12, 2026
**Time spent:** ~3 hours
**Tools used:** Replit + Claude (Anthropic API) + Supabase

---

## The story

**What problem does this solve?**
Samita had been networking heavily across SF — hackathons, conferences, meetups, coworking spaces — and kept forgetting what she promised people. "I'll send my resume tomorrow" — forgotten. "I'll text you next week" — never happened. She needed something where she could quickly brain-dump a networking interaction in plain English and get reminded of the follow-up.

**How did the idea come up?**
When brainstorming Day 4, Samita was asked "what's something annoying or repetitive you do every day?" Her answer: "I've been trying to network and manage where I am with each person. Sometimes I forget I just met someone and I'd told them I'll reach out on text the next day." The app designed itself from that frustration.

The original concept evolved during conversation — started as a simple CRM form, then pivoted to natural language input ("wait, it's like a chatbot — I quickly type in what happened and it should save"). This pivot is significant: the designer instinct was to remove the form and let the AI handle the parsing.

**What does it actually do?**
1. **One text box** at the bottom — type naturally: "Just met James at a design conference, he runs a UX agency and wants to collaborate on a fintech app, I'll send him my portfolio on LinkedIn tomorrow"
2. **Claude parses** the natural language and extracts: name, context (where you met), next action, due date
3. **Shows confirmation** of parsed data before saving
4. **Saves to Supabase** (PostgreSQL database)
5. **Today view (home):** Cards for contacts with follow-ups due today or overdue, each with a Done button
6. **All view:** Scrollable list of every saved contact with status

---

## Decisions you made

**What's the most interesting design/product decision you made and why?**
Natural language input over form fields. No dropdowns, no date pickers, no structured form. Just one text box where you type like you're texting yourself. This was a deliberate UX decision: when you've just met someone at an event, you don't think in form fields. You think in stories. "I just met this person, we talked about this, I should do this." The AI should adapt to how humans actually think, not force humans to adapt to database schemas.

**Did you consider an alternative approach and reject it? What and why?**
The initial concept WAS a form-based CRM with fields for name, context, action, date. Samita pivoted mid-conversation to the natural language approach because it matched how she'd actually use it — quickly, on the go, at an event. The form version would have been faster to build but worse to use.

**What would you do differently if you had more time?**
Add voice input (came later with Loop Capture). Smart suggestions based on past interactions ("you met 3 people at this event, want to batch your follow-ups?"). Weekly email digest of pending follow-ups.

---

## What was hard

**What broke, confused you, or took way longer than expected?**
First time working with a database. A friend had told Samita "databases are a hard concept" which created initial anxiety. Had to learn Supabase from scratch: creating a project, defining tables and columns, understanding Row Level Security (had to disable RLS to avoid auth complexity). The connection between frontend and database was the trickiest part — but with Supabase's client library + AI assistance it was "mostly copy-paste."

**What technical concept did you learn today?**
Databases and data persistence. Before today, everything Samita built disappeared when you closed the browser. After today, data survives. "Small concept. Big unlock."

**Rate your understanding of that concept now (1-5):** 3

---

## The build

**New tool or API you used for the first time?** Supabase (database + backend)

**Is it deployed? URL:** On Replit [TODO: confirm URL]

**Code location:** Replit project

**Database schema:**
- Table: `contacts`
- Columns: `id` (uuid), `name` (text), `context` (text), `next_action` (text), `due_date` (date), `created_at` (timestamp), `done` (boolean, default false)

---

## The post

**X caption:**
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

**Engagement:**
- Likes: [TODO]
- Reposts: [TODO]
- Replies: [TODO]
- Notable replies: [TODO]

**Did anything happen because of this post?**
[TODO]

---

## Media

- [ ] Screenshot of natural language input
- [ ] Screenshot of Today view with follow-up cards
- [ ] Screen recording of full flow (type → parse → save → view)
- [ ] X post screenshot with engagement [TODO]

---

## The takeaway

**In one sentence, what does this project prove about you as a designer?**
The best products solve problems you personally have — and the decision to use natural language input over form fields shows a designer who prioritizes how humans actually think over how databases actually work.

---

## Connection to other projects

Loop was extended on **Day 7** with **Loop Capture** — a Chrome extension that saves LinkedIn profiles directly into this same Supabase database. The two projects together show product thinking that spans multiple days, not just isolated demos.
