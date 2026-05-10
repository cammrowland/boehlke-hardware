# FutureNative Production Brief — Boehlke Hardware

**Target URL:** https://boehlkehardware.com/
**Source:** live (single-page site — no separate sub-pages exposed)
**Captured:** 2026-05-10
**Pages crawled:** 1 (the home page is the entire site)
**Images downloaded:** 0 — sandbox proxy blocks `boehlkehardware.com`. Use `download-images.sh` (in this folder) on Camm's Mac to populate `images/` before passing the drop to Replit. URLs and target filenames are listed in the Image inventory section below.
**Design category:** retail (heritage / specialty-shop lean) — see attached DESIGN.md
**Routing rationale:** Walk-in retail business selling tools, hardware, and plumbing fixtures. Conversion event is "come into the store," not phone-emergency call. Heritage palette (mustard yellow accent + Playfair editorial display) chosen for the 1927-era neighborhood-store narrative — the original site has no salient brand identity to inherit from.
**Recommended stack:** Plain HTML, CSS, and vanilla JavaScript. No framework, no build step. Single long-scroll home page deployed flat to GitHub Pages.

---

## Brand cues

- **Logo:** `images/logo.png` (text-only fallback: "Boehlke Hardware" set in Playfair Display)
  - Source: `https://boehlkehardware.com/wp-content/uploads/2014/05/logo.png`
- **Color palette (assigned, not extracted — original site is a generic 2014 builder template with no salient brand color):**
  - Primary: `#1a1a1a` (headings, navigation, footer — sophisticated near-black)
  - Accent / CTA: `#d4a017` (mustard yellow — heritage, vintage hardware-store cue)
  - Background: `#fafaf6` (warm white — never pure white)
  - Section alt: `#f4f1ea` (cream)
  - Body text: `#3d3d3d` (slate)
  - Muted text: `#737373`
- **Typography:**
  - Display headings: **Playfair Display** (Google Fonts) — heritage serif, signals "since 1927"
  - Body / UI: **Inter** (Google Fonts) — clean, modern, lets the display do the talking
- **Voice:** Folksy and proud, but unfussy. Sentences are simple and declarative. The site emphasizes continuity ("third and fourth generations… still dedicated"), neighborhood identity, and product knowledge ("we can offer products and advice"). Avoid corporate phrasing or anything that smells like marketing copy — Boehlke is a family business, and the rebuild should feel that way. Brand names (Kohler, Moen, A.O. Smith, InSinkErator, Jim Murray, Milwaukee, Crescent, Irwin, Ace, Hillman, National) are credibility anchors — keep every one of them.

## Contact

- **Phone:** (262) 242-3050 — also displayed as `262-242-3050` in original
- **Email:** none listed on the original site
- **Physical address:** 10712 W Freistadt Rd, Mequon, WI 53097
- **Hardware store hours:**
  - Mon–Fri: 8:00 AM – 4:30 PM
  - Sat: Closed
  - Sun: Closed
- **Service area:** Mequon, WI and surrounding North Shore communities (Thiensville, Cedarburg, Grafton, Bayside, Fox Point) — implied from location, not enumerated on the original site
- **Social:** none listed on the original site
- **Affiliated businesses (sister companies, NOT to be removed):**
  - Boehlke Plumbing — `http://boehlkeplumbing.com/`
  - Boehlke Bottled Gas — `http://boehlkebgcorp.com/`

## Credentials

- Family-owned and operated since 1927
- Third and fourth generations of the Boehlke family currently running the business
- Original founder: Erich Boehlke
- Plumbing background — original business added the founder's brother's plumbing operation a few years after 1927; today's hardware store retains plumbing-fixture expertise
- Brand partnerships and product lines (every one of these is a load-bearing trust signal — preserve all):
  - Plumbing fixtures: **Kohler**, **Moen**
  - Water heaters: **A.O. Smith**
  - Kitchen disposals: **InSinkErator**
  - Sump pumps: **Jim Murray**
  - Tools: **Milwaukee Tools**, **Crescent**, **Irwin**
  - Hardware: **Ace**, **Hillman**, **National Hardware**
