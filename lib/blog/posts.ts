export interface BlogPost {
  slug: string;
  title: {
    de: string;
    en: string;
    fr: string;
  };
  excerpt: {
    de: string;
    en: string;
    fr: string;
  };
  content: {
    de: string;
    en: string;
    fr: string;
  };
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "restschuldversicherung-schweiz",
    title: {
      de: "Restschuld-/Ratenversicherung: Dein Schutz vor der Schuldenfalle in der Schweiz",
      en: "Payment Protection Insurance: Your Shield Against Debt Traps in Switzerland",
      fr: "Assurance solde restant du: Votre protection contre le surendettement en Suisse",
    },
    excerpt: {
      de: "Lebenskrisen wie Krankheit, Unfalle oder Jobverlust konnen die Haushaltsfinanzen schnell destabilisieren. Erfahren Sie, wie eine Restschuldversicherung Sie schutzt.",
      en: "Life crises like illness, accidents, or job loss can quickly destabilize household finances. Learn how payment protection insurance protects you.",
      fr: "Les crises de vie comme la maladie, les accidents ou la perte d'emploi peuvent rapidement destabiliser les finances du menage. Decouvrez comment l'assurance vous protege.",
    },
    content: {
      de: `Lebenskrisen – Krankheit, Unfalle oder Jobverlust – konnen die Haushaltsfinanzen schnell destabilisieren. Fur Schweizer Einwohner mit Kreditverpflichtungen kann ein einziges unerwartetes Ereignis ernsthafte Zahlungsschwierigkeiten auslosen, die zu Betreibungsverfahren, negativen Eintragen bei der Kreditauskunft und beschadigter Kreditwurdigkeit fuhren.

## Die Cashare Protect Losung

Cashare bietet die **Cashare Protect Restschuldversicherung** an, um Kreditnehmer zu schutzen, wenn sich die Umstande unerwartet andern. Die Versicherung schutzt nicht nur Kreditnehmer, sondern auch ihre Familien und die investierende Crowd durch verantwortungsvolle Kreditvergabe.

## Wie die Ratenversicherung funktioniert

Die Versicherung deckt drei primare Risikoszenarien ab:

1. **Tod:** Bis zu CHF 100'000 des verbleibenden Kreditsaldos werden ohne Selbstbehalt oder Wartezeiten gedeckt
2. **Vollstandige Arbeitsunfahigkeit:** Monatliche Raten (bis CHF 2'000) werden fur maximal 12 Monate gedeckt, mit 30 Tagen Wartezeit
3. **Unfreiwillige Arbeitslosigkeit:** Monatliche Zahlungen (bis CHF 2'000) werden fur bis zu 12 Monate gedeckt, mit 90 Tagen Wartezeit

Die Todesversicherung ist obligatorisch; die Deckung fur Invaliditat und Arbeitslosigkeit ist optional.

## Berechtigung

Antragsteller mussen 18-65 Jahre alt sein, in der Schweiz wohnen und mindestens 15 Wochenstunden in einem laufenden Arbeitsverhaltnis arbeiten.`,
      en: `Life crises—illness, accidents, or job loss—can quickly destabilize household finances. For Swiss residents carrying credit obligations, a single unexpected event can trigger serious payment difficulties, leading to enforcement proceedings, negative credit bureau entries, and damaged creditworthiness.

## The Cashare Protect Solution

Cashare offers **Cashare Protect payment protection insurance** to protect borrowers when circumstances change unexpectedly. The insurance safeguards not only borrowers but also their families and the investing crowd through responsible lending practices.

## How Payment Protection Insurance Works

The insurance covers three primary risk scenarios:

1. **Death:** Up to CHF 100,000 of remaining credit balance is covered without deductibles or waiting periods
2. **Complete Work Disability:** Monthly installments (up to CHF 2,000) are covered for maximum 12 months, with a 30-day waiting period
3. **Involuntary Unemployment:** Monthly payments (up to CHF 2,000) are covered for up to 12 months, with a 90-day waiting period

Death coverage is mandatory; disability and unemployment coverage are optional.

## Eligibility Requirements

Applicants must be 18-65 years old, reside in Switzerland, and maintain at least 15 weekly work hours in an ongoing employment relationship.`,
      fr: `Les crises de vie - maladie, accidents ou perte d'emploi - peuvent rapidement destabiliser les finances du menage. Pour les residents suisses ayant des obligations de credit, un seul evenement inattendu peut declencher de graves difficultes de paiement.

## La solution Cashare Protect

Cashare propose l'**assurance solde restant du Cashare Protect** pour proteger les emprunteurs lorsque les circonstances changent de maniere inattendue.

## Comment fonctionne l'assurance

L'assurance couvre trois scenarios de risque principaux:

1. **Deces:** Jusqu'a CHF 100'000 du solde de credit restant sont couverts
2. **Incapacite de travail complete:** Les mensualites (jusqu'a CHF 2'000) sont couvertes pendant 12 mois maximum
3. **Chomage involontaire:** Les paiements mensuels (jusqu'a CHF 2'000) sont couverts pendant 12 mois maximum`,
    },
    author: "Sajmir",
    date: "2025-10-17",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2025/09/Restschuld-_Ratenversicherung-Dein-Schutzschild-vor-der-Schuldenfalle.png",
    readTime: 8,
  },
  {
    slug: "flexiblere-zinszahlungen-endfaellige-darlehen",
    title: {
      de: "Flexiblere Zinszahlungen fur endfällige Darlehen",
      en: "More Flexible Interest Payments for Bullet Loans",
      fr: "Paiements d'interets plus flexibles pour les prets in fine",
    },
    excerpt: {
      de: "Cashare erweitert die Moglichkeiten fur Kreditnehmer, Zinszahlungen bei endfälligen Darlehen flexibler zu gestalten.",
      en: "Cashare expands options for borrowers to structure interest payments more flexibly on bullet loans.",
      fr: "Cashare etend les options pour les emprunteurs afin de structurer les paiements d'interets de maniere plus flexible.",
    },
    content: {
      de: `Cashare kundigte eine bedeutende Erweiterung an, die es Kreditnehmern ermoglicht, Zinszahlungen bei endfälligen Darlehen flexibel zu strukturieren. Bisher waren die Zinsen zusammen mit der Tilgung erst bei Falligkeit fallig.

## Neue Zahlungsoptionen

Die Plattform bietet jetzt drei Zinszahlungsintervalle:
- Monatliche Zahlungen
- Vierteljährliche Zahlungen
- Endfällige Zahlungen (ursprungliche Struktur)

## Hauptvorteile

Regelmassige Zinszahlungen sorgen fur eine konstante Rendite fur Investoren und bieten gleichzeitig Kreditnehmern Flexibilitat. Zusatzliche Vorteile sind erhohte Sicherheit durch prompte rechtliche Handlungsmoglichkeiten bei ausbleibenden Zahlungen sowie langere Kreditlaufzeiten mit reduzierter Belastung am Laufzeitende.

## Beispiel

Bei einem Kredit von CHF 1 Million mit 12% Jahreszins uber 12 Monate mit vierteljährlichen Zahlungen erhalten Investoren alle drei Monate CHF 30'000 anteilig.`,
      en: `Cashare announced a significant expansion allowing borrowers to structure interest payments flexibly on bullet loans. Previously, interest was due only at maturity alongside principal repayment.

## New Payment Options

The platform now offers three interest payment intervals:
- Monthly payments
- Quarterly payments
- Bullet payments (original structure)

## Key Benefits

Regular interest payments ensure a consistent return for investors while providing borrowers flexibility. Additional advantages include enhanced security through prompt legal action possibilities if payments are missed, and extended loan terms with reduced end-of-term burden.

## Example

For a CHF 1 million loan at 12% annual interest over 12 months with quarterly payments, investors receive CHF 30,000 every three months proportionally.`,
      fr: `Cashare a annonce une extension significative permettant aux emprunteurs de structurer les paiements d'interets de maniere flexible sur les prets in fine.

## Nouvelles options de paiement

La plateforme propose desormais trois intervalles de paiement des interets:
- Paiements mensuels
- Paiements trimestriels
- Paiements in fine (structure originale)

## Principaux avantages

Les paiements d'interets reguliers assurent un rendement constant pour les investisseurs tout en offrant de la flexibilite aux emprunteurs.`,
    },
    author: "Roger",
    date: "2024-12-06",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2025/02/imgonline-com-ua-TextureSeamless-siEsPd2uBQEE-towfiqu-barbhuiya-joqWSI9u_XM-unsplash-2-scaled-1.jpg",
    readTime: 4,
  },
  {
    slug: "crowdfunding-wachstum-schweiz",
    title: {
      de: "Begrenztes Wachstum des traditionellen Kredits fordert in der Schweiz Crowdfunding",
      en: "Limited Traditional Credit Growth Promotes Crowdfunding in Switzerland",
      fr: "La croissance limitee du credit traditionnel favorise le crowdfunding en Suisse",
    },
    excerpt: {
      de: "Das begrenzte Wachstum des traditionellen Kredits schafft fruchtbaren Boden fur die Crowdfunding-Entwicklung in der Schweiz.",
      en: "Limited traditional credit growth creates fertile ground for crowdfunding development in Switzerland.",
      fr: "La croissance limitee du credit traditionnel cree un terrain fertile pour le developpement du crowdfunding en Suisse.",
    },
    content: {
      de: `Der Artikel untersucht, wie das begrenzte Wachstum des traditionellen Kredits in der Schweiz die Crowdfunding-Adoption fordert. Laut dem Bankenbarometer 2024 der Schweizerischen Bankiervereinigung zeigten Banken zwar 2023 eine positive Gesamtentwicklung, aber Expertenprognosen deuten auf ein gedampftes Kreditwachstum 2024 hin.

## Hauptargumente

1. **Eingeschrankte traditionelle Kreditvergabe:** Die begrenzte Hypothekenkreditverfugbarkeit schafft Moglichkeiten fur Crowdfunding-Plattformen, Immobilienentwickler und Privatpersonen zu bedienen.

2. **Finanzierungsdiversifizierung:** Nicht-Bank-Kreditgeber bieten zunehmend Unternehmenskredite an und eroffnen Raum fur Crowdfunding-Plattformen.

3. **Geschwindigkeit und Flexibilität:** Crowdfunding-Plattformen zeichnen sich durch Agilität und reduzierte Burokratie im Vergleich zu regulierten Banken aus.

## Fazit

Das aktuelle Umfeld schafft fruchtbaren Boden fur die Crowdfunding-Entwicklung in der Schweiz als Antwort auf die Herausforderungen des traditionellen Kreditmarktes.`,
      en: `The piece examines how Switzerland's limited traditional credit growth is driving crowdfunding adoption. According to the Swiss Bankers Association's 2024 Banking Barometer, while banks showed positive overall development in 2023, expert forecasts suggest subdued credit growth in 2024.

## Main Arguments

1. **Constrained Traditional Lending:** Limited mortgage credit availability creates opportunities for crowdfunding platforms to serve property developers and individuals.

2. **Financing Diversification:** Non-bank lenders increasingly provide corporate credits, opening space for crowdfunding platforms to offer transparent, direct financing solutions.

3. **Speed and Flexibility:** Crowdfunding platforms distinguish themselves through agility and reduced bureaucracy compared to regulated banks.

## Conclusion

The current environment creates fertile ground for crowdfunding development in Switzerland as a response to traditional credit market challenges.`,
      fr: `L'article examine comment la croissance limitee du credit traditionnel en Suisse stimule l'adoption du crowdfunding.

## Arguments principaux

1. **Credit traditionnel limite:** La disponibilite limitee du credit hypothecaire cree des opportunites pour les plateformes de crowdfunding.

2. **Diversification du financement:** Les preteurs non bancaires offrent de plus en plus de credits aux entreprises.

3. **Rapidite et flexibilite:** Les plateformes de crowdfunding se distinguent par leur agilite.`,
    },
    author: "Sajmir",
    date: "2024-09-04",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2024/09/blog-crowdfunding.png",
    readTime: 5,
  },
  {
    slug: "zinsentwicklung-2024",
    title: {
      de: "Zinsentwicklung 2024 – Zins quo vadis?",
      en: "Interest Rate Development 2024 – Where Are Rates Headed?",
      fr: "Evolution des taux d'interet 2024 – Ou vont les taux?",
    },
    excerpt: {
      de: "Eine Analyse der Schweizer Zinslandschaft 2024 nach den Inflationsdrucken und was dies fur Kreditnehmer bedeutet.",
      en: "An analysis of Switzerland's interest rate landscape in 2024 following inflationary pressures and what it means for borrowers.",
      fr: "Une analyse du paysage des taux d'interet suisses en 2024 apres les pressions inflationnistes.",
    },
    content: {
      de: `Der Beitrag untersucht die Schweizer Zinslandschaft 2024 nach den Inflationsdrucken.

## Inflation & SNB-Massnahmen

Die Schweizerische Nationalbank reagierte auf den Inflationshochststand von 3,5% im Jahr 2022 mit einer Anhebung des Leitzinses auf 1,75%. Als die Inflation anschliessend unter 2% sank, stoppte die SNB im Dezember 2023 weitere Erhohungen.

## Zinsausblick 2024

Der Artikel erwartet drei Zinssenkungen im Jahr 2024, die den SNB-Leitzins von 1,75% auf 1% senken konnten. Markterwartungen deuten darauf hin, dass erste Senkungen im zweiten Quartal erfolgen konnten, wenn die Inflation gedampft bleibt.

## Auswirkungen auf Hypothekenzinsen

Festhypotheken haben sich nach anfanglicher Volatilitat stabilisiert, wahrend SARON-gebundene Zinsen von SNB-Senkungen profitieren sollten.

## Cashare Alternative

Die Plattform bietet Crowdlending als bankfreie Finanzierungsoption mit Kreditzinsen zwischen 3,9% und 9,9% je nach Bewertung und Laufzeit.`,
      en: `The post examines Switzerland's interest rate landscape in 2024 following inflationary pressures.

## Inflation & SNB Actions

The Swiss National Bank responded to peak inflation of 3.5% in 2022 by raising the policy rate to 1.75%. As inflation subsequently declined below 2%, the SNB halted further increases in December 2023.

## 2024 Interest Rate Outlook

The article anticipates three rate cuts throughout 2024, potentially reducing the SNB's key rate from 1.75% to 1%. Market expectations suggest initial cuts may occur in the second quarter if inflation remains subdued.

## Mortgage Rate Implications

Fixed-rate mortgages have stabilized after early volatility, while SARON-linked rates should benefit from SNB reductions.

## Cashare's Alternative

The platform promotes crowdlending as a bank-free financing option, offering loan rates between 3.9% and 9.9% depending on borrower ratings and terms.`,
      fr: `L'article examine le paysage des taux d'interet suisses en 2024.

## Inflation et actions de la BNS

La Banque nationale suisse a reagi au pic d'inflation de 3,5% en 2022 en relevant le taux directeur a 1,75%.

## Perspectives des taux 2024

L'article anticipe trois baisses de taux tout au long de 2024.`,
    },
    author: "Sajmir",
    date: "2024-08-12",
    category: "Blog",
    image: "https://www.cashare.ch/wp-content/uploads/2024/08/2.png",
    readTime: 6,
  },
  {
    slug: "crowdfunding-monitor-2024",
    title: {
      de: "Der Crowdfunding Monitor 2024 – Wie entwickelt sich Crowdlending?",
      en: "The Crowdfunding Monitor 2024 – How is Crowdlending Developing?",
      fr: "Le Crowdfunding Monitor 2024 – Comment evolue le crowdlending?",
    },
    excerpt: {
      de: "Die Hochschule Luzern veroffentlichte ihren jahrlichen Crowdfunding Monitor 2024 mit aktuellen Statistiken zur Schweizer Crowdfunding-Landschaft.",
      en: "The Lucerne University of Applied Sciences released its annual Crowdfunding Monitor 2024 with updated statistics on Switzerland's crowdfunding landscape.",
      fr: "La Haute ecole de Lucerne a publie son Crowdfunding Monitor 2024 annuel.",
    },
    content: {
      de: `Die Hochschule Luzern (HSLU) veroffentlichte ihren jahrlichen Crowdfunding Monitor 2024 mit aktuellen Statistiken zur Schweizer Crowdfunding-Landschaft.

## Marktentwicklung im Überblick

Der Schweizer Crowdlending-Sektor verzeichnete 2023 einen deutlichen Ruckgang von 20% im Jahresvergleich. Das Volumen sank von CHF 497,5 Mio. auf CHF 398,1 Mio. Trotz der allgemeinen Marktschwache wuchs Cashare 2023 um 7% und ubertraf damit den Gesamtmarkt um uber 27%.

## Segmentleistung

- **Business Crowdlending (KMU-Kredite):** Ruckgang um 6,4% auf CHF 132,8 Mio.
- **Consumer Crowdlending (Privatkredite):** Ruckgang um 15,8% auf CHF 61,4 Mio.
- **Immobilien Crowdlending:** Starkster Ruckgang mit 27,9% auf CHF 203,9 Mio.

## Marktkontext

Die Immobilienfinanzierung erlebte seit Anfang 2023 aufgrund wirtschaftlicher Unsicherheit und Inflationsbedenken nahezu vollstandige Stagnation.

## Fazit

Trotz sektoraler Herausforderungen bleibt Crowdlending fur Schweizer KMU, Privatpersonen und Immobilienentwickler von entscheidender Bedeutung. Cashare, als Branchenpionier seit 2008, gehort weiterhin zu den grossten Plattformen der Schweiz.`,
      en: `The Hochschule Luzern (HSLU) released its annual Crowdfunding Monitor 2024, providing updated statistics on Switzerland's crowdfunding landscape.

## Market Development Overview

Switzerland's crowdlending sector experienced significant contraction in 2023, declining 20% year-over-year. The volume decreased from CHF 497.5 million to CHF 398.1 million. Despite broader market weakness, Cashare grew by 7% in 2023, outpacing the overall market by over 27%.

## Segment Performance

- **Business Crowdlending (SME loans):** Dropped 6.4% to CHF 132.8 million
- **Consumer Crowdlending (personal loans):** Fell 15.8% to CHF 61.4 million
- **Real Estate Crowdlending:** Experienced the steepest decline at 27.9%, reaching CHF 203.9 million

## Market Context

Real estate financing experienced near-complete stagnation since early 2023 due to economic uncertainty and inflation concerns.

## Conclusion

Despite sectoral challenges, crowdlending remains vital for Swiss SMEs, individuals, and property developers. Cashare, as the industry pioneer since 2008, continues operating among Switzerland's largest platforms.`,
      fr: `La Haute ecole de Lucerne a publie son Crowdfunding Monitor 2024 annuel.

## Apercu du developpement du marche

Le secteur suisse du crowdlending a connu une contraction significative en 2023, en baisse de 20% sur un an. Malgre la faiblesse generale du marche, Cashare a progresse de 7% en 2023.

## Performance par segment

- **Crowdlending entreprises:** Baisse de 6,4%
- **Crowdlending consommateurs:** Baisse de 15,8%
- **Crowdlending immobilier:** Baisse la plus forte avec 27,9%`,
    },
    author: "Sajmir",
    date: "2024-05-17",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2024/05/Titelbild-Crowdfunding-Monitor-Artikel-Blog.png",
    readTime: 7,
  },
  {
    slug: "digitalisierung-finanzmaerkte",
    title: {
      de: "Digitalisierung der Finanzmarkte – Ihre Chancen und Risiken",
      en: "Digitalization of Financial Markets – Opportunities and Risks",
      fr: "Numerisation des marches financiers – Opportunites et risques",
    },
    excerpt: {
      de: "Die digitale Transformation verandert die Finanzmarkte grundlegend. Erfahren Sie mehr uber Chancen und Risiken.",
      en: "Digital transformation is fundamentally reshaping financial markets. Learn about opportunities and risks.",
      fr: "La transformation numerique remodele fondamentalement les marches financiers. Decouvrez les opportunites et les risques.",
    },
    content: {
      de: `Die digitale Transformation verandert die Finanzmarkte grundlegend in rasantem Tempo. Neue Geschaftsansatze, technologische Innovationen und Finanzprodukte entstehen kontinuierlich.

## Transformation der Marktstruktur

Traditionelle Bankmodelle, die auf Einlagen und Kreditvergabe ausgerichtet sind, unterliegen erheblichen Veranderungen. Neue digitale Unternehmen – darunter spezialisierte Fintech-Unternehmen und umfassende Technologieunternehmen, die Finanzdienstleistungen anbieten – treten in den Markt ein.

## Risiken digitaler Geschaftsmodelle

Technologiegiganten und BigTechs profitieren erheblich von Netzwerkvorteilen und Datenanalysefähigkeiten. Wahrend kleine, spezialisierte Fintechs kostengunstige Dienste durch Skalierbarkeit anbieten, bergen digitale Modelle Verbraucherrisiken: fragwurdige Geschaftspraktiken, Geldwäsche-Schwachstellen und Cybersicherheitsbedrohungen.

## Chancen: Crowdlending

Die Digitalisierung ermoglicht innovative Anlageformen wie Crowdlending. Cashare, 2008 gegrundet, ist eine pionierende Schweizer Plattform, die direkte Kreditvergabe zwischen Investoren und Kreditnehmern ermoglicht.

**Hauptvorteile:**
- Direkte und transparente Investition
- Attraktive Renditen durch reduzierte Vermittlerkosten
- Risikodiversifizierung uber mehrere Kreditprojekte

## Fazit

Die digitale Transformation verandert die Finanzwelt grundlegend. Das Management der damit verbundenen Risiken bei gleichzeitiger Nutzung der Chancen erfordert wachsame Aufsicht und transparente Projektbewertung.`,
      en: `The digital transformation fundamentally reshapes financial markets at a rapid pace. Fresh business approaches, technological innovations, and financial products emerge continuously.

## Market Structure Transformation

Traditional banking models centered on deposits and lending are undergoing substantial change. New digital enterprises—including specialized fintech companies and comprehensive technology firms offering financial services—are entering the marketplace.

## Digital Business Risks

Technology giants and BigTechs benefit substantially from network advantages and data analytics capabilities. While small, specialized fintechs provide cost-effective services through scalability, digital models present consumer risks: questionable business practices, money laundering vulnerabilities, and cybersecurity threats.

## Opportunities: Crowdlending

Digitalization enables innovative investment forms like crowdlending. Established in 2008, Cashare represents a pioneering Swiss platform enabling direct lending between investors and borrowers.

**Key advantages:**
- Direct and transparent investment
- Attractive returns through reduced intermediary costs
- Risk diversification across multiple credit projects

## Conclusion

Digital transformation fundamentally reshapes finance. Managing associated risks while capturing opportunities requires vigilant oversight and transparent project evaluation.`,
      fr: `La transformation numerique remodele fondamentalement les marches financiers a un rythme rapide.

## Transformation de la structure du marche

Les modeles bancaires traditionnels axes sur les depots et les prets subissent des changements substantiels.

## Risques des modeles numeriques

Les geants de la technologie beneficient considerablement des avantages de reseau et des capacites d'analyse de donnees.

## Opportunites: Crowdlending

La numerisation permet des formes d'investissement innovantes comme le crowdlending. Cashare, fondee en 2008, est une plateforme suisse pionniere.`,
    },
    author: "Sajmir",
    date: "2024-04-24",
    category: "Blog",
    image: "https://www.cashare.ch/wp-content/uploads/2024/04/Digitalisierung_Blog.png",
    readTime: 6,
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}
