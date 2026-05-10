# Build Prompt — Boehlke Hardware Redesign

You are rebuilding the website for **Boehlke Hardware**, a family-owned neighborhood hardware store in Mequon, Wisconsin, in business since 1927. The store sells tools, hardware, and plumbing fixtures, and prides itself on professional, plumbing-trained staff. This is a complete redesign — not a refresh of the existing site.

**Build this as a plain static site: HTML, CSS, and vanilla JavaScript only. No framework. No build step. No `npm install`. The output is a folder of files that can be opened directly in a browser and uploaded to GitHub Pages as-is.** Detailed constraints in the "Tech stack" section below — read carefully and don't drift.

**The quality bar is the best work web design produces today.** Linear, Stripe, Notion, Airbnb, Apple-grade work — those are the reference standard. DESIGN.md's Pattern DNA Sources footer (Apple, Pinterest, Airbnb, Spotify) is the visual quality benchmark. The fact that Boehlke is a small-town hardware store does not lower the ceiling. The build needs to belong alongside the best websites on the internet today, while keeping the exact content of this small business intact. Imagine the Boehlke family opens the rebuild and sees something they didn't think existed at any price they could pay — that's the reaction we're shipping.

## Attached files

- **`BRIEF.md`** — full content reference. Verbatim original copy + refined long-scroll structure (5 sections: Story, Plumbing, Tools, Why Us, Visit). Brand names, contact info, Google Maps embed URL, sister-business links, accessibility PDF link.
- **`DESIGN.md`** — the design system authority (retail category, heritage variant). The pinned banner at the top of Section 2 has the applied palette and typography pairing — use those exact values.
- **`images/`** — `logo.png` and `hero.png`. Camm runs `download-images.sh` before handing this off, so by the time you see the folder both images exist. If `hero.png` is missing or low-quality, fall back to a typographic hero (see "Specific implementation hints" below) — do NOT stock-fill.

## Tech stack — plain HTML, CSS, and vanilla JavaScript only

**Build this site as plain HTML, CSS, and vanilla JavaScript. No framework. No build step. No npm.**

This is non-negotiable. Specifically:

- **No React, Next.js, Vue, Svelte, Astro, Remix, Gatsby, Nuxt, SolidJS, Qwik, Lit, or any other framework.** If your default impulse is to scaffold a framework project, override that impulse and start with a flat folder of files instead.
- **No build pipeline.** No webpack, Vite, Parcel, Rollup, esbuild, Turbopack, or `npm run build`. The files you write are the files that ship.
- **No package.json, no node_modules, no `npm install`.** This is a static site. There are no dependencies to install.
- **No JSX, no TypeScript, no SCSS/SASS preprocessor.** Plain `.html`, plain `.css`, plain `.js`. CSS custom properties (variables) are encouraged. ES modules in the browser are fine.
- **Tailwind via CDN is permitted** if you want utility classes — add `<script src="https://cdn.tailwindcss.com"></script>` to the head. No PostCSS, no Tailwind CLI, no compiled stylesheet.
- **External libraries via CDN are permitted** for narrow needs. Pull from cdnjs or unpkg via `<script>` or `<link>`. No bundler.
- **Google Fonts via `<link>`** for Playfair Display + Inter is the right call here.

**Why this matters:** the deploy target is GitHub Pages. Plain HTML/CSS/JS deploys with zero configuration; the moment a framework enters the picture, you inherit `basePath` issues and asset-path bugs. The visual quality bar in this prompt is fully achievable in plain HTML/CSS/JS.

## Use relative paths for every asset and link

To deploy cleanly to GitHub Pages (where the site lives at a subpath like `username.github.io/repo-name/`), all paths inside the site must be **relative**, not absolute.

- **Image src:** `src="images/hero.png"` ✅ — not `src="/images/hero.png"` ❌
- **Stylesheet href:** `href="style.css"` ✅
- **Script src:** `src="script.js"` ✅
- **Anchor links on the same page:** `href="#story"` ✅ — these are fine as-is (and are the entire navigation).

