# Espace Bienestar Website

## Project Overview
Bilingual (FR/ES) Astro + Tailwind website for a wellness center in Billere, France.
**Sonia Cutri** offers Gymnastique Consciente (Posturale + Rythmique) and Theatre Therapeutique (Bien-Etre + Amateur), plus monthly combined stages.

## Current Objective
**10 design proposals** hosted online for client selection. After the client chooses one, the selected design will be developed into the full website.

The proposals are at `/proposals/` with a polished gallery index at `/proposals/`. All proposal content is in **French** (the primary market). Spanish will be added after the client makes their selection.

## Tech Stack
- **Astro 6** with static output
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **Bilingual**: French primary, Spanish secondary
- **Node.js** >= 22.12.0

## Key Commands
```bash
cd espace-bienestar
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Production build
npm run preview   # Preview production build
```

## Structure
```
src/
├── i18n/                    # Translation JSON (fr.json, es.json)
├── components/              # Navigation, Footer
├── layouts/
│   ├── BaseLayout.astro # Main layout with scroll animations
│   └── ProposalLayout.astro # Clean layout for proposal preview pages
├── pages/
│   ├── index.astro          # Homepage with hero + 2 activity blocks
│   ├── activities/
│   │   ├── index.astro      # Activities overview
│   │   ├── gymnastics/index.astro
│   │   └── theatre/index.astro
│   ├── about.astro
│   ├── schedule.astro
│   ├── contact.astro
│   ├── proposals/           # 10 client design proposals (FRENCH)
│   │   ├── index.astro      # Gallery/selector page
│   │   ├── editorial.astro  # 01 - Editorial
│   │   ├── wabisabi.astro   # 02 - Wabi-Sabi
│   │   ├── waterlight.astro # 03 - Eau et Lumiere
│   │   ├── forest.astro     # 04 - Foret
│   │   ├── nordic.astro     # 05 - Nordique
│   │   ├── mediterranean.astro # 06 - Mediterranee
│   │   ├── warmdesert.astro # 07 - Desert Chaud
│   │   ├── botanical.astro  # 08 - Botanique
│   │   ├── aurora.astro     # 09 - Aurora
│   │   ├── artisan.astro    # 10 - Artisan Terre (NEW)
│   │   └── ethereal.astro   # 11 - Ethere Pastel (NEW, #10 in sequence)
│   └── es/ # Spanish versions of main pages
│       ├── index.astro
│       ├── activities/
│       ├── about.astro
│       ├── schedule.astro
│       └── contact.astro
└── styles/global.css # Design system + button styles
```

## The 10 Proposals

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

**Note**: Files are numbered 01-11 because Artisan is #10 and Ethereal is #11, but they represent proposals 10 and 10+1 in the sequence. The gallery displays 10 total (Artisan=10, Ethereal=10b or next available slot).

### Proposal Gallery
- **Route**: `/proposals/`
- **Design**: Dark elegant header, responsive grid of 10 cards
- **Each card**: Number, name, font pairing, palette description, 3 color dots
- **Fonts**: DM Sans + Space Grotesk (for the gallery UI only)
- **Hover**: Smooth card lift + color shift

### Proposal Layout (ProposalLayout.astro)
- Minimal clean layout: sticky dark nav bar with "Retour aux propositions" link
- Shows style name as label (e.g., "01 · Editorial")
- No footer, no navigation from main site
- Each proposal page is fully self-contained with its own scoped CSS and fonts

### Common Proposal Structure
Each proposal page follows this pattern:
1. **Header**: Logo + 4 nav links (Accueil, Activites, A propos, Contact) with `/` paths
2. **Hero**: 2-column grid (text left, decorative right), kicker, headline, subtitle, CTA
3. **Activities**: 2-column grid with gymnastics + theatre cards
4. **Intro**: 2-column grid with quote + links
5. **Footer**: Copyright + location

All text in **French**. Dynamic content from `useTranslations('fr')`.

## Design System - Main Site (Option A Palette)

