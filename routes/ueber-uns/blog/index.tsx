import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Blog } from "../../../components/pages/Blog.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function BlogDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Blog"
        description="Cashare Blog: Aktuelle Artikel zu Crowdlending, Finanzierung und Investitionen. Erfahren Sie mehr über Fintech und alternative Kredite in der Schweiz."
        canonicalPath="/ueber-uns/blog"
        locale={locale}
      />
      <Blog locale={locale} />
    </Layout>
  );
}
