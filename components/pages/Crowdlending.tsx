import type { Locale } from "../../lib/i18n/index.ts";

interface CrowdlendingProps {
  locale: Locale;
}

const content = {
  de: {
    backLink: { label: "Zurück zu Über uns", href: "/ueber-uns" },
    title: "Was ist Crowdlending?",
    subtitle: "Die Zukunft von Krediten und Investitionen - direkt, transparent und ohne Banken als Vermittler.",
    definition: {
      title: "Crowdlending einfach erklart",
      text: "Beim Crowdlending (auch Peer-to-Peer-Lending oder P2P-Lending genannt) vergibt eine Vielzahl von Privatpersonen oder institutionellen Anlegern gemeinsam einen Kredit. Die Internet-Plattform fungiert als Vermittler, der Kreditnehmer und Anleger zusammenbringt, die Bonitat pruft und die Abwicklung ubernimmt - ohne traditionelle Banken.",
    },
    howItWorks: {
      title: "Wie funktioniert Crowdlending?",
      forBorrowers: {
        title: "Für Kreditnehmer",
        steps: [
          { title: "Antrag stellen", desc: "Gewunschte Kreditsumme, Laufzeit und maximalen Zinssatz angeben." },
          { title: "Bonitatsprufung", desc: "Die Plattform pruft die Kreditwurdigkeit innerhalb von 24 Stunden." },
          { title: "Kampagne starten", desc: "Bei positivem Entscheid wird das Projekt für die Crowd freigeschaltet." },
          { title: "Finanzierung", desc: "Anleger investieren, bis die gewunschte Summe erreicht ist." },
          { title: "Auszahlung", desc: "Die Plattform wickelt alle Zahlungen an die Darlehensgeber ab." },
        ],
      },
      forInvestors: {
        title: "Für Anleger",
        steps: [
          { title: "Projekte durchsuchen", desc: "Verfügbare Kreditprojekte auf der Plattform durchsuchen." },
          { title: "Investieren", desc: "Attraktive Projekte auswahlen und investieren." },
          { title: "Zinsen erhalten", desc: "Monatlich Zinszahlungen aus Kreditruckzahlungen erhalten." },
        ],
      },
    },
    benefits: {
      title: "Vorteile von Crowdlending",
      borrowers: {
        title: "Für Kreditnehmer",
        items: [
          "Schnelle Online-Bearbeitung ohne Banktermine",
          "Transparente Preisgestaltung - alle Kosten im Voraus bekannt",
          "Faire Zinsen - Kreditnehmer legen Maximalzins fest",
          "Flexible Rückzahlung ohne Strafgebuhren moglich",
        ],
      },
      investors: {
        title: "Für Anleger",
        items: [
          "Attraktive Renditen aus Schweizer Privat- und Firmenkrediten",
          "Direkte Kontrolle über Investitionen",
          "Klare, einfache Konditionen ohne Uberraschungen",
          "Diversifikation ab CHF 100 mit Auto-Invest",
        ],
      },
    },
    comparison: {
      title: "Crowdlending vs. Bankkredit",
      headers: ["Aspekt", "Crowdlending", "Bank"],
      rows: [
        ["Vermittler", "Direkt über Plattform", "Bank als Vermittler"],
        ["Geldgeber", "Viele Privatanleger/Institutionen", "Die Bank selbst"],
        ["Entscheidung", "Schnell (Tage)", "Langsamer (Wochen)"],
        ["Transparenz", "Höhe Transparenz", "Begrenzte Einsicht"],
        ["Konditionen", "Marktbasiert, oft gunstiger", "Feste Bankkonditionen"],
      ],
    },
    risks: {
      title: "Risiken verstehen",
      text: "Wie bei jeder Geldanlage gibt es auch beim Crowdlending Risiken. Das Hauptrisiko ist der mogliche Ausfall von Kreditnehmern. Seriose Plattformen minimieren dieses Risiko durch sorgfaltige Bonitatsprufung und empfehlen Diversifikation über mindestens 10 Projekte.",
    },
    regulation: {
      title: "Regulierung in der Schweiz",
      text: "Cashare ist FINMA-reguliert und unterliegt den strengen Schweizer Finanzmarktgesetzen. Als eine der ersten Crowdlending-Plattformen der Schweiz erfüllen wir alle gesetzlichen Anforderungen zum Schutz von Anlegern und Kreditnehmern.",
    },
    history: {
      title: "Geschichte des Crowdlending",
      items: [
        { year: "2005", event: "Zopa startet als erste P2P-Plattform in Grossbritannien" },
        { year: "2006", event: "Prosper und LendingClub starten in den USA" },
        { year: "2008", event: "Cashare startet als erste Crowdlending-Plattform der Schweiz" },
        { year: "Heute", event: "Uber 60'000 Kunden und CHF 2.5 Mrd. Kreditanfragen" },
      ],
    },
    cta: {
      title: "Bereit zum Starten?",
      borrower: { label: "Kredit beantragen", href: "/privatkredit" },
      investor: { label: "Jetzt investieren", href: "/investieren" },
    },
  },
  en: {
    backLink: { label: "Back to About Us", href: "/en/about" },
    title: "What is Crowdlending?",
    subtitle: "The future of loans and investments - direct, transparent, and without banks as intermediaries.",
    definition: {
      title: "Crowdlending explained simply",
      text: "In crowdlending (also called peer-to-peer lending or P2P lending), a multitude of private individuals or institutional investors collectively provide a loan. The internet platform acts as an intermediary that brings together borrowers and investors, checks creditworthiness, and handles processing - without traditional banks.",
    },
    howItWorks: {
      title: "How does Crowdlending work?",
      forBorrowers: {
        title: "For Borrowers",
        steps: [
          { title: "Submit application", desc: "Specify desired loan amount, duration, and maximum interest rate." },
          { title: "Crédit check", desc: "The platform checks creditworthiness within 24 hours." },
          { title: "Start campaign", desc: "If approved, the project is released for the crowd." },
          { title: "Funding", desc: "Investors invest until the desired amount is reached." },
          { title: "Disbursement", desc: "The platform handles all payments to lenders." },
        ],
      },
      forInvestors: {
        title: "For Investors",
        steps: [
          { title: "Browse projects", desc: "Browse available loan projects on the platform." },
          { title: "Invest", desc: "Select attractive projects and invest." },
          { title: "Receive interest", desc: "Receive monthly interest payments from loan repayments." },
        ],
      },
    },
    benefits: {
      title: "Benefits of Crowdlending",
      borrowers: {
        title: "For Borrowers",
        items: [
          "Fast online processing without bank appointments",
          "Transparent pricing - all costs known in advance",
          "Fair rates - borrowers set maximum rate",
          "Flexible repayment without penalty fees possible",
        ],
      },
      investors: {
        title: "For Investors",
        items: [
          "Attractive returns from Swiss private and business loans",
          "Direct control over investments",
          "Clear, simple terms without surprises",
          "Diversification from CHF 100 with Auto-Invest",
        ],
      },
    },
    comparison: {
      title: "Crowdlending vs. Bank Loan",
      headers: ["Aspect", "Crowdlending", "Bank"],
      rows: [
        ["Intermediary", "Direct via platform", "Bank as intermediary"],
        ["Lender", "Many private/institutional investors", "The bank itself"],
        ["Decision", "Fast (days)", "Slower (weeks)"],
        ["Transparency", "High transparency", "Limited insight"],
        ["Terms", "Market-based, often cheaper", "Fixed bank conditions"],
      ],
    },
    risks: {
      title: "Understanding Risks",
      text: "As with any investment, crowdlending carries risks. The main risk is the potential default of borrowers. Reputable platforms minimize this risk through careful crédit checks and recommend diversification across at least 10 projects.",
    },
    regulation: {
      title: "Régulation in Switzerland",
      text: "Cashare is FINMA-regulated and subject to strict Swiss financial market laws. As one of Switzerland's first crowdlending platforms, we meet all legal requirements to protect investors and borrowers.",
    },
    history: {
      title: "History of Crowdlending",
      items: [
        { year: "2005", event: "Zopa launches as the first P2P platform in the UK" },
        { year: "2006", event: "Prosper and LendingClub launch in the USA" },
        { year: "2008", event: "Cashare launches as Switzerland's first crowdlending platform" },
        { year: "Today", event: "Over 60,000 customers and CHF 2.5 billion in loan requests" },
      ],
    },
    cta: {
      title: "Ready to get started?",
      borrower: { label: "Apply for a loan", href: "/en/personal-loan" },
      investor: { label: "Start investing", href: "/en/invest" },
    },
  },
  fr: {
    backLink: { label: "Retour à À propos", href: "/fr/a-propos" },
    title: "Qu'est-ce que le Crowdlending?",
    subtitle: "L'avenir des credits et des investissements - direct, transparent et sans banques comme intermediaires.",
    definition: {
      title: "Le crowdlending explique simplement",
      text: "Dans le crowdlending (egalement appele pret entre particuliers ou P2P lending), une multitude de particuliers ou d'investisseurs institutionnels accordent collectivement un credit. La plateforme internet agit comme intermediaire, reunissant emprunteurs et investisseurs, verifiant la solvabilite et gerant le traitement - sans banques traditionnelles.",
    },
    howItWorks: {
      title: "Comment fonctionne le Crowdlending?",
      forBorrowers: {
        title: "Pour les emprunteurs",
        steps: [
          { title: "Soumettre une demande", desc: "Indiquer le montant souhaite, la duree et le taux d'interet maximum." },
          { title: "Verification de credit", desc: "La plateforme verifie la solvabilite dans les 24 heures." },
          { title: "Demarrer la campagne", desc: "En cas d'approbation, le projet est libere pour la foule." },
          { title: "Financement", desc: "Les investisseurs investissent jusqu'a ce que le montant soit atteint." },
          { title: "Versement", desc: "La plateforme gere tous les paiements aux preteurs." },
        ],
      },
      forInvestors: {
        title: "Pour les investisseurs",
        steps: [
          { title: "Parcourir les projets", desc: "Parcourir les projets de crédit disponibles sur la plateforme." },
          { title: "Investir", desc: "Selectionner des projets attractifs et investir." },
          { title: "Recevoir des interets", desc: "Recevoir des paiements d'interets mensuels." },
        ],
      },
    },
    benefits: {
      title: "Avantages du Crowdlending",
      borrowers: {
        title: "Pour les emprunteurs",
        items: [
          "Traitement en ligne rapide sans rendez-vous bancaires",
          "Tarification transparente - tous les couts connus a l'avance",
          "Taux equitables - les emprunteurs fixent le taux maximum",
          "Remboursement flexible sans penalites possible",
        ],
      },
      investors: {
        title: "Pour les investisseurs",
        items: [
          "Rendements attractifs sur les prets suisses privés et professionnels",
          "Controle direct sur les investissements",
          "Conditions claires et simples sans surprises",
          "Diversification des CHF 100 avec Auto-Invest",
        ],
      },
    },
    comparison: {
      title: "Crowdlending vs. Pret bancaire",
      headers: ["Aspect", "Crowdlending", "Banque"],
      rows: [
        ["Intermediaire", "Direct via la plateforme", "Banque comme intermediaire"],
        ["Preteur", "Nombreux investisseurs privés/institutionnels", "La banque elle-meme"],
        ["Decision", "Rapide (jours)", "Plus lent (semaines)"],
        ["Transparence", "Haute transparence", "Apercu limite"],
        ["Conditions", "Basees sur le marche, souvent moins cheres", "Conditions bancaires fixes"],
      ],
    },
    risks: {
      title: "Comprendre les risques",
      text: "Comme pour tout investissement, le crowdlending comporte des risques. Le risque principal est le defaut potentiel des emprunteurs. Les plateformes reputees minimisent ce risque par des verifications de crédit rigoureuses et recommandent la diversification sur au moins 10 projets.",
    },
    regulation: {
      title: "Régulation en Suisse",
      text: "Cashare est regulee par la FINMA et soumise aux strictes lois suisses sur les marches financiers. En tant que l'une des premieres plateformes de crowdlending en Suisse, nous repondons a toutes les exigences legales pour proteger les investisseurs et les emprunteurs.",
    },
    history: {
      title: "Histoire du Crowdlending",
      items: [
        { year: "2005", event: "Zopa lance la premiere plateforme P2P au Royaume-Uni" },
        { year: "2006", event: "Prosper et LendingClub lancent aux Etats-Unis" },
        { year: "2008", event: "Cashare lance la premiere plateforme de crowdlending en Suisse" },
        { year: "Aujourd'hui", event: "Plus de 60'000 clients et CHF 2,5 milliards de demandes de credit" },
      ],
    },
    cta: {
      title: "Pret a commencer?",
      borrower: { label: "Demander un credit", href: "/fr/pret-personnel" },
      investor: { label: "Commencer a investir", href: "/fr/investir" },
    },
  },
};