The single rule: if a URL starts with `/`, it's broken on GitHub Pages. Drop the leading slash.

## File structure

```
boehlke-hardware/
├── index.html
├── style.css
├── script.js
└── images/
    ├── logo.png
    └── hero.png
```

Single HTML file, single CSS file, single JS file, one images folder. Inlined `<style>` and `<script>` blocks are fine if you'd rather not split.

## Client-side password gate and noindex

This is a speculative redesign — the recipient hasn't asked for it. The deployed page lives on a public URL but should not be discoverable through search and should not load for casual visitors who stumble on the link. The Boehlke family gets the password from Camm in the outreach email; everyone else sees a gate.

**Add `<meta name="robots" content="noindex, nofollow">`** to the `<head>` of `index.html`.

**Implement a simple client-side password gate:**

- On page load, check `sessionStorage.getItem('fn-unlocked')`. If `'1'`, render the page and skip the gate.
- Otherwise, hide the page contents (`body { visibility: hidden; }` flipped by JS after unlock) and overlay a centered modal: small "Boehlke Hardware" wordmark in Playfair Display, one short line of copy ("Speculative redesign — enter password to view"), one password input, one submit button.
- Style the modal in the brand language from DESIGN.md: warm white background `#fafaf6`, mustard-yellow `#d4a017` submit button, Playfair Display for the wordmark, Inter for the copy and input, color-tinted shadow per Section 6, focus ring per Section 4.
- On submit: compare to `const SITE_PASSWORD = "mydemo";` at the top of `script.js`. On match, set `sessionStorage.setItem('fn-unlocked', '1')` and remove the modal. On mismatch, shake the input (8px translate, 200ms, three oscillations) and clear the field.
- The password is plain-text in `script.js` — intentional. Polite barrier, not real security. The same password (`mydemo`) is used across all FutureNative builds.

## Architecture: single long-scroll home page, anchor-only nav

This rebuild is **a single long-scroll home page**. The original site is one page; the rebuild stays one page. Do NOT generate `about.html`, `services.html`, `contact.html`, `plumbing.html`, or any sub-page. Every section is an anchor target on `index.html`.

**Section order (per BRIEF.md):**

1. Header (sticky, with anchor nav and tap-to-call phone chip)
2. Hero — `EST. 1927 · MEQUON, WI` eyebrow → "Your neighborhood hardware store since 1927." → subhead → CTAs
3. Story (`#story`) — 1927, four generations, brief inline mention of Boehlke Plumbing + Boehlke Bottled Gas
4. Plumbing (`#plumbing`) — Kohler, Moen, A.O. Smith, InSinkErator, Jim Murray
5. Tools (`#tools`) — Milwaukee, Crescent, Irwin / Ace, Hillman, National Hardware
6. Why Boehlke (`#why-us`) — 3 trust pillars
7. Visit (`#visit`) — address, hours, phone, embedded Google Map
8. Footer — sister-business links, accessibility PDF, copyright `© 1927–{currentYear}`

## Top navigation: 4 items, anchor-only

The header nav is exactly four items: **Story · Plumbing · Tools · Visit** — all anchor links to the corresponding section IDs. No external links in the nav. No "Home" item; the logo handles that. Phone number sits to the right of the nav as a small mustard-yellow tap-to-call chip (`tel:+12622423050`), visible on every viewport.

**Do NOT add nav items for:** "About," "Services," "Contact," "Hardware," "Plumbing Services," "FAQ," "Hours," "News" — anything not in the four-item list above. The site doesn't have those pages and inventing nav items invents pages.

## Pages and structure

**Single page.** `index.html`. Sections per the architecture above. No sub-pages.

## Use the refined copy

Pull text from BRIEF.md's **"Refined"** block — not the verbatim. The refined version preserves every fact, brand name, link, and credential from the original but reorganizes them into the long-scroll structure. The verbatim is there as a sanity-check reference if anything seems wrong.

## Image discipline — no image used twice

