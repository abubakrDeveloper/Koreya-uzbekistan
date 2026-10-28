---
name: Silk Bridge
colors:
  surface: '#f9f9ff'
  surface-dim: '#c7dbfd'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff3ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dde9ff'
  surface-container-highest: '#d4e3ff'
  on-surface: '#061c35'
  on-surface-variant: '#44474f'
  inverse-surface: '#1e314b'
  inverse-on-surface: '#ebf1ff'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#435e92'
  primary: '#00173a'
  on-primary: '#ffffff'
  primary-container: '#092b5c'
  on-primary-container: '#7994cb'
  inverse-primary: '#adc6ff'
  secondary: '#245cb4'
  on-secondary: '#ffffff'
  secondary-container: '#73a2ff'
  on-secondary-container: '#00377b'
  tertiary: '#001b22'
  on-tertiary: '#ffffff'
  tertiary-container: '#00313d'
  on-tertiary-container: '#00a1c2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#2a4678'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#aec6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#b3ebff'
  tertiary-fixed-dim: '#5dd5f7'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#f9f9ff'
  on-background: '#061c35'
  surface-variant: '#d4e3ff'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 58px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an authoritative yet deeply approachable civic presence for the bilateral community connecting Uzbekistan and the Republic of Korea. It balances institutional legitimacy—essential for legal documentation, consular announcements, and formal business matchmaking—with the warmth and empathy required by students, migrant workers, and newly arriving families.

The design movement blends **Corporate Modern** with **High-Legibility Civic Interface Design**. Visual clutter is ruthlessly pruned in favor of structured spatial hierarchy, crisp border lines, and reassuring visual anchors. The interface conveys stability, reliability, and cultural respect across diverse age brackets and digital literacy levels, avoiding fleeting consumer-tech fads like heavy neon glows or extreme brutalist treatments.

## Colors

The palette draws inspiration from the enduring ties of both nations: the sovereign stability of deep navy blue, the vibrant optimism of clear skies, and cyan water accents symbolizing bridging seas and mutual prosperity.

### Palette Roles
- **Primary Navy (`#092B5C`)**: Represents governance, official authenticity, headers, key actions, and dominant layout structures.
- **Vivid Secondary Blue (`#0A4DA5`)**: Drives interactive state changes, highlights, active navigation nodes, and high-priority focal points.
- **Tertiary Cyan (`#16A7C8`)**: Serves as the vibrant accent for community badges, active indicators, live status pills, and informational callouts.
- **Neutral Dark / Slate (`#172B45`)**: High-contrast, WCAG AAA compliant text color on light backgrounds, preventing harsh pitch-black contrast fatigue.
- **Canvas & Surface (`#F5F8FC`)**: Gentle, cool-tinted off-white background that eases screen strain during document review and long reads.
- **Border Accents (`#D9E2EC`)**: Subtle architectural contours dividing bilateral news modules and informational tables without loud visual friction.

## Typography

The design system relies on a unified, highly adaptable geometric sans-serif: **Plus Jakarta Sans**. Its wide apertures, clean geometric builds, and balanced proportions preserve clarity across multilingual rendering (Uzbek Latin, Cyrillic, Korean Hangul, and English).

### Multilingual Support
- Generous line-height tokens (`1.5` to `1.65` ratios on body text) prevent diacritic clipping in Uzbek Latin (`o'`, `g'`) and maintain natural spacing for Korean syllabic blocks.
- Micro-labels feature controlled positive letter-spacing (`0.02em` to `0.04em`) to ensure instant legibility on badges, stamps, and formal consular timestamps.

## Layout & Spacing

A structured **12-column responsive fluid grid** organizes multifaceted community, legal, and commercial streams.

