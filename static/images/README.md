# Cashare Image Assets

This directory contains all visual assets for the Cashare Fresh website.

## Directory Structure

```
images/
├── investors/          # Investor page graphics (36 files) - NEW 2025-12-22
├── borrowers/          # Borrower/loan page graphics (32 files) - NEW 2025-12-22
├── brand/              # Logo files (currently in root)
├── products/           # Product type icons (loan types, investor types)
├── icons/              # General UI icons and illustrations
├── info/               # Informational section icons
├── ui/                 # UI elements, lines, vectors
├── hero/               # Hero section images and backgrounds
├── partners/           # Partner and regulatory logos
├── members/            # Association/membership logos
├── press/              # Media outlet logos
├── blog/               # Blog post featured images
├── about/              # Team member photos
├── legal/              # Legal page assets
└── security/           # Security feature icons
```

## Recent Additions (2025-12-22)

### Investor Page Assets (`/investors/`)

**36 SVG files** for investor-related pages including:

- **General invest page** (`/investieren/`): 16 files
  - Feature icons (high returns, portfolio, expert, secure investment)
  - Product illustrations (private, institutional, platform)
  - Process flow lines and step illustrations
  - Section dividers and decorative elements

- **Private investor page** (`/investieren/privatinvestoren/`): 13 files
  - Process step illustrations (3 steps)
  - Requirements icons and section lines
  - Ratings section graphics

- **Institutional investor page** (`/investieren/institutionelle-investoren/`): 7 files
  - Process step illustrations (3 steps)
  - Product types (platform, notes, fund)
  - Requirements section lines

### Borrower Page Assets (`/borrowers/`)

**32 files** (PNG and SVG) for borrower/loan pages including:

- **Private loan page** (`/kredit-beantragen/privatkredit/`): 18 files
  - Process icons (fill, review, disbursement)
  - Loan feature icons (5 icons)
  - Visualization graphics (charts, diagrams, vectors)
  - Responsive process flow lines

- **Mortgage page** (`/kredit-beantragen/hypotheken/`): 14 files
  - Product type illustrations (4 products)
  - Process step icons (3 steps)
  - Requirement indicators (3 requirements)
  - Responsive section lines

**All files downloaded from:** `https://www.cashare.ch/wp-content/uploads/`

**See MEDIA_MAPPING.md for complete URL mapping**

## Asset Categories

### Brand Assets

Located in `/static/images/` root:

- `cashare-white-logo.svg` - Primary logo (white, for dark backgrounds)
- `cashare-black-logo.svg` - Primary logo (black, for light backgrounds)
- `cashare-logomark.svg` - Icon/mark only version
- `og-image.svg` - Open Graph social media preview image

Located in `/static/images/logos/`:

- `cashare-main-logo.png` - PNG version of main logo
- `cashare-logo-variant.png` - Alternative logo variant

### Product Icons

Located in `/static/images/products/`:

- `private-loan.png` - Private loan product icon
- `sme-loan.png` - SME loan product icon
- `mortgage.png` - Mortgage product icon
- `private-investor.png` - Private investor icon
- `institutional-investor.png` - Institutional investor icon

### Informational Icons

Located in `/static/images/icons/`:

**Loan Process Icons:**
- `loan-icon-1.png` through `loan-icon-5.png` - Step-by-step loan process

**Investor Icons:**
- `private-icon-1.png` through `private-icon-3.png` - Investor feature highlights

Located in `/static/images/info/`:

**Navigation/Section Icons:**
- `who-we-are.png` - About us section icon
- `crowd-lending.png` - Crowdlending explanation icon
- `statistics.png` - Statistics section icon
- `jobs.png` - Careers section icon
- `partner.png` - Partner section icon
- `press.png` - Press section icon
- `blog.png` - Blog section icon

### UI Elements

Located in `/static/images/ui/`:

- `current-projects-line.svg` - Desktop connector line graphic
- `current-projects-line-mobile.svg` - Mobile connector line
- `receive-loan-vector.png` - Loan process illustration
- `receive-loan-line-mobile.svg` - Mobile loan flow line
- `where-can-invest-line-mobile.svg` - Mobile investment flow line
- `user-avatar.png` - Default user avatar

### Hero/Banner Images

Located in `/static/images/hero/`:

- `calculator-wide.png` - Hero calculator visualization
- `layer.png` - Background layer element
- `text.png` - Text overlay element
- `layer-1.png` - Additional layer element