Two source images: `logo.png` and `hero.png`.

- **Logo** may appear in the header AND footer — that's the standard exception.
- **Hero** appears once, in the hero section background. Do NOT reuse it as a Story-section background, a Why-Us texture, or anywhere else.

If a section needs visual interest and only `logo.png` and `hero.png` exist, do not borrow either. Carry the section with typography, generous whitespace, a cream-alt panel (`#f4f1ea`), or one of the considered-restraint moves below. Do NOT introduce stock photos or invented imagery.

## Content fidelity — what NOT to change

This is a redesign, not a rewrite. **Content fidelity is about content, not architecture.**

**Do not add content that wasn't in the original:**
- No testimonials. The original has none.
- No team page or staff bios. The original doesn't introduce the team beyond "the Boehlke family."
- No blog, news, or "What's New" section.
- No FAQ — there are no real questions answered on the original.
- No e-commerce, cart, online catalog, "shop our products" flow. Walk-in retail.
- No newsletter signup, live chat, popup modals, exit-intent capture.
- No fabricated services like "free local delivery" or "expert consultations." If BRIEF.md doesn't list it, it's not on the rebuild.

**Do not remove content the original included:**
- All eleven brand names: Kohler, Moen, A.O. Smith, InSinkErator, Jim Murray, Milwaukee, Crescent, Irwin, Ace, Hillman, National Hardware.
- The Google Maps embed (with the original embed URL — see Specific implementation hints).
- Both sister-business links: `http://boehlkeplumbing.com/` and `http://boehlkebgcorp.com/`.
- The accessibility PDF link: `https://boehlkehardware.com/wp-content/uploads/Accessibility.pdf`.
- The phone number `(262) 242-3050` — header chip, contact section, and footer.
- Hours of operation — twice on the page is fine (Visit section + footer skim line).
- The 1927 founding year and the "third and fourth generations" framing.

**Architecture moves are encouraged, content removals are not.** The original's nav-less single-page structure becomes a five-section long-scroll with anchor nav — same content, modern architecture.

## Design system rules to follow

Apply the values pinned in DESIGN.md Section 2's banner. Specifically:

- **Palette:** primary `#1a1a1a` (headings, footer, nav links), accent `#d4a017` (CTAs, eyebrow color, hover underlines, brand-row dividers), background `#fafaf6`, section alt `#f4f1ea`, body text `#3d3d3d`, muted `#737373`, border `#e8e4dc`.
- **Typography:** Playfair Display (display, weight 500) for hero, section headlines, and the small "Boehlke Hardware" wordmark. Inter for everything else (body weight 400, UI weight 500, eyebrows weight 600). Sizes per DESIGN.md Section 3 hierarchy table — Display Hero 64px / Section Heading 40px / Body 15px line-height 1.55 / Eyebrow 12px uppercase 0.10em.
- **Tight headline tracking:** -0.01 to -0.02em on all display sizes per Section 3.
- **Eyebrow labels above every major section:** uppercase 12px Inter weight 600 letter-spacing 0.10em color `#d4a017` (mustard) — `OUR STORY`, `PLUMBING DEPARTMENT`, `TOOLS & HARDWARE`, `WHY BOEHLKE`, `VISIT US`.
- **Buttons:** 4px radius (sharp boutique signal), uppercase Inter 14px weight 600 letter-spacing 0.08em. Primary CTA: mustard background `#d4a017` with `#1a1a1a` text (high contrast, vintage feel). Secondary: transparent with 1px solid `#1a1a1a` border.
- **Cards (story / why-us pillar tiles):** `#ffffff` or `#fafaf6` surface, 1px solid `#e8e4dc` border, 4px radius, NO shadow by default. Subtle 1.02 image scale + secondary action only on hover.
- **Color-tinted shadows only.** No `rgba(0, 0, 0, 0.x)` shadows anywhere. Use `rgba(26, 26, 26, 0.08) 0px 8px 24px` for the product-card-style hover lift, `rgba(26, 26, 26, 0.04) 0px 1px 3px` for the sticky nav after scroll, and `rgba(26, 26, 26, 0.6)` only as a modal scrim.
- **Section padding:** 80px desktop / 56px tablet / 40px mobile per DESIGN.md Section 5 retail spacing — slightly tighter than the home-services 96px default. Don't compress further.
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 — no arbitrary values like 15px or 27px.
- **Motion profile:** retail expressive-energetic — micro 200ms / standard 350ms / macro 500ms. Default ease `cubic-bezier(0.4, 0.0, 0.2, 1)`, enter ease `cubic-bezier(0.16, 1, 0.3, 1)`. Apply the `prefers-reduced-motion` block from Section 9 verbatim.