export function Crowdlending({ locale }: CrowdlendingProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero */}
      <section class="subpage-hero">
        <div class="subpage-hero__container">
          <a href={t.backLink.href} class="subpage-hero__back">
            <svg class="subpage-hero__back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <h1 class="subpage-hero__title">{t.title}</h1>
          <p class="subpage-hero__subtitle">{t.subtitle}</p>
        </div>
      </section>

      {/* Definition */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="content-block">
            <h2 class="content-block__title">{t.definition.title}</h2>
            <p class="content-block__text">{t.definition.text}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.howItWorks.title}</h2>
          </div>
          <div class="two-col">
            <div class="two-col__item">
              <h3 class="two-col__title">{t.howItWorks.forBorrowers.title}</h3>
              <div class="steps-list">
                {t.howItWorks.forBorrowers.steps.map((step, i) => (
                  <div key={i} class="steps-list__item">
                    <div class="steps-list__number">{i + 1}</div>
                    <div class="steps-list__content">
                      <div class="steps-list__title">{step.title}</div>
                      <div class="steps-list__desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="two-col__item">
              <h3 class="two-col__title">{t.howItWorks.forInvestors.title}</h3>
              <div class="steps-list">
                {t.howItWorks.forInvestors.steps.map((step, i) => (
                  <div key={i} class="steps-list__item">
                    <div class="steps-list__number steps-list__number--alt">{i + 1}</div>
                    <div class="steps-list__content">
                      <div class="steps-list__title">{step.title}</div>
                      <div class="steps-list__desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.benefits.title}</h2>
          </div>
          <div class="two-col">
            <div class="two-col__item">
              <h3 class="two-col__title">{t.benefits.borrowers.title}</h3>
              <div class="check-list">
                {t.benefits.borrowers.items.map((item, i) => (
                  <div key={i} class="check-list__item">
                    <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="check-list__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div class="two-col__item">
              <h3 class="two-col__title">{t.benefits.investors.title}</h3>
              <div class="check-list">
                {t.benefits.investors.items.map((item, i) => (
                  <div key={i} class="check-list__item">
                    <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="check-list__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.comparison.title}</h2>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                {t.comparison.headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="info-box">
            <svg class="info-box__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div class="info-box__content">
              <h3 class="info-box__title">{t.risks.title}</h3>
              <p class="info-box__text">{t.risks.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Régulation */}
      <section class="subpage-section subpage-section--primary">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.regulation.title}</h2>
            <p class="subpage-section__subtitle">{t.regulation.text}</p>
          </div>
        </div>
      </section>

      {/* History */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.history.title}</h2>
          </div>
          <div class="timeline">
            {t.history.items.map((item, i) => (
              <div key={i} class="timeline__item">
                <div class="timeline__year">{item.year}</div>
                <div class="timeline__dot" />
                <div class="timeline__content">
                  <p class="timeline__text">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="subpage-cta">
        <div class="subpage-cta__container">
          <h2 class="subpage-cta__title">{t.cta.title}</h2>
          <div class="subpage-cta__buttons">
            <a href={t.cta.borrower.href} class="subpage-cta__btn subpage-cta__btn--primary">
              {t.cta.borrower.label}
            </a>
            <a href={t.cta.investor.href} class="subpage-cta__btn subpage-cta__btn--secondary">
              {t.cta.investor.label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
