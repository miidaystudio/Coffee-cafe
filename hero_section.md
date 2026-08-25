# LONDON COFFEE — PREMIUM HERO SECTION
## Next.js End-to-End Implementation Specification / Micro-Prompt

> **IMPORTANT:** This document is the single source of truth for the implementation.
> Read the entire file before writing code. Do not begin implementation from only the first section.
> The target is a **single premium coffee-café portfolio hero**, inspired by the supplied visual direction but redesigned as an original London Coffee identity.
> **Build ONLY the hero section. Do not create About, Menu, Story, Gallery, Location, Footer, Testimonials, Product Grid, or any other page section.**

---

# 01 — PROJECT OBJECTIVE

Create a production-quality **Next.js hero section** for a fictional/premium café brand named:

**LONDON COFFEE**

The visual target is a sophisticated editorial coffee landing page with:

- deep forest-green / near-black background
- warm ivory typography
- restrained champagne/golden accents
- large luxury editorial typography
- three premium iced coffee products as the visual centerpiece
- subtle London / Big Ben visual identity
- restrained decorative coffee elements
- minimal navigation
- a portfolio/café-experience positioning
- NO e-commerce feeling
- NO aggressive sales UI
- NO giant full-screen marketing clutter
- NO excessive cards
- NO unnecessary gradients everywhere
- NO generic SaaS layout

The result should feel like a **high-end London café brand website**, not a template.

Think:

**editorial coffee campaign + London heritage + modern luxury web design.**

The hero should look intentional even if every other section of the website is removed.

---

# 02 — HARD SCOPE RULE

## ONLY ONE SECTION

The final page must contain exactly one primary visual section:

`Hero`

Nothing else.

Do not create:

- About section
- Menu section
- Story section
- Services
- Testimonials
- Gallery
- Footer
- Newsletter
- Product cards section
- Contact section
- FAQ
- Instagram section
- Feature section
- Pricing
- Reviews
- Blog
- Location section

The page may contain navigation INSIDE the hero because navigation is part of the hero composition.

The hero should occupy approximately:

`80vh–90vh`

It must NOT feel like a 1400–1600px poster.

On a standard 1440×900 desktop viewport, the complete hero composition should comfortably fit without requiring a large amount of scrolling.

---

# 03 — BRAND

Brand:

**London Coffee**

Use this exact capitalization where appropriate.

Suggested small brand descriptor:

`EST. 2023`

Optional supporting descriptor:

`COFFEE • LONDON`

Do not make the brand look corporate.

Brand personality:

- refined
- warm
- confident
- cultured
- premium
- modern
- understated
- London-inspired
- artisanal

Avoid:

- childish coffee graphics
- cartoon coffee cups
- generic coffee-shop templates
- neon colors
- excessive glassmorphism
- overly rounded UI
- startup-style gradients
- excessive shadows
- cheap-looking icons

---

# 04 — AVAILABLE IMAGE ASSETS

The user has already prepared the required image assets.

Use the existing assets. Do NOT generate replacements unless an asset is genuinely broken.

The current asset naming shown in the supplied folder screenshot is:

```text
background
bean
chocolate
coffee1
coffee2
coffee3
flower
```

Expected semantic mapping:

```text
background  → London / Big Ben background visual
bean       → roasted coffee beans
chocolate  → premium chocolate pieces
coffee1    → Caramel coffee cup
coffee2    → Vanilla coffee cup
coffee3    → Mocha coffee cup
flower     → vanilla flower + vanilla pods
```

## IMPORTANT

The three coffee cups are separate assets intentionally.

Do NOT merge them into one image.

This allows:

- independent positioning
- independent scale
- independent entrance animation
- slight depth hierarchy
- hover/interaction possibilities
- responsive repositioning

The assets should be layered rather than placed inside generic cards.

---

# 05 — ASSET HANDLING

Before implementation:

1. Inspect the actual image files.
2. Confirm dimensions and transparency.
3. Confirm which file corresponds to each semantic asset.
4. Preserve transparent PNG/WebP assets as transparent assets.
5. Do not put a white rectangular background behind transparent objects.
6. Do not apply arbitrary crop operations that cut off cups or decorative objects.
7. Use `object-fit: contain` where appropriate.
8. Keep the visual edges crisp.

