# Abdul Aziz portfolio — Next.js + Tailwind CSS

A conversion of the supplied `abdul-aziz-portfolio (1)(1).html` into real JSX components and Next.js App Router pages. All original text, inline SVG icons, SVG project artwork, colors, typography rules, layout, spacing, breakpoints, and bespoke animation styles are preserved.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

For production:

```bash
npm run build
npm run start
```

## Files

- `app/page.jsx`: home route.
- `app/works/page.jsx`: work listing and filters.
- `app/works/<project>/page.jsx`: all eight case studies.
- `app/about-us/page.jsx`: about page.
- `app/resume/page.jsx`: experience and resume page.
- `app/contact-us/page.jsx`: contact page.
- `app/legal-notice/page.jsx`: legal notice.
- `app/not-found.jsx`: original missing-page content.
- `components/pages/*.jsx`: editable JSX markup for each original page.
- `components/Header.jsx`, `Footer.jsx`, `MobileMenu.jsx`: shared original navigation and footer.
- `components/PortfolioShell.jsx`: navigation lifecycle and browser animation initialization.
- `app/globals.css`: Tailwind CSS v4 import, original brand theme, reusable typography styles, and original bespoke animation CSS.
- `lib/tessel.js`: original animation engine converted to an ES module.
- `lib/portfolio-runtime.js`: original interaction behavior adapted to Next.js navigation with cleanup on route changes.
- `lib/data.json`: original project categories, industries, and portfolio data.
- `public/assets/`: all eight embedded hero image layers, extracted without recompression.
- `public/Abdul_Aziz_CV.pdf`: original embedded resume PDF.

Tailwind utilities compile through `@tailwindcss/postcss`. The original typography/component CSS and cinematic styles remain in `globals.css` because removing those styles would alter the supplied design. No Tailwind CDN script or HTML injection is used to render the page content. The animation engine performs its original DOM updates for gallery labels, filters, transitions, and form feedback.

The cinematic mountain hero, tile canvas fields, circular 3D gallery, keyboard gallery controls, reveal/parallax motion, GSAP Flip filters, zoom transitions, smooth scrolling, mobile menu, focus handling, reduced-motion behavior, and resume download remain included. Internal hash links become real Next.js routes, so pages support direct URLs and refreshes.

Inter is loaded from the same Google Fonts stylesheet as the source. SVG icons and artwork remain inline JSX instead of being substituted with an icon library.

## Original preview behavior

The original preview note has been removed. Some case-study content may still be placeholder content. The contact form retains the source's validation and preview feedback: it does **not** send email, and there is no `/api/contact` endpoint. Configure a backend separately if you want to make contact submissions live.

## Validation

The production build passes. Browser comparisons cover all 14 portfolio routes at 1440px and 390px widths, checking SVG paths and sampled layout, font, line-height, and color values against the supplied HTML. External font requests were disabled equally in both comparison pages. Navigation, filters, the mobile menu, form validation, preview feedback, resume download, and gallery controls were also exercised. Build files and `node_modules` are excluded from this source package; dependencies are pinned in `
# Abdulaziz
