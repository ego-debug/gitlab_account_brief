# Project Template — Account Brief / Editorial Web Doc

> **This repo is a template.** It is currently configured as a custom interactive account brief on **Affirm** for a **GitLab** SDR application, and is intentionally maintained as a reusable scaffold for future projects — different account briefs, different employers, or any other long-form editorial single-page web doc that requires a research-driven, voice-clean, AI-tell-free output.
>
> **If you're a Claude session starting fresh on this repo:**
> - Treat this CLAUDE.md as the source of truth for voice, structure, and AI-tell rules.
> - Read `prep/` (gitignored, local-only) for any project-specific private context the user has set up.
> - Cross-conversation user preferences live in the `.claude/projects/.../memory/` directory and are auto-loaded — don't re-derive them.
> - Default to surgical edits over rewrites. Default to short, declarative voice. Default to honest framing over clever metaphors.
>
> **What stays across all projects on this template:**
> - The voice principles (section below)
> - The complete AI-tell list (section below)
> - The 9-section component structure
> - The dark warm monochrome palette
> - The Co-Authored-By Claude commit-trailer convention
> - The `prep/` gitignore convention
>
> **What changes per new project:**
> - The account/employer/topic of the brief
> - Sections §02, §03, §04, §05, §07-Block-04, §08 prose
> - Hero title text and OG image text overrides
> - The repo name + URL on a fresh clone

---

## What this project is

A one-page interactive brief that demonstrates an SDR candidate's research, outbound craft, and personal positioning for a specific account at a specific employer. Built as the alternative to a slide deck.

**Currently configured for:** GitLab SDR opening, targeting Affirm as the sample account
**Live at:** Vercel deploy from `main` branch
**Repo visibility:** Public on GitHub (so commit messages and code are visible)

---

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS 3** with custom dark warm palette
- **Framer Motion** for sustained-scroll motion, plus pure CSS keyframes for the hero (more reliable than framer for hero entrance)
- **JetBrains Mono Bold (700)** for display headlines via Tailwind class `font-pixel` (mapped to `var(--font-mono)`). Originally was VT323 pixel font, swapped because pixel reads playful.
- **Inter** for body
- **Sharp + mozjpeg** for screenshot compression
- **next/og** for OG image and favicon generation at edge
- Static prerendered to `~140 KB First Load JS`

---

## Color palette (dark warm monochrome)

Define in `tailwind.config.ts`:

| Name | Hex | Use |
|---|---|---|
| `cream.DEFAULT` | `#141110` | Page background (dark warm) |
| `cream.50` | `#0C0A09` | Deepest dark surface (CTA section, cold-call mockup, contact tiles) |
| `cream.200` | `#1A1714` | Slightly elevated alt section bg, email body |
| `cream.300` | `#221E1A` | Card/raised surface |
| `ink.DEFAULT` | `#EDE7DA` | Primary text (warm bone) |
| `ink.700` | `#D5CCB9` | Secondary text |
| `ink.600` | `#A89F92` | Tertiary text |
| `forest.DEFAULT` | `#1F1B16` | Elevated dark "callout" panel surface (Tezi callout) |
| `accent.DEFAULT` | `#BFB39E` | Subtle warm bone accent (very sparing) |

**No chromatic colors anywhere on prose.** No gold, no green, no purple. Accent is just a bone-tinted shade.

---

## Site structure (9 sections)

Located in `app/components/`:

| Section | Component | What it does | Stays per new account? |
|---|---|---|---|
| §01 Hero | `Hero.tsx` | Title page, name, tagline, scroll cue | Update title only |
| §02 Account Research | `AffirmAccount.tsx` (rename per account) | Research synthesis on the target account | **Rewrite per account** |
| §03 Where [Employer] Fits | `GitLabFit.tsx` (rename per employer) | Articulate employer's value prop, why this account is a fit, stat row | Update employer name + buyer/pitch/why-fit prose |
| §04 Sample Call | `ColdCall.tsx` | Interactive 3-stage cold call playthrough | **Rewrite script per account** |
| §05 Sample Email | `Email.tsx` | Animated email mockup as the rep | **Rewrite per account** |
| §06 What I've Built | `Portfolio.tsx` | Personal SaaS portfolio with screenshots | Stays (personal projects don't change) |
| §07 Why I'm The Right Rep | `WhyMe.tsx` | 4-block essay: ops background, builder experience, active outbound, why employer | Update Block 04 (Why [Employer]) per role |
| §08 First 30 Days | `FirstThirty.tsx` | 4 priorities for ramping in the new role | Update employer name in priorities |
| §09 Let's Talk | `CTA.tsx` | Big closer + contact tiles with click-to-copy | Stays |

**Sections that need rewriting per new account:** §02, §03, §04, §05, §07 Block 04, §08 priorities (employer name only).

Components also include: `SectionHeader.tsx`, `ProgressNav.tsx`, `AnimatedNumber.tsx`.

---

## Voice principles (learned through ~30 revisions)

These are the user's preferences. Hold these unless explicitly overridden.