If the actual filenames differ from the screenshot, map them semantically rather than renaming blindly.

Suggested public directory:

```text
public/
  images/
    background.png
    bean.png
    chocolate.png
    coffee1.png
    coffee2.png
    coffee3.png
    flower.png
```

If the source files are JPG/WebP, preserve their actual extension.

---

# 06 — PROJECT SETUP

Build using:

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- React
- Lucide React for icons if icons are needed

Use a clean modern Next.js structure.

Recommended:

```text
london-coffee/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── hero/
│       ├── LondonCoffeeHero.tsx
│       ├── HeroNav.tsx
│       ├── HeroCopy.tsx
│       ├── CoffeeProducts.tsx
│       └── HeroDecor.tsx
│
├── public/
│   └── images/
│       ├── background.png
│       ├── bean.png
│       ├── chocolate.png
│       ├── coffee1.png
│       ├── coffee2.png
│       ├── coffee3.png
│       └── flower.png
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

Do not over-componentize.

If a simpler structure is cleaner, that is acceptable, but the hero should remain maintainable.

---

# 07 — PAGE STRUCTURE

The page hierarchy should conceptually be:

```text
<body>
  <main>
    <section class="hero">
      <header class="hero-navigation">
        brand
        navigation
        connect CTA
      </header>

      <div class="hero-content">
        left editorial information
        central headline
        coffee product composition
        right editorial information
      </div>

      decorative layers
    </section>
  </main>
</body>
```

The hero is a composition, not a conventional grid of cards.

---

# 08 — HERO DIMENSIONS

Desktop target:

```text
width: 100%
height: 88vh
min-height: 720px
max-height: 920px
```

Use:

```css
min-height: 720px;
height: 88svh;
max-height: 920px;
```

But ensure the implementation does not create awkward clipping.

At 1440×900:

- hero should visually fit within the viewport
- navigation around top 6–8%
- headline around upper-middle
- coffee products occupy lower-middle
- decorative assets sit behind/around products
- no major element should be pushed below the viewport

Mobile:

```text
min-height: 760px;
height: auto;
```

But the mobile version should remain a single hero, not turn into multiple sections.

---

# 09 — COLOR SYSTEM

Primary background:

```text
#061C16
```

Alternative deep green:

```text
#08251D
```

Use a subtle background depth:

```text
#061C16 → #09251D
```

Do NOT create a strong visible gradient.

Primary ivory:

```text
#F4EBDD
```

Secondary ivory:

```text
#DCCFBE
```

Luxury gold:

```text
#D8A928
```

Bright accent gold:

```text
#F0BF2F
```

Dark UI:

```text
#06120F
```

Muted green:

```text
#19372E
```

Rules:

- gold is an accent, not the dominant color
- ivory is the main text color
- green dominates the background
- avoid pure white
- avoid pure saturated yellow
- avoid black panels unless needed for contrast

---

# 10 — TYPOGRAPHY

The hero requires a strong editorial contrast.

Use a luxury serif for the primary headline.

Recommended:

```text
Cormorant Garamond
```

or:

```text
DM Serif Display
```

or:

```text
Playfair Display
```

Preferred hierarchy:

```text
Headline:
Cormorant Garamond
font-weight: 600
letter-spacing: -0.04em
```

Navigation/body:

```text
Inter
```

or:

```text
Manrope
```

Script accent:

Use a restrained script font only for:

```text
Coffee Bliss
```

If a script font is unavailable, use a tasteful cursive Google font.

Do NOT use script typography for the brand, navigation, body copy, or buttons.

---

# 11 — NAVIGATION

Navigation belongs inside the hero.

Desktop composition:

LEFT:

```text
[London Coffee logo mark]
London Coffee
EST. 2023
```

CENTER:

```text
ABOUT US
MENU
EXPERIENCE
GALLERY
CONTACT
```

RIGHT:

```text
CONNECT WITH US
```

Important:

There must be NO:

```text
ORDER NOW
BUY NOW
SHOP NOW
CART
PRICE
ADD TO CART
```

This is a café portfolio / brand experience website.

The primary CTA should communicate connection rather than purchasing.

Preferred:

```text
CONNECT WITH US
```

Alternative:

```text
VISIT LONDON COFFEE
```

But `CONNECT WITH US` is the preferred implementation.

---

# 12 — NAVIGATION DESIGN

Do not use a large navbar box.

Navbar should feel integrated into the background.

Use:

```text
padding: 24px 42px
```

Desktop.

Brand:

- ivory
- elegant serif
- medium scale

Navigation:

- uppercase
- small
- generous letter spacing
- muted ivory
- hover becomes gold

Active item:

```text
ABOUT US
```

with a tiny gold line underneath.

CTA:

Thin gold border.

Example:

```text
○ CONNECT WITH US
```

Use a subtle circular icon only if it improves the composition.

Button:

```text
border: 1px solid rgba(216,169,40,.75)
border-radius: 999px
padding: 12px 20px
```

No oversized filled yellow button.

---

# 13 — HERO HEADLINE

Central headline is the primary visual statement.

Top script:

```text
Coffee Bliss
```

with small horizontal gold lines around it.

Main:

```text
LIFE BEGINS
AFTER COFFEE
```

Use two lines.

Suggested HTML:

```text
Coffee Bliss

