# SHIFSD Website — Claude Code Project Brief

> **Source of truth:** Figma file `zT4B0PdlSxJt5KLc0yc4ur` — 13 pages, complete design system.
> Every page, section, color, font, and spacing decision comes from Figma. When in doubt, screenshot the Figma node and match it pixel-for-pixel.

---

## 1. Project Overview

**SHIFSD** (Self Help Initiative for Sustainable Development) is a Liberian NGO. This website is a storytelling-driven marketing site — not a dashboard or app. Every page should feel cinematic: smooth scrolling, staggered reveals, subtle parallax, and purposeful motion.

**Deployment:** Netlify (site ID `1bc2ab35-95c1-4c75-93b1-1b95980fd780`). Netlify CMS, Forms, and Identity are already configured.

---

## 2. Tech Stack

| Layer | Tool | Notes |
|-------|------|-------|
| Framework | **Next.js 16+** | App Router, `src/app/` structure |
| Styling | **Tailwind CSS v4** | Uses `@theme` directive in `globals.css` — **NOT** `tailwind.config.js` |
| Animation | **Framer Motion** | Page transitions, scroll-triggered reveals, hover states |
| Animation | **GSAP** | Complex timelines, number counters, parallax |
| Scrolling | **Lenis** | Smooth scroll wrapper — initialize in a `LenisProvider` client component |
| Icons | **Google Material Symbols** | Outlined, weight 400, grade 0, size 24. Load via CDN `<link>`. **NOT Lucide React** for new pages |
| Fonts | **Clash Display** (hero/display), **Clash Grotesk** (headings/UI subheads), **Inter** (body/UI), **Lora** (accent/quotes) | Clash Display + Clash Grotesk loaded via Fontshare `<link>` in `layout.tsx`; Inter + Lora via `next/font/google`. **DM Sans is NOT used** — do not introduce it. |
| Deployment | **Netlify** | CMS at `/admin/`, Forms, Identity |

### Key Dependencies (package.json)
```json
{
  "next": "^16.1.6",
  "react": "^19.2.4",
  "tailwindcss": "^4.2.1",
  "framer-motion": "^12.38.0",
  "gsap": "^3.15.0",
  "lenis": "^1.3.23"
}
```

### Tailwind v4 Setup
Tailwind v4 uses `@theme` in CSS, not a JS config file. Define custom colors/fonts in `src/app/globals.css`:
```css
@import "tailwindcss";

@theme {
  --color-warm-teal: #1A6B5A;
  --color-liberian-flame: #E85D26;
  --color-horizon-gold: #F5B731;
  --color-deep-canopy: #1E3A3A;
  --color-warm-sand: #F4F0EB;
  /* ... etc */
  --font-display: "Clash Display", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Clash Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-accent: "Lora", Georgia, serif;
}
```

---

## 3. Brand Design System

### 3.1 Color Palette (25 styles)

**Primary**
| Name | Token | Hex |
|------|-------|-----|
| Warm Teal | `--color-warm-teal` | `#1A6B5A` |
| Liberian Flame | `--color-liberian-flame` | `#E85D26` |
| Horizon Gold | `--color-horizon-gold` | `#F5B731` |
| Deep Canopy | `--color-deep-canopy` | `#1E3A3A` |
| Warm Sand | `--color-warm-sand` | `#F4F0EB` |

**Extended**
| Name | Token | Hex |
|------|-------|-----|
| Teal Light | `--color-teal-light` | `#D1FAE5` |
| Teal Muted | `--color-teal-muted` | `#A7F3D0` |
| Flame Light | `--color-flame-light` | `#FED7AA` |
| Gold Light | `--color-gold-light` | `#FEF3C7` |
| Canopy Light | `--color-canopy-light` | `#2D4F4F` |

