# 118 Grinder — Landing Page MVP Plan & Dev Checklist

> **Project brief:** Build a 3-page landing site for 118 Grinder (@118grinder), an aesthetic minimalist coffee bar & dessert cafe in Wangsa Maju, Kuala Lumpur. The brand is third-wave specialty coffee with a Korean-aesthetic, plant-filled, pistachio-green interior. Run by 3 young Malay-Muslim owners. Tech stack: Astro + Tailwind CSS + Framer Motion (via React islands) + Vercel. Mobile-first, fast on 4G.
>
> **Language policy: ALL CONTENT IN ENGLISH BY DEFAULT.** Coffee terms (espresso, latte, americano, etc.) stay in original language as part of coffee culture vocabulary. Brand name 118 Grinder stays. No Bahasa Malaysia translations of body copy.
>
> **Note:** 118 Grinder is at 65 Jalan Wangsa Delima 5 — same street, two doors down from Pizzaiolo and Tiffin 55 (both at #55). Could be useful to mention "I've researched several cafes on your street" in outreach to signal local familiarity.

---

## 1. Brand Audit

**Identity:** 118 Grinder · Wangsa Maju · Aesthetic minimalist coffee bar · Coffee + Dessert focused

**Tagline (their own IG bio):** "Mon — Closed | Tue–Sun — 11:00–22:00"

**The hook:**
- **Aesthetic/minimalist** is part of their explicit self-description
- **Pistachio green** signature color — used on bar and cashier area
- **Plant-filled, rattan chairs, "Bali vibes"** interior
- **3 young owners** — youth/Korean-cafe energy
- **Less crowded** — explicitly markets quiet, calm, "no rush" vibe
- **Spanish Latte** is signature drink
- **Viral tiramisu** is signature dessert

**Audience:**
- Cafe-hoppers and aesthetic chasers
- Influencers and Instagram content creators
- Coffee dates / casual catchups
- Students looking for a quiet study spot
- Young adults 18–30, especially women
- Filipino, Indonesian, and Malaysian visitors (multi-language reviews)

**Hours (verified):**
- **Closed Mondays**
- Tue–Thu: 9am – 8pm (per petakopi.my) or 11am – 10pm (per IG bio) — ⚠️ verify with owner
- Fri–Sun: 9am – 9pm or 11am – 10pm

**Vibe:** Bright, airy, plant-forward, pistachio + cream + natural wood, Korean-aesthetic, calm

**Menu specialties:**
- Spanish Latte (signature)
- Matcha Strawberry
- Pandan Colada
- Tiramisu cake (viral)
- Vanilla cheesecake
- Chocolate Cremeux
- Carrot cake
- Mushroom Alfredo Penne
- Classic Bolognese Linguine
- Aglio Olio
- Chicken Popcorn / Tenders
- Crispy Chicken Burger

**Price point:** Average MYR 10–30 per person. Affordable-aesthetic, not premium.

**Press / social proof:**
- 3,473 IG followers (engaged, growing)
- 388 Google reviews at 4.4⭐
- Featured in Eat Drink KL
- Active TikTok (@118grindercafe) with original content
- Featured by Lemon8 cafe-hoppers

**Critique (worth noting for owner conversation):**
- Some reviewers mention low tables / uncomfortable seating
- Some say food flavors could be punchier (aglio olio under-seasoned)
- No heavy food at night (only desserts + drinks late evening)

**Emotional positioning:** *"A quiet corner. Serious coffee. No rush."*

---

## 2. Design Direction

This brand needs to feel **calm, breezy, lived-in** — Korean cafe meets Bali plant haven meets specialty coffee bar. Most aesthetic-forward of all your projects.

### Color Palette

⚠️ Important: Didi's also uses pistachio as a secondary accent. For 118 Grinder, pistachio is the *primary* — they own this color. Push it forward, don't hide it.

| Role | Color | Hex |
|------|-------|-----|
| Background (primary) | Soft Off-White | `#F7F4EE` |
| Surface | Pure Cream | `#FCFAF4` |
| Primary text | Deep Forest | `#2A3526` |
| Secondary text | Sage Grey | `#6E7868` |
| **Accent (THE color)** | **Pistachio Green** | `#9DBE8D` |
| Deep accent | Forest Green | `#3D5236` |
| Warm contrast | Terracotta | `#C9876A` |
| Subtle highlight | Wheat Beige | `#E8DFC9` |

**Why these:**
- Pistachio is their literal interior color — site must reflect it
- Deep forest grounds it, prevents the design from feeling washed out
- Terracotta as warm contrast — coffee, rattan, earth tones
- Off-white + cream backgrounds — same airy feeling as their cafe

### Typography

- **Display / Headings:** `DM Serif Display` — elegant but slightly editorial. Or `PP Editorial New` aesthetic if available.
- **Alternative:** `Tenor Sans` for a cleaner, more minimalist headline option
- **Body:** `Inter` — clean, mobile-friendly
- **Numerals (prices):** Same body font — keep it minimalist, no mono needed
- **Accent / handwritten:** `Caveat` for chalkboard "today's special" notes

### Mood

Calm · Aesthetic · Plant-Forward · Minimalist · Korean-Inspired · Quiet · Lived-in

Visual references: Hyperlocal Seoul cafe IGs, Yardstick Coffee, Sightglass branding, Aesop store interiors, Bali botanical cafes. NOT: Starbucks generics, sterile minimalism, edgy industrial.

---

## 3. Tech Stack

Same reusable foundation.

| Layer | Tool |
|-------|------|
| Framework | Astro 5 + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion (React islands) |
| Deployment | Vercel |
| Forms | Formspree |
| Analytics | Vercel Analytics |
| Icons | Lucide React |

---

## 4. Page Architecture

### Page 1 — Home (`/`)

Designed as an **aesthetic-cafe Instagram feed brought to life** — image-heavy, breathing room, soft transitions.

1. **Sticky navbar** — off-white background with subtle backdrop blur, pistachio "118 Grinder" wordmark left, links right (Home · Menu · Visit), small "Coffee · Dessert" subtitle in mono under wordmark
2. **Hero — split layout (text left, photo right on desktop, stacked on mobile)**
   - Eyebrow: "WANGSA MAJU · COFFEE BAR · DESSERT"
   - Headline: **"A quiet corner for serious coffee."**
   - Subhead: "Aesthetic minimalist cafe with specialty coffee, viral desserts, and a pistachio-green corner that's been everyone's favorite spot since 2022."
   - CTAs: "See the Menu" (forest green filled) + "Visit Us" (forest outline)
   - Right side: large editorial photo of the pistachio bar or signature Spanish Latte
   - Subtle decorative element: small pistachio leaf SVG illustration tucked in corner
3. **Three-Pillar Strip** (3-card row)
   - Coffee · Dessert · Calm
   - Each card: simple icon (lucide), short headline, 1-line description
   - Subtle hover lift on rattan-textured background
4. **Signature Drinks** (2x2 grid or 3-card row)
   - Spanish Latte (most ordered) · Matcha Strawberry · Pandan Colada · Hershey's Mocha
   - Each card: photo, name (serif), 1-line description, price
   - Clean asymmetric layout (not uniform grid)
5. **Signature Sweets** (paired with drinks)
   - Tiramisu (viral) · Vanilla Cheesecake · Chocolate Cremeux · Carrot Cake
6. **The Space** section (full-bleed, dramatic)
   - Large photo of pistachio bar interior with plants
   - Centered overlay text in serif italic: *"Run by three young coffee lovers, in a corner of Wangsa Maju that feels like home."*
7. **Aesthetic Gallery** — 5-image asymmetric Instagram-style grid
   - Mix of square + portrait photos, drinks, plants, interior, latte art
   - Click → lightbox
8. **Reviews block** — 3 selected reviews + "4.4 / 5 from 380+ regulars on Google"
9. **Find Us teaser** — map preview, today's hours (with dynamic Monday-closed flag)
10. **Footer** — wordmark, address, hours, socials (IG @118grinder, TikTok @118grindercafe), "A quiet corner in Wangsa Maju."

### Page 2 — Menu (`/menu`)

- **Menu Hero** — soft minimalist hero, headline "The Menu" + subhead "Specialty coffee, slow desserts, and a few favorites for when you're hungry."
- **Categories (sticky tabs, pistachio underline on active):** Coffee · Non-Coffee · Specialty Drinks · Desserts · Pasta · Bites
- **Filter chips:** Halal ✓ · Vegetarian · Signature · Caffeine-free
- **Menu cards:**
  - Soft cream background, deep forest text
  - Drink/dish photo (4:5 ratio for tall aesthetic feel)
  - Name in serif, description in italic, price clean (no mono needed — keep aesthetic consistent)
  - Subtle pistachio "Signature" tag for hero items (Spanish Latte, Tiramisu, etc.)
  - Hover: gentle lift + soft pistachio shadow
  - Stagger fade-up on scroll
- **Order CTA block** — "See you soon?" + WhatsApp button + IG DM link (no FoodPanda mentioned in research — verify with owner)

### Page 3 — Visit (`/visit`)

Smaller, focused page — story is light here, this brand isn't story-heavy like Didi's.

- **Hero:** "Come find us." + subhead about the location, parking, vibe
- **The Space** — full-bleed carousel of interior shots: pistachio bar, plants, rattan chairs, latte art station
  - Caption: "Plants, pistachio, and a window seat that's almost always free."
- **Hours table** — clearly highlighting **Closed Mondays** in pistachio
- **Visit Section** — embedded Google Maps + address + phone + WhatsApp + parking note
- **Made for cafe-hoppers** section
  - Photo grid showcasing instagrammable spots in the cafe
  - Caption: "Bring your camera. Most of our regulars do."
- **Contact form** (Formspree) — Name, phone/email, message (smaller form, this isn't a reservation-heavy brand)
- **Social block** — Instagram (@118grinder) front and center (their main channel), TikTok secondary

---

## 5. Animation Plan

This brand = **soft, breathing, organic** — like leaves moving in a breeze. Calmest of all your projects.

| Element | Animation | Detail |
|---------|-----------|--------|
| Hero text | Soft fade-up + slight drift | 700ms ease-out |
| Hero photo | Scale 1.02 → 1.0 settle on load | 1000ms |
| Three-pillar strip | Fade-in stagger | 150ms between each |
| Signature drink/sweet cards | Soft fade-up on scroll | 500ms |
| Card hover | Gentle lift 4px + soft shadow + 1.02 zoom on photo | 350ms |
| The Space section | Subtle parallax-like text-photo offset on scroll | desktop only |
| Italic quote | Word-by-word fade-in reveal | poetic |
| Aesthetic gallery | Each photo fade-in on intersection | progressive |
| Lightbox open | Soft crossfade, no aggressive zoom | 300ms |
| Menu tabs | Pistachio underline animated with `layoutId` | smooth |
| Menu cards | Fade-up stagger | 400ms |
| Section transitions | Astro view transitions | built-in |
| Navbar scroll | Backdrop blur + bottom hairline fade-in | 250ms |
| WhatsApp float | NO bounce — static, calm | restraint |

**Rules:**
- All animations 350–700ms, no faster
- No bouncy springs or kinetic motion — only ease-in-out
- Respect `prefers-reduced-motion`
- No marquees, no flashes, no aggressive parallax
- The animations themselves should feel "minimalist"

---

## 6. Copywriting

### Voice

- Calm, friendly, observational
- Lowercase friendly headlines OK for personality
- Short sentences but warm
- Not corporate, not overly cheeky
- Sensory but not overwrought ("smooth," "quiet," "slow," "warm")

### Sample Copy

**Hero**
> WANGSA MAJU · COFFEE BAR · DESSERT
> # A quiet corner for serious coffee.
> Aesthetic minimalist cafe with specialty coffee, viral desserts, and a pistachio-green corner that's been everyone's favorite spot since opening.
>
> [See the Menu] [Visit Us]

**Three-pillar strip**
> Coffee.
> Beans pulled with care, milk steamed properly, latte art that actually means something.
>
> Dessert.
> Tiramisu, cheesecake, carrot cake — small menu, made fresh, gone fast.
>
> Calm.
> Plants, soft music, low chairs (some say too low — we like them). Less crowded, more space to breathe.

**Signature drinks intro**
> The ones everyone orders. We stopped trying to predict it — these just always win.

**Spanish Latte description**
> Smooth, sweet, slightly nutty. Our most-ordered. Get it iced.

**The Space section**
> Run by three young coffee lovers, in a corner of Wangsa Maju that feels like home.
> The bar is pistachio green. The chairs are rattan. The plants don't fake. We've been here a while now, and it still feels like the first week.

**Visit page hero**
> Come find us.
> Wangsa Maju, Jalan Wangsa Delima 5. Closed Mondays — that's our day off. The rest of the week, we're brewing.

**Footer tagline**
> A quiet corner in Wangsa Maju.

**WhatsApp CTA**
> WhatsApp us — for table holds, custom cake orders, or just to ask if your favorite's in stock today.

### SEO Meta

- **Home title:** `118 Grinder | Aesthetic Coffee Bar & Dessert Cafe in Wangsa Maju, KL`
- **Home meta description:** `Specialty coffee, viral tiramisu, and a pistachio-green corner in Wangsa Maju. Aesthetic minimalist cafe run by 3 young coffee lovers. Halal. Closed Mondays.`
- **Schema:** CafeOrCoffeeShop, servesCuisine: ["Coffee", "Dessert", "Cafe"], priceRange: "$"
- **OG image:** Hero shot of the pistachio bar with a Spanish Latte in the foreground

---

## 7. UI/UX Principles For This Brand

1. **White space is sacred** — generous padding everywhere, like the cafe itself
2. **Pistachio is owned** — use it on CTAs, accents, active states, brand moments. Don't reduce it to a tiny detail.
3. **Photography leads** — each section is photo-led with copy supporting
4. **Soft type hierarchy** — serif headings, generous line-height, comfortable reading width
5. **Mobile reads like an Instagram feed** — tall photos, short captions, breathing room
6. **Closed Mondays must be unmissable** — surface in nav (when relevant), hero subhead, visit page, footer
7. **Affordable price point owned** — RM10-30 per person is a strength, not a weakness. The brand is approachable, not exclusive.
8. **Instagram-first thinking** — IG handle (@118grinder) is more important than email. Make IG primary CTA.
9. **No high-pressure CTAs** — brand is patient. "See you soon?" not "Order Now!"
10. **Plants and natural texture as visual motif** — subtle leaf SVGs, rattan-texture backgrounds for warmth

---

## 8. Content Needed From Owner

1. **High-res photo of the pistachio bar** — this is THE shot, the brand's defining visual
2. **Photos of signature drinks** — Spanish Latte, Matcha Strawberry, Pandan Colada
3. **Photos of signature desserts** — viral tiramisu, vanilla cheesecake, chocolate cremeux
4. **Interior shots** — plants, rattan chairs, window seats, latte art station
5. **Photos of the 3 young owners** if they're comfortable being featured (humanizes the brand)
6. **Confirmed full menu with prices** — drinks + food + desserts
7. **Confirmed hours** — IG bio says 11am-10pm, petakopi says 9am-8pm — must clarify
8. **WhatsApp business number** (013-233 3997 listed publicly)
9. **Logo files** (vector preferred)
10. **Founder story** — who are the 3 owners, why coffee, why Wangsa Maju, when did they open

---

## Phase-by-Phase Development Checklist

> Paste into Claude Code phase by phase. One at a time.

### Phase 0 — Project Setup

- [ ] Initialize Astro project with TypeScript strict mode
- [ ] Add Tailwind: `npx astro add tailwind`
- [ ] Add React: `npx astro add react`
- [ ] Install: `framer-motion`, `lucide-react`
- [ ] Install fonts via fontsource: `@fontsource/dm-serif-display`, `@fontsource/inter`, `@fontsource/caveat`
- [ ] Folder structure:
  ```
  src/
    components/
    sections/
    layouts/BaseLayout.astro
    pages/index.astro, menu.astro, visit.astro
    styles/global.css
    assets/images/{interior,drinks,desserts,bar,owners,logo}
    data/menu.json, reviews.json, site.json
  public/
  ```
- [ ] Init Git, `.gitignore`, first commit
- [ ] Create `.env.example`: `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_FORMSPREE_ID`

### Phase 1 — Design System

- [ ] Extend Tailwind theme with palette (off-white, cream, deep-forest, sage-grey, pistachio, forest-green, terracotta, wheat-beige)
- [ ] Configure font families: `font-display` (DM Serif Display), `font-body` (Inter), `font-accent` (Caveat)
- [ ] Custom Tailwind animations: `fade-in-soft`, `gentle-rise`, `subtle-zoom`
- [ ] Configure custom letter-spacing for editorial uppercase eyebrow text
- [ ] Add subtle leaf SVG decorations in `public/decorations/` (use freely-licensed botanical SVGs or simple custom shapes)
- [ ] Create `BaseLayout.astro` — light theme default, fonts loaded with `font-display: swap`
- [ ] Create reusable components:
  - [ ] `Button.astro` — variants: filled (forest-green bg, cream text), outline (forest border + text), ghost
  - [ ] `Container.astro` — generous max-w + padding
  - [ ] `SectionHeading.astro` — eyebrow (uppercase tracking-wide) + serif headline + optional subhead
  - [ ] `Eyebrow.astro` — small uppercase letter-spaced text component
  - [ ] `MenuCard.astro` — drink/dessert card with photo, name, description, price, optional "Signature" tag
- [ ] Create `Navbar.astro` — soft off-white bg with backdrop blur, "118 Grinder" wordmark in serif, "Coffee · Dessert" small subtitle
- [ ] Create `Footer.astro` — deep-forest bg, cream text, 3-col, tagline "A quiet corner in Wangsa Maju."
- [ ] Create `WhatsAppFloat.astro` — minimal, no bounce, forest-green circle
- [ ] Test responsiveness at 375px / 768px / 1440px

### Phase 2 — Data Files

- [ ] Create `src/data/site.json` — name "118 Grinder", tagline, address (65 Jalan Wangsa Delima 5), phone (013-233 3997), WhatsApp, hours object (CRITICAL: closed Monday flag, verify exact hours), social URLs (@118grinder IG, @118grindercafe TikTok), Google Maps embed URL
- [ ] Create `src/data/menu.json` with categories: `Coffee`, `Non-Coffee`, `Specialty Drinks`, `Desserts`, `Pasta`, `Bites`. Each item: name, description (warm, English), price (number), image path, tags array, optional `signature: true`
- [ ] Tag Spanish Latte, Matcha Strawberry, Tiramisu, Vanilla Cheesecake as signature
- [ ] Create `src/data/reviews.json` — 3 selected reviews with quote, name, rating, date

### Phase 3 — Home Page (`/`)

- [ ] **Hero section** (`src/sections/Hero.astro`):
  - Split layout: text left (50%), photo right (50%) desktop; stacked mobile
  - Eyebrow: "WANGSA MAJU · COFFEE BAR · DESSERT" — pistachio, tracking-widest, small caps
  - Headline: "A quiet corner for serious coffee." — DM Serif Display, 64px+ desktop / 40px mobile
  - Subhead: 18-20px, max-w 540px, sage-grey
  - CTAs: "See the Menu" (forest filled) + "Visit Us" (forest outline)
  - Photo: large editorial shot of pistachio bar or Spanish Latte
  - Decorative leaf SVG in corner (small, pistachio, low opacity)
  - Framer Motion: gentle stagger entrance
- [ ] **Three-Pillar Strip** (`src/sections/Pillars.astro`):
  - 3 columns desktop, stacked mobile
  - Each: lucide icon (Coffee, Cake, Leaf), heading in serif, 2-line description
  - Subtle hover lift on cream background
  - Fade-in stagger on scroll
- [ ] **Signature Drinks** (`src/sections/SignatureDrinks.astro`):
  - Eyebrow: "MOST-ORDERED"
  - Heading: "The ones everyone orders."
  - 4-card asymmetric grid (3 cards row + 1 hero card, or 2x2)
  - Each: photo (4:5 ratio), name in serif, 1-line description, price
  - Hover: gentle lift + soft pistachio shadow
- [ ] **Signature Sweets** (`src/sections/SignatureSweets.astro`):
  - Same layout style as drinks for consistency
  - Featured: Tiramisu (viral badge in pistachio), Vanilla Cheesecake, Chocolate Cremeux, Carrot Cake
- [ ] **The Space** (`src/sections/TheSpace.astro`):
  - Full-bleed dark forest-green section OR cream with large photo
  - Large hero photo of pistachio bar interior
  - Centered serif italic quote: *"Run by three young coffee lovers, in a corner of Wangsa Maju that feels like home."*
  - Below: 2-paragraph supporting copy
- [ ] **Aesthetic Gallery** (`src/sections/Gallery.astro`):
  - 5-image asymmetric Instagram-style grid
  - Mix of square + portrait + landscape photos
  - Click → lightbox
- [ ] **Reviews block** (`src/sections/Reviews.astro`):
  - Heading: "4.4 / 5 from 380+ regulars on Google"
  - 3 review cards on cream bg
- [ ] **Find Us teaser** (`src/sections/FindUsTeaser.astro`):
  - Map preview + today's hours (dynamically show "Closed today" if Monday)
  - "See you soon" CTA
- [ ] Wire `pages/index.astro`, add SEO meta + OG tags

### Phase 4 — Menu Page (`/menu`)

- [ ] **Menu Hero** — soft hero, headline "The Menu", subhead "Specialty coffee, slow desserts, and a few favorites for when you're hungry."
- [ ] **Category Tabs** (`src/components/MenuTabs.tsx`) — React island, sticky, pistachio underline animated with `layoutId`
- [ ] **Filter chips** — Halal ✓, Vegetarian, Signature, Caffeine-free (multi-select)
- [ ] **Menu grid** (`src/components/MenuGrid.tsx`):
  - 1-col mobile, 2-col tablet, 3-col desktop
  - Cream cards, deep-forest text
  - Photo (4:5 ratio), name in serif, italic description, price
  - Signature items get pistachio "Signature" badge
  - Hover: lift, soft pistachio shadow, slight zoom
  - Fade-up stagger on scroll
- [ ] **Order CTA block** at bottom — "See you soon?" + WhatsApp + Instagram DM buttons (verify FoodPanda availability with owner)
- [ ] SEO meta for menu page

### Phase 5 — Visit Page (`/visit`)

- [ ] **Visit Hero** — soft hero, headline "Come find us." + subhead about the location/vibe
- [ ] **The Space** — full-bleed carousel of interior shots
  - Caption: "Plants, pistachio, and a window seat that's almost always free."
- [ ] **Hours table** — clean table with Closed Monday highlighted in pistachio with "(our day off)" annotation
- [ ] **Visit Section** — 2-col: Google Maps embed left, details right (address, phone, WhatsApp, parking)
- [ ] **Made for cafe-hoppers** section
  - Heading: "Bring your camera. Most of our regulars do."
  - 4-photo grid showcasing instagrammable spots
- [ ] **Contact form** (`src/components/ContactForm.tsx`):
  - Fields: name, phone/email, message (smaller form, no reservation date — this brand isn't reservation-heavy)
  - Formspree submit, validation, success/error states
- [ ] **Social block** — Instagram card front and center (large), TikTok smaller
- [ ] SEO meta for visit page

### Phase 6 — Animations Polish

- [ ] All scroll reveals: `whileInView` + `viewport={{ once: true, margin: "-50px" }}`, soft durations (500–700ms)
- [ ] Hero stagger entrance
- [ ] Italic quote word-by-word reveal (split text into spans, 60ms stagger)
- [ ] Card hover: smooth lift + soft pistachio shadow
- [ ] Navbar scroll: subtle backdrop blur + hairline border bottom
- [ ] Menu tab `layoutId` for smooth pistachio underline transitions
- [ ] Aesthetic gallery: progressive fade-in on intersection
- [ ] Lightbox: soft crossfade
- [ ] `useReducedMotion()` integration — disable transforms if user prefers
- [ ] Slow 3G test — content readable while images load progressively

### Phase 7 — Images & Assets

- [ ] Organize: `interior/`, `drinks/`, `desserts/`, `bar/`, `owners/`, `logo/`
- [ ] Astro `<Image>` with quality=85, WebP, lazy load (except hero)
- [ ] Hero `<Picture>` with art-directed crops
- [ ] Descriptive alt text everywhere
- [ ] OG image (1200x630): pistachio bar shot + Spanish Latte + wordmark
- [ ] Favicon set
- [ ] Subtle leaf SVG decorations as background details (very low opacity)
- [ ] **If photos blurry from internet sources:** run through Upscayl 2x first

### Phase 8 — SEO & Schema

- [ ] Per-page meta titles + descriptions (Section 6)
- [ ] OG tags
- [ ] Twitter card tags
- [ ] Canonical URLs
- [ ] JSON-LD `CafeOrCoffeeShop` schema:
  - Name, address, phone
  - openingHoursSpecification (CRITICAL: Monday closed, verify exact hours)
  - priceRange "$"
  - servesCuisine ["Coffee", "Dessert", "Cafe"]
  - aggregateRating (4.4, 380+)
- [ ] `robots.txt` allow all
- [ ] Sitemap via `@astrojs/sitemap`

### Phase 9 — Performance & Accessibility

- [ ] Lighthouse 95+ all categories
- [ ] All images lazy except hero
- [ ] Font-display: swap
- [ ] Color contrast WCAG AA — verify pistachio on cream (might need slight darkening for text use)
- [ ] Keyboard nav works on tabs, filters, lightbox, form
- [ ] Icon-only buttons get `aria-label`
- [ ] Visible focus states (use forest-green outline)
- [ ] Test with VoiceOver / NVDA

### Phase 10 — Deployment

- [ ] Push to GitHub
- [ ] Connect Vercel, configure build
- [ ] Set env vars
- [ ] Test on real iPhone Safari + Android Chrome
- [ ] Custom domain wiring
- [ ] Vercel Analytics on
- [ ] UptimeRobot monitor

### Phase 11 — QA Before Handoff

- [ ] All browsers (iOS Safari, Android Chrome, desktop)
- [ ] WhatsApp button opens correct chat with pre-filled message
- [ ] Contact form delivers
- [ ] Google Maps embed loads
- [ ] All external links: `target="_blank" rel="noopener"`
- [ ] **Verify "Closed Monday" visible on:** navbar (if today is Mon), hero, visit page, footer
- [ ] All prices verified
- [ ] Proofread — no typos, no placeholder
- [ ] 404 page exists
- [ ] 3G throttle test

### Phase 12 — Handoff

- [ ] Client README — change requests, retainer scope, domain renewal
- [ ] Send: live URL, page summary, screenshots, invoice
- [ ] Tag v1.0.0 in Git
- [ ] Add to portfolio as case study

---

## Notes for Claude Code

- Read previous phase output before next phase
- Commit after each phase: `feat(phase-3): home page sections`
- Default mood: calm, aesthetic, plant-forward, minimalist, Korean-cafe-inspired, lived-in
- This is NOT a corporate cafe — avoid sterile minimalism, sharp grids, aggressive CTAs
- Photography is everything — leave generous space, embrace negative space
- 3 static pages, no CMS, no auth
- Placeholder images: aesthetic Korean / Bali coffee bar shots from Unsplash (search: "minimal cafe pistachio plants rattan")
- **Language rule (strict):** All readable content in English. Coffee terms (espresso, latte, americano) stay as-is. Brand name stays. No Bahasa Malaysia translations of body copy.
- **"Closed Mondays" rule:** Surface in nav (if current day is Monday), hero subhead, visit page, footer. Never hide.
- **Pistachio rule:** Pistachio green is THE brand color. Use it confidently — CTAs, active states, accents, signature badges. Don't relegate it to tiny details.

---

## Pricing Suggestion

Mid-tier brand → mid pricing.

| Item | Price (RM) |
|------|-----------|
| 3-page aesthetic landing site | 2,800 |
| Domain (.com, 1 year) | 60 |
| Hosting (Vercel free) | 0 |
| Google Workspace email (1 user, 1 year) | 120 |
| **One-time total** | **~3,000** |
| Monthly maintenance retainer | 150/month |

Portfolio discount: RM2,200.

**Strong upsell paths for this client:**
- Photography session (drinks, desserts, bar shots): +RM400
- Pre-order / custom cake form integration: +RM800
- Newsletter / regulars list: +RM400
- Loyalty card / coffee-club program: +RM1,200
- Monthly Instagram caption support: +RM300/month
- Booking system for cafe-event hosting: +RM1,000

---

## Pitch Angle For This Client

The strongest angle for 118 Grinder is **aesthetic alignment + audience growth**:

> "118 Grinder already nails the aesthetic — your IG and TikTok prove it. But when someone reads about you on Eat Drink KL or Lemon8 and Googles you, they land on Instagram or Foodpanda — not a place that captures the pistachio-bar vibe in one scroll. I'd love to build a website that feels exactly like walking into your cafe."

Works because:
- Honors what they've already built visually
- Specific (Eat Drink KL, Lemon8, the pistachio bar)
- Speaks aesthetic language they care about
- Aligns with their content-creator audience

**Bonus angle (since they're at #65 and Pizzaiolo/Tiffin 55 are at #55):**
> "I noticed your street has a few standout cafes — I've been researching Wangsa Maju closely. Happy to share what I'm seeing if useful."

Signals local familiarity without overstepping.