LIFE BEGINS
AFTER COFFEE
```

Color:

`LIFE BEGINS` → ivory

`AFTER` → ivory

`COFFEE` → gold

Do not make every word gold.

Headline should be visually large but not consume the entire hero.

Desktop approximate:

```text
font-size: clamp(64px, 7vw, 112px)
line-height: .82–.9
```

Adjust based on actual screen.

The headline must remain readable and balanced with the cups.

---

# 14 — HEADLINE POSITION

Headline should be approximately:

```text
top: 17–20%
left: 50%
transform: translateX(-50%)
```

Do not vertically center the headline in the entire hero.

The coffee products need visual priority in the lower half.

The headline should sit behind/above the product composition.

---

# 15 — HERO DESCRIPTION

Directly under headline:

```text
Discover handcrafted coffee made with passion
and the finest beans.
```

But keep it compact.

Alternative:

```text
Handcrafted coffee, rich flavour,
and a little London soul.
```

Preferred copy:

```text
Handcrafted coffee, rich flavour,
and a little London soul.
```

Style:

- 15–18px
- muted ivory
- max-width 420px
- centered
- line-height 1.5

Do not create a huge paragraph.

---

# 16 — LEFT EDITORIAL PANEL

Left side is not a card.

It is floating editorial typography.

Use:

```text
RICH. AROMATIC.
UNFORGETTABLE.
```

Gold.

Below:

```text
Discover handcrafted coffee
made with passion and the
finest beans.
```

Add a minimal coffee-bean line icon above it.

Use a thin vertical line below/next to the block.

No box background.

No shadow.

No glassmorphism.

---

# 17 — RIGHT EDITORIAL PANEL

Right side:

```text
SAVOR EVERY
MOMENT
```

Gold.

Below:

```text
Good coffee.
Better vibes.
Every time.
```

Optional small text CTA:

```text
EXPLORE THE EXPERIENCE →
```

This is a navigation-style link, NOT an e-commerce button.

Use gold.

Keep it subtle.

---

# 18 — LONDON BACKGROUND ASSET

Use:

```text
background
```

as a subtle atmospheric layer.

Do NOT show it as a normal photograph.

It should feel embedded into the background.

Recommended:

```css
position: absolute;
left: 0;
bottom: 0;
width: 42%;
opacity: .18;
mix-blend-mode: screen;
filter: saturate(.6);
```

However, adjust according to the actual image.

The London landmark should remain subtle.

It must NOT compete with the headline or coffee cups.

The user should discover it rather than immediately see it as a large tourist photograph.

---

# 19 — COFFEE PRODUCT COMPOSITION

This is the visual centerpiece.

Three cups:

```text
coffee1
coffee2
coffee3
```

Place them in a slight overlapping composition.

Recommended order:

```text
coffee2 / Vanilla → left
coffee1 / Caramel → center
coffee3 / Mocha → right
```

The center cup should be slightly larger.

Example:

```text
left:
width: 25%

center:
width: 30%