## Polish requirements — make this look expensive

The failure mode is "functional, default-CSS, no real polish" — basically a slightly nicer version of the original. That is not the bar. The bar is the visual quality of the best websites being designed today: Linear, Stripe, Notion, Apple, Airbnb. Every micro-detail in DESIGN.md exists to hold that bar. Treat them as mandatory, not aspirational.

**Mandatory micro-interactions:**

- **Every interactive element has a hover state.** Buttons, anchor nav links, the phone chip, brand-row entries (subtle accent-color underline reveal), the trust-pillar tiles. 200ms default duration, `cubic-bezier(0.4, 0.0, 0.2, 1)`.
- **Card / pillar hover lift.** 2px upward translate + shadow `rgba(26, 26, 26, 0.08) 0px 8px 24px`, 200ms ease-out.
- **Underline reveals on inline links.** Color `#d4a017` (mustard), 3px offset, animates in 200ms. Apply to the sister-business links and the accessibility link in the footer.
- **Scroll-triggered reveals** on the hero subhead (not the eyebrow/headline — those are visible on load), the Story body, the Plumbing brand row (stagger by 80ms across the five brand names), the Tools two-column block (stagger), the Why-Us trust pillars (stagger), the Visit two-column. Standard 350ms duration with the expo ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`). 12px upward translate + opacity 0 → 1.
- **Form input focus rings.** None on this build (no forms). The password-gate input gets the same treatment though: 2px solid `#d4a017`, 2px offset, 200ms transition, no default browser ring.
- **Button states.** Default (mustard bg, charcoal text), hover (background darkens to a slightly deeper mustard `#b88a14`, NO scale), active (1px translate down), focus (visible 2px solid `#1a1a1a` ring, 2px offset). All four defined.
- **Sticky header lift on scroll.** Header gains a soft `rgba(26, 26, 26, 0.04) 0px 1px 3px` shadow and a subtle background opacity bump after the user scrolls past 64px.

**Mandatory typography polish:**

- **Letter-spacing on headlines.** Hero display -0.02em, section headlines -0.01em, body normal.
- **Eyebrow labels above every major section.** Uppercase 12px Inter weight 600 letter-spacing 0.10em color `#d4a017`. The hero eyebrow gets the same treatment.
- **Generous body line-height.** 1.55 per DESIGN.md Section 3 (retail body large 1.65 for the Story paragraphs is fine).
- **Heading hierarchy honored.** h1 only for the hero. h2 for the five section headlines. h3 for trust-pillar titles. Don't promote everything to h2.
- **Max-width on text columns.** Body copy at 640–720px max-width.
- **Brand-row typography.** The "Kohler · Moen · A.O. Smith · InSinkErator · Jim Murray" row renders as Playfair Display 22–28px weight 500, color `#1a1a1a`, separated by mustard-yellow middot characters (`·` colored `#d4a017`). NOT as fake logo lockups. Same treatment for the Tools and Hardware lines, scaled appropriately.

**Mandatory shadow + color treatment:**

- **Color-tinted shadows only.** No `rgba(0,0,0,...)` anywhere in `box-shadow` declarations. Audit before declaring done.
- **No pure white backgrounds.** Use `#fafaf6` for the page, `#f4f1ea` for alternating sections, `#ffffff` only for the trust-pillar card surfaces. Pure-white page background reads as sterile.
- **Mustard accent is for CTAs, eyebrows, hover underlines, and the brand-row dividers — NOT for body text or large fills.** Don't paint a whole section mustard. Use it as a precise accent.