### Grid & Breakpoints
- **Desktop (≥ 1200px)**: 12 columns, `margin: 2rem`, `gutter: 1.5rem`. Maximum content container constrained to `1280px` for optimal reading comfort.
- **Tablet (768px – 1199px)**: 8 columns, `margin: 1.5rem`, `gutter: 1.25rem`. Complex bilateral listings collapse into balanced dual-column cards.
- **Mobile (< 768px)**: 4 columns, `margin: 1rem`, `gutter: 1rem`. Critical access nodes (hotlines, visa updates, language switchers) adapt to full-width or side-scrolling horizontal ribbons.

Spacing follows an 8pt modular rhythm (`0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2.5rem`), ensuring uniform vertical pacing across content-dense government directories and multilingual service catalogs.

## Elevation & Depth

To convey clarity and civic trustworthiness, this design system minimizes heavy dropped shadows, opting for **low-contrast architectural outlines** complemented by **subtle ambient elevation**.

- **Level 0 (Flat Canvas)**: Hex `#F5F8FC` surface. Background container for all base screens.
- **Level 1 (Card & Module Resting)**: Pure white background (`#FFFFFF`) with a 1px crisp outline using `#D9E2EC`. Subtle tinted ambient shadow: `0 2px 6px -1px rgba(9, 43, 92, 0.04), 0 1px 3px -1px rgba(9, 43, 92, 0.02)`.
- **Level 2 (Hover / Elevated Navigation)**: Pure white background (`#FFFFFF`) with a 1px border using `#CBD5E1`. Ambient shadow: `0 8px 16px -2px rgba(9, 43, 92, 0.08), 0 3px 6px -2px rgba(9, 43, 92, 0.04)`.
- **Level 3 (Modals & Emergency Popups)**: `0 20px 28px -4px rgba(9, 43, 92, 0.14), 0 8px 10px -3px rgba(9, 43, 92, 0.06)`, framed by a crisp `#0A4DA5` highlight border or neutral slate barrier.

## Shapes

The design system employs **Rounded (Level 2)** geometry:
- Standard UI components (buttons, text inputs, card containers) feature `0.5rem` (8px) corner radii, communicating modern warmth without sacrificing official institutional gravitas.
- Enclosed modules, modal dialogues, and key resource panels utilize `rounded-lg` (`1rem` / 16px).
- Status indicators, community support badges, and language toggle pills use full circular radiuses (`9999px`) to immediately distinguish interactive tags from square structural content blocks.

## Components

### Buttons
- **Primary Action**: Deep Navy (`#092B5C`) background, white text, 8px radius, medium weight. On hover, transitions cleanly to Vivid Blue (`#0A4DA5`).
- **Secondary Action**: White fill, 1px border (`#D9E2EC`), text in `#092B5C`. On hover, background shifts to `#F5F8FC` with a border tint of `#0A4DA5`.
- **Urgent / Support**: Accent Cyan (`#16A7C8`) background with deep navy text, reserved for rapid legal aid, emergency lines, and live consular desks.

### Chips & Community Badges
- Pill-shaped (`rounded-full`), padded `space-xs` vertically and `space-sm` horizontally.
- Categorized via light-tinted backgrounds: cyan tint (`#E8F7FA`) with `#0E7790` text for student services; soft navy tint (`#E8EEF6`) with `#092B5C` text for bilateral business directives.

### Language Selector Widget
- Prominent persistent component in top utility bars and mobile navigation sheets.
- Offers instantaneous switching between O'zbekcha (Lotin/Kirill), 한국어 (Korean), and English.
- Segmented pill container with `#D9E2EC` border; the selected language utilizes an elevated white pill with bold slate typography.

### Input Fields & Search Bars
- Background `#FFFFFF`, border 1.5px solid `#D9E2EC`, text `#172B45`.
- Focus state activates an outline in `#0A4DA5` with a subtle 3px glow (`rgba(10, 77, 165, 0.15)`). Helper labels are explicit and clear for bilingual input contexts.

### Bilateral Business Notice & Community Action Cards
- Structured white surface with a distinct 1px border (`#D9E2EC`).
- Features a top-aligned taxonomy badge, clear title typography (`title-md`), a metadata row with calendar/regional icons, and an accessible call-to-action button or right-aligned chevron arrow.