right:
width: 25%
```

The actual visual widths must be adjusted after inspecting asset dimensions.

---

# 20 — CUP DEPTH

The cups must NOT sit on the same baseline like three product cards.

Use depth.

Center cup:

```text
z-index: 30
transform: translateY(-10px) scale(1.05)
```

Left:

```text
z-index: 20
transform: rotate(-2deg)
```

Right:

```text
z-index: 20
transform: rotate(2deg)
```

Keep rotations extremely subtle.

Do not make the cups look cartoonishly tilted.

---

# 21 — CUP POSITIONING

Desktop conceptual:

```text
coffee2:
left: 23%
bottom: -1%

coffee1:
left: 50%
bottom: -2%
transform: translateX(-50%)

coffee3:
right: 23%
bottom: -1%
```

The bottom of the cups can slightly overlap the hero's lower visual boundary, but the actual product must remain visually complete.

Never crop the whipped cream.

Never crop the top of the cups.

---

# 22 — COFFEE IMAGE SHADOW

Do not use a giant CSS box shadow.

Instead use:

```css
filter: drop-shadow(
  0 24px 30px rgba(0,0,0,.35)
);
```

This should enhance depth.

Avoid:

```text
box-shadow: 0 30px 80px black;
```

on transparent product PNGs.

---

# 23 — DECORATIVE FLOWER

Use:

```text
flower
```

Place bottom-left near the coffee products.

Position:

```text
left: 13–17%
bottom: 2–5%
width: 150–220px
```

It should look like a small editorial ingredient detail.

Do not make it huge.

It should partially sit behind the left coffee cup.

---

# 24 — CHOCOLATE

Use:

```text
chocolate
```

Place bottom-right.

Position:

```text
right: 13–18%
bottom: 2–5%
width: 150–220px
```

Place partially behind the right coffee cup.

Do not create a giant chocolate splash.

The existing image can be visually contained/cropped carefully.

---

# 25 — COFFEE BEANS

Use:

```text
bean
```

Place upper-right or right-middle.

Use it as a small floating decorative cluster.

Suggested:

```text
right: 5–8%
top: 23–30%
width: 120–170px
opacity: .9
```

The beans should not cover the headline.

Keep them visually sparse.

---

# 26 — DECORATIVE LINES

Use thin gold lines.

Examples:

```text
──── Coffee Bliss ────
```

and subtle vertical editorial rules.

Line width:

```text
1px
```

Opacity:

```text
.45–.7
```

No thick borders.

No random geometric decorations.

---

# 27 — HERO VISUAL HIERARCHY

The hierarchy MUST be:

```text
1. LONDON COFFEE branding
2. LIFE BEGINS AFTER COFFEE
3. Three coffee products
4. supporting editorial copy
5. London landmark
6. decorative beans / flower / chocolate
7. navigation details
```

Do not allow decorations to overpower the headline.

---

# 28 — RESPONSIVE DESIGN

## Desktop >= 1280px

Full composition.

Use absolute positioning for decorative assets and products.

Maintain strong negative space.

---

## Tablet 768–1279px

Reduce:

- headline size
- cup sizes
- side-panel width
- navigation spacing

Potentially hide some secondary nav items if required.

Do not allow horizontal overflow.

---

## Mobile <= 767px

This needs a deliberate composition, not simply shrinking desktop.

Navbar:

LEFT:

```text
London Coffee
```

RIGHT:

hamburger menu

Do not show all desktop navigation.

Headline:

```text
LIFE BEGINS
AFTER
COFFEE
```

or:

```text
LIFE
BEGINS
AFTER COFFEE
```

depending on viewport.

Keep headline approximately:

```text
48–64px
```

Three cups can remain visible but become smaller.

Recommended mobile layout:

```text
headline
small description
three overlapping cups
small decorative flower/chocolate
```

Hide or simplify the left/right editorial panels on small screens.

The hero should remain premium.

---

# 29 — MOBILE PRODUCT LAYOUT

Do not stack the cups vertically.

Keep them as a compact trio.

Example:

```text
Vanilla    Caramel    Mocha
   \         |         /
