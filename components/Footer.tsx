import type { Locale } from "../lib/i18n/index.ts";

interface FooterProps {
  locale: Locale;
}

const footerContent = {
  de: {
    company: "Cashare AG",
    address: "Cashare AG\nBösch 73\n6331 Hünenberg\nSchweiz",
    phone: "+41 41 558 48 88",
    email: "support@cashare.ch",
    newsletter: {
      title: "Newsletter",
      description:
        "Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten und Angeboten",
      placeholder: "Ihre E-Mail-Adresse",
      button: "Abonnieren",
    },
    sections: {
      products: {
        title: "Produkte",
        links: [
          { label: "Privatkredit", href: "/kredit-beantragen/privatkredit" },
          { label: "KMU Kredit", href: "/kredit-beantragen/kmu-kredit" },
          { label: "Hypothek", href: "/kredit-beantragen/hypotheken" },
          { label: "Investieren", href: "/investieren" },
        ],
      },
      company: {
        title: "Unternehmen",
        links: [
          { label: "Über uns", href: "/ueber-uns" },
          { label: "Crowdlending", href: "/ueber-uns/crowdlending" },
          { label: "Statistik", href: "/ueber-uns/statistik" },
          { label: "Jobs", href: "/ueber-uns/jobs" },
          { label: "Partner", href: "/ueber-uns/partner" },
          { label: "Blog", href: "/ueber-uns/blog" },
          { label: "Presse", href: "/ueber-uns/presse" },
        ],
      },
      rates: {
        title: "Raten & Gebühren",
        links: [
          { label: "Kreditnehmer", isLabel: true },
          {
            label: "Privatkredit",
            href:
              "https://support.cashare.ch/hc/de/sections/360003965960-Geb%C3%BChren",
          },
          {
            label: "KMU-Kredit",
            href:
              "https://support.cashare.ch/hc/de/sections/360004042840-Geb%C3%BChren",
          },
          {
            label: "Immobilien-Darlehen",
            href:
              "https://support.cashare.ch/hc/de/articles/360013844700-Wie-hoch-sind-die-Geb%C3%BChren-bei-einem-Cashare-Immobiliendarlehen",
          },
          {
            label: "Mezzanine",
            href:
              "https://support.cashare.ch/hc/de/articles/360013908899-Wie-hoch-sind-die-Geb%C3%BChren-bei-Mezzanine-Finanzierung-mit-Cashare",
          },
          { label: "Anleger", isLabel: true },
          {
            label: "Privat Anleger",
            href:
              "https://support.cashare.ch/hc/de/articles/360013859920-Wie-hoch-ist-die-Plattformgeb%C3%BChr",
          },
          {
            label: "Institutionelle Anleger",
            href:
              "https://support.cashare.ch/hc/de/articles/360014302880-Wie-hoch-ist-die-Plattformgeb%C3%BChr",
          },
        ],
      },
      supportLegal: {
        title: "",
        links: [
          { label: "Support", isLabel: true },
          { label: "FAQ/Hilfe", href: "https://support.cashare.ch/hc/de" },
          {
            label: "Kontakt",
            href: "https://support.cashare.ch/hc/de/requests/new",
          },
          { label: "Rechtliches", isLabel: true },
          { label: "AGB", href: "/agb" },
          { label: "Datenschutzerklärung", href: "/datenschutzerklaerung" },
          { label: "Sicherheit", href: "/sicherheit" },
          { label: "Impressum", href: "/impressum" },
        ],
      },
    },
    languages: {
      title: "Sprache",
      de: "Deutsch",
      en: "English",
      fr: "Français",
    },
    regulatory: {
      edob:
        "Die Datenbank von Cashare ist beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) registriert.",
      confederation: {
        de: "Schweizerische Eidgenossenschaft",
        fr: "Confédération suisse",
        it: "Confederazione Svizzera",
        rm: "Confederaziun svizra",
      },
      edobTitle:
        "Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)",
      sroPolyreg: "Cashare ist Mitglied der",
      sroPolyregLink: "SRO Polyreg",
      sroPolyregUrl: "https://www.polyreg.ch/",
      finma:
        "und ein genehmigter Finanzintermediär im Sinne von Artikel 2, Absatz 3ff des Schweizer Geldwäschereigesetzes. Cashare wurde die Lizenz für die Gewährung von Verbraucherkrediten des Direktionssekretariats der",
      wirtschaftsdirektion: "Nationalen Wirtschaftsdirektion",
      wirtschaftsdirektionUrl:
        "https://www.zg.ch/behoerden/volkswirtschaftsdirektion",
      zugSuffix: "des Kantons Zug erteilt.",
    },
    copyright: "© 2008-2026 Cashare AG. Alle Rechte vorbehalten.",
  },
  en: {
    company: "Cashare AG",
    address: "Cashare AG\nBösch 73\n6331 Hünenberg\nSwitzerland",
    phone: "+41 41 558 48 88",
    email: "support@cashare.ch",
    newsletter: {
      title: "Newsletter",
      description: "Stay up to date with the latest news and offers",
      placeholder: "Your email address",
      button: "Subscribe",
    },
    sections: {
      products: {
        title: "Products",
        links: [
          {
            label: "Personal Loan",
            href: "/en/apply-for-credit/personal-loan",
          },
          { label: "SME Loan", href: "/en/apply-for-credit/sme-loan" },
          { label: "Mortgage", href: "/en/apply-for-credit/mortgage" },
          { label: "Invest", href: "/en/invest" },
        ],
      },
      company: {
        title: "Company",
        links: [
          { label: "About Us", href: "/en/about" },
          { label: "Crowdlending", href: "/en/about/crowdlending" },
          { label: "Statistics", href: "/en/about/statistics" },
          { label: "Jobs", href: "/en/about/jobs" },
          { label: "Partners", href: "/en/about/partners" },
          { label: "Blog", href: "/en/about/blog" },
          { label: "Press", href: "/en/about/press" },
        ],
      },
      rates: {
        title: "Rates & Fees",
        links: [
          { label: "Borrowers", isLabel: true },
          {
            label: "Personal Loan",
            href:
              "https://support.cashare.ch/hc/de/sections/360003965960-Geb%C3%BChren",
          },
          {
            label: "SME Loan",
            href:
              "https://support.cashare.ch/hc/de/sections/360004042840-Geb%C3%BChren",
          },
          {
            label: "Real Estate Loan",
            href:
              "https://support.cashare.ch/hc/de/articles/360013844700-Wie-hoch-sind-die-Geb%C3%BChren-bei-einem-Cashare-Immobiliendarlehen",
          },
          {
            label: "Mezzanine",
            href:
              "https://support.cashare.ch/hc/de/articles/360013908899-Wie-hoch-sind-die-Geb%C3%BChren-bei-Mezzanine-Finanzierung-mit-Cashare",
          },
          { label: "Investors", isLabel: true },
          {
            label: "Private Investors",
            href:
              "https://support.cashare.ch/hc/de/articles/360013859920-Wie-hoch-ist-die-Plattformgeb%C3%BChr",
          },
          {
            label: "Institutional Investors",
            href:
              "https://support.cashare.ch/hc/de/articles/360014302880-Wie-hoch-ist-die-Plattformgeb%C3%BChr",
          },
        ],
      },
      supportLegal: {
        title: "",
        links: [
          { label: "Support", isLabel: true },
          { label: "FAQ/Help", href: "https://support.cashare.ch/hc/en-us" },
          {
            label: "Contact",
            href: "https://support.cashare.ch/hc/en-us/requests/new",
          },
          { label: "Legal", isLabel: true },
          { label: "Terms", href: "/en/terms" },
          { label: "Privacy Policy", href: "/en/privacy" },
          { label: "Security", href: "/en/security" },
          { label: "Imprint", href: "/en/imprint" },
        ],
      },
    },
    languages: {
      title: "Language",
      de: "Deutsch",
      en: "English",
      fr: "Français",
    },
    regulatory: {
      edob:
        "The Cashare database is registered with the Federal Data Protection and Information Commissioner (FDPIC).",
      confederation: {
        de: "Schweizerische Eidgenossenschaft",
        fr: "Confédération suisse",
        it: "Confederazione Svizzera",
        rm: "Confederaziun svizra",
      },
      edobTitle: "Federal Data Protection and Information Commissioner (FDPIC)",
      sroPolyreg: "Cashare is a member of",
      sroPolyregLink: "SRO Polyreg",
      sroPolyregUrl: "https://www.polyreg.ch/",
      finma:
        "and an approved financial intermediary within the meaning of Article 2, Paragraph 3ff of the Swiss Anti-Money Laundering Act. Cashare was granted the license for consumer credit by the Directorate Secretariat of the",
      wirtschaftsdirektion: "National Economic Directorate",
      wirtschaftsdirektionUrl:
        "https://www.zg.ch/behoerden/volkswirtschaftsdirektion",
      zugSuffix: "of the Canton of Zug.",
    },
    copyright: "© 2008-2026 Cashare AG. All rights reserved.",
  },
  fr: {
    company: "Cashare AG",
    address: "Cashare AG\nBösch 73\n6331 Hünenberg\nSuisse",
    phone: "+41 41 558 48 88",
    email: "support@cashare.ch",
    newsletter: {
      title: "Newsletter",
      description: "Restez informé des dernières nouvelles et offres",
      placeholder: "Votre adresse e-mail",
      button: "S'abonner",
    },
    sections: {
      products: {
        title: "Produits",
        links: [
          {
            label: "Crédit privé",
            href: "/fr/demander-un-credit/credit-prive",
          },
          { label: "Crédit PME", href: "/fr/demander-un-credit/credit-pme" },
          { label: "Hypothèque", href: "/fr/demander-un-credit/hypotheque" },
          { label: "Investir", href: "/fr/investir" },
        ],
      },
      company: {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "/fr/a-propos" },
          { label: "Crowdlending", href: "/fr/a-propos/crowdlending" },
          { label: "Statistiques", href: "/fr/a-propos/statistiques" },
          { label: "Emplois", href: "/fr/a-propos/emplois" },
          { label: "Partenaires", href: "/fr/a-propos/partenaires" },
          { label: "Blog", href: "/fr/a-propos/blog" },
          { label: "Presse", href: "/fr/a-propos/presse" },
        ],
      },
      rates: {
        title: "Taux & Frais",
        links: [
          { label: "Emprunteurs", isLabel: true },
          {
            label: "Crédit privé",
            href:
              "https://support.cashare.ch/hc/de/sections/360003965960-Geb%C3%BChren",
          },
          {
            label: "Crédit PME",
            href:
              "https://support.cashare.ch/hc/de/sections/360004042840-Geb%C3%BChren",
          },
          {
            label: "Prêt immobilier",
            href:
              "https://support.cashare.ch/hc/de/articles/360013844700-Wie-hoch-sind-die-Geb%C3%BChren-bei-einem-Cashare-Immobiliendarlehen",
          },
          {
            label: "Mezzanine",
            href:
              "https://support.cashare.ch/hc/de/articles/360013908899-Wie-hoch-sind-die-Geb%C3%BChren-bei-Mezzanine-Finanzierung-mit-Cashare",
          },
          { label: "Investisseurs", isLabel: true },
          {
            label: "Investisseurs privés",
            href:
              "https://support.cashare.ch/hc/de/articles/360013859920-Wie-hoch-ist-die-Plattformgeb%C3%BChr",
          },
          {
            label: "Investisseurs institutionnels",
            href:
              "https://support.cashare.ch/hc/de/articles/360014302880-Wie-hoch-ist-die-Plattformgeb%C3%BChr",
          },
        ],
      },
      supportLegal: {
        title: "",
        links: [
          { label: "Support", isLabel: true },
          { label: "FAQ/Aide", href: "https://support.cashare.ch/hc/fr" },
          {
            label: "Contact",
            href: "https://support.cashare.ch/hc/fr/requests/new",
          },
          { label: "Légal", isLabel: true },
          { label: "CGV", href: "/fr/cgv" },
          { label: "Confidentialité", href: "/fr/confidentialite" },
          { label: "Sécurité", href: "/fr/securite" },
          { label: "Mentions légales", href: "/fr/mentions-legales" },
        ],
      },
    },
    languages: {
      title: "Langue",
      de: "Deutsch",
      en: "English",
      fr: "Français",
    },
    regulatory: {
      edob:
        "La base de données de Cashare est enregistrée auprès du Préposé fédéral à la protection des données et à la transparence (PFPDT).",
      confederation: {
        de: "Schweizerische Eidgenossenschaft",
        fr: "Confédération suisse",
        it: "Confederazione Svizzera",
        rm: "Confederaziun svizra",
      },
      edobTitle:
        "Préposé fédéral à la protection des données et à la transparence (PFPDT)",
      sroPolyreg: "Cashare est membre de",
      sroPolyregLink: "SRO Polyreg",
      sroPolyregUrl: "https://www.polyreg.ch/",
      finma:
        "et un intermédiaire financier agréé au sens de l'article 2, alinéa 3ss de la loi suisse sur le blanchiment d'argent. Cashare a obtenu la licence pour l'octroi de crédits à la consommation du Secrétariat de direction de la",
      wirtschaftsdirektion: "Direction nationale de l'économie",
      wirtschaftsdirektionUrl:
        "https://www.zg.ch/behoerden/volkswirtschaftsdirektion",
      zugSuffix: "du canton de Zoug.",
    },
    copyright: "© 2008-2026 Cashare AG. Tous droits réservés.",
  },
};

