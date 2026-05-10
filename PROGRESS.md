# Espace Bienestar - Session Progress

## Project Status: 10 Design Proposals Ready for Client Review

### What Was Built

**Website for:** Sonia Cutri - Wellness center in Billere (64140), France
- Gymnastique consciente (Posturale + Rythmique)
- Théâtre thérapeutique (Bien-être + Amateur)
- Stages mensuels combinés

**Tech Stack:**
- Astro 6 + Tailwind CSS v4
- Bilingual: French (primary) + Spanish
- Static site output
- Node.js >= 22.12.0

---

## Current Phase: Client Design Selection

10 design proposals are live at `/proposals/` for client review. After the client selects one, it becomes the design system for the full site.

### Proposals Gallery
- **Route**: `/proposals/` — dark elegant header, responsive grid of 10 cards
- Each card: number, name, font pairing, palette description, 3 color dots
- Hover: smooth card lift + color shift

### The 10 Proposals

| # | Route | Name | Display Font | Body Font | Palette |
|---|-------|------|-------------|-----------|---------|
| 01 | `/proposals/editorial` | Editorial | Cormorant Garamond | Instrument Sans | Cream, Sienna, Terracotta |
| 02 | `/proposals/wabisabi` | Wabi-Sabi | Zen Old Mincho | Shippori Mincho | Clay, Sage, Cream |
| 03 | `/proposals/waterlight` | Eau et Lumiere | Cormorant Garamond | Raleway | Sky, Deep Sea, Coral |
| 04 | `/proposals/forest` | Foret | Libre Baskerville | Proza Libre | Forest Green, Bark, Cream |
| 05 | `/proposals/nordic` | Nordique | Inter | IBM Plex Sans | Ice, Soft Blue, Deep Slate |
| 06 | `/proposals/mediterranean` | Mediterranee | Playfair Display | Source Sans Pro | Warm Sand, Olive, Sunset Gold |
| 07 | `/proposals/warmdesert` | Desert Chaud | Playfair Display | Source Sans Pro | Terracotta, Sand, Light Violet |
| 08 | `/proposals/botanical` | Botanique | Petrona | Nunito | Leaf Green, Sage, Petal |
| 09 | `/proposals/aurora` | Aurora | Cormorant Garamond | Inter | Polar Blue, Mist, Aurora Violet |
| 10 | `/proposals/artisan` | Artisan Terre | Fraunces | DM Sans | Warm Amber, Clay, Raw Linen |
| 11 | `/proposals/ethereal` | Ethere Pastel | Lora | Outfit | Lavender Mist, Soft Rose, Sky Tint |

**Note**: Artisan is file #10, Ethereal is file #11, but gallery shows 10 total proposals.

### Cuts from Original 13
- **Urban (#13)** — weakest concept
- **Zen Garden (#3)** — overlaps with Wabi-Sabi
- **Soft Dawn (#8)** — overlaps with new Ethereal
- **Sundown (#11)** — overlaps with Warm Desert + Mediterranean

### Additions
- **Artisan Earth** — warm amber, handcraft feel
- **Ethereal Pastel** — dreamy gradients, floating blobs

---

## Project Structure (Current)

```
espace-bienestar/
├── src/
│   ├── i18n/
│   │   ├── fr.json
│   │   ├── es.json
│   │   └── utils.ts
│   ├── components/
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro        # Main layout with scroll animations
│   │   └── ProposalLayout.astro    # Clean layout for proposal pages
│   ├── pages/
│   │   ├── index.astro             # Homepage
│   │   ├── activities/
│   │   │   ├── index.astro
│   │   │   ├── gymnastics/index.astro
│   │   │   └── theatre/index.astro
│   │   ├── about.astro
│   │   ├── schedule.astro
│   │   ├── contact.astro
│   │   ├── proposals/              # 10 client design proposals (FRENCH)
│   │   │   ├── index.astro         # Gallery/selector page
│   │   │   ├── editorial.astro
│   │   │   ├── wabisabi.astro
│   │   │   ├── waterlight.astro
│   │   │   ├── forest.astro
│   │   │   ├── nordic.astro
│   │   │   ├── mediterranean.astro
│   │   │   ├── warmdesert.astro
│   │   │   ├── botanical.astro
│   │   │   ├── aurora.astro
│   │   │   ├── artisan.astro
│   │   │   └── ethereal.astro
│   │   └── es/                     # Spanish versions of main pages
│   │       ├── index.astro
│   │       ├── activities/
│   │       ├── about.astro
│   │       ├── schedule.astro
│   │       └── contact.astro
│   └── styles/
│       └── global.css
└── content/
    └── *.odt
```

---

## Design System (Main Site)

### Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#D1E45B` | Lime green - nav, heroes |
| `--color-primary-dark` | `#B8D14A` | Darker lime for gradients |
| `--color-secondary` | `#5FA3BA` | Teal - secondary accents |
| `--color-accent` | `#A78BFA` | Soft violet - CTAs, buttons |
| `--color-accent-dark` | `#7C5CBF` | Deep violet - hover states |
| `--color-background` | `#DBEDDF` | Pale sage - page backgrounds |
| `--color-text` | `#2D3A35` | Dark text for body/headings |

### Typography
- **Headings:** Playfair Display (serif, warm)
- **Body:** Source Sans Pro (clean, readable)

---

## Cleanup Completed

- [x] Deleted old `/es/landing-variations/` directory (superseded by `/proposals/`)
- [x] Deleted 5 Variation*Layout files (Urban, Sundown, Aurora, Nordic, Mediterranean)
- [x] Deleted LandingLayout.astro (only used by old variations)
- [x] Deleted Layout.astro (unused original starter layout)
- [x] Deleted 5 unused SVG hero assets (urban, sundown, aurora, nordic, mediterranean)
- [x] Deleted empty `src/assets/landing-variations/` directory

---

## Key Commands

```bash
cd espace-bienestar
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Production build
npm run preview   # Preview production build
```

---

## Known Issues

- **Color token mismatch**: `AGENTS.md` documents `--color-accent` as `#A78BFA` but `global.css` has `#d7ccff`. Navigation hardcodes `#A78BFA`.
- **BaseLayout hardcoded `lang="fr"`**: Even Spanish pages get `lang="fr"` in the HTML tag.
- **Contact info is placeholder**: Email and phone need real values before launch.
- **Formspree endpoint is placeholder**: `https://formspree.io/f/placeholder` needs real form ID.

---

## Next Steps

1. Run `npm run build` to verify all 10 proposals compile
2. Test all proposal pages and gallery links in browser
3. Deploy full site so `/proposals/` is accessible for client
4. After client selects a design, build full site in chosen style
5. Add Spanish translations for selected style
6. Replace placeholder contact info and Formspree endpoint
7. Fix known issues (color tokens, lang attribute)
8. Deploy to production
