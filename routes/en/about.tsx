import { Layout } from "../../components/Layout.tsx";
import { UeberUns } from "../../components/pages/UeberUns.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function AboutEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <UeberUns locale={locale} />
    </Layout>
  );
}
