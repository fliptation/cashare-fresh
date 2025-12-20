import type { Locale } from "../../lib/i18n/index.ts";

interface StatisticsProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Statistik",
    subtitle: "Cashare in Zahlen",
    heroText: "Transparenz ist einer unserer Kernwerte. Hier finden Sie aktuelle Kennzahlen unserer Plattform.",
    backLink: { label: "Zuruck zu Uber uns", href: "/ueber-uns" },
    updated: "Stand: Dezember 2024",
    keyMetrics: {
      title: "Kennzahlen auf einen Blick",
      items: [
        { value: "CHF 2.5 Mrd.", label: "Finanziertes Gesamtvolumen", description: "Seit Grundung 2008" },
        { value: "4'700+", label: "Finanzierte Projekte", description: "Privat- und KMU-Kredite" },
        { value: "5.8%", label: "Durchschnittliche Rendite", description: "Fur Anleger (historisch)" },
        { value: "<1%", label: "Ausfallquote", description: "Historische Kreditausfalle" },
      ],
    },
    volumeByYear: {
      title: "Finanzierungsvolumen nach Jahr",
      years: [
        { year: "2020", volume: "CHF 280 Mio." },
        { year: "2021", volume: "CHF 320 Mio." },
        { year: "2022", volume: "CHF 380 Mio." },
        { year: "2023", volume: "CHF 420 Mio." },
        { year: "2024", volume: "CHF 450 Mio." },
      ],
    },
    loanTypes: {
      title: "Kredite nach Typ",
      items: [
        { type: "Privatkredit", percentage: 45, color: "bg-blue-500" },
        { type: "KMU-Kredit", percentage: 35, color: "bg-green-500" },
        { type: "Hypothek", percentage: 20, color: "bg-purple-500" },
      ],
    },
    riskClasses: {
      title: "Risikokategorien",
      description: "Verteilung der finanzierten Kredite nach Risikostufe",
      items: [
        { class: "A (Tief)", percentage: 25, rate: "3.5-4.5%", color: "bg-green-500" },
        { class: "B (Mittel-Tief)", percentage: 35, rate: "4.5-5.5%", color: "bg-lime-500" },
        { class: "C (Mittel)", percentage: 25, rate: "5.5-7.0%", color: "bg-yellow-500" },
        { class: "D (Mittel-Hoch)", percentage: 12, rate: "7.0-9.0%", color: "bg-orange-500" },
        { class: "E (Hoch)", percentage: 3, rate: "9.0-12.0%", color: "bg-red-500" },
      ],
    },
    investors: {
      title: "Anlegerstatistik",
      items: [
        { label: "Registrierte Anleger", value: "12'500+" },
        { label: "Aktive Anleger", value: "8'200+" },
        { label: "Durchschnittliche Investition", value: "CHF 15'000" },
        { label: "Institutionelle Anleger", value: "45+" },
      ],
    },
    geography: {
      title: "Geografische Verteilung",
      description: "Herkunft der Kreditnehmer nach Kanton",
      items: [
        { region: "Zurich", percentage: 28 },
        { region: "Bern", percentage: 15 },
        { region: "Waadt", percentage: 12 },
        { region: "Aargau", percentage: 10 },
        { region: "St. Gallen", percentage: 8 },
        { region: "Ubrige", percentage: 27 },
      ],
    },
    performance: {
      title: "Historische Performance",
      description: "Durchschnittliche jahrliche Rendite fur Anleger",
      years: [
        { year: "2020", return: "5.2%" },
        { year: "2021", return: "5.5%" },
        { year: "2022", return: "5.7%" },
        { year: "2023", return: "5.9%" },
        { year: "2024", return: "5.8%" },
      ],
    },
    disclaimer: {
      title: "Hinweis",
      text: "Vergangene Renditen sind keine Garantie fur zukunftige Ergebnisse. Alle Angaben ohne Gewahr. Investitionen in Kredite sind mit Risiken verbunden, einschliesslich des moglichen Verlusts des eingesetzten Kapitals.",
    },
  },
  en: {
    title: "Statistics",
    subtitle: "Cashare by the Numbers",
    heroText: "Transparency is one of our core values. Here you will find current metrics from our platform.",
    backLink: { label: "Back to About Us", href: "/en/about" },
    updated: "As of: December 2024",
    keyMetrics: {
      title: "Key Metrics at a Glance",
      items: [
        { value: "CHF 2.5B", label: "Total Funded Volume", description: "Since founding in 2008" },
        { value: "4,700+", label: "Funded Projects", description: "Private and SME loans" },
        { value: "5.8%", label: "Average Return", description: "For investors (historical)" },
        { value: "<1%", label: "Default Rate", description: "Historical loan defaults" },
      ],
    },
    volumeByYear: {
      title: "Funding Volume by Year",
      years: [
        { year: "2020", volume: "CHF 280M" },
        { year: "2021", volume: "CHF 320M" },
        { year: "2022", volume: "CHF 380M" },
        { year: "2023", volume: "CHF 420M" },
        { year: "2024", volume: "CHF 450M" },
      ],
    },
    loanTypes: {
      title: "Loans by Type",
      items: [
        { type: "Personal Loan", percentage: 45, color: "bg-blue-500" },
        { type: "SME Loan", percentage: 35, color: "bg-green-500" },
        { type: "Mortgage", percentage: 20, color: "bg-purple-500" },
      ],
    },
    riskClasses: {
      title: "Risk Categories",
      description: "Distribution of funded loans by risk level",
      items: [
        { class: "A (Low)", percentage: 25, rate: "3.5-4.5%", color: "bg-green-500" },
        { class: "B (Medium-Low)", percentage: 35, rate: "4.5-5.5%", color: "bg-lime-500" },
        { class: "C (Medium)", percentage: 25, rate: "5.5-7.0%", color: "bg-yellow-500" },
        { class: "D (Medium-High)", percentage: 12, rate: "7.0-9.0%", color: "bg-orange-500" },
        { class: "E (High)", percentage: 3, rate: "9.0-12.0%", color: "bg-red-500" },
      ],
    },
    investors: {
      title: "Investor Statistics",
      items: [
        { label: "Registered Investors", value: "12,500+" },
        { label: "Active Investors", value: "8,200+" },
        { label: "Average Investment", value: "CHF 15,000" },
        { label: "Institutional Investors", value: "45+" },
      ],
    },
    geography: {
      title: "Geographic Distribution",
      description: "Origin of borrowers by canton",
      items: [
        { region: "Zurich", percentage: 28 },
        { region: "Bern", percentage: 15 },
        { region: "Vaud", percentage: 12 },
        { region: "Aargau", percentage: 10 },
        { region: "St. Gallen", percentage: 8 },
        { region: "Other", percentage: 27 },
      ],
    },
    performance: {
      title: "Historical Performance",
      description: "Average annual return for investors",
      years: [
        { year: "2020", return: "5.2%" },
        { year: "2021", return: "5.5%" },
        { year: "2022", return: "5.7%" },
        { year: "2023", return: "5.9%" },
        { year: "2024", return: "5.8%" },
      ],
    },
    disclaimer: {
      title: "Disclaimer",
      text: "Past returns are not a guarantee of future results. All information without warranty. Investments in loans carry risks, including the possible loss of invested capital.",
    },
  },
  fr: {
    title: "Statistiques",
    subtitle: "Cashare en chiffres",
    heroText: "La transparence est l'une de nos valeurs fondamentales. Vous trouverez ici les indicateurs actuels de notre plateforme.",
    backLink: { label: "Retour a A propos", href: "/fr/a-propos" },
    updated: "Mise a jour: Decembre 2024",
    keyMetrics: {
      title: "Indicateurs cles",
      items: [
        { value: "CHF 2.5 Mrd.", label: "Volume total finance", description: "Depuis la fondation en 2008" },
        { value: "4'700+", label: "Projets finances", description: "Credits prives et PME" },
        { value: "5.8%", label: "Rendement moyen", description: "Pour les investisseurs (historique)" },
        { value: "<1%", label: "Taux de defaut", description: "Defauts de credit historiques" },
      ],
    },
    volumeByYear: {
      title: "Volume de financement par annee",
      years: [
        { year: "2020", volume: "CHF 280 Mio." },
        { year: "2021", volume: "CHF 320 Mio." },
        { year: "2022", volume: "CHF 380 Mio." },
        { year: "2023", volume: "CHF 420 Mio." },
        { year: "2024", volume: "CHF 450 Mio." },
      ],
    },
    loanTypes: {
      title: "Credits par type",
      items: [
        { type: "Credit prive", percentage: 45, color: "bg-blue-500" },
        { type: "Credit PME", percentage: 35, color: "bg-green-500" },
        { type: "Hypotheque", percentage: 20, color: "bg-purple-500" },
      ],
    },
    riskClasses: {
      title: "Categories de risque",
      description: "Repartition des credits finances par niveau de risque",
      items: [
        { class: "A (Faible)", percentage: 25, rate: "3.5-4.5%", color: "bg-green-500" },
        { class: "B (Moyen-Faible)", percentage: 35, rate: "4.5-5.5%", color: "bg-lime-500" },
        { class: "C (Moyen)", percentage: 25, rate: "5.5-7.0%", color: "bg-yellow-500" },
        { class: "D (Moyen-Eleve)", percentage: 12, rate: "7.0-9.0%", color: "bg-orange-500" },
        { class: "E (Eleve)", percentage: 3, rate: "9.0-12.0%", color: "bg-red-500" },
      ],
    },
    investors: {
      title: "Statistiques des investisseurs",
      items: [
        { label: "Investisseurs inscrits", value: "12'500+" },
        { label: "Investisseurs actifs", value: "8'200+" },
        { label: "Investissement moyen", value: "CHF 15'000" },
        { label: "Investisseurs institutionnels", value: "45+" },
      ],
    },
    geography: {
      title: "Repartition geographique",
      description: "Origine des emprunteurs par canton",
      items: [
        { region: "Zurich", percentage: 28 },
        { region: "Berne", percentage: 15 },
        { region: "Vaud", percentage: 12 },
        { region: "Argovie", percentage: 10 },
        { region: "Saint-Gall", percentage: 8 },
        { region: "Autres", percentage: 27 },
      ],
    },
    performance: {
      title: "Performance historique",
      description: "Rendement annuel moyen pour les investisseurs",
      years: [
        { year: "2020", return: "5.2%" },
        { year: "2021", return: "5.5%" },
        { year: "2022", return: "5.7%" },
        { year: "2023", return: "5.9%" },
        { year: "2024", return: "5.8%" },
      ],
    },
    disclaimer: {
      title: "Avertissement",
      text: "Les rendements passes ne garantissent pas les resultats futurs. Toutes les informations sont sans garantie. Les investissements en credits comportent des risques, y compris la perte possible du capital investi.",
    },
  },
};

