/**
 * Login Form Island
 * Handles user login with API integration
 */

import { useSignal } from "@preact/signals";
import {
  getBorrowerDashboardUrl,
  getInvestorDashboardUrl,
  login,
} from "../lib/api/cashare.ts";
import { storeTokens, storeUserDetails } from "../lib/auth/storage.ts";
import TwoFactorModal from "./modals/TwoFactorModal.tsx";
import ErrorModal from "./modals/ErrorModal.tsx";
import type { Locale } from "../lib/i18n/index.ts";

const content = {
  de: {
    title: "Anmelden",
    subtitle: "Willkommen zurück bei Cashare",
    email: "E-Mail-Adresse",
    emailPlaceholder: "name@beispiel.ch",
    password: "Passwort",
    passwordPlaceholder: "Ihr Passwort",
    rememberMe: "Angemeldet bleiben",
    forgotPassword: "Passwort vergessen?",
    login: "Anmelden",
    loggingIn: "Anmelden...",
    noAccount: "Noch kein Konto?",
    register: "Jetzt registrieren",
    borrowerLogin: {
      title: "Kreditnehmer",
      description: "Verwalten Sie Ihren Kredit und Zahlungen",
    },
    investorLogin: {
      title: "Anleger",
      description: "Verwalten Sie Ihre Investitionen",
    },
    benefits: {
      title: "Warum Cashare?",
      items: [
        "Seit 2008 der Schweizer Pionier im Crowdlending",
        "FINMA-reguliert und sicher",
        "Über CHF 2.5 Mrd. finanziertes Volumen",
        "Attraktive Renditen für Anleger",
      ],
    },
    support: {
      title: "Brauchen Sie Hilfe?",
      text: "Unser Support-Team ist für Sie da.",
      email: "support@cashare.ch",
      phone: "+41 41 544 61 70",
    },
    validation: {
      emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      passwordRequired: "Bitte geben Sie ein Passwort ein.",
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
    loggingIn: "Logging in...",
    noAccount: "Don't have an account?",
    register: "Register now",
    borrowerLogin: {
      title: "Borrower",
      description: "Manage your loan and payments",
    },
    investorLogin: {
      title: "Investor",
      description: "Manage your investments",
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
    validation: {
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      passwordRequired: "Please enter a password.",
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
    forgotPassword: "Mot de passe oublié?",
    login: "Se connecter",
    loggingIn: "Connexion...",
    noAccount: "Pas encore de compte?",
    register: "S'inscrire maintenant",
    borrowerLogin: {
      title: "Emprunteur",
      description: "Gérez votre crédit et vos paiements",
    },
    investorLogin: {
      title: "Investisseur",
      description: "Gérez vos investissements",
    },
    benefits: {
      title: "Pourquoi Cashare?",
      items: [
        "Pionnier suisse du crowdlending depuis 2008",
        "Régulé par la FINMA et sécurisé",
        "Plus de CHF 2,5 milliards de volume financé",
        "Rendements attractifs pour les investisseurs",
      ],
    },
    support: {
      title: "Besoin d'aide?",
      text: "Notre équipe de support est là pour vous.",
      email: "support@cashare.ch",
      phone: "+41 41 544 61 70",
    },
    validation: {
      emailRequired: "Veuillez saisir votre adresse e-mail.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      passwordRequired: "Veuillez saisir un mot de passe.",
    },
  },
};

type UserType = "borrower" | "investor";

interface LoginFormProps {
  locale: Locale;
}

export default function LoginForm({ locale }: LoginFormProps) {
  const t = content[locale];
  const localePath = locale === "de" ? "" : `/${locale}`;

  // Form state
  const email = useSignal("");
  const password = useSignal("");
  const selectedType = useSignal<UserType | null>(null);

  // UI state
  const isLoading = useSignal(false);
  const fieldErrors = useSignal<Record<string, string>>({});

  // Modal state
  const showTwoFactor = useSignal(false);
  const showError = useSignal(false);
  const errorMessage = useSignal("");

  // Validation
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!email.value) {
      errors.email = t.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errors.email = t.validation.emailInvalid;
    }

    if (!password.value) {
      errors.password = t.validation.passwordRequired;
    }

    fieldErrors.value = errors;
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: Event, authCode = "") => {
    e.preventDefault();

    if (!validateForm()) return;

    isLoading.value = true;

    try {
      const response = await login({
        email: email.value,
        password: password.value,
        authCode,
        language: locale,
      });

      // Handle response based on action
      switch (response.action) {
        case "redirect":
          // Success! Store tokens and redirect
          if (response.token && response.refresh_token) {
            storeTokens({
              token: response.token,
              refresh_token: response.refresh_token,
            });
          }
          if (response.userDetails) {
            storeUserDetails(response.userDetails);
          }
          // Redirect based on user type or response
          if (response.redirect) {
            window.location.href = response.redirect;
          } else if (selectedType.value === "investor") {
            window.location.href = getInvestorDashboardUrl(locale);
          } else {
            window.location.href = getBorrowerDashboardUrl(locale);
          }
          break;

        case "requestPossessionFactorAuthenticationToken":
          // 2FA required
          showTwoFactor.value = true;
          break;

        case "message":
        case "modalNLNL":
          // Error message
          errorMessage.value = response.message || "Login failed";
          showError.value = true;
          break;

        default:
          errorMessage.value = response.message || "Unexpected response";
          showError.value = true;
      }
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "Login failed";
      showError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  // Handle 2FA submission
  const handleTwoFactorSubmit = async (code: string) => {
    showTwoFactor.value = false;
    const fakeEvent = { preventDefault: () => {} } as Event;
    await handleSubmit(fakeEvent, code);
  };

  // Handle type selection
  const handleTypeSelect = (type: UserType) => {
    selectedType.value = type;
  };

  return (
    <>
      <div class="login-page">
        {/* Left Side - Login Form */}
        <div class="login-form-panel">
          <div class="login-form-panel__inner">
            <a href={localePath || "/"} class="login-form-panel__logo">
              <img src="/images/cashare-black-logo.svg" alt="Cashare" class="login-form-panel__logo-img" />
            </a>

            <div class="login-form-panel__header">
              <h1 class="login-form-panel__title">{t.title}</h1>
              <p class="login-form-panel__subtitle">{t.subtitle}</p>
            </div>

            {/* Login Form */}
            <form class="login-form" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="email" class="form-label">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  class={`form-input ${
                    fieldErrors.value.email ? "form-input--error" : ""
                  }`}
                  value={email.value}
                  onInput={(e) => {
                    email.value = (e.target as HTMLInputElement).value;
                    if (fieldErrors.value.email) {
                      const { email: _, ...rest } = fieldErrors.value;
                      fieldErrors.value = rest;
                    }
                  }}
                />
                {fieldErrors.value.email && (
                  <span class="form-error">{fieldErrors.value.email}</span>
                )}
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
                  class={`form-input ${
                    fieldErrors.value.password ? "form-input--error" : ""
                  }`}
                  value={password.value}
                  onInput={(e) => {
                    password.value = (e.target as HTMLInputElement).value;
                    if (fieldErrors.value.password) {
                      const { password: _, ...rest } = fieldErrors.value;
                      fieldErrors.value = rest;
                    }
                  }}
                />
                {fieldErrors.value.password && (
                  <span class="form-error">{fieldErrors.value.password}</span>
                )}
              </div>

              <div class="login-form__row">
                <label class="login-form__checkbox">
                  <input type="checkbox" id="remember" name="remember" />
                  <span class="login-form__checkbox-label">{t.rememberMe}</span>
                </label>
                <a
                  href={locale === "de"
                    ? "/passwort-zuruecksetzen"
                    : locale === "en"
                    ? "/en/reset-password"
                    : "/fr/reinitialiser-mot-de-passe"}
                  class="login-form__link"
                >
                  {t.forgotPassword}
                </a>
              </div>

              <button
                type="submit"
                class="btn btn--dark btn--full"
                disabled={isLoading.value}
              >
                {isLoading.value ? t.loggingIn : t.login}
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
                <a
                  href={`mailto:${t.support.email}`}
                  class="login-support__link"
                >
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

      {/* Modals */}
      <TwoFactorModal
        isOpen={showTwoFactor.value}
        onClose={() => showTwoFactor.value = false}
        onSubmit={handleTwoFactorSubmit}
        locale={locale}
      />

      <ErrorModal
        isOpen={showError.value}
        onClose={() => showError.value = false}
        message={errorMessage.value}
        locale={locale}
      />
    </>
  );
}
