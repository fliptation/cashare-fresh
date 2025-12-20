import type { Locale } from "../lib/i18n/index.ts";

interface HeaderProps {
  locale: Locale;
}

const navigation = {
  de: {
    loan: { label: "Kredit beantragen", href: "/kredit-beantragen" },
    loanItems: [
      { label: "Privatkredit", href: "/kredit-beantragen/privatkredit" },
      { label: "KMU Kredit", href: "/kredit-beantragen/kmu-kredit" },
      { label: "Hypothek", href: "/kredit-beantragen/hypotheken" },
    ],
    invest: { label: "Investieren", href: "/investieren" },
    investItems: [
      { label: "Private Anleger", href: "/investieren/privatinvestoren" },
      { label: "Institutionelle Anleger", href: "/investieren/institutionelle-investoren" },
    ],
    about: { label: "Über uns", href: "/ueber-uns" },
    aboutItems: [
      { label: "Wer sind wir", href: "/ueber-uns/wer-sind-wir" },
      { label: "Crowdlending", href: "/ueber-uns/crowdlending" },
      { label: "Statistik", href: "/ueber-uns/statistik" },
      { label: "Jobs", href: "/ueber-uns/jobs" },
      { label: "Partner", href: "/ueber-uns/partner" },
      { label: "Blog", href: "/ueber-uns/blog" },
    ],
    login: "Login",
    cta: "Loslegen",
  },
  en: {
    loan: { label: "Apply for Loan", href: "/en/apply-for-loan" },
    loanItems: [
      { label: "Private Loan", href: "/en/apply-for-loan/private" },
      { label: "SME Loan", href: "/en/apply-for-loan/sme" },
      { label: "Mortgage", href: "/en/apply-for-loan/mortgage" },
    ],
    invest: { label: "Invest", href: "/en/invest" },
    investItems: [
      { label: "Private Investors", href: "/en/invest/private" },
      { label: "Institutional Investors", href: "/en/invest/institutional" },
    ],
    about: { label: "About Us", href: "/en/about-us" },
    aboutItems: [
      { label: "Who We Are", href: "/en/about-us/who-we-are" },
      { label: "Crowdlending", href: "/en/about-us/crowdlending" },
      { label: "Statistics", href: "/en/about-us/statistics" },
      { label: "Jobs", href: "/en/about-us/jobs" },
      { label: "Partners", href: "/en/about-us/partners" },
      { label: "Blog", href: "/en/about-us/blog" },
    ],
    login: "Login",
    cta: "Get Started",
  },
  fr: {
    loan: { label: "Demander un crédit", href: "/fr/demander-credit" },
    loanItems: [
      { label: "Crédit privé", href: "/fr/demander-credit/prive" },
      { label: "Crédit PME", href: "/fr/demander-credit/pme" },
      { label: "Hypothèque", href: "/fr/demander-credit/hypotheque" },
    ],
    invest: { label: "Investir", href: "/fr/investir" },
    investItems: [
      { label: "Investisseurs privés", href: "/fr/investir/prives" },
      { label: "Investisseurs institutionnels", href: "/fr/investir/institutionnels" },
    ],
    about: { label: "À propos", href: "/fr/a-propos" },
    aboutItems: [
      { label: "Qui sommes-nous", href: "/fr/a-propos/qui-sommes-nous" },
      { label: "Crowdlending", href: "/fr/a-propos/crowdlending" },
      { label: "Statistiques", href: "/fr/a-propos/statistiques" },
      { label: "Emplois", href: "/fr/a-propos/emplois" },
      { label: "Partenaires", href: "/fr/a-propos/partenaires" },
      { label: "Blog", href: "/fr/a-propos/blog" },
    ],
    login: "Connexion",
    cta: "Commencer",
  },
};

export function Header({ locale }: HeaderProps) {
  const nav = navigation[locale];
  const localePath = locale === "de" ? "" : `/${locale}`;

  return (
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          {/* Logo */}
          <a href={localePath || "/"} class="flex items-center">
            <svg class="h-8 w-auto" viewBox="0 0 120 32" fill="none">
              <text x="0" y="24" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#1e3a5f">
                cashare
              </text>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex items-center space-x-8">
            {/* Loan Dropdown */}
            <div class="relative group">
              <a href={nav.loan.href} class="text-gray-700 hover:text-blue-600 font-medium py-2">
                {nav.loan.label}
              </a>
              <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div class="py-2">
                  {nav.loanItems.map((item) => (
                    <a key={item.href} href={item.href} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Invest Dropdown */}
            <div class="relative group">
              <a href={nav.invest.href} class="text-gray-700 hover:text-blue-600 font-medium py-2">
                {nav.invest.label}
              </a>
              <div class="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div class="py-2">
                  {nav.investItems.map((item) => (
                    <a key={item.href} href={item.href} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div class="relative group">
              <a href={nav.about.href} class="text-gray-700 hover:text-blue-600 font-medium py-2">
                {nav.about.label}
              </a>
              <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div class="py-2">
                  {nav.aboutItems.map((item) => (
                    <a key={item.href} href={item.href} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right side buttons */}
          <div class="flex items-center space-x-4">
            {/* Language Switcher */}
            <div class="flex items-center space-x-1 text-sm">
              <a href="/" class={`px-2 py-1 rounded ${locale === "de" ? "bg-gray-200 font-medium" : "hover:bg-gray-100"}`}>DE</a>
              <a href="/en" class={`px-2 py-1 rounded ${locale === "en" ? "bg-gray-200 font-medium" : "hover:bg-gray-100"}`}>EN</a>
              <a href="/fr" class={`px-2 py-1 rounded ${locale === "fr" ? "bg-gray-200 font-medium" : "hover:bg-gray-100"}`}>FR</a>
            </div>

            <a href={`${localePath}/login`} class="text-gray-700 hover:text-blue-600 font-medium">
              {nav.login}
            </a>
            <a
              href={nav.loan.href}
              class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {nav.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
