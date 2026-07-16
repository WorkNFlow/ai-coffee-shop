---
name: Amber Bay Aesthetic
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#44474d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4b5f7e'
  primary: '#021a35'
  on-primary: '#ffffff'
  primary-container: '#1a2f4b'
  on-primary-container: '#8397b8'
  inverse-primary: '#b3c8eb'
  secondary: '#815500'
  on-secondary: '#ffffff'
  secondary-container: '#fdb647'
  on-secondary-container: '#6f4900'
  tertiary: '#2b1403'
  on-tertiary: '#ffffff'
  tertiary-container: '#432814'
  on-tertiary-container: '#b68e73'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#b3c8eb'
  on-primary-fixed: '#041c37'
  on-primary-fixed-variant: '#334865'
  secondary-fixed: '#ffddb2'
  secondary-fixed-dim: '#ffb94d'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#624000'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#eabda0'
  on-tertiary-fixed: '#2d1604'
  on-tertiary-fixed-variant: '#5f402a'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system for Bukhta Coffee Roasters strikes a balance between professional reliability and artisanal warmth. It reflects the maritime heritage of Kaliningrad, blending the vastness of the Baltic Sea with the cozy, grounded atmosphere of a local roastery.

The visual style is **Modern Corporate with Tactile Accents**. It utilizes clean layouts and systematic spacing to ensure accessibility, while incorporating organic textures and warmth through color to avoid the coldness of traditional corporate chains. The emotional goal is to evoke a sense of "harbor"—a safe, warm place to retreat from the Baltic wind.

## Colors
The palette is inspired by the Kaliningrad coastline at dusk.
- **Primary (Bay Navy):** `#021a35` — A deep, trustworthy navy representing the sea and professional stability. Use for headers, primary buttons, and structural elements.
- **Secondary (Baltic Amber):** `#815500` — A warm, glowing amber used for call-to-actions, highlights, and active states.
- **Secondary Container (Amber highlight):** `#fdb647` — Brighter amber for button backgrounds and badges.
- **Tertiary (Roasted Bean):** `#2b1403` — A rich coffee brown used sparingly for borders, icons, or secondary accents to ground the design in the product.
- **Background (Sea Foam):** `#fbf9f4` — An off-white/cream base that reduces eye strain and feels more inviting than pure white.
- **On-Surface (Charcoal):** `#1b1c19` — High-contrast dark grey for maximum legibility across all age groups.
- **Primary Container (Dark Navy):** `#1a2f4b` — Used for the Hero section background and the Careers section card.
- **On-Primary-Container (Muted Blue):** `#8397b8` — Muted blue text on dark navy backgrounds (hero subtitle, careers body text).

## Typography
The typography pairing reflects the "golden mean" narrative.

**Source Serif 4** provides a traditional, authoritative, and artisanal feel for headlines, nodding to European publishing and historic Baltic culture.

**Plus Jakarta Sans** is used for body copy and UI elements. Its soft, modern curves keep the interface feeling contemporary and approachable. For smaller labels and navigation, use increased letter spacing and semi-bold weights to maintain clarity.

### Font roles:
| Role | Font | Size | Weight | Line-height | Letter-spacing |
|------|------|------|--------|-------------|----------------|
| `headline-lg` | Source Serif 4 | 48px | 700 | 56px | -0.02em |
| `headline-lg-mobile` | Source Serif 4 | 32px | 700 | 40px | — |
| `headline-md` | Source Serif 4 | 32px | 600 | 40px | — |
| `headline-sm` | Source Serif 4 | 24px | 600 | 32px | — |
| `body-lg` | Plus Jakarta Sans | 18px | 400 | 28px | — |
| `body-md` | Plus Jakarta Sans | 16px | 400 | 24px | — |
| `label-md` | Plus Jakarta Sans | 14px | 600 | 20px | 0.05em |

## Layout & Spacing
This design system uses a **Fluid Grid** model based on an 8px scale.
- **Desktop:** 12-column grid with 24px gutters. Use wide 48px outer margins.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and margins.

| Token | Value |
|-------|-------|
| `base` | 8px |
| `gutter` | 24px |
| `margin-mobile` | 16px |
| `margin-desktop` | 48px |
| `container-max` | 1200px |

