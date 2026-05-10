# Polish-Pass Audit — Boehlke Hardware

This is iteration 2 of the build. The first build (per BUILD-PROMPT.md) handled structure, content, and basic styling. This pass exists because Replit Agent reliably produces ~60% of the design spec on pass one; the remaining 40% — micro-interactions, scroll reveals, shadow discipline, eyebrow labels, focus rings — almost never lands without an explicit audit. This prompt fixes that.

## Constraints

- **Do not change content.** Same copy, same images, same eleven brand names (Kohler, Moen, A.O. Smith, InSinkErator, Jim Murray, Milwaukee, Crescent, Irwin, Ace, Hillman, National Hardware), same sister-business links, same Google Maps embed, same accessibility PDF link, same phone number, same hours.
- **Do not add or remove sections.** Section count is fixed: header → hero → Story → Plumbing → Tools → Why Boehlke → Visit → footer.
- **Do not invent content.** No testimonials, no team page, no blog, no e-commerce flow. Single long-scroll home page only.
- **Do not rebuild.** This is a targeted audit-and-fix on top of the existing build.

## Audit checklist — fix every item below

### 1. Hover states (the #1 polish gap)

Every interactive element on the site needs a hover state matching DESIGN.md Section 9 (motion profile: expressive-energetic, retail).

- **Primary CTA buttons** (`Visit the store`, header phone chip, password-gate submit): background darkens from mustard `#d4a017` to `#b88a14`, 200ms `cubic-bezier(0.4, 0.0, 0.2, 1)`. No scale.
- **Secondary buttons** (transparent border): background fills to `#1a1a1a`, text turns to `#ffffff`, 200ms.
- **Trust-pillar / Why-Us cards:** 2px upward translate, shadow appears `rgba(26, 26, 26, 0.08) 0px 8px 24px`, 200ms ease-out.
- **Anchor nav links** (Story · Plumbing · Tools · Visit): 2px solid `#d4a017` underline reveals beneath the text, 200ms.
- **Inline links** (sister-business links in Story + Footer, accessibility PDF link in Footer): animated underline reveal in `#d4a017`, 3px offset, 200ms.
- **Brand row entries** (Kohler · Moen · A.O. Smith · InSinkErator · Jim Murray, and the Tools/Hardware lines): individual brand names get a subtle color shift from `#1a1a1a` to `#d4a017` on hover, 200ms.
- **Phone chip in header:** background bumps slightly darker mustard `#b88a14`, 200ms.

After this fix, expect 12–18+ `:hover` rules in the CSS. Currently the build likely has fewer than 5.

### 2. Scroll-triggered reveals

Add IntersectionObserver-driven fade-up reveals to:
- Hero **subhead** only (the eyebrow and headline are visible on load — they should NOT fade in)
- Hero CTAs (350ms after subhead)
- Story headline + body (stagger 80ms)
- Plumbing brand row — stagger across the five brand names individually (80ms between Kohler → Moen → A.O. Smith → InSinkErator → Jim Murray)
- Tools two-column block — stagger 80ms between Tools column and Hardware column
- Why Boehlke trust pillars — stagger 80ms across the three pillars
- Visit two-column (address block, then map)

Spec per DESIGN.md Section 9 (retail expressive-energetic):
- Duration: 350ms (standard)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo ease-out)
- Transform: 12px upward translate + opacity 0 → 1
- Stagger: 80ms between grid / row items

Honor `prefers-reduced-motion` — disable transforms, use opacity only.

### 3. Eyebrow labels

Above each major section, add a small uppercase eyebrow label per DESIGN.md Section 3:
- 12px Inter weight 600
- uppercase, 0.10em letter-spacing
- color: `#d4a017` (mustard)
- 16px gap below the eyebrow before the section headline

Required eyebrows (verify present and styled correctly):
- Hero: `EST. 1927 · MEQUON, WI`
- Story: `OUR STORY`
- Plumbing: `PLUMBING DEPARTMENT`
- Tools: `TOOLS & HARDWARE`
- Why Boehlke: `WHY BOEHLKE`
- Visit: `VISIT US`

If any are missing or rendered as headlines instead of eyebrows, fix them.

### 4. Shadow audit

DESIGN.md Section 6 specifies color-tinted shadows only. Find and replace **every** instance of `rgba(0, 0, 0, ...)` in `box-shadow` declarations with the tinted versions:

- **Card / pillar default:** no shadow.
- **Card / pillar hover:** `rgba(26, 26, 26, 0.08) 0px 8px 24px` (DESIGN.md Section 6 Level 1).
- **Sticky nav after scroll:** `rgba(26, 26, 26, 0.04) 0px 1px 3px`.
- **Password modal scrim (the dark overlay behind the gate):** `rgba(26, 26, 26, 0.6)` background fill, no `box-shadow` needed on the scrim itself.
- **Password modal card:** `rgba(26, 26, 26, 0.16) 0px 4px 32px` (analog of the cart-drawer shadow — heavier lift to separate from scrim).
- **Phone chip and primary CTA buttons:** no shadow by default; on focus, the 2px `#1a1a1a` outline replaces a shadow.
- **Map iframe container:** no shadow; the 1px `#e8e4dc` border carries the boundary instead.

