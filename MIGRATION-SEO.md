# SEO Migration: WordPress/Yoast to Deno Fresh

This document tracks the SEO migration from the old WordPress site (using Yoast SEO Premium + Rank Math + TranslatePress) to the new Deno Fresh site.

## Implementation Status

### Phase 1: Pre-Launch Critical (Completed)

| Feature | Status | Location |
|---------|--------|----------|
| 301 Redirects | Done | `routes/_middleware.ts`, `lib/seo/redirects.ts` |
| robots.txt | Done | `routes/robots.txt.ts` |
| sitemap.xml | Done | `routes/sitemap.xml.ts` |
| SeoHead Component | Done | `components/SeoHead.tsx` |
| Canonical URLs | Done | Implemented in SeoHead |
| Hreflang Tags | Done | de, en, fr, x-default in SeoHead |
| SEO Utilities | Done | `lib/seo/utils.ts` |

### Phase 2: Post-Launch (Pending)

| Feature | Status | Notes |
|---------|--------|-------|
| Per-page SEO integration | Pending | Add SeoHead to all routes |
| JSON-LD Organization schema | Pending | `lib/seo/schema/organization.ts` |
| JSON-LD Website schema | Pending | `lib/seo/schema/website.ts` |
| JSON-LD Article schema | Pending | For blog posts |
| Google Search Console | Pending | Verification meta tag |
| Bing Webmaster Tools | Pending | Verification meta tag |

### Phase 3: Enhancement (Future)

- BlogPosting schema for articles
- Breadcrumb schema + HTML breadcrumbs
- FAQ schema where applicable
- LocalBusiness schema for contact page

---

## File Structure

```
lib/seo/
├── redirects.ts          # WordPress → Fresh URL mappings
└── utils.ts              # SEO utility functions

components/
└── SeoHead.tsx           # Per-page SEO meta tags

routes/
├── _middleware.ts        # Redirect handling
├── robots.txt.ts         # Robots.txt generation
└── sitemap.xml.ts        # XML sitemap generation
```

---

## How to Use SeoHead

Add the `SeoHead` component to each route:

```tsx
import { SeoHead } from "../../components/SeoHead.tsx";

export default function MyPage() {
  return (
    <Layout locale="de">
      <SeoHead
        title="Privatkredit beantragen"
        description="Beantragen Sie Ihren Privatkredit bei Cashare. Faire Zinsen, schnelle Bearbeitung."
        canonicalPath="/kredit-beantragen/privatkredit"
        locale="de"
      />
      {/* Page content */}
    </Layout>
  );
}
```

### SeoHead Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | Yes | Page title (will be appended with " \| Cashare") |
| `description` | string | Yes | Meta description (max 160 characters) |
| `canonicalPath` | string | Yes | Path for canonical URL (e.g., "/kredit-beantragen") |
| `locale` | "de" \| "en" \| "fr" | Yes | Current page locale |
| `ogImage` | string | No | Custom OG image path |
| `ogType` | "website" \| "article" | No | OG type (default: "website") |
| `article` | object | No | Article metadata for blog posts |
| `noindex` | boolean | No | Set true to add noindex tag |

### Blog Post Example

```tsx
<SeoHead
  title={post.title.de}
  description={post.excerpt.de}
  canonicalPath={`/ueber-uns/blog/${post.slug}`}
  locale="de"
  ogType="article"
  ogImage={post.image}
  article={{
    publishedTime: post.date,
    author: post.author,
    section: post.category,
  }}
/>
```

---

## Redirects

All redirects are defined in `lib/seo/redirects.ts`:

### Page Redirects
- WordPress trailing slashes → Fresh clean URLs
- Structure changes (e.g., `/hypothek/` → `/kredit-beantragen/hypotheken`)
- Legacy pages (e.g., `/how-it-works/` → `/kredit-beantragen`)

### Blog Redirects
- WordPress slugs → Fresh slugs
- Example: `/crowdfunding-monitor-2024/` → `/ueber-uns/blog/crowdfunding-monitor-2024`

### Adding New Redirects

Edit `lib/seo/redirects.ts`:

```ts
export const pageRedirects: Record<string, string> = {
  // ... existing redirects
  "/old-path/": "/new-path",
};
```

---

## Sitemap

The sitemap at `/sitemap.xml` includes:
- All static pages in all 3 languages
- All blog posts in all 3 languages
- Proper `xhtml:link` tags for hreflang alternates
- Priority and changefreq values
- Last modified dates

### Adding New Pages

Edit `routes/sitemap.xml.ts` and add to the `staticPages` array:

```ts
// Format: [dePath, enPath, frPath, priority, changefreq]
["/new-page", "/en/new-page", "/fr/nouvelle-page", "0.7", "monthly"],
```

---

## Pre-Launch Checklist

- [ ] All pages have `<SeoHead>` component
- [ ] All pages have unique title/description
- [ ] Canonical URLs resolve correctly (no 404s)
- [ ] Hreflang links are reciprocal
- [ ] Sitemap validates at https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] robots.txt allows important pages
- [ ] 301 redirects work for all old WordPress URLs
- [ ] OG images are correct size (1200x630)

## Post-Launch Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor 404 errors in Search Console
- [ ] Track indexed pages count
- [ ] Check for crawl errors
- [ ] Verify hreflang in Search Console International Targeting

---

## Testing Commands

```bash
# Test redirects
curl -I https://www.cashare.ch/kredit-beantragen/
# Should return 301 → /kredit-beantragen

# Test robots.txt
curl https://www.cashare.ch/robots.txt

# Test sitemap
curl https://www.cashare.ch/sitemap.xml

# Validate sitemap
xmllint --noout sitemap.xml
```

---

## WordPress SEO Features (Reference)

The old WordPress site used:

| Feature | WordPress Plugin | Fresh Implementation |
|---------|------------------|---------------------|
| Meta titles/descriptions | Yoast SEO | `<SeoHead>` component |
| XML Sitemaps | Yoast SEO | `routes/sitemap.xml.ts` |
| robots.txt | Rank Math | `routes/robots.txt.ts` |
| Canonical URLs | Yoast SEO | `<SeoHead>` component |
| Hreflang | TranslatePress | `<SeoHead>` + sitemap |
| Open Graph | Yoast SEO | `<SeoHead>` component |
| Twitter Cards | Yoast SEO | `<SeoHead>` component |
| JSON-LD Schema | Yoast SEO | *Pending* |
| Breadcrumbs | Yoast SEO | *Pending* |
| 301 Redirects | Yoast Premium | `routes/_middleware.ts` |
