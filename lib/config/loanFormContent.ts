/**
 * Loan Application Form Content
 *
 * Centralized translations for loan application forms.
 * Used by LoanApplicationForm component.
 */

import type { Locale } from "../i18n/index.ts";
import type { LoanProductKey } from "./loanProducts.ts";
import { LOAN_PRODUCTS } from "./loanProducts.ts";

/**
 * Form content structure
 */
export interface LoanFormContent {
  badge: string;
  title: string;
  subtitle?: string;
  form: {
    amountLabel: string;
    amountPlaceholder: string;
    durationLabel: string;
    durationPlaceholder: string;
    durationHint: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    submit: string;
    submitting: string;
  };
  rates: {
    interestRate: string;
    monthlyPayment?: string;
    totalRepayment?: string;
    interestCosts: string;
    platformFee: string;
    from: string;
    to: string;
    minRate: string;
    maxRate: string;
    disclaimer: string;
  };
  footer: {
    hasAccount: string;
    login: string;
    loginLink: string;
    terms: string;
    termsLink: string;
    termsLinkHref: string;
    termsEnd: string;
  };
  validation: {
    emailRequired: string;
    emailInvalid: string;
    passwordRequired: string;
    amountInvalid: string;
    durationInvalid: string;
  };
}

/**
 * Get rate display strings for a product
 */
function getRateStrings(product: LoanProductKey) {
  const config = LOAN_PRODUCTS[product];
  return {
    minRate: `${config.rates.min}%`,
    maxRate: `${config.rates.max}%`,
  };
}

/**
 * Get amount/duration label strings with ranges
 */
function getConstraintLabels(
  product: LoanProductKey,
  locale: Locale
): { amountLabel: string; durationLabel: string } {
  const config = LOAN_PRODUCTS[product];
  const formatAmount = (n: number) =>
    n.toLocaleString(locale === "de" ? "de-CH" : locale === "fr" ? "fr-CH" : "en-CH");

  return {
    amountLabel:
      locale === "de"
        ? `Darlehensbetrag (${formatAmount(config.amount.min)}-${formatAmount(config.amount.max)})`
        : locale === "en"
          ? `Loan Amount (${formatAmount(config.amount.min)}-${formatAmount(config.amount.max)})`
          : `Montant du prêt (${formatAmount(config.amount.min)}-${formatAmount(config.amount.max)})`,
    durationLabel:
      locale === "de"
        ? `Laufzeit (${config.duration.min}-${config.duration.max} Monate)`
        : locale === "en"
          ? `Duration (${config.duration.min}-${config.duration.max} Months)`
          : `Durée (${config.duration.min}-${config.duration.max} mois)`,
  };
}

/**
 * Private loan form content
 */
