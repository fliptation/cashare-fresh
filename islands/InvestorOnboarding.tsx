/**
 * Investor Onboarding Island
 * Allows users to select their investor type (private or institutional)
 * and register directly on the page
 */

import { useSignal } from "@preact/signals";
import type { Locale } from "../lib/i18n/index.ts";

const content = {
  de: {
    heroTitle: "Investieren Sie in Ihre Zukunft",
    heroSubtitle: "Lassen Sie Ihr Geld für sich arbeiten",
    title: "Werden Sie in nur wenigen Schritten zum Investor",
    subtitle: "Welche Art von Anleger sind Sie?",
    note: "Bitte wählen Sie eine Option aus, um fortzufahren.",
    private: {
      title: "Privater Anleger",
      description:
        "Steigern Sie Ihr Vermögen mit unseren massgeschneiderten Anlagemöglichkeiten. Als Privatanleger profitieren Sie von attraktiven Renditen, diversifizieren Ihr Portfolio und unterstützen sinnvolle Projekte.",
    },
    institutional: {
      title: "Institutioneller Anleger",
      description:
        "Maximieren Sie Ihr Portfolio mit unseren massgeschneiderten Anlagelösungen für Institutionen. Profitieren Sie von skalierbaren Möglichkeiten, robustem Risikomanagement und sicheren Renditen – alles zugeschnitten auf die finanziellen Ziele Ihres Unternehmens.",
    },
    form: {
      email: "Ihre E-Mail-Adresse",
      emailPlaceholder: "name@beispiel.ch",
      password: "Ihr Passwort",
      passwordPlaceholder: "Mindestens 8 Zeichen",
      remember: "30 Tage lang merken",
      register: "Registrieren",
      registering: "Registrieren...",
    },
    support: {
      text: "Brauchen Sie Hilfe?",
      cta: "Rufen Sie uns an unter",
      phone: "041 558 48 88",
    },
    login: {
      text: "Haben Sie bereits ein Konto?",
      link: "Einloggen",
    },
    terms: {
      text: "Mit der Anmeldung erklären Sie sich mit unseren",
      link: "Allgemeinen Geschäftsbedingungen",
      textEnd: "einverstanden.",
    },
    validation: {
      emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      passwordRequired: "Bitte geben Sie ein Passwort ein.",
      passwordTooShort: "Das Passwort muss mindestens 8 Zeichen lang sein.",
    },
    continue: "Weiter",
  },
  en: {
    heroTitle: "Invest in Your Future",
    heroSubtitle: "Let your money work for you",
    title: "Become an Investor in Just a Few Steps",
    subtitle: "What type of investor are you?",
    note: "Please select an option to continue.",
    private: {
      title: "Private Investor",
      description:
        "Grow your wealth with our tailored investment opportunities. As a private investor, you benefit from attractive returns, portfolio diversification, and support meaningful projects.",
    },
    institutional: {
      title: "Institutional Investor",
      description:
        "Maximize your portfolio with our customized investment solutions for institutions. Benefit from scalable opportunities, robust risk management, and secure returns – all tailored to your organization's financial goals.",
    },
    form: {
      email: "Your Email Address",
      emailPlaceholder: "name@example.com",
      password: "Your Password",
      passwordPlaceholder: "At least 8 characters",
      remember: "Remember me for 30 days",
      register: "Register",
      registering: "Registering...",
    },
    support: {
      text: "Need help?",
      cta: "Call us at",
      phone: "041 558 48 88",
    },
    login: {
      text: "Already have an account?",
      link: "Log in",
    },
    terms: {
      text: "By registering, you agree to our",
      link: "Terms and Conditions",
      textEnd: ".",
    },
    validation: {
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      passwordRequired: "Please enter a password.",
      passwordTooShort: "Password must be at least 8 characters.",
    },
    continue: "Continue",
  },
  fr: {
    heroTitle: "Investissez dans votre avenir",
    heroSubtitle: "Faites fructifier votre argent",
    title: "Devenez investisseur en quelques étapes",
    subtitle: "Quel type d'investisseur êtes-vous?",
    note: "Veuillez sélectionner une option pour continuer.",
    private: {
      title: "Investisseur privé",
      description:
        "Faites croître votre patrimoine grâce à nos opportunités d'investissement sur mesure. En tant qu'investisseur privé, vous bénéficiez de rendements attractifs, diversifiez votre portefeuille et soutenez des projets significatifs.",
    },
    institutional: {
      title: "Investisseur institutionnel",
      description:
        "Maximisez votre portefeuille avec nos solutions d'investissement personnalisées pour les institutions. Bénéficiez d'opportunités évolutives, d'une gestion des risques robuste et de rendements sécurisés.",
    },
    form: {
      email: "Votre adresse e-mail",
      emailPlaceholder: "nom@exemple.ch",
      password: "Votre mot de passe",
      passwordPlaceholder: "Au moins 8 caractères",
      remember: "Se souvenir pendant 30 jours",
      register: "S'inscrire",
      registering: "Inscription...",
    },
    support: {
      text: "Besoin d'aide?",
      cta: "Appelez-nous au",
      phone: "041 558 48 88",
    },
    login: {
      text: "Vous avez déjà un compte?",
      link: "Connexion",
    },
    terms: {
      text: "En vous inscrivant, vous acceptez nos",
      link: "Conditions générales",
      textEnd: ".",
    },
    validation: {
      emailRequired: "Veuillez saisir votre adresse e-mail.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      passwordRequired: "Veuillez saisir un mot de passe.",
      passwordTooShort: "Le mot de passe doit contenir au moins 8 caractères.",
    },
    continue: "Continuer",
  },
};

