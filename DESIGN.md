# Design System: Retail & Boutique

> FutureNative category reference — for clothing boutiques, specialty shops, gift stores, home goods retailers, and ecommerce-first independent brands.
>
> Pattern DNA mined from: Apple (premium product showcase with cinematic photography), Pinterest (image-first masonry grids), Airbnb (warm photography-forward marketplace), Spotify (bold accent on neutral). Synthesized for independent retailers — the goal is to make product photography the hero and shopping flow effortless.

## 1. Visual Theme & Atmosphere

A retail website is a digital storefront. The product is the hero, the shopping flow is the spine, and visual consistency across product imagery is the single biggest conversion lever — uniform aspect ratios alone can lift conversion 35-48% versus inconsistent grids. Everything else is supporting infrastructure.

The design rests on a brand-driven palette anchored to the practice's existing visual identity, defaulting to a sophisticated near-black (`#1a1a1a`) and warm white (`#fafaf6`) when the boutique has no strong brand color of its own. A single saturated accent — the brand's signature color, or a high-contrast pop — drives all CTAs. Restraint in the palette lets product photography carry color responsibility.

Typography pairs an editorial serif for boutique headlines (Playfair Display or similar) with Inter for body and UI when the practice leans premium-boutique. For more contemporary or trend-forward retailers, the pairing flips to a bold sans display (Montserrat, Poppins, or Inter Display) with Inter body. The choice signals the practice's tone within seconds.

Layout is grid-based and rigorous. Product grids use uniform aspect ratios (1:1 for square inventory or 4:5 for fashion-leaning catalogs). Hero campaign banners interrupt the grid for editorial moments. Product detail pages give imagery 60% of the viewport with crisp, fast-switching multiple-angle galleries. The cart and checkout flow are treated as first-class design surfaces — friction here costs sales directly.

**Key Characteristics:**

* Sophisticated near-black (`#1a1a1a`) or brand-driven primary on warm white (`#fafaf6`) canvas
* Single high-saturation accent color for CTAs — brand-driven or chosen high-contrast pop
* Editorial serif (Playfair Display) OR bold sans (Montserrat) for headlines depending on practice tone
* Inter for body and UI — never let body type compete with display
* Uniform product image aspect ratios (1:1 or 4:5) — consistency lifts conversion 35-48%
* Card-based grids with no shadows, no borders — let product photography define edges
* Sharp 4px corners on buttons and cards — boutique signal
* Bold campaign hero banners that interrupt the grid for editorial moments
* Persistent cart and search in nav — never hide the path to purchase

## 2. Color Palette & Roles

> **APPLIED VARIANT — BOEHLKE HARDWARE (heritage neighborhood retailer, est. 1927).** The original site uses a generic builder template with no salient brand color, so the design is anchored to the warm-heritage end of the retail palette below. **Use these exact values; do not relitigate the choice.**
>
> - **Primary brand:** Sophisticated Black `#1a1a1a` (headings, navigation, footer)
> - **Accent / CTA:** Mustard Yellow `#d4a017` — the yaml's "Vintage, curated, lifestyle" accent. Right tone for a 1927-era family-owned hardware store.
> - **Surface:** Warm White `#fafaf6` (page background — never pure white)
> - **Section alt:** Cream Alt `#f4f1ea`
> - **Typography pairing:** **Premium Boutique (editorial)** — Playfair Display for display headings, Inter for body and UI. Heritage serif signals "since 1927," Inter keeps body and UI clean.
>
> Ignore the contemporary/sans display option below — wrong tone for this brand.

> The Retail category is brand-driven — the practice's existing brand colors override defaults below. When the practice has no strong brand identity, use the defaults shown.

### Primary Brand (default — replace with brand colors when available)

* **Sophisticated Black** (`#1a1a1a`): Primary brand color, headings, navigation, footer
* **Black Hover** (`#000000`): Pure black for hover and pressed states
* **Black Tint** (`#f0eee9`): Subtle dark wash for highlighted sections

### Accent (CTA / Action) — the single high-saturation color

The accent is the practice's signature — pick one and use it for all CTAs.

* **Coral Red** (`#e63946`): Warm, fashion-forward, energetic
* **Forest Green** (`#2d5a3d`): Apothecary, botanical, refined
* **Burnt Orange** (`#d4541e`): Warm, organic, artisan
* **Cobalt Blue** (`#1d4ed8`): Bold, modern, contemporary
* **Hot Pink** (`#ec4899`): Playful, beauty-focused, trend-driven
* **Mustard Yellow** (`#d4a017`): Vintage, curated, lifestyle
* **Custom Brand Color**: When the boutique has an established brand color, source it directly

