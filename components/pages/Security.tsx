import type { Locale } from "../../lib/i18n/index.ts";

interface SecurityProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Sicherheit",
    subtitle: "Ihre Sicherheit ist unsere hochste Prioritat!",
    heroText: "Jeder Kreditnehmer und Anleger wird personlich identifiziert, um Missbrauch zu verhindern.",
    backLink: { label: "Zur Startseite", href: "/" },
    sections: [
      {
        title: "Anlegerschutz",
        icon: "shield",
        items: [
          "Personliche Identifikation aller Parteien",
          "Bonitatsprufung der Kreditnehmer",
          "Kreditwurdigkeitsprufung uber renommierte Datenbanken",
          "Nur Kredite mit Rating bis 'C' werden gelistet",
          "Portfolio-Diversifikation uber mehrere Kreditnehmer",
          "Zahlungsabwicklung und Inkasso durch die Plattform",
        ],
      },
      {
        title: "Kreditnehmerschutz",
        icon: "user-shield",
        items: [
          "Personliche Identifikationsanforderungen",
          "Anonymitat wahrend des Auktionsprozesses",
          "Kreditnehmer legen ihren Maximalzins selbst fest",
          "Bonitatsprufungen verhindern Uberschuldung",
          "Zahlungsabwicklung durch Cashare",
        ],
      },
      {
        title: "Datenschutz",
        icon: "lock",
        items: [
          "Anonymitat wahrend Auktionen fur alle Parteien",
          "Personliche Daten werden nicht an Dritte weitergegeben",
          "Passworter sind Cashare-Mitarbeitern unbekannt",
          "Daten sind vor unbefugtem Zugriff geschutzt",
        ],
      },
      {
        title: "Plattform-Sicherheit",
        icon: "server",
        items: [
          "256-Bit SSL-Verschlusselung",
          "Obligatorische personliche Registrierung und Identifikation",
          "Server mit Firewalls, Anti-Phishing und Antivirus geschutzt",
        ],
      },
    ],
    regulation: {
      title: "Regulierung & Compliance",
      items: [
        { label: "Datenschutz", value: "Registriert beim EDOB (Eidg. Datenschutzbeauftragter)" },
        { label: "Selbstregulierung", value: "Mitglied der SRO Polyreg" },
        { label: "Konsumkredit", value: "Lizenzierter Konsumkreditanbieter" },
        { label: "Geldwaschegesetz", value: "Lizenziert nach Schweizer Geldwaschereigesetz" },
        { label: "Kantonale Lizenz", value: "Lizenziert durch Volkswirtschaftsdirektion Kanton Zug" },
      ],
    },
  },
  en: {
    title: "Security",
    subtitle: "Your security is our highest priority!",
    heroText: "Every borrower and investor is personally identified to prevent misuse.",
    backLink: { label: "To Homepage", href: "/en" },
    sections: [
      {
        title: "Investor Protection",
        icon: "shield",
        items: [
          "Personal identification of all parties",
          "Creditworthiness assessment of borrowers",
          "Credit rating checks using reputable databases",
          "Only loans rated up to 'C' are listed",
          "Portfolio diversification across multiple borrowers",
          "Payment processing and collection handled by platform",
        ],
      },
      {
        title: "Borrower Protection",
        icon: "user-shield",
        items: [
          "Personal identification requirements",
          "Anonymity maintained during auction process",
          "Borrowers set their own maximum interest rates",
          "Creditworthiness checks prevent over-indebtedness",
          "Payment processing managed by Cashare",
        ],
      },
      {
        title: "Data Protection",
        icon: "lock",
        items: [
          "Anonymity maintained during auctions for all parties",
          "Personal data not shared with third parties",
          "Passwords unknown to Cashare staff",
          "Data protected against unauthorized access",
        ],
      },
      {
        title: "Platform Security",
        icon: "server",
        items: [
          "256-bit SSL encryption",
          "Mandatory personal registration and identification",
          "Servers protected with firewalls, anti-phishing, and antivirus",
        ],
      },
    ],
    regulation: {
      title: "Regulation & Compliance",
      items: [
        { label: "Data Protection", value: "Registered with Swiss Federal Data Protection Commissioner" },
        { label: "Self-Regulation", value: "Member of SRO Polyreg" },
        { label: "Consumer Credit", value: "Licensed consumer credit provider" },
        { label: "Anti-Money Laundering", value: "Licensed under Swiss Money Laundering Act" },
        { label: "Cantonal License", value: "Licensed by Canton Zug's Economic Affairs Directorate" },
      ],
    },
  },
  fr: {
    title: "Securite",
    subtitle: "Votre securite est notre priorite absolue!",
    heroText: "Chaque emprunteur et investisseur est personnellement identifie pour prevenir les abus.",
    backLink: { label: "Vers l'accueil", href: "/fr" },
    sections: [
      {
        title: "Protection des investisseurs",
        icon: "shield",
        items: [
          "Identification personnelle de toutes les parties",
          "Evaluation de la solvabilite des emprunteurs",
          "Verification du credit via des bases de donnees reputees",
          "Seuls les prets notes jusqu'a 'C' sont listes",
          "Diversification du portefeuille sur plusieurs emprunteurs",
          "Traitement des paiements et recouvrement par la plateforme",
        ],
      },
      {
        title: "Protection des emprunteurs",
        icon: "user-shield",
        items: [
          "Exigences d'identification personnelle",
          "Anonymat maintenu pendant le processus d'enchere",
          "Les emprunteurs fixent leur taux d'interet maximum",
          "Les verifications de solvabilite empechent le surendettement",
          "Traitement des paiements gere par Cashare",
        ],
      },
      {
        title: "Protection des donnees",
        icon: "lock",
        items: [
          "Anonymat maintenu pendant les encheres pour toutes les parties",
          "Donnees personnelles non partagees avec des tiers",
          "Mots de passe inconnus du personnel Cashare",
          "Donnees protegees contre l'acces non autorise",
        ],
      },
      {
        title: "Securite de la plateforme",
        icon: "server",
        items: [
          "Cryptage SSL 256 bits",
          "Inscription et identification personnelles obligatoires",
          "Serveurs proteges par pare-feu, anti-phishing et antivirus",
        ],
      },
    ],
    regulation: {
      title: "Regulation & Conformite",
      items: [
        { label: "Protection des donnees", value: "Enregistre aupres du PFPDT" },
        { label: "Autoregulation", value: "Membre de SRO Polyreg" },
        { label: "Credit a la consommation", value: "Fournisseur agree de credit a la consommation" },
        { label: "Anti-blanchiment", value: "Licence selon la loi suisse sur le blanchiment" },
        { label: "Licence cantonale", value: "Licence du canton de Zoug" },
      ],
    },
  },
};

export function Security({ locale }: SecurityProps) {
  const t = content[locale];

  const icons: Record<string, string> = {
    shield: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    "user-shield": `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
    lock: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`,
    server: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,
  };

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-green-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-green-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-green-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Security Sections */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-8">
            {t.sections.map((section, index) => (
              <div key={index} class="bg-gray-50 rounded-2xl p-8">
                <div class="flex items-center gap-4 mb-6">
                  <div
                    class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600"
                    dangerouslySetInnerHTML={{ __html: icons[section.icon] }}
                  />
                  <h2 class="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul class="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} class="flex items-start gap-3">
                      <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulation Section */}
      <section class="py-20 bg-green-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-12">{t.regulation.title}</h2>
          <div class="grid md:grid-cols-2 gap-6">
            {t.regulation.items.map((item, index) => (
              <div key={index} class="bg-white/10 rounded-xl p-6">
                <div class="text-green-300 text-sm font-medium mb-2">{item.label}</div>
                <div class="text-white font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