- Accessibility statement available as a PDF: `https://boehlkehardware.com/wp-content/uploads/Accessibility.pdf` — preserve link in footer

---

## Pages

### Page 1: Home (`/`) — single page; entire site

This is a single-page site. The original has no separate About, Services, Contact, or Hours pages — everything lives on the home page. The rebuild keeps that as a long-scroll home with anchor sections.

**Image slots:**
- Hero: `images/hero.png` (currently `hard_home_cover1.png` from the original — appears to be a hardware-store interior or storefront hero; verify after download)
- Logo: `images/logo.png` (header + footer)

**Verbatim (original):**

> Toggle navigation
>
> ![Boehlke Hardware logo]
>
> Call today: 262-242-3050
>
> # Neighborhood Hardware Store Since 1927
>
> [hero image]
>
> Boehlke Hardware was started in 1927 when Erich Boehlke opened a hardware business to service the local farming community. A few years later, he added his brother's plumbing business. Many things have changed in the area since then and so has Boehlke Hardware.
>
> The third and fourth generations of the Boehlke family are still dedicated to the same professional service and quality products but focus on the current needs of the community. With our plumbing background we can offer products and advice on Kohler and Moen plumbing fixtures, AO Smith water heaters, InSinkErator kitchen disposals and Jim Murray sump pumps.
>
> We carry traditional lines of tools including name brands like Milwaukee Tools, Crescent and Irwin as well as hardware from Ace, Hillman and National Hardware.
>
> The Boehlke family is proud to have been part of the community for so many years and works hard to provide professional service and a unique, old time hardware store shopping experience.
>
> ## Contact Us
>
> Boehlke Hardware
> 10712 W Freistadt Rd,
> Mequon, WI 53097
> (262) 242-3050
>
> Hardware Store Hours:
> M-F – 8AM-4:30PM
> Sat – Closed
> Sun – Closed
>
> [Google Maps embed]
>
> Boehlke Plumbing — http://boehlkeplumbing.com/
> Boehlke Bottled Gas — http://boehlkebgcorp.com/
>
> Hardware Store Hours:
> M-F - 8AM-4:30PM
> Sat - Closed
> Sun - Closed
>
> Boehlke Hardware, Boehlke Plumbing and Boehlke Bottled Gas - Family Owned Since 1927
>
> © 2014 Boehlke Plumbing, Inc.
> 262-242-3050
> 10712 W Freistadt Rd
> Mequon, WI 53097
> Accessibility (PDF link)

**Refined (factually identical, restructured into a modern long-scroll home page — every fact, brand name, link, and credential preserved):**

