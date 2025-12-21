import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { HowItWorks } from "../../components/pages/HowItWorks.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function CommentCaMarcheFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Comment ça marche"
        description="Découvrez comment fonctionne le crowdlending chez Cashare. Processus simple pour emprunteurs et investisseurs sur la plateforme suisse."
        canonicalPath="/fr/comment-ca-marche"
        locale={locale}
      />
      <HowItWorks locale={locale} />
    </Layout>
  );
}
