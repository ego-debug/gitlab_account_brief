# Affirm — Account Brief

A custom interactive web brief on Affirm, prepared for GitLab's SDR opening by Jovan Marrero.

Built as a one-page editorial experience — the alternative to a slide deck.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS 3
- Framer Motion
- Inter + JetBrains Mono (via `next/font`)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy to Vercel

Vercel-ready. From the project root:

```bash
npx vercel        # one-time link + preview
npx vercel --prod # production deploy
```

Or push to GitHub and import the repo in the Vercel dashboard — no settings needed.

## Sections

1. Hero — title, kicker, meta
2. The Affirm Account — magazine profile + the April 2026 retool callout
3. Where GitLab Fits — buyer / pitch / why-fit + animated stat row
4. Sample Call — interactive 3-stage cold call to Daniel Martin
5. Sample Email — animated draft reveal in a styled mail client
6. What I've Built — TayibEats + HVACLaunch with hover states
7. Why I'm The Right Rep — 4-block editorial essay
8. First 30 Days — four-priority ramp plan
9. Let's Talk — designed CTA with click-to-copy contact tiles