> **HEADER (sticky, warm-white background, 72px tall)**
> - Left: small Boehlke wordmark logo, 32px tall
> - Center / right: anchor nav — Story · Plumbing · Tools · Visit (4 items, all anchors to home-page sections)
> - Right of nav: tap-to-call phone link `262-242-3050` styled as a small mustard-yellow chip
>
> **HERO SECTION**
> - Eyebrow: `EST. 1927 · MEQUON, WI`
> - Display headline (Playfair Display, large): *Your neighborhood hardware store since 1927.*
> - Subhead: Four generations of the Boehlke family. Tools, hardware, plumbing fixtures — and the kind of professional advice you can't get from a big-box store.
> - Primary CTA: `Visit the store` (anchor → #visit)
> - Secondary CTA: `Call (262) 242-3050` (tel: link)
> - Background: site interior or storefront photograph (`images/hero.png`) at 30–40% opacity behind a warm cream-to-charcoal overlay; eyebrow + headline + subhead float over the top.
>
> **SECTION 1 — STORY (#story)**
> - Eyebrow: `OUR STORY`
> - Headline: *A hundred years on the same corner.*
> - Body (2 short paragraphs, refined — same content as the original "started in 1927… third and fourth generations" copy):
>   - Erich Boehlke opened a hardware store in 1927 to serve the local farming community. A few years later, he folded in his brother's plumbing business. The neighborhood has changed a lot since. So has the store.
>   - Today, the third and fourth generations of the Boehlke family run the place. Same dedication to professional service and quality products — focused on what the community actually needs now.
> - Optional small inline mention of the sister businesses with linked text: "Boehlke Plumbing and Boehlke Bottled Gas are still part of the family" — links go to `http://boehlkeplumbing.com/` and `http://boehlkebgcorp.com/`.
>
> **SECTION 2 — PLUMBING FIXTURES & ADVICE (#plumbing)**
> - Eyebrow: `PLUMBING DEPARTMENT`
> - Headline: *A hardware store with a plumber's brain.*
> - Body: Boehlke's plumbing roots go back almost as far as the hardware store. We stock — and know how to advise on — the lines homeowners and contractors actually want.
> - Brand row (small grid of typeset wordmarks or a single line of text, no fake logos): **Kohler · Moen · A.O. Smith · InSinkErator · Jim Murray**
> - One-liner per brand (taken from the original copy, not invented):
>   - Kohler & Moen plumbing fixtures
>   - A.O. Smith water heaters
>   - InSinkErator kitchen disposals
>   - Jim Murray sump pumps
>
> **SECTION 3 — TOOLS & HARDWARE (#tools)**
> - Eyebrow: `TOOLS & HARDWARE`
> - Headline: *Traditional lines, name brands, real shelves.*
> - Body: We carry the working brands — the ones that show up in actual job-site truck beds.
> - Two columns:
>   - **Tools:** Milwaukee · Crescent · Irwin
>   - **Hardware:** Ace · Hillman · National Hardware
>
> **SECTION 4 — WHY US (#why-us)**
> - Eyebrow: `WHY BOEHLKE`
> - Headline: *Old-time hardware store. New-day stock.*
> - Pull-quote from the original (refined slightly, content preserved): "We work hard to provide professional service and a unique, old-time hardware store shopping experience."
> - Three small trust pillars:
>   - **Family-owned since 1927** — four generations on the same corner.
>   - **Professional advice** — plumbing-trained staff who can answer the question before you ask it.
>   - **Real product knowledge** — Kohler, Moen, A.O. Smith, Milwaukee, Ace. Lines we know.
>
> **SECTION 5 — VISIT (#visit)**
> - Eyebrow: `VISIT US`
> - Headline: *Stop by the store.*
> - Two-column layout on desktop:
>   - **Left column — address, hours, phone:**
>     - Boehlke Hardware
>     - 10712 W Freistadt Rd
>     - Mequon, WI 53097
>     - **(262) 242-3050**
>     - Mon–Fri: 8:00 AM – 4:30 PM
>     - Sat: Closed
>     - Sun: Closed
>   - **Right column — embedded Google Map** (preserve the existing Google Maps embed pointing to 10712 W Freistadt Rd; use a clean, neutral map style)
>
> **FOOTER**
> - Left: Boehlke wordmark, address, phone — same as the contact section, smaller.
> - Center: small links to the two sister businesses, keeping the exact URLs:
>   - Boehlke Plumbing → `http://boehlkeplumbing.com/`
>   - Boehlke Bottled Gas → `http://boehlkebgcorp.com/`
> - Right: copyright line + Accessibility link
>   - © 1927 – {current year} Boehlke Hardware. Family owned since 1927. (Update copyright year — original site shows the stale 2014 line.)
>   - Accessibility (PDF) → `https://boehlkehardware.com/wp-content/uploads/Accessibility.pdf`
>   - Hours repeated in footer for skim-readers.

---

## Testimonials

The original site has no testimonials. **Do not invent any.** The rebuild has zero testimonial section.

---

## Recommended stack

**Plain HTML, CSS, and vanilla JavaScript.** Single long-scroll home page (`index.html` + `style.css` + `script.js` + `images/`). No framework, no build step, no `npm install`. Deploys flat to GitHub Pages.

Rationale: this is a true one-page site with five sections, a header, a footer, a Google Maps embed, a tap-to-call phone link, and a small typographic brand row. There is nothing on this site that earns a build pipeline. Plain HTML/CSS/JS lets every motion / hover / scroll-reveal in DESIGN.md land cleanly without a `basePath` debugging session on GitHub Pages.

Tailwind via CDN is fine if Replit reaches for utility classes — no compile step.

---

## Notes for Replit

- **Single long-scroll home page only.** Do not generate `about.html`, `services.html`, `contact.html`, etc. The original site is one page; the rebuild stays one page. Anchor nav, not multi-page nav.
- **Top nav: 4 items, anchor-only.** `Story · Plumbing · Tools · Visit`. No external links in the nav. The phone number sits in the header as a small chip, tap-to-call.
- **The Google Maps embed survives.** Use the original embed URL: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.701438410157!2d-88.04404200000005!3d43.236719000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804fb7da273c3d7%3A0xe84f52a8b4b060fd!2s10712+W+Freistadt+Rd!5e0!3m2!1sen!2s!4v1401960218313` Wrap it in a rounded container with a 16:9 aspect ratio and a thin 1px border in `#e8e4dc`. Don't replace it with a different map provider.
- **Both sister-business links must survive.** `http://boehlkeplumbing.com/` and `http://boehlkebgcorp.com/` appear in the footer (and as a contextual mention in the Story section). Do not drop them — Boehlke is a small family of three businesses, and these links are how the family signals that.
- **Accessibility PDF link must survive in the footer.** `https://boehlkehardware.com/wp-content/uploads/Accessibility.pdf` — small text, footer-right.
- **Brand names listed verbatim.** Kohler, Moen, A.O. Smith, InSinkErator, Jim Murray, Milwaukee Tools, Crescent, Irwin, Ace, Hillman, National Hardware. Render as type, not as fake logo lockups (we don't have permission to use partner logos and they'd date the page anyway).
- **Update the copyright year.** Original footer says "© 2014 Boehlke Plumbing, Inc." That's stale and corporate-name-mismatched. New footer: `© 1927–{current year} Boehlke Hardware. Family owned.`
- **Phone number is the primary conversion path.** Tap-to-call on mobile (`tel:+12622423050`), prominently visible in the header on every viewport.
- **No e-commerce.** This is a walk-in retail store. Do NOT add a cart, product grid, "shop online," or any commerce flow. The retail DESIGN.md describes commerce patterns at length — those sections (cart drawer, PDP, cart icon, wishlist) are not applicable here. Apply only the typography, palette, layout, motion, and shadow rules. Skip Sections 4 (Cart Drawer, Filters, PDP) — Boehlke doesn't sell online.
- **Hero image fallback.** If `images/hero.png` is unavailable or low-quality after download, leave the hero as a typographic block: cream background, large Playfair headline, mustard-yellow accent rule below. Do not stock-fill with a generic hardware photo.
- **Do not invent.** No fabricated testimonials, no made-up team bios, no invented "free advice" promise, no "newsletter signup," no "blog." If the original didn't say it, the rebuild doesn't either.

---

## Image inventory

| Local filename | Original URL | Used on |
|----------------|--------------|---------|
| `logo.png` | `https://boehlkehardware.com/wp-content/uploads/2014/05/logo.png` | Header, footer |
| `hero.png` | `https://boehlkehardware.com/wp-content/uploads/2014/05/hard_home_cover1.png` | Hero section background |

**Note:** the home page references a `#carousel-lg` anchor with two trigger links — the original may have additional carousel images in the original WordPress media library that aren't surfaced in the visible markup. After running `download-images.sh`, Camm should spot-check the live site at `https://boehlkehardware.com/` and add any additional photos surfaced by the carousel to the `images/` folder, naming them `hero-2.png`, `hero-3.png`, etc.

## Image fetch — sandbox limitation

The Cowork sandbox proxy blocks `boehlkehardware.com` for binary downloads, so this skill could not fetch images directly. The drop folder ships with `download-images.sh`, a small bash script that fetches both source URLs above to `images/` with the right filenames when run on Camm's Mac. Run it before passing the folder to Replit:

```
cd ~/futurenative/projects/boehlke-hardware
bash download-images.sh
```

If a download fails (404 or blocked), the rebuild can still proceed — DESIGN.md and BUILD-PROMPT.md cover the typographic-block fallback for the hero in that case.

## Pages that failed to capture

None — the entire site is the home page captured above, and that capture is complete. The only failures in this run are the two image downloads, handled via `download-images.sh`.
