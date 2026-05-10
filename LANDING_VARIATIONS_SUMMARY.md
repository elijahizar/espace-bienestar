# Espace Bienestar - Landing Page Design Proposals

## Overview

10 client-facing design proposals for the Espace Bienestar wellness center, hosted at `/proposals/` for client selection. All content in French.

---

## Proposal Gallery

**Route**: `/proposals/`
- Dark elegant header with DM Sans + Space Grotesk fonts
- Responsive grid of 10 cards
- Each card: number, name, font pairing, palette description, 3 color dots
- Hover: smooth card lift + color shift

---

## The 10 Proposals

### 01. Editorial (`/proposals/editorial`)
- **Typography**: Cormorant Garamond (display) + Instrument Sans (body)
- **Palette**: Cream `#F7F4EF`, Sienna `#8B4513`, Terracotta `#C4785A`
- **Aesthetic**: Magazine/editorial warm, serif headlines, ruled dividers
- **Features**: Three-column masthead layout, italicized headlines, numbered activity cards

### 02. Wabi-Sabi (`/proposals/wabisabi`)
- **Typography**: Zen Old Mincho (display) + Shippori Mincho (body)
- **Palette**: Clay `#C4A484`, Sage `#8B9A7D`, Cream `#F5F0E8`, Terracotta `#B86B4C`
- **Aesthetic**: Japanese minimalist, asymmetrical circles, generous whitespace
- **Features**: Breathing circle animations, understated elegance

### 03. Eau et Lumiere (`/proposals/waterlight`)
- **Typography**: Cormorant Garamond (display) + Raleway (body)
- **Palette**: Sky `#A8C5D9`, Deep `#5B7B8C`, Foam `#F5FAFC`, Coral `#D4917A`
- **Aesthetic**: Coastal serenity, oceanic calm
- **Features**: Animated wave patterns, glowing sun, soft gradients

### 04. Foret (`/proposals/forest`)
- **Typography**: Libre Baskerville (display) + Proza Libre (body)
- **Palette**: Forest Dark `#1A2E1A`, Moss `#6B8E5A`, Cream `#F5F2E8`, Bark `#4A3728`
- **Aesthetic**: Shinrin-yoku inspired, deep forest greens
- **Features**: Dark header, abstract tree motifs, forest canopy illustration

### 05. Nordique (`/proposals/nordic`)
- **Typography**: Inter (display) + IBM Plex Sans (body)
- **Palette**: Ice `#E0F2F1`, Soft Blue `#A7C7E7`, Deep Slate `#4A6572`, White `#FFFFFF`
- **Aesthetic**: Minimalist Scandinavian calm, crisp lines, generous white space
- **Features**: Ice crystal shapes with concentric rings, frost-inspired hero gradient

### 06. Mediterranee (`/proposals/mediterranean`)
- **Typography**: Playfair Display (display) + Source Sans Pro (body)
- **Palette**: Warm Sand `#F4E1C1`, Olive `#C9A66B`, Sunset Gold `#D4B896`, Cream `#FAF6F0`
- **Aesthetic**: Sun-kissed coastal vibe, Mediterranean terraces and sea breezes
- **Features**: Sun-ray motif with olive leaf accents, terracotta hero gradient

### 07. Desert Chaud (`/proposals/warmdesert`)
- **Typography**: Playfair Display (display) + Source Sans Pro (body)
- **Palette**: Terracotta `#C4956A`, Sand `#E8D5C4`, Light Violet `#C8B8D9`, Cream `#FAF6F0`
- **Aesthetic**: Desert retreat with workshop photos (Unsplash)
- **Features**: Hero with yoga/meditation Unsplash image + terracotta-violet overlay

### 08. Botanique (`/proposals/botanical`)
- **Typography**: Petrona (display) + Nunito (body)
- **Palette**: Leaf Green `#4A5D4A`, Sage `#9AAF9A`, Petal `#D4A5A5`, Cream `#F7F5F0`
- **Aesthetic**: Plant-inspired, organic elegance
- **Features**: Flower petal illustrations, soft green gradients, organic shapes

### 09. Aurora (`/proposals/aurora`)
- **Typography**: Cormorant Garamond (display) + Inter (body)
- **Palette**: Polar Blue `#D3E8FF`, Mist `#8FA9C7`, Aurora Violet `#E0B0FF`, Very Light Gray `#F5FAFD`
- **Aesthetic**: Dreamy northern-lights inspiration, cool blues with gentle purples
- **Features**: Aurora ribbon light bands, star dots on dark hero, violet-to-mist gradient CTA

### 10. Artisan Terre (`/proposals/artisan`)
- **Typography**: Fraunces (display) + DM Sans (body)
- **Palette**: Warm Amber `#B8860B`, Clay `#C4A484`, Raw Linen `#F5F0E8`, Terracotta `#A0522D`
- **Aesthetic**: Warm, handcrafted, artisan earth tones
- **Features**: Hand-drawn feel, warm amber accents, organic textures

### 11. Ethere Pastel (`/proposals/ethereal`)
- **Typography**: Lora (display) + Outfit (body)
- **Palette**: Lavender Mist `#E8E0F5`, Soft Rose `#F0D4D4`, Sky Tint `#D0E8F5`, Cream `#FAF8FF`
- **Aesthetic**: Dreamy, pastel gradients, floating blobs
- **Features**: Soft floating shapes, gentle gradient backgrounds, airy spacing

---

## ProposalLayout.astro

Minimal clean layout for all proposal pages:
- Sticky dark nav bar with "Retour aux propositions" link
- Style name as label (e.g., "01 · Editorial")
- No footer, no navigation from main site
- Each proposal is self-contained with scoped CSS and fonts

---

## Common Proposal Structure

Each proposal page follows this pattern:
1. **Header**: Logo + 4 nav links (Accueil, Activites, A propos, Contact)
2. **Hero**: 2-column grid (text left, decorative right), kicker, headline, subtitle, CTA
3. **Activities**: 2-column grid with gymnastics + theatre cards
4. **Intro**: 2-column grid with quote + links
5. **Footer**: Copyright + location

All text in **French**. Dynamic content from `useTranslations('fr')`.

---

## Cuts from Original 13 Variations

| # | Name | Reason for Removal |
|---|------|-------------------|
| 03 | Zen Garden | Overlaps with Wabi-Sabi |
| 08 | Soft Dawn | Overlaps with new Ethereal Pastel |
| 11 | Sundown | Overlaps with Warm Desert + Mediterranean |
| 13 | Urban | Weakest concept, doesn't fit wellness theme |

---

## Cleanup Completed

- Deleted old `/es/landing-variations/` directory (all 13 old variations + index)
- Deleted 5 Variation*Layout files
- Deleted LandingLayout.astro
- Deleted Layout.astro (unused starter layout)
- Deleted 5 unused SVG hero assets
- Deleted empty `src/assets/landing-variations/` directory

---

## Commands

```bash
cd espace-bienestar
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Production build
npm run preview   # Preview production build
```