### Surface

* **Warm White** (`#fafaf6`): Page background — never pure white, which reads as sterile
* **Pure White** (`#ffffff`): Product card surfaces in some contexts
* **Cream Alt** (`#f4f1ea`): Alternate section backgrounds for visual rhythm
* **Light Border** (`#e8e4dc`): Subtle dividers and product card borders (used sparingly)

### Text

* **Charcoal** (`#1a1a1a`): Primary heading color
* **Slate Body** (`#3d3d3d`): Body text
* **Muted Slate** (`#737373`): Secondary text, captions, metadata
* **Disabled** (`rgba(26, 26, 26, 0.4)`): Disabled states

### Functional

* **Sale Red** (`#dc2626`): Sale price text — distinct from accent color
* **Out of Stock Gray** (`#9ca3af`): Strikethrough on unavailable items
* **In Stock Green** (`#10b981`): "In stock" indicators (used sparingly)
* **Trust Badge Gold** (`#d4a017`): Reviews, ratings, awards

### Shadows

* **Product Card Hover Shadow** (`rgba(26, 26, 26, 0.08) 0px 8px 24px`): Subtle lift on hover
* **Cart Drawer Shadow** (`rgba(26, 26, 26, 0.16) 0px -4px 32px`): Elevated cart side panel
* **Modal Scrim** (`rgba(26, 26, 26, 0.6)`): Quick view, image lightbox

## 3. Typography Rules

### Font Family

Choose ONE of two pairings based on the practice's tone:

**Premium Boutique (editorial)**:
* **Display**: `Playfair Display`, fallbacks: `Georgia, 'Times New Roman', serif`
* **Body / UI**: `Inter`, fallbacks: `-apple-system, BlinkMacSystemFont, sans-serif`

**Contemporary / Trend-Forward (bold)**:
* **Display**: `Montserrat` or `Inter Display`, fallbacks: `'Helvetica Neue', Arial, sans-serif`
* **Body / UI**: `Inter`, fallbacks: `-apple-system, BlinkMacSystemFont, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Display Hero | Display Typeface | 64px (4.00rem) | 600 (sans) / 500 (serif) | 1.10 | -0.02em | Campaign hero text |
| Section Heading | Display Typeface | 40px (2.50rem) | 600 / 500 | 1.15 | -0.01em | "New Arrivals", "Best Sellers" |
| Collection Title | Display Typeface | 28px (1.75rem) | 600 / 500 | 1.20 | -0.01em | Collection page headlines |
| Product Title (PDP) | Display Typeface | 32px (2.00rem) | 600 / 500 | 1.20 | -0.01em | Product detail page heading |
| Product Card Title | Inter | 16px (1.00rem) | 500 | 1.40 | normal | Title in product grid |
| Eyebrow | Inter | 12px (0.75rem) | 600 | 1.40 | 0.10em | Uppercase pre-headers ("NEW") |
| Body Large | Inter | 17px (1.06rem) | 400 | 1.65 | normal | Product descriptions |
| Body | Inter | 15px (0.94rem) | 400 | 1.55 | normal | Standard reading body |
| Price Display | Inter | 18px (1.13rem) | 600 | 1.20 | normal | Product prices in grid and PDP |
| Price Strikethrough | Inter | 16px (1.00rem) | 400 | 1.20 | normal | Original price (discounted) |
| UI Label | Inter | 13px (0.81rem) | 500 | 1.40 | 0.04em | Filter labels, nav items |
| Button | Inter | 14px (0.88rem) | 600 | 1.20 | 0.08em | Uppercase CTAs |
| Caption | Inter | 13px (0.81rem) | 400 | 1.50 | normal | Reviews, metadata |
| Micro | Inter | 11px (0.69rem) | 500 | 1.40 | 0.04em | Footer fine print |

### Principles

* **Display does the talking, Inter does the work**: Display typeface carries brand voice in headlines and product titles on PDP. Inter handles all UI, grid product titles, and body — so display moments stay impactful.
* **Tight headline tracking**: -0.01 to -0.02em on all display sizes creates compressed retail confidence.
* **Letter-spaced CTAs**: 0.08em on button text creates the "set in stone" feel of considered retail buttons. Default tracking on CTAs reads as default-template.
* **Price display is sacred**: Prices use Inter weight 600 at 18px — slightly larger than surrounding metadata to draw attention without screaming.
* **Eyebrow labels signal merchandising**: Uppercase 12px Inter weight 600 with 0.10em letter-spacing precedes "NEW", "SALE", "EXCLUSIVE" tags.

## 4. Component Stylings

### Buttons

**Primary CTA (Add to Cart / Shop Now)**

* Background: Accent color (e.g., `#e63946`) OR `#1a1a1a` (sophisticated black) when accent is reserved for sale tags
* Text: `#ffffff`
* Padding: 16px 32px (generous)
* Radius: 4px (sharp boutique signal)
* Border: 1px solid background color
* Font: Inter, 14px, weight 600, letter-spacing 0.08em, text-transform: uppercase
* Hover: background 10% darker, no scale
* Active: 1px translate down
* Focus: 2px solid `#1a1a1a` outline, 2px offset

