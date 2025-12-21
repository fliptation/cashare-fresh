import type { Locale } from "../../lib/i18n/index.ts";

interface PrivatdarlehenBeantragenProps {
  locale: Locale;
}

const content = {
  de: {
    badge: "Antrag auf Privatkredit",
    title: "In wenigen Minuten zum Kredit",
    form: {
      amountLabel: "Darlehensbetrag (1'000-1'000'000)",
      amountPlaceholder: "Darlehensbetrag (1'000-1'000'000)",
      durationLabel: "Laufzeit (1-60 Monate)",
      durationPlaceholder: "Laufzeit (1-60 Monate)",
      durationHint: "Sie können jederzeit den Betrag und die Laufzeit ändern, bevor Sie Ihren Antrag einreichen.",
      emailLabel: "Ihre E-Mail-Adresse",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      passwordLabel: "Ihr Passwort",
      passwordPlaceholder: "Ihr Passwort",
      submit: "Jetzt beantragen",
      ctaLink: "https://app.cashare.ch/de/borrower/register",
    },
    rates: {
      interestRate: "Zinssatz",
      monthlyPayment: "Monatsrate*",
      interestCosts: "Zinskosten*",
      platformFee: "Plattformgebühr*",
      from: "von",
      to: "bis",
      minRate: "4.4 %",
      maxRate: "10.9 %",
      disclaimer: "*Die effektiven Werte hängen von Ihrem Betrag, der Laufzeit und dem Zinssatz Ihres Darlehens ab. Sobald Sie den Antrag eingereicht haben, können wir Ihnen ein individuelles Angebot unterbreiten. Die Beträge verstehen sich in CHF.",
    },
  },
  en: {
    badge: "Personal Loan Application",
    title: "Get Your Loan in Minutes",
    form: {
      amountLabel: "Loan Amount (1,000-1,000,000)",
      amountPlaceholder: "Loan Amount (1,000-1,000,000)",
      durationLabel: "Duration (1-60 Months)",
      durationPlaceholder: "Duration (1-60 Months)",
      durationHint: "You can change the amount and duration at any time before submitting your application.",
      emailLabel: "Your Email Address",
      emailPlaceholder: "Your Email Address",
      passwordLabel: "Your Password",
      passwordPlaceholder: "Your Password",
      submit: "Apply Now",
      ctaLink: "https://app.cashare.ch/en/borrower/register",
    },
    rates: {
      interestRate: "Interest Rate",
      monthlyPayment: "Monthly Payment*",
      interestCosts: "Interest Costs*",
      platformFee: "Platform Fee*",
      from: "from",
      to: "to",
      minRate: "4.4%",
      maxRate: "10.9%",
      disclaimer: "*The actual values depend on your amount, duration, and interest rate of your loan. Once you submit the application, we can provide you with a personalized offer. Amounts are in CHF.",
    },
  },
  fr: {
    badge: "Demande de crédit privé",
    title: "Obtenez votre crédit en quelques minutes",
    form: {
      amountLabel: "Montant du prêt (1'000-1'000'000)",
      amountPlaceholder: "Montant du prêt (1'000-1'000'000)",
      durationLabel: "Durée (1-60 mois)",
      durationPlaceholder: "Durée (1-60 mois)",
      durationHint: "Vous pouvez modifier le montant et la durée à tout moment avant de soumettre votre demande.",
      emailLabel: "Votre adresse e-mail",
      emailPlaceholder: "Votre adresse e-mail",
      passwordLabel: "Votre mot de passe",
      passwordPlaceholder: "Votre mot de passe",
      submit: "Demander maintenant",
      ctaLink: "https://app.cashare.ch/fr/borrower/register",
    },
    rates: {
      interestRate: "Taux d'intérêt",
      monthlyPayment: "Mensualité*",
      interestCosts: "Coûts d'intérêt*",
      platformFee: "Frais de plateforme*",
      from: "de",
      to: "à",
      minRate: "4.4%",
      maxRate: "10.9%",
      disclaimer: "*Les valeurs effectives dépendent de votre montant, de la durée et du taux d'intérêt de votre prêt. Une fois la demande soumise, nous pourrons vous faire une offre personnalisée. Les montants sont en CHF.",
    },
  },
};

export function PrivatdarlehenBeantragen({ locale }: PrivatdarlehenBeantragenProps) {
  const t = content[locale];

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

          {/* Form */}
          <form class="loan-apply__form" action={t.form.ctaLink} method="GET">
            {/* Amount Field */}
            <div class="loan-apply__field">
              <label class="loan-apply__label">
                {t.form.amountLabel} <span class="loan-apply__required">*</span>
              </label>
              <input
                type="text"
                class="loan-apply__input"
                placeholder={t.form.amountPlaceholder}
                required
              />
            </div>

            {/* Duration Field */}
            <div class="loan-apply__field">
              <label class="loan-apply__label">
                {t.form.durationLabel} <span class="loan-apply__required">*</span>
              </label>
              <input
                type="text"
                class="loan-apply__input"
                placeholder={t.form.durationPlaceholder}
                required
              />
            </div>

            <p class="loan-apply__hint">{t.form.durationHint}</p>

            {/* Email Field */}
            <div class="loan-apply__field">
              <label class="loan-apply__label">
                {t.form.emailLabel} <span class="loan-apply__required">*</span>
              </label>
              <input
                type="email"
                class="loan-apply__input"
                placeholder={t.form.emailPlaceholder}
                required
              />
            </div>

            {/* Password Field */}
            <div class="loan-apply__field">
              <label class="loan-apply__label">
                {t.form.passwordLabel} <span class="loan-apply__required">*</span>
              </label>
              <input
                type="password"
                class="loan-apply__input"
                placeholder={t.form.passwordPlaceholder}
                required
              />
            </div>

            {/* Rate Display Table */}
            <div class="loan-apply__rates">
              <div class="loan-apply__rates-header">
                <span></span>
                <span class="loan-apply__rates-col loan-apply__rates-col--from">{t.rates.from}</span>
                <span class="loan-apply__rates-col loan-apply__rates-col--to">{t.rates.to}</span>
              </div>
              <div class="loan-apply__rates-row">
                <span class="loan-apply__rates-label">{t.rates.interestRate}</span>
                <span class="loan-apply__rates-value loan-apply__rates-value--from">{t.rates.minRate}</span>
                <span class="loan-apply__rates-value loan-apply__rates-value--to">{t.rates.maxRate}</span>
              </div>
              <div class="loan-apply__rates-row">
                <span class="loan-apply__rates-label">{t.rates.monthlyPayment}</span>
                <span class="loan-apply__rates-value"></span>
                <span class="loan-apply__rates-value"></span>
              </div>
              <div class="loan-apply__rates-row">
                <span class="loan-apply__rates-label">{t.rates.interestCosts}</span>
                <span class="loan-apply__rates-value"></span>
                <span class="loan-apply__rates-value"></span>
              </div>
              <div class="loan-apply__rates-row">
                <span class="loan-apply__rates-label">{t.rates.platformFee}</span>
                <span class="loan-apply__rates-value"></span>
                <span class="loan-apply__rates-value"></span>
              </div>
            </div>

            <p class="loan-apply__disclaimer">{t.rates.disclaimer}</p>

            {/* Submit Button */}
            <a
              href={t.form.ctaLink}
              class="loan-apply__submit"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.form.submit}
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
