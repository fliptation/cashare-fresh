import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { KmuKredit } from "../../components/pages/KmuKredit.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function KmuKreditDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="KMU-Kredit beantragen"
        description="Firmenkredit für Schweizer KMU von CHF 50'000 bis CHF 5 Mio. Flexible Finanzierung für Ihr Unternehmen. Schnelle Bearbeitung bei Cashare."
        canonicalPath="/kredit-beantragen/kmu-kredit"
        locale={locale}
      />
      <KmuKredit locale={locale} />
    </Layout>
  );
}
