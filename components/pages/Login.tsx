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
        "Attraktive Renditen fur Anleger",
      ],
    },
    support: {
      title: "Brauchen Sie Hilfe?",
      text: "Unser Support-Team ist fur Sie da.",
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
      description: "Gerez votre credit et vos paiements",
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
    <div class="min-h-screen bg-gray-50 flex">
      {/* Left Side - Login Form */}
      <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:max-w-md">
          <div class="text-center mb-8">
            <a href={localePath || "/"} class="inline-block mb-6">
              <svg class="h-10 w-auto" viewBox="0 0 120 32" fill="none">
                <text x="0" y="24" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#1e3a5f">
                  cashare
                </text>
              </svg>
            </a>
            <h1 class="text-3xl font-bold text-gray-900">{t.title}</h1>
            <p class="mt-2 text-gray-600">{t.subtitle}</p>
          </div>

          {/* Login Type Selection */}
          <div class="grid grid-cols-2 gap-4 mb-8">
            <a
              href={t.borrowerLogin.href}
              class="flex flex-col items-center p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900">{t.borrowerLogin.title}</h3>
              <p class="text-xs text-gray-500 text-center mt-1">{t.borrowerLogin.description}</p>
            </a>
            <a
              href={t.investorLogin.href}
              class="flex flex-col items-center p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all"
            >
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900">{t.investorLogin.title}</h3>
              <p class="text-xs text-gray-500 text-center mt-1">{t.investorLogin.description}</p>
            </a>
          </div>

          {/* Divider */}
          <div class="relative my-8">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-gray-50 text-gray-500">{t.orContinueWith}</span>
            </div>
          </div>

          {/* Quick Login Form (demo) */}
          <form class="space-y-6" action={t.investorLogin.href} method="GET">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.emailPlaceholder}
                class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                {t.password}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder={t.passwordPlaceholder}
                class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label for="remember" class="ml-2 text-sm text-gray-600">
                  {t.rememberMe}
                </label>
              </div>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-700">
                {t.forgotPassword}
              </a>
            </div>

            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
            >
              {t.login}
            </button>
          </form>

          <p class="mt-8 text-center text-sm text-gray-600">
            {t.noAccount}{" "}
            <a href={`${localePath}/kredit-beantragen`} class="font-semibold text-blue-600 hover:text-blue-700">
              {t.register}
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Info */}
      <div class="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div class="relative flex flex-col justify-center px-12 xl:px-20">
          <h2 class="text-3xl font-bold text-white mb-8">{t.benefits.title}</h2>
          <ul class="space-y-4">
            {t.benefits.items.map((item, index) => (
              <li key={index} class="flex items-start">
                <svg class="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-blue-100">{item}</span>
              </li>
            ))}
          </ul>

          <div class="mt-12 pt-8 border-t border-blue-700">
            <h3 class="text-lg font-semibold text-white mb-2">{t.support.title}</h3>
            <p class="text-blue-200 text-sm mb-4">{t.support.text}</p>
            <div class="space-y-2">
              <a href={`mailto:${t.support.email}`} class="flex items-center text-blue-100 hover:text-white">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.support.email}
              </a>
              <a href={`tel:${t.support.phone}`} class="flex items-center text-blue-100 hover:text-white">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