**Neutrals**
| Name | Token | Hex |
|------|-------|-----|
| White | `--color-white` | `#FFFFFF` |
| Gray 50 | `--color-gray-50` | `#F9FAFB` |
| Gray 100 | `--color-gray-100` | `#F3F4F6` |
| Gray 200 | `--color-gray-200` | `#E5E7EB` |
| Gray 300 | `--color-gray-300` | `#D1D5DB` |
| Gray 400 | `--color-gray-400` | `#9CA3AF` |
| Gray 500 | `--color-gray-500` | `#6B7280` |
| Gray 600 | `--color-gray-600` | `#4B5563` |
| Gray 700 | `--color-gray-700` | `#374151` |
| Gray 800 | `--color-gray-800` | `#1F2937` |
| Gray 900 | `--color-gray-900` | `#111827` |

**Semantic**
| Name | Token | Hex |
|------|-------|-----|
| Success | `--color-success` | `#16A34A` |
| Warning | `--color-warning` | `#EAB308` |
| Error | `--color-error` | `#DC2626` |
| Info | `--color-info` | `#2563EB` |

### 3.2 Typography (20 text styles)

**Display — Clash Display** (hero headlines, section titles at Display/H1 scale)
| Style | Weight | Size | Line Height |
|-------|--------|------|-------------|
| Display | Bold (700) | 64px | 72px |
| H1 | Bold (700) | 48px | 56px |
| H2 | SemiBold (600) | 36px | 44px |

**Headings — Clash Grotesk** (H3–H5, UI subheads, eyebrow labels)
| Style | Weight | Size | Line Height |
|-------|--------|------|-------------|
| H3 | SemiBold (600) | 28px | 36px |
| H4 | Medium (500) | 24px | 32px |
| H5 | Medium (500) | 20px | 28px |

**Body — Inter**
| Style | Weight | Size | Line Height |
|-------|--------|------|-------------|
| Large | Regular | 18px | 28px |
| Base | Regular | 16px | 24px |
| Small | Regular | 14px | 20px |
| XSmall | Regular | 12px | 16px |
| Large Bold | Semi Bold | 18px | 28px |
| Base Bold | Semi Bold | 16px | 24px |

**Accent — Lora**
| Style | Weight | Size | Line Height |
|-------|--------|------|-------------|
| Quote | Italic | 24px | 36px |
| Subhead | Medium | 18px | 28px |
| H2 Alt | SemiBold | 28px | 28px |
| H4 Alt | SemiBold | 24px | 28px |

**UI — Inter**
| Style | Weight | Size | Line Height |
|-------|--------|------|-------------|
| Button | Semi Bold | 16px | 24px |
| Nav Link | Medium | 15px | 20px |
| Label | Bold | 12px | 16px |
| Caption | Regular | 13px | 18px |

### 3.3 Elevation (3 effect styles)

| Name | Shadows |
|------|---------|
| Small | `drop-shadow(0 1px 3px rgba(0,0,0,0.1))` |
| Medium | `drop-shadow(0 4px 6px rgba(0,0,0,0.07)), drop-shadow(0 2px 4px rgba(0,0,0,0.06))` |
| Large | `drop-shadow(0 10px 15px rgba(0,0,0,0.1)), drop-shadow(0 4px 6px rgba(0,0,0,0.05))` |

---

## 4. Global Components

### 4.1 Top Bar (31px height)
- **Background:** Deep Canopy (`#1E3A3A`)
- **Left:** Email `shifsdliberia@gmail.com` + Phone `+231 (0) 770 024 082`
- **Right:** Registration number `MPEA/NGO/AC#0369`
- **Font:** Inter, small/caption size, white text

### 4.2 Navigation Bar (82px height)
- **Background:** White
- **Total navbar height:** 113px (31px top bar + 82px nav)
- **Left:** SHIFSD Logo
- **Center:** Nav links — Home, About Us, Programs (dropdown: CSA, Education, Financial), Impact, Get Involved, News & Media, Contact
- **Right:** Donate button (Liberian Flame background, white text, rounded)
- **Font:** Inter Medium 15px for nav links