**Mandatory layout polish:**

- **Section padding** generous per Section 5: 80px / 56px / 40px desktop/tablet/mobile.
- **Real photography only** — only the two images in `images/`. No clip art, no stock, no AI-generated imagery.

## Considered restraint, not flat restraint

DESIGN.md's references — Apple, Pinterest, Airbnb, Spotify — are all restrained. None are *flat*. Their pages have texture, gradients, photo backgrounds with overlays, asymmetric layouts, layered surfaces. Restraint means "not loud," not "no treatment."

For this build, the highest-risk default-Tailwind sections are the **Plumbing brand row**, the **Tools / Hardware columns**, and the **Why-Us trust pillars** — they're each conceptually a flat block holding a bit of text. Apply at least one of these treatments to each:

- **Subtle gradient.** A linear gradient between two close shades of cream (`#fafaf6` → `#f4f1ea`) at 135deg, imperceptible alone but the difference between "designed" and "default Tailwind."
- **Noise / grain texture.** A 1–3% opacity SVG `<feTurbulence>` filter or a small repeating PNG over solid backgrounds.
- **Asymmetric split.** The Story section uses a 2-column layout: refined paragraphs on the left, an oversized faded `1927` numeral in Playfair at 8% opacity on the right (cream-alt background), or vice versa. NOT centered single-column.
- **Decorative oversized typography.** A giant `&` styled in Playfair at 200px / 6% opacity sitting behind the "Tools & Hardware" headline. A faded `1927` behind the Story headline.
- **Layered surface.** The Visit section: cream-alt background panel with a `backdrop-filter: blur(8px)` semi-transparent card holding the address/hours, sitting beside the Google Map embed.
- **Color-blocked angled split.** The transition from Why-Us (warm white) to Visit (cream-alt) uses an angled SVG divider, not a flat horizontal break.

These moves stay within DESIGN.md's palette, motion profile, and typography. No auto-playing video, no parallax, no bouncy easing, no stock photography, no off-palette colors. *Considered* restraint.

**Negative test:** if a section can be described as "solid color background, centered headline, body below" — that's the default. Apply at least one move above.

## Specific implementation hints

- **The Google Maps embed is non-negotiable and uses the original embed URL.** Iframe src:
  ```
  https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.701438410157!2d-88.04404200000005!3d43.236719000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804fb7da273c3d7%3A0xe84f52a8b4b060fd!2s10712+W+Freistadt+Rd!5e0!3m2!1sen!2s!4v1401960218313
  ```
  Wrap in a 16:9 aspect-ratio container with 4px border radius and a 1px `#e8e4dc` border. `loading="lazy"` on the iframe. Don't replace the embed with Mapbox or any other provider.
- **Phone number tap-to-call.** Three placements: header chip, Visit section (large), footer. All use `tel:+12622423050`. The header chip is small mustard-yellow background with charcoal text in Inter weight 600.
- **Hero fallback path.** If `images/hero.png` is missing or low-res when you start, replace the hero background with a cream-alt color block (`#f4f1ea`), keep the eyebrow + headline + subhead + CTAs, and add a giant decorative `1927` in Playfair Display weight 400 at 12% opacity floated bottom-right of the hero. Do not stock-fill.
- **Sister-business links** appear in the Story section as a small inline mention ("Boehlke Plumbing and Boehlke Bottled Gas are still part of the family") with the two URLs as inline anchor links, AND in the footer as a small two-line block. Both placements get the underline-reveal hover treatment.
- **Brand names render as type, not as fake logo lockups.** The Plumbing brand row is one line of Playfair Display 24px weight 500 with mustard-yellow middot dividers — `Kohler · Moen · A.O. Smith · InSinkErator · Jim Murray`. The Tools and Hardware lines mirror this treatment scaled to 20px.
- **Footer copyright reads `© 1927–{currentYear} Boehlke Hardware. Family owned.`** — replace `{currentYear}` with the actual current year via inline JS (`document.getElementById('year').textContent = new Date().getFullYear();`). The original site's stale "© 2014 Boehlke Plumbing, Inc." line should NOT be reproduced.
- **Accessibility PDF link** in the footer right column, small Inter 13px, color `#737373`, hover color `#1a1a1a`, opens in new tab (`target="_blank" rel="noopener"`).
- **Single store, single location.** No "find a location" widget. No "service area dropdown." No "branches." Just the one address.

