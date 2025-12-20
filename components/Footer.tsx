import type { Locale } from "../lib/i18n/index.ts";

interface FooterProps {
  locale: Locale;
}

const footerContent = {
  de: {
    company: "Cashare AG",
    tagline: "Die führende P2P-Kreditplattform der Schweiz",
    address: "Bösch 73, 6331 Hünenberg",
    country: "Schweiz",
    phone: "+41 41 558 48 88",
    email: "support@cashare.ch",
    newsletter: {
      title: "Newsletter",
      description: "Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten und Angeboten",
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
          { label: "Über uns", href: "/ueber-uns/wer-sind-wir" },
          { label: "Crowdlending", href: "/ueber-uns/crowdlending" },
          { label: "Statistik", href: "/ueber-uns/statistik" },
          { label: "Jobs", href: "/ueber-uns/jobs" },
          { label: "Partner", href: "/ueber-uns/partner" },
          { label: "Blog", href: "/ueber-uns/blog" },
          { label: "Presse", href: "/presse" },
        ],
      },
      support: {
        title: "Support",
        links: [
          { label: "Hilfe-Center", href: "/hilfe" },
          { label: "FAQ", href: "/faq" },
          { label: "Kontakt", href: "/kontakt" },
          { label: "Dokumentation", href: "/dokumentation" },
        ],
      },
      legal: {
        title: "Rechtliches",
        links: [
          { label: "AGB", href: "/agb" },
          { label: "Datenschutz", href: "/datenschutzerklaerung" },
          { label: "Impressum", href: "/impressum" },
          { label: "Cookie-Richtlinien", href: "/cookies" },
        ],
      },
    },
    social: {
      title: "Folgen Sie uns",
    },
    languages: {
      title: "Sprache",
      de: "Deutsch",
      en: "English",
      fr: "Français",
    },
    regulatory: "Mitglied der SRO Polyreg | Zugelassener Konsumkreditgeber | Registriert beim EDÖB",
    copyright: "© 2008-2024 Cashare AG. Alle Rechte vorbehalten.",
  },
  en: {
    company: "Cashare AG",
    tagline: "Switzerland's Leading P2P Lending Platform",
    address: "Bösch 73, 6331 Hünenberg",
    country: "Switzerland",
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
          { label: "Personal Loan", href: "/en/apply-for-credit/personal-loan" },
          { label: "SME Loan", href: "/en/apply-for-credit/sme-loan" },
          { label: "Mortgage", href: "/en/apply-for-credit/mortgage" },
          { label: "Invest", href: "/en/invest" },
        ],
      },
      company: {
        title: "Company",
        links: [
          { label: "About Us", href: "/en/about-us/who-we-are" },
          { label: "Crowdlending", href: "/en/about-us/crowdlending" },
          { label: "Statistics", href: "/en/about-us/statistics" },
          { label: "Jobs", href: "/en/about-us/jobs" },
          { label: "Partners", href: "/en/about-us/partners" },
          { label: "Blog", href: "/en/about-us/blog" },
          { label: "Press", href: "/en/press" },
        ],
      },
      support: {
        title: "Support",
        links: [
          { label: "Help Center", href: "/en/help" },
          { label: "FAQ", href: "/en/faq" },
          { label: "Contact", href: "/en/contact" },
          { label: "Documentation", href: "/en/documentation" },
        ],
      },
      legal: {
        title: "Legal",
        links: [
          { label: "Terms", href: "/en/terms" },
          { label: "Privacy", href: "/en/privacy" },
          { label: "Imprint", href: "/en/imprint" },
          { label: "Cookie Policy", href: "/en/cookies" },
        ],
      },
    },
    social: {
      title: "Follow Us",
    },
    languages: {
      title: "Language",
      de: "Deutsch",
      en: "English",
      fr: "Français",
    },
    regulatory: "Member of SRO Polyreg | Licensed Consumer Credit Provider | Registered with Swiss DPA",
    copyright: "© 2008-2024 Cashare AG. All rights reserved.",
  },
  fr: {
    company: "Cashare AG",
    tagline: "La plateforme de prêt P2P leader en Suisse",
    address: "Bösch 73, 6331 Hünenberg",
    country: "Suisse",
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
          { label: "Crédit privé", href: "/fr/demander-un-credit/credit-prive" },
          { label: "Crédit PME", href: "/fr/demander-un-credit/credit-pme" },
          { label: "Hypothèque", href: "/fr/demander-un-credit/hypotheque" },
          { label: "Investir", href: "/fr/investir" },
        ],
      },
      company: {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "/fr/a-propos/qui-sommes-nous" },
          { label: "Crowdlending", href: "/fr/a-propos/crowdlending" },
          { label: "Statistiques", href: "/fr/a-propos/statistiques" },
          { label: "Emplois", href: "/fr/a-propos/emplois" },
          { label: "Partenaires", href: "/fr/a-propos/partenaires" },
          { label: "Blog", href: "/fr/a-propos/blog" },
          { label: "Presse", href: "/fr/presse" },
        ],
      },
      support: {
        title: "Support",
        links: [
          { label: "Centre d'aide", href: "/fr/aide" },
          { label: "FAQ", href: "/fr/faq" },
          { label: "Contact", href: "/fr/contact" },
          { label: "Documentation", href: "/fr/documentation" },
        ],
      },
      legal: {
        title: "Légal",
        links: [
          { label: "CGV", href: "/fr/cgv" },
          { label: "Confidentialité", href: "/fr/confidentialite" },
          { label: "Mentions légales", href: "/fr/mentions-legales" },
          { label: "Politique de cookies", href: "/fr/cookies" },
        ],
      },
    },
    social: {
      title: "Suivez-nous",
    },
    languages: {
      title: "Langue",
      de: "Deutsch",
      en: "English",
      fr: "Français",
    },
    regulatory: "Membre de l'OAR Polyreg | Prêteur agréé | Enregistré auprès du PFPDT",
    copyright: "© 2008-2024 Cashare AG. Tous droits réservés.",
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
        {/* Social Media Section - Top */}
        <div class="footer__social-top">
          <a href="https://www.facebook.com/cashare.ch" target="_blank" rel="noopener noreferrer" class="footer__social-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M15 8h-2a3 3 0 00-3 3v9m-1-6h6" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/cashare" target="_blank" rel="noopener noreferrer" class="footer__social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="2" width="20" height="20" rx="3" />
              <path d="M7 11v6m0-9v.01M11 15v-3a2 2 0 014 0v3m0-4v4" />
            </svg>
          </a>
          <a href="https://twitter.com/cashare_ch" target="_blank" rel="noopener noreferrer" class="footer__social-icon" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/cashare_ch" target="_blank" rel="noopener noreferrer" class="footer__social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@cashare" target="_blank" rel="noopener noreferrer" class="footer__social-icon" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="4" width="20" height="16" rx="4" />
              <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        {/* Trust Badges */}
        <div class="footer__trust">
          {/* First row: 4 badges */}
          <div class="footer__trust-row">
            <div class="footer__trust-item">
              <div class="footer__trust-icon footer__trust-icon--swiss">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="24" height="24" rx="2" fill="#dc2626" />
                  <path d="M16 8v16M8 16h16" stroke="white" stroke-width="4" />
                </svg>
              </div>
              <div class="footer__trust-content">
                <span class="footer__trust-title">100% Schweizer Unternehmen</span>
                <span class="footer__trust-text">Hauptsitz in Hünenberg ZG</span>
              </div>
            </div>

            <div class="footer__trust-item">
              <div class="footer__trust-icon footer__trust-icon--security">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 3L4 8v7c0 7.5 5.1 14.5 12 16 6.9-1.5 12-8.5 12-16V8L16 3z" fill="#22c55e" />
                  <path d="M13 16l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="footer__trust-content">
                <span class="footer__trust-title">SSL-verschlüsselt</span>
                <span class="footer__trust-text">Höchste Sicherheitsstandards</span>
              </div>
            </div>

            <div class="footer__trust-item">
              <div class="footer__trust-icon footer__trust-icon--data">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="6" y="10" width="20" height="16" rx="2" fill="#0ea5e9" />
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
                  <path d="M12 14l3 3 5-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                <text x="16" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="white">17+</text>
              </svg>
            </div>
            <div class="footer__trust-content">
              <span class="footer__trust-title">17 Jahre Erfahrung</span>
              <span class="footer__trust-text">Pionier seit 2008</span>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div class="footer__partners-wrapper">
          <span class="footer__partners-label">Member of</span>
          <div class="footer__partners">
            <img
              src="/images/members/deutsche-boerse.png"
              alt="Deutsche Börse Venture Network"
              class="footer__partner-logo"
            />
            <img
              src="/images/members/Swiss-Finance-Logo.png"
              alt="Swiss Finance Startups"
              class="footer__partner-logo"
            />
            <img
              src="/images/members/Swiss-Made-Software-Logo.png"
              alt="Swiss Made Software"
              class="footer__partner-logo"
            />
          </div>
        </div>

        {/* Divider */}
        <div class="footer__divider"></div>

        {/* Main Footer Content */}
        <div class="footer__main">
          {/* Company Info & Newsletter */}
          <div class="footer__brand">
            {/* Logo */}
            <a href={localePath || "/"} class="footer__logo">
              <img src="/images/cashare-black-logo.svg" alt="Cashare" class="footer__logo-img" />
            </a>

            <p class="footer__tagline">{content.tagline}</p>

            {/* Contact Info */}
            <div class="footer__contact">
              <div class="footer__contact-item">
                <svg class="footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div>{content.address}</div>
                  <div>{content.country}</div>
                </div>
              </div>

              <div class="footer__contact-item">
                <svg class="footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href={`tel:${content.phone}`} class="footer__contact-link">{content.phone}</a>
              </div>

              <div class="footer__contact-item">
                <svg class="footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href={`mailto:${content.email}`} class="footer__contact-link">{content.email}</a>
              </div>
            </div>

            {/* Newsletter */}
            <div class="footer__newsletter">
              <h3 class="footer__newsletter-title">{content.newsletter.title}</h3>
              <p class="footer__newsletter-description">{content.newsletter.description}</p>
              <form class="footer__newsletter-form">
                <input
                  type="email"
                  placeholder={content.newsletter.placeholder}
                  class="footer__newsletter-input"
                  required
                />
                <button type="submit" class="footer__newsletter-button">
                  {content.newsletter.button}
                  <svg class="footer__newsletter-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Link Columns */}
          <div class="footer__links">
            {Object.values(content.sections).map((section) => (
              <div key={section.title} class="footer__column">
                <h3 class="footer__column-title">{section.title}</h3>
                <ul class="footer__column-list">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} class="footer__link">
                        {link.label}
                        <svg class="footer__link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </a>
                    </li>
                  ))}
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
            {/* Social Media */}
            <div class="footer__social">
              <span class="footer__social-title">{content.social.title}</span>
              <div class="footer__social-links">
                <a href="https://www.linkedin.com/company/cashare" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/cashare_ch" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/cashare.ch" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/cashare_ch" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Language Selector */}
            <div class="footer__language">
              <svg class="footer__language-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <div class="footer__language-links">
                <a href="/" class={`footer__language-link ${locale === "de" ? "footer__language-link--active" : ""}`}>DE</a>
                <span class="footer__language-separator">|</span>
                <a href="/en" class={`footer__language-link ${locale === "en" ? "footer__language-link--active" : ""}`}>EN</a>
                <span class="footer__language-separator">|</span>
                <a href="/fr" class={`footer__language-link ${locale === "fr" ? "footer__language-link--active" : ""}`}>FR</a>
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
                  <a href="/datenschutzerklaerung" class="footer__legal-link">Datenschutz</a>
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
                  <a href="/fr/confidentialite" class="footer__legal-link">Confidentialité</a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/fr/mentions-legales" class="footer__legal-link">Mentions légales</a>
                  <span class="footer__legal-separator">·</span>
                  <a href="/fr/cookies" class="footer__legal-link">Cookies</a>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Regulatory & Copyright */}
        <div class="footer__regulatory">
          <p class="footer__regulatory-text">{content.regulatory}</p>
          <p class="footer__copyright">{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
