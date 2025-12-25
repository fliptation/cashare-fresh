import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Rating } from "../../../components/pages/Rating.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function RatingEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/about/rating">
      <SeoHead
        title="Rating"
        description="Cashare credit rating: Transparent creditworthiness assessment for borrowers. Learn how our rating system works."
        canonicalPath="/en/about/rating"
        locale={locale}
      />
      <Rating locale={locale} />
    </Layout>
  );
}
