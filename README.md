# London Coffee — Premium Cafe Landing Hero

An editorial, premium café campaign website designed to capture the heritage of London and the rich elegance of handcrafted coffee. Built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

---

## ☕ The Concept: London Heritage meets Artisanal Coffee

Unlike generic cafe templates, **London Coffee** is designed around a premium brand identity. The goal of this project is to build an immersive, single-section editorial landing experience that immediately sets a sophisticated tone:
*   **The Palette:** A luxurious combination of deep forest green backgrounds, rich espresso tones, warm ivory text, and understated gold accents.
*   **The Typography:** A striking contrast of editorial serif headings (`Cormorant Garamond`), elegant script detailing (`Alex Brush`), and clean modern navigation (`Inter`).
*   **The Atmosphere:** A subtle watermark of the London Skyline (with the Big Ben tower) blending into the background, coupled with layered coffee elements for a tactile 3D feel.
*   **Visual-First Design:** Clean, slow animations that fade components and raise the primary coffee cups into view upon loading, fully respecting accessibility rules (`prefers-reduced-motion`).

---

## ✨ Features

-   **Layered Visual Composition:** Separated layers for background watermarks and foreground coffee products (`coffee1.png` - Caramel coffee) for parallax-like depth.
-   **Editorial Layout:** Uses custom text-alignment and positioning that balances luxury print media layout and modern web standards.
-   **Integrated Navigation:** A sleek pill-shaped overlay navigation bar centered at the top, featuring aesthetic architectural icon details.
-   **Tailwind CSS v4 Integration:** Built with the latest Tailwind v4 engine, leveraging `@theme` directives directly in CSS instead of a legacy configuration file.
-   **Accessibility & Reduced Motion:** Uses CSS media queries to bypass animations for users with system-level `prefers-reduced-motion` enabled.
-   **Modern React 19 + Next.js 16 Setup:** Fully typed and ready for production builds.

---

## 🛠️ Tech Stack & Dependencies

*   **Next.js 16 (App Router):** Modern routing structure and server-side components.
*   **React 19:** Utilizing the latest rendering optimizations.
*   **Tailwind CSS v4:** Modern styling with direct CSS configurations.
*   **TypeScript:** Type safety across components and templates.
*   **Lucide React:** Icon package for supplementary UI states.

---

## 📁 Project Structure

```text
london-coffee/
├── app/
│   ├── favicon.ico          # Cafe favicon asset
│   ├── globals.css          # Custom imports, fonts (@theme values) & keyframe animations
│   ├── layout.tsx           # Main root layout wrapper
│   └── page.tsx             # Main container rendering LondonCoffeeHero
├── components/
│   └── hero/
│       ├── LondonCoffeeHero.tsx   # Core coordinator component for the hero section
│       ├── HeroNavigation.tsx     # Pill-shaped navigational header with custom SVGs
│       ├── HeroContent.tsx        # Central bold headers, script subtitle & CTAs
│       ├── CoffeeComposition.tsx  # Dynamic layout of emerging coffee cups & accents
│       └── HeroDecorations.tsx    # Skyline background watermark layer
├── public/
│   └── images/              # Highly curated PNG/WebP assets
│       ├── background.png   # London skyline watermark image
│       ├── bean.png         # Roasted coffee bean asset
│       ├── choclate.png     # Premium chocolate pieces (note spelling in folder)
│       ├── coffee1.png      # Hero Caramel coffee cup
│       ├── coffee2.png      # Vanilla coffee cup
│       ├── coffee3.png      # Mocha coffee cup
│       └── flower.png       # Vanilla flower + pods
├── package.json             # Scripts & dependency definitions
├── tsconfig.json            # TypeScript configuration compiler rules
└── next.config.ts           # Next.js platform configuration
```

---

## 🎨 Design System (Theme Variables)

Configure theme variables directly in [`app/globals.css`](file:///c:/Users/nishk/OneDrive/Desktop/project/london%20coffee/app/globals.css) inside `@theme`:

| Token | CSS Variable | Color Value | Description |
| :--- | :--- | :--- | :--- |
| **Cream** | `--color-brand-cream` | `#F4EFE6` | Primary background color of the hero panel. |
| **Outer Background** | `--color-brand-outer` | `#241A15` | Dark brown container wrap. |
| **Espresso** | `--color-brand-espresso` | `#2A1B16` | Main text color & primary button tone. |
| **Gold** | `--color-brand-gold` | `#B88A24` | Accents, script highlights, and borders. |
| **Bright Gold** | `--color-brand-gold-bright` | `#DDAA33` | Hover states and bright callouts. |
| **Green** | `--color-brand-green` | `#163C30` | Forest green option for supplementary accents. |

---

## ⚙️ Installation & Development Setup

Follow these steps to run the café project locally:

### 1. Prerequisites
Ensure you have **Node.js** (v18.x or later) installed on your system. You can verify this by running:
```bash
node -v
npm -v
```

### 2. Install Dependencies
Navigate to the root directory of the project in your terminal and install the required npm packages:
```bash
npm install
```

### 3. Run the Development Server
Start the Next.js development server:
```bash
npm run dev
```
Once started, the application will be accessible at:
👉 **[http://localhost:3000](http://localhost:3000)**

*The page supports Hot Module Replacement (HMR) and will auto-update as you edit components.*

### 4. Build for Production
To generate an optimized build for production, run:
```bash
npm run build
```
This builds the site and places the production-ready code inside the `.next` directory.

To test the production build locally, run:
```bash
npm run start
```

---

## 🎥 Animations Spec

All animations are configured in CSS using native GPU-accelerated transforms for maximum performance:
1.  **Header Fade-in:** The Navigation Pill enters smoothly from the top with `fadeIn`.
2.  **Editorial Rise:** The titles, paragraphs, and buttons use `fadeInUp` with graduated delays (`300ms`, `450ms`, `650ms`, `800ms`) to create a storytelling flow.
3.  **Cup Emergence:** The primary cup rises from below utilizing `cupCenter` animation:
    *   Starting position: scale `0.9` shifted down `50px`.
    *   Final position: scale `1.15` and a soft `12deg` rotation.