### Partner & Association Logos

Located in `/static/images/members/`:

- `Swiss-Finance-Logo.png` - Swiss Finance Startups member
- `Swiss-Made-Software-Logo.png` - Swiss Made Software member
- `deutsche-boerse.png` - Deutsche Börse Venture Network

Located in `/static/images/partners/`:

- `edoeb-logo.png` - Swiss Data Protection authority
- `edoeb-frame.png` - EDÖB certification frame

### Regulatory Badges

Located in `/static/images/` root:

- `polyreg.svg` - Polyreg registration badge
- `audited.svg` - Audited badge
- `regulates.svg` - Regulated badge

### Press/Media Logos

Located in `/static/images/press/`:

- `The-Business-Times.png`
- `tagi.png` - Tages-Anzeiger
- `swissquote.png`
- `moneycab.png`
- `fuw.png` - Finanz und Wirtschaft

### Blog Images

Located in `/static/images/blog/`:

90+ featured images for blog posts. Each blog post has a unique featured image named after the post slug or topic.

### Team Photos

Located in `/static/images/about/`:

Team member profile photos for the "Who We Are" / "Wer sind wir" page:

- `tina-stormer.png`
- `dominik-joke.png`
- `tom-ludescher.png`
- `roger-muller.jpg`
- `jonas-imfeld.jpg`
- `sajmir-medija.jpg`
- `filipe-goncalves.jpg`
- `arbresha-hoxhaj.jpg`
- `michael-borter.jpg`
- `kassandra-bulica.jpg`
- `Debora-Fernances-Martins-512.jpg`

### Security Icons

Located in `/static/images/security/`:

- `security-platform.svg` - Platform security icon
- `security-data.svg` - Data protection icon
- `security-borrowers.svg` - Borrower security icon
- `security-investors.svg` - Investor security icon
- `security-banner-line.svg` - Desktop banner connector
- `security-banner-line-mobile.svg` - Mobile banner connector

## Favicon & App Icons

Located in `/static/`:

- `favicon.ico` - Standard browser favicon (32x32)

**Missing (to be generated):**
- `apple-touch-icon.png` - iOS home screen icon (180x180)
- `android-chrome-192x192.png` - Android icon (192x192)
- `android-chrome-512x512.png` - Android icon (512x512)
- `site.webmanifest` - PWA manifest file

## Usage Guidelines

### In Components/Routes

```tsx
// Absolute path from /static/
<img src="/images/cashare-black-logo.svg" alt="Cashare" />

// For responsive images
<img
  src="/images/hero/calculator-wide.png"
  srcset="/images/hero/calculator-wide.png 1x, /images/hero/calculator-wide@2x.png 2x"
  alt="Loan Calculator"
/>
```

### In CSS

```css
/* Background images */
.hero {
  background-image: url('/images/hero/layer.png');
}

/* For retina displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero {
    background-image: url('/images/hero/layer@2x.png');
  }
}
```

### Optimization Recommendations

1. **Convert to WebP** - For better compression, create .webp versions of all PNGs
2. **Responsive Images** - Generate 2x and 3x versions for retina displays
3. **Lazy Loading** - Use `loading="lazy"` for below-fold images
4. **SVG Optimization** - Run all SVGs through SVGO for smaller file sizes
5. **Image CDN** - Consider using a CDN for faster global delivery

### Creating Favicon Package

To generate a complete favicon package from the logomark:

```bash
# Use a tool like realfavicongenerator.net or:
# 1. Create a 512x512 PNG from cashare-logomark.svg
# 2. Generate all required sizes
# 3. Create site.webmanifest with:
{
  "name": "Cashare",
  "short_name": "Cashare",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#007399",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

## Asset Download Script

To download all missing assets from the WordPress site:

```bash
deno task download-assets
```

This will:
- Download all cataloged assets from cashare.ch
- Organize them into the correct directories
- Skip assets that already exist
- Report success/failure for each download

## Maintenance

- Update `ASSETS_MANIFEST.md` when adding new assets
- Keep directory structure organized by asset type
- Use descriptive, kebab-case filenames
- Document any custom-created assets (not from WordPress)
- Run image optimization before committing large assets

## Migration Status

See `ASSETS_MANIFEST.md` in the project root for a complete catalog of:
- All WordPress assets and their URLs
- Migration status (existing/missing)
- Download priorities
- Summary statistics
