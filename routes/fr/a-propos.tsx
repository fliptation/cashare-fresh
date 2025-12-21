import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { UeberUns } from "../../components/pages/UeberUns.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function AProposFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="À propos"
        description="Cashare est la première plateforme de crowdlending en Suisse. Depuis 2008, nous connectons emprunteurs et investisseurs. En savoir plus sur notre entreprise."
        canonicalPath="/fr/a-propos"
        locale={locale}
      />
      <UeberUns locale={locale} />
    </Layout>
  );
}
