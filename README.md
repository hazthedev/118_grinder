# 118 Grinder Landing Site

A 3-page aesthetic landing site for **118 Grinder** (@118grinder), an aesthetic minimalist coffee bar & dessert cafe in Wangsa Maju, Kuala Lumpur.

## Pages

- **Home (`/`)** — Hero, brand pillars, signature drinks & sweets, space showcase, gallery, reviews, find-us teaser
- **Menu (`/menu`)** — Filterable menu with category tabs, signature badges, WhatsApp/IG CTAs
- **Visit (`/visit`)** — Location, hours, Google Maps, contact form, social links

## Tech Stack

- **Astro 5** + TypeScript
- **Tailwind CSS**
- **Framer Motion** (React islands for menu tabs, contact form)
- **Vercel** (deployment)

## Design System

- **Colors:** Soft off-white `#F7F4EE`, cream `#FCFAF4`, deep forest `#2A3526`, pistachio `#9DBE8D`
- **Fonts:** DM Serif Display (headings), Inter (body), Caveat (accent)
- **Mood:** Calm, airy, plant-forward, Korean-cafe-inspired

## Deployment

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables:
   - `PUBLIC_WHATSAPP_NUMBER` = `60132333997`
   - `PUBLIC_FORMSPREE_ID` = your Formspree form ID
4. Add custom domain when ready

## Content Notes

- All body copy in English
- Coffee terms stay in original language
- "Closed Mondays" surfaced on navbar (Mon), hero, visit page, footer
- Placeholder images from Unsplash — replace with actual cafe photography before launch

## Build

```bash
npm install
npm run build
npm run preview
```