**Secondary (Quick View / View Details)**

* Background: transparent
* Text: `#1a1a1a`
* Padding: 14px 28px
* Radius: 4px
* Border: 1px solid `#1a1a1a`
* Hover: background `#1a1a1a`, text `#ffffff`

**Tertiary (Filter / Sort)**

* Background: `#fafaf6`
* Text: `#1a1a1a`
* Padding: 10px 16px
* Radius: 4px
* Border: 1px solid `#e8e4dc`
* Font: Inter, 13px, weight 500
* Hover: border color `#1a1a1a`

**Inline Link**

* Background: transparent
* Text: `#1a1a1a`, weight 500
* Underline: 1px solid `#1a1a1a`, always present
* Use for: "Continue shopping", "View size guide"

### Product Cards

* Background: `#fafaf6` (matches page) or `#ffffff` for emphasis
* Border: none — product image edge IS the boundary
* Radius: 0 on image, 4px on price/text container if separated
* No shadow by default
* Hover: subtle 1.02 scale on image over 600ms ease-out, secondary image swaps in (lifestyle/back view)
* Image: uniform aspect ratio across grid (1:1 for square inventory, 4:5 for fashion)
* Below image, 12px gap: product title in Inter 16px weight 500 color `#1a1a1a`
* Below title, 4px gap: price in Inter 18px weight 600 color `#1a1a1a`
* If on sale: strikethrough original price in Inter 16px weight 400 color `#737373` followed by sale price in Inter 18px weight 600 color `#dc2626`
* Wishlist heart icon: top-right of image, white outline with subtle shadow, fills with accent color on click

### Cards & Containers (Non-Product)

* Background: `#ffffff` or `#fafaf6`
* Border: 1px solid `#e8e4dc` when needed
* Radius: 4px
* Padding: 24px (cards), 32px (large containers)
* Shadow: none by default — boutique design uses borders, not shadows

### Hero Campaign Banner

* Full-bleed lifestyle photography or bold typographic moment
* Headline in Display Typeface 64px+ (overlaid on photo or in adjacent text panel)
* CTA in primary button style
* Eyebrow above headline ("NEW SEASON", "EXCLUSIVE")
* Used to interrupt the product grid every 12-20 products

### Navigation

* Background: `#fafaf6` (matches page)
* Height: 72px (standard, sometimes 88px with announcement bar)
* Logo: centered or left-aligned, 32px height
* Nav links: Inter 14px weight 500 letter-spacing 0.04em uppercase, color `#1a1a1a`, 24px gap
* Active state: 2px accent color underline below link
* Right side: search icon + account icon + cart icon (with count badge)
* Optional announcement bar above nav: "Free shipping over $75" in Inter 13px weight 500

### Filters & Sort (Collection Pages)

* Sticky filter sidebar (desktop) or modal (mobile)
* Filter group titles: Inter 14px weight 600 uppercase letter-spacing 0.06em
* Filter options: Inter 14px weight 400 with checkbox or chip selection
* Sort dropdown: Inter 14px weight 500 in tertiary button style
* Active filters shown as chips at top of grid with X to remove

### Cart Drawer / Mini Cart

* Slides from right at 480px width on desktop, full-screen on mobile
* Background: `#ffffff`
* Shadow: `rgba(26, 26, 26, 0.16) 0px -4px 32px` (heavy lift)
* Header: "Your Cart (3)" in Display Typeface 24px
* Line items: thumbnail, title, color/size, quantity stepper, price, remove
* Subtotal at bottom in Inter 18px weight 600
* "Checkout" CTA in primary button style at full width

