import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import { t, type Locale } from "../lib/i18n/index.ts";

const financeEmojis = ["💰", "💵", "💶", "💷", "💴", "💳", "📈", "🏦", "💎", "🤑", "💸", "📊"];

/**
 * Detect locale from URL path
 */
function detectLocaleFromPath(url: URL): Locale {
  const path = url.pathname;
  if (path.startsWith("/en/") || path === "/en") return "en";
  if (path.startsWith("/fr/") || path === "/fr") return "fr";
  return "de";
}

export default function Error404(props: PageProps) {
  const locale = detectLocaleFromPath(props.url);
  const localePath = locale === "de" ? "" : `/${locale}`;

  return (
    <>
      <Head>
        <title>{t(locale, "error", "pageTitle")}</title>
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <Layout locale={locale} currentPath="/404">
        <section class="error-page error-page--animated">
          <div class="error-page__emoji-vortex">
            {/* Multiple rings of emojis spiraling inward */}
            {[...Array(3)].map((_, ringIndex) =>
              financeEmojis.map((emoji, i) => (
                <span
                  key={`${ringIndex}-${i}`}
                  class={`error-page__emoji error-page__emoji--ring-${ringIndex + 1}`}
                  style={`--i: ${i}; --total: ${financeEmojis.length}; --delay: ${(i * 0.15) + (ringIndex * 0.5)}s;`}
                >
                  {emoji}
                </span>
              ))
            )}
          </div>

          <div class="error-page__container error-page__container--centered">
            <div class="error-page__content error-page__content--centered">
              <div class="error-page__code-wrapper">
                <span class="error-page__code error-page__code--animated">4</span>
                <span class="error-page__code error-page__code--emoji">🪙</span>
                <span class="error-page__code error-page__code--animated">4</span>
              </div>
              <h1 class="error-page__title">{t(locale, "error", "title")}</h1>
              <p class="error-page__description">
                {t(locale, "error", "description")}
              </p>
              <div class="error-page__actions">
                <a href={localePath || "/"} class="btn btn--primary">
                  {t(locale, "error", "backHome")}
                </a>
                <a href={`${localePath}/kontakt`} class="btn btn--outline">
                  {t(locale, "error", "contact")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