export function Footer({ locale }: FooterProps) {
  const content = footerContent[locale];
  const localePath = locale === "de" ? "" : `/${locale}`;

  return (
    <footer class="footer">
      {/* Decorative gradient background */}
      <div class="footer__gradient"></div>

      <div class="footer__container">
        {/* Trust Badges */}
        <div class="footer__trust">
          {/* First row: 4 badges */}
          <div class="footer__trust-row">
            <div class="footer__trust-item">
              <div class="footer__trust-icon footer__trust-icon--swiss">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect
                    x="4"
                    y="4"
                    width="24"
                    height="24"
                    rx="2"
                    fill="#dc2626"
                  />
                  <path d="M16 8v16M8 16h16" stroke="white" stroke-width="4" />
                </svg>
              </div>
              <div class="footer__trust-content">
                <span class="footer__trust-title">
                  100% Schweizer Unternehmen
                </span>
                <span class="footer__trust-text">
                  Hauptsitz in Hünenberg ZG
                </span>
              </div>
            </div>

            <div class="footer__trust-item">
              <div class="footer__trust-icon footer__trust-icon--security">
                <svg viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 3L4 8v7c0 7.5 5.1 14.5 12 16 6.9-1.5 12-8.5 12-16V8L16 3z"
                    fill="#22c55e"
                  />
                  <path
                    d="M13 16l2 2 4-4"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="footer__trust-content">
                <span class="footer__trust-title">SSL-verschlüsselt</span>
                <span class="footer__trust-text">
                  Höchste Sicherheitsstandards
                </span>
              </div>
            </div>

            <div class="footer__trust-item">
              <div class="footer__trust-icon footer__trust-icon--data">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect
                    x="6"
                    y="10"
                    width="20"
                    height="16"
                    rx="2"
                    fill="#0ea5e9"
                  />
                  <path d="M10 6h12v4H10z" fill="#0ea5e9" />
                  <circle cx="16" cy="18" r="3" fill="white" />
                  <path d="M16 20v3" stroke="white" stroke-width="2" />
                </svg>
              </div>
              <div class="footer__trust-content">
                <span class="footer__trust-title">Daten in der Schweiz</span>
                <span class="footer__trust-text">DSGVO & DSG konform</span>
              </div>
            </div>

            <div class="footer__trust-item">
              <div class="footer__trust-icon footer__trust-icon--certified">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="14" r="10" fill="#f59e0b" />
                  <path
                    d="M12 14l3 3 5-6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M12 24l4 4 4-4" fill="#f59e0b" />
                </svg>
              </div>
              <div class="footer__trust-content">
                <span class="footer__trust-title">FINMA-reguliert</span>
                <span class="footer__trust-text">SRO-Mitglied seit 2008</span>
              </div>
            </div>
          </div>

          {/* Second row: centered single badge */}
          <div class="footer__trust-item">
            <div class="footer__trust-icon footer__trust-icon--experience">
              <svg viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" fill="#8b5cf6" />
                <text
                  x="16"
                  y="20"
                  text-anchor="middle"
                  font-size="10"
                  font-weight="bold"
                  fill="white"
                >
                  18+
                </text>
              </svg>
            </div>
            <div class="footer__trust-content">
              <span class="footer__trust-title">18 Jahre Erfahrung</span>
              <span class="footer__trust-text">Pionier seit 2008</span>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div class="footer__partners-wrapper">
          <div class="footer__partners">
            <img
              src="/images/members/deutsche-boerse.png"
              alt="Deutsche Börse Venture Network"
              class="footer__partner-logo footer__partner-logo--lg"
              width={180}
              height={60}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/images/members/Swiss-Finance-Logo.png"
              alt="Swiss Finance Startups"
              class="footer__partner-logo"
              width={120}
              height={40}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/images/members/Swiss-Made-Software-Logo.png"
              alt="Swiss Made Software"
              class="footer__partner-logo"
              width={120}
              height={40}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Social Media Section - Top */}
        <div class="footer__social-top">
          <a
            href="https://www.facebook.com/cashare.ch"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__social-icon"
            aria-label="Facebook"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M15 8h-2a3 3 0 00-3 3v9m-1-6h6" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/cashare"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__social-icon"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="3" />
              <path d="M7 11v6m0-9v.01M11 15v-3a2 2 0 014 0v3m0-4v4" />
            </svg>
          </a>
          <a
            href="https://twitter.com/cashare_ch"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__social-icon"
            aria-label="X (Twitter)"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/cashare_ch"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__social-icon"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="18"
                cy="6"
                r="1.5"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@cashare"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__social-icon"
            aria-label="YouTube"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <rect x="2" y="4" width="20" height="16" rx="4" />
              <polygon
                points="10,8 16,12 10,16"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div class="footer__divider"></div>

        {/* Main Footer Content */}
        <div class="footer__main">
          {/* Company Info & Newsletter */}
          <div class="footer__brand">
            {/* Logo */}
            <a href={localePath || "/"} class="footer__logo">
              <img
                src="/images/cashare-black-logo.svg"
                alt="Cashare"
                class="footer__logo-img"
                width={140}
                height={32}
                loading="lazy"
                decoding="async"
              />
            </a>

            {/* Contact Info */}
            <div class="footer__contact">
              <div class="footer__contact-item">
                <svg
                  class="footer__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div class="footer__address">{content.address}</div>
              </div>

              <div class="footer__contact-item">
                <svg
                  class="footer__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={`tel:${content.phone}`} class="footer__contact-link">
                  {content.phone}
                </a>
              </div>

              <div class="footer__contact-item">
                <svg
                  class="footer__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href={`mailto:${content.email}`}
                  class="footer__contact-link"
                >
                  {content.email}
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div class="footer__newsletter">
              <h3 class="footer__newsletter-title">
                {content.newsletter.title}
              </h3>
              <p class="footer__newsletter-description">
                {content.newsletter.description}
              </p>
              <form class="footer__newsletter-form">
                <input
                  type="email"
                  placeholder={content.newsletter.placeholder}
                  class="footer__newsletter-input"
                  required
                />
                <button type="submit" class="btn btn--primary btn--near-form">
                  {content.newsletter.button}
                  <svg
                    class="footer__newsletter-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Link Columns */}
          <div class="footer__links">
            {Object.values(content.sections).map((section) => (
              <div
                key={section.title || "support-legal"}
                class="footer__column"
              >
                {section.title && (
                  <h3 class="footer__column-title">{section.title}</h3>
                )}
                <ul class="footer__column-list">
                  {section.links.map((link) =>
                    "isLabel" in link && link.isLabel
                      ? (
                        <li key={link.label} class="footer__sublabel">
                          {link.label}
                        </li>
                      )
                      : (
                        <li key={link.href}>
                          <a href={link.href} class="footer__link">
                            {link.label}
                          </a>
                        </li>
                      )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div class="footer__divider"></div>

        {/* Bottom Section */}
        <div class="footer__bottom">
          <div class="footer__bottom-left">
            {/* Language Selector */}
            <div class="footer__language">
              <svg
                class="footer__language-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div class="footer__language-links">
                <a
                  href="/"
                  class={`footer__language-link ${
                    locale === "de" ? "footer__language-link--active" : ""
                  }`}
                >
                  DE
                </a>
                <span class="footer__language-separator">|</span>
                <a
                  href="/en"
                  class={`footer__language-link ${
                    locale === "en" ? "footer__language-link--active" : ""
                  }`}
                >
                  EN
                </a>
                <span class="footer__language-separator">|</span>
                <a
                  href="/fr"
                  class={`footer__language-link ${
                    locale === "fr" ? "footer__language-link--active" : ""
                  }`}
                >
                  FR
                </a>
              </div>
            </div>
          </div>

          <div class="footer__bottom-right">
            {/* Legal Links */}
            <div class="footer__legal">
              {locale === "de" && (
                <>
                  <a href="/agb" class="footer__legal-link">AGB</a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/datenschutzerklaerung" class="footer__legal-link">
                    Datenschutz
                  </a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/impressum" class="footer__legal-link">Impressum</a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/cookies" class="footer__legal-link">Cookies</a>
                </>
              )}
              {locale === "en" && (
                <>
                  <a href="/en/terms" class="footer__legal-link">Terms</a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/en/privacy" class="footer__legal-link">Privacy</a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/en/imprint" class="footer__legal-link">Imprint</a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/en/cookies" class="footer__legal-link">Cookies</a>
                </>
              )}
              {locale === "fr" && (
                <>
                  <a href="/fr/cgv" class="footer__legal-link">CGV</a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/fr/confidentialite" class="footer__legal-link">
                    Confidentialité
                  </a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/fr/mentions-legales" class="footer__legal-link">
                    Mentions légales
                  </a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/fr/cookies" class="footer__legal-link">Cookies</a>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Regulatory & Copyright */}
        <div class="footer__regulatory">
          {/* EDÖB Registration */}
          <p class="footer__regulatory-edob">{content.regulatory.edob}</p>

          {/* Swiss Confederation Block */}
          <div class="footer__confederation">
            <div class="footer__confederation-left">
              <svg class="footer__swiss-shield" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="4" width="24" height="24" fill="#dc2626" />
                <path d="M16 8V24M8 16H24" stroke="white" stroke-width="4" />
              </svg>
              <div class="footer__confederation-names">
                <span>{content.regulatory.confederation.de}</span>
                <span>{content.regulatory.confederation.fr}</span>
                <span>{content.regulatory.confederation.it}</span>
                <span>{content.regulatory.confederation.rm}</span>
              </div>
            </div>
            <div class="footer__confederation-divider"></div>
            <div class="footer__confederation-right">
              <span class="footer__edob-title">
                {content.regulatory.edobTitle}
              </span>
            </div>
          </div>

          {/* SRO Polyreg & License Info */}
          <p class="footer__regulatory-text">
            {content.regulatory.sroPolyreg}{" "}
            <a
              href={content.regulatory.sroPolyregUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="footer__regulatory-link"
            >
              {content.regulatory.sroPolyregLink}
            </a>{" "}
            {content.regulatory.finma}{" "}
            <a
              href={content.regulatory.wirtschaftsdirektionUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="footer__regulatory-link"
            >
              {content.regulatory.wirtschaftsdirektion}
            </a>{" "}
            {content.regulatory.zugSuffix}
          </p>

          <p class="footer__copyright">{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
