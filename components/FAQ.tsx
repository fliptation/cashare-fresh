import type { Locale } from "../lib/i18n/index.ts";
import { JsonLd } from "./JsonLd.tsx";
import { generateFAQSchema } from "../lib/seo/schema.ts";

interface FAQProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Noch Fragen?",
    subtitle: "Hier einige Fragen und Antworten. Gerne stehen wir Ihnen für weitere Informationen zur Seite.",
    faqs: [
      {
        question: "Wer ist Cashare?",
        answer: "Cashare wurde 2008 als erste Crowdlending-Plattform der Schweiz gegründet. Wir verbinden Kreditnehmer direkt mit Anlegern und ermöglichen so faire Konditionen für beide Seiten. Mit über 60'000 Kunden und CHF 2.5 Milliarden geprüfter Kreditanträge sind wir der führende Anbieter in der Schweiz.",
      },
      {
        question: "Wie funktioniert Crowdlending?",
        answer: "Beim Crowdlending werden Kredite nicht von einer Bank, sondern von vielen privaten und institutionellen Anlegern finanziert. Kreditnehmer erhalten faire Zinsen, während Anleger attraktive Renditen erzielen. Cashare prüft alle Kreditanträge sorgfältig und stellt die Plattform für die sichere Abwicklung bereit.",
      },
      {
        question: "Wie kann ich einen Kredit beantragen?",
        answer: "Die Kreditbeantragung ist einfach und vollständig digital. Füllen Sie das Online-Formular aus, laden Sie die erforderlichen Dokumente hoch und erhalten Sie innerhalb kurzer Zeit eine Entscheidung. Bei positivem Bescheid wird Ihr Kredit auf der Plattform zur Finanzierung freigegeben.",
      },
      {
        question: "Welche Arten von Krediten kann ich beantragen?",
        answer: "Cashare bietet verschiedene Kreditarten an: Privatkredite für persönliche Anschaffungen, KMU-Kredite für Unternehmen sowie Hypothekar-Darlehen. Die Kreditsummen reichen von CHF 1'000 bis CHF 1'000'000 mit flexiblen Laufzeiten.",
      },
      {
        question: "Wie kann ich als Anleger investieren?",
        answer: "Nach der kostenlosen Registrierung können Sie direkt in einzelne Kreditprojekte investieren. Wählen Sie Projekte nach Ihren Kriterien wie Rendite, Risiko und Laufzeit aus. Bereits ab CHF 100 pro Projekt können Sie Ihr Portfolio diversifizieren.",
      },
      {
        question: "Welche Renditen kann ich als Anleger erwarten?",
        answer: "Die Renditen variieren je nach Risikoklasse der Kredite. Im Durchschnitt erzielen unsere Anleger Renditen zwischen 4% und 12% p.a. Je höher das Risiko, desto höher die potenzielle Rendite. Eine breite Diversifikation hilft, das Risiko zu minimieren.",
      },
    ],
  },
  en: {
    title: "Any Questions?",
    subtitle: "Here are some questions and answers. We are happy to assist you with further information.",
    faqs: [
      {
        question: "Who is Cashare?",
        answer: "Cashare was founded in 2008 as Switzerland's first crowdlending platform. We connect borrowers directly with investors, enabling fair conditions for both sides. With over 60,000 customers and CHF 2.5 billion in reviewed loan applications, we are the leading provider in Switzerland.",
      },
      {
        question: "How does crowdlending work?",
        answer: "With crowdlending, loans are not financed by a bank, but by many private and institutional investors. Borrowers receive fair interest rates, while investors achieve attractive returns. Cashare carefully reviews all loan applications and provides the platform for secure processing.",
      },
      {
        question: "How can I apply for a loan?",
        answer: "The loan application is simple and fully digital. Fill out the online form, upload the required documents and receive a decision within a short time. If approved, your loan will be released for financing on the platform.",
      },
      {
        question: "What types of loans can I apply for?",
        answer: "Cashare offers various types of loans: personal loans for private purchases, SME loans for businesses, and mortgage loans. Loan amounts range from CHF 1,000 to CHF 1,000,000 with flexible terms.",
      },
      {
        question: "How can I invest as an investor?",
        answer: "After free registration, you can invest directly in individual loan projects. Choose projects according to your criteria such as return, risk and duration. You can diversify your portfolio from as little as CHF 100 per project.",
      },
      {
        question: "What returns can I expect as an investor?",
        answer: "Returns vary depending on the risk class of the loans. On average, our investors achieve returns between 4% and 12% p.a. The higher the risk, the higher the potential return. Broad diversification helps to minimize risk.",
      },
    ],
  },
  fr: {
    title: "Des questions?",
    subtitle: "Voici quelques questions et réponses. Nous sommes à votre disposition pour de plus amples informations.",
    faqs: [
      {
        question: "Qui est Cashare?",
        answer: "Cashare a été fondée en 2008 en tant que première plateforme de crowdlending en Suisse. Nous mettons en relation directe les emprunteurs et les investisseurs, permettant des conditions équitables pour les deux parties. Avec plus de 60'000 clients et CHF 2.5 milliards de demandes de crédit examinées, nous sommes le leader en Suisse.",
      },
      {
        question: "Comment fonctionne le crowdlending?",
        answer: "Avec le crowdlending, les prêts ne sont pas financés par une banque, mais par de nombreux investisseurs privés et institutionnels. Les emprunteurs obtiennent des taux d'intérêt équitables, tandis que les investisseurs réalisent des rendements attractifs. Cashare examine soigneusement toutes les demandes de prêt et fournit la plateforme pour un traitement sécurisé.",
      },
      {
        question: "Comment puis-je demander un crédit?",
        answer: "La demande de crédit est simple et entièrement numérique. Remplissez le formulaire en ligne, téléchargez les documents requis et recevez une décision dans un court délai. En cas d'approbation, votre crédit sera mis en ligne pour financement sur la plateforme.",
      },
      {
        question: "Quels types de crédits puis-je demander?",
        answer: "Cashare propose différents types de crédits: prêts personnels pour les achats privés, crédits PME pour les entreprises et prêts hypothécaires. Les montants de crédit vont de CHF 1'000 à CHF 1'000'000 avec des durées flexibles.",
      },
      {
        question: "Comment puis-je investir en tant qu'investisseur?",
        answer: "Après une inscription gratuite, vous pouvez investir directement dans des projets de crédit individuels. Choisissez des projets selon vos critères tels que le rendement, le risque et la durée. Vous pouvez diversifier votre portefeuille à partir de CHF 100 par projet.",
      },
      {
        question: "Quels rendements puis-je attendre en tant qu'investisseur?",
        answer: "Les rendements varient selon la classe de risque des crédits. En moyenne, nos investisseurs obtiennent des rendements entre 4% et 12% p.a. Plus le risque est élevé, plus le rendement potentiel est important. Une large diversification aide à minimiser le risque.",
      },
    ],
  },
};

export function FAQ({ locale }: FAQProps) {
  const t = content[locale];

  return (
    <>
      {/* FAQ structured data for rich snippets */}
      <JsonLd data={generateFAQSchema(t.faqs)} />

      <section class="faq">
      <div class="faq__container">
        <div class="faq__header">
          <h2 class="faq__title">{t.title}</h2>
          <p class="faq__subtitle">{t.subtitle}</p>
        </div>

        <div class="faq__list">
          {t.faqs.map((faq, index) => (
            <details class="faq__item" key={index}>
              <summary class="faq__question">
                <span>{faq.question}</span>
                <svg class="faq__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div class="faq__answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