Layouts favor vertical stacks for menu items and locations on mobile, transitioning to multi-column cards on desktop.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Ambient Shadows**.
- Shadows use low-opacity navy tint: `rgba(26, 47, 75, 0.08)`
- Interactive cards use a subtle "lift" on hover (increased shadow spread and blur)

## Shapes
| Context | Radius |
|---------|--------|
| Buttons, Inputs | 0.5rem (8px) — `rounded-lg` |
| Cards | 1rem (16px) — `rounded-2xl` |
| Imagery | 1.5rem (24px) — `rounded-3xl` |
| Pill buttons | 9999px — `rounded-full` |

## Components

### Navigation Bar
- Background: `bg-surface-container-low/80` with `backdrop-blur-md`
- Height: 80px (`h-20`)
- Logo: `font-headline-sm` + `text-primary` with `material-symbols-outlined filled` (sailing icon) in `text-secondary`
- Nav links: `font-label-md`, `text-on-surface-variant` → hover `text-primary` with `bg-surface-container rounded-lg` hover state
- Language switcher: `font-label-md text-primary font-bold border-b-2 border-primary` for active state; plain text for inactive

### Hero Section
- Height: ~819px (min 600px)
- Background: `bg-primary-container` (`#1a2f4b`)
- Background image: cinematic roastery photo at 40% opacity with `mix-blend-overlay`
- Gradient overlay: `bg-gradient-to-t from-primary-container to-transparent opacity-80`
- H1: `headline-lg` (desktop) / `headline-lg-mobile` (mobile), `text-on-primary`
- Subtitle: `body-lg`, `text-on-primary-container`
- CTA button: `bg-secondary text-on-secondary rounded-full`, `px-8 py-4`, hover scale-up with shadow

### About Section
- Background: `bg-surface`
- Layout: `flex-col md:flex-row`, 50/50 split on desktop
- Values list: Material Icons (handshake, eco, school) in `text-secondary`
- Image: `aspect-[4/3]`, `rounded-2xl`, `shadow-md`

### Menu Section
- Background: `bg-surface-container-low`
- Section headers: `border-b-2 border-secondary` with Material Icon
- List items: `border-b border-surface-variant border-dashed`
- Price text: `text-on-surface-variant body-md`
- Order button: `bg-secondary text-on-secondary rounded-full`

### Roasting Section
- Background: `bg-surface`
- Layout: `flex-col md:flex-row-reverse` (image on left desktop)
- "Bean of the Month" card: `bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30`
- Buttons: Primary filled (`bg-primary text-on-primary rounded-full`) + Secondary outline (`border-2 border-primary text-primary rounded-full`)

### Locations Section
- Background: `bg-surface-container-low`
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Active cards: `bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant/20`
- "Скоро" card: `bg-primary-container text-on-primary-container`, with amber badge `bg-secondary text-on-secondary`
- Map: `h-[400px] bg-surface-variant rounded-2xl` placeholder

### Events Section
- Background: `bg-surface`
- Centered layout, text max-width 2xl
- CTA button: `bg-secondary text-on-secondary rounded-full`

### Careers Section
- Background: `bg-surface-container-low`
- Inner card: `bg-primary rounded-3xl p-8 md:p-16`
- Text: `text-on-primary` heading, `text-on-primary-container` body
- Apply button: `bg-surface text-primary rounded-full`

### Contact Section
- Background: `bg-surface`
- Centered layout, `flex flex-col md:flex-row` with `gap-12`

### Footer
- Background: `bg-primary`
- Logo: `text-secondary-fixed`
- Links: `text-on-primary-fixed-variant` → hover `text-secondary-container`
- Copyright: `text-on-primary-fixed-variant`

## Buttons
| Type | Style |
|------|-------|
| Primary CTA | `bg-secondary text-on-secondary rounded-full px-8 py-4` |
| Primary filled | `bg-primary text-on-primary rounded-full px-6 py-3` |
| Secondary outline | `border-2 border-primary text-primary rounded-full px-6 py-3` |
| Inverse (on dark) | `bg-surface text-primary rounded-full px-8 py-4` |

## Material Icons
All icons: `material-symbols-outlined`. Key icons used in layout:
- Logo: `sailing` (filled)
- About values: `handshake`, `eco`, `school`
- Menu: `coffee`, `water_drop`, `bakery_dining`
- Order button: `shopping_bag`
- Locations route link: `map`
- Gift card button: `redeem`
- Careers button: `arrow_forward`
