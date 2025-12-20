import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import type { Locale } from "../lib/i18n/index.ts";

interface HeaderProps {
  locale: Locale;
  currentPath?: string;
}

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  label: string;
  href: string;
  items?: NavItem[];
}

const navigation = {
  de: {
    sections: [
      {
        label: "Kredit beantragen",
        href: "/kredit-beantragen",
        items: [
          { label: "Privatkredit", href: "/kredit-beantragen/privatkredit" },
          { label: "KMU Kredit", href: "/kredit-beantragen/kmu-kredit" },
          { label: "Hypothek", href: "/kredit-beantragen/hypotheken" },
        ],
      },
      {
        label: "Investieren",
        href: "/investieren",
        items: [
          { label: "Private Anleger", href: "/investieren/privatinvestoren" },
          { label: "Institutionelle Anleger", href: "/investieren/institutionelle-investoren" },
        ],
      },
      {
        label: "Über uns",
        href: "/ueber-uns",
        items: [
          { label: "Wer sind wir", href: "/ueber-uns/wer-sind-wir" },
          { label: "Crowdlending", href: "/ueber-uns/crowdlending" },
          { label: "Statistik", href: "/ueber-uns/statistik" },
          { label: "Jobs", href: "/ueber-uns/jobs" },
          { label: "Partner", href: "/ueber-uns/partner" },
          { label: "Blog", href: "/ueber-uns/blog" },
        ],
      },
    ],
    login: "Login",
    cta: "Loslegen",
  },
  en: {
    sections: [
      {
        label: "Apply for Loan",
        href: "/en/apply-for-loan",
        items: [
          { label: "Private Loan", href: "/en/apply-for-loan/private" },
          { label: "SME Loan", href: "/en/apply-for-loan/sme" },
          { label: "Mortgage", href: "/en/apply-for-loan/mortgage" },
        ],
      },
      {
        label: "Invest",
        href: "/en/invest",
        items: [
          { label: "Private Investors", href: "/en/invest/private" },
          { label: "Institutional Investors", href: "/en/invest/institutional" },
        ],
      },
      {
        label: "About Us",
        href: "/en/about-us",
        items: [
          { label: "Who We Are", href: "/en/about-us/who-we-are" },
          { label: "Crowdlending", href: "/en/about-us/crowdlending" },
          { label: "Statistics", href: "/en/about-us/statistics" },
          { label: "Jobs", href: "/en/about-us/jobs" },
          { label: "Partners", href: "/en/about-us/partners" },
          { label: "Blog", href: "/en/about-us/blog" },
        ],
      },
    ],
    login: "Login",
    cta: "Get Started",
  },
  fr: {
    sections: [
      {
        label: "Demander un crédit",
        href: "/fr/demander-credit",
        items: [
          { label: "Crédit privé", href: "/fr/demander-credit/prive" },
          { label: "Crédit PME", href: "/fr/demander-credit/pme" },
          { label: "Hypothèque", href: "/fr/demander-credit/hypotheque" },
        ],
      },
      {
        label: "Investir",
        href: "/fr/investir",
        items: [
          { label: "Investisseurs privés", href: "/fr/investir/prives" },
          { label: "Investisseurs institutionnels", href: "/fr/investir/institutionnels" },
        ],
      },
      {
        label: "À propos",
        href: "/fr/a-propos",
        items: [
          { label: "Qui sommes-nous", href: "/fr/a-propos/qui-sommes-nous" },
          { label: "Crowdlending", href: "/fr/a-propos/crowdlending" },
          { label: "Statistiques", href: "/fr/a-propos/statistiques" },
          { label: "Emplois", href: "/fr/a-propos/emplois" },
          { label: "Partenaires", href: "/fr/a-propos/partenaires" },
          { label: "Blog", href: "/fr/a-propos/blog" },
        ],
      },
    ],
    login: "Connexion",
    cta: "Commencer",
  },
};

// Signals for state management
const isScrolled = signal(false);
const isMobileMenuOpen = signal(false);
const activeDropdown = signal<string | null>(null);

