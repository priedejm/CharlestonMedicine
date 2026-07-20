
## Goal

Build a complete multi-page marketing site for Charleston Medicine and Behavioral Health, refining the look from the reference screenshots into a clean, modern, coastal-boutique concierge medical brand. All content, copy, and structure from the brief ship in this build.

## Design system (src/styles.css)

Replace the default tokens with the brand palette in oklch:
- `--navy` deep navy `#1B2B6B`
- `--blue` medium `#4A7BC4`
- `--blue-light` `#A8CBE8`
- `--gold` warm sand/gold `#C9A96E` (sparingly: CTAs, dividers, stars, hover)
- `--cream` warm off-white `#F5F2EE`
- `--cream-warm` `#FAF6EC` (Behavioral Health bg)
- white, plus mapped shadcn semantic tokens (primary = navy, accent = gold, background = cream/white).

Typography via Google Fonts in `__root.tsx` head links:
- Headings: Cormorant Garamond (serif), tracking tuned.
- Body: Inter (sans).
- Register as `--font-serif` / `--font-sans` and Tailwind tokens.

Global utilities: generous section padding (`py-24 md:py-32`), max-width container, gold divider rule, subtle navy card border, button variants (gold solid CTA, navy outline, ghost link).

## Shared layout

- `src/routes/__root.tsx`: add Google Fonts links, brand meta defaults, render `<SiteHeader />` + `<Outlet />` + `<SiteFooter />`.
- `src/components/site/SiteHeader.tsx`: sticky, white/translucent backdrop-blur, left logo placeholder (text lockup "Charleston Medicine and Behavioral Health" in serif until logo asset added), right nav links, gold "Become a Patient" CTA. Mobile hamburger using shadcn Sheet.
- `src/components/site/SiteFooter.tsx`: address, click-to-call, text, email, hours, social icons (Facebook/Instagram/TikTok via lucide), copyright.
- `src/components/site/VideoHero.tsx`: full-bleed muted autoplay loop `<video>` with poster + dark overlay + text slot; placeholder note "REPLACE WITH CHARLESTON VIDEO ASSET".
- `src/components/site/PhotoPlaceholder.tsx`: labeled placeholder div for Charleston-specific photos.
- `src/components/site/SectionHeading.tsx`, `Container.tsx`, `GoldRule.tsx`.

## Routes (file-based, each with own head() meta + H1)

```
src/routes/
  index.tsx                 -> /
  concierge-medicine.tsx    -> /concierge-medicine
  physical-health.tsx       -> /physical-health
  behavioral-health.tsx     -> /behavioral-health
  womens-health.tsx         -> /womens-health
  iv-drip-services.tsx      -> /iv-drip-services
  team.tsx                  -> /team
  new-patients.tsx          -> /new-patients
  contact.tsx               -> /contact
```

Each route uses `createFileRoute(...)` with `head()` providing unique title, description, og:title, og:description, og:url, canonical (leaf only).

## Page builds (all copy from brief, verbatim)

- **Home**: VideoHero ("Whole-Person Care. Elevated."), 5-card services grid w/ lucide line icons in navy, 4-col Why Choose Us, navy 5-star trust banner with gold stars, 3 review cards (J.B., J.T., H.T.) on cream w/ navy border, team preview (3 headshots), White Glove Service cinematic section (dark bg placeholder).
- **Concierge Medicine**: hero, intro, Four Pillars icon grid, Premier/Elite pricing cards with gold accents.
- **Physical Health**: hero, left-right copy + staff photo, navy pull-quote block, services list (Internal Medicine, Preventative, etc.).
- **Behavioral Health**: cream-warm `#FAF6EC` background, Dr. Andrews + provider photo placeholder, intro, conditions list with small heart icon, PMHNP 4-step graduating-blue cards, services/fees table (navy header, alternating white/light blue, gold category labels), insurance note.
- **Women's Health**: arched portrait of Caroline Scruggs, intro, benefits cards, services grid, "Elevated Women's Healthcare" section.
- **IV Drip Services**: video hero, intro, 3 why-choose cards, IV menu in 3-col grid (Energize, Protect, Primed, Repair, Hydrate, The Antidote) each with photo placeholder + price + description + ingredients, NAD+ 3-card pricing block + description, navy "Trusted by Those Who Demand the Best" quotes section with gold rule (no celebrity photos).
- **The Team**: clean hero (single group photo placeholder), alternating L/R bio rows for all 8 members with rounded-square photo placeholders, names in serif, titles in spaced navy caps, bios verbatim.
- **New Patients**: headline + subhead, 3-step process cards, contact form (name/email/phone/service select/message) using shadcn Form + react-hook-form + zod, click-to-call button.
- **Contact**: 2-col layout - left contact details, right form; Google Maps iframe placeholder for the address; social links.

Forms are frontend-only (no backend wiring in this build) and on submit show a sonner success toast; this is noted to the user.

## Global details

- Always render practice name with "and" (lint by string in code review).
- All phone numbers as `tel:` links (`tel:+18439138558`, `tel:+18439982933`), email as `mailto:`.
- Mobile-first: stacks cleanly, hamburger nav, sticky bottom-free, generous touch targets.
- Image/video placeholders are clearly labeled divs; no stock embeds, no clip-art icons.
- SEO: per-route head() meta, single H1, semantic h2/h3, descriptive alt on placeholders.

## Out of scope (not in this build)

- Real video/photo assets - placeholders only, ready for asset drop-in.
- Logo SVG - text lockup until asset provided.
- Form backend (email/CRM) - wired later if requested.
- Cookie banner, analytics, blog/CMS.

## Technical section

- Stack: TanStack Start + React 19 + Tailwind v4 (already configured).
- Tokens defined in `src/styles.css` `@theme inline` + `:root` (oklch).
- Fonts via `<link>` in `__root.tsx` head().
- Icons: `lucide-react` (already available via shadcn).
- Forms: `react-hook-form` + `zod` + shadcn `form`, `input`, `textarea`, `select`, `button`.
- No new packages required.
- Routing: file-based; `routeTree.gen.ts` auto-updates.
- Canonical/og:url use relative paths (no project URL yet).
