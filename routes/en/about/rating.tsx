import { Layout } from "../../../components/Layout.tsx";
import { Rating } from "../../../components/pages/Rating.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function RatingEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <Rating locale={locale} />
    </Layout>
  );
}