```

Center cup slightly larger.

The product composition can occupy:

```text
bottom: 8–15%
height: 38–45vh
```

depending on device.

---

# 30 — ANIMATION SYSTEM

Use subtle animation.

Do NOT over-animate.

Recommended entry timeline:

### 0ms
Background visible.

### 150ms
Navbar fades in.

### 300ms
Coffee Bliss fades/slides upward.

### 450ms
Headline reveals.

### 650ms
Description appears.

### 800ms
Left/right editorial copy appears.

### 900ms
Left coffee cup rises.

### 1000ms
Center coffee cup rises.

### 1100ms
Right coffee cup rises.

### 1250ms
Decorative flower/chocolate/beans appear.

Use:

```text
opacity
transform
filter
```

Do not animate width/height.

---

# 31 — MOTION STYLE

Use:

```text
ease-out
cubic-bezier(.16, 1, .3, 1)
```

For premium motion.

Cup entrance:

```text
opacity: 0
transform: translateY(50px) scale(.96)
```

to:

```text
opacity: 1
transform: translateY(0) scale(1)
```

Keep duration:

```text
700–1100ms
```

---

# 32 — MICRO-INTERACTIONS

Navigation hover:

```text
color → gold
```

with a tiny underline animation.

CTA:

```text
border-color → brighter gold
background → subtle gold tint
```

Do NOT make it bounce.

Do NOT add huge cursor-following effects.

Do NOT add magnetic buttons.

Do NOT add excessive parallax.

---

# 33 — OPTIONAL SUBTLE PARALLAX

If implemented, it must be extremely subtle.

Decorative beans:

```text
translateY based on pointer
max ±5px
```

Flower:

```text
max ±3px
```

Chocolate:

```text
max ±4px
```

Cups:

Prefer NO cursor-driven movement.

The coffee products should feel stable and premium.

Do not make the entire hero chase the mouse.

---

# 34 — ACCESSIBILITY

Every image needs meaningful alt text.

Examples:

```text
alt="London Coffee caramel iced coffee"
alt="London Coffee vanilla iced coffee"
alt="London Coffee mocha iced coffee"
alt="London skyline with Big Ben"
alt="Vanilla flower and vanilla pods"
alt="Premium dark chocolate"
alt="Roasted coffee beans"
```

Decorative-only images should use:

```text
alt=""
```

if they do not convey content.

Navigation must be keyboard accessible.

CTA must be an actual link/button.

Do not use clickable `<div>` elements.

---

# 35 — SEMANTIC HTML

Use:

```html
<main>
<section aria-labelledby="hero-title">
<header>
<nav>
<h1>
<p>
<a>
```

Only one `<h1>`.

H1:

```text
LIFE BEGINS AFTER COFFEE
```

Do not create additional H1 elements.

---

# 36 — PERFORMANCE

Use Next.js `<Image>`.

For hero assets:

```text
priority
```

only for the most important visual(s).

Avoid making every image priority.

Recommended priority:

- central coffee cup
- possibly background

Use appropriate sizes.

Example:

```tsx
<Image
  src="/images/coffee1.png"
  alt="London Coffee caramel iced coffee"
  fill={false}
  priority
  sizes="(max-width: 767px) 30vw, 30vw"
/>
```

If using transparent PNGs, ensure dimensions are explicit.

---

# 37 — CSS STRATEGY

Prefer Tailwind utilities for layout.

Use `globals.css` for:

- font setup
- base background
- custom animations
- typography utilities
- scrollbar if necessary

Do not create 1000 lines of CSS for a single hero.

Keep styling understandable.

---

# 38 — AVOID COMMON AI WEBSITE FAILURES

Do NOT:

- generate a generic centered hero
- use a giant gradient orb
- use glassmorphism cards
- use excessive rounded rectangles
- use random blobs
- add meaningless statistics
- add fake testimonials
- add pricing
- add fake reviews
- add an e-commerce cart
- add "Order Now"
- add "Buy Now"
- add unnecessary badges
- use emoji icons
- use random stock photos
- add huge 3D objects unrelated to coffee
- use excessive glow
- use neon gold
- use too many fonts
- use huge shadows
- make every element float
- use scroll-jacking
- use mouse-following cups
- make the page unnecessarily long

---

# 39 — VISUAL BALANCE

The page should feel approximately:

```text
15% navigation
25% headline/copy
50% coffee composition
10% atmospheric/decorative space
```

This is a visual approximation, not a strict CSS grid.

The bottom should feel grounded.

The cups should be the hero's physical anchor.

---

# 40 — BACKGROUND TREATMENT

Use a deep green background.

Recommended:

```css
background:
  radial-gradient(
    circle at 50% 55%,
    rgba(28, 75, 59, .20),
    transparent 48%
  ),
  #061C16;
