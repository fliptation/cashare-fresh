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
      <section class="py-20 md:py-32 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-purple-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-purple-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {posts.length > 0 && (
            <div class="mb-16">
              <a href={getBlogUrl(posts[0].slug, locale)} class="group block">
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  <div class="grid md:grid-cols-2">
                    <div class="aspect-video md:aspect-auto">
                      <img
                        src={posts[0].image}
                        alt={posts[0].title[locale]}
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div class="p-8 md:p-12 flex flex-col justify-center">
                      <div class="flex items-center gap-3 mb-4">
                        <span class="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                          {posts[0].category}
                        </span>
                        <span class="text-gray-500 text-sm">
                          {formatDate(posts[0].date, locale)}
                        </span>
                      </div>
                      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {posts[0].title[locale]}
                      </h2>
                      <p class="text-gray-600 mb-6 line-clamp-3">
                        {posts[0].excerpt[locale]}
                      </p>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 text-sm text-gray-500">
                          <span>{posts[0].author}</span>
                          <span>·</span>
                          <span>{posts[0].readTime} {t.minRead}</span>
                        </div>
                        <span class="text-purple-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                          {t.readMore}
                          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <a href={getBlogUrl(post.slug, locale)} class="group block">
      <article class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
        <div class="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title[locale]}
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-center gap-3 mb-3">
            <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
              {post.category}
            </span>
            <span class="text-gray-500 text-xs">
              {formatDate(post.date, locale)}
            </span>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
            {post.title[locale]}
          </h3>
          <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
            {post.excerpt[locale]}
          </p>
          <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <div class="flex items-center gap-2 text-xs text-gray-500">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.readTime} {t.minRead}</span>
            </div>
            <span class="text-purple-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
              {t.readMore}
              <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
