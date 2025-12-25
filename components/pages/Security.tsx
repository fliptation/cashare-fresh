import type { Locale } from "../../lib/i18n/index.ts";

interface SecurityProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Sicherheit",
    subtitle: "Ihre Sicherheit ist unsere höchste Priorität!",
    heroText: "Jeder Kreditnehmer und jeder Investor ist persönlich identifiziert, so dass ein Missbrauch verhindert werden kann",
    sections: [
      {
        title: "Sicherheit für Investoren",
        icon: "shield",
        items: [
          "Persönliche Identifikation aller Parteien",
          "Kreditfähigkeitsprüfung der Darlehensnehmer",
          "Bonitätsprüfung mit Daten von renommierten Datenbanken",
          'Aufschaltung nur bis Rating „C"',
          "Diversifikation über verschiedene Darlehensnehmer",
          "Abwicklung aller Zahlungen und notwendigen Inkassomassnahmen",
        ],
      },
      {
        title: "Sicherheit für Kreditnehmer",
        icon: "user-shield",
        items: [
          "Persönliche Identifikation aller Parteien",
          "Anonymität",
          "Maximalen Zinssatz selber festlegen",
          "Kreditfähigkeitsprüfung schützt vor Überschuldung",
          "Abwicklung der Zahlungen",
        ],
      },
      {
        title: "Datenschutz",
        icon: "lock",
        items: [
          "Alle Parteien bleiben während der Auktion Anonym",
          "Cashare gibt Ihre personenbezogenen Daten nicht an Dritte weiter",
          "Ihr Passwort ist den Mitarbeitern von Cashare nicht bekannt. Cashare wird nie nach Ihrem Passwort fragen.",
          "Cashare versichert Ihnen, dass Ihre Daten gegen unbefugten Zugriff durch Dritte geschützt sind.",
        ],
      },
      {
        title: "Plattformsicherheit",
        icon: "server",
        items: [
          'Die Cashare-Plattform wird mit einer starken „256bit SSL" (Secure Sockets Layer) Verschlüsselung verschlüsselt',
          "Um eine sichere und faire Abwicklung zwischen den Parteien zu gewährleisten, müssen sich alle Benutzer persönlich registrieren und identifizieren",
          "Die Server sind mit den neuesten Firewalls, Anti-Phishing- und Virenschutzprogrammen geschützt",
        ],
      },
    ],
    regulation: {
      title: "Regulierung & Compliance",
      items: [
        { label: "Datenschutz", value: "Registriert beim EDOB (Eidg. Datenschutzbeauftragter)" },
        { label: "Selbstregulierung", value: "Mitglied der SRO Polyreg" },
        { label: "Konsumkredit", value: "Lizenzierter Konsumkreditanbieter" },
        { label: "Geldwäschegesetz", value: "Lizenziert nach Schweizer Geldwäschereigesetz" },
        { label: "Kantonale Lizenz", value: "Lizenziert durch Volkswirtschaftsdirektion Kanton Zug" },
      ],
    },
  },
  en: {
    title: "Security",
    subtitle: "Your security is our highest priority!",
    heroText: "Every borrower and investor is personally identified to prevent misuse.",
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
    title: "Sécurité",
    subtitle: "Votre sécurité est notre priorité absolue!",
    heroText: "Chaque emprunteur et investisseur est personnellement identifié pour prévenir les abus.",
    sections: [
      {
        title: "Protection des investisseurs",
        icon: "shield",
        items: [
          "Identification personnelle de toutes les parties",
          "Évaluation de la solvabilité des emprunteurs",
          "Vérification du crédit via des bases de données réputées",
          "Seuls les prêts notés jusqu'à 'C' sont listés",
          "Diversification du portefeuille sur plusieurs emprunteurs",
          "Traitement des paiements et recouvrement par la plateforme",
        ],
      },
      {
        title: "Protection des emprunteurs",
        icon: "user-shield",
        items: [
          "Exigences d'identification personnelle",
          "Anonymat maintenu pendant le processus d'enchère",
          "Les emprunteurs fixent leur taux d'intérêt maximum",
          "Les vérifications de solvabilité empêchent le surendettement",
          "Traitement des paiements géré par Cashare",
        ],
      },
      {
        title: "Protection des données",
        icon: "lock",
        items: [
          "Anonymat maintenu pendant les enchères pour toutes les parties",
          "Données personnelles non partagées avec des tiers",
          "Mots de passe inconnus du personnel Cashare",
          "Données protégées contre l'accès non autorisé",
        ],
      },
      {
        title: "Sécurité de la plateforme",
        icon: "server",
        items: [
          "Cryptage SSL 256 bits",
          "Inscription et identification personnelles obligatoires",
          "Serveurs protégés par pare-feu, anti-phishing et antivirus",
        ],
      },
    ],
    regulation: {
      title: "Régulation & Conformité",
      items: [
        { label: "Protection des données", value: "Enregistré auprès du PFPDT" },
        { label: "Autorégulation", value: "Membre de SRO Polyreg" },
        { label: "Crédit à la consommation", value: "Fournisseur agréé de crédit à la consommation" },
        { label: "Anti-blanchiment", value: "Licence selon la loi suisse sur le blanchiment" },
        { label: "Licence cantonale", value: "Licence du canton de Zoug" },
      ],
    },
  },
};

export function Security({ locale }: SecurityProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="subpage-hero">
        <div class="subpage-hero__container">
          <h1 class="subpage-hero__title">{t.title}</h1>
          <p class="subpage-hero__subtitle">{t.subtitle}</p>
          <p class="subpage-hero__subtitle">{t.heroText}</p>
        </div>
      </section>

      {/* Security Sections */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="two-col">
            {t.sections.map((section, index) => (
              <div key={index} class="two-col__item">
                <h2 class="two-col__title">{section.title}</h2>
                <ul class="check-list">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} class="check-list__item">
                      <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="check-list__text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulation Section */}
      <section class="subpage-section subpage-section--primary">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.regulation.title}</h2>
          </div>
          <div class="two-col">
            {t.regulation.items.map((item, index) => (
              <div key={index} class="regulation-item">
                <span class="regulation-item__label">{item.label}</span>
                <span class="regulation-item__value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
