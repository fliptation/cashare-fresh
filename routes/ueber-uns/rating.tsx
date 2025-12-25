import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Rating } from "../../components/pages/Rating.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function RatingDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/ueber-uns/rating">
      <SeoHead
        title="Rating"
        description="Cashare Kredit-Rating: Transparente Bonitätsbewertung für Kreditnehmer. Erfahren Sie, wie unser Rating-System funktioniert."
        canonicalPath="/ueber-uns/rating"
        locale={locale}
      />
      <Rating locale={locale} />
    </Layout>
  );
}
