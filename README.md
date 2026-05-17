# DRINK MILK — Shopify Theme

Premium fashion-forward boyswear. Ages 1–6. SS26 drop.

---

## Theme overview

A fully custom Shopify 2.0 theme built for the DRINK MILK first drop.
8 curated pieces (4 tops + 4 pants), presented as a fashion capsule release — not a catalog.

**Brand palette**

| Token | Hex | Use |
|---|---|---|
| Forest green | `#26422B` | Primary dark, text, backgrounds |
| Cream | `#F9F5E6` | Page background |
| Sky blue | `#CDE3F6` | Accent sections, image placeholders |
| Burgundy | `#71271F` | CTAs, editorial sections, announcement bar |
| Terracotta | `#D6512A` | Marquee, badges, highlights |

**Typography**
- **Cormorant Garamond** — editorial serif headlines ("Wear it loose. *Live it loud.*")
- **Fredoka** — logo wordmark
- **DM Sans** — body copy, labels, UI

---

## File structure

```
theme/
  assets/
    theme.css          Main stylesheet
    theme.js           Cart drawer, nav, accordion, gallery, animations
  config/
    settings_schema.json   Theme settings
    settings_data.json     Default values
  layout/
    theme.liquid       Master layout (fonts, header, cart drawer, mobile nav)
    password.liquid    Coming soon page
  locales/
    en.default.json    English strings
  sections/
    header.liquid           Sticky header
    footer.liquid           Burgundy footer
    hero.liquid             Full-bleed campaign hero
    brand-statement.liquid  "Wear it loose. Live it loud." — serif editorial
    collection-banner.liquid  Forest green text band ("SS26 — Now available")
    featured-products.liquid  2×2 editorial product grid
    editorial-band.liquid   Burgundy section ("Raised wild, dressed good.")
    drop-split.liquid       Two-panel Tops / Pants split
    product-spotlight.liquid  Single hero product, full editorial treatment
    marquee.liquid          Scrolling ticker bar
    founder-band.liquid     Full-width sky blue founder photo
    story-quote.liquid      Founder italic quote
    newsletter.liquid       Burgundy email signup
    category-grid.liquid    2×2 category cards (available, not on homepage by default)
  snippets/
    product-card.liquid    Reusable product card
  templates/
    index.json         Homepage (Shopify 2.0 JSON)
    product.liquid     Product page — gallery, size selector, accordion
    collection.liquid  Collection — editorial header, 2-col staggered grid
    cart.liquid        Cart page
    page.liquid        Generic page
    page.about.liquid  About page
    page.lookbook.liquid  Lookbook grid
    404.liquid         Not found page
    gift_card.liquid   Gift card page
```

---

## Upload to Shopify

### Option A — Shopify CLI (recommended)

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Push from the theme folder
cd theme/
shopify theme push --store=your-store.myshopify.com
```

### Option B — Upload ZIP

1. Zip the `theme/` folder
2. Shopify Admin → Online Store → Themes → Add theme → Upload zip file

---

## First-time setup checklist

After uploading, do these in the Shopify Customizer (Online Store → Themes → Customize):

### Global settings
- [ ] Set announcement bar text (Admin → Themes → Customize → Theme settings → Announcement)
- [ ] Set Instagram / TikTok URLs in Footer section

### Navigation
Create these menus in **Admin → Navigation**:
- `main-menu` — Shop, Lookbook, About (3 links max)
- `footer` — Shipping, Returns, Contact, Privacy Policy

### Homepage sections (in order)
1. **Hero** — Upload your campaign image, set CTA to `/collections/all`
2. **Brand Statement** — Text is pre-filled, adjust if needed
3. **Collection Banner** — Set link to your collection
4. **Featured Products** — Connect to your Shopify collection
5. **Editorial Band** — Upload a campaign photo (right panel)
6. **Drop Split** — Upload Tops campaign image + Pants campaign image
7. **Founder Band** — Upload founder/lifestyle photo
8. All other sections are text-only, pre-filled

### Products
For each product, set:
- **Product type** to either `Tops` or `Pants` (this drives the collection dividers)
- **Tags** including the age range, e.g. `Ages 1-2`, `Ages 3-4`, `Ages 5-6`
- At least 1 product image per product
- A size/age variant option named `Age` or `Size`

### Pages
Create these pages in **Admin → Pages**, then set their template:
- **About** → template: `page.about`
- **Lookbook** → template: `page.lookbook`

---

## Homepage section order

The default homepage renders sections in this order:

```
Hero
  ↓
Brand Statement   ("Wear it loose. Live it loud.")
  ↓
Collection Banner   ("SS26 — Now available")
  ↓
Featured Products   (2×2 grid, pull from a collection)
  ↓
Editorial Band   ("Raised wild, dressed good." — burgundy)
  ↓
Drop Split   (Tops / Pants two-panel editorial)
  ↓
Founder Band   (sky blue, full-width lifestyle photo)
  ↓
Story Quote   (founder italic serif quote)
  ↓
Newsletter   ("Made for milk lovers.")
```

Optional sections available in the customizer (drag in as needed):
- **Product Spotlight** — features one hero product in editorial split layout
- **Marquee Ticker** — scrolling text bar, configurable color
- **Category Grid** — 2×2 colored category cards

---

## Collection page

The collection page automatically splits products into **Tops** and **Pants** sections
if products have their `Product type` set correctly in Shopify.

No filter bar — 8 products don't need filtering.
2-column staggered grid on desktop. 1-column full-width on mobile.

---

## Fonts

Loaded from Google Fonts via `layout/theme.liquid`. No self-hosting needed.

- Cormorant Garamond: `400`, `400 italic`
- Fredoka: `700`
- DM Sans: `400`, `500`, `600`, `700`, `400 italic`