## Build instructions

1. Create a flat project folder: `index.html`, `style.css`, `script.js`, and `images/` containing `logo.png` and `hero.png` (the latter two are already in place when you start).
2. Set up the design tokens from DESIGN.md Section 2's pinned banner + Sections 3 / 5 / 6 as CSS custom properties at the top of `style.css`. All hex values exact.
3. Import Playfair Display and Inter via Google Fonts `<link>` in the head.
4. Build the password gate first per the Client-side password gate section above. Style it in the brand language so it's the first impression.
5. Build the header (sticky, anchor nav, phone chip) per the Top navigation section.
6. Build sections 1–7 in order using the refined copy from BRIEF.md. Image slots reference filenames in `images/` using **relative** paths.
7. Apply the motion profile from DESIGN.md Section 9 in full — including the `prefers-reduced-motion` block. Use plain CSS transitions and vanilla `IntersectionObserver` for scroll reveals. No animation libraries.
8. Implement every item in the "Polish requirements" section above. None are optional.
9. Apply at least one "considered restraint" treatment to each of: Plumbing brand row, Tools/Hardware section, Why-Us trust pillars, the Story section. Do not let the page collapse into flat solid-color blocks.
10. Verify against DESIGN.md Section 10's Iteration Guide. Skip items 1, 2, 3, 6, 8, 9, 10, 11, 12 — they assume e-commerce. Items 4, 5, 7 (sharp button corners, uppercase letter-spaced CTAs, visible price-equivalent which here is the phone number) DO apply.
11. Confirm the deploy-readiness checks: no leading-slash absolute paths, no `package.json`, every asset reachable via relative path.

## What good looks like

The bar is **the best web design produces today, full stop.** The rebuild should be able to sit alongside Linear, Stripe, Notion, Airbnb, Apple — alongside Apple, Pinterest, Airbnb, Spotify (the DESIGN.md DNA sources) — and not look out of place. The fact that Boehlke is a small-town hardware store doesn't lower the ceiling at all.

Three diagnostic questions:

1. **Does it have nuance?** Subtle scroll reveals, hover states on every interactive element, color-tinted shadows, generous spacing, deliberate Playfair-display + Inter typography pairing. If hover states are missing or shadows are pure black, the build drifted from DESIGN.md.
2. **Is the content surface identical to the original?** Same brand names (all eleven), same sister-business links, same Google Maps embed, same accessibility PDF, same phone number, same hours, same 1927-and-four-generations framing. If anything was added (testimonials, a blog, e-commerce, fake services) or removed, content fidelity broke.
3. **Could this sit in a list of "best small-business websites of 2026" without anyone noticing it's been speculatively rebuilt?** Open the rebuild side-by-side with the brands cited in DESIGN.md's Pattern DNA Sources footer. The rebuild should belong in that company. If it looks "nice for a small-town hardware store," the polish requirements weren't fully applied. If it looks like a Stripe-grade site that happens to be selling Milwaukee tools and Kohler fixtures, the build is done.

Restraint, clarity, real photography (only the two images in `images/`), and accurate factual content are non-negotiable. Decorative motion, default CSS shadows, stock photography, fake testimonials, e-commerce flows, and invented sections are signs the build drifted from DESIGN.md and need to be pulled back. So is anything that reads as "scaled to the size of a small-town hardware store" — that's the failure mode. The pitch only works because the work itself overdelivers.