### Forms

* Input background: `#ffffff`
* Border: 1px solid `#e8e4dc`
* Border-radius: 4px
* Padding: 12px 16px
* Font: Inter 16px weight 400
* Focus: border color `#1a1a1a`, 2px offset outline
* Labels: Inter 13px weight 500 uppercase letter-spacing 0.06em above field
* Cart and checkout forms: extra-generous spacing (32px between fields) — friction here costs sales

### Image Treatment

* Product photography is the brand — treat with the highest standards
* Uniform aspect ratios across the grid (consistency lifts conversion)
* Color-corrected, neutral background or consistent lifestyle setting
* Multiple angles per product: front, back, side, detail, lifestyle (minimum 4 images per PDP)
* Zoom on hover or click for detail viewing
* No watermarks (trust over paranoia)
* Lifestyle/editorial photography for hero campaigns

## 5. Layout Principles

### Spacing System

* Base unit: 8px
* Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
* Section padding (vertical): 80px desktop, 56px tablet, 40px mobile
* Product grid gap: 24px column gap, 48px row gap
* Between hero and grid: 64px

### Grid & Container

* Max content width: 1440px (allows for generous product grids)
* Hero campaigns: full-bleed
* Product grid: 4-column desktop, 3-column tablet, 2-column mobile, single column small mobile
* PDP: 60/40 image-to-content split on desktop, stacked on mobile
* Footer: full-width with 1440px centered content

### Whitespace Philosophy

* **Air around the product**: Generous padding around each product card lets the photography breathe. Cramped grids look like budget marketplaces.
* **Editorial pauses**: Hero campaigns and curated collection bars interrupt the grid every 12-20 products to create rhythm and merchandising opportunities.
* **PDP gets the most space**: Product detail pages are where conversion happens — generous padding signals the brand respects the buyer's consideration.

### Border Radius Scale

* Sharp (4px): Buttons, cards, inputs, image containers — boutique signal
* Sharp 0px: Product imagery (let the edge be the edge)
* Pill (999px): Sale tags, status badges, filter chips
* Circle (50%): Wishlist heart, cart count badge, color swatch buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
| --- | --- | --- |
| Flat (Level 0) | No shadow, solid surface | Default — most surfaces |
| Product Hover (Level 1) | 1.02 scale + subtle shadow `rgba(26, 26, 26, 0.08) 0px 8px 24px` | Product card hover |
| Cart Drawer (Level 2) | `rgba(26, 26, 26, 0.16) 0px -4px 32px` | Slide-out cart panel |
| Modal / Quick View (Level 3) | Full-screen scrim `rgba(26, 26, 26, 0.6)` | Quick view, image lightbox |
| Sticky Nav | `rgba(26, 26, 26, 0.04) 0px 1px 3px` on scroll | Navigation after scroll |
| Focus Ring | 2px solid `#1a1a1a`, 2px offset | All interactive focus states |

**Shadow Philosophy**: Retail design avoids shadows by default — products carry their own visual weight. Shadows appear only on interaction (hover, drawer slide-out) and as scrims for modals. The grid stays flat and crisp; depth comes from the products themselves.

## 7. Do's and Don'ts

### Do

* Use warm white (`#fafaf6`) for the page background — pure white reads as sterile or budget
* Maintain UNIFORM product image aspect ratios across the grid (1:1 or 4:5) — conversion lift is real
* Use sharp 4px button corners — softer corners read as consumer/budget
* Use uppercase letter-spaced CTAs (0.08em) — boutique signal
* Hero campaigns interrupt the grid every 12-20 products for editorial moments
* Show price clearly in Inter weight 600 — never hide pricing
* Persistent cart icon with count in nav — visibility lifts repeat-add-to-cart
* Wishlist functionality on every product card — captures buyers not ready yet
* Free shipping threshold callouts above the nav or in cart drawer
* Multiple product angles minimum (4 images per PDP) — confidence lifts conversion

### Don't

