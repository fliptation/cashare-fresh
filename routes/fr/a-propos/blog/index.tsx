import { Layout } from "../../../../components/Layout.tsx";
import { SeoHead } from "../../../../components/SeoHead.tsx";
import { Blog } from "../../../../components/pages/Blog.tsx";
import type { Locale } from "../../../../lib/i18n/index.ts";

export default function BlogFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/a-propos/blog">
      <SeoHead
        title="Blog"
        description="Blog Cashare: Articles actuels sur le crowdlending, le financement et les investissements. En savoir plus sur la fintech et les crédits alternatifs en Suisse."
        canonicalPath="/fr/a-propos/blog"
        locale={locale}
      />
      <Blog locale={locale} />
    </Layout>
  );
}
