import { useSignal } from "@preact/signals";
import { Calculator, ProductType } from "../lib/calculator/calculator.ts";
import type { Locale } from "../lib/i18n/index.ts";

interface LoanCalculatorProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Kreditrechner",
    subtitle: "Berechnen Sie Ihre monatliche Rate",
    loanAmount: "Kreditbetrag",
    duration: "Laufzeit",
    months: "Monate",
    interestRate: "Zinssatz",
    monthlyPayment: "Monatliche Rate",
    totalInterest: "Zinskosten",
    totalAmount: "Gesamtbetrag",
    apply: "Kredit beantragen",
    invest: "Als Anleger investieren",
    applyHref: "/kredit-beantragen",
    investHref: "/investieren",
    borrower: "Kreditnehmer",
    investor: "Anleger",
    yield: "Rendite",
    fee: "Gebühren",
    netYield: "Nettorendite",
  },
  en: {
    title: "Loan Calculator",
    subtitle: "Calculate your monthly payment",
    loanAmount: "Loan Amount",
    duration: "Duration",
    months: "months",
    interestRate: "Interest Rate",
    monthlyPayment: "Monthly Payment",
    totalInterest: "Interest Cost",
    totalAmount: "Total Amount",
    apply: "Apply for Loan",
    invest: "Invest as Lender",
    applyHref: "/en/apply-for-loan",
    investHref: "/en/invest",
    borrower: "Borrower",
    investor: "Investor",
    yield: "Yield",
    fee: "Fees",
    netYield: "Net Yield",
  },
  fr: {
    title: "Calculateur de crédit",
    subtitle: "Calculez votre mensualité",
    loanAmount: "Montant du crédit",
    duration: "Durée",
    months: "mois",
    interestRate: "Taux d'intérêt",
    monthlyPayment: "Mensualité",
    totalInterest: "Coût des intérêts",
    totalAmount: "Montant total",
    apply: "Demander un crédit",
    invest: "Investir comme prêteur",
    applyHref: "/fr/demander-credit",
    investHref: "/fr/investir",
    borrower: "Emprunteur",
    investor: "Investisseur",
    yield: "Rendement",
    fee: "Frais",
    netYield: "Rendement net",
  },
};

export function LoanCalculator({ locale }: LoanCalculatorProps) {
  const t = content[locale];

  const amount = useSignal(25000);
  const duration = useSignal(36);
  const interest = useSignal(6.5);
  const activeTab = useSignal<"borrower" | "investor">("borrower");

  const calculator = new Calculator();
  calculator.setProduct(ProductType.P2P);

  const result = calculator.calculate(amount.value, interest.value, duration.value);

  const formatCHF = (value: string | number) => {
    const num = typeof value === "string" ? parseFloat(value) : value;
    return `CHF ${num.toLocaleString("de-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p class="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Switcher */}
          <div class="flex border-b">
            <button
              onClick={() => activeTab.value = "borrower"}
              class={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab.value === "borrower"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t.borrower}
            </button>
            <button
              onClick={() => activeTab.value = "investor"}
              class={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab.value === "investor"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t.investor}
            </button>
          </div>

          <div class="p-8">
            {/* Inputs */}
            <div class="grid md:grid-cols-3 gap-6 mb-8">
              {/* Amount */}
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {t.loanAmount}
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">CHF</span>
                  <input
                    type="number"
                    min="1000"
                    max="1000000"
                    step="1000"
                    value={amount.value}
                    onInput={(e) => amount.value = parseInt((e.target as HTMLInputElement).value) || 1000}
                    class="w-full pl-14 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <input
                  type="range"
                  min="1000"
                  max="500000"
                  step="1000"
                  value={amount.value}
                  onInput={(e) => amount.value = parseInt((e.target as HTMLInputElement).value)}
                  class="w-full mt-2 accent-blue-600"
                />
              </div>

              {/* Duration */}
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {t.duration}
                </label>
                <div class="relative">
                  <input
                    type="number"
                    min="6"
                    max="84"
                    value={duration.value}
                    onInput={(e) => duration.value = parseInt((e.target as HTMLInputElement).value) || 6}
                    class="w-full pl-4 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">{t.months}</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="84"
                  value={duration.value}
                  onInput={(e) => duration.value = parseInt((e.target as HTMLInputElement).value)}
                  class="w-full mt-2 accent-blue-600"
                />
              </div>

              {/* Interest */}
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {t.interestRate}
                </label>
                <div class="relative">
                  <input
                    type="number"
                    min="3"
                    max="15"
                    step="0.1"
                    value={interest.value}
                    onInput={(e) => interest.value = parseFloat((e.target as HTMLInputElement).value) || 3}
                    class="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="0.1"
                  value={interest.value}
                  onInput={(e) => interest.value = parseFloat((e.target as HTMLInputElement).value)}
                  class="w-full mt-2 accent-blue-600"
                />
              </div>
            </div>

            {/* Results */}
            <div class="bg-gray-50 rounded-xl p-6">
              {activeTab.value === "borrower" ? (
                <div class="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div class="text-sm text-gray-600 mb-1">{t.monthlyPayment}</div>
                    <div class="text-3xl font-bold text-blue-600">
                      {formatCHF(result.instalmentWithoutPremium)}
                    </div>
                  </div>
                  <div>
                    <div class="text-sm text-gray-600 mb-1">{t.totalInterest}</div>
                    <div class="text-2xl font-semibold text-gray-900">
                      {formatCHF(result.interestCosts)}
                    </div>
                  </div>
                  <div>
                    <div class="text-sm text-gray-600 mb-1">{t.totalAmount}</div>
                    <div class="text-2xl font-semibold text-gray-900">
                      {formatCHF(amount.value + parseFloat(result.interestCosts))}
                    </div>
                  </div>
                </div>
              ) : (
                <div class="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div class="text-sm text-gray-600 mb-1">{t.yield}</div>
                    <div class="text-3xl font-bold text-green-600">
                      {formatCHF(result.yield)}
                    </div>
                  </div>
                  <div>
                    <div class="text-sm text-gray-600 mb-1">{t.fee}</div>
                    <div class="text-2xl font-semibold text-gray-900">
                      {formatCHF(result.fee_forLoaner)}
                    </div>
                  </div>
                  <div>
                    <div class="text-sm text-gray-600 mb-1">{t.netYield}</div>
                    <div class="text-2xl font-semibold text-green-600">
                      {formatCHF(result.netYield)}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div class="mt-8 text-center">
              {activeTab.value === "borrower" ? (
                <a
                  href={t.applyHref}
                  class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t.apply}
                </a>
              ) : (
                <a
                  href={t.investHref}
                  class="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  {t.invest}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
