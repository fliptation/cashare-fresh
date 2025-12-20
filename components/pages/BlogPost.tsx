import type { Locale } from "../../lib/i18n/index.ts";
import { getBlogPost, getBlogPosts, type BlogPost as BlogPostType } from "../../lib/blog/posts.ts";

interface BlogPostProps {
  locale: Locale;
  slug: string;
}

const content = {
  de: {
    backLink: { label: "Zuruck zum Blog", href: "/ueber-uns/blog" },
    minRead: "Min. Lesezeit",
    share: "Teilen",
    relatedPosts: "Weitere Artikel",
    notFound: {
      title: "Artikel nicht gefunden",
      text: "Der gesuchte Artikel existiert nicht.",
      backLink: "Zuruck zum Blog",
    },
  },
  en: {
    backLink: { label: "Back to Blog", href: "/en/about/blog" },
    minRead: "min read",
    share: "Share",
    relatedPosts: "Related Articles",
    notFound: {
      title: "Article not found",
      text: "The article you're looking for doesn't exist.",
      backLink: "Back to Blog",
    },
  },
  fr: {
    backLink: { label: "Retour au Blog", href: "/fr/a-propos/blog" },
    minRead: "min de lecture",
    share: "Partager",
    relatedPosts: "Articles connexes",
    notFound: {
      title: "Article non trouve",
      text: "L'article que vous recherchez n'existe pas.",
      backLink: "Retour au Blog",
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

function parseInlineFormatting(text: string) {
  // Parse **bold** text and return JSX elements
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderContent(content: string) {
  return content.split("\n\n").map((paragraph, index) => {
    // Heading 2
    if (paragraph.startsWith("## ")) {
      return (
        <h2 key={index}>
          {paragraph.replace("## ", "")}
        </h2>
      );
    }
    // Heading 3
    if (paragraph.startsWith("### ")) {
      return (
        <h3 key={index}>
          {paragraph.replace("### ", "")}
        </h3>
      );
    }
    // Bold paragraph
    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
      return (
        <p key={index}>
          <strong>{paragraph.replace(/\*\*/g, "")}</strong>
        </p>
      );
    }
    // Unordered list
    if (paragraph.startsWith("- ")) {
      const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
      return (
        <ul key={index}>
          {items.map((item, i) => (
            <li key={i}>{parseInlineFormatting(item.replace("- ", ""))}</li>
          ))}
        </ul>
      );
    }
    // Ordered list
    if (paragraph.startsWith("1. ")) {
      const items = paragraph.split("\n").filter((line) => /^\d+\. /.test(line));
      return (
        <ol key={index}>
          {items.map((item, i) => (
            <li key={i}>{parseInlineFormatting(item.replace(/^\d+\. /, ""))}</li>
          ))}
        </ol>
      );
    }
    // Regular paragraph
    return (
      <p key={index}>
        {parseInlineFormatting(paragraph)}
      </p>
    );
  });
}

export function BlogPostPage({ locale, slug }: BlogPostProps) {
  const t = content[locale];
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div class="article-not-found">
        <div class="article-not-found__content">
          <h1 class="article-not-found__title">{t.notFound.title}</h1>
          <p class="article-not-found__text">{t.notFound.text}</p>
          <a href={t.backLink.href} class="article-not-found__link">
            {t.notFound.backLink}
          </a>
        </div>
      </div>
    );
  }

  const relatedPosts = getBlogPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section class="article-hero">
        <div class="article-hero__container">
          <a href={t.backLink.href} class="article-hero__back">
            <svg class="article-hero__back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="article-hero__meta">
            <span class="article-hero__category">
              {post.category}
            </span>
            <span class="article-hero__date">
              {formatDate(post.date, locale)}
            </span>
          </div>
          <h1 class="article-hero__title">
            {post.title[locale]}
          </h1>
          <div class="article-hero__author">
            <div class="article-hero__author-avatar">
              {post.author.charAt(0)}
            </div>
            <div class="article-hero__author-info">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.readTime} {t.minRead}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div class="article-image">
        <div class="article-image__wrapper">
          <img
            src={post.image}
            alt={post.title[locale]}
            class="article-image__img"
          />
        </div>
      </div>

      {/* Article Content */}
      <article class="article-content">
        <div class="article-content__container">
          <div class="article-prose">
            {renderContent(post.content[locale])}
          </div>

          {/* Share Section */}
          <div class="article-share">
            <span class="article-share__label">{t.share}</span>
            <div class="article-share__buttons">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title[locale])}&url=`}
                target="_blank"
                rel="noopener noreferrer"
                class="article-share__button"
              >
                <svg class="article-share__icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=&title=${encodeURIComponent(post.title[locale])}`}
                target="_blank"
                rel="noopener noreferrer"
                class="article-share__button"
              >
                <svg class="article-share__icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section class="article-related">
          <div class="article-related__container">
            <h2 class="article-related__title">{t.relatedPosts}</h2>
            <div class="article-related__grid">
              {relatedPosts.map((relatedPost) => (
                <a key={relatedPost.slug} href={getBlogUrl(relatedPost.slug, locale)} class="article-related__card">
                  <article class="article-related__card-inner">
                    <div class="article-related__card-image">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title[locale]}
                        class="article-related__card-img"
                      />
                    </div>
                    <div class="article-related__card-content">
                      <span class="article-related__card-date">{formatDate(relatedPost.date, locale)}</span>
                      <h3 class="article-related__card-title">
                        {relatedPost.title[locale]}
                      </h3>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
