import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Rating } from "../../../components/pages/Rating.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function RatingFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/a-propos/rating">
      <SeoHead
        title="Rating"
        description="Notation de crédit Cashare: Évaluation transparente de la solvabilité des emprunteurs. Découvrez comment fonctionne notre système de notation."
        canonicalPath="/fr/a-propos/rating"
        locale={locale}
      />
      <Rating locale={locale} />
    </Layout>
  );
}
