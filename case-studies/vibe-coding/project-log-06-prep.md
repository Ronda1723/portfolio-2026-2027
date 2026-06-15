# Project Log: Prep
> **Day 6 of 60-day challenge · March 17, 2026 · Filled from conversation transcripts**

---

## The basics

**Project name:** Prep (stylized as "prep.")
**One-liner:** A voice-first meal planning app — tell it what's in your fridge, get a full day of meals with nutritional context.
**Day number:** 6
**Date built:** March 17, 2026
**Time spent:** ~2 hours
**Tools used:** Claude (Anthropic API) + Smallest.ai

---

## The story

**What problem does this solve?**
Samita had just moved to a new place in SF. Doesn't enjoy cooking, doesn't know what to make, and was eating poorly. Most meal planning apps are recipe-heavy and assume you want to cook elaborate meals. Prep is for people who just want to eat well without the mental load — tell it what you have, it tells you what to eat and whether that's enough for the day.

**How did the idea come up?**
On Day 6, Samita was asked "what's been annoying you or missing from your life this week?" Answer: "I haven't been eating well." Follow-up: "Don't like cooking, don't know what to make. Just moved to a new place. Hard to track."

The key insight that shaped the product: "If it told me WHY that's good for me, I'd be more happy." She didn't just want meal suggestions — she wanted nutritional context and a verdict on whether what she has is sufficient. Like a smart friend who knows your fridge and actually cares about your health.

The voice input was inspired by Ponder (Day 5) — after building with voice at the hackathon, she kept thinking "where else could this be useful in my life?"

**What does it actually do?**
1. **Voice or text input** — say/type what ingredients you have ("I have eggs, some rice, leftover chicken, and oat milk")
2. **Claude generates a full day of meals** — breakfast, lunch, dinner using those ingredients
3. **Nutritional breakdown** included with each suggestion
4. **Sufficiency verdict** — whether what you have is enough for a healthy day, or if you need to shop/eat out
5. **Re-prompt box** — refine without starting over ("I don't want rice", "something quicker for lunch")
6. **Past logs** — localStorage-based history of previous meal plans

---

## Decisions you made

**What's the most interesting design/product decision you made and why?**
The re-prompt box. First-generation AI output is never perfect. Rather than optimizing for a perfect first answer, Samita designed for easy iteration. The re-prompt box lets you refine ("no rice", "something quicker") without starting over. This is a transferable insight about AI interface design: **low-friction iteration matters more than high-quality first output.**

**Other key decisions:**
- **Voice-first input:** Speaking "I have eggs, rice, and chicken" is faster and more natural than typing. Removes friction from the most annoying part of meal planning — listing what you have.
- **Nutritional verdict, not just recipes:** Prep doesn't just suggest meals. It tells you whether your ingredients are ENOUGH for a healthy day, and if not, what to grab or whether to eat out. This is the "smart friend" differentiator.
- **Past logs via localStorage:** Lightweight persistence without needing a database. Over time builds a useful record of eating patterns.

**Did you consider an alternative approach and reject it? What and why?**
Could have built a full recipe app with step-by-step instructions. Rejected because the target user (someone who doesn't enjoy cooking) doesn't want recipes — they want answers. "What should I eat?" not "How do I cook this?"

**What would you do differently if you had more time?**
Actual database instead of localStorage. Photo input (take a photo of your fridge). Integration with grocery delivery (one tap to order missing ingredients). Dietary preferences that persist across sessions.

---

## What was hard

**What broke, confused you, or took way longer than expected?**
Relatively smooth build since it combined skills from Ponder (voice) and Loop (AI parsing). The main challenge was prompting Claude to consistently return structured meal plans with accurate nutritional information — required iteration on the system prompt.

**What technical concept did you learn today?**
Combining multiple previously learned skills (voice + AI + local storage) into a cohesive product. Also localStorage as a lightweight alternative to a full database.

**Rate your understanding of that concept now (1-5):** 4

---

## The build

**New tool or API you used for the first time?** localStorage for persistence (no new external tools — this project combined existing skills)

**Is it deployed? URL:** [TODO: check]

**Code location:** Claude Code project

---

## The post

**X caption:**
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

**Engagement:**
- Likes: [TODO]
- Reposts: [TODO]
- Replies: [TODO]
- Notable replies: [TODO]

**Did anything happen because of this post?**
[TODO]

---

## Media

- [ ] Screenshot of voice/text input
- [ ] Screenshot of meal plan output with nutritional breakdown
- [ ] Screenshot of re-prompt box in action
- [ ] Screen recording of full flow
- [ ] X post screenshot with engagement [TODO]

---

## The takeaway

**In one sentence, what does this project prove about you as a designer?**
The best product ideas come from personal pain points, and the re-prompt box insight — that AI interfaces need low-friction iteration rather than perfect first outputs — is a design principle that applies to every AI product.

---

## Key insight for portfolio

The re-prompt pattern Samita designed for Prep is one of the most transferable design principles from the entire challenge. Most AI interfaces treat the output as final. Prep treats it as a first draft that the user can refine conversationally. This pattern applies to any AI product — code assistants, writing tools, search, recommendations.