const privateContent: Record<Locale, LoanFormContent> = {
  de: {
    badge: "Antrag auf Privatkredit",
    title: "In wenigen Minuten zum Kredit",
    form: {
      ...getConstraintLabels("private", "de"),
      amountPlaceholder: "z.B. 25000",
      durationPlaceholder: "z.B. 24",
      durationHint:
        "Sie können jederzeit den Betrag und die Laufzeit ändern, bevor Sie Ihren Antrag einreichen.",
      emailLabel: "Ihre E-Mail-Adresse",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      passwordLabel: "Ihr Passwort",
      passwordPlaceholder: "Ihr Passwort",
      submit: "Jetzt beantragen",
      submitting: "Wird verarbeitet...",
    },
    rates: {
      interestRate: "Zinssatz",
      monthlyPayment: "Monatsrate*",
      interestCosts: "Zinskosten*",
      platformFee: "Plattformgebühr*",
      from: "von",
      to: "bis",
      ...getRateStrings("private"),
      disclaimer:
        "*Die effektiven Werte hängen von Ihrem Betrag, der Laufzeit und dem Zinssatz Ihres Darlehens ab. Sobald Sie den Antrag eingereicht haben, können wir Ihnen ein individuelles Angebot unterbreiten. Die Beträge verstehen sich in CHF.",
    },
    footer: {
      hasAccount: "Sie haben schon ein Konto?",
      login: "Einloggen",
      loginLink: "/login",
      terms: "Mit der Registrierung stimmen Sie unseren",
      termsLink: "Nutzungsbedingungen",
      termsLinkHref: "/agb",
      termsEnd: "zu.",
    },
    validation: {
      emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      passwordRequired: "Bitte geben Sie ein Passwort ein.",
      amountInvalid: "Bitte geben Sie einen Betrag zwischen 1'000 und 1'000'000 ein.",
      durationInvalid: "Bitte geben Sie eine Laufzeit zwischen 1 und 60 Monaten ein.",
    },
  },
  en: {
    badge: "Personal Loan Application",
    title: "Get Your Loan in Minutes",
    form: {
      ...getConstraintLabels("private", "en"),
      amountPlaceholder: "e.g. 25000",
      durationPlaceholder: "e.g. 24",
      durationHint:
        "You can change the amount and duration at any time before submitting your application.",
      emailLabel: "Your Email Address",
      emailPlaceholder: "Your Email Address",
      passwordLabel: "Your Password",
      passwordPlaceholder: "Your Password",
      submit: "Apply Now",
      submitting: "Processing...",
    },
    rates: {
      interestRate: "Interest Rate",
      monthlyPayment: "Monthly Payment*",
      interestCosts: "Interest Costs*",
      platformFee: "Platform Fee*",
      from: "from",
      to: "to",
      ...getRateStrings("private"),
      disclaimer:
        "*The actual values depend on your amount, duration, and interest rate of your loan. Once you submit the application, we can provide you with a personalized offer. Amounts are in CHF.",
    },
    footer: {
      hasAccount: "Already have an account?",
      login: "Log in",
      loginLink: "/en/login",
      terms: "By registering, you agree to our",
      termsLink: "Terms of Use",
      termsLinkHref: "/en/terms",
      termsEnd: ".",
    },
    validation: {
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      passwordRequired: "Please enter a password.",
      amountInvalid: "Please enter an amount between 1,000 and 1,000,000.",
      durationInvalid: "Please enter a duration between 1 and 60 months.",
    },
  },
  fr: {
    badge: "Demande de crédit privé",
    title: "Obtenez votre crédit en quelques minutes",
    form: {
      ...getConstraintLabels("private", "fr"),
      amountPlaceholder: "p.ex. 25000",
      durationPlaceholder: "p.ex. 24",
      durationHint:
        "Vous pouvez modifier le montant et la durée à tout moment avant de soumettre votre demande.",
      emailLabel: "Votre adresse e-mail",
      emailPlaceholder: "Votre adresse e-mail",
      passwordLabel: "Votre mot de passe",
      passwordPlaceholder: "Votre mot de passe",
      submit: "Demander maintenant",
      submitting: "Traitement en cours...",
    },
    rates: {
      interestRate: "Taux d'intérêt",
      monthlyPayment: "Mensualité*",
      interestCosts: "Coûts d'intérêt*",
      platformFee: "Frais de plateforme*",
      from: "de",
      to: "à",
      ...getRateStrings("private"),
      disclaimer:
        "*Les valeurs effectives dépendent de votre montant, de la durée et du taux d'intérêt de votre prêt. Une fois la demande soumise, nous pourrons vous faire une offre personnalisée. Les montants sont en CHF.",
    },
    footer: {
      hasAccount: "Vous avez déjà un compte?",
      login: "Se connecter",
      loginLink: "/fr/login",
      terms: "En vous inscrivant, vous acceptez nos",
      termsLink: "Conditions d'utilisation",
      termsLinkHref: "/fr/cgv",
      termsEnd: ".",
    },
    validation: {
      emailRequired: "Veuillez saisir votre adresse e-mail.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      passwordRequired: "Veuillez saisir un mot de passe.",
      amountInvalid: "Veuillez saisir un montant entre 1'000 et 1'000'000.",
      durationInvalid: "Veuillez saisir une durée entre 1 et 60 mois.",
    },
  },
};

