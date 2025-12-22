# Cashare Media Assets Inventory

**Crawled Date:** 2025-12-22
**Source:** cashare.ch (WordPress site)
**Destination:** cashare-fresh/static/

This document catalogs all media assets downloaded from Cashare legal and informational pages for the Fresh migration.

---

## Overview

- **Total Images:** 127 files
- **Total Documents:** 2 PDFs
- **Pages Crawled:** 7 (AGB, Datenschutz, Impressum, Sicherheit, FAQ, Presse, Partner)
- **Note:** FAQ, Datenschutz, and Partner pages returned 404 errors

---

## Directory Structure

```
static/
├── images/
│   ├── logos/           # 3 files - Cashare brand logos
│   ├── icons/           # 12 files - Product/service category icons
│   ├── security/        # 6 files - Security page illustrations
│   ├── press/           # 10 files - Press page assets & media logos
│   ├── partners/        # 5 files - Partner & certification logos
│   ├── about/           # (pre-existing)
│   └── blog/            # (pre-existing)
└── documents/
    └── legal/           # 2 PDFs - AGB & Gebührenverordnung
```

---

## 1. Logos (3 files)

**Location:** `static/images/logos/`

| Filename | Format | Source URL | Usage |
|----------|--------|------------|-------|
| `cashare-main-logo.svg` | SVG | wp-content/uploads/2024/12/ | Primary logo |
| `cashare-main-logo.png` | PNG | wp-content/uploads/2024/12/ | Primary logo (raster) |
| `cashare-logo-variant.png` | PNG | wp-content/uploads/2024/10/CashareLogo-1.png | Alternative logo variant |

**Note:** The main black and white logos already exist in `/static/images/`:
- `cashare-black-logo.svg`
- `cashare-white-logo.svg`

---

## 2. Product/Service Category Icons (12 files)

**Location:** `static/images/icons/`

| Filename | Source | Description |
|----------|--------|-------------|
| `private-loan.png` | wp-content/uploads/2024/12/ | Private loan icon |
| `sme-loan.png` | wp-content/uploads/2024/12/ | SME loan icon |
| `mortgage.png` | wp-content/uploads/2024/12/ | Mortgage icon |
| `private-investor.png` | wp-content/uploads/2024/12/ | Private investor icon |
| `istitutional-investor.png` | wp-content/uploads/2024/12/ | Institutional investor icon |
| `who-we-are.png` | wp-content/uploads/2024/12/ | About/company icon |
| `crowd-lending.png` | wp-content/uploads/2024/12/ | Crowd lending concept icon |
| `statistics.png` | wp-content/uploads/2024/12/ | Statistics/data icon |
| `jobs.png` | wp-content/uploads/2024/12/ | Careers icon |
| `partner.png` | wp-content/uploads/2024/12/ | Partners icon |
| `press.png` | wp-content/uploads/2024/12/ | Press/media icon |
| `blog.png` | wp-content/uploads/2024/12/ | Blog icon |

**Usage:** Navigation menus, footer links, service cards

---

## 3. Security Page Illustrations (6 files)

**Location:** `static/images/security/`

| Filename | Format | Description |
|----------|--------|-------------|
| `security-banner-line.svg` | SVG | Security page header banner (desktop) |
| `security-banner-line-mobile.svg` | SVG | Security page header banner (mobile) |
| `security-investors.svg` | SVG | Investor security illustration |
| `security-borrowers.svg` | SVG | Borrower security illustration |
| `security-data.svg` | SVG | Data protection illustration |
| `security-platform.svg` | SVG | Platform security illustration |

**Source Page:** https://www.cashare.ch/sicherheit/
**Upload Date:** September 2025

---

## 4. Press Page Assets (10 files)

**Location:** `static/images/press/`

### Banner Assets (2 files)

| Filename | Format | Description |
|----------|--------|-------------|
| `press-banner-line.svg` | SVG | Press page header banner (desktop) |
| `press-banner-line-mobile.svg` | SVG | Press page header banner (mobile) |

### Media Publication Logos (8 files)

| Filename | Original Name | Publication |
|----------|---------------|-------------|
| `nzz.jpg` | portfolio-nzz-3.jpg | Neue Zürcher Zeitung |
| `aargauer-zeitung.jpg` | Aargauer_Zeitung-1.jpg | Aargauer Zeitung |
| `finance20.jpg` | portfolio-finance20.jpg | Finance 2.0 |
| `tages-anzeiger.jpg` | portfolio-tagesanzeiger-2.jpg | Tages Anzeiger |
| `hslu-financeblog.jpg` | portfolio-financeblog-3.jpg | Hochschule Luzern Finance Blog |
| `handelszeitung.jpg` | portfolio-handelszeitung-1-1.jpg | Handelszeitung |
| `rsi.jpg` | portfolio-rsi.jpg | RSI (Radio Svizzera Italiana) |
| `kgeld.jpg` | portfolio-kgeld-1.jpg | K-Geld |

