import type { Locale } from "../../lib/i18n/index.ts";

interface WhoWeAreProps {
  locale: Locale;
}

const content = {
  de: {
    hero: {
      title: "Geschichte und Kompetenzen",
      subtitle: "Das Unternehmen Cashare stellt sich vor",
    },
    credentials: [
      {
        icon: "pioneer",
        title: "Die Pioniere",
        text:
          "Gegründet im Januar 2008\nAls Schweizer Fintech-Pionier haben wir den Weg für eine moderne und digitale Kreditvergabe bereitet und verfügen entsprechend über die grösste Erfahrung in diesem Bereich.",
      },
      {
        icon: "regulated",
        title: "Reguliert",
        text:
          "Als Aktiengesellschaft nach schweizerischem Recht mit Sitz in Hünenberg (ZG) und eingetragen im Handelsregister des Kantons Zug, Schweiz, verfügen wir über die Kreditgeber-Lizenz.",
      },
      {
        icon: "audited",
        title: "Geprüft",
        text:
          "Seit der Gründung geprüft durch das führende Prüfungs- und Beratungsunternehmen der Schweiz PricewaterhouseCoopers AG, Zürich",
      },
      {
        icon: "approved",
        title: "Genehmigt",
        text:
          "Finanzintermediär im Sinne von GwG Art. 2 Abs. 3 und Mitglied bei der von der FINMA anerkannten Selbstregulierungsorganisation PolyReg",
      },
    ],
    years: {
      title: "18 Jahre Cashare",
      subtitle:
        "Eine Reise voller Innovation, Vertrauen und Wachstum im Marketplace-Lending.",
    },
    whatWeDo: {
      label: "Über uns",
      title: "Was wir machen",
      paragraphs: [
        "Wir sind ein unabhängiger Finanzdienstleister und bringen Menschen und Unternehmen zusammen – als Anleger oder Kreditnehmer. Bei uns finden Sie moderne Finanzierungsmöglichkeiten, unabhängig von traditionellen Banken.",
        "Unsere Plattform ist vollautomatisiert, einfach zu bedienen und sorgt für schnelle, sichere und transparente Abläufe. So profitieren Sie von effizienter Abwicklung und attraktiven Konditionen.",
        "Als lizenziertes Finanzinstitut legen wir grossen Wert auf höchste Standards in Sachen Compliance und Integrität. Jährliche Prüfungen durch unabhängige Revisoren sichern zusätzlich Ihr Vertrauen in unsere Arbeit.",
      ],
    },
    whoWeAre: {
      label: "Über uns",
      title: "Wer wir sind",
      paragraphs: [
        "Seit unserer Gründung im Jahr 2008 prägen wir als erstes Crowdlending-FinTech der Schweiz die Zukunft der Finanzwelt. Mit Pioniergeist und Innovationskraft haben wir neue Massstäbe gesetzt und bieten Anlegern sowie Kreditnehmern verantwortungsvolle und transparente Finanzlösungen.",
        "Getrieben von starken Werten und echter Unabhängigkeit, durften wir bereits über 60'000 Kunden begleiten und Kreditanträge im Wert von über CHF 2,5 Milliarden prüfen.",
      ],
    },
    whyCashare: {
      title: "Wieso mit Cashare",
      subtitle:
        "Bei Cashare verbinden wir modernste Finanztechnologie mit bewährter Schweizer Zuverlässigkeit – und bieten Ihnen damit das Beste aus beiden Welten.",
      items: [
        {
          title: "Transparent und fair",
          text:
            "Ohne versteckte Kosten verbinden wir Anleger und Kreditnehmer direkt über unsere Plattform – unkompliziert und zu fairen Konditionen.",
        },
        {
          title: "Innovative Finanzlösungen",
          text:
            "Wir nutzen moderne Technologien und datenbasierte Analysen, um verschiedene finanzielle Bedürfnisse effizient zu erfüllen.",
        },
        {
          title: "Erprobte Expertise",
          text:
            "Mit unserer langjährigen Erfahrung und innovativen Technologie ermöglichen wir effiziente und fundierte Finanzierungslösungen.",
        },
        {
          title: "Kundenorientiert",
          text:
            "Unsere Mitarbeiter und Plattform stellen die Bedürfnisse von Anleger und Kreditnehmern in den Mittelpunkt.",
        },
      ],
    },
    team: {
      title: "Cashare Team",
      subtitle: "Lernen Sie unser Team kennen",
      contactBtn: "Kontaktieren Sie uns",
      members: [
        {
          name: "Michael Borter",
          role: "CEO / Gründer",
          image: "michael-borter",
        },
        {
          name: "Roger Müller",
          role: "COO / Mitgründer",
          image: "roger-muller",
        },
        {
          name: "Sajmir Medija",
          role: "Leiter Geschäftsentwicklung",
          image: "sajmir-medija",
        },
        { name: "Delia Aellen", role: "Leiter Betrieb", image: "delia-allen" },
        {
          name: "Jonas Imfeld",
          role: "Leitender Risikomanager",
          image: "jonas-imfeld",
        },
        {
          name: "Filipe Goncalves",
          role: "Verkaufsleiter",
          image: "filipe-goncalves",
        },
        {
          name: "Andy Jenk",
          role: "Leiter B2B-Partnerschaften",
          image: "andy-jenk",
        },
        {
          name: "Kassandra Bulica",
          role: "Kreditmanagerin / Sachbearbeiterin",
          image: "kassandra-bulica",
        },
        {
          name: "Arbresha Hoxhaj",
          role: "Kreditmanagerin / Sachbearbeiterin",
          image: "arbresha-hoxhaj",
        },
        {
          name: "Débora Fernandes Martins",
          role: "Junior-Kreditanalyst",
          image: "debora-fernandes",
        },
      ],
    },
    board: {
      title: "Vorstand & Beirat",
      members: [
        {
          name: "Jan F. Moermann",
          role: "Mitglied des Vorstands",
          image: "jan-moermann",
        },
        {
          name: "Tina Störmer",
          role: "Mitglied des Beirats",
          image: "tina-stormer",
        },
        {
          name: "Dr. Tom Ludescher",
          role: "Mitglied des Beirats",
          image: "tom-ludescher",
        },
        {
          name: "Prof. Dr Alfred Mettler",
          role: "Mitglied des Beirats",
          image: "alfred-mettler",
        },
        {
          name: "Harald Schnabel",
          role: "Mitglied des Beirats",
          image: "harald-schnabel",
        },
        {
          name: "Dominik Joke",
          role: "Mitglied des Beirats",
          image: "dominik-joke",
        },
        {
          name: "Oscar Neira",
          role: "Mitglied des Beirats",
          image: "oscar-neira",
        },
      ],
    },
    benefits: {
      title: "Unsere Vorteile",
      headline: "Erfahrung – Sicherheit – Effizienz – Technologie",
      subtitle:
        "Mit Innovation und Verantwortung zu kosteneffizienten Lösungen für Kreditnehmer und Anleger.",
      items: [
        {
          title: "Was Sie über uns wissen sollten",
          text:
            "Cashare wurde 2008 als erste Crowdlending-Plattform der Schweiz gegründet und hat sich als führender Anbieter für innovative Finanzierungslösungen etabliert. Mit über 60'000 Kunden und CHF 2,5 Milliarden geprüfter Kreditanträge.",
        },
        {
          title: "Transparente & effiziente Prozesse",
          text:
            "Cashare steht für klare, faire und transparente Abläufe. Ob für Kreditnehmer oder Investoren – alle Prozesse sind verständlich und ohne versteckte Gebühren oder Überraschungen.",
        },
        {
          title: "Flexible Finanzlösungen für alle",
          text:
            "Cashare verbindet Kreditnehmer mit Investoren und bietet eine faire Alternative zu Banken. Kreditnehmer profitieren von flexiblen Laufzeiten, Investoren von attraktiven Renditen und einer diversifizierten Anlagestrategie.",
        },
        {
          title: "Attraktive Renditen für Anleger",
          text:
            "Anleger profitieren von attraktiven Renditen, die traditionelle Anlageformen in einem Portfolio optimal ergänzen, speziell als Erweiterung im Fixed Income Bereich.",
        },
        {
          title: "Sicherheit durch intelligentes Risikomanagement",
          text:
            "Optimieren Sie Ihr Portfolio mit unseren massgeschneiderten Investitionslösungen für institutionelle Anleger. Profitieren Sie von einem starken Risikomanagement und einer professionellen Abwicklung.",
        },
        {
          title: "Nachhaltige Finanzlösungen",
          text:
            "Cashare verbindet Kreditnehmer und Investoren zu einer starken Finanzgemeinschaft. Durch Crowdlending wird finanzielle Unabhängigkeit gefördert und kleine Unternehmen unterstützt.",
        },
      ],
    },
  },
  en: {
    hero: {
      title: "History and Competencies",
      subtitle: "The Cashare company introduces itself",
    },
    credentials: [
      {
        icon: "pioneer",
        title: "The Pioneers",
        text:
          "Founded in January 2008\nAs a Swiss fintech pioneer, we have paved the way for modern digital lending and have the most experience in this area.",
      },
      {
        icon: "regulated",
        title: "Regulated",
        text:
          "As a public limited company under Swiss law based in Hünenberg (ZG) and registered in the commercial register of the Canton of Zug, Switzerland, we hold the lending license.",
      },
      {
        icon: "audited",
        title: "Audited",
        text:
          "Audited since founding by Switzerland's leading audit and consulting firm PricewaterhouseCoopers AG, Zurich",
      },
      {
        icon: "approved",
        title: "Approved",
        text:
          "Financial intermediary within the meaning of AMLA Art. 2 Para. 3 and member of the FINMA-recognized self-regulatory organization PolyReg",
      },
    ],
    years: {
      title: "17 Years of Cashare",
      subtitle:
        "A journey full of innovation, trust and growth in marketplace lending.",
    },
    whatWeDo: {
      label: "About Us",
      title: "What We Do",
      paragraphs: [
        "We are an independent financial services provider connecting people and companies – as investors or borrowers. With us, you'll find modern financing options, independent of traditional banks.",
        "Our platform is fully automated, easy to use, and ensures fast, secure, and transparent processes. This way, you benefit from efficient processing and attractive conditions.",
        "As a licensed financial institution, we place great importance on the highest standards of compliance and integrity. Annual audits by independent auditors further secure your trust in our work.",
      ],
    },
    whoWeAre: {
      label: "About Us",
      title: "Who We Are",
      paragraphs: [
        "Since our founding in 2008, we have been shaping the future of finance as Switzerland's first crowdlending fintech. With pioneering spirit and innovation, we have set new standards and offer investors and borrowers responsible and transparent financial solutions.",
        "Driven by strong values and true independence, we have served over 60,000 customers and reviewed loan applications worth over CHF 2.5 billion.",
      ],
    },
    whyCashare: {
      title: "Why Cashare",
      subtitle:
        "At Cashare, we combine cutting-edge financial technology with proven Swiss reliability – giving you the best of both worlds.",
      items: [
        {
          title: "Transparent and Fair",
          text:
            "Without hidden costs, we connect investors and borrowers directly through our platform – straightforward and at fair conditions.",
        },
        {
          title: "Innovative Financial Solutions",
          text:
            "We use modern technologies and data-driven analysis to efficiently meet various financial needs.",
        },
        {
          title: "Proven Expertise",
          text:
            "With our long-standing experience and innovative technology, we enable efficient and well-founded financing solutions.",
        },
        {
          title: "Customer-Oriented",
          text:
            "Our employees and platform put the needs of investors and borrowers at the center.",
        },
      ],
    },
    team: {
      title: "Cashare Team",
      subtitle: "Get to know our team",
      contactBtn: "Contact Us",
      members: [
        {
          name: "Michael Borter",
          role: "CEO / Founder",
          image: "michael-borter",
        },
        {
          name: "Roger Müller",
          role: "COO / Co-Founder",
          image: "roger-muller",
        },
        {
          name: "Sajmir Medija",
          role: "Head of Business Development",
          image: "sajmir-medija",
        },
        {
          name: "Delia Aellen",
          role: "Head of Operations",
          image: "delia-allen",
        },
        {
          name: "Jonas Imfeld",
          role: "Lead Risk Manager",
          image: "jonas-imfeld",
        },
        {
          name: "Filipe Goncalves",
          role: "Sales Manager",
          image: "filipe-goncalves",
        },
        {
          name: "Andy Jenk",
          role: "Head of B2B Partnerships",
          image: "andy-jenk",
        },
        {
          name: "Kassandra Bulica",
          role: "Credit Manager",
          image: "kassandra-bulica",
        },
        {
          name: "Arbresha Hoxhaj",
          role: "Credit Manager",
          image: "arbresha-hoxhaj",
        },
        {
          name: "Débora Fernandes Martins",
          role: "Junior Credit Analyst",
          image: "debora-fernandes",
        },
      ],
    },
    board: {
      title: "Board & Advisory",
      members: [
        {
          name: "Jan F. Moermann",
          role: "Board Member",
          image: "jan-moermann",
        },
        {
          name: "Tina Störmer",
          role: "Advisory Board Member",
          image: "tina-stormer",
        },
        {
          name: "Dr. Tom Ludescher",
          role: "Advisory Board Member",
          image: "tom-ludescher",
        },
        {
          name: "Prof. Dr Alfred Mettler",
          role: "Advisory Board Member",
          image: "alfred-mettler",
        },
        {
          name: "Harald Schnabel",
          role: "Advisory Board Member",
          image: "harald-schnabel",
        },
        {
          name: "Dominik Joke",
          role: "Advisory Board Member",
          image: "dominik-joke",
        },
        {
          name: "Oscar Neira",
          role: "Advisory Board Member",
          image: "oscar-neira",
        },
      ],
    },
    benefits: {
      title: "Our Advantages",
      headline: "Experience – Security – Efficiency – Technology",
      subtitle:
        "Innovation and responsibility for cost-efficient solutions for borrowers and investors.",
      items: [
        {
          title: "What You Should Know About Us",
          text:
            "Cashare was founded in 2008 as Switzerland's first crowdlending platform and has established itself as a leading provider of innovative financing solutions. With over 60,000 customers and CHF 2.5 billion in reviewed loan applications.",
        },
        {
          title: "Transparent & Efficient Processes",
          text:
            "Cashare stands for clear, fair, and transparent processes. Whether for borrowers or investors – all processes are understandable and without hidden fees or surprises.",
        },
        {
          title: "Flexible Financial Solutions for Everyone",
          text:
            "Cashare connects borrowers with investors and offers a fair alternative to banks. Borrowers benefit from flexible terms, investors from attractive returns and a diversified investment strategy.",
        },
        {
          title: "Attractive Returns for Investors",
          text:
            "Investors benefit from attractive returns that optimally complement traditional investments in a portfolio, especially as an extension in the fixed income sector.",
        },
        {
          title: "Security Through Intelligent Risk Management",
          text:
            "Optimize your portfolio with our tailored investment solutions for institutional investors. Benefit from strong risk management and professional handling.",
        },
        {
          title: "Sustainable Financial Solutions",
          text:
            "Cashare connects borrowers and investors into a strong financial community. Through crowdlending, financial independence is promoted and small businesses are supported.",
        },
      ],
    },
  },
  fr: {
    hero: {
      title: "Histoire et Compétences",
      subtitle: "L'entreprise Cashare se présente",
    },
    credentials: [
      {
        icon: "pioneer",
        title: "Les Pionniers",
        text:
          "Fondée en janvier 2008\nEn tant que pionnier suisse de la fintech, nous avons ouvert la voie à un crédit moderne et numérique et disposons de la plus grande expérience dans ce domaine.",
      },
      {
        icon: "regulated",
        title: "Réglementée",
        text:
          "En tant que société anonyme de droit suisse basée à Hünenberg (ZG) et inscrite au registre du commerce du canton de Zoug, Suisse, nous détenons la licence de prêteur.",
      },
      {
        icon: "audited",
        title: "Auditée",
        text:
          "Auditée depuis sa création par le principal cabinet d'audit et de conseil de Suisse PricewaterhouseCoopers AG, Zurich",
      },
      {
        icon: "approved",
        title: "Approuvée",
        text:
          "Intermédiaire financier au sens de la LBA Art. 2 al. 3 et membre de l'organisme d'autorégulation PolyReg reconnu par la FINMA",
      },
    ],
    years: {
      title: "17 Ans de Cashare",
      subtitle:
        "Un voyage rempli d'innovation, de confiance et de croissance dans le marketplace lending.",
    },
    whatWeDo: {
      label: "À Propos",
      title: "Ce Que Nous Faisons",
      paragraphs: [
        "Nous sommes un prestataire de services financiers indépendant qui met en relation des personnes et des entreprises – en tant qu'investisseurs ou emprunteurs. Chez nous, vous trouverez des solutions de financement modernes, indépendantes des banques traditionnelles.",
        "Notre plateforme est entièrement automatisée, facile à utiliser et garantit des processus rapides, sécurisés et transparents. Vous bénéficiez ainsi d'un traitement efficace et de conditions attractives.",
        "En tant qu'institution financière agréée, nous accordons une grande importance aux normes les plus élevées en matière de conformité et d'intégrité. Des audits annuels par des réviseurs indépendants renforcent votre confiance dans notre travail.",
      ],
    },
    whoWeAre: {
      label: "À Propos",
      title: "Qui Nous Sommes",
      paragraphs: [
        "Depuis notre fondation en 2008, nous façonnons l'avenir de la finance en tant que première fintech de crowdlending en Suisse. Avec un esprit pionnier et une force d'innovation, nous avons établi de nouvelles normes et offrons aux investisseurs et aux emprunteurs des solutions financières responsables et transparentes.",
        "Portés par des valeurs fortes et une véritable indépendance, nous avons déjà accompagné plus de 60'000 clients et examiné des demandes de crédit d'une valeur de plus de CHF 2,5 milliards.",
      ],
    },
    whyCashare: {
      title: "Pourquoi Cashare",
      subtitle:
        "Chez Cashare, nous combinons une technologie financière de pointe avec une fiabilité suisse éprouvée – vous offrant le meilleur des deux mondes.",
      items: [
        {
          title: "Transparent et Équitable",
          text:
            "Sans frais cachés, nous connectons directement investisseurs et emprunteurs via notre plateforme – simplement et à des conditions équitables.",
        },
        {
          title: "Solutions Financières Innovantes",
          text:
            "Nous utilisons des technologies modernes et des analyses basées sur les données pour répondre efficacement à divers besoins financiers.",
        },
        {
          title: "Expertise Éprouvée",
          text:
            "Grâce à notre longue expérience et à notre technologie innovante, nous permettons des solutions de financement efficaces et bien fondées.",
        },
        {
          title: "Orienté Client",
          text:
            "Nos employés et notre plateforme placent les besoins des investisseurs et des emprunteurs au centre.",
        },
      ],
    },
    team: {
      title: "Équipe Cashare",
      subtitle: "Faites connaissance avec notre équipe",
      contactBtn: "Contactez-nous",
      members: [
        {
          name: "Michael Borter",
          role: "CEO / Fondateur",
          image: "michael-borter",
        },
        {
          name: "Roger Müller",
          role: "COO / Co-fondateur",
          image: "roger-muller",
        },
        {
          name: "Sajmir Medija",
          role: "Responsable Développement Commercial",
          image: "sajmir-medija",
        },
        {
          name: "Delia Aellen",
          role: "Responsable des Opérations",
          image: "delia-allen",
        },
        {
          name: "Jonas Imfeld",
          role: "Responsable Risques",
          image: "jonas-imfeld",
        },
        {
          name: "Filipe Goncalves",
          role: "Responsable des Ventes",
          image: "filipe-goncalves",
        },
        {
          name: "Andy Jenk",
          role: "Responsable Partenariats B2B",
          image: "andy-jenk",
        },
        {
          name: "Kassandra Bulica",
          role: "Gestionnaire de Crédit",
          image: "kassandra-bulica",
        },
        {
          name: "Arbresha Hoxhaj",
          role: "Gestionnaire de Crédit",
          image: "arbresha-hoxhaj",
        },
        {
          name: "Débora Fernandes Martins",
          role: "Analyste Crédit Junior",
          image: "debora-fernandes",
        },
      ],
    },
    board: {
      title: "Conseil d'Administration & Consultatif",
      members: [
        {
          name: "Jan F. Moermann",
          role: "Membre du Conseil",
          image: "jan-moermann",
        },
        {
          name: "Tina Störmer",
          role: "Membre du Conseil Consultatif",
          image: "tina-stormer",
        },
        {
          name: "Dr. Tom Ludescher",
          role: "Membre du Conseil Consultatif",
          image: "tom-ludescher",
        },
        {
          name: "Prof. Dr Alfred Mettler",
          role: "Membre du Conseil Consultatif",
          image: "alfred-mettler",
        },
        {
          name: "Harald Schnabel",
          role: "Membre du Conseil Consultatif",
          image: "harald-schnabel",
        },
        {
          name: "Dominik Joke",
          role: "Membre du Conseil Consultatif",
          image: "dominik-joke",
        },
        {
          name: "Oscar Neira",
          role: "Membre du Conseil Consultatif",
          image: "oscar-neira",
        },
      ],
    },
    benefits: {
      title: "Nos Avantages",
      headline: "Expérience – Sécurité – Efficacité – Technologie",
      subtitle:
        "Innovation et responsabilité pour des solutions rentables pour les emprunteurs et les investisseurs.",
      items: [
        {
          title: "Ce Que Vous Devez Savoir Sur Nous",
          text:
            "Cashare a été fondée en 2008 en tant que première plateforme de crowdlending en Suisse et s'est établie comme un fournisseur leader de solutions de financement innovantes. Avec plus de 60'000 clients et CHF 2,5 milliards de demandes de crédit examinées.",
        },
        {
          title: "Processus Transparents & Efficaces",
          text:
            "Cashare représente des processus clairs, équitables et transparents. Que ce soit pour les emprunteurs ou les investisseurs – tous les processus sont compréhensibles et sans frais cachés ni surprises.",
        },
        {
          title: "Solutions Financières Flexibles pour Tous",
          text:
            "Cashare connecte les emprunteurs aux investisseurs et offre une alternative équitable aux banques. Les emprunteurs bénéficient de conditions flexibles, les investisseurs de rendements attractifs et d'une stratégie d'investissement diversifiée.",
        },
        {
          title: "Rendements Attractifs pour les Investisseurs",
          text:
            "Les investisseurs bénéficient de rendements attractifs qui complètent idéalement les placements traditionnels dans un portefeuille, notamment comme extension dans le secteur des revenus fixes.",
        },
        {
          title: "Sécurité par une Gestion Intelligente des Risques",
          text:
            "Optimisez votre portefeuille avec nos solutions d'investissement sur mesure pour les investisseurs institutionnels. Bénéficiez d'une gestion des risques solide et d'un traitement professionnel.",
        },
        {
          title: "Solutions Financières Durables",
          text:
            "Cashare connecte les emprunteurs et les investisseurs en une communauté financière forte. Grâce au crowdlending, l'indépendance financière est favorisée et les petites entreprises sont soutenues.",
        },
      ],
    },
  },
};

