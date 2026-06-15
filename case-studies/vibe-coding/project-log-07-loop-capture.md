# Project Log: Loop Capture (Chrome Extension)
> **Day 7 of 60-day challenge · March 19, 2026 · Filled from conversation transcripts**

---

## The basics

**Project name:** Loop Capture
**One-liner:** A Chrome extension that saves any LinkedIn profile to your Loop follow-up list in one click — with AI-generated summaries and Google Calendar sync.
**Day number:** 7
**Date built:** March 19, 2026
**Time spent:** ~2 hours
**Tools used:** Claude Code + Chrome Extension API (Manifest V3) + Anthropic API + Google Calendar API + Supabase

---

## The story

**What problem does this solve?**
Loop (Day 4) required manually typing everything about who you met. But if you're already on someone's LinkedIn profile, why retype their name, title, and company? Loop Capture removes that friction — one click on any LinkedIn profile and the person is parsed, enriched, and saved to your follow-up list.

**How did the idea come up?**
On Day 7, Samita was choosing between authentication, browser extensions, and payments as the next concept to learn. Browser extension paired naturally with an existing project: "What if Loop had a Chrome extension? You're on someone's LinkedIn profile — click the extension — it auto-fills their name and context — you add your next action — saved."

The insight that sealed it: "I built something on Day 4. On Day 7 I made it actually fit into how I work." That's product thinking, not just coding.

**What does it actually do?**
1. User is browsing LinkedIn and lands on someone's profile
2. Clicks the Loop Capture extension icon in Chrome toolbar
3. **Content script scrapes the page** — extracts name, job title, company from LinkedIn's DOM
4. **Claude normalizes the data** — LinkedIn's class names are dynamic and messy, so 5 different scraping strategies are used as fallbacks, with Claude cleaning up and writing a brief summary
5. **Popup shows pre-filled mini form** — name, AI-generated context summary, with editable fields for next action and due date
6. User adds their follow-up commitment and hits Save
7. **Data saves to Supabase** — same database as Loop (Day 4)
8. **Google Calendar integration** — action item also creates a Calendar task as a reminder
9. Includes a **checklist view** and **detail view** for saved contacts within the extension

---

## Decisions you made

**What's the most interesting design/product decision you made and why?**
Extending an existing project instead of building from scratch. This is product ecosystem thinking. Loop as a standalone app is fine. Loop + Loop Capture as a Chrome extension that lives inside your existing workflow (LinkedIn browsing) is genuinely useful. The combination is worth more than either piece alone.

**Other key decisions:**
- **AI-powered data cleaning over brittle selectors:** LinkedIn's DOM is notoriously unstable — class names are dynamic and change constantly. Instead of building precise CSS selectors that would break next week, Samita used 5 different scraping strategies as fallbacks with Claude cleaning up whatever raw text gets extracted. Pragmatic, AI-first approach to a hard problem.
- **Pre-filled form, not auto-save:** The extension pre-fills data but doesn't auto-save. You still manually add your next action and due date. This creates a moment of intentionality — you're committing to a follow-up, not just hoarding contacts.
- **320px popup width with warm orange save button:** Designed to feel like a mini version of Loop. DM Sans font, clean white background, rounded inputs. Should feel native to Chrome, not like a foreign app.

**Did you consider an alternative approach and reject it? What and why?**
Could have built a standalone browser extension CRM that's unrelated to Loop. Rejected because the power is in the connection — it's more impressive and more useful when it feeds into an existing system. Also considered auto-detecting when you're on a LinkedIn profile and showing a notification, but decided click-to-open was less intrusive.

**What would you do differently if you had more time?**
Auto-detect LinkedIn profiles and show a subtle indicator. Batch operations ("save all 5 people from this event"). Import from LinkedIn connections list. Two-way sync so changes in Loop web app reflect in the extension.

---

## What was hard

**What broke, confused you, or took way longer than expected?**
- LinkedIn's DOM structure is genuinely hard to scrape — dynamic class names that change on different profile layouts (classic vs. new, logged in vs. logged out, different profile sections). Required 5 fallback scraping strategies.
- Chrome extension architecture was a completely new paradigm: manifest.json, content scripts, popup scripts, background scripts, and the messaging system between them. Had to understand how these pieces communicate.
- CORS and extension permissions for connecting to Supabase from within a Chrome extension context.

**What technical concept did you learn today?**
Chrome extension development (Manifest V3), content scripts, page scraping, cross-origin communication from extensions.

**Rate your understanding of that concept now (1-5):** 3

---

## The build

**New tool or API you used for the first time?** Chrome Extension API (Manifest V3)

**Is it deployed? URL:** Local Chrome extension (loaded via Developer Mode, not on Chrome Web Store)

**Code location:** Claude Code project (loop-extension folder)

**Files:**
- `manifest.json` — Manifest V3 configuration
- `popup.html` + `popup.js` — mini form UI
- `content.js` — scrapes LinkedIn profile pages
- `background.js` — handles messaging between content script and popup

---

## The post

**X caption:**
> Day 7 of building with AI.
>
> On Day 4 I built Loop, a networking tracker where you log who you met and what you promised them.
>
> Today I turned it into a Chrome extension — thinking how perfect it would be to sync it directly to the Loop app. Now I can be on anyone's LinkedIn profile, click the extension, and it saves them to my follow-up list automatically. It also adds the action directly to my Google Calendar as a task.
>
> The hardest part was getting it to reliably read a LinkedIn page. Lots of trial and error.
>
> Built with: Claude Code + Google Calendar API

**Engagement:**
- Likes: [TODO]
- Reposts: [TODO]
- Replies: [TODO]
- Notable replies: [TODO]

**Did anything happen because of this post?**
[TODO]

---

## Media

- [ ] Screenshot of extension popup on a LinkedIn profile (used Rounak's profile for demo)
- [ ] Screen recording: LinkedIn profile → click extension → pre-filled form → save → calendar
- [ ] X post screenshot with engagement [TODO]

---

## The takeaway

**In one sentence, what does this project prove about you as a designer?**
Product thinking that spans multiple days — extending Loop into a Chrome extension shows ecosystem thinking, and tackling LinkedIn's messy DOM with an AI-first approach (let Claude clean it up) shows pragmatic problem-solving over brittle perfectionism.