Audit ALL components. After this fix, the page should have **zero** `rgba(0, 0, 0` declarations in `box-shadow` rules anywhere.

### 5. Form input focus rings

Only one form input on this build: the password-gate input. Style per DESIGN.md Section 4:
- 2px solid `#d4a017` (mustard accent — heritage feel)
- 2px offset
- Remove default browser ring (`outline: none` paired with the custom ring)
- 200ms transition on focus

### 6. Viewport accessibility

Confirm `<meta name="viewport">` does **not** contain `maximum-scale=1` or `user-scalable=no`. Required for accessibility — pinch-zoom must work. The correct value is:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Also confirm `<meta name="robots" content="noindex, nofollow">` is present in the head — required for the speculative-redesign workflow.

### 7. Body line-height

Confirm body line-height is 1.55 (DESIGN.md Section 3 retail body). The Story-section paragraphs may use the larger 1.65 (Body Large). If body line-height is currently 1.4 or 1.5, bump to 1.55. If hero subhead line-height is below 1.30, bump to ~1.40 for readability.

### 8. Section padding

Confirm every major section has the retail spacing from DESIGN.md Section 5: **80px desktop / 56px tablet / 40px mobile** vertical padding. (Note: this is the retail spec, slightly tighter than the home-services 96px default — don't apply 96px here.) No section should have 0 padding except intentional zero-padding bands (the sticky header itself is 72px tall, that's separate). If you find sections with `py-0` or `py-12`, evaluate against the spec.

### 9. Button hover color

Confirm primary CTA buttons darken on hover, not just translate. From BUILD-PROMPT.md: hover background shifts from `#d4a017` → `#b88a14`, 200ms transition. If buttons currently animate transform/shadow only, add the color shift. Active state stays as a 1px translate down.

### 10. Considered-restraint audit (the "flat-Tailwind" check)

Walk through each section and ask: "Is this section's background a flat solid color holding centered text + maybe a button?" Common offenders for THIS build:

- The **Plumbing brand row** — at risk of being a flat warm-white block with five brand names centered.
- The **Tools / Hardware section** — at risk of being a flat warm-white block with two columns of brand names.
- The **Why-Us trust pillars** section — at risk of being a flat warm-white block with three card tiles.
- The **Story section** — at risk of being a flat cream-alt block with a headline and two paragraphs.

Sections that fail this audit read as default-Tailwind. Apply at least one of these treatments to each failing section (specifics in BUILD-PROMPT.md "Considered restraint" section):

- **Subtle gradient** between two close shades of cream (`#fafaf6` → `#f4f1ea` at 135deg).
- **Noise / grain texture** at 1–3% opacity over the solid color.
- **Asymmetric split layout** — Story section especially: 2-column with the refined paragraphs left, an oversized faded `1927` numeral right (Playfair Display, 8% opacity, color `#1a1a1a`).
- **Decorative oversized typography** — a giant faded `&` behind "Tools & Hardware," a faded `1927` behind the Story headline, a faded `iv` (Roman numeral for fourth — fourth generation) behind the Why-Us section.
- **Layered surface** — Visit section: cream-alt panel with a `backdrop-filter: blur(8px)` semi-transparent card holding address/hours, sitting beside the map.
- **Color-blocked angled split** between Why-Us and Visit transitions (angled SVG divider, not horizontal).

The constraint: stay within DESIGN.md's palette (`#1a1a1a`, `#d4a017`, `#fafaf6`, `#f4f1ea`, `#3d3d3d`, `#737373`), motion profile, and typography. Do NOT introduce auto-playing video, parallax, bouncy easing, stock photography, or off-palette colors.

### 11. Architecture and navigation audit

Confirm the rebuild follows long-scroll-by-default architecture and tight-nav rules.

**Architecture:**
- Verify the rebuild is a **single `index.html`**, no sub-pages. If `about.html`, `services.html`, `plumbing.html`, `contact.html`, or any other HTML file exists, delete them and consolidate the content into anchor sections of `index.html`.
- Verify all five sections exist with their correct anchor IDs: `#story`, `#plumbing`, `#tools`, `#why-us`, `#visit`.

**Navigation:**
- Count the items in the top nav. It should be exactly **4: Story · Plumbing · Tools · Visit**. If a "Home" link, "Hardware" link, "Contact" link, or anything else has been added, remove it.
- Inspect every nav `href`. Every internal link must be `#story`, `#plumbing`, `#tools`, or `#visit` — and each must scroll to a real `id` on the page. If any nav item points to `href="#"` alone or a non-existent anchor, fix it.
- No external URLs in the nav. Boehlke Plumbing and Boehlke Bottled Gas links live in the Story section (inline mention) and the footer — never in the nav. Verify both placements still exist.
- Confirm the phone number is visible in the header as a small mustard-yellow tap-to-call chip on every viewport. `tel:+12622423050`.