### 4.3 Footer
- **Background:** Deep Canopy (`#1E3A3A`)
- **4 columns:**
  1. **About SHIFSD** — Logo + org description
  2. **Quick Links** — Home, About Us, Programs, Impact, Get Involved, News & Media, Contact
  3. **Our Programs** — Climate-Smart Agriculture, Education & Livelihood, Financial Sustainability, Community Development, Youth Empowerment
  4. **Contact Us** — Address, phone, email, social links
- **Bottom bar:** `© 2025 SHIFSD Liberia. All Rights Reserved.` | `Privacy Policy · Terms of Service`

---

## 5. Figma Page Map & Node IDs

Use these to screenshot specific pages/sections from Figma for reference. Use the Figma MCP `get_screenshot` tool with `fileKey: "zT4B0PdlSxJt5KLc0yc4ur"` and the node ID.

### Pages (13 total)

| Page | Page ID | Main Frame ID | Frame Size |
|------|---------|---------------|------------|
| Brand Exploration | `0:1` | — | — |
| Design System | `14:2` | `61:2` | — |
| **Homepage** | `14:3` | `21:2` | 1440 × 4551 |
| **About Us** | `14:4` | `39:2` | 1440 × 4364 |
| **Programs** | `14:5` | `46:2` | — |
| **Programs — CSA** | `14:6` | `48:2` | — |
| **Programs — Education** | `14:7` | `49:2` | — |
| **Programs — Financial** | `14:8` | `50:2` | — |
| **Impact** | `14:9` | `51:2` | — |
| **Get Involved** | `14:10` | `52:2` | — |
| **News & Media** | `14:11` | `53:2` | 1440 × 2532 |
| **Contact** | `14:12` | `58:2` | — |
| **Donate** | `63:2` | `64:2` | 1440 × 3848 |

### Homepage Sections (node IDs under frame `21:2`)

| Section | Node ID | Height |
|---------|---------|--------|
| Global / Top Bar | `79:5` | 31px |
| Global / Navigation | `79:10` | 82px |
| Hero Section | `22:2` | 564px |
| Impact Stats Strip | `22:14` | 132px |
| Three Pillars Section | `23:2` | 847px |
| Testimonial Section | `24:2` | 494px |
| Partners Strip | `25:2` | 220px |
| Latest Updates | `26:2` | 832px |
| Get Involved CTA | `27:2` | 672px |
| Newsletter Signup | `28:2` | 171px |
| Global / Footer | `79:26` | 506px |

### About Us Sections (under `39:2`)

| Section | Node ID |
|---------|---------|
| About Hero | `39:19` |
| Our Story | `41:2` |
| At a Glance | `41:9` |
| Vision & Mission | `42:2` |
| Core Values | `42:17` |
| Our Journey Timeline | `43:2` |
| Leadership | `44:2` |
| Partners & Institutions | `44:22` |

### Programs Hub Sections (under `46:2`)

| Section | Node ID |
|---------|---------|
| Programs Hero | `46:19` |
| Program Cards | `46:24` |
| Our Approach | `47:2` |
| Partner CTA | `47:24` |

### Programs — CSA Sections (under `48:2`)

| Section | Node ID |
|---------|---------|
| CSA Hero | `48:19` |
| Program Overview | `48:23` |
| Key Activities | `48:29` |
| CSA Impact Stats | `48:44` |
| Support CSA CTA | `48:57` |

### Programs — Education Sections (under `49:2`)
Screenshot `49:2` from Figma to discover section structure.

### Programs — Financial Sections (under `50:2`)
Screenshot `50:2` from Figma to discover section structure.

### Impact Sections (under `51:2`)

| Section | Node ID |
|---------|---------|
| Impact Hero | `51:19` |
| Key Metrics | `51:24` |
| Impact by Area | `51:40` |
| Geographic Reach | `51:88` |
| Support CTA | `51:92` |