// Credential icon image paths
const credentialIcons: Record<string, string> = {
  pioneer: "/images/cashare-logomark.svg",
  regulated: "/images/regulates.svg",
  audited: "/images/audited.svg",
  approved: "/images/polyreg.svg",
};

// Image mapping for team and board members
const imageMap: Record<string, string> = {
  // Team
  "michael-borter": "/images/about/michael-borter.jpg",
  "roger-muller": "/images/about/roger-muller.jpg",
  "sajmir-medija": "/images/about/sajmir-medija.jpg",
  "delia-allen": "/images/about/delia-allen.jpg",
  "jonas-imfeld": "/images/about/jonas-imfeld.jpg",
  "filipe-goncalves": "/images/about/filipe-goncalves.jpg",
  "andy-jenk": "/images/about/andy-jenk.png",
  "kassandra-bulica": "/images/about/kassandra-bulica.jpg",
  "arbresha-hoxhaj": "/images/about/arbresha-hoxhaj.jpg",
  "debora-fernandes": "/images/about/Debora-Fernances-Martins-512.jpg",
  // Board & Advisory
  "jan-moermann": "/images/about/jan-f-moermann.png",
  "tina-stormer": "/images/about/tina-stormer.png",
  "tom-ludescher": "/images/about/tom-ludescher.png",
  "alfred-mettler": "/images/about/alfred-mettler.png",
  "harald-schnabel": "/images/about/herald-schnabel.png",
  "dominik-joke": "/images/about/dominik-joke.png",
  "oscar-neira": "/images/about/oscar-neira.png",
};

function getInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("");
}

export function WhoWeAre({ locale }: WhoWeAreProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="wwa-hero">
        <div class="wwa-hero__container">
          <h1 class="wwa-hero__title">{t.hero.title}</h1>
          <p class="wwa-hero__subtitle">{t.hero.subtitle}</p>
        </div>

        {/* Credentials Cards */}
        <div class="wwa-credentials">
          <div class="wwa-credentials__container">
            {t.credentials.map((cred, i) => (
              <div key={i} class="wwa-credentials__card">
                <div class="wwa-credentials__icon">
                  <img
                    src={credentialIcons[cred.icon]}
                    alt={cred.title}
                    class="wwa-credentials__img"
                  />
                </div>
                <h3 class="wwa-credentials__title">{cred.title}</h3>
                <p class="wwa-credentials__text">{cred.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17 Years Section */}
      <section class="wwa-years">
        <div class="wwa-years__container">
          <div class="wwa-years__content">
            <h2 class="wwa-years__title">{t.years.title}</h2>
            <p class="wwa-years__subtitle">{t.years.subtitle}</p>
          </div>
          <div class="wwa-years__badge">18</div>
        </div>
      </section>

      {/* What We Do Section */}
      <section class="wwa-about">
        <div class="wwa-about__container">
          <div class="wwa-about__block">
            <span class="wwa-about__label">{t.whatWeDo.label}</span>
            <h2 class="wwa-about__title">{t.whatWeDo.title}</h2>
            {t.whatWeDo.paragraphs.map((p, i) => (
              <p key={i} class="wwa-about__text">{p}</p>
            ))}
          </div>
          <div class="wwa-about__block">
            <span class="wwa-about__label">{t.whoWeAre.label}</span>
            <h2 class="wwa-about__title">{t.whoWeAre.title}</h2>
            {t.whoWeAre.paragraphs.map((p, i) => (
              <p key={i} class="wwa-about__text">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cashare Section */}
      <section class="wwa-why">
        <div class="wwa-why__container">
          <div class="wwa-why__header">
            <h2 class="wwa-why__title">{t.whyCashare.title}</h2>
            <p class="wwa-why__subtitle">{t.whyCashare.subtitle}</p>
          </div>
          <div class="wwa-why__grid">
            {t.whyCashare.items.map((item, i) => (
              <div key={i} class="wwa-why__card">
                <h3 class="wwa-why__card-title">{item.title}</h3>
                <p class="wwa-why__card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="wwa-team">
        <div class="wwa-team__container">
          <div class="wwa-team__header">
            <h2 class="wwa-team__title">{t.team.title}</h2>
            <p class="wwa-team__subtitle">{t.team.subtitle}</p>
          </div>
          <div class="wwa-team__grid">
            {t.team.members.map((member, i) => (
              <div key={i} class="wwa-team__card">
                {imageMap[member.image]
                  ? (
                    <img
                      src={imageMap[member.image]}
                      alt={member.name}
                      class="wwa-team__avatar wwa-team__avatar--photo"
                    />
                  )
                  : (
                    <div class="wwa-team__avatar">
                      {getInitials(member.name)}
                    </div>
                  )}
                <h3 class="wwa-team__name">{member.name}</h3>
                <p class="wwa-team__role">{member.role}</p>
              </div>
            ))}
          </div>
          <div class="wwa-team__cta">
            <a
              href="https://support.cashare.ch/hc/de/requests/new"
              class="wwa-team__btn"
            >
              {t.team.contactBtn}
            </a>
          </div>
        </div>
      </section>

      {/* Board & Advisory Section */}
      <section class="wwa-board">
        <div class="wwa-board__container">
          <h2 class="wwa-board__title">{t.board.title}</h2>
          <div class="wwa-board__grid">
            {t.board.members.map((member, i) => (
              <div key={i} class="wwa-board__card">
                {imageMap[member.image]
                  ? (
                    <img
                      src={imageMap[member.image]}
                      alt={member.name}
                      class="wwa-board__avatar wwa-board__avatar--photo"
                    />
                  )
                  : (
                    <div class="wwa-board__avatar">
                      {getInitials(member.name)}
                    </div>
                  )}
                <h3 class="wwa-board__name">{member.name}</h3>
                <p class="wwa-board__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section class="wwa-benefits">
        <div class="wwa-benefits__container">
          <div class="wwa-benefits__header">
            <span class="wwa-benefits__label">{t.benefits.title}</span>
            <h2 class="wwa-benefits__title">{t.benefits.headline}</h2>
            <p class="wwa-benefits__subtitle">{t.benefits.subtitle}</p>
          </div>
          <div class="wwa-benefits__grid">
            {t.benefits.items.map((item, i) => (
              <div key={i} class="wwa-benefits__card">
                <h3 class="wwa-benefits__card-title">{item.title}</h3>
                <p class="wwa-benefits__card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
