import type { Locale } from "../../lib/i18n/index.ts";

interface PasswordResetProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Passwort zurücksetzen",
    subtitle: "Geben Sie Ihre E-Mail-Adresse ein, um Ihr Passwort zurückzusetzen",
    email: "E-Mail-Adresse",
    emailPlaceholder: "name@beispiel.ch",
    submit: "Link senden",
    backToLogin: "Zurück zur Anmeldung",
    successTitle: "E-Mail gesendet",
    successText:
      "Wenn ein Konto mit dieser E-Mail existiert, erhalten Sie in Kürze einen Link zum Zurücksetzen Ihres Passworts.",
    info: {
      title: "Passwort vergessen?",
      text: "Kein Problem! Geben Sie einfach Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts.",
      steps: [
        "E-Mail-Adresse eingeben",
        "Link in der E-Mail anklicken",
        "Neues Passwort festlegen",
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
    title: "Reset Password",
    subtitle: "Enter your email address to reset your password",
    email: "Email Address",
    emailPlaceholder: "name@example.com",
    submit: "Send Link",
    backToLogin: "Back to Login",
    successTitle: "Email Sent",
    successText:
      "If an account with this email exists, you will receive a password reset link shortly.",
    info: {
      title: "Forgot Password?",
      text: "No problem! Simply enter your email address and we'll send you a link to reset your password.",
      steps: [
        "Enter your email address",
        "Click the link in the email",
        "Set a new password",
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
    title: "Réinitialiser le mot de passe",
    subtitle: "Entrez votre adresse e-mail pour réinitialiser votre mot de passe",
    email: "Adresse e-mail",
    emailPlaceholder: "nom@exemple.ch",
    submit: "Envoyer le lien",
    backToLogin: "Retour à la connexion",
    successTitle: "E-mail envoyé",
    successText:
      "Si un compte avec cet e-mail existe, vous recevrez bientôt un lien pour réinitialiser votre mot de passe.",
    info: {
      title: "Mot de passe oublié?",
      text: "Pas de problème! Entrez simplement votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
      steps: [
        "Entrez votre adresse e-mail",
        "Cliquez sur le lien dans l'e-mail",
        "Définissez un nouveau mot de passe",
      ],
    },
    support: {
      title: "Besoin d'aide?",
      text: "Notre équipe de support est là pour vous.",
      email: "support@cashare.ch",
      phone: "+41 41 544 61 70",
    },
  },
};

export function PasswordReset({ locale }: PasswordResetProps) {
  const t = content[locale];
  const localePath = locale === "de" ? "" : `/${locale}`;
  const loginPath =
    locale === "de" ? "/login" : locale === "en" ? "/en/login" : "/fr/login";

  return (
    <div class="login-page">
      {/* Left Side - Form */}
      <div class="login-form-panel">
        <div class="login-form-panel__inner">
          <a href={localePath || "/"} class="login-form-panel__logo">
            <span class="login-form-panel__logo-text">cashare</span>
          </a>

          <div class="login-form-panel__header">
            <h1 class="login-form-panel__title">{t.title}</h1>
            <p class="login-form-panel__subtitle">{t.subtitle}</p>
          </div>

          {/* Password Reset Form */}
          <form class="login-form" action="#" method="POST">
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
                required
              />
            </div>

            <button type="submit" class="btn btn--primary btn--full btn--lg">
              {t.submit}
            </button>
          </form>

          <p class="login-form__footer">
            <a href={loginPath}>{t.backToLogin}</a>
          </p>
        </div>
      </div>

      {/* Right Side - Info */}
      <div class="login-info-panel">
        <div class="login-info-panel__orb login-info-panel__orb--1"></div>
        <div class="login-info-panel__orb login-info-panel__orb--2"></div>

        <div class="login-info-panel__content">
          <h2 class="login-info-panel__title">{t.info.title}</h2>
          <p class="login-benefits__text" style="margin-bottom: 24px;">
            {t.info.text}
          </p>

          <div class="login-benefits">
            {t.info.steps.map((step, index) => (
              <div key={index} class="login-benefits__item">
                <div class="password-reset__step-number">{index + 1}</div>
                <span class="login-benefits__text">{step}</span>
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