### Get Involved Sections (under `52:2`)

| Section | Node ID |
|---------|---------|
| Hero | `52:19` |
| Ways to Help | `52:23` |
| FAQ | `52:47` |

### News & Media Sections (under `53:2`)

| Section | Node ID |
|---------|---------|
| Hero | `53:19` |
| Featured Article | `53:22` |
| Article Grid | `53:31` |
| Newsletter | `53:90` |

### Contact Sections (under `58:2`)

| Section | Node ID |
|---------|---------|
| Hero | `58:19` |
| Contact Form Section | `58:22` |
| Contact Info | `60:2` |
| Map Section | `60:25` |

### Donate Sections (under `64:2`)

| Section | Node ID |
|---------|---------|
| Donate Hero | `64:19` |
| Donation Tiers | `64:23` |
| Donation Methods | `75:77` |
| Custom Donation | `65:2` |
| Your Impact | `65:19` |
| Donor Testimonial | `65:34` |
| Trust & Security | `65:41` |

### Design System Components (on page `14:2`)

| Component | Node ID | Type |
|-----------|---------|------|
| Global / Top Bar | `79:2` | COMPONENT |
| Global / Navigation | `79:3` | COMPONENT |
| Global / Footer | `79:4` | COMPONENT |
| Card: Climate Smart Agriculture | `110:594` | COMPONENT |
| Component 1 (Button variants) | `110:560` | COMPONENT_SET (4 variants) |
| Read More Button | `112:154` | COMPONENT_SET (2 variants) |
| Card — News | `112:199` | COMPONENT |
| Partner Logos | `136:3707` | COMPONENT |
| Donate Payment type | `72:44` | COMPONENT_SET (3 variants) |

---

## 6. Project Structure

```
shifsd-website/
├── public/
│   ├── admin/          # Netlify CMS
│   ├── images/         # Static images
│   └── favicon.jpg
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind v4 @theme tokens
│   │   ├── layout.tsx           # Root layout — fonts, LenisProvider, metadata
│   │   ├── page.tsx             # Homepage
│   │   ├── about/page.tsx
│   │   ├── programs/
│   │   │   ├── page.tsx         # Programs hub
│   │   │   ├── csa/page.tsx
│   │   │   ├── education/page.tsx
│   │   │   └── financial/page.tsx
│   │   ├── impact/page.tsx
│   │   ├── get-involved/page.tsx
│   │   ├── news/page.tsx
│   │   ├── contact/page.tsx
│   │   └── donate/page.tsx
│   └── components/
│       ├── LenisProvider.tsx     # Client component — smooth scroll
│       ├── Navbar.tsx            # Top Bar + Navigation
│       ├── Footer.tsx
│       ├── SectionHeading.tsx    # Reusable section header with label + title
│       ├── ImpactCounter.tsx     # GSAP-animated number counters
│       └── ...                   # Section-specific components as needed
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── next.config.ts
└── CLAUDE.md                    # This file
```

---

## 7. Implementation Order

Build in this order. For each page: screenshot the Figma frame, then implement section by section, matching the design exactly.

### Phase 1 — Foundation
1. `globals.css` — All Tailwind v4 `@theme` tokens (colors, fonts, spacing)
2. `layout.tsx` — Root layout with fonts, Material Symbols CDN, LenisProvider
3. `LenisProvider.tsx` — Client component wrapping Lenis smooth scroll
4. `Navbar.tsx` — Top bar (Deep Canopy) + navigation (white) with dropdown for Programs
5. `Footer.tsx` — 4-column footer matching Figma exactly

