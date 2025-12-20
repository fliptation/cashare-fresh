import { Layout } from "../../../components/Layout.tsx";
import { Rating } from "../../../components/pages/Rating.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function RatingFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <Rating locale={locale} />
    </Layout>
  );
}