export default function Header({ locale, currentPath = "" }: HeaderProps) {
  const nav = navigation[locale];
  const localePath = locale === "de" ? "" : `/${locale}`;

  useEffect(() => {
    // Handle scroll event for sticky header
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20;
    };

    // Handle clicks outside dropdowns
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".header__nav-item")) {
        activeDropdown.value = null;
      }
    };

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        activeDropdown.value = null;
        isMobileMenuOpen.value = false;
      }
    };

    // Prevent scroll when mobile menu is open
    if (isMobileMenuOpen.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, []);

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };

  const handleDropdownToggle = (label: string) => {
    activeDropdown.value = activeDropdown.value === label ? null : label;
  };

  const isActive = (href: string) => {
    return currentPath === href || currentPath.startsWith(href + "/");
  };

  return (
    <header
      class={`header ${isScrolled.value ? "header--scrolled" : ""}`}
    >
      <div class="header__container">
        {/* Logo */}
        <a href={localePath || "/"} class="header__logo">
          <svg class="header__logo-img" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="28" font-family="Plus Jakarta Sans, sans-serif" font-size="28" font-weight="700" fill="white">
              cashare
            </text>
          </svg>
        </a>

        {/* Desktop Navigation */}
        <nav class="header__nav header__nav--desktop">
          {nav.sections.map((section) => (
            <div
              key={section.label}
              class="header__nav-item"
              onMouseEnter={() => section.items && (activeDropdown.value = section.label)}
              onMouseLeave={() => activeDropdown.value = null}
            >
              <a
                href={section.href}
                class={`header__nav-link hover-underline ${isActive(section.href) ? "header__nav-link--active" : ""}`}
              >
                {section.label}
                {section.items && (
                  <svg
                    class={`header__nav-chevron ${activeDropdown.value === section.label ? "header__nav-chevron--open" : ""}`}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {section.items && (
                <div
                  class={`header__dropdown ${activeDropdown.value === section.label ? "header__dropdown--open" : ""}`}
                >
                  <div class="header__dropdown-content animate--fade-down">
                    {section.items.map((item, index) => (
                      <a
                        key={item.href}
                        href={item.href}
                        class={`header__dropdown-link ${isActive(item.href) ? "header__dropdown-link--active" : ""}`}
                        style={`animation-delay: ${index * 50}ms`}
                      >
                        <span class="header__dropdown-link-text">{item.label}</span>
                        <svg
                          class="header__dropdown-link-arrow"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side actions */}
        <div class="header__actions">
          {/* Language Switcher */}
          <div class="header__lang-switcher">
            <a
              href="/"
              class={`header__lang ${locale === "de" ? "header__lang--active" : ""}`}
            >
              DE
            </a>
            <a
              href="/en"
              class={`header__lang ${locale === "en" ? "header__lang--active" : ""}`}
            >
              EN
            </a>
            <a
              href="/fr"
              class={`header__lang ${locale === "fr" ? "header__lang--active" : ""}`}
            >
              FR
            </a>
          </div>

          {/* Login Button - Desktop */}
          <a href={`${localePath}/login`} class="header__login header__login--desktop">
            {nav.login}
          </a>

          {/* CTA Button */}
          <a href={nav.sections[0].href} class="header__cta">
            {nav.cta}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            class={`header__menu-toggle ${isMobileMenuOpen.value ? "header__menu-toggle--open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen.value}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen.value && (
        <div
          class="header__mobile-backdrop"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        class={`header__mobile-menu ${isMobileMenuOpen.value ? "header__mobile-menu--open" : ""}`}
      >
        <div class="header__mobile-content">
          {/* Mobile Header */}
          <div class="header__mobile-header">
            <svg class="header__logo-img" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="28" font-family="Plus Jakarta Sans, sans-serif" font-size="28" font-weight="700" fill="var(--color-primary)">
                cashare
              </text>
            </svg>
            <button
              class="header__mobile-close"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav class="header__mobile-nav">
            {nav.sections.map((section, sectionIndex) => (
              <div key={section.label} class="header__mobile-section">
                {section.items ? (
                  <>
                    <button
                      class={`header__mobile-section-button ${activeDropdown.value === section.label ? "header__mobile-section-button--open" : ""}`}
                      onClick={() => handleDropdownToggle(section.label)}
                      style={`animation-delay: ${sectionIndex * 50}ms`}
                    >
                      <span>{section.label}</span>
                      <svg
                        class={`header__mobile-chevron ${activeDropdown.value === section.label ? "header__mobile-chevron--open" : ""}`}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                      </svg>
                    </button>
                    <div
                      class={`header__mobile-submenu ${activeDropdown.value === section.label ? "header__mobile-submenu--open" : ""}`}
                    >
                      {section.items.map((item, itemIndex) => (
                        <a
                          key={item.href}
                          href={item.href}
                          class={`header__mobile-link ${isActive(item.href) ? "header__mobile-link--active" : ""}`}
                          style={`animation-delay: ${(sectionIndex + itemIndex) * 50}ms`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={section.href}
                    class={`header__mobile-section-link ${isActive(section.href) ? "header__mobile-section-link--active" : ""}`}
                    style={`animation-delay: ${sectionIndex * 50}ms`}
                  >
                    {section.label}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile Login */}
            <a
              href={`${localePath}/login`}
              class="header__mobile-login"
              style={`animation-delay: ${nav.sections.length * 50}ms`}
            >
              {nav.login}
            </a>
          </nav>

          {/* Mobile Language Switcher */}
          <div class="header__mobile-lang">
            <a href="/" class={`header__lang ${locale === "de" ? "header__lang--active" : ""}`}>
              Deutsch
            </a>
            <a href="/en" class={`header__lang ${locale === "en" ? "header__lang--active" : ""}`}>
              English
            </a>
            <a href="/fr" class={`header__lang ${locale === "fr" ? "header__lang--active" : ""}`}>
              Français
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
