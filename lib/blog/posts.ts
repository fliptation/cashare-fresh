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
  {
    slug: "abrakadabra-eigene-bank",
    title: {
      de: "Abrakadabra, so wirst du zu deiner eigenen Bank!",
      en: "Abracadabra, Become Your Own Bank!",
      fr: "Abracadabra, devenez votre propre banque!",
    },
    excerpt: {
      de: "Neue Moglichkeiten wie P2P-Lending verandern die Finanzlandschaft. Erfahren Sie, wie Sie Ihre eigene Bank werden konnen.",
      en: "New opportunities like P2P lending are changing the financial landscape. Learn how to become your own bank.",
      fr: "De nouvelles opportunites comme le pret P2P changent le paysage financier. Decouvrez comment devenir votre propre banque.",
    },
    content: {
      de: `In der Vergangenheit waren Banken traditionell die zentralen Anlaufstellen fur Menschen, die nach Anlagemoglichkeiten suchten. Doch neue Moglichkeiten wie P2P-Lending (Crowdlending) verandern die Finanzlandschaft.

## Was ist Crowdlending?

P2P-Lending ermoglicht die direkte Finanzierung zwischen Privatpersonen und Unternehmen, ohne traditionelle Vermittler. Cashare, eine Schweizer Plattform, ermoglicht es sowohl privaten als auch institutionellen Anlegern, personalisierte Anlageportfolios aufzubauen.

## Hauptvorteile von Cashare

**Flexibilitat und Portfoliokontrolle:** Nutzer konnen ihr Investment-Portfolio selbst zusammenstellen, anstatt auf bankausgewahlte Produkte beschrankt zu sein. Potenzielle Renditen erreichen bis zu 10% jahrlich.

**Transparenz:** Investoren erhalten umfassende Projektinformationen einschliesslich Kreditnehmerdetails, Kreditbetragen, Laufzeiten und Zinssatzen.

**Selbstbestimmung:** Investoren sind bei uns der Herr ihrer eigenen Anlage-Strategie.

Seit 2008 ist Cashare als innovativer Crowdlending-Pionier tatig und bietet Flexibilitat, Transparenz und Anlegerautonomie, die traditionellen Bankmodellen uberlegen ist.`,
      en: `In the past, banks were traditionally the central point of contact for people seeking investment opportunities. But new opportunities like P2P lending (crowdlending) are changing the financial landscape.

## What is Crowdlending?

P2P lending enables direct financing between individuals and businesses, bypassing traditional intermediaries. Cashare, a Swiss platform, allows both private and institutional investors to build personalized investment portfolios.

## Key Advantages of Cashare

**Flexibility and Portfolio Control:** Users can build their own investment portfolio rather than being restricted to bank-selected products. Potential returns reach up to 10% annually.

**Transparency:** Investors receive comprehensive project information including borrower details, loan amounts, terms, and interest rates.

**Self-Determination:** Investors control their own investment strategy.

Since 2008, Cashare operates as an innovative crowdlending pioneer, offering flexibility, transparency, and investor autonomy superior to traditional banking models.`,
      fr: `Dans le passe, les banques etaient traditionnellement le point de contact central pour les personnes a la recherche d'opportunites d'investissement. Mais de nouvelles opportunites comme le pret P2P changent le paysage financier.

## Qu'est-ce que le Crowdlending?

Le pret P2P permet un financement direct entre particuliers et entreprises, sans intermediaires traditionnels. Cashare permet aux investisseurs prives et institutionnels de construire des portefeuilles d'investissement personnalises.`,
    },
    author: "Sajmir",
    date: "2023-09-26",
    category: "Blog",
    image: "https://www.cashare.ch/wp-content/uploads/2023/09/abrakadabra-bank.jpg",
    readTime: 5,
  },
  {
    slug: "banken-millionen-kunden-draufzahlen",
    title: {
      de: "Unrecht? Banken scheffeln Millionen, aber Kunden mussen draufzahlen!",
      en: "Injustice? Banks Rake in Millions While Customers Pay the Price!",
      fr: "Injustice? Les banques empochent des millions pendant que les clients paient!",
    },
    excerpt: {
      de: "Schweizer Banken verdienten CHF 6,52 Milliarden im Jahr 2022. Warum profitieren die Kunden nicht von den Zinserhohungen?",
      en: "Swiss banks earned CHF 6.52 billion in 2022. Why aren't customers benefiting from interest rate increases?",
      fr: "Les banques suisses ont gagne CHF 6,52 milliards en 2022. Pourquoi les clients ne beneficient-ils pas des hausses de taux?",
    },
    content: {
      de: `Schweizer Banken verdienten im Jahr 2022 CHF 6,52 Milliarden trotz schwankender Gewinne seit 2019. Der Haupttreiber sind Zinserhohungen der Schweizerischen Nationalbank (SNB), die die Inflation erfolgreich auf 2,1% im Inland kontrollierte.

## Aktuelle Zinssatze

Die meisten Schweizer Banken bieten immer noch sehr niedrige Zinssatze: derzeit durchschnittlich etwa 0,5% jahrlich.

## Bankgewinnstruktur

Inlandische Banken generieren 75% der Gewinne aus dem Zinsgeschaft, was es ihnen ermoglicht, von wachsenden Margen zu profitieren, ohne Sparer zu belohnen.

## Crowdlending als Alternative

Der Artikel prasentiert Crowdlending als Losung mit:
- Zinssatzen bis zu 10% jahrlich fur Peer-to-Peer-Kredite
- Direkter Anlegerbeteiligung ohne Bankvermittler
- Grosserer Flexibilitat und Transparenz

Cashare ist als fuhrende Schweizer Crowdlending-Plattform seit 2008 etabliert mit uber 50.000 Mitgliedern und etwa 4.000 finanzierten Kreditprojekten.`,
      en: `Swiss banks earned CHF 6.52 billion in 2022 despite fluctuating profits since 2019. The primary driver is interest rate increases from the Swiss National Bank (SNB), which successfully controlled inflation to 2.1% domestically.

## Current Interest Rates

Most Swiss banks still offer very low interest rates: currently averaging approximately 0.5% annually.

## Banking Profit Structure

Domestic banks generate 75% of profits from interest business, enabling them to benefit from widening margins without rewarding savers.

## Crowdlending Alternative

The article presents crowdlending as a solution offering:
- Interest rates up to 10% annually for peer-to-peer loans
- Direct investor participation without bank intermediaries
- Greater flexibility and transparency

Cashare is Switzerland's leading crowdlending platform, established in 2008 with over 50,000 members and approximately 4,000 financed credit projects.`,
      fr: `Les banques suisses ont gagne CHF 6,52 milliards en 2022. Le principal moteur sont les hausses de taux de la Banque nationale suisse (BNS).

## Taux d'interet actuels

La plupart des banques suisses offrent encore des taux d'interet tres bas: actuellement environ 0,5% par an en moyenne.

## Le Crowdlending comme alternative

L'article presente le crowdlending comme solution offrant des taux d'interet jusqu'a 10% par an.`,
    },
    author: "Sajmir",
    date: "2023-09-18",
    category: "Blog",
    image: "https://www.cashare.ch/wp-content/uploads/2023/09/banken-millionen.jpg",
    readTime: 5,
  },
  {
    slug: "crowdfunding-rueckgang-hohem-niveau",
    title: {
      de: "Crowdfunding: Ein Ruckgang auf hohem Niveau",
      en: "Crowdfunding: A Decline at a High Level",
      fr: "Crowdfunding: Un recul a un niveau eleve",
    },
    excerpt: {
      de: "Der Crowdfunding Monitor 2023 zeigt einen Ruckgang des Schweizer Crowdfunding-Volumens, aber der Markt bleibt robust.",
      en: "The Crowdfunding Monitor 2023 shows a decline in Swiss crowdfunding volume, but the market remains robust.",
      fr: "Le Crowdfunding Monitor 2023 montre une baisse du volume de crowdfunding suisse, mais le marche reste robuste.",
    },
    content: {
      de: `Der neueste Crowdfunding Monitor 2023 der Hochschule Luzern zeigt signifikante Marktverschiebungen in der Schweizer Crowdfunding-Landschaft.

## Wichtige Finanzkennzahlen

Das Crowdfunding-Volumen in der Schweiz sank deutlich im Jahr 2022. Der Markt schrumpfte von 791,8 Millionen Schweizer Franken im Jahr 2021 auf 662,4 Millionen Franken – ein Ruckgang von 16,3%.

## Segmentleistung

**Crowdlending-Dominanz:** Dieser Sektor fuhrt weiterhin den Markt mit 497,5 Millionen Franken, obwohl er um 18% gegenuber dem Vorjahr schrumpfte.

**Immobilien-Ruckgang:** Dieses Untersegment fiel um 32,4% auf 282,7 Millionen Franken.

**KMU-Wachstum:** Das KMU-Crowdlending-Segment erholte sich stark auf 141,9 Millionen Franken nach pandemiebedingten Storungen.

## Historischer Kontext

Seit Cashares Grundung vor funfzehn Jahren hat der Schweizer digitale Kreditsektor uber drei Milliarden Franken an Finanzierung vermittelt.`,
      en: `The latest Crowdfunding Monitor 2023 from Lucerne University of Applied Sciences reveals significant market shifts in Switzerland's crowdfunding landscape.

## Key Financial Metrics

The crowdfunding volume in Switzerland declined notably in 2022. The market contracted from 791.8 million Swiss francs in 2021 to 662.4 million francs—a 16.3% decrease.

## Segment Performance

**Crowdlending dominance:** This sector continues leading the market with 497.5 million francs, though it contracted 18% from the previous year.

**Real Estate decline:** This subsegment fell 32.4% to 282.7 million francs.

**SME growth:** The SME crowdlending segment rebounded strongly to 141.9 million francs after pandemic-related disruptions.

## Historical Context

Since Cashare's founding fifteen years ago, the Swiss digital lending sector has facilitated over three billion francs in financing.`,
      fr: `Le dernier Crowdfunding Monitor 2023 de la Haute ecole de Lucerne revele des changements significatifs sur le marche suisse du crowdfunding.

Le volume de crowdfunding en Suisse a diminue de 16,3% pour atteindre 662,4 millions de francs.`,
    },
    author: "Sajmir",
    date: "2023-06-02",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2023/06/crowdfunding-monitor-2023.jpg",
    readTime: 6,
  },
  {
    slug: "effizienz-kreditverlaengerungen",
    title: {
      de: "Mehr Effizienz und Nutzererlebnis bei Kreditverlangerungen",
      en: "More Efficiency and User Experience for Loan Extensions",
      fr: "Plus d'efficacite et d'experience utilisateur pour les prolongations de credit",
    },
    excerpt: {
      de: "Cashare vereinfacht den Kreditverlangerungsprozess fur Anleger mit neuen Funktionen.",
      en: "Cashare simplifies the loan extension process for investors with new features.",
      fr: "Cashare simplifie le processus de prolongation de credit pour les investisseurs.",
    },
    content: {
      de: `Cashare kundigt eine Systemverbesserung an, die den Kreditverlangerungsprozess fur Investoren vereinfacht. Die Plattform ermoglicht es Anlegern nun, in bestehenden Kurzkrediten investiert zu bleiben, ohne zusatzliche Kapitaleinlagen zu benotigen.

## Was ist neu?

**Zeitplan & Prozess:**
- KMU-Kreditnehmer mit falligkeitsbasierten Darlehen erhalten Verlangerungsoptionen 60 Tage vor Kreditablauf
- Investoren haben 7 Tage Zeit zu entscheiden, ob sie ihre Investition beibehalten mochten

**Neue Funktionen:**
Die Plattform bietet jetzt eine vereinfachte Verlangerungsaktivierung durch einen einzigen Knopfdruck im personlichen Dashboard des Anlegers. Verbesserte Kostentransparenz und schnelle Benachrichtigungen sind nun Standardfunktionen.

## Wichtige Details

Die Verlangerung gilt ausschliesslich fur Anleger, die bereits in bestimmte Projekte investiert sind. Weitermachende Anleger erhalten eine Verlangerungszusammenfassung mit Nettozinszahlungen (nach Gebuhren).`,
      en: `Cashare announces a system improvement designed to streamline the loan renewal process for investors. The platform now enables investors to remain invested in existing short-term loans without requiring additional capital contributions.

## What's New?

**Timeline & Process:**
- SME credit borrowers with maturity-based loans receive renewal options 60 days before loan expiration
- Investors have 7 days to decide whether to maintain their investment

**New Features:**
The platform now offers simplified renewal activation through a single button click in the investor's personal dashboard. Enhanced cost transparency and rapid notifications are now standard features.

## Important Details

Renewal applies exclusively to investors already invested in specific projects. Continuing investors receive a renewal summary with net interest payments (after fees).`,
      fr: `Cashare annonce une amelioration du systeme pour simplifier le processus de renouvellement de pret pour les investisseurs.`,
    },
    author: "Sajmir",
    date: "2023-08-22",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2023/08/kreditverlaengerungen.jpg",
    readTime: 4,
  },
  {
    slug: "chatbot-cashy-online",
    title: {
      de: "Unser Chatbot Cashy ist online",
      en: "Our Chatbot Cashy is Online",
      fr: "Notre chatbot Cashy est en ligne",
    },
    excerpt: {
      de: "Cashare lanciert den neuen KI-gesteuerten Chatbot Cashy, der rund um die Uhr Kundensupport bietet.",
      en: "Cashare launches new AI-powered chatbot Cashy, providing 24/7 customer support.",
      fr: "Cashare lance le nouveau chatbot Cashy alimente par l'IA, offrant un support client 24h/24.",
    },
    content: {
      de: `Cashare kundigt den Start unseres neuen KI-gesteuerten Chatbots Cashy an, der jetzt rund um die Uhr auf unserer Website verfugbar ist.

## Wichtige Highlights

**Zweck & Funktionen:**
Der Chatbot stellt kunstliche Intelligenz dar, die uber verschiedene Kanale mit Benutzern interagiert. Er ermoglicht es Kunden, Termine mit Support-Teams auch an Wochenenden fur die kommende Woche zu vereinbaren.

**Entwicklungspartnerschaft:**
Cashare hat sich mit Sophie Hundertmark, einer Vorstandsberaterin und Chatbot-Spezialistin, zusammengeschlossen, um den Bot zu erstellen und zu trainieren.

## Bestehender Support

Das Unternehmen betont, dass unser Support-Team und unsere Kreditberater weiterhin fur personliche Unterstutzung bei Privatkrediten, KMU-Finanzierungen und Immobiliendienstleistungen zur Verfugung stehen.`,
      en: `Cashare announced the launch of their new AI-powered chatbot, Cashy, which is now available 24/7 on their website.

## Key Highlights

**Purpose & Features:**
The chatbot represents artificial intelligence that interacts with users through various channels. It enables customers to schedule appointments with support teams even on weekends for upcoming week availability.

**Development Partnership:**
Cashare partnered with Sophie Hundertmark, a board advisor and chatbot specialist, to create and train the bot.

## Existing Support

The company emphasizes that their support team and credit advisors remain available for personal assistance across private loans, SME financing, and real estate services.`,
      fr: `Cashare a annonce le lancement de son nouveau chatbot alimente par l'IA, Cashy, disponible 24h/24 sur le site web.`,
    },
    author: "Sajmir",
    date: "2023-06-20",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2023/06/chatbot-cashy.jpg",
    readTime: 3,
  },
  {
    slug: "vorsorgeauftrag-patientenverfuegung",
    title: {
      de: "Vorsorgeauftrag – Patientenverfugung und Vollmachten",
      en: "Advance Directive – Patient Decree and Powers of Attorney",
      fr: "Mandat pour cause d'inaptitude – Directives anticipees",
    },
    excerpt: {
      de: "Cashare und plusminus50.ch unterstutzen Kunden bei der Planung von finanziellen Verpflichtungen und Altersvorsorge.",
      en: "Cashare and plusminus50.ch support customers in planning financial obligations and elder care.",
      fr: "Cashare et plusminus50.ch aident les clients a planifier leurs obligations financieres.",
    },
    content: {
      de: `Cashare hat eine Partnerschaft mit der Firma von Jurg Gyr (plusminus50.ch) geschlossen, um Kunden mit finanziellen Verpflichtungen und Altersvorsorgeplanung zu unterstutzen.

## Hauptthema: Vollmacht, Patientenverfugung und Vorsorgeplanung

Der Artikel prasentiert eine Fallstudie einer 72-jahrigen Frau aus Zurich, die an Demenz leidet. Ihre Tochter steht vor Herausforderungen bei der Verwaltung der Angelegenheiten ihrer Mutter ohne rechtliche Dokumentation.

## Drei wesentliche Dokumente

**Vorsorgeauftrag** regelt:
- Personliche Betreuungsangelegenheiten (medizinische Entscheidungen, Wohnen)
- Finanzverwaltung (Rechnungszahlungen, Vermogensverwaltung)
- Rechtliche Vertretung (Vertragsunterzeichnung, Kundigungen)

**Patientenverfugung** behandelt:
- Medizinische Behandlungspräferenzen
- Lebenserhaltende Massnahmen

**Vollmacht** Anforderungen:
- Muss den Verlust der Entscheidungsfahigkeit uberdauern`,
      en: `Cashare has partnered with Jurg Gyr's firm (plusminus50.ch) to support customers with financial obligations and elder care planning.

## Main Topic: Power of Attorney, Patient Directives, and Care Planning

The article presents a case study of a 72-year-old woman from Zurich suffering from dementia. Her daughter faces challenges managing her mother's affairs without legal documentation.

## Three Essential Documents

**Vorsorgeauftrag (Care Power of Attorney)** regulates:
- Personal care matters (medical decisions, housing)
- Financial management (bill payments, asset administration)
- Legal representation (contract signing, cancellations)

**Patient Directive** addresses:
- Medical treatment preferences
- Life-sustaining measures`,
      fr: `Cashare s'est associe a la firme de Jurg Gyr (plusminus50.ch) pour soutenir les clients dans la planification de leurs obligations financieres.`,
    },
    author: "Sajmir",
    date: "2023-08-03",
    category: "Blog",
    image: "https://www.cashare.ch/wp-content/uploads/2023/08/vorsorgeauftrag.jpg",
    readTime: 7,
  },
  {
    slug: "partnerschaft-american-institute",
    title: {
      de: "Neue Partnerschaft mit American Institute of Applied Sciences in Switzerland",
      en: "New Partnership with American Institute of Applied Sciences in Switzerland",
      fr: "Nouveau partenariat avec l'American Institute of Applied Sciences en Suisse",
    },
    excerpt: {
      de: "Cashare kundigt eine Bildungspartnerschaft mit der AUS an, die Studenten Finanzierungsmoglichkeiten bietet.",
      en: "Cashare announces an education partnership with AUS, offering financing options for students.",
      fr: "Cashare annonce un partenariat educatif avec l'AUS, offrant des options de financement aux etudiants.",
    },
    content: {
      de: `Cashare kundigt eine Partnerschaft mit dem American Institute of Applied Sciences (AUS) in der Schweiz an – die zweite Kooperation im Bildungssektor nach der Benedict School.

## Uber AUS

AUS ist eine privat akkreditierte Hochschule, die Bachelor- und Master-Programme in Betriebswirtschaft mit Spezialisierungsoptionen anbietet. Sie unterhalt eine Partnerschaft mit der Tiffin University (USA), die es Studenten ermoglicht, Doppelabschlusse zu erwerben. Alle Kurse werden auf Englisch von internationalen Wirtschaftsfachleuten unterrichtet.

## Finanzierungsstruktur

Der Kredit geht direkt an die Universitat, die dann die Zahlungsvertrage der Studenten an Cashare ubertragt. Die Universitat tragt das Ausfallrisiko. Das erste Projekt umfasste CHF 232k zu 7,9% uber 24 Monate und wurde schnell finanziert. Zehn Studenten wahlten monatliche Raten.`,
      en: `Cashare announces a partnership with American Institute of Applied Sciences (AUS) in Switzerland, marking their second education-sector collaboration following Benedict School.

## About AUS

AUS is a privately accredited higher education institution offering undergraduate and graduate business administration programs with specialization options. It maintains a partnership with Tiffin University (USA), enabling students to earn dual degrees. All courses are taught in English by international business professionals.

## Financing Structure

The credit goes directly to the university, which then transfers student payment contracts to Cashare. The university bears the default risk. Their inaugural project involved CHF 232k at 7.9% over 24 months, financed quickly. Ten students chose monthly installments.`,
      fr: `Cashare annonce un partenariat avec l'American Institute of Applied Sciences (AUS) en Suisse.`,
    },
    author: "Sajmir",
    date: "2023-03-08",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2023/03/american-institute.jpg",
    readTime: 4,
  },
  {
    slug: "jahresrueckblick-2022",
    title: {
      de: "Jahresruckblick 2022",
      en: "Year in Review 2022",
      fr: "Retrospective 2022",
    },
    excerpt: {
      de: "Ein Ruckblick auf ein turbulentes Jahr 2022 mit geopolitischen und wirtschaftlichen Herausforderungen fur Cashare.",
      en: "A look back at a turbulent 2022 with geopolitical and economic challenges for Cashare.",
      fr: "Un regard sur une annee 2022 turbulente avec des defis geopolitiques et economiques.",
    },
    content: {
      de: `Der Jahresruckblick 2022 von Cashare reflektiert uber eine turbulente Periode, die von geopolitischen und wirtschaftlichen Herausforderungen gepragt war.

## Marktbedingungen

Die Plattform erlebte erheblichen Gegenwind durch den Ukraine-Konflikt, Inflation, steigende Zinsen und Lieferkettenunterbrechungen. Wie festgestellt wurde, wurde Anleger-Vorsicht erkennbar, als Aktien- und Anleihenmarkte zusammen mit digitalen Assets sanken. Trotz dieses Drucks blieben die Ausfallraten stabil.

## Organisationsentwicklung

Das Unternehmen restrukturierte seinen Betrieb und implementierte neue Technologien und Data-Science-Fahigkeiten. Das Management betonte, dass Teammoral und Motivation fur 2023 sehr stark sind. Zwei neue Advisory-Board-Mitglieder wurden ernannt.

Die Plattform zahlte erfolgreich eine dreijahrige Anleihe planmassig zuruck, was die Portfolio-Stabilitat inmitten breiterer Marktturbulenzen demonstriert.`,
      en: `Cashare's 2022 year-end review reflects on a turbulent period marked by geopolitical and economic challenges.

## Market Conditions

The platform experienced significant headwinds from the Ukraine conflict, inflation, rising interest rates, and supply chain disruptions. As noted, investor caution became apparent as stock and bond markets declined alongside digital assets. Despite these pressures, default rates remained stable.

## Organizational Development

The company restructured its operations, implementing new technologies and data science capabilities. Management emphasized that team morale and motivation are very strong heading into 2023. Two new advisory board members were appointed.

The platform successfully repaid a three-year bond on schedule, demonstrating portfolio stability amid broader market turbulence.`,
      fr: `La retrospective 2022 de Cashare reflete une periode turbulente marquee par des defis geopolitiques et economiques.`,
    },
    author: "Sajmir",
    date: "2023-01-04",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2023/01/jahresrueckblick-2022.jpg",
    readTime: 5,
  },
  {
    slug: "neues-feature-anleger-csv",
    title: {
      de: "Neues Feature fur Anleger",
      en: "New Feature for Investors",
      fr: "Nouvelle fonctionnalite pour les investisseurs",
    },
    excerpt: {
      de: "Cashare fuhrt eine neue CSV-Export-Funktion ein, mit der Anleger ihre Portfolios in externen Tools verfolgen konnen.",
      en: "Cashare introduces a new CSV export feature allowing investors to track their portfolios in external tools.",
      fr: "Cashare introduit une nouvelle fonction d'export CSV.",
    },
    content: {
      de: `Cashare kundigte eine neue CSV-Export-Funktion an, die es Anlegern ermoglicht, ihre kompletten Investitionsportfolios und Cashflows als Datei fur externe Portfolio-Tracking-Tools herunterzuladen.

## Zugriffsanleitung

Benutzer mussen sich in ihr MeinCashare-Konto einloggen, zum Dashboard navigieren, auf ihren Benutzernamen in der oberen rechten Ecke klicken, "Dokumente" auswahlen und dann "Investoren CSV-Export" unter dem Abschnitt allgemeine Dokumente finden.

## Funktionalitat

Mit dem neuen CSV-Download geben wir Ihnen die Funktionalitat, Ihre Anlageperformance in externen Tools wie Parquet oder Portfolio Performance zu uberwachen.`,
      en: `Cashare announced a new CSV export feature enabling investors to download their complete investment portfolios and cash flows as a file for external portfolio tracking tools.

## Access Instructions

Users must log into their MeinCashare account, navigate to the dashboard, click their username in the top-right corner, select "Dokumente" (Documents), then locate "Investoren CSV-Export" under general documents section.

## Functionality

With this new CSV download, users can monitor investment performance using external tracking tools like Parquet or Portfolio Performance.`,
      fr: `Cashare a annonce une nouvelle fonction d'export CSV permettant aux investisseurs de telecharger leurs portefeuilles complets.`,
    },
    author: "Sajmir",
    date: "2023-01-24",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2023/01/csv-export.jpg",
    readTime: 3,
  },
  {
    slug: "lastschriftverfahren-lsv",
    title: {
      de: "Wir machen es Ihnen noch leichter mit LSV",
      en: "We Make It Even Easier with Direct Debit",
      fr: "Nous vous facilitons encore plus la vie avec le LSV",
    },
    excerpt: {
      de: "Cashare fuhrt das Lastschriftverfahren (LSV) ein fur automatische Zahlungsabwicklung.",
      en: "Cashare introduces direct debit (LSV) for automatic payment processing.",
      fr: "Cashare introduit le prelevement automatique (LSV).",
    },
    content: {
      de: `Cashare kundigte die Einfuhrung von LSV (Lastschriftverfahren) an, einem Einzugsermachtigungssystem. Dieser Service ermoglicht automatische Zahlungsabwicklung direkt von Kundenbankkonten, wodurch die Notwendigkeit manueller Uberweisungen fur jede Rechnung entfallt.

## Hauptmerkmale

**Anforderungen:**
Das System erfordert nur ein Schweizer Bankkonto in CHF und ist vollig kostenlos mit der Moglichkeit, jederzeit zu kundigen.

## Registrierungsprozess

1. Laden Sie das LSV-Formular herunter und fullen Sie es mit personlichen Informationen aus
2. Senden Sie das unterschriebene Formular per Post an Ihre Bank
3. Nach Bankgenehmigung ubernimmt Cashare alle notwendigen Einrichtungen fur automatische Rechnungsabzuge`,
      en: `Cashare announced the introduction of LSV (Lastschriftverfahren), a direct debit authorization system. This service allows automatic payment processing directly from customer bank accounts, eliminating the need for manual transfers for each invoice.

## Key Features

**Requirements:**
The system requires only a Swiss bank account in CHF and is completely free with the ability to cancel anytime.

## Registration Process

1. Download and complete the LSV form with personal information
2. Submit the signed form to your bank via postal mail
3. Upon bank approval, Cashare handles all necessary setup for automatic invoice deductions`,
      fr: `Cashare a annonce l'introduction du LSV (prelevement automatique). Ce service permet le traitement automatique des paiements.`,
    },
    author: "Sajmir",
    date: "2022-11-03",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2022/11/lsv.jpg",
    readTime: 3,
  },
  {
    slug: "inflation-schweiz",
    title: {
      de: "Inflation in der Schweiz",
      en: "Inflation in Switzerland",
      fr: "L'inflation en Suisse",
    },
    excerpt: {
      de: "Eine Analyse der Inflationstrends in der Schweiz und weltweit und deren Auswirkungen auf Anleger.",
      en: "An analysis of inflation trends in Switzerland and globally and their impact on investors.",
      fr: "Une analyse des tendances de l'inflation en Suisse et dans le monde.",
    },
    content: {
      de: `Der Artikel untersucht Inflationstrends weltweit und in der Schweiz und erklart, dass die jahrliche Inflation den Preisanstieg eines bestimmten Warenkorbs innerhalb eines Jahres beschreibt.

## Wichtige Punkte

**Definition & Zweck:** Moderate Inflation fordert wirtschaftliche Investitionen und Wachstum. Die Schweizerische Nationalbank strebt eine Inflation unter 2% an, wahrend die Europaische Zentralbank genau 2% anstrebt.

**Globaler Kontext:** Die Turkei erlebte schwere Inflation, die im Januar 2022 35% im Jahresvergleich erreichte.

**Europaische Trends:** Bis Marz 2022 erreichte die EU-Inflation 7,8% jahrlich, wahrend die Schweiz etwa 2,4% erreichte.

**Zukunftsimplikationen:** Zinsen konnen nicht mehr beliebig niedrig bleiben, um die Wirtschaft zu unterstutzen.`,
      en: `The article examines inflation trends globally and in Switzerland, explaining that annual inflation describes the price increase of a specific basket of products within one year.

## Key Points

**Definition & Purpose:** Moderate inflation encourages economic investment and growth. The Swiss National Bank targets inflation below 2%, while the European Central Bank aims for exactly 2%.

**Global Context:** Turkey experienced severe inflation, reaching 35% year-over-year in January 2022.

**European Trends:** By March 2022, EU inflation hit 7.8% annually, while Switzerland reached approximately 2.4%.

**Future Implications:** Interest rates can no longer remain arbitrarily low to support the economy.`,
      fr: `L'article examine les tendances de l'inflation dans le monde et en Suisse.`,
    },
    author: "Roger",
    date: "2022-06-14",
    category: "Blog",
    image: "https://www.cashare.ch/wp-content/uploads/2022/06/inflation.jpg",
    readTime: 5,
  },
  {
    slug: "crowdfunding-erfolgsgeschichte-2022",
    title: {
      de: "Crowdfunding: die Erfolgsgeschichte geht weiter",
      en: "Crowdfunding: The Success Story Continues",
      fr: "Crowdfunding: L'histoire a succes continue",
    },
    excerpt: {
      de: "Der Crowdfunding Monitor 2022 zeigt ein Wachstum von 31% im Schweizer Crowdfunding-Markt.",
      en: "The Crowdfunding Monitor 2022 shows 31% growth in the Swiss crowdfunding market.",
      fr: "Le Crowdfunding Monitor 2022 montre une croissance de 31% du marche suisse.",
    },
    content: {
      de: `Dieser Artikel diskutiert den neuesten Crowdfunding Monitor 2022 der Hochschule Luzern und beschreibt Entwicklungen in den Sektoren Crowdsupporting, Crowdinvesting und Crowdlending.

Der Schweizer Crowdfunding-Markt erlebte 2021 signifikantes Wachstum und expandierte von CHF 606,6 Millionen auf CHF 791,8 Millionen – ein Anstieg von 31%. Nach pandemiebedingten Storungen hat robustes Wachstum wieder eingesetzt.

## Segmentleistung

Crowdlending zeigte die starkste Expansion mit einem Anstieg von 35% auf CHF 607,0 Millionen. Immobilien-Crowdlending stieg besonders dramatisch um 40,9% auf CHF 418,0 Millionen.

Seit Cashares Grundung vor 14 Jahren wurden etwa CHF 3 Milliarden uber digitale Kanale in der Schweiz vermittelt. Trotz jahrlichen Wachstums reprasentiert Crowdlending nur 2% des Schweizer Konsumkreditmarktes.`,
      en: `This article discusses the latest Crowdfunding Monitor 2022 from Lucerne University of Applied Sciences, detailing developments across crowdsupporting, crowdinvesting, and crowdlending sectors.

The Swiss crowdfunding market experienced significant growth in 2021, expanding from CHF 606.6 million to CHF 791.8 million—a 31% increase. Following pandemic-related disruptions, robust growth has resumed.

## Segment Performance

Crowdlending showed the strongest expansion, increasing 35% to CHF 607.0 million. Real estate crowdlending surged particularly dramatically, rising 40.9% to CHF 418.0 million.

Since Cashare's founding 14 years prior, approximately CHF 3 billion has been mediated through digital channels in Switzerland. Despite yearly growth, crowdlending represents only 2% of Switzerland's consumer credit market.`,
      fr: `Cet article presente le dernier Crowdfunding Monitor 2022 de la Haute ecole de Lucerne.`,
    },
    author: "Sajmir",
    date: "2022-06-09",
    category: "News",
    image: "https://www.cashare.ch/wp-content/uploads/2022/06/crowdfunding-monitor-2022.jpg",
    readTime: 5,
  },
  {
    slug: "interview-sophie-hundertmark-chatbots",
    title: {
      de: "Interview mit Sophie Hundertmark zu Chatbots",
      en: "Interview with Sophie Hundertmark on Chatbots",
      fr: "Interview avec Sophie Hundertmark sur les chatbots",
    },
    excerpt: {
      de: "Sophie Hundertmark erklart, was Chatbots sind und wie sie bei Cashare eingesetzt werden konnen.",
      en: "Sophie Hundertmark explains what chatbots are and how they can be used at Cashare.",
      fr: "Sophie Hundertmark explique ce que sont les chatbots et comment ils peuvent etre utilises.",
    },
    content: {
      de: `Sophie Hundertmark definiert Chatbots als Softwaresysteme, die naturliche Sprachkonversation mit Benutzern ermoglichen. Sie betont, dass sie sich konversationell anfuhlen sollten, aber transparent bleiben mussen: Der Chatbot soll sich unbedingt als Roboter oder digitaler Assistent outen.

## Zwei Arten von Chatbots

Das Interview unterscheidet zwischen:
- **Regelbasierte Chatbots:** Folgen vordefinierten Mustern
- **KI-basierte/absichtsbasierte Chatbots:** Verwenden kunstliche Intelligenz, um Benutzereingaben zu verstehen

## Hauptanwendungsfalle

Chatbots behandeln hauptsachlich vorhersehbare, haufig gestellte Kundendienstfragen. Sie werden in Branchen eingesetzt, wo sich wiederholende Anfragen auftreten, einschliesslich interner HR-Funktionen.

## Potenzielle Anwendungen bei Cashare

Sophie schlagt zwei Implementierungen vor: Website-Chatbots, die Neulingsfragen zum Crowdlending beantworten, und Plattform-Chatbots, die Funktionen wie Primar- vs. Sekundarmarkte fur bestehende Benutzer klaren.`,
      en: `Sophie Hundertmark defines chatbots as software systems enabling natural language conversation with users. She emphasizes they should feel conversational yet maintain transparency: bots must clearly identify themselves.

## Two Types of Chatbots

The interview distinguishes between:
- **Rule-based chatbots:** Follow predetermined patterns
- **AI-based/intent-based chatbots:** Use artificial intelligence to understand user input

## Primary Use Cases

Chatbots primarily handle predictable, frequently-asked customer service questions. They're deployed in industries wherever repetitive inquiries occur, including internal HR functions.

## Potential Applications at Cashare

Sophie proposes two implementations: website chatbots answering newcomer questions about crowdlending, and platform chatbots clarifying features like primary versus secondary markets for existing users.`,
      fr: `Sophie Hundertmark definit les chatbots comme des systemes logiciels permettant une conversation en langage naturel avec les utilisateurs.`,
    },
    author: "Sajmir",
    date: "2022-01-27",
    category: "Blog",
    image: "https://www.cashare.ch/wp-content/uploads/2022/01/sophie-chatbots.jpg",
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