/**
 * SME loan form content
 */
const smeContent: Record<Locale, LoanFormContent> = {
  de: {
    badge: "KMU Kreditantrag",
    title: "In wenigen Minuten zum KMU-Kredit",
    form: {
      ...getConstraintLabels("sme", "de"),
      amountPlaceholder: "z.B. 50000",
      durationPlaceholder: "z.B. 24",
      durationHint:
        "Sie können jederzeit den Betrag und die Laufzeit ändern, bevor Sie Ihren Antrag einreichen.",
      emailLabel: "Ihre E-Mail-Adresse",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      passwordLabel: "Ihr Passwort",
      passwordPlaceholder: "Ihr Passwort",
      submit: "Jetzt beantragen",
      submitting: "Wird verarbeitet...",
    },
    rates: {
      interestRate: "Zinssatz",
      monthlyPayment: "Monatsrate*",
      interestCosts: "Zinskosten*",
      platformFee: "Plattformgebühr*",
      from: "von",
      to: "bis",
      ...getRateStrings("sme"),
      disclaimer:
        "*Die effektiven Werte hängen von Ihrem Betrag, der Laufzeit und dem Zinssatz Ihres Darlehens ab. Sobald Sie den Antrag eingereicht haben, können wir Ihnen ein individuelles Angebot unterbreiten. Die Beträge verstehen sich in CHF.",
    },
    footer: {
      hasAccount: "Sie haben schon ein Konto?",
      login: "Einloggen",
      loginLink: "/login",
      terms: "Mit der Registrierung stimmen Sie unseren",
      termsLink: "Nutzungsbedingungen",
      termsLinkHref: "/agb",
      termsEnd: "zu.",
    },
    validation: {
      emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      passwordRequired: "Bitte geben Sie ein Passwort ein.",
      amountInvalid: "Bitte geben Sie einen Betrag zwischen 10'000 und 1'000'000 ein.",
      durationInvalid: "Bitte geben Sie eine Laufzeit zwischen 3 und 60 Monaten ein.",
    },
  },
  en: {
    badge: "SME Loan Application",
    title: "Get Your SME Loan in Minutes",
    form: {
      ...getConstraintLabels("sme", "en"),
      amountPlaceholder: "e.g. 50000",
      durationPlaceholder: "e.g. 24",
      durationHint:
        "You can change the amount and duration at any time before submitting your application.",
      emailLabel: "Your Email Address",
      emailPlaceholder: "Your Email Address",
      passwordLabel: "Your Password",
      passwordPlaceholder: "Your Password",
      submit: "Apply Now",
      submitting: "Processing...",
    },
    rates: {
      interestRate: "Interest Rate",
      monthlyPayment: "Monthly Payment*",
      interestCosts: "Interest Costs*",
      platformFee: "Platform Fee*",
      from: "from",
      to: "to",
      ...getRateStrings("sme"),
      disclaimer:
        "*The actual values depend on your amount, duration, and interest rate of your loan. Once you submit the application, we can provide you with a personalized offer. Amounts are in CHF.",
    },
    footer: {
      hasAccount: "Already have an account?",
      login: "Log in",
      loginLink: "/en/login",
      terms: "By registering, you agree to our",
      termsLink: "Terms of Use",
      termsLinkHref: "/en/terms",
      termsEnd: ".",
    },
    validation: {
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      passwordRequired: "Please enter a password.",
      amountInvalid: "Please enter an amount between 10,000 and 1,000,000.",
      durationInvalid: "Please enter a duration between 3 and 60 months.",
    },
  },
  fr: {
    badge: "Demande de crédit PME",
    title: "Obtenez votre crédit PME en quelques minutes",
    form: {
      ...getConstraintLabels("sme", "fr"),
      amountPlaceholder: "p.ex. 50000",
      durationPlaceholder: "p.ex. 24",
      durationHint:
        "Vous pouvez modifier le montant et la durée à tout moment avant de soumettre votre demande.",
      emailLabel: "Votre adresse e-mail",
      emailPlaceholder: "Votre adresse e-mail",
      passwordLabel: "Votre mot de passe",
      passwordPlaceholder: "Votre mot de passe",
      submit: "Demander maintenant",
      submitting: "Traitement en cours...",
    },
    rates: {
      interestRate: "Taux d'intérêt",
      monthlyPayment: "Mensualité*",
      interestCosts: "Coûts d'intérêt*",
      platformFee: "Frais de plateforme*",
      from: "de",
      to: "à",
      ...getRateStrings("sme"),
      disclaimer:
        "*Les valeurs effectives dépendent de votre montant, de la durée et du taux d'intérêt de votre prêt. Une fois la demande soumise, nous pourrons vous faire une offre personnalisée. Les montants sont en CHF.",
    },
    footer: {
      hasAccount: "Vous avez déjà un compte?",
      login: "Se connecter",
      loginLink: "/fr/login",
      terms: "En vous inscrivant, vous acceptez nos",
      termsLink: "Conditions d'utilisation",
      termsLinkHref: "/fr/cgv",
      termsEnd: ".",
    },
    validation: {
      emailRequired: "Veuillez saisir votre adresse e-mail.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      passwordRequired: "Veuillez saisir un mot de passe.",
      amountInvalid: "Veuillez saisir un montant entre 10'000 et 1'000'000.",
      durationInvalid: "Veuillez saisir une durée entre 3 et 60 mois.",
    },
  },
};

