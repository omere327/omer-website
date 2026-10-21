# omerejaz.com

Personal brand site for Mohammed Omer Ejaz. It's built from the "Omer Ejaz Website v4" Claude Design export, on the same stack as sensviz.com: Next.js (App Router, Turbopack), TypeScript and Tailwind CSS v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Layout

- `styles/oe.css` holds the design-system tokens and the `oe-*` classes the site uses, pruned to the taste-skill house rules (no gradients, shadows, hairlines or monospace). It is imported into Tailwind's `components` layer, so utilities override it.
- `app/globals.css` maps the tokens to Tailwind theme values (`text-on-dark`, `bg-surface-1`, `font-display`, `ease-oe`…) and holds the motion layer.
- `styles/motion.css` holds the richer motion: scroll entrances (`data-reveal` = `words`, `card`, `row`, `slide`, `wipe`, read by `components/motion/RevealObserver.tsx`), the pointer light and tilt on `[data-spot]` cards (`components/motion/PointerLight.tsx`), hover presence on the How I build stages, Four things rows, questions and clients, the brand-button shine, and scroll-driven motion (the reading-progress line and the hero drifting away). Travel is off under reduced motion; hover colour changes stay.
- `components/ds/` holds the design-system components (NavBar, Button, TextLink, Mark, Lockup, Icon, Field).
- `components/sections/` holds the home-page sections.
- `lib/content.ts` holds all copy and data.
- `public/omer-ejaz.webp` is the About portrait (a transparent cutout, shown in colour).
- Colour: the dark frame is pitch black (`--oe-ink*`); cards on it have no fill, only a slight edge (`.oe-line`, `.oe-line-t` in `app/globals.css`). Text on it uses cool tones (`--oe-frost`, `--oe-mist-cool`, `--oe-steel-cool`). The logo and wordmark stay white. The blue runs as a low, deep gradient (`--oe-grad-deep`) on the buttons and highlights, and as soft glows behind the hero and footer; the light bands are a neutral ivory. Colour comes in two places only. SensViz blue (`--oe-blue`, `-strong` under white text, `-soft` on black) marks the live "How I build" status ("Building now"), the active capability tab and the footer wordmark's light. Each product scene has its own colour and stage tint (`--p-*` in `styles/oe.css`, `[data-tone]` in `styles/demos.css`). `components/ds/SensVizLogo.tsx` sets SensViz's logo from the owner's PNGs: `public/brands/sensviz-icon.png` (also the logo in the structured data) and `public/brands/sensviz-wordmark.png` (recoloured to onyx for the light band). Both are about three times their display size, so they stay sharp.
- `public/logos/` holds the client logos for the Clients wall (trimmed; CV Jury's dark lettering lifted and Playano's dark background removed to read on black) and `public/badges/` the SensViz rating and partner badges shown under the Clients logos. Both are listed in `lib/content.ts` (`clients`, `recognition`); a client without a logo shows its name. The source files are small (about 200px wide), so send SVG or larger PNG versions to sharpen them on high-density screens.
- `app/icon.svg` is the favicon (the logo mark in white on a rounded blue-black badge with a faint SensViz-blue edge, so it reads on light and dark tabs); `app/apple-icon.png` is the home-screen icon.
- `components/work/` holds the animated product scenes for "Built with SensViz": `scenes.tsx` draws each one (GrantMatch, CVJury, Playano, SIPP, AR Tile) in the site's tones, `Demo.tsx` scales it to its card and plays it only while on screen, and `styles/demos.css` holds the motion. With reduced motion each scene rests on its finished state. They illustrate how each product works; they are not screenshots.

## Search (SEO, GEO, AEO)

- `app/layout.tsx` sets the title, description, canonical, Open Graph and Twitter card; `app/opengraph-image.tsx` draws the social card; `app/robots.ts` and `app/sitemap.ts` serve `/robots.txt` and `/sitemap.xml`. All use `SITE_URL` in `lib/content.ts` (`https://omerejaz.com`; change it there if the domain differs).
- `components/seo/StructuredData.tsx` outputs JSON-LD: WebSite, ProfilePage, Person (Omer, with both spellings of Mohammed/Mohammad and his LinkedIn), Organization (SensViz, both offices) and FAQPage. It describes only what the page shows.
- `components/sections/Faq.tsx` is the visible FAQ; its text comes from `faqs` in `lib/content.ts`, which the FAQPage data reads too, so the two cannot drift apart.
- Keyword focus: the page targets searches for Omer by name and role (Omer Ejaz, SensViz CEO and co-founder) and describes SensViz in its own service terms (custom AI development, agentic AI, generative AI and LLMs, computer vision, AI automation). Head terms such as "custom AI development company" belong to sensviz.com, so this page links there rather than competing with it.
- SensViz facts (offices, services, products) are taken from sensviz.com; recheck them when that site changes.

## Before launch

- The email (`omerejaz@sensviz.com`) and LinkedIn in `lib/content.ts` are Omer's own.
- Once live, verify the site in Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, and check the structured data with the Rich Results Test.
- The subscribe form only validates in the browser. Connect it to a mailing-list provider.
- The export only had the home page, so the Work, Insights and About nav links jump to sections on the home page.

## Design checks

The page is held to the `design-taste-frontend` skill (`~/.claude/skills/taste-skill`). From this folder:

```bash
node ~/.claude/skills/taste-skill/scripts/lint.mjs app components styles lib
npx -y -p node@22 node ~/.claude/skills/taste-skill/scripts/inspect.mjs http://localhost:3000/ --out .taste-skill/after --allow hairline,gradient,button-fx,outlined-box,empty-screens,blank-gap,off-centre
```

`--allow gradient,button-fx` is there because the SensViz blue runs as a gradient (`--oe-grad-*` in `styles/oe.css`): on the brand buttons, the How I build stages on hover, the active capability tab, and as soft glows behind the hero and footer (the owner's call). `outlined-box` and `empty-screens` are there because the dark sections are pitch black with cards drawn as a slight edge instead of a tone step (the owner's call), so there are no colour fields for the inspector to count. `blank-gap` is there because the footer wordmark is deliberately near-transparent glass, and the inspector's pass captures the last sections before their scroll entrance has run. `off-centre` is there for the same reason: it measures the logo and badge tiles while they are still tilted in on entrance (once settled, content sits on the same gutter both sides). `hairline` is there because the footer deliberately copies langchain.com's footer, thin rules above its columns included (the owner's call). Its wordmark (`components/sections/FooterWordmark.tsx`) is the logo and name as transparent glass letters (an almost clear tint and a top sheen) with crisp inner edges lit by a light that glides across with scroll, as on langchain.com; the logo's e draws itself in when the footer arrives.

The inspector needs Node 22 (hence `npx -p node@22`) and a running dev server. It writes screenshots to `.taste-skill/`, which is git-ignored.
