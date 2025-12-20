import { Layout } from "../../../../components/Layout.tsx";
import { Blog } from "../../../../components/pages/Blog.tsx";
import type { Locale } from "../../../../lib/i18n/index.ts";

export default function BlogFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <Blog locale={locale} />
    </Layout>
  );
}