* Don't use pure white background — reads as sterile, budget, or template
* Don't use inconsistent product image aspect ratios — destroys visual coherence
* Don't bury the price — visible, prominent, no surprises
* Don't use carousel-only product galleries (auto-rotating slides) — buyers want control
* Don't use small product images on grid — full card width minimum
* Don't hide cart contents — drawer or persistent indicator essential
* Don't use intrusive pop-ups before the buyer has browsed (newsletter modals on first load)
* Don't use auto-rotating hero banners faster than 6 seconds — buyers can't read them
* Don't use shadows by default on grid items — flat is correct, hover triggers lift
* Don't skip sale/strikethrough pricing styling — clarity drives discount conversion

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
| --- | --- | --- |
| Mobile Small | <375px | 2-column grid, full-width buttons |
| Mobile | 375–640px | 2-column product grid |
| Tablet | 640–1024px | 3-column product grid, hamburger nav |
| Desktop Small | 1024–1280px | 4-column product grid |
| Desktop | 1280–1440px | Full layout with sidebar filters |
| Large Desktop | >1440px | Centered with generous margins |

### Touch Targets

* Primary CTAs: minimum 52px height (16px vertical padding + 14px text + line-height)
* Add to cart on PDP: minimum 56px height (mobile especially)
* Product card tap: full card with active scale feedback
* Filter chips: minimum 36px height with adequate padding
* Cart icon: 44x44px minimum

### Collapsing Strategy

* Headlines: 64px → 48px → 36px → 28px on mobile
* Product grids: 4-col → 3-col → 2-col (never single column on mobile — buyers scan grids)
* Filters: sidebar → top horizontal scroll → modal on mobile
* PDP: side-by-side → stacked image-then-content
* Navigation: full horizontal → hamburger overlay below 1024px
* Cart: drawer → full-screen on mobile

### Image Behavior

* Product imagery maintains uniform aspect ratio at all breakpoints
* Multiple resolutions via srcset for performance (mobile devices receive smaller files)
* Lazy loading for below-fold imagery
* PDP gallery: thumbnails on side desktop, swipeable on mobile

## 9. Motion & Animation

**Profile**: Expressive-Energetic. Product imagery should feel alive without being distracting.

### Durations

* Micro (hover, focus): 200ms
* Standard (transitions, reveals): 350ms
* Macro (page transitions, drawer): 500ms

### Easing

* Default: `cubic-bezier(0.4, 0.0, 0.2, 1)` (Material standard)
* Enter (drawer slide, fade-up): `cubic-bezier(0.16, 1, 0.3, 1)` (expo ease-out)
* Exit: `cubic-bezier(0.7, 0, 0.84, 0)` (expo ease-in)

### Allowed

* Product card hover: 1.02 scale + secondary image swap, 600ms ease-out
* Scroll-triggered fade-up on product grid (8-12px translate, 80ms stagger between items)
* Cart drawer slide from right with smooth easing
* Add-to-cart confirmation: subtle pulse on cart icon
* Quick view modal: scale-up from clicked product
* Image gallery zoom on click
* Filter selection: chip color transitions 150ms

### Forbidden

* Slow drifting motion (over 600ms for standard transitions) — feels sluggish for shopping
* Linear easing — reads as mechanical
* Auto-rotating hero carousels under 6 seconds — buyers can't read content
* Aggressive parallax that disorients
* Confetti or celebration animations for routine adds-to-cart (save for purchase confirmation)

### Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 10. Agent Prompt Guide

### Quick Color Reference

* Background: Warm White (`#fafaf6`)
* Primary brand: Sophisticated Black (`#1a1a1a`) or brand-driven
* Accent / CTA: Brand-driven high-saturation color (default Coral Red `#e63946`)
* Heading text: Charcoal (`#1a1a1a`)
* Body text: Slate Body (`#3d3d3d`)
* Muted text: (`#737373`)
* Border: Light Border (`#e8e4dc`)
* Sale price: (`#dc2626`)
* Cart drawer shadow: `rgba(26, 26, 26, 0.16) 0px -4px 32px`
* Focus ring: 2px solid `#1a1a1a`, 2px offset

### Example Component Prompts

* "Create a hero campaign banner: full-bleed lifestyle photograph with bottom-fade overlay (linear-gradient 180deg from transparent to rgba(0,0,0,0.4)), 80vh height. Eyebrow 'AUTUMN COLLECTION' in Inter 12px weight 600 uppercase letter-spacing 0.10em color rgba(255,255,255,0.9). Headline 'New Arrivals' in [DISPLAY TYPEFACE] 64px weight 600 line-height 1.10 letter-spacing -0.02em color white. CTA 'Shop Now' in primary style: accent color (#e63946) bg, white text, 4px radius, 16px 32px padding, Inter 14px weight 600 uppercase letter-spacing 0.08em."