```

The radial gradient should be extremely subtle.

Do not make the center bright.

Add perhaps a tiny amount of texture using CSS only if it remains almost invisible.

Do not load another texture asset.

---

# 41 — HERO LOWER EDGE

The bottom of the hero can have a subtle dark floor/grounding treatment.

Example:

```css
background:
linear-gradient(
  to bottom,
  transparent 75%,
  rgba(0,0,0,.22) 100%
);
```

The coffee cups should feel grounded without a visible hard floor line.

---

# 42 — NAVIGATION COPY

Use:

```text
ABOUT US
MENU
EXPERIENCE
GALLERY
CONTACT
```

CTA:

```text
CONNECT WITH US
```

Brand:

```text
London Coffee
EST. 2023
```

Do not invent additional navigation.

---

# 43 — LEFT COPY

Exact:

```text
RICH. AROMATIC.
UNFORGETTABLE.

Discover handcrafted coffee
made with passion and the
finest beans.
```

---

# 44 — RIGHT COPY

Exact:

```text
SAVOR EVERY
MOMENT

Good coffee.
Better vibes.
Every time.

EXPLORE THE EXPERIENCE →
```

---

# 45 — CENTRAL COPY

Exact:

```text
Coffee Bliss

LIFE BEGINS
AFTER COFFEE

Handcrafted coffee, rich flavour,
and a little London soul.
```

---

# 46 — BRAND MARK

If no separate logo asset exists, create a minimalist text-based brand lockup.

Do NOT create a complicated fake logo.

Recommended:

```text
◯
London Coffee
EST. 2023
```

The circle can contain a minimal line-art landmark icon only if it can be done cleanly.

Otherwise:

```text
London Coffee
EST. 2023
```

is better than a bad logo.

---

# 47 — ICONS

Use Lucide React only if necessary.

Potential icons:

```text
Coffee
MapPin
ArrowUpRight
Menu
UserRound
```

Do not use emojis.

Do not mix icon styles.

Icons should be thin and elegant.

---

# 48 — ROUTES

Only route required:

```text
/
```

Every navigation link may temporarily point to:

```text
#
```

because no other sections are being implemented.

But do not create those sections.

---

# 49 — COMPONENT ARCHITECTURE

Recommended:

## LondonCoffeeHero.tsx

Controls overall composition.

## HeroNav.tsx

Controls:

- logo
- navigation
- connect CTA

## HeroCopy.tsx

Controls:

- Coffee Bliss
- H1
- description
- side editorial copy

## CoffeeProducts.tsx

Controls:

- coffee1
- coffee2
- coffee3

## HeroDecor.tsx

Controls:

- background
- beans
- flower
- chocolate

Do not create components for every `<span>`.

---

# 50 — IMPLEMENTATION ORDER

Follow this exact order:

### Step 1
Create Next.js project.

### Step 2
Install required dependencies.

### Step 3
Create folder structure.

### Step 4
Move/copy assets into:

```text
public/images/
```

### Step 5
Configure fonts.

### Step 6
Create global background/theme variables.

### Step 7
Build semantic hero structure.

### Step 8
Build navigation.

### Step 9
Build central headline.

### Step 10
Add coffee products.

### Step 11
Add London background.

### Step 12
Add flower/chocolate/beans.

### Step 13
Add responsive behavior.

### Step 14
Add entrance animations.

### Step 15
Test desktop.

### Step 16
Test tablet.

### Step 17
Test mobile.

### Step 18
Fix clipping/overflow.

### Step 19
Fix typography.

### Step 20
Final visual polish.

---

# 51 — FINAL DESKTOP COMPOSITION

The intended composition is approximately:

```text
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  London Coffee      ABOUT US   MENU   EXPERIENCE   GALLERY      │
│  EST. 2023                                      CONTACT          │
│                                                   CONNECT WITH US │
│                                                                  │
│                 ─── Coffee Bliss ───                             │
│                                                                  │
│              LIFE BEGINS                                         │
│             AFTER COFFEE                                         │
│                                                                  │
│        Handcrafted coffee, rich flavour,                         │
│             and a little London soul.                            │
│                                                                  │
│  RICH.                    COFFEE CUPS                 SAVOR      │
│  AROMATIC.                                             EVERY      │
│  UNFORGETTABLE.                                      MOMENT       │
│                                                                  │
│                         VANILLA                                  │
│                    CARAMEL   MOCHA                               │
│                                                                  │
│        flower                         chocolate                  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

