import type { Locale } from "../../lib/i18n/index.ts";
import { getBlogPosts, type BlogPost } from "../../lib/blog/posts.ts";

interface BlogProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Blog",
    subtitle: "Einblicke & Geschichten",
    heroText: "Aktuelle Artikel, Analysen und Neuigkeiten aus der Welt des Crowdlending und der Finanzen.",
    backLink: { label: "Zuruck zu Uber uns", href: "/ueber-uns" },
    readMore: "Weiterlesen",
    minRead: "Min. Lesezeit",
    categories: {
      all: "Alle",
      news: "News",
      blog: "Blog",
    },
  },
  en: {
    title: "Blog",
    subtitle: "Insights & Stories",
    heroText: "Current articles, analyses, and news from the world of crowdlending and finance.",
    backLink: { label: "Back to About Us", href: "/en/about" },
    readMore: "Read more",
    minRead: "min read",
    categories: {
      all: "All",
      news: "News",
      blog: "Blog",
    },
  },
  fr: {
    title: "Blog",
    subtitle: "Perspectives & Histoires",
    heroText: "Articles actuels, analyses et nouvelles du monde du crowdlending et de la finance.",
    backLink: { label: "Retour a A propos", href: "/fr/a-propos" },
    readMore: "Lire la suite",
    minRead: "min de lecture",
    categories: {
      all: "Tous",
      news: "Actualites",
      blog: "Blog",
    },
  },
};

function formatDate(dateString: string, locale: Locale): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const localeMap = { de: "de-CH", en: "en-GB", fr: "fr-CH" };
  return date.toLocaleDateString(localeMap[locale], options);
}

function getBlogUrl(slug: string, locale: Locale): string {
  const basePath = locale === "de" ? "/ueber-uns/blog" : locale === "en" ? "/en/about/blog" : "/fr/a-propos/blog";
  return `${basePath}/${slug}`;
}

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

      {/* Blog Posts Grid */}
      <section class="blog-section">
        <div class="blog-section__container">
          {/* Featured Post */}
          {posts.length > 0 && (
            <div class="blog-featured">
              <a href={getBlogUrl(posts[0].slug, locale)} class="blog-featured__link">
                <div class="blog-featured__card">
                  <div class="blog-featured__inner">
                    <div class="blog-featured__image-wrapper">
                      <img
                        src={posts[0].image}
                        alt={posts[0].title[locale]}
                        class="blog-featured__image"
                      />
                    </div>
                    <div class="blog-featured__content">
                      <div class="blog-featured__meta">
                        <span class="blog-featured__category">
                          {posts[0].category}
                        </span>
                        <span class="blog-featured__date">
                          {formatDate(posts[0].date, locale)}
                        </span>
                      </div>
                      <h2 class="blog-featured__title">
                        {posts[0].title[locale]}
                      </h2>
                      <p class="blog-featured__excerpt">
                        {posts[0].excerpt[locale]}
                      </p>
                      <div class="blog-featured__footer">
                        <div class="blog-featured__author">
                          <span>{posts[0].author}</span>
                          <span>·</span>
                          <span>{posts[0].readTime} {t.minRead}</span>
                        </div>
                        <span class="blog-featured__read-more">
                          {t.readMore}
                          <svg class="blog-featured__read-more-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* Other Posts */}
          <div class="blog-grid">
            {posts.slice(1).map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

interface BlogCardProps {
  post: BlogPost;
  locale: Locale;
  t: typeof content.de;
}

function BlogCard({ post, locale, t }: BlogCardProps) {
  return (
    <a href={getBlogUrl(post.slug, locale)} class="blog-card">
      <article class="blog-card__inner">
        <div class="blog-card__image-wrapper">
          <img
            src={post.image}
            alt={post.title[locale]}
            class="blog-card__image"
          />
        </div>
        <div class="blog-card__content">
          <div class="blog-card__meta">
            <span class="blog-card__category">
              {post.category}
            </span>
            <span class="blog-card__date">
              {formatDate(post.date, locale)}
            </span>
          </div>
          <h3 class="blog-card__title">
            {post.title[locale]}
          </h3>
          <p class="blog-card__excerpt">
            {post.excerpt[locale]}
          </p>
          <div class="blog-card__footer">
            <div class="blog-card__author">
              <span>{post.author}</span>
              <span> · </span>
              <span>{post.readTime} {t.minRead}</span>
            </div>
            <span class="blog-card__read-more">
              {t.readMore}
              <svg class="blog-card__read-more-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