* "Design a product card: warm white (#fafaf6) background matching page, no border, no shadow by default. Product image at top with uniform 1:1 aspect ratio (or 4:5 for fashion), no radius. Wishlist heart icon top-right of image: white outline with subtle drop shadow, fills accent color on click. 12px gap below image. Product title in Inter 16px weight 500 color #1a1a1a. 4px gap. Price in Inter 18px weight 600 color #1a1a1a. If on sale: strikethrough original price in Inter 16px weight 400 color #737373 followed by sale price in Inter 18px weight 600 color #dc2626. Hover state: image scales to 1.02 over 600ms ease-out, secondary lifestyle/back image swaps in, subtle shadow rgba(26, 26, 26, 0.08) 0px 8px 24px appears."

* "Build the navigation: warm white (#fafaf6) background matching page, 72px height. Logo centered, 32px height. Nav links centered below or in row with logo: 'NEW', 'SHOP', 'COLLECTIONS', 'ABOUT' in Inter 14px weight 500 uppercase letter-spacing 0.04em color #1a1a1a, 24px gap. Active link: 2px solid accent color (#e63946) underline below text. Right side icons: search (24px), account (24px), cart with count badge (cart icon + small circular badge in accent color showing item count). Optional announcement bar above: 'Free shipping over $75' in Inter 13px weight 500 color white on #1a1a1a background, centered, 36px height."

* "Create a cart drawer: slides from right at 480px width on desktop, full-screen on mobile. White (#ffffff) background, shadow rgba(26, 26, 26, 0.16) 0px -4px 32px. Header: 'Your Cart (3)' in [DISPLAY TYPEFACE] 24px weight 600, with X close button right-aligned. Line items: 80x80 product thumbnail (4px radius), 16px gap, content stack: title in Inter 14px weight 500, color/size in Inter 13px weight 400 color #737373, quantity stepper (- 1 +) in 4px radius pill, price in Inter 14px weight 600. 24px gap between line items. Bottom section: subtotal in Inter 18px weight 600 with 'Shipping calculated at checkout' note in 13px color #737373. 'Checkout' CTA full-width: accent color bg, white text, 4px radius, 16px padding, Inter 14px weight 600 uppercase letter-spacing 0.08em."

* "Design a product detail page (PDP): two-column layout 60/40 on desktop. Left column: image gallery with main image at top (aspect 4:5 or 1:1), thumbnails below in horizontal row showing 4-6 alternate images. Click thumbnail to swap main image. Click main image to open lightbox. Right column with 32px left padding: eyebrow 'NEW' in Inter 12px weight 600 uppercase letter-spacing 0.10em color accent. Product title in [DISPLAY TYPEFACE] 32px weight 600 color #1a1a1a line-height 1.20. Price in Inter 24px weight 600. Star rating with review count below. 24px gap. Color/size selector chips in pill style. 24px gap. Quantity stepper. Add to Cart CTA in primary button style at full width 56px height. Below CTA: shipping/return policy callouts in Inter 13px weight 400 with icons. Product description below in Inter 17px weight 400 line-height 1.65 color #3d3d3d."

### Iteration Guide

1. The page background is warm white (`#fafaf6`), never pure white — sterility = budget retailer
2. UNIFORM product image aspect ratios across the grid (1:1 or 4:5) — non-negotiable for conversion
3. Choose ONE accent color for CTAs and commit — the brand's signature
4. Sharp 4px button corners — softer reads as consumer/budget
5. Uppercase letter-spaced CTAs (0.08em) — boutique signal
6. Hero campaign banners interrupt the grid every 12-20 products for editorial moments
7. Price visible and clear in Inter weight 600 — never bury pricing
8. Persistent cart icon with item count — visibility drives repeat adds
9. Wishlist on every product card — captures non-ready buyers
10. Multiple product angles minimum (4 images per PDP) — confidence drives conversion
11. Cart drawer slide-out for fluid checkout entry — no full page reload
12. Mobile bottom-sticky add-to-cart on PDP — primary action always reachable

---

## Pattern DNA Sources

Synthesized from the following DESIGN.md files in the public VoltAgent/awesome-design-md collection:

* **Apple** — premium product showcase, cinematic photography on solid color fields, restrained palette
* **Pinterest** — image-first masonry grids, photography as the primary content
* **Airbnb** — warm photography-forward marketplace, generous border-radius on cards
* **Spotify** — bold accent on neutral backgrounds, vibrant CTA color discipline

These references guided the synthesized patterns above; no single brand's visual identity is replicated. The result is intended as product-first commerce design language for independent boutiques and specialty retailers, not a clone of any specific brand.
