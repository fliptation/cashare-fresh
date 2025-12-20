import type { Locale } from "../../lib/i18n/index.ts";
import { getBlogPosts } from "../../lib/blog/posts.ts";
import BlogIsland from "../../islands/BlogIsland.tsx";

interface BlogProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Blog",
    subtitle: "Einblicke & Geschichten",
    heroText: "Aktuelle Artikel, Analysen und Neuigkeiten aus der Welt des Crowdlending und der Finanzen.",
    backLink: { label: "Zurück zu Über uns", href: "/ueber-uns" },
    readMore: "Weiterlesen",
    minRead: "Min. Lesezeit",
  },
  en: {
    title: "Blog",
    subtitle: "Insights & Stories",
    heroText: "Current articles, analyses, and news from the world of crowdlending and finance.",
    backLink: { label: "Back to About Us", href: "/en/about" },
    readMore: "Read more",
    minRead: "min read",
  },
  fr: {
    title: "Blog",
    subtitle: "Perspectives & Histoires",
    heroText: "Articles actuels, analyses et nouvelles du monde du crowdlending et de la finance.",
    backLink: { label: "Retour à À propos", href: "/fr/a-propos" },
    readMore: "Lire la suite",
    minRead: "min de lecture",
  },
};

export function Blog({ locale }: BlogProps) {
  const t = content[locale];
  const posts = getBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <section class="blog-hero">
        <div class="blog-hero__container">
          <a href={t.backLink.href} class="blog-hero__back">
            <svg class="blog-hero__back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="blog-hero__content">
            <h1 class="blog-hero__title">{t.title}</h1>
            <p class="blog-hero__subtitle">{t.subtitle}</p>
            <p class="blog-hero__description">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Blog Posts with Filter */}
      <section class="blog-section">
        <div class="blog-section__container">
          <BlogIsland
            locale={locale}
            posts={posts}
            translations={{ readMore: t.readMore, minRead: t.minRead }}
          />
        </div>
      </section>
    </>
  );
}