The rebuild's nav should orient the visitor through the long-scroll, not catalog every URL.

### 12. Image uniqueness audit

Walk through the rendered page section by section. Identify the source image used in each section by filename. Two source images: `logo.png` and `hero.png`.

- **`logo.png`** may appear in the header AND footer — that's the standard exception.
- **`hero.png`** appears once, as the hero section background. It must NOT also appear behind the Story section, on a Why-Us pillar, in the Visit section, or anywhere else.

If `hero.png` has been duplicated to fill empty visual slots elsewhere, replace those duplicates with one of the considered-restraint treatments from item 10 (decorative oversized typography, gradient, noise, asymmetric split). DO NOT introduce stock photos or AI-generated images.

If `hero.png` was missing during build (download failed) and the hero is a typographic block, that's correct — leave it as a typographic hero with a faded `1927` decorative numeral, do not stock-fill.

### 13. Footer correctness

A few content-fidelity checks specific to this build that often go wrong:

- **Copyright reads** `© 1927–{currentYear} Boehlke Hardware. Family owned.` — with the current year filled in dynamically (`new Date().getFullYear()`). The original site's stale "© 2014 Boehlke Plumbing, Inc." line should NOT appear.
- **Both sister-business links present and live** in the footer:
  - `Boehlke Plumbing` → `http://boehlkeplumbing.com/`
  - `Boehlke Bottled Gas` → `http://boehlkebgcorp.com/`
- **Accessibility PDF link present** → `https://boehlkehardware.com/wp-content/uploads/Accessibility.pdf` — opens in new tab.
- **Hours repeated** (skim line) — Mon–Fri 8AM–4:30PM / Sat–Sun closed.
- **Address line present** — 10712 W Freistadt Rd, Mequon, WI 53097.
- **Phone link present** as `tel:+12622423050` styled `(262) 242-3050`.

If any of these are missing or stale, restore them.

### 14. Brand-name typography

The eleven partner brands render as **Playfair Display** type, NOT as fake logo lockups, and NOT as Inter (which would flatten them into nav-style labels). Verify:

- **Plumbing brand row** is one line: `Kohler · Moen · A.O. Smith · InSinkErator · Jim Murray` — Playfair Display 24px weight 500, color `#1a1a1a`, middot dividers (`·`) colored `#d4a017`.
- **Tools line:** `Milwaukee · Crescent · Irwin` — Playfair Display 20px weight 500, mustard middots.
- **Hardware line:** `Ace · Hillman · National Hardware` — Playfair Display 20px weight 500, mustard middots.

If any are missing a brand name, rendered as Inter, or rendered as a logo image, fix them.

## Verification

After making the fixes above, run these checks before declaring the polish pass complete:

1. **Hover audit.** Inspect the CSS. Every interactive class should have a `:hover` rule. Buttons, anchor nav links, brand row entries, trust-pillar cards, inline links, the phone chip. Expect at least 12 `:hover` rules.
2. **Shadow audit.** Search the CSS for `rgba(0, 0, 0` inside `box-shadow` declarations. Should return **zero** matches. The only `rgba(26, 26, 26, 0.6)` should be on the password-gate scrim background.
3. **Scroll audit.** Open the page and scroll slowly from top to bottom. Hero subhead → Story → Plumbing brand row (each brand stagger-revealing) → Tools / Hardware columns → Why-Us pillars (staggered) → Visit two-column should each animate in with 12px fade-up, 350ms duration, expo ease-out.
4. **Password gate audit.** Open the page in a fresh incognito window. The brand-styled password modal should load before any page content is visible — Playfair Display "Boehlke Hardware" wordmark, mustard-yellow submit, mustard focus ring on the input, color-tinted modal shadow. Wrong password shakes the input. Right password (`mydemo`) reveals the page and persists via `sessionStorage`. Confirm `<meta name="robots" content="noindex, nofollow">` is in the head.
5. **Content-fidelity audit.** Verify all eleven brand names are present (Kohler, Moen, A.O. Smith, InSinkErator, Jim Murray, Milwaukee, Crescent, Irwin, Ace, Hillman, National Hardware), both sister-business URLs are live in the footer, the accessibility PDF link is present, the Google Maps embed uses the original embed URL, and the copyright says `© 1927–{currentYear}` (NOT 2014).
6. **Single-page audit.** No sub-pages exist. `index.html` is the entire site. If any other `.html` files were generated, delete them and verify their content was folded into anchor sections.
7. **DESIGN.md Section 10 iteration guide.** Items 4 (sharp 4px button corners), 5 (uppercase letter-spaced CTAs at 0.08em) — both should be reflected on the page. Items 1, 2, 3, 6, 8, 9, 10, 11, 12 are e-commerce-specific and don't apply here.

If any of those seven checks fail, the polish pass isn't complete. Continue iterating until all seven pass.
