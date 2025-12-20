import { Head } from "$fresh/runtime.ts";
import { Layout } from "../components/Layout.tsx";

const financeEmojis = ["💰", "💵", "💶", "💷", "💴", "💳", "📈", "🏦", "💎", "🤑", "💸", "📊"];

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Seite nicht gefunden | Cashare</title>
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <Layout locale="de" currentPath="/404">
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
              <h1 class="error-page__title">Seite nicht gefunden</h1>
              <p class="error-page__description">
                Ups! Diese Seite ist uns leider entwischt. Aber keine Sorge,
                Ihr Geld ist bei uns sicher.
              </p>
              <div class="error-page__actions">
                <a href="/" class="btn btn--primary">
                  Zur Startseite
                </a>
                <a href="/kontakt" class="btn btn--outline">
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
