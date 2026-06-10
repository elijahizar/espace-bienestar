# Espace Bienestar Website

## Project Overview
Bilingual (FR/ES) Astro + Tailwind website for a wellness center in Billere, France.
**Sonia Cutri** offers Gymnastique Consciente (Posturale + Rythmique) and Theatre Therapeutique (Bien-Etre + Amateur), plus monthly combined stages.

## Current Objective
The client has selected the **Nordic** design style. All pages are being built using this design system. Spanish translations will be added after the full site is complete.

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
│   ├── NordicLayout.astro   # Main site layout (Nordic design, global styles)
│   └── BaseLayout.astro     # Legacy layout (unused)
├── pages/
│   ├── index.astro          # Homepage with hero + 2 activity blocks
│   ├── activities/
│   │   ├── index.astro      # Activities overview
│   │   ├── gymnastics/
│   │   │   ├── index.astro
│   │   │   ├── consciente.astro
│   │   │   ├── posturale.astro
│   │   │   ├── rythmique.astro
│   │   │   └── stages-combines.astro
│   │   └── theatre/
│   │       ├── index.astro
│   │       ├── atelier-bien-etre.astro
│   │       └── atelier-amateur.astro
│   ├── about.astro
│   ├── schedule.astro
│   ├── contact.astro
│   └── es/                  # Spanish versions of main pages
│       ├── index.astro
│       ├── activities/
│       ├── about.astro
│       ├── schedule.astro
│       └── contact.astro
└── styles/global.css        # Shared design tokens + utilities
```

## Design System - Nordic (Selected Style)

### Color Tokens
| Token | Hex | Usage |
|-------|-----|-------|
| `--nordic-white` | `#FFFFFF` | Page background, cards |
| `--nordic-ice` | `#E8F5E9` | Light accent, borders, gymnastics bg |
| `--nordic-primary` | `#9BCB93` | Soft green - CTAs, kicker text, hover states |
| `--nordic-violet` | `#A78BFA` | Violet - theatre accent, contrast elements |
| `--nordic-frost` | `#D4E8F0` | Light blue - theatre text accents |
| `--nordic-shadow` | `#2C3E50` | Dark slate - headlines, body text, button hover |
| `--nordic-mist` | `#E8F0F5` | Light gray-blue - intro section background |
| `--nordic-text` | `#2D3A35` | Primary body text color |

### Typography
- **Headings**: **Inter** (weights 300, 400, 500, 600) - clean, modern, light weight for headlines
- **Body/UI**: **IBM Plex Sans** (weights 300, 400, 500, 600) - labels, navigation, descriptions
- Font loaded from Google Fonts in NordicLayout.astro

### Layout Pattern
Every page uses `NordicLayout.astro` which provides:
1. **Header** - Logo left, language switcher (FR/ES), nav links right, mobile hamburger
2. **Main content** - `<slot />` for page-specific content
3. **Footer** - 3-column grid (location, navigation, contact), copyright bar
4. **Mobile menu** - Full-screen overlay with nav links + language switcher

### CSS Classes Reference

**Hero Section**:
```html
<section class="nordic-hero">
  <div class="nordic-hero-left">
    <span class="nordic-kicker">Label text</span>
    <h1 class="nordic-headline">Headline</h1>
    <p class="nordic-subtitle">Subtitle text</p>
    <a href="#" class="nordic-btn">CTA <svg>...</svg></a>
  </div>
  <div class="nordic-hero-right">
    <!-- Decorative element -->
  </div>
</section>
```

**Activity Cards** (2-column grid):
```html
<section class="nordic-activities">
  <a href="#" class="nordic-activity gymnastics">
    <span class="nordic-activity-label">Label</span>
    <h2 class="nordic-activity-title">Title</h2>
    <p class="nordic-activity-desc">Description</p>
    <span class="nordic-activity-cta">CTA <svg width="20" height="20">...</svg></span>
  </a>
  <a href="#" class="nordic-activity theatre">
    <!-- same structure, different color scheme -->
  </a>
</section>
```

**Intro Section**:
```html
<section class="nordic-intro">
  <p class="nordic-intro-text">Quote or intro text</p>
  <div class="nordic-intro-links">
    <a href="#" class="nordic-intro-link">
      <svg width="20" height="20">...</svg>
      Link text
    </a>
  </div>
</section>
```

**SVG Icons** - Always include inline `width` and `height` attributes:
```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="..."/>
</svg>
```

### Button Style
- `.nordic-btn` - Inline-flex, green background (`--nordic-primary`), white text, padding `1rem 2rem`, rounded none, hover to dark slate (`--nordic-shadow`)
- SVG arrow inside button: `width: 1rem`

### Activity Card Colors
- **Gymnastics**: Gradient from `--nordic-ice` to `--nordic-primary`, dark text
- **Theatre**: Gradient from `--nordic-violet` to `--nordic-shadow`, white text

### Responsive Breakpoints
- Desktop: 2-column hero, 2-column activities grid
- Mobile (`max-width: 900px`): Single column, reduced padding, hidden nav with hamburger menu

## Page Structure

### Homepage
- Hero: 2-column grid (text left, crystal decoration right), "Serenite" headline, violet CTA button
- Activities: 2 cards side-by-side (Gymnastics=green gradient | Theatre=violet gradient)
- Intro: Mist background, italic quote text, links to About and Schedule

### Activity Detail Pages
- Hero with activity-specific gradient
- Block buttons linking to sub-sections
- Detailed sections for each activity type
- Stages section with grid
- CTA section

### Other Pages
- About: Hero, Sonia's full CV
- Schedule: Weekly classes grid, monthly stages
- Contact: Info panel + form

## Translation System
- `src/i18n/utils.ts` - `useTranslations(lang)`, `getLangFromUrl(url)`
- Pages detect language from URL (`/es/*` = Spanish, else French)
- Language switcher in header toggles `/` <-> `/es`

## Content Source
All content extracted from ODT files in `content/`. Translation files in `src/i18n/` are the source of truth.

## Form Handling
Contact form uses Formspree (placeholder endpoint). Replace with actual form ID when deploying.

## Deploy Notes
- Static site, deployable to Netlify/Vercel/GitHub Pages
- Build output in `dist/`
- No server-side rendering required
- Base path: `/espace-bienestar/`

## Known Issues
- **Contact info is placeholder**: Email and phone need real values before launch.
- **Formspree endpoint is placeholder**: Needs real form ID.
- **BaseLayout.astro is unused**: Can be removed once all pages confirmed working with NordicLayout.
- **global.css has legacy styles**: Contains old design system tokens that may conflict. Needs cleanup.

## UI/UX Guidelines
- No emojis as icons - use SVG icons (Heroicons, Lucide)
- cursor-pointer on all clickable elements
- Hover states with smooth transitions (150-300ms)
- Light mode: text contrast 4.5:1 minimum
- Focus states visible for keyboard nav
- prefers-reduced-motion respected
- All SVGs must have inline `width` and `height` attributes (Astro scoping issue)
- NordicLayout uses `<style is:global>` - CSS rules apply globally, no data-astro-cid scoping
