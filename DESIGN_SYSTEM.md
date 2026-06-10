# Espace Bienestar Design System

This file documents the current Nordic design system used by the site. Follow this reference when creating new pages so the look and feel stays consistent.

## Core principles
- Soft, calm Nordic palette with green and violet accents.
- Clean typography with generous whitespace.
- Simple, geometric layouts: split hero, two-column cards, full-width sections.
- Light motion: hover transitions and subtle scroll reveal animations.
- Accessible interaction states and clear text hierarchy.

## Tokens
Use the CSS custom properties defined in `src/styles/global.css`.

### Colors
- `--nordic-white`: #FFFFFF
- `--nordic-background`: #FFFFFF
- `--nordic-text`: #2D3A35
- `--nordic-primary`: #87B37A
- `--nordic-secondary`: #C9A6C6
- `--nordic-ice`: #F2F5F1
- `--nordic-frost`: #F5F2F7
- `--nordic-mist`: #F7F7F7
- `--nordic-shadow`: rgba(44, 62, 80, 0.979)

### Typography
- Headings: `--font-heading` = `Inter, sans-serif`
- Body / UI: `--font-body` = `IBM Plex Sans, sans-serif`
- Buttons and labels use `IBM Plex Sans` for clarity.

## Layout patterns
The homepage and most pages follow these structural patterns.

### Page wrapper
Use `NordicLayout.astro` so pages get the shared header, footer, fonts, and global styles.

### Hero section
Use the `nordic-hero` pattern for a consistent landing experience.

```html
<section class="nordic-hero">
  <div class="nordic-hero-left">
    <span class="nordic-kicker">Label text</span>
    <h1 class="nordic-headline">Headline</h1>
    <p class="nordic-subtitle">Subtitle text</p>
    <a href="#" class="nordic-btn">CTA <svg ... /></a>
  </div>
  <div class="nordic-hero-right">
    <img src="/img/DSC_8024.webp" alt="Hero" class="nordic-hero-image" />
  </div>
</section>
```

### Hero styling notes
- `.nordic-hero`: 2-column grid.
- `.nordic-hero-left`: padded text column.
- `.nordic-hero-right`: soft background, overflow hidden, halo gradient using `::before`.
- `.nordic-hero-image`: full-cover image, subtle opacity and filter.

## Typography classes
- `.nordic-kicker`: small uppercase label, `var(--nordic-primary)`.
- `.nordic-headline`: large heading with `Inter`, light weight, `var(--nordic-shadow)`.
- `.nordic-subtitle`: paragraph text with 0.7 opacity and `IBM Plex Sans`.

## Buttons
### Primary button
Use `.nordic-btn` for main hero CTAs.
- background: `var(--nordic-primary)`
- text color: `var(--nordic-white)`
- hover: `var(--nordic-shadow)`

### Pill buttons
Use `.btn-pill` and `.btn-pill-secondary` for CTA buttons outside the hero.
- `.btn-pill`: rounded pill, green background, white text.
- `.btn-pill-secondary`: violet background, white text.

## Activity cards
Use the homepage card pattern for activity or feature previews.

```html
<section class="nordic-activities">
  <a href="#" class="nordic-activity gymnastics">
    <span class="nordic-activity-label">Mouvement conscient</span>
    <h2 class="nordic-activity-title">Gymnastique</h2>
    <p class="nordic-activity-desc">Description text</p>
    <span class="nordic-activity-cta">Découvrir <svg ... /></span>
  </a>
  <a href="#" class="nordic-activity theatre">
    <span class="nordic-activity-label">Expression créative</span>
    <h2 class="nordic-activity-title">Théâtre</h2>
    <p class="nordic-activity-desc">Description text</p>
    <span class="nordic-activity-cta">Découvrir <svg ... /></span>
  </a>
</section>
```

### Card style rules
- `.nordic-activities`: two-column grid.
- `.nordic-activity`: padded card, flex column, justify bottom.
- `.gymnastics`: `background-color: var(--nordic-primary)`.
- `.theatre`: `background-color: var(--nordic-secondary)`.
- `.nordic-activity-cta`: inline-flex with arrow icon animation.

## Secondary section patterns
### Intro section
Use `.nordic-intro` for callout text blocks.
- background: `var(--nordic-mist)`
- grid layout with a text column and link list.

### CV / profile blocks
Use `.cv-section`, `.cv-item`, and `.cv-icon` for bio content.
- `.cv-section`: rounded box with accent top border.
- `.cv-item`: row item with icon and text.
- `.cv-icon`: circular accent background.

## Accessibility
- Prefer inline SVGs with explicit `width` and `height`.
- Keep focus styles visible using the global focus-visible rule.
- Use `alt` text on hero images.
- Use sufficient contrast between text and background.

## Responsive guidance
- On mobile, stack hero columns vertically.
- Reduce padding for smaller viewports.
- Keep cards and content blocks legible with generous line-height.

## Writing new pages
1. Use `NordicLayout.astro` as the page wrapper.
2. Follow the homepage hero and card patterns.
3. Use the existing CSS classes rather than inventing new ones when possible.
4. Keep content bilingual-ready using `useTranslations` and URL-based language detection.

## Example new page structure
```astro
---
import NordicLayout from '../layouts/NordicLayout.astro';
import { useTranslations, getLangFromUrl } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const base = import.meta.env.BASE_URL;
---

<NordicLayout title={t.pageTitle} pageLang={lang}>
  <section class="nordic-hero">
    <div class="nordic-hero-left">
      <span class="nordic-kicker">{t.page.kicker}</span>
      <h2 class="nordic-headline">{t.page.headline}</h2>
      <p class="nordic-subtitle">{t.page.description}</p>
      <a href="#contact" class="nordic-btn">{t.page.cta}</a>
    </div>
    <div class="nordic-hero-right">
      <img src="/img/hero-example.webp" alt="..." class="nordic-hero-image" />
    </div>
  </section>
</NordicLayout>
```

## Notes for agents
- Keep the layout clean and minimal.
- Use soft green and lavender tones from the current palette.
- Prefer solid color cards and subtle halos over busy gradients.
- Reuse homepage classes to keep the site coherent.