type InvestorType = "private" | "institutional";

interface InvestorOnboardingProps {
  locale: Locale;
}

export default function InvestorOnboarding({ locale }: InvestorOnboardingProps) {
  const t = content[locale];
  const localePath = locale === "de" ? "" : `/${locale}`;

  // Selection state
  const selectedType = useSignal<InvestorType | null>(null);

  // Form state
  const email = useSignal("");
  const password = useSignal("");
  const rememberMe = useSignal(false);

  // UI state
  const isLoading = useSignal(false);
  const fieldErrors = useSignal<Record<string, string>>({});

  const handleSelect = (type: InvestorType) => {
    selectedType.value = type;
  };

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
    } else if (password.value.length < 8) {
      errors.password = t.validation.passwordTooShort;
    }

    fieldErrors.value = errors;
    return Object.keys(errors).length === 0;
  };

  // Handle registration
  const handleRegister = async (e: Event) => {
    e.preventDefault();

    if (!validateForm() || !selectedType.value) return;

    isLoading.value = true;

    // Redirect to app.cashare.ch with pre-filled data
    const langCode = locale === "de" ? "de" : locale === "en" ? "en" : "fr";
    const baseUrl = `https://app.cashare.ch/${langCode}/register/investor`;
    const params = new URLSearchParams({
      email: email.value,
      type: selectedType.value,
    });

    window.location.href = `${baseUrl}?${params.toString()}`;
  };

  const loginPath = locale === "de" ? "/login" : `/${locale}/login`;
  const agbPath = locale === "de" ? "/agb" : locale === "en" ? "/en/terms" : "/fr/cgv";

  return (
    <div class="onboarding-page">
      {/* Left Panel - Selection Form */}
      <div class="onboarding-form-panel">
        <div class="onboarding-form-panel__inner">
          <a href={localePath || "/"} class="onboarding-form-panel__logo">
            <img
              src="/images/cashare-black-logo.svg"
              alt="Cashare"
              class="onboarding-form-panel__logo-img"
            />
          </a>

          <div class="onboarding-form-panel__header">
            <h1 class="onboarding-form-panel__title">{t.title}</h1>
            <p class="onboarding-form-panel__subtitle">{t.subtitle}</p>
          </div>

          {/* Investor Type Selection */}
          <div class="onboarding-types">
            <button
              type="button"
              class={`onboarding-type-card ${
                selectedType.value === "private" ? "onboarding-type-card--selected" : ""
              }`}
              onClick={() => handleSelect("private")}
            >
              <div class="onboarding-type-card__icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div class="onboarding-type-card__content">
                <h3 class="onboarding-type-card__title">{t.private.title}</h3>
                <p class="onboarding-type-card__desc">{t.private.description}</p>
              </div>
              <div class="onboarding-type-card__check">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
                  {selectedType.value === "private" && (
                    <path
                      d="M8 12l2.5 2.5L16 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  )}
                </svg>
              </div>
            </button>

            <button
              type="button"
              class={`onboarding-type-card ${
                selectedType.value === "institutional" ? "onboarding-type-card--selected" : ""
              }`}
              onClick={() => handleSelect("institutional")}
            >
              <div class="onboarding-type-card__icon onboarding-type-card__icon--institutional">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div class="onboarding-type-card__content">
                <h3 class="onboarding-type-card__title">{t.institutional.title}</h3>
                <p class="onboarding-type-card__desc">{t.institutional.description}</p>
              </div>
              <div class="onboarding-type-card__check">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
                  {selectedType.value === "institutional" && (
                    <path
                      d="M8 12l2.5 2.5L16 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  )}
                </svg>
              </div>
            </button>
          </div>

          {/* Registration Form - shown when type is selected */}
          {selectedType.value ? (
            <form class="onboarding-form" onSubmit={handleRegister}>
              <div class="form-group">
                <label for="email" class="form-label">
                  {t.form.email} <span class="form-required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.form.emailPlaceholder}
                  class={`form-input ${fieldErrors.value.email ? "form-input--error" : ""}`}
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
                  {t.form.password} <span class="form-required">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder={t.form.passwordPlaceholder}
                  class={`form-input ${fieldErrors.value.password ? "form-input--error" : ""}`}
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

              <label class="onboarding-form__checkbox">
                <input
                  type="checkbox"
                  checked={rememberMe.value}
                  onChange={(e) => {
                    rememberMe.value = (e.target as HTMLInputElement).checked;
                  }}
                />
                <span class="onboarding-form__checkbox-label">{t.form.remember}</span>
              </label>

              {/* Login Link */}
              <p class="onboarding-login">
                {t.login.text}{" "}
                <a href={loginPath}>{t.login.link}</a>.
              </p>

              <button
                type="submit"
                class="btn btn--primary btn--full"
                disabled={isLoading.value}
              >
                {isLoading.value ? t.form.registering : t.form.register}
              </button>

              {/* Terms */}
              <p class="onboarding-terms">
                {t.terms.text}{" "}
                <a href={agbPath}>{t.terms.link}</a>{" "}
                {t.terms.textEnd}
              </p>
            </form>
          ) : (
            <>
              {/* Note and disabled button - shown when no type selected */}
              <p class="onboarding-note">{t.note}</p>
              <button
                type="button"
                class="btn btn--dark btn--full"
                disabled
              >
                {t.continue}
              </button>
              {/* Terms */}
              <p class="onboarding-terms">
                {t.terms.text}{" "}
                <a href={agbPath}>{t.terms.link}</a>{" "}
                {t.terms.textEnd}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Right Panel - Info */}
      <div class="onboarding-info-panel">
        <div class="onboarding-info-panel__orb onboarding-info-panel__orb--1"></div>
        <div class="onboarding-info-panel__orb onboarding-info-panel__orb--2"></div>

        <div class="onboarding-info-panel__content">
          <h2 class="onboarding-info-panel__title">{t.heroTitle}</h2>
          <p class="onboarding-info-panel__subtitle">{t.heroSubtitle}</p>

          <div class="onboarding-support">
            <p class="onboarding-support__text">
              {t.support.text}{" "}
              {t.support.cta}{" "}
              <a href={`tel:+4141${t.support.phone.replace(/\s/g, "")}`}>
                {t.support.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
