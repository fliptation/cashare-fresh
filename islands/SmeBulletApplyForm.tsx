import { useSignal, useComputed } from "@preact/signals";
import { Calculator, ProductType, InsuranceType } from "../lib/calculator/mod.ts";
import { formatMoney } from "../lib/utils/format.ts";
import type { Locale } from "../lib/i18n/index.ts";

const content = {
  de: {
    badge: "Antrag auf Kurzkredit für KMU",
    title: "In wenigen Minuten zum KMU-Kurzkredit",
    subtitle: "Endfällige Kredite haben eine Laufzeit von 1 bis 36 Monaten. Sie zahlen das gesamte Darlehen einschliesslich Zinsen am Ende der Laufzeit zurück.",
    form: {
      amountLabel: "Darlehensbetrag (10'000-500'000)",
      amountPlaceholder: "z.B. 50000",
      durationLabel: "Laufzeit (1-36 Monate)",
      durationPlaceholder: "z.B. 12",
      durationHint:
        "Sie können jederzeit den Betrag und die Laufzeit ändern, bevor Sie Ihren Antrag einreichen.",
      emailLabel: "Ihre E-Mail-Adresse",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      passwordLabel: "Ihr Passwort",
      passwordPlaceholder: "Ihr Passwort",
      submit: "Jetzt beantragen",
      ctaLink: "https://app.cashare.ch/de/borrower/register?type=sme-bullet",
    },
    rates: {
      interestRate: "Zinssatz",
      totalRepayment: "Rückzahlung bei Fälligkeit*",
      interestCosts: "Zinskosten*",
      platformFee: "Plattformgebühr*",
      from: "von",
      to: "bis",
      minRate: "5.9 %",
      maxRate: "14.9 %",
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
  },
  en: {
    badge: "SME Short-Term Loan Application",
    title: "Get Your SME Short-Term Loan in Minutes",
    subtitle: "Bullet loans have a term of 1 to 36 months. You repay the entire loan including interest at the end of the term.",
    form: {
      amountLabel: "Loan Amount (10,000-500,000)",
      amountPlaceholder: "e.g. 50000",
      durationLabel: "Duration (1-36 Months)",
      durationPlaceholder: "e.g. 12",
      durationHint:
        "You can change the amount and duration at any time before submitting your application.",
      emailLabel: "Your Email Address",
      emailPlaceholder: "Your Email Address",
      passwordLabel: "Your Password",
      passwordPlaceholder: "Your Password",
      submit: "Apply Now",
      ctaLink: "https://app.cashare.ch/en/borrower/register?type=sme-bullet",
    },
    rates: {
      interestRate: "Interest Rate",
      totalRepayment: "Repayment at Maturity*",
      interestCosts: "Interest Costs*",
      platformFee: "Platform Fee*",
      from: "from",
      to: "to",
      minRate: "5.9%",
      maxRate: "14.9%",
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
  },
  fr: {
    badge: "Demande de crédit PME à court terme",
    title: "Obtenez votre crédit PME à court terme en quelques minutes",
    subtitle: "Les crédits in fine ont une durée de 1 à 36 mois. Vous remboursez la totalité du prêt, intérêts compris, à la fin de la durée.",
    form: {
      amountLabel: "Montant du prêt (10'000-500'000)",
      amountPlaceholder: "p.ex. 50000",
      durationLabel: "Durée (1-36 mois)",
      durationPlaceholder: "p.ex. 12",
      durationHint:
        "Vous pouvez modifier le montant et la durée à tout moment avant de soumettre votre demande.",
      emailLabel: "Votre adresse e-mail",
      emailPlaceholder: "Votre adresse e-mail",
      passwordLabel: "Votre mot de passe",
      passwordPlaceholder: "Votre mot de passe",
      submit: "Demander maintenant",
      ctaLink: "https://app.cashare.ch/fr/borrower/register?type=sme-bullet",
    },
    rates: {
      interestRate: "Taux d'intérêt",
      totalRepayment: "Remboursement à l'échéance*",
      interestCosts: "Coûts d'intérêt*",
      platformFee: "Frais de plateforme*",
      from: "de",
      to: "à",
      minRate: "5.9%",
      maxRate: "14.9%",
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
  },
};

interface SmeBulletApplyFormProps {
  locale: Locale;
}

export default function SmeBulletApplyForm({ locale }: SmeBulletApplyFormProps) {
  const t = content[locale];

  // Calculator instance - Bullet loan type
  const calc = new Calculator();
  calc.setProduct(ProductType.BULLET_LOAN);
  calc.setInsuranceType(InsuranceType.NONE);

  // State
  const amount = useSignal(50000);
  const duration = useSignal(12);
  const email = useSignal("");
  const password = useSignal("");

  // SME interest rates
  const minRate = 5.9;
  const maxRate = 14.9;

  // Computed results for min interest
  const resultsMin = useComputed(() => {
    if (amount.value < 10000 || amount.value > 500000) return null;
    if (duration.value < 1 || duration.value > 36) return null;
    return calc.calculate(amount.value, minRate, duration.value);
  });

  // Computed results for max interest
  const resultsMax = useComputed(() => {
    if (amount.value < 10000 || amount.value > 500000) return null;
    if (duration.value < 1 || duration.value > 36) return null;
    return calc.calculate(amount.value, maxRate, duration.value);
  });

  // Format number with Swiss formatting
  const formatSwiss = (num: number | string | undefined): string => {
    if (num === undefined || num === null) return "-";
    const n = typeof num === "string" ? parseFloat(num) : num;
    if (isNaN(n)) return "-";
    return formatMoney(n);
  };

  // Handle amount input
  const handleAmountChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.replace(/[^0-9]/g, "");
    amount.value = parseInt(value) || 0;
  };

  // Handle duration input
  const handleDurationChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.replace(/[^0-9]/g, "");
    duration.value = parseInt(value) || 0;
  };

  return (
    <section class="loan-apply gradient-hero">
      {/* Animated background orbs */}
      <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--2" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--3" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--4" aria-hidden="true"></div>

      {/* Grid lines effect */}
      <div class="hero__grid-lines" aria-hidden="true"></div>
      <div class="hero__shine" aria-hidden="true"></div>
      <div class="hero__shine hero__shine--2" aria-hidden="true"></div>

      <div class="loan-apply__container">
        <div class="loan-apply__form-card">
          {/* Badge */}
          <span class="loan-apply__badge">{t.badge}</span>

          {/* Title */}
          <h1 class="loan-apply__title">{t.title}</h1>

          {/* Subtitle explaining bullet loan */}
          <p class="loan-apply__subtitle">{t.subtitle}</p>

          {/* Form - Two Column Layout */}
          <form class="loan-apply__form" action={t.form.ctaLink} method="GET">
            <div class="loan-apply__columns">
              {/* Left Column - Input Fields */}
              <div class="loan-apply__column loan-apply__column--left">
                {/* Amount Field */}
                <div class="loan-apply__field">
                  <label class="loan-apply__label">
                    {t.form.amountLabel}{" "}
                    <span class="loan-apply__required">*</span>
                  </label>
                  <input
                    type="text"
                    class="loan-apply__input"
                    placeholder={t.form.amountPlaceholder}
                    value={amount.value || ""}
                    onInput={handleAmountChange}
                    required
                  />
                </div>

                {/* Duration Field */}
                <div class="loan-apply__field">
                  <label class="loan-apply__label">
                    {t.form.durationLabel}{" "}
                    <span class="loan-apply__required">*</span>
                  </label>
                  <input
                    type="text"
                    class="loan-apply__input"
                    placeholder={t.form.durationPlaceholder}
                    value={duration.value || ""}
                    onInput={handleDurationChange}
                    required
                  />
                </div>

                <p class="loan-apply__hint">{t.form.durationHint}</p>

                {/* Email Field */}
                <div class="loan-apply__field">
                  <label class="loan-apply__label">
                    {t.form.emailLabel}{" "}
                    <span class="loan-apply__required">*</span>
                  </label>
                  <input
                    type="email"
                    class="loan-apply__input"
                    placeholder={t.form.emailPlaceholder}
                    value={email.value}
                    onInput={(e) => email.value = (e.target as HTMLInputElement).value}
                    required
                  />
                </div>

                {/* Password Field */}
                <div class="loan-apply__field">
                  <label class="loan-apply__label">
                    {t.form.passwordLabel}{" "}
                    <span class="loan-apply__required">*</span>
                  </label>
                  <input
                    type="password"
                    class="loan-apply__input"
                    placeholder={t.form.passwordPlaceholder}
                    value={password.value}
                    onInput={(e) => password.value = (e.target as HTMLInputElement).value}
                    required
                  />
                </div>
              </div>

              {/* Right Column - Rates & Submit */}
              <div class="loan-apply__column loan-apply__column--right">
                {/* Rate Display Table */}
                <div class="loan-apply__rates">
                  <div class="loan-apply__rates-header">
                    <span></span>
                    <span class="loan-apply__rates-col loan-apply__rates-col--from">
                      {t.rates.from}
                    </span>
                    <span class="loan-apply__rates-col loan-apply__rates-col--to">
                      {t.rates.to}
                    </span>
                  </div>
                  <div class="loan-apply__rates-row">
                    <span class="loan-apply__rates-label">
                      {t.rates.interestRate}
                    </span>
                    <span class="loan-apply__rates-value loan-apply__rates-value--from">
                      {t.rates.minRate}
                    </span>
                    <span class="loan-apply__rates-value loan-apply__rates-value--to">
                      {t.rates.maxRate}
                    </span>
                  </div>
                  <div class="loan-apply__rates-row">
                    <span class="loan-apply__rates-label">
                      {t.rates.totalRepayment}
                    </span>
                    <span class="loan-apply__rates-value loan-apply__rates-value--from">
                      {resultsMin.value ? formatSwiss(resultsMin.value.instalmentWithoutPremium) : "-"}
                    </span>
                    <span class="loan-apply__rates-value loan-apply__rates-value--to">
                      {resultsMax.value ? formatSwiss(resultsMax.value.instalmentWithoutPremium) : "-"}
                    </span>
                  </div>
                  <div class="loan-apply__rates-row">
                    <span class="loan-apply__rates-label">
                      {t.rates.interestCosts}
                    </span>
                    <span class="loan-apply__rates-value loan-apply__rates-value--from">
                      {resultsMin.value ? formatSwiss(resultsMin.value.interestCosts) : "-"}
                    </span>
                    <span class="loan-apply__rates-value loan-apply__rates-value--to">
                      {resultsMax.value ? formatSwiss(resultsMax.value.interestCosts) : "-"}
                    </span>
                  </div>
                  <div class="loan-apply__rates-row">
                    <span class="loan-apply__rates-label">
                      {t.rates.platformFee}
                    </span>
                    <span class="loan-apply__rates-value loan-apply__rates-value--from">
                      {resultsMin.value?.fee ? formatSwiss(resultsMin.value.fee) : "-"}
                    </span>
                    <span class="loan-apply__rates-value loan-apply__rates-value--to">
                      {resultsMax.value?.fee ? formatSwiss(resultsMax.value.fee) : "-"}
                    </span>
                  </div>
                </div>

                <p class="loan-apply__disclaimer">{t.rates.disclaimer}</p>

                {/* Submit Button */}
                <a
                  href={t.form.ctaLink}
                  class="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.form.submit}
                </a>

                {/* Footer Links */}
                <div class="loan-apply__footer">
                  <p class="loan-apply__footer-text">
                    {t.footer.hasAccount}{" "}
                    <a
                      href={t.footer.loginLink}
                      class="loan-apply__footer-link"
                    >
                      {t.footer.login}
                    </a>.
                  </p>
                  <p class="loan-apply__footer-text">
                    {t.footer.terms}{" "}
                    <a
                      href={t.footer.termsLinkHref}
                      class="loan-apply__footer-link"
                    >
                      {t.footer.termsLink}
                    </a>{" "}
                    {t.footer.termsEnd}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
