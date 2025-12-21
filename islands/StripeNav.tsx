import { computed, signal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import type { Locale } from "../lib/i18n/index.ts";
import { getAlternateUrls } from "../lib/i18n/routes.ts";

interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

interface NavSection {
  id: string;
  label: string;
  href: string;
  title?: string;
  subtitle?: string;
  items?: NavItem[];
}

interface StripeNavProps {
  locale: Locale;
  currentPath?: string;
}

const navigation: Record<
  Locale,
  { sections: NavSection[]; login: string; cta: string; menu: string }
> = {
  de: {
    sections: [
      {
        id: "loan",
        label: "Kredit beantragen",
        href: "/kredit-beantragen",
        title: "Kredit beantragen",
        subtitle: "Beantragen Sie ihren Wunschkredit",
        items: [
          {
            label: "Privatkredit",
            href: "/kredit-beantragen/privatkredit",
            description: "Ihr cleverer Kredit",
            icon: "user",
          },
          {
            label: "KMU Kredit",
            href: "/kredit-beantragen/kmu-kredit",
            description: "Die smarte Finanzierung für Unternehmen",
            icon: "building",
          },
          {
            label: "Hypothek",
            href: "/kredit-beantragen/hypotheken",
            description: "Optimale Immobilienfinanzierung",
            icon: "home",
          },
        ],
      },
      {
        id: "invest",
        label: "Anlegen",
        href: "/investieren",
        title: "Investieren",
        subtitle: "Geld anlegen für die Zukunft",
        items: [
          {
            label: "Private Anleger",
            href: "/investieren/privatinvestoren",
            description: "Attraktive Rendite mit Krediten",
            icon: "leaf",
          },
          {
            label: "Institutionelle Anleger",
            href: "/investieren/institutionelle",
            description: "Das Anlageportfolio mit Private Debt erweitern",
            icon: "building",
          },
        ],
      },
      {
        id: "about",
        label: "Über uns",
        href: "/ueber-uns",
        title: "Über uns",
        subtitle: "Erfahren Sie mehr über Cashare",
        items: [
          {
            label: "Wer sind wir",
            href: "/ueber-uns/wer-sind-wir",
            description: "Unsere Vision und Mission",
            icon: "users",
          },
          {
            label: "Partner",
            href: "/ueber-uns/partner",
            description: "Starke Zusammenarbeit und Vertrauen",
            icon: "handshake",
          },
          {
            label: "Crowdlending",
            href: "/ueber-uns/crowdlending",
            description: "Der Schweizer FinTech Pionier",
            icon: "diamond",
          },
          {
            label: "Presse",
            href: "/ueber-uns/presse",
            description: "Medienzentrum",
            icon: "press",
          },
          {
            label: "Statistik",
            href: "/ueber-uns/statistik",
            description: "Unser Leistungsausweis",
            icon: "chart",
          },
          {
            label: "Blog",
            href: "/ueber-uns/blog",
            description: "Einblicke & Geschichten",
            icon: "newspaper",
          },
          {
            label: "Jobs",
            href: "/ueber-uns/jobs",
            description: "Karriere und Pionierarbeit mit Cashare",
            icon: "jobs",
          },
        ],
      },
    ],
    login: "Login",
    cta: "Loslegen",
    menu: "Menü",
  },
  en: {
    sections: [
      {
        id: "loan",
        label: "Loan",
        href: "/en/apply-for-credit",
        title: "Apply for Loan",
        subtitle: "Quick and easy financing",
        items: [
          {
            label: "Private Loan",
            href: "/en/apply-for-credit/personal-loan",
            description: "Personal loans up to CHF 250,000",
            icon: "user",
          },
          {
            label: "SME Loan",
            href: "/en/apply-for-credit/sme-loan",
            description: "Business loans for companies",
            icon: "briefcase",
          },
          {
            label: "Mortgage",
            href: "/en/apply-for-credit/mortgage",
            description: "Real estate financing",
            icon: "home",
          },
        ],
      },
      {
        id: "invest",
        label: "Invest",
        href: "/en/invest",
        title: "Investing",
        subtitle: "Invest money for the future",
        items: [
          {
            label: "Private Investors",
            href: "/en/invest/private-investors",
            description: "Attractive returns with loans",
            icon: "leaf",
          },
          {
            label: "Institutional Investors",
            href: "/en/invest/institutional",
            description: "Expand your portfolio with Private Debt",
            icon: "building",
          },
        ],
      },
      {
        id: "about",
        label: "About Us",
        href: "/en/about",
        title: "About Us",
        subtitle: "Learn more about Cashare",
        items: [
          {
            label: "Who We Are",
            href: "/en/about/who-we-are",
            description: "Our vision and mission",
            icon: "users",
          },
          {
            label: "Partners",
            href: "/en/about/partners",
            description: "Strong collaboration and trust",
            icon: "handshake",
          },
          {
            label: "Crowdlending",
            href: "/en/about/crowdlending",
            description: "The Swiss FinTech pioneer",
            icon: "diamond",
          },
          {
            label: "Press",
            href: "/en/about/press",
            description: "Media center",
            icon: "press",
          },
          {
            label: "Statistics",
            href: "/en/about/statistics",
            description: "Our track record",
            icon: "chart",
          },
          {
            label: "Blog",
            href: "/en/about/blog",
            description: "Insights & stories",
            icon: "newspaper",
          },
          {
            label: "Jobs",
            href: "/en/about/jobs",
            description: "Career and pioneering with Cashare",
            icon: "jobs",
          },
        ],
      },
    ],
    login: "Login",
    cta: "Get Started",
    menu: "Menu",
  },
  fr: {
    sections: [
      {
        id: "loan",
        label: "Crédit",
        href: "/fr/demander-un-credit",
        title: "Demander un crédit",
        subtitle: "Financement rapide et simple",
        items: [
          {
            label: "Crédit privé",
            href: "/fr/demander-un-credit/credit-prive",
            description: "Prêt personnel jusqu'à CHF 250'000",
            icon: "user",
          },
          {
            label: "Crédit PME",
            href: "/fr/demander-un-credit/credit-pme",
            description: "Crédit commercial pour entreprises",
            icon: "briefcase",
          },
          {
            label: "Hypothèque",
            href: "/fr/demander-un-credit/hypotheque",
            description: "Financement immobilier",
            icon: "home",
          },
        ],
      },
      {
        id: "invest",
        label: "Investir",
        href: "/fr/investir",
        title: "Investir",
        subtitle: "Investir pour l'avenir",
        items: [
          {
            label: "Investisseurs privés",
            href: "/fr/investir/investisseurs-prives",
            description: "Rendements attractifs avec les crédits",
            icon: "leaf",
          },
          {
            label: "Investisseurs institutionnels",
            href: "/fr/investir/institutionnels",
            description: "Élargir le portefeuille avec Private Debt",
            icon: "building",
          },
        ],
      },
      {
        id: "about",
        label: "À propos",
        href: "/fr/a-propos",
        title: "À propos",
        subtitle: "En savoir plus sur Cashare",
        items: [
          {
            label: "Qui sommes-nous",
            href: "/fr/a-propos/qui-sommes-nous",
            description: "Notre vision et mission",
            icon: "users",
          },
          {
            label: "Partenaires",
            href: "/fr/a-propos/partenaires",
            description: "Collaboration et confiance",
            icon: "handshake",
          },
          {
            label: "Crowdlending",
            href: "/fr/a-propos/crowdlending",
            description: "Le pionnier FinTech suisse",
            icon: "diamond",
          },
          {
            label: "Presse",
            href: "/fr/a-propos/presse",
            description: "Centre médias",
            icon: "press",
          },
          {
            label: "Statistiques",
            href: "/fr/a-propos/statistiques",
            description: "Notre bilan",
            icon: "chart",
          },
          {
            label: "Blog",
            href: "/fr/a-propos/blog",
            description: "Aperçus & histoires",
            icon: "newspaper",
          },
          {
            label: "Emplois",
            href: "/fr/a-propos/emplois",
            description: "Carrière et innovation avec Cashare",
            icon: "jobs",
          },
        ],
      },
    ],
    login: "Connexion",
    cta: "Commencer",
    menu: "Menu",
  },
};

// State signals
const activeSection = signal<string | null>(null);
const isNavHovered = signal(false);
const backdropStyle = signal({ left: 0, width: 0 });
const isScrolled = signal(false);
const isMobileMenuOpen = signal(false);
const mobileActiveSection = signal<string | null>(null);

// Computed: is dropdown visible
const isDropdownVisible = computed(() =>
  isNavHovered.value && activeSection.value !== null
);

// Two-color icons - using solid colors to avoid gradient ID conflicts
const icons: Record<string, string> = {
  user: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4" fill="#007399"/>
    <path d="M5 21c0-4 3.1-7 7-7s7 3 7 7" fill="#00b5ce"/>
  </svg>`,
  briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" fill="#00b5ce"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#007399" stroke-width="2"/>
    <rect x="2" y="11" width="20" height="3" fill="#007399"/>
    <circle cx="12" cy="12.5" r="1.5" fill="white"/>
  </svg>`,
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 11l9-8 9 8" stroke="#007399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" fill="#00b5ce"/>
    <rect x="9" y="14" width="6" height="7" rx="0.5" fill="#007399"/>
  </svg>`,
  building: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="2" width="16" height="20" rx="2" fill="#00b5ce"/>
    <rect x="7" y="5" width="3" height="3" rx="0.5" fill="white"/>
    <rect x="14" y="5" width="3" height="3" rx="0.5" fill="white"/>
    <rect x="7" y="10" width="3" height="3" rx="0.5" fill="white"/>
    <rect x="14" y="10" width="3" height="3" rx="0.5" fill="white"/>
    <rect x="9" y="16" width="6" height="6" rx="0.5" fill="#007399"/>
  </svg>`,
  users: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="7" r="4" fill="#007399"/>
    <circle cx="17" cy="8" r="3" fill="#00b5ce"/>
    <path d="M2 20c0-4 3-6 7-6s7 2 7 6" fill="#00b5ce"/>
    <path d="M15 20c0-2 2-3.5 4-3.5s4 1.5 4 3.5" fill="#007399"/>
  </svg>`,
  info: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#00b5ce"/>
    <circle cx="12" cy="8" r="1.5" fill="white"/>
    <rect x="11" y="11" width="2" height="6" rx="1" fill="white"/>
  </svg>`,
  chart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="12" width="5" height="9" rx="1" fill="#007399"/>
    <rect x="10" y="6" width="5" height="15" rx="1" fill="#00b5ce"/>
    <rect x="17" y="9" width="5" height="12" rx="1" fill="#007399"/>
  </svg>`,
  handshake: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M2 10l4-4 4 2 2-2 2 2 4-2 4 4" stroke="#007399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 12l4 4 4-4" stroke="#00b5ce" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="8" cy="17" r="2" fill="#007399"/>
    <circle cx="16" cy="17" r="2" fill="#00b5ce"/>
    <path d="M10 17h4" stroke="#007399" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  newspaper: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="3" width="16" height="18" rx="2" fill="#00b5ce"/>
    <rect x="8" y="6" width="10" height="4" rx="0.5" fill="white"/>
    <rect x="8" y="12" width="10" height="2" rx="0.5" fill="white" fill-opacity="0.7"/>
    <rect x="8" y="16" width="6" height="2" rx="0.5" fill="white" fill-opacity="0.7"/>
    <path d="M3 6v13a2 2 0 0 0 2 2" stroke="#007399" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  diamond: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 9l10 13 10-13L12 2z" fill="#00b5ce"/>
    <path d="M12 2L2 9h20L12 2z" fill="#007399"/>
    <path d="M7 9l5 13 5-13H7z" fill="#00d4a8" fill-opacity="0.5"/>
  </svg>`,
  press: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="16" rx="2" fill="#00b5ce"/>
    <rect x="5" y="6" width="6" height="5" rx="1" fill="white"/>
    <rect x="13" y="6" width="6" height="2" rx="0.5" fill="white" fill-opacity="0.7"/>
    <rect x="13" y="9" width="4" height="2" rx="0.5" fill="white" fill-opacity="0.7"/>
    <rect x="5" y="13" width="14" height="2" rx="0.5" fill="white" fill-opacity="0.7"/>
    <rect x="5" y="17" width="10" height="2" rx="0.5" fill="white" fill-opacity="0.7"/>
  </svg>`,
  jobs: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="7" width="18" height="14" rx="2" fill="#00b5ce"/>
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#007399" stroke-width="2"/>
    <rect x="3" y="11" width="18" height="4" fill="#007399"/>
    <rect x="10" y="10" width="4" height="4" rx="1" fill="white"/>
  </svg>`,
  leaf: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3c-4.5 0-8 4-8 9 0 3 1.5 5.5 4 7" stroke="#00b5ce" stroke-width="2" stroke-linecap="round"/>
    <path d="M12 3c4.5 0 8 4 8 9 0 3-1.5 5.5-4 7" stroke="#00d924" stroke-width="2" stroke-linecap="round"/>
    <path d="M12 21V9" stroke="#00b5ce" stroke-width="2" stroke-linecap="round"/>
    <circle cx="12" cy="6" r="3" fill="#00d924"/>
  </svg>`,
};

export default function StripeNav(
  { locale, currentPath = "" }: StripeNavProps,
) {
  const nav = navigation[locale];
  const localePath = locale === "de" ? "" : `/${locale}`;
  const alternateUrls = getAlternateUrls(currentPath || "/", locale);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20;
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        activeSection.value = null;
        isNavHovered.value = false;
        isMobileMenuOpen.value = false;
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".stripe-nav__wrapper")) {
        activeSection.value = null;
        isNavHovered.value = false;
      }
    };

    if (isMobileMenuOpen.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, []);

  const updateBackdropPosition = (sectionId: string) => {
    const itemEl = itemRefs.current.get(sectionId);
    const navEl = navRef.current;

    if (itemEl && navEl) {
      const navRect = navEl.getBoundingClientRect();
      const itemRect = itemEl.getBoundingClientRect();

      // Calculate dropdown width based on section
      // "about" section uses two-column grid and needs more width
      const width = sectionId === "about" ? 580 : 320;

      backdropStyle.value = {
        left: itemRect.left - navRect.left + (itemRect.width / 2) - (width / 2),
        width,
      };
    }
  };

  const handleMouseEnter = (sectionId: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }

    isNavHovered.value = true;
    activeSection.value = sectionId;
    updateBackdropPosition(sectionId);
  };

  const handleNavMouseLeave = () => {
    leaveTimeoutRef.current = window.setTimeout(() => {
      isNavHovered.value = false;
      activeSection.value = null;
    }, 100);
  };

  const handleDropdownMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const isActive = (href: string) => {
    return currentPath === href || currentPath.startsWith(href + "/");
  };

  const activeContent = nav.sections.find((s) => s.id === activeSection.value);

  return (
    <header
      class={`stripe-nav ${isScrolled.value ? "stripe-nav--scrolled" : ""} ${
        isMobileMenuOpen.value ? "stripe-nav--mobile-open" : ""
      }`}
    >
      <div class="stripe-nav__container">
        {/* Logo */}
        <a href={localePath || "/"} class="stripe-nav__logo">
          <img src="/images/cashare-black-logo.svg" alt="Cashare" />
        </a>

        {/* Desktop Navigation */}
        <div
          class="stripe-nav__wrapper"
          ref={navRef}
          onMouseLeave={handleNavMouseLeave}
        >
          <nav class="stripe-nav__items">
            {nav.sections.map((section) => (
              <div
                key={section.id}
                ref={(el) => el && itemRefs.current.set(section.id, el)}
                class={`stripe-nav__item ${
                  activeSection.value === section.id
                    ? "stripe-nav__item--active"
                    : ""
                }`}
                onMouseEnter={() =>
                  section.items && handleMouseEnter(section.id)}
              >
                <a
                  href={section.href}
                  class={`stripe-nav__link ${
                    isActive(section.href) ? "stripe-nav__link--current" : ""
                  }`}
                >
                  {section.label}
                  {section.items && (
                    <svg
                      class={`stripe-nav__chevron ${
                        activeSection.value === section.id
                          ? "stripe-nav__chevron--open"
                          : ""
                      }`}
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                    >
                      <path
                        d="M1 3L5 7L9 3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        fill="none"
                        stroke-linecap="round"
                      />
                    </svg>
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* Animated Dropdown Backdrop */}
          <div
            ref={dropdownRef}
            class={`stripe-nav__dropdown ${
              isDropdownVisible.value ? "stripe-nav__dropdown--visible" : ""
            }`}
            style={{
              transform: `translateX(${backdropStyle.value.left}px)`,
              width: `${backdropStyle.value.width}px`,
            }}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleNavMouseLeave}
          >
            <div class="stripe-nav__dropdown-arrow" />

            {/* Content panels - one for each section */}
            {nav.sections.map((section) => (
              <div
                key={section.id}
                class={`stripe-nav__panel ${
                  activeSection.value === section.id
                    ? "stripe-nav__panel--active"
                    : ""
                } ${section.id === "about" ? "stripe-nav__panel--about" : ""}`}
              >
                {/* Header with title and subtitle */}
                {section.title && (
                  <a href={section.href} class="stripe-nav__panel-header">
                    <span class="stripe-nav__panel-title">{section.title}</span>
                    {section.subtitle && (
                      <span class="stripe-nav__panel-subtitle">
                        {section.subtitle}
                      </span>
                    )}
                  </a>
                )}
                <div class="stripe-nav__panel-inner">
                  {section.items?.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      class={`stripe-nav__dropdown-item ${
                        isActive(item.href)
                          ? "stripe-nav__dropdown-item--active"
                          : ""
                      }`}
                      style={{ animationDelay: `${index * 30}ms` }}
                    >
                      <span
                        class="stripe-nav__dropdown-icon"
                        dangerouslySetInnerHTML={{
                          __html: icons[item.icon || "info"],
                        }}
                      />
                      <div class="stripe-nav__dropdown-content">
                        <span class="stripe-nav__dropdown-label">
                          {item.label}
                        </span>
                        {item.description && (
                          <span class="stripe-nav__dropdown-desc">
                            {item.description}
                          </span>
                        )}
                      </div>
                      <svg
                        class="stripe-nav__dropdown-arrow-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6 4L10 8L6 12"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side actions */}
        <div class="stripe-nav__actions">
          {/* Language Switcher */}
          <div class="stripe-nav__lang">
            <a
              href={alternateUrls.de}
              class={`stripe-nav__lang-item ${
                locale === "de" ? "stripe-nav__lang-item--active" : ""
              }`}
            >
              DE
            </a>
            <a
              href={alternateUrls.en}
              class={`stripe-nav__lang-item ${
                locale === "en" ? "stripe-nav__lang-item--active" : ""
              }`}
            >
              EN
            </a>
            <a
              href={alternateUrls.fr}
              class={`stripe-nav__lang-item ${
                locale === "fr" ? "stripe-nav__lang-item--active" : ""
              }`}
            >
              FR
            </a>
          </div>

          <a href={`${localePath}/login`} class="stripe-nav__login">
            {nav.login}
          </a>

          <a href={nav.sections[0].href} class="stripe-nav__cta">
            {nav.cta}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            class={`stripe-nav__toggle ${
              isMobileMenuOpen.value ? "stripe-nav__toggle--open" : ""
            }`}
            onClick={() => isMobileMenuOpen.value = !isMobileMenuOpen.value}
            aria-label="Toggle menu"
          >
            {nav.menu}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen.value && (
        <div
          class="stripe-nav__backdrop"
          onClick={() => isMobileMenuOpen.value = false}
        />
      )}

      {/* Mobile Menu */}
      <div
        class={`stripe-nav__mobile ${
          isMobileMenuOpen.value ? "stripe-nav__mobile--open" : ""
        }`}
      >
        <div class="stripe-nav__mobile-header">
          <select
            class="stripe-nav__mobile-lang-select"
            value={locale}
            onChange={(e) => {
              const target = e.target as HTMLSelectElement;
              const selectedLocale = target.value as Locale;
              window.location.href = alternateUrls[selectedLocale];
            }}
          >
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <button
            class="stripe-nav__mobile-close"
            onClick={() => isMobileMenuOpen.value = false}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        <nav class="stripe-nav__mobile-nav">
          {nav.sections.map((section) => (
            <div key={section.id} class="stripe-nav__mobile-section">
              <button
                class={`stripe-nav__mobile-button ${
                  mobileActiveSection.value === section.id
                    ? "stripe-nav__mobile-button--open"
                    : ""
                }`}
                onClick={() =>
                  mobileActiveSection.value =
                    mobileActiveSection.value === section.id
                      ? null
                      : section.id}
              >
                <span>{section.label}</span>
                <svg
                  class={`stripe-nav__mobile-chevron ${
                    mobileActiveSection.value === section.id
                      ? "stripe-nav__mobile-chevron--open"
                      : ""
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                    stroke-linecap="round"
                  />
                </svg>
              </button>

              <div
                class={`stripe-nav__mobile-submenu ${
                  mobileActiveSection.value === section.id
                    ? "stripe-nav__mobile-submenu--open"
                    : ""
                }`}
              >
                {section.items?.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    class="stripe-nav__mobile-link"
                  >
                    <span
                      class="stripe-nav__mobile-icon"
                      dangerouslySetInnerHTML={{
                        __html: icons[item.icon || "info"],
                      }}
                    />
                    <div class="stripe-nav__mobile-text">
                      <span class="stripe-nav__mobile-label">{item.label}</span>
                      {item.description && (
                        <span class="stripe-nav__mobile-desc">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <a href={nav.sections[0].href} class="btn btn--primary">
            {nav.cta}
          </a>

          <a href={`${localePath}/login`} class="btn btn--outline">
            {nav.login}
          </a>
        </nav>
      </div>
    </header>
  );
}