This is a composition reference only.

Do not literally build it as a text diagram.

---

# 52 — IMPORTANT Z-INDEX SYSTEM

Recommended:

```text
background: 0
background atmosphere: 1
London landmark: 2
decorative beans: 4
decorative flower/chocolate: 8
headline: 10
side copy: 12
coffee products: 20–30
navigation: 50
```

Navigation always remains visually accessible.

---

# 53 — OVERFLOW

Hero:

```css
overflow: hidden;
```

This is essential.

But do not use overflow hidden as a workaround for broken responsive positioning.

First position assets correctly.

Then use overflow hidden to create intentional composition.

---

# 54 — QUALITY BAR

The final result must look like a designer intentionally composed every element.

Ask these questions during implementation:

1. Does the page immediately look like a premium coffee brand?
2. Does London feel present without becoming a tourist website?
3. Are the coffee cups the strongest visual anchor?
4. Is the typography editorial?
5. Is the gold restrained?
6. Is there enough negative space?
7. Does the hero fit in one viewport?
8. Does it look good without scrolling?
9. Does mobile still feel premium?
10. Does anything look like a generic AI-generated template?

If the answer to #10 is yes, simplify.

---

# 55 — NO OTHER SECTIONS

This is extremely important.

Even if you think the website needs more content:

**DO NOT ADD IT.**

The current deliverable is ONLY:

```text
London Coffee Hero
```

The implementation is successful when the browser opens `/` and displays a polished single hero.

---

# 56 — FINAL ACCEPTANCE CHECKLIST

Before considering the work complete:

- [ ] Next.js App Router works
- [ ] TypeScript works
- [ ] `/` renders without errors
- [ ] Hero is the only section
- [ ] No footer
- [ ] No extra sections
- [ ] London Coffee branding is visible
- [ ] Navigation is visible
- [ ] CTA says CONNECT WITH US
- [ ] No Order Now button
- [ ] No shopping/cart UI
- [ ] Coffee Bliss visible
- [ ] H1 says LIFE BEGINS AFTER COFFEE
- [ ] COFFEE is gold
- [ ] Three coffee assets are used separately
- [ ] London background is subtle
- [ ] Bean asset is used
- [ ] Chocolate asset is used
- [ ] Flower asset is used
- [ ] Product layering feels premium
- [ ] Product shadows are subtle
- [ ] No horizontal scrollbar
- [ ] No accidental image clipping
- [ ] Desktop fits in one viewport
- [ ] Tablet works
- [ ] Mobile works
- [ ] Images have meaningful alt text
- [ ] Navigation is keyboard accessible
- [ ] Animations are subtle
- [ ] `prefers-reduced-motion` is respected
- [ ] No console errors
- [ ] No broken image paths
- [ ] No placeholder lorem ipsum
- [ ] No fake sections
- [ ] No unnecessary dependencies
- [ ] Final result looks premium rather than template-like

---

# 57 — REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Do not make the hero inaccessible to users who disable motion.

---

# 58 — FINAL INSTRUCTION TO THE IMPLEMENTING AGENT

Read this entire document first.

Then inspect the supplied assets.

Then implement the project from scratch.

Do not ask for a design clarification unless something is genuinely impossible.

Do not replace the design with your own generic interpretation.

The desired result is:

**A compact, premium, editorial London Coffee hero with a deep green background, ivory/gold typography, subtle London landmark atmosphere, three layered premium coffee cups, restrained ingredient decoration, and a refined portfolio-style navigation.**

The page must feel:

**expensive, calm, editorial, modern, London-inspired, coffee-focused.**

It must NOT feel:

**commercial, e-commerce-heavy, over-designed, childish, generic, or like a SaaS template.**

The most important visual rule:

> **Let the coffee products and typography do the talking. Decoration supports them; decoration does not compete with them.**

The most important UX rule:

> **This is a café portfolio / brand experience. The primary action is connection, not ordering.**

The most important implementation rule:

> **Build only the hero and make that hero exceptionally polished.**
