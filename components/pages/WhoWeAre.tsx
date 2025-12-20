import type { Locale } from "../../lib/i18n/index.ts";

interface WhoWeAreProps {
  locale: Locale;
}

const content = {
  de: {
    backLink: { label: "Zuruck zu Uber uns", href: "/ueber-uns" },
    title: "Wer sind wir",
    subtitle: "Seit 2008 verbinden wir Menschen mit gemeinsamen finanziellen Zielen",
    mission: {
      title: "Unsere Mission",
      text: "Wir demokratisieren den Zugang zu Finanzierungen und Anlagemoglichkeiten. Durch unsere Plattform erhalten Kreditnehmer faire Konditionen und Anleger attraktive Renditen - ohne traditionelle Banken als Vermittler.",
    },
    vision: {
      title: "Unsere Vision",
      text: "Eine Finanzwelt, in der jeder Mensch Zugang zu fairen Finanzierungslosungen hat und sein Geld gewinnbringend anlegen kann. Wir glauben an die Kraft der Gemeinschaft und die Vorteile direkter Verbindungen.",
    },
    values: {
      title: "Unsere Werte",
      items: [
        { title: "Transparenz", desc: "Klare Konditionen und offene Kommunikation in allem, was wir tun." },
        { title: "Fairness", desc: "Faire Zinsen fur beide Seiten - Kreditnehmer und Anleger." },
        { title: "Innovation", desc: "Kontinuierliche Weiterentwicklung unserer Technologie und Services." },
        { title: "Vertrauen", desc: "FINMA-reguliert und mit hochsten Sicherheitsstandards." },
      ],
    },
    team: {
      title: "Unser Team",
      text: "Hinter Cashare steht ein erfahrenes Team aus Finanz- und Technologie-Experten. Wir vereinen jahrzehntelange Erfahrung im Bankwesen mit modernster Technologie-Kompetenz.",
    },
    history: {
      title: "Unsere Geschichte",
      items: [
        { year: "2008", event: "Grundung von Cashare als erste Crowdlending-Plattform der Schweiz" },
        { year: "2013", event: "Erhalt der FINMA-Lizenz als regulierte Plattform" },
        { year: "2016", event: "Launch der KMU-Kredit-Plattform" },
        { year: "2020", event: "Uber 100 Millionen CHF vermittelte Kredite" },
        { year: "2023", event: "Uber 250 Millionen CHF vermittelte Kredite" },
      ],
    },
    cta: {
      title: "Teil der Cashare-Community werden",
      borrower: { label: "Kredit beantragen", href: "/kredit-beantragen" },
      investor: { label: "Jetzt investieren", href: "/investieren" },
    },
  },
  en: {
    backLink: { label: "Back to About Us", href: "/en/about" },
    title: "Who We Are",
    subtitle: "Since 2008, we connect people with shared financial goals",
    mission: {
      title: "Our Mission",
      text: "We democratize access to financing and investment opportunities. Through our platform, borrowers receive fair conditions and investors attractive returns - without traditional banks as intermediaries.",
    },
    vision: {
      title: "Our Vision",
      text: "A financial world where everyone has access to fair financing solutions and can invest their money profitably. We believe in the power of community and the benefits of direct connections.",
    },
    values: {
      title: "Our Values",
      items: [
        { title: "Transparency", desc: "Clear conditions and open communication in everything we do." },
        { title: "Fairness", desc: "Fair interest rates for both sides - borrowers and investors." },
        { title: "Innovation", desc: "Continuous development of our technology and services." },
        { title: "Trust", desc: "FINMA-regulated and with the highest security standards." },
      ],
    },
    team: {
      title: "Our Team",
      text: "Behind Cashare is an experienced team of finance and technology experts. We combine decades of banking experience with cutting-edge technology competence.",
    },
    history: {
      title: "Our History",
      items: [
        { year: "2008", event: "Founding of Cashare as Switzerland's first crowdlending platform" },
        { year: "2013", event: "Received FINMA license as a regulated platform" },
        { year: "2016", event: "Launch of SME loan platform" },
        { year: "2020", event: "Over CHF 100 million in facilitated loans" },
        { year: "2023", event: "Over CHF 250 million in facilitated loans" },
      ],
    },
    cta: {
      title: "Become part of the Cashare community",
      borrower: { label: "Apply for loan", href: "/en/apply-for-credit" },
      investor: { label: "Start investing", href: "/en/invest" },
    },
  },
  fr: {
    backLink: { label: "Retour a A propos", href: "/fr/a-propos" },
    title: "Qui sommes-nous",
    subtitle: "Depuis 2008, nous connectons les personnes partageant des objectifs financiers communs",
    mission: {
      title: "Notre mission",
      text: "Nous democratisons l'acces au financement et aux opportunites d'investissement. Grace a notre plateforme, les emprunteurs beneficient de conditions equitables et les investisseurs de rendements attractifs - sans banques traditionnelles comme intermediaires.",
    },
    vision: {
      title: "Notre vision",
      text: "Un monde financier ou chacun a acces a des solutions de financement equitables et peut investir son argent de maniere rentable. Nous croyons au pouvoir de la communaute et aux avantages des connexions directes.",
    },
    values: {
      title: "Nos valeurs",
      items: [
        { title: "Transparence", desc: "Des conditions claires et une communication ouverte dans tout ce que nous faisons." },
        { title: "Equite", desc: "Des taux d'interet equitables pour les deux parties - emprunteurs et investisseurs." },
        { title: "Innovation", desc: "Developpement continu de notre technologie et de nos services." },
        { title: "Confiance", desc: "Regulee par la FINMA et avec les normes de securite les plus elevees." },
      ],
    },
    team: {
      title: "Notre equipe",
      text: "Derriere Cashare se trouve une equipe experimentee d'experts en finance et en technologie. Nous combinons des decennies d'experience bancaire avec une competence technologique de pointe.",
    },
    history: {
      title: "Notre histoire",
      items: [
        { year: "2008", event: "Fondation de Cashare, premiere plateforme de crowdlending en Suisse" },
        { year: "2013", event: "Obtention de la licence FINMA en tant que plateforme regulee" },
        { year: "2016", event: "Lancement de la plateforme de credit PME" },
        { year: "2020", event: "Plus de 100 millions CHF de credits accordes" },
        { year: "2023", event: "Plus de 250 millions CHF de credits accordes" },
      ],
    },
    cta: {
      title: "Rejoignez la communaute Cashare",
      borrower: { label: "Demander un credit", href: "/fr/demander-un-credit" },
      investor: { label: "Commencer a investir", href: "/fr/investir" },
    },
  },
};

export function WhoWeAre({ locale }: WhoWeAreProps) {
  const t = content[locale];

  return (
    <>
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

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="two-col">
            <div class="two-col__item">
              <h2 class="two-col__title">{t.mission.title}</h2>
              <p class="content-block__text">{t.mission.text}</p>
            </div>
            <div class="two-col__item">
              <h2 class="two-col__title">{t.vision.title}</h2>
              <p class="content-block__text">{t.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.values.title}</h2>
          </div>
          <div class="values-grid">
            {t.values.items.map((value, i) => (
              <div key={i} class="values-grid__item">
                <h3 class="values-grid__title">{value.title}</h3>
                <p class="values-grid__desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--primary">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.team.title}</h2>
            <p class="subpage-section__subtitle">{t.team.text}</p>
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.history.title}</h2>
          </div>
          <div class="history-list">
            {t.history.items.map((item, i) => (
              <div key={i} class="history-list__item">
                <div class="history-list__year">{item.year}</div>
                <div class="history-list__content">
                  <p class="history-list__text">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
