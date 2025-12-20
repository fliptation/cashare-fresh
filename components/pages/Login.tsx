import type { Locale } from "../../lib/i18n/index.ts";

interface LoginProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Anmelden",
    subtitle: "Willkommen zuruck bei Cashare",
    email: "E-Mail-Adresse",
    emailPlaceholder: "name@beispiel.ch",
    password: "Passwort",
    passwordPlaceholder: "Ihr Passwort",
    rememberMe: "Angemeldet bleiben",
    forgotPassword: "Passwort vergessen?",
    login: "Anmelden",
    noAccount: "Noch kein Konto?",
    register: "Jetzt registrieren",
    orContinueWith: "Oder anmelden mit",
    borrowerLogin: {
      title: "Kreditnehmer",
      description: "Verwalten Sie Ihren Kredit und Zahlungen",
      href: "https://app.cashare.ch/borrower/login",
    },
    investorLogin: {
      title: "Anleger",
      description: "Verwalten Sie Ihre Investitionen",
      href: "https://app.cashare.ch/investor/login",
    },
    benefits: {
      title: "Warum Cashare?",
      items: [
        "Seit 2008 der Schweizer Pionier im Crowdlending",
        "FINMA-reguliert und sicher",
        "Uber CHF 2.5 Mrd. finanziertes Volumen",
        "Attraktive Renditen für Anleger",
      ],
    },
    support: {
      title: "Brauchen Sie Hilfe?",
      text: "Unser Support-Team ist für Sie da.",
      email: "support@cashare.ch",
      phone: "+41 41 544 61 70",
    },
  },
  en: {
    title: "Log In",
    subtitle: "Welcome back to Cashare",
    email: "Email Address",
    emailPlaceholder: "name@example.com",
    password: "Password",
    passwordPlaceholder: "Your password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    login: "Log In",
    noAccount: "Don't have an account?",
    register: "Register now",
    orContinueWith: "Or continue with",
    borrowerLogin: {
      title: "Borrower",
      description: "Manage your loan and payments",
      href: "https://app.cashare.ch/borrower/login",
    },
    investorLogin: {
      title: "Investor",
      description: "Manage your investments",
      href: "https://app.cashare.ch/investor/login",
    },
    benefits: {
      title: "Why Cashare?",
      items: [
        "Swiss crowdlending pioneer since 2008",
        "FINMA-regulated and secure",
        "Over CHF 2.5 billion funded volume",
        "Attractive returns for investors",
      ],
    },
    support: {
      title: "Need Help?",
      text: "Our support team is here for you.",
      email: "support@cashare.ch",
      phone: "+41 41 544 61 70",
    },
  },
  fr: {
    title: "Connexion",
    subtitle: "Bienvenue sur Cashare",
    email: "Adresse e-mail",
    emailPlaceholder: "nom@exemple.ch",
    password: "Mot de passe",
    passwordPlaceholder: "Votre mot de passe",
    rememberMe: "Se souvenir de moi",
    forgotPassword: "Mot de passe oublie?",
    login: "Se connecter",
    noAccount: "Pas encore de compte?",
    register: "S'inscrire maintenant",
    orContinueWith: "Ou continuer avec",
    borrowerLogin: {
      title: "Emprunteur",
      description: "Gerez votre crédit et vos paiements",
      href: "https://app.cashare.ch/borrower/login",
    },
    investorLogin: {
      title: "Investisseur",
      description: "Gerez vos investissements",
      href: "https://app.cashare.ch/investor/login",
    },
    benefits: {
      title: "Pourquoi Cashare?",
      items: [
        "Pionnier suisse du crowdlending depuis 2008",
        "Regule par la FINMA et securise",
        "Plus de CHF 2,5 milliards de volume finance",
        "Rendements attractifs pour les investisseurs",
      ],
    },
    support: {
      title: "Besoin d'aide?",
      text: "Notre equipe de support est la pour vous.",
      email: "support@cashare.ch",
      phone: "+41 41 544 61 70",
    },
  },
};

export function Login({ locale }: LoginProps) {
  const t = content[locale];
  const localePath = locale === "de" ? "" : `/${locale}`;

  return (
    <div class="login-page">
      {/* Left Side - Login Form */}
      <div class="login-form-panel">
        <div class="login-form-panel__inner">
          <a href={localePath || "/"} class="login-form-panel__logo">
            <span class="login-form-panel__logo-text">cashare</span>
          </a>

          <div class="login-form-panel__header">
            <h1 class="login-form-panel__title">{t.title}</h1>
            <p class="login-form-panel__subtitle">{t.subtitle}</p>
          </div>

          {/* Login Type Selection */}
          <div class="login-types">
            <a href={t.borrowerLogin.href} class="login-type-card">
              <div class="login-type-card__icon login-type-card__icon--borrower">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 class="login-type-card__title">{t.borrowerLogin.title}</h3>
              <p class="login-type-card__desc">{t.borrowerLogin.description}</p>
            </a>
            <a
              href={t.investorLogin.href}
              class="login-type-card login-type-card--investor"
            >
              <div class="login-type-card__icon login-type-card__icon--investor">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 class="login-type-card__title">{t.investorLogin.title}</h3>
              <p class="login-type-card__desc">{t.investorLogin.description}</p>
            </a>
          </div>

          {/* Divider */}
          <div class="login-divider">
            <div class="login-divider__line"></div>
            <span class="login-divider__text">{t.orContinueWith}</span>
          </div>

          {/* Quick Login Form */}
          <form class="login-form" action={t.investorLogin.href} method="GET">
            <div class="form-group">
              <label for="email" class="form-label">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.emailPlaceholder}
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="password" class="form-label">
                {t.password}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder={t.passwordPlaceholder}
                class="form-input"
              />
            </div>

            <div class="login-form__row">
              <label class="login-form__checkbox">
                <input type="checkbox" id="remember" name="remember" />
                <span class="login-form__checkbox-label">{t.rememberMe}</span>
              </label>
              <a
                href={
                  locale === "de"
                    ? "/passwort-zuruecksetzen"
                    : locale === "en"
                    ? "/en/reset-password"
                    : "/fr/reinitialiser-mot-de-passe"
                }
                class="login-form__link"
              >
                {t.forgotPassword}
              </a>
            </div>

            <button type="submit" class="btn btn--primary btn--full btn--lg">
              {t.login}
            </button>
          </form>

          <p class="login-form__footer">
            {t.noAccount}{" "}
            <a href={`${localePath}/kredit-beantragen`}>{t.register}</a>
          </p>
        </div>
      </div>

      {/* Right Side - Info */}
      <div class="login-info-panel">
        <div class="login-info-panel__orb login-info-panel__orb--1"></div>
        <div class="login-info-panel__orb login-info-panel__orb--2"></div>

        <div class="login-info-panel__content">
          <h2 class="login-info-panel__title">{t.benefits.title}</h2>

          <div class="login-benefits">
            {t.benefits.items.map((item, index) => (
              <div key={index} class="login-benefits__item">
                <svg
                  class="login-benefits__icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="login-benefits__text">{item}</span>
              </div>
            ))}
          </div>

          <div class="login-support">
            <h3 class="login-support__title">{t.support.title}</h3>
            <p class="login-support__text">{t.support.text}</p>
            <div class="login-support__links">
              <a href={`mailto:${t.support.email}`} class="login-support__link">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t.support.email}
              </a>
              <a href={`tel:${t.support.phone}`} class="login-support__link">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {t.support.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