export function Statistics({ locale }: StatisticsProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-blue-100 max-w-2xl mx-auto mb-4">{t.heroText}</p>
            <p class="text-sm text-blue-200">{t.updated}</p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.keyMetrics.title}</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.keyMetrics.items.map((metric, index) => (
              <div key={index} class="text-center p-6 bg-gray-50 rounded-2xl">
                <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div class="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div class="text-sm text-gray-500">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume by Year */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.volumeByYear.title}</h2>
          <div class="space-y-4">
            {t.volumeByYear.years.map((item, index) => (
              <div key={index} class="flex items-center gap-4">
                <div class="w-16 font-semibold text-gray-900">{item.year}</div>
                <div class="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-end pr-3"
                    style={{ width: `${(parseInt(item.volume.replace(/[^\d]/g, "")) / 450) * 100}%` }}
                  >
                    <span class="text-white text-sm font-semibold">{item.volume}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types & Risk Classes */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12">
            {/* Loan Types */}
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-8">{t.loanTypes.title}</h2>
              <div class="space-y-4">
                {t.loanTypes.items.map((item, index) => (
                  <div key={index}>
                    <div class="flex justify-between mb-1">
                      <span class="text-gray-700">{item.type}</span>
                      <span class="font-semibold">{item.percentage}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                      <div class={`h-3 rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Classes */}
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-2">{t.riskClasses.title}</h2>
              <p class="text-gray-600 text-sm mb-8">{t.riskClasses.description}</p>
              <div class="space-y-3">
                {t.riskClasses.items.map((item, index) => (
                  <div key={index} class="flex items-center gap-4">
                    <div class={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <div class="flex-1">
                      <div class="flex justify-between">
                        <span class="text-gray-700">{item.class}</span>
                        <span class="text-gray-500 text-sm">{item.rate}</span>
                      </div>
                    </div>
                    <div class="w-16 text-right font-semibold">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Statistics */}
      <section class="py-20 bg-blue-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-16">{t.investors.title}</h2>
          <div class="grid md:grid-cols-4 gap-8">
            {t.investors.items.map((item, index) => (
              <div key={index} class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-white mb-2">{item.value}</div>
                <div class="text-blue-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Distribution */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-2 text-center">{t.geography.title}</h2>
          <p class="text-gray-600 text-center mb-12">{t.geography.description}</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            {t.geography.items.map((item, index) => (
              <div key={index} class="bg-white rounded-xl p-6 text-center shadow-sm">
                <div class="text-2xl font-bold text-blue-600 mb-1">{item.percentage}%</div>
                <div class="text-gray-700">{item.region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Performance */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-2 text-center">{t.performance.title}</h2>
          <p class="text-gray-600 text-center mb-12">{t.performance.description}</p>
          <div class="flex justify-center gap-4 flex-wrap">
            {t.performance.years.map((item, index) => (
              <div key={index} class="bg-green-50 rounded-xl p-6 text-center min-w-[120px]">
                <div class="text-sm text-gray-500 mb-1">{item.year}</div>
                <div class="text-2xl font-bold text-green-600">{item.return}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section class="py-12 bg-gray-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-gray-700 mb-1">{t.disclaimer.title}</h3>
              <p class="text-sm text-gray-500">{t.disclaimer.text}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
