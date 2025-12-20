import { useState } from "preact/hooks";
import type { Locale } from "../lib/i18n/index.ts";
import type { BlogPost } from "../lib/blog/posts.ts";

interface BlogIslandProps {
  locale: Locale;
  posts: BlogPost[];
  translations: {
    readMore: string;
    minRead: string;
  };
}

const filterTranslations = {
  de: {
    all: "Alle",
    blog: "Blog",
    news: "Nachricht",
  },
  en: {
    all: "All",
    blog: "Blog",
    news: "News",
  },
  fr: {
    all: "Tous",
    blog: "Blog",
    news: "Actualites",
  },
};

// Category icons as SVG components
const icons: Record<string, preact.JSX.Element> = {
  all: (
    <svg viewBox="0 0 24 24" fill="currentColor" class="blog-filter__icon">
      <path d="M3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V9C21 7.9 20.1 7 19 7H11L9 5H5C3.9 5 3 5.9 3 7Z" />
    </svg>
  ),
  blog: (
    <svg viewBox="0 0 24 24" fill="currentColor" class="blog-filter__icon">
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" />
    </svg>
  ),
  news: (
    <svg viewBox="0 0 24 24" fill="currentColor" class="blog-filter__icon">
      <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 12H8V10H20V12ZM15 16H8V14H15V16ZM20 8H8V4H20V8Z" />
    </svg>
  ),
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

export default function BlogIsland({ locale, posts, translations: t }: BlogIslandProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const ft = filterTranslations[locale];

  // Get unique categories from posts
  const categories = [...new Set(posts.map(p => p.category))];

  // Build list of filters - "all" plus existing categories
  const availableFilters = ["all", ...categories.map(c => c.toLowerCase())];

  // Filter posts based on active category
  const filteredPosts = activeFilter === "all"
    ? posts
    : posts.filter(p => p.category.toLowerCase() === activeFilter);

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      {/* Filter */}
      <div class="blog-filter">
        <div class="blog-filter__list">
          {availableFilters.map((filterKey) => (
            <button
              key={filterKey}
              type="button"
              class={`blog-filter__item ${activeFilter === filterKey ? "blog-filter__item--active" : ""}`}
              onClick={() => setActiveFilter(filterKey)}
            >
              {icons[filterKey]}
              <span class="blog-filter__label">
                {ft[filterKey as keyof typeof ft] || filterKey}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div class="blog-featured">
          <a href={getBlogUrl(featuredPost.slug, locale)} class="blog-featured__link">
            <div class="blog-featured__card">
              <div class="blog-featured__inner">
                <div class="blog-featured__image-wrapper">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title[locale]}
                    class="blog-featured__image"
                    loading="lazy"
                  />
                </div>
                <div class="blog-featured__content">
                  <div class="blog-featured__meta">
                    <span class="blog-featured__category">
                      {featuredPost.category}
                    </span>
                    <span class="blog-featured__date">
                      {formatDate(featuredPost.date, locale)}
                    </span>
                  </div>
                  <h2 class="blog-featured__title">
                    {featuredPost.title[locale]}
                  </h2>
                  <p class="blog-featured__excerpt">
                    {featuredPost.excerpt[locale]}
                  </p>
                  <div class="blog-featured__footer">
                    <div class="blog-featured__author">
                      <span>{featuredPost.author}</span>
                      <span>·</span>
                      <span>{featuredPost.readTime} {t.minRead}</span>
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

      {/* Other Posts Grid */}
      {otherPosts.length > 0 && (
        <div class="blog-grid">
          {otherPosts.map((post) => (
            <a key={post.slug} href={getBlogUrl(post.slug, locale)} class="blog-card">
              <article class="blog-card__inner">
                <div class="blog-card__image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title[locale]}
                    class="blog-card__image"
                    loading="lazy"
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
          ))}
        </div>
      )}

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <div class="blog-empty">
          <p>No posts found in this category.</p>
        </div>
      )}
    </>
  );
}