/**
 * SME bullet loan form content
 */
const smeBulletContent: Record<Locale, LoanFormContent> = {
  de: {
    badge: "Antrag auf Kurzkredit für KMU",
    title: "In wenigen Minuten zum KMU-Kurzkredit",
    subtitle:
      "Endfällige Kredite haben eine Laufzeit von 1 bis 36 Monaten. Sie zahlen das gesamte Darlehen einschliesslich Zinsen am Ende der Laufzeit zurück.",
    form: {
      ...getConstraintLabels("smeBullet", "de"),
      amountPlaceholder: "z.B. 50000",
      durationPlaceholder: "z.B. 12",
      durationHint:
        "Sie können jederzeit den Betrag und die Laufzeit ändern, bevor Sie Ihren Antrag einreichen.",
      emailLabel: "Ihre E-Mail-Adresse",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      passwordLabel: "Ihr Passwort",
      passwordPlaceholder: "Ihr Passwort",
      submit: "Jetzt beantragen",
      submitting: "Wird verarbeitet...",
    },
    rates: {
      interestRate: "Zinssatz",
      totalRepayment: "Rückzahlung bei Fälligkeit*",
      interestCosts: "Zinskosten*",
      platformFee: "Plattformgebühr*",
      from: "von",
      to: "bis",
      ...getRateStrings("smeBullet"),
      disclaimer:
        "*Die effektiven Werte hängen von Ihrem Betrag, der Laufzeit und dem Zinssatz Ihres Darlehens ab. Sobald Sie den Antrag eingereicht haben, können wir Ihnen ein individuelles Angebot unterbreiten. Die Beträge verstehen sich in CHF.",
    },
    footer: {
      hasAccount: "Sie haben schon ein Konto?",
      login: "Einloggen",
      loginLink: "/login",
      terms: "Mit der Registrierung stimmen Sie unseren",
      termsLink: "Nutzungsbedingungen",
      termsLinkHref: "/agb",
      termsEnd: "zu.",
    },
    validation: {
      emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      passwordRequired: "Bitte geben Sie ein Passwort ein.",
      amountInvalid: "Bitte geben Sie einen Betrag zwischen 10'000 und 500'000 ein.",
      durationInvalid: "Bitte geben Sie eine Laufzeit zwischen 1 und 36 Monaten ein.",
    },
  },
  en: {
    badge: "SME Short-Term Loan Application",
    title: "Get Your SME Short-Term Loan in Minutes",
    subtitle:
      "Bullet loans have a term of 1 to 36 months. You repay the entire loan including interest at the end of the term.",
    form: {
      ...getConstraintLabels("smeBullet", "en"),
      amountPlaceholder: "e.g. 50000",
      durationPlaceholder: "e.g. 12",
      durationHint:
        "You can change the amount and duration at any time before submitting your application.",
      emailLabel: "Your Email Address",
      emailPlaceholder: "Your Email Address",
      passwordLabel: "Your Password",
      passwordPlaceholder: "Your Password",
      submit: "Apply Now",
      submitting: "Processing...",
    },
    rates: {
      interestRate: "Interest Rate",
      totalRepayment: "Repayment at Maturity*",
      interestCosts: "Interest Costs*",
      platformFee: "Platform Fee*",
      from: "from",
      to: "to",
      ...getRateStrings("smeBullet"),
      disclaimer:
        "*The actual values depend on your amount, duration, and interest rate of your loan. Once you submit the application, we can provide you with a personalized offer. Amounts are in CHF.",
    },
    footer: {
      hasAccount: "Already have an account?",
      login: "Log in",
      loginLink: "/en/login",
      terms: "By registering, you agree to our",
      termsLink: "Terms of Use",
      termsLinkHref: "/en/terms",
      termsEnd: ".",
    },
    validation: {
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      passwordRequired: "Please enter a password.",
      amountInvalid: "Please enter an amount between 10,000 and 500,000.",
      durationInvalid: "Please enter a duration between 1 and 36 months.",
    },
  },
  fr: {
    badge: "Demande de crédit PME à court terme",
    title: "Obtenez votre crédit PME à court terme en quelques minutes",
    subtitle:
      "Les crédits in fine ont une durée de 1 à 36 mois. Vous remboursez la totalité du prêt, intérêts compris, à la fin de la durée.",
    form: {
      ...getConstraintLabels("smeBullet", "fr"),
      amountPlaceholder: "p.ex. 50000",
      durationPlaceholder: "p.ex. 12",
      durationHint:
        "Vous pouvez modifier le montant et la durée à tout moment avant de soumettre votre demande.",
      emailLabel: "Votre adresse e-mail",
      emailPlaceholder: "Votre adresse e-mail",
      passwordLabel: "Votre mot de passe",
      passwordPlaceholder: "Votre mot de passe",
      submit: "Demander maintenant",
      submitting: "Traitement en cours...",
    },
    rates: {
      interestRate: "Taux d'intérêt",
      totalRepayment: "Remboursement à l'échéance*",
      interestCosts: "Coûts d'intérêt*",
      platformFee: "Frais de plateforme*",
      from: "de",
      to: "à",
      ...getRateStrings("smeBullet"),
      disclaimer:
        "*Les valeurs effectives dépendent de votre montant, de la durée et du taux d'intérêt de votre prêt. Une fois la demande soumise, nous pourrons vous faire une offre personnalisée. Les montants sont en CHF.",
    },
    footer: {
      hasAccount: "Vous avez déjà un compte?",
      login: "Se connecter",
      loginLink: "/fr/login",
      terms: "En vous inscrivant, vous acceptez nos",
      termsLink: "Conditions d'utilisation",
      termsLinkHref: "/fr/cgv",
      termsEnd: ".",
    },
    validation: {
      emailRequired: "Veuillez saisir votre adresse e-mail.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      passwordRequired: "Veuillez saisir un mot de passe.",
      amountInvalid: "Veuillez saisir un montant entre 10'000 et 500'000.",
      durationInvalid: "Veuillez saisir une durée entre 1 et 36 mois.",
    },
  },
};

/**
 * All form content by product type
 */
export const LOAN_FORM_CONTENT: Record<LoanProductKey, Record<Locale, LoanFormContent>> = {
  private: privateContent,
  sme: smeContent,
  smeBullet: smeBulletContent,
};

/**
 * Get form content for a specific product and locale
 */
export function getLoanFormContent(
  product: LoanProductKey,
  locale: Locale
): LoanFormContent {
  return LOAN_FORM_CONTENT[product][locale];
}
