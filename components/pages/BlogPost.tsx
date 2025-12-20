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

export function BlogPostPage({ locale, slug }: BlogPostProps) {
  const t = content[locale];
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div class="min-h-screen bg-gray-50 flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">{t.notFound.title}</h1>
          <p class="text-gray-600 mb-8">{t.notFound.text}</p>
          <a href={t.backLink.href} class="text-purple-600 font-semibold hover:text-purple-700">
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
      <section class="py-12 md:py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="flex items-center gap-3 mb-6">
            <span class="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
            <span class="text-purple-200 text-sm">
              {formatDate(post.date, locale)}
            </span>
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title[locale]}
          </h1>
          <div class="flex items-center gap-4 text-purple-200">
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span class="text-white font-semibold">{post.author.charAt(0)}</span>
              </div>
              <span>{post.author}</span>
            </div>
            <span>·</span>
            <span>{post.readTime} {t.minRead}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div class="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={post.image}
            alt={post.title[locale]}
            class="w-full aspect-video object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article class="py-16 bg-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="prose prose-lg prose-purple max-w-none">
            {post.content[locale].split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} class="text-2xl font-bold text-gray-900 mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p key={index} class="font-semibold text-gray-900">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                return (
                  <ul key={index} class="list-disc pl-6 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} class="text-gray-700">{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith("1. ")) {
                const items = paragraph.split("\n").filter((line) => /^\d+\. /.test(line));
                return (
                  <ol key={index} class="list-decimal pl-6 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} class="text-gray-700">{item.replace(/^\d+\. /, "")}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} class="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Share Section */}
          <div class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex items-center justify-between">
              <span class="text-gray-700 font-semibold">{t.share}</span>
              <div class="flex items-center gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title[locale])}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&title=${encodeURIComponent(post.title[locale])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section class="py-16 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">{t.relatedPosts}</h2>
            <div class="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <a key={relatedPost.slug} href={getBlogUrl(relatedPost.slug, locale)} class="group block">
                  <article class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all">
                    <div class="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title[locale]}
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div class="p-5">
                      <span class="text-xs text-gray-500">{formatDate(relatedPost.date, locale)}</span>
                      <h3 class="text-lg font-semibold text-gray-900 mt-2 group-hover:text-purple-600 transition-colors line-clamp-2">
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
