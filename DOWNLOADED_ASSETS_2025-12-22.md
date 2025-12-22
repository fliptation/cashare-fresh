# Cashare Media Assets - Downloaded 2025-12-22

This document lists all assets downloaded from cashare.ch legal and informational pages.

## Summary

- **Total Downloaded:** 38 files
  - 36 images (SVG, PNG, JPG)
  - 2 PDF documents
- **Pages Crawled:** 4 successful (AGB, Impressum, Sicherheit, Presse)
- **Pages Failed (404):** 3 (Datenschutz, FAQ, Partner)

---

## Downloaded Files by Category

### 1. Logos (3 files)
**Location:** `/static/images/logos/`

- `cashare-main-logo.svg` (10.3 KB)
- `cashare-main-logo.png` (1.3 KB)
- `cashare-logo-variant.png` (1.2 KB)

### 2. Product/Service Icons (12 files)
**Location:** `/static/images/icons/`

- `private-loan.png`
- `sme-loan.png`
- `mortgage.png`
- `private-investor.png`
- `istitutional-investor.png`
- `who-we-are.png`
- `crowd-lending.png`
- `statistics.png`
- `jobs.png`
- `partner.png`
- `press.png`
- `blog.png`

### 3. Security Page Illustrations (6 files)
**Location:** `/static/images/security/`

- `security-banner-line.svg`
- `security-banner-line-mobile.svg`
- `security-investors.svg`
- `security-borrowers.svg`
- `security-data.svg`
- `security-platform.svg`

**Source:** https://www.cashare.ch/sicherheit/

### 4. Press Page Assets (10 files)
**Location:** `/static/images/press/`

#### Banners (2 files)
- `press-banner-line.svg`
- `press-banner-line-mobile.svg`

#### Media Publication Logos (8 files)
- `nzz.jpg` (Neue Zürcher Zeitung)
- `aargauer-zeitung.jpg` (Aargauer Zeitung)
- `finance20.jpg` (Finance 2.0)
- `tages-anzeiger.jpg` (Tages Anzeiger)
- `hslu-financeblog.jpg` (Hochschule Luzern Finance Blog)
- `handelszeitung.jpg` (Handelszeitung)
- `rsi.jpg` (RSI - Radio Svizzera Italiana)
- `kgeld.jpg` (K-Geld)

**Source:** https://www.cashare.ch/presse/

### 5. Partner & Certification Logos (5 files)
**Location:** `/static/images/partners/`

- `deutsche-boerse.png` (Deutsche Börse Venture Network)
- `Swiss-Finance-Logo.png` (Swiss Finance Startups)
- `Swiss-Made-Software-Logo.png` (Swiss Made Software)
- `edoeb-logo.png` (EDÖB - Federal Data Protection Commissioner)
- `edoeb-secondary.png` (EDÖB Data Protection Registry)

**Found on:** Footer sections of AGB, Impressum, Sicherheit pages

### 6. Legal Documents (2 files)
**Location:** `/static/documents/`

- `AGB_01_Februar_2025.pdf` (93 KB) - Terms & Conditions
- `Gebuehrenverordnung-20250201-de.pdf` (109 KB) - Fee Schedule

**Source:** https://www.cashare.ch/agb/

---

## Pages Crawled

### ✅ Successful (4 pages)

1. **AGB** - https://www.cashare.ch/agb/
   - Downloaded: 2 PDFs + shared assets

2. **Impressum** - https://www.cashare.ch/impressum/
   - Downloaded: Shared logos/icons only

3. **Sicherheit** - https://www.cashare.ch/sicherheit/
   - Downloaded: 6 SVG illustrations + shared assets

4. **Presse** - https://www.cashare.ch/presse/
   - Downloaded: 2 banner SVGs + 8 media logos

### ❌ Failed - 404 Errors (3 pages)

1. **Datenschutz** - https://www.cashare.ch/datenschutz/ (404)
2. **FAQ** - https://www.cashare.ch/faq/ (404)
3. **Partner** - https://www.cashare.ch/partner/ (404)

**Note:** These pages may exist under different URLs or language paths (e.g., `/de/datenschutz/`).

---

## File Statistics

- **Total Size:** ~602 KB
  - Images: ~400 KB
  - PDFs: ~202 KB

- **File Formats:**
  - SVG: 8 files (banners, illustrations)
  - PNG: 27 files (logos, icons, badges)
  - JPG: 8 files (media publication logos)
  - PDF: 2 files (legal documents)

---

## Integration Notes

All assets are ready for use in the Fresh migration. Paths are relative to `/static/`:

```tsx
// Example usage in Fresh components
<img src="/images/logos/cashare-main-logo.svg" alt="Cashare" />
<img src="/images/security/security-investors.svg" alt="Investor Security" />
<img src="/images/press/nzz.jpg" alt="NZZ" />
<a href="/documents/AGB_01_Februar_2025.pdf">Download AGB</a>
```

---

## Complete Asset Inventory

For a comprehensive inventory of ALL media assets (including pre-existing blog images, team photos, etc.), see:

📄 **MEDIA_ASSETS_INVENTORY.md**