### Phase 2 — Homepage
6. `page.tsx` — All 11 sections from Figma in order:
   - Hero Section (full-width image, headline, CTA buttons)
   - Impact Stats Strip (animated counters on Deep Canopy background)
   - Three Pillars Section (3 program cards with icons)
   - Testimonial Section (quote with Lora italic font)
   - Partners Strip (logo carousel/grid)
   - Latest Updates (3 news cards)
   - Get Involved CTA (split layout with image)
   - Newsletter Signup (email input + submit)

### Phase 3 — Inner Pages (one at a time)
7. About Us — 8 content sections
8. Programs Hub — Hero + 3 program cards + approach
9. Programs — CSA — Hero + overview + activities + stats + CTA
10. Programs — Education — Screenshot Figma `49:2` for structure
11. Programs — Financial — Screenshot Figma `50:2` for structure
12. Impact — Hero + metrics + impact areas + map + CTA
13. Get Involved — Hero + ways to help + FAQ accordion
14. News & Media — Hero + featured + article grid + newsletter
15. Contact — Hero + form + info cards + map embed
16. Donate — Hero + tiers + payment methods + custom + impact + testimonial + trust

---

## 8. Animation Philosophy

This is a **storytelling** site. Animations should feel organic and purposeful, not flashy.

### Scroll Reveals (Framer Motion)
```tsx
// Standard section reveal
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
```

### Staggered Children
```tsx
// Container
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};
// Child
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
```

### Number Counters (GSAP)
```tsx
useEffect(() => {
  gsap.to(ref.current, {
    innerText: targetNumber,
    duration: 2,
    snap: { innerText: 1 },
    scrollTrigger: { trigger: ref.current, start: "top 80%" }
  });
}, []);
```

### Smooth Scroll (Lenis)
Initialize in a client component `LenisProvider.tsx` that wraps the app:
```tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return <>{children}</>;
}
```

---

## 9. Netlify Integration

### Forms
Add `data-netlify="true"` to any `<form>`:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  ...
</form>
```

### CMS
Already configured at `public/admin/`. No changes needed.

### Identity
Netlify Identity widget script is in the layout. Used for CMS authentication.

---

## 10. Critical Layout Values

| Property | Value |
|----------|-------|
| Max content width | **1440px** |
| Navbar total height | **113px** (31px top bar + 82px nav) |
| Standard section padding | Match Figma per-section (typically 80-120px vertical) |
| Content area padding | Typically 80-160px horizontal within 1440px |
| Border radius (cards) | Match Figma per-component |
| Grid gap | Match Figma per-section |

---

## 11. How to Use This File with Figma

For each page/section you implement:

1. **Screenshot the Figma section** using the Figma MCP:
   ```
   get_screenshot(fileKey: "zT4B0PdlSxJt5KLc0yc4ur", nodeId: "SECTION_NODE_ID")
   ```
2. **Study the screenshot** — note exact spacing, font sizes, colors, alignment
3. **Implement** using the design system tokens defined above
4. **Compare** your implementation against the Figma screenshot
5. **Iterate** until it matches

---

## 12. Key Reminders

- **Figma is the source of truth.** Always screenshot before implementing.
- **Tailwind v4** — use `@theme` in CSS, not `tailwind.config.js`.
- **Material Symbols** for icons on new pages (not Lucide React).
- **Clash Display** for display/hero, **Clash Grotesk** for headings/UI subheads, **Inter** for body, **Lora** for accents/quotes. **DM Sans is not part of this brand — do not use it.**
- **Deep Canopy** (`#1E3A3A`) for top bar and footer backgrounds.
- **Warm Teal** (`#1A6B5A`) is the primary brand color for CTAs and accents.
- **Liberian Flame** (`#E85D26`) for the Donate button and secondary CTAs.
- **Warm Sand** (`#F4F0EB`) for light section backgrounds.
- All images need to be sourced — check `public/images/` for what exists, use placeholders for missing images.
- The site deploys on **Netlify** — forms need `data-netlify="true"`.
- Use `"use client"` directive for any component with interactivity, animations, or browser APIs.