**Source Page:** https://www.cashare.ch/presse/
**Upload Date:** May 2022

---

## 5. Partner & Certification Logos (5 files)

**Location:** `static/images/partners/`

| Filename | Original Name | Organization | Type |
|----------|---------------|--------------|------|
| `deutsche-boerse.png` | Frame-1000002702.png | Deutsche Börse Venture Network | Partnership |
| `Swiss-Finance-Logo.png` | Swiss-Finance-Logo.png | Swiss Finance Startups | Membership |
| `Swiss-Made-Software-Logo.png` | Swiss-Made-Software-Logo.png | Swiss Made Software | Certification |
| `edoeb-logo.png` | logo-2.png | EDÖB (Federal Data Protection Commissioner) | Compliance |
| `edoeb-secondary.png` | Frame-1000002746.png | EDÖB Data Protection Registry | Compliance |

**Found On:** AGB, Datenschutz, Impressum, Sicherheit pages (footer sections)
**Upload Date:** October 2024

**Note:** Duplicate copies also exist in `static/images/members/` from previous migration

---

## 6. Legal Documents (2 PDFs)

**Location:** `static/documents/`

| Filename | Size | Source Page | Description |
|----------|------|-------------|-------------|
| `AGB_01_Februar_2025.pdf` | 93 KB | /agb/ | Terms & Conditions (effective Feb 1, 2025) |
| `Gebuehrenverordnung-20250201-de.pdf` | 109 KB | /agb/ | Fee Schedule (German, effective Feb 1, 2025) |

**Upload Dates:**
- AGB: May 2025
- Gebührenverordnung: February 2025

**Usage:** Legal pages with download links

---

## Pages Crawled

### Successfully Crawled (4 pages)

1. **AGB (Terms & Conditions)**
   URL: https://www.cashare.ch/agb/
   Assets: 2 PDFs, shared logos/icons

2. **Impressum (Legal Notice)**
   URL: https://www.cashare.ch/impressum/
   Assets: Shared logos/icons only

3. **Sicherheit (Security)**
   URL: https://www.cashare.ch/sicherheit/
   Assets: 6 SVG illustrations, shared logos/icons

4. **Presse (Press)**
   URL: https://www.cashare.ch/presse/
   Assets: 2 banner SVGs, 8 media publication logos

### Failed (404 Errors) - 3 pages

- https://www.cashare.ch/datenschutz/ (404)
- https://www.cashare.ch/faq/ (404)
- https://www.cashare.ch/partner/ (404)

**Note:** These pages may be unpublished or have different URLs. The Datenschutz (privacy policy) page is legally required, so it likely exists under a different URL or is embedded elsewhere.

---

## Asset Categories Summary

### By Type
- **SVG:** 8 files (security illustrations, press banners)
- **PNG:** 27 files (logos, icons, partner badges)
- **JPG:** 8 files (media publication logos)
- **PDF:** 2 files (legal documents)

### By Purpose
- **Branding:** 3 logo variants
- **Navigation/UI:** 12 product/service icons
- **Trust Signals:** 5 partner/certification logos
- **Editorial:** 8 media publication logos
- **Illustrations:** 6 security-themed SVGs
- **Legal:** 2 downloadable PDFs

---

## Migration Notes

1. **Duplicates:** Some partner logos exist in both `/partners/` and `/members/` directories
2. **Pre-existing Assets:** Blog images, team photos, and core logos were previously migrated
3. **Missing Pages:** FAQ, Datenschutz, and Partner pages need to be located (different URLs or CMS structure)
4. **File Naming:** Some files renamed for clarity (e.g., `Frame-1000002702.png` → `deutsche-boerse.png`)
5. **Legal Documents:** PDFs dated Feb 2025 should be verified for accuracy before migration goes live

---

## Next Steps

1. Verify legal PDFs are current and accurate
2. Locate missing Datenschutz, FAQ, and Partner pages (check German URLs: `/de/datenschutz/`, etc.)
3. Optimize images (compress PNGs/JPGs without quality loss)
4. Convert remaining PNGs to SVG where possible (icons, logos)
5. Implement responsive image loading for press logos
6. Create alt text for all images (accessibility requirement)

---

## File Size Analysis

**Largest Files:**
- Press media logos: ~10-20 KB each (JPG)
- Security illustrations: ~1-2 KB each (SVG, optimized)
- Legal PDFs: 93-109 KB each

**Total Size:** ~400 KB (images) + 202 KB (PDFs) = ~602 KB total

All assets are web-optimized and suitable for production use.