### Color Tokens
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#D1E45B` | Lime green - main green for nav, heroes |
| `--color-primary-dark` | `#B8D14A` | Darker lime for gradients |
| `--color-secondary` | `#5FA3BA` | Teal - secondary accents, contrast |
| `--color-accent` | `#A78BFA` | Soft violet - CTAs, buttons |
| `--color-accent-dark` | `#7C5CBF` | Deep violet - hover states |
| `--color-sage-light` | `#D5E7BE` | Sage/lime - light accents |
| `--color-sage-pale` | `#D3E8A6` | Pale lime - subtle fills |
| `--color-sage-bg` | `#DBEDDF` | Pale sage - page backgrounds |
| `--color-background` | `#DBEDDF` | Page background |
| `--color-text` | `#2D3A35` | Body text (dark) |
| `--color-violet-light` | `#E8E0F5` | Light violet - cards |
| `--color-violet-medium` | `#D4C4E8` | Medium violet - borders |

### Typography (Main Site)
- Headings: **Playfair Display** (serif, warm)
- Body: **Source Sans Pro** (clean, readable)

### Button Styles

**Gradient Pill** (Primary CTAs):
```html
<a href="#" class="btn-pill">Label <svg>...</svg></a>
```

**Pill Outline** (Secondary CTAs):
```html
<a href="#" class="btn-pill-outline">Label</a>
```

**Pill Secondary** (Alternate secondary):
```html
<a href="#" class="btn-pill btn-pill-secondary">Label</a>
```

**Block Button** (Activity cards):
```html
<a href="#" class="btn-block">
  <div class="btn-icon">SVG icon</div>
  <div class="btn-content">
    <h3 class="btn-title">Title</h3>
    <p class="btn-meta">Meta info</p>
  </div>
  <div class="btn-arrow">→</div>
</a>
```

## Page Structure (Main Site)

### Homepage
- Hero: Lime-to-violet diagonal gradient, stacked typography, violet + teal blobs
- Activity blocks: 2 side-by-side (Gymnastics=lime | Theatre=violet)
- Intro: Pale sage bg
- CTA: Lime green bg

### Activity Detail Pages
- Hero with lime or violet gradient
- Block buttons linking to sections
- Detailed sections for each activity type
- Stages section with 3-column grid
- Adapted CV section
- CTA section

### Other Pages
- About: Violet gradient hero, Sonia's full CV
- Schedule: Lime hero, weekly classes (lime/teal), monthly stages grid
- Contact: Lime hero, teal info panel + violet form panel

## Translation System
- `src/i18n/utils.ts` - `useTranslations(lang)`, `getLangFromUrl(url)`
- Pages detect language from URL (`/es/*` = Spanish, else French)
- Language switcher in Navigation toggles `/` ↔ `/es`

## Content Source
All content extracted from ODT files in `content/`. Translation files in `src/i18n/` are the source of truth.

## Form Handling
Contact form uses Formspree (placeholder endpoint). Replace `https://formspree.io/f/placeholder` with actual form ID when deploying.

## Deploy Notes
- Static site, deployable to Netlify/Vercel/GitHub Pages
- Build output in `dist/`
- No server-side rendering required
- For proposals: deploy full site so `/proposals/` is accessible online

## Known Issues
- **Color token mismatch**: `AGENTS.md` documents `--color-accent` as `#A78BFA` but `global.css` sets it to `#d7ccff`. Navigation hardcodes `#A78BFA`. Needs alignment.
- **BaseLayout hardcoded `lang="fr"`**: Even Spanish pages get `lang="fr"` in the HTML tag.
- **Contact info is placeholder**: Email and phone need real values before launch.
- **Formspree endpoint is placeholder**: Needs real form ID.

## UI/UX Guidelines (from ui-ux-pro-max skill)
- No emojis as icons - use SVG icons (Heroicons, Lucide)
- cursor-pointer on all clickable elements
- Hover states with smooth transitions (150-300ms)
- Light mode: text contrast 4.5:1 minimum
- Focus states visible for keyboard nav
- prefers-reduced-motion respected
- Scroll animations with IntersectionObserver

## Workflow After Client Selection
1. Client chooses one proposal style from `/proposals/`
2. Selected style becomes the design system for the full site
3. Build out all pages (Homepage, Activities, About, Schedule, Contact) in chosen style
4. Add Spanish translations (`/es/*` pages)
5. Replace placeholder contact info and Formspree endpoint
6. Fix known issues (color tokens, lang attribute)
7. Deploy to production
