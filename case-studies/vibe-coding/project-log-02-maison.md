# Project Log: Maison
> **Day 2 of 60-day challenge · March 10, 2026 · Filled from conversation transcripts**

---

## The basics

**Project name:** Maison
**One-liner:** An AI-powered dream home generator — describe your vibe, get a luxury concept with a real moodboard.
**Day number:** 2
**Date built:** March 10, 2026
**Time spent:** ~3 hours
**Tools used:** Lovable + Claude + Groq + Unsplash API

---

## The story

**What problem does this solve?**
Home design inspiration is fragmented across Pinterest boards, Instagram saves, and magazine screenshots. Maison lets you describe a vibe in natural language ("warm minimalist Scandinavian with dark wood accents") and generates a cohesive design concept with a real moodboard pulled from Unsplash.

**How did the idea come up?**
Day 2 was about learning APIs — connecting to real external services for the first time. Home design felt like a natural domain because it's visual, aspirational, and benefits from both AI text generation (the concept) and real image search (the moodboard).

**What does it actually do?**
1. User types a description of their dream home vibe in a text input
2. Groq API generates the design concept — style description, key design elements, color palette suggestions
3. Unsplash API pulls relevant moodboard images based on the generated concept keywords
4. Results display in a luxury editorial layout — concept description alongside a curated moodboard grid

---

## Decisions you made

**What's the most interesting design/product decision you made and why?**
Using real Unsplash photography instead of AI-generated images for the moodboard. AI-generated interiors still have an uncanny quality that undermines trust. Real photos from Unsplash feel more aspirational and authentic, which matters in a design context where visual quality IS the product.

**Did you consider an alternative approach and reject it? What and why?**
Could have used DALL-E or Midjourney for generated room images. Rejected because the uncanny valley problem with AI interiors would undermine the luxury feel. Also considered Gemini API but hit compatibility issues — pivoted to Groq which was faster and had a free tier.

**What would you do differently if you had more time?**
Add a "save board" feature. Let users iterate on the concept ("more warm, less industrial"). Generate a shareable link so you could send your moodboard to a partner or interior designer.

---

## What was hard

**What broke, confused you, or took way longer than expected?**
First time working with APIs and didn't understand what a "model" actually was. Felt like just copy-pasting an API key without knowing what she was choosing or why different platforms (Gemini, Groq) have different models. The Gemini API key integration was initially broken. This confusion directly inspired Day 3 (Decode).

**What technical concept did you learn today?**
What APIs are, how API keys work, how to connect a frontend to external services.

**Rate your understanding of that concept now (1-5):** 2 (knew it worked but not deeply why)

---

## The build

**New tool or API you used for the first time?** Lovable (app builder), Groq API, Unsplash API

**Is it deployed? URL:** On GitHub

**Code location:** GitHub

---

## The post

**X caption:**
> Day 2 of building with AI.
>
> Today I learned what an API actually is.
>
> Built Maison, a dream home generator. Lets you describe your vibe and generates a concept and pulls a real moodboard.
>
> Fought with API keys, quota limits, and model names that no longer exist. Learned a lot in 3 hours.
>
> Built with: Lovable + Claude + Groq + Unsplash

**Engagement:**
- Likes: [TODO]
- Reposts: [TODO]
- Replies: [TODO]
- Notable replies: Rounak suggested adding a feature. Engagement growing from Day 1.

**Did anything happen because of this post?**
[TODO: check]

---

## Media

- [ ] Screenshots of a generated concept + moodboard [TODO: capture]
- [ ] Screen recording of the full flow
- [ ] X post screenshot with engagement [TODO]
- [ ] GitHub URL [TODO: confirm link]

---

## The takeaway

**In one sentence, what does this project prove about you as a designer?**
By Day 2, already integrating multiple external APIs and making deliberate design choices (real photos over AI-generated ones) that prioritize user trust over technical novelty.