### Honest framing > clever framing
- Don't claim experience you don't have ("buyer side of senior engineering hiring" when they're a solo builder = overclaim)
- Don't bridge with metaphors that won't hold up ("Same job, different uniforms" comparing fast food to sales = stretch)
- Pre-empt objections with honest concession: *"None of it was sales. All of it was volume, pressure, and showing up the next day."*
- Acknowledge timing truthfully: *"I started running outbound this week"* not *"I've been running outbound..."*

### Concrete > abstract
- Specific numbers > vague qualifiers ("by end of week 2" not "deeply enough")
- Real activities > corporate-speak ("walking new hires through their first shifts and giving direct feedback when needed" not "owning training, performance check-ins, and direct accountability conversations")
- Named outcomes > generic claims ("Carrefour cut $350K/year and halved time-to-market by consolidating to GitLab" not "GitLab helps with DevOps")

### Short, declarative sentences for personal voice
- 3-5 sentence paragraphs. Each sentence does one thing.
- Sentence fragments are OK when they list specifics (e.g., job names, places).
- Avoid chained `and... and...` constructions.

### No personal details on the public artifact
- No mentions of partners, family, religious affiliations, or other personal context
- Hold those for in-person interview disclosure when specifically probed
- Personal context belongs in `prep/` (gitignored), not the public site

### Avoid SDR-jargon-as-costume
- Don't use SDR vocabulary as if you're already an SDR ("the reps are happening now")
- Use real SDR terms only when accurate and unobtrusive ("sequences," "ICP," "discovery question" — all fine in context)
- Recruiters can tell when someone learned the vocab last week vs lived it

---

## AI tells to kill (the comprehensive list)

Run before every commit. If any of these appear, rewrite.

### Banned characters

| Character | Replacement |
|---|---|
| em dash `—` | period or comma |
| en dash `–` | hyphen `-` |
| left curly apostrophe `'` | straight apostrophe `'` |
| right curly apostrophe `'` | straight apostrophe `'` |
| left curly quote `"` | straight quote `"` |
| right curly quote `"` | straight quote `"` |
| ellipsis char `…` | three periods `...` |

### Banned words (corporate/AI register)

- leverage / leveraging / leveraged
- spearhead / spearheaded
- robust
- comprehensive
- seamless
- streamlined
- cutting-edge
- best-in-class
- passionate about
- results-driven
- synergy / synergies
- holistic
- paradigm
- utilize (use "use")
- mission-critical
- value-add
- moving forward
- in order to (use "to")
- at this point in time (use "now")
- due to the fact that (use "because")
- architected (use "built")
- conducted competitive intelligence (use "researched")

### Banned phrasal patterns

| Pattern | Why it reads AI |
|---|---|
| "X is built for that Y" | Generic AI template construction |
| "X is in motion" / "at an inflection point" | Generic punchy company-state opener |
| "actually [intensifier]" ("actually matters", "actually works") | Soft-intensifier defensive frame |
| "scaling on two fronts" / "on multiple fronts at once" | Stock SaaS marketing phrase |
| "exactly where X beats Y" | Defensive comparison construction |
| "The pattern I see in..." (when implying ongoing dialogue you don't have) | Implied-experience overclaim |
| "complaint I hear from..." (same) | Same |
| "I talk to" / "I work with" (when implying ongoing professional conversations you don't have) | Same |
| "the throughline" | AI metaphor, no human says this |
| "the work translates" | Two-word marketing register |
| "in my own voice, on my own time" (back-to-back "my own ___") | Parallel construction AI fingerprint |
| "stakeholder type" (instead of buyer/title/persona) | Corporate-HR speak |
| "deeply enough" / "fully enough" / "well enough" | AI vague qualifier |
| "build daily activity habit" | Sandler-book register |
| "real relationships" / "long term" stacked together | Vague qualifier stacking |
| Three-gerund-fragment lists ("X-ing A, Y-ing B, Z-ing C") | AI rhythm pattern |
| "X is the textbook Y" | Forced-credibility construction |

### Banned overclaims for solo builders / new SDRs

- "Buyer side of senior engineering hiring" — solo builders aren't buyers
- "What an open senior role costs a small team" — solo builders don't have teams with open roles
- "Operations leadership" — shift leads at fast food aren't "leaders" in the corporate sense
- "Cross-functional coordination" — at a Chipotle this is just "coordinating with kitchen and front of house"
- "Asking for the close at every interaction" (at fast food upselling) — too much SDR-translation
- "Designed segment-specific outreach plans for two distinct ICPs" (for solo founder outreach) — heavy SaaS-VP register for small-scale work
- "Own the full go-to-market motion" (solo founder) — same
- "Same job, different uniforms" (comparing fast food/warehouse to sales) — stretches the metaphor

---

## Pattern templates that work

### Cold call — 3 stages

**Stage 01: Permission opener (~12 sec)**
Lead with research, not introduction. Format:
1. Sentence 1: acknowledgment of recent event ("congrats on the [trigger event]") + name yourself ("This is [name] from [employer]")
2. Sentence 2: own that it's a cold call. Ask for 30 seconds. Tell them they can hang up.

Example structure:
> "Hi [name], congrats on [recent trigger]. This is [you] from [employer]. By every definition this is a cold call. Can I take 30 seconds to tell you why I'm calling? If not, hang up."

**Stage 02: Value prop (~12 sec)** — short, pain-focused, NOT metric-heavy
1. Sentence 1: name what they're doing right now (recent specific events)
2. Sentence 2: name the pain in their words ("Companies in that spot usually...")
3. Sentence 3: one short tease of how you help — DON'T list features/numbers here

Cold calls are NOT the place for the metric list (48hr / 30-50% / etc.). Save those for the email.

**Stage 03: Discovery (~4 sec)**
Single short open question. Hand the conversation back. Don't fill silence.
Example: *"What's slowing engineering hiring down right now?"*

### Sample email — 5 paragraphs

1. "Hi [name],"
2. **Acknowledgment with editorial take** ("Saw you brought on the [team]. [What it tells you about their direction].")
3. **Context paragraph** (open roles + integration moment, 2 short sentences)
4. **Pain → solution paragraph** (the metrics live here): "Companies in your spot usually [pain]. [Specific pain X]. [Specific pain Y]. [Employer] [specific solution with 2-3 numbers]."
5. **The ask** ("Would 15 minutes next week be useful to compare your current X against what we'd put on the table?")
6. **Sig** ("[Name], [Employer]")

From-address in the email mockup should be `[name]@[employer-domain].com` (the soft "if you know, you know" hire signal).

### Personal essay — 4 blocks

1. **Operations Background** — pre-empt the "no sales experience" objection. *"None of it was sales. All of it was [transferable muscles]."*
2. **Builder Experience / Background relevant to buyer side** — own what you actually experienced, not what you wish
3. **Active Outbound** — be honest about timing if you just started. *"I started running outbound this week."* Don't dress it up
4. **Why [Employer]** — name the specific seat, why the work matters to you, then the long-term ladder ("earn this role, earn the [next role], build a career here"). Closing trait list ("I bring X, Y, Z. I'm coachable, I take feedback, and I show up.")

### First 30 Days — 4 priorities

Each priority must have:
- A real verb (Know / Sit on / Hit / Identify)
- A specific number (week 2, top 3 SDRs, 2-3 mentors, 15 minutes)
- A time anchor (by end of week X / by end of month)
- A defensible outcome (deliver without notes / build my own / earn 15 min)

Avoid: "deeply enough," "track everything," "real relationships," "build daily activity habit," "stakeholder type."

---

## Workflow for a new account brief

When starting a new brief on a different account / for a different employer:

1. **Branch the repo** (or fork): `git checkout -b new-account/[name]`
2. **Update §02** (`AffirmAccount.tsx` — rename to `[Account]Account.tsx`): rewrite the lead, the side facts, the callout panel, the closing
3. **Update §03** (`GitLabFit.tsx` — rename to `[Employer]Fit.tsx`): rewrite the buyer / pitch / why-fit blocks. Update the stat row if employer's stats differ.
4. **Update §04** (`ColdCall.tsx`): new prospect name, new trigger event in Stage 01, new pain framing in Stage 02, same Stage 03 pattern
5. **Update §05** (`Email.tsx`): new From/To, new subject, new body. The 5-paragraph structure stays.
6. **Update §07 Block 04 only** (`WhyMe.tsx`): "Why [new employer]" replaces the previous employer. Other 3 blocks stay.
7. **Update §08** (`FirstThirty.tsx`): change "[employer]'s ICP" reference in priority 01.
8. **Update SEO** in `app/layout.tsx`: title, OG title.
9. **Update OG image** in `app/opengraph-image.tsx`: change the "For [employer]" reference and the big account name text.
10. **Run scripts:** `npm run build` to verify, `node scripts/compress-screenshots.mjs` if new screenshots.
11. **Git commit + push.** Vercel auto-deploys.

Most sections (§01, §06, §07 Blocks 01-03, §09) stay completely unchanged across briefs.

---

## Files NOT in this repo (gitignored)

- `prep/` — interview prep docs, cheat sheets. Private. Local-only.
- `.next/` — Next build output. Don't commit.
- `node_modules/`

If you regenerate prep docs for a new role, they go in `prep/` and stay private.

---

## Deployment

- GitHub: source of truth, public
- Vercel: auto-deploys from `main`
- Custom domain: not yet wired (currently at `*.vercel.app`)
- Analytics: not yet added (Plausible or Vercel Analytics recommended)

---

## Anti-patterns to avoid in conversation

When iterating with the user on this project:

- **Don't apologize for using AI tooling.** The user uses Claude as a co-author. Own the workflow; claim the judgment on top.
- **Don't add "polish" without asking.** The user has rejected pixel fonts, gold accents, and other purely decorative AI-default flourishes.
- **Don't propose long lists of edits.** Pick the 2-4 most-impactful ones. Apply or ask.
- **Don't assume the user knows sales jargon.** They're learning it. Explain ICP, stage names, MEDDIC, etc. when they come up.
- **Don't put personal details on the public artifact.** That includes partner names, religious affiliations, specific regional details that aren't universally relatable.
- **Don't refactor working code.** The user has explicitly asked not to break what's working. When in doubt, do the smallest change.

---

## What's reusable as a template

The whole repo. Specifically:
- The 9-section component structure
- The dark warm monochrome palette
- The CSS animation pattern for the hero (in case framer-motion stalls)
- The `Cite` removal (citations as inline footnotes read AI)
- The OG image generator
- The screenshot compressor script
- The icon (favicon) generator
- The `prep/` gitignored convention for private docs

What needs replacing per new account:
- §02 prose (account research)
- §03 prose (employer fit)
- §04 cold call script
- §05 email body
- §07 Block 04 ("Why [employer]")
- Hero title text
- OG image text overrides

Everything else is reusable as-is.
