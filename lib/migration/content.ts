/**
 * Extracted Content from Live WordPress Site
 *
 * This file contains content crawled from www.cashare.ch using browser automation.
 * Used to verify Fresh routes have the correct content.
 *
 * Status:
 * - todo: Not yet crawled
 * - crawled: Content extracted but not yet verified
 * - verified: Content matches Fresh implementation
 * - updated: Fresh route was updated with correct content
 */

import type { ContentDatabase, PageContent } from "./types.ts";

export const contentDatabase: ContentDatabase = {
  lastUpdated: "2025-12-21",
  pages: {
    // ===========================================
    // STATISTIK PAGE
    // ===========================================
    "statistik": {
      slug: "statistik",
      locale: "de",
      liveUrl: "/ueber-uns/statistik/",
      freshRoute: "routes/ueber-uns/statistik.tsx",
      crawledAt: "2025-12-21",
      status: "verified",

      hero: {
        tagline: "Unsere Wirkung in Zahlen",
        heading: "Eine Geschichte finanzieller Unabhängigkeit",
        description:
          "Entdecken Sie die Meilensteine, die Cashares Weg als erste Crowdlending-Plattform der Schweiz geprägt haben.",
      },

      stats: [
        { label: "Anzahl Mitglieder", value: "67,869" },
        { label: "Finanzierte Kreditprojekte", value: "4,780" },
        { label: "Grösstes Darlehen", value: "1,000,000" },
        { label: "Total Kreditanfragen", value: "2,889,160" },
      ],

      sections: [
        {
          heading:
            "Die Kraft des Crowdlendings: Eine intelligentere Finanzierungslösung",
          content: [
            "Cashare brachte 2008 ein neues Kreditmodell auf den Markt – einfach, sicher und ohne Banken. Unser Ziel: Kreditnehmer und Investoren direkt zusammenbringen.",
            "Als Pionier im Crowdlending verfügen wir heute über die grösste aktive 'Crowd' in der Schweiz und haben bereits tausende Kreditprojekte erfolgreich finanziert.",
            "Crowdlending hat sich längst als echte Alternative für Privatpersonen und Unternehmen etabliert. Während Banken oft komplizierte Prozesse verlangen, bieten wir eine transparente und faire Lösung.",
            "Werfen Sie einen Blick auf unsere aktuellen Kennzahlen und sehen Sie selbst, warum immer mehr Investoren und Kreditnehmer auf Cashare vertrauen.",
          ],
        },
        {
          heading: "Wichtige Kennzahlen",
          subheading:
            "Bei Cashare sind wir stolz darauf, die Auswirkungen unserer Crowdlending-Plattform in der Schweiz zu präsentieren.",
          content: [],
        },
      ],

      accordion: [
        {
          title: "Über 60.000 Kunden betreut",
          content:
            "Unsere Plattform hat über 60.000 Einzelpersonen und Unternehmen geholfen, die finanzielle Unterstützung zu finden, die sie benötigen.",
        },
        {
          title: "2,5 Milliarden Franken an beantragten Krediten",
          content:
            "Mit einem kumulierten Kreditantragsvolumen von über 2,5 Milliarden CHF ist Cashare zu einem vertrauenswürdigen Namen in der Schweizer Finanzlandschaft geworden.",
        },
        {
          title: "Führendes FinTech in der Schweiz",
          content:
            "Als erste Crowdlending-Plattform der Schweiz haben wir im FinTech-Bereich konsequent Maßstäbe gesetzt.",
        },
        {
          title: "Tausende Investoren vertrauen uns",
          content:
            "Unsere Plattform bietet Anlegern eine einzigartige Möglichkeit zur Diversifizierung und zum Geldverdienen.",
        },
      ],

      charts: [
        {
          title: "Kreditprojekte nach Verwendungszweck",
          type: "pie",
          data: {
            "Ferien": "0.6%",
            "Ausbildung": "22.8%",
            "Fahrzeug": "13.5%",
            "Hochzeit": "1.7%",
            "Renovierung": "7.8%",
            "Selbständigkeit": "4.0%",
            "Sonstiges": "22.5%",
            "Steuern": "3.9%",
            "Umschuldung": "11.0%",
            "Wohnen": "12.2%",
          },
        },
        {
          title: "Verteilung nach Rating",
          type: "pie",
          data: {
            "A": "3.2%",
            "B": "20.3%",
            "C": "32.5%",
            "D": "26.2%",
            "E": "17.9%",
          },
        },
      ],

      notes: "Charts for 'Anzahl Mitglieder' and 'Gesamtvolumen' need timeline data from 2008-2025",
    },

    // ===========================================
    // HOMEPAGE
    // ===========================================
    "homepage": {
      slug: "homepage",
      locale: "de",
      liveUrl: "/",
      freshRoute: "routes/index.tsx",
      crawledAt: "2025-12-21",
      status: "updated",

      hero: {
        heading: "Unkompliziert zur cleveren Finanzierung",
        description:
          "Mit Cashare zum individuellen Kredit. Einfach, transparent und sicher – ganz ohne Bank. Der faire Kredit für Privatpersonen und Unternehmen.",
        cta: { text: "Kredit beantragen", href: "/kredit-beantragen/" },
      },

      sections: [
        {
          heading: "Für Kreditnehmer",
          subheading: "Die clevere Lösung!",
          content: [
            "Schnelle, einfache und sichere Kredite für Privatpersonen und kleine Unternehmen",
          ],
        },
        {
          heading: "Für Anleger",
          subheading: "Investieren Sie in Private Debt",
          content: [
            "Dank unserer langjährigen Erfahrung seit 2008 ermöglichen wir einfache Anlagelösungen in Kredite in der Schweiz.",
          ],
        },
        {
          heading: "Unsere Vorteile",
          subheading: "Erfahrung- Sicherheit Effizienz- Technologie",
          content: [
            "Mit Innovation und Verantwortung zu kosteneffizienten Lösungen für Kreditnehmer und Anleger.",
          ],
        },
      ],

      benefits: [
        {
          title: "Was Sie über uns wissen sollten",
          description:
            "Cashare wurde 2008 als erste Crowdlending-Plattform der Schweiz gegründet und hat sich als führender Anbieter für innovative Finanzierungslösungen etabliert. Über 60'000 Kunden und CHF 2,5 Milliarden geprüfter Kreditanträge.",
        },
        {
          title: "Transparente & effiziente Prozesse",
          description:
            "Cashare steht für klare, faire und transparente Abläufe. Ob für Kreditnehmer oder Investoren – alle Prozesse sind ohne versteckte Gebühren oder Überraschungen.",
        },
        {
          title: "Flexible Finanzlösungen für alle",
          description:
            "Cashare verbindet Kreditnehmer mit Investoren und bietet eine faire Alternative zu Banken. Kreditnehmer profitieren von flexiblen Laufzeiten, Anleger von attraktiven Renditen und einer diversifizierten Anlagestrategie.",
        },
        {
          title: "Attraktive Renditen für Anleger",
          description:
            "Anleger profitieren von attraktiven Renditen, die traditionelle Anlageformen in einem Portfolio optimal ergänzen, speziell als Erweiterung im Fixed Income Bereich.",
        },
        {
          title: "Sicherheit durch intelligentes Risikomanagement",
          description:
            "Optimieren Sie Ihr Portfolio mit unseren massgeschneiderten Investitionslösungen für institutionelle Anleger. Profitieren Sie von einem starken Risikomanagement und einer professionellen Abwicklung.",
        },
        {
          title: "Nachhaltige Finanzlösungen",
          description:
            "Cashare verbindet Kreditnehmer und Investoren zu einer starken Finanzgemeinschaft. Durch Crowdlending ermöglichen wir finanzielle Unabhängigkeit und unterstützen kleine Unternehmen.",
        },
      ],

      accordion: [
        {
          title: "Wer ist Cashare?",
          content:
            "Cashare ist ein unabhängiger, Schweizer Finanzdienstleister, der die führende Crowdlending Online-Plattform der Schweiz betreibt.",
        },
        {
          title: "Wie funktioniert Crowdlending?",
          content:
            "Beim Crowdlending, auch als Peer-to-Peer-Kredit (P2P-Kredit) bekannt, verleihen private oder institutionelle Anleger Geld direkt an Kreditnehmer.",
        },
        {
          title: "Wie kann ich einen Kredit beantragen?",
          content:
            "Durch Klick auf Kredit beantragen werden Sie zum Formular geführt, das Sie durch den Antragsprozess führt.",
        },
        {
          title: "Welche Arten von Krediten kann ich beantragen?",
          content:
            "Bei Cashare können Sie Privat- oder KMU-Darlehen beantragen, sowie Finanzierungslösungen für Immobilien.",
        },
      ],

      notes:
        "Homepage has loan calculator, live projects carousel, testimonials section, and requirements sections for borrowers/investors.",
    },

    // ===========================================
    // KREDIT BEANTRAGEN
    // ===========================================
    "kredit-beantragen": {
      slug: "kredit-beantragen",
      locale: "de",
      liveUrl: "/kredit-beantragen/",
      freshRoute: "routes/kredit-beantragen.tsx",
      crawledAt: "2025-12-21",
      status: "updated",

      hero: {
        tagline: "Flexible und sichere Kredite, die auf Sie zugeschnitten sind",
        heading: "Der einfache Weg mit dem Cashare-Kredit",
        description:
          "Vertrauen Sie auf den FinTech-Pionier. Flexible und sichere Darlehen, abgestimmt auf Ihre Bedürfnisse.",
      },

      sections: [
        {
          heading: "Cashare funktioniert schnell und einfach",
          content: [
            "Schnelle, flexible und sichere Kredite, die auf Ihre Bedürfnisse zugeschnitten sind.",
          ],
        },
        {
          heading: "Voraussetzungen für Ihren Kredit",
          subheading: "Schnell und einfach zum Kredit",
          content: [
            "Schnelle, einfache und sichere Kredite für Privatpersonen und kleine Unternehmen.",
          ],
        },
        {
          heading: "3 Schritte zum Wunschkredit",
          subheading: "Wie funktioniert der Kreditantrag",
          content: [
            "Unsere Investoren finanzieren eine Vielzahl von Kreditanträgen – verwirklichen Sie Ihre Ziele jetzt.",
          ],
        },
      ],

      benefits: [
        {
          title: "Effiziente Prozesse",
          description:
            "Der Kreditantrag ist online schnell ausgefüllt. Die Kreditprüfung erfolgt in kürzester Zeit und Sie erhalten rasch eine Antwort.",
        },
        {
          title: "Attraktive Konditionen",
          description:
            "Wir verbinden Kreditnehmer und Anleger direkt über unseren Kreditmarktplatz. So profitieren alle von fairen Konditionen.",
        },
        {
          title: "Flexible Laufzeiten",
          description:
            "Sie bestimmen die gewünschte Laufzeit nach Ihren Bedürfnissen. Eine vorzeitige Rückzahlung ist jederzeit möglich.",
        },
        {
          title: "Sichere Prozesse",
          description:
            "Volle Kostenkontrolle und strenge Sicherheitsmassnahmen schützen Sie und Ihre Daten.",
        },
      ],

      accordion: [
        {
          title: "Kreditantrag ausfüllen",
          content:
            "Den Kreditantrag ausfüllen und online die benötigten Dokumente einreichen. Einfacher geht's nicht.",
        },
        {
          title: "Schnelle Überprüfung",
          content:
            "Wir prüfen Ihren Antrag schnell und sicher. Nach Aufschaltung Ihres Kredites auf unserer Plattform haben Investoren die Möglichkeit zu investieren.",
        },
        {
          title: "Kreditauszahlung",
          content:
            "Nach Unterschrift aller Verträge wird der Darlehensbetrag auf Ihr Konto ausbezahlt.",
        },
      ],

      notes: "Page has 3 product cards (Privatkredit, KMU-Kredit, Immobilienkredit) with requirements lists.",
    },

    "privatkredit": {
      slug: "privatkredit",
      locale: "de",
      liveUrl: "/kredit-beantragen/privatkredit/",
      freshRoute: "routes/kredit-beantragen/privatkredit.tsx",
      crawledAt: "2025-12-21",
      status: "verified",

      hero: {
        tagline: "Privatkredit",
        heading: "Ein persönlicher Kredit, so individuell wie Sie",
        description:
          "In wenigen Schritten zur Finanzierung. Realisieren Sie Ihre Pläne schnell und unkompliziert mit Cashare.",
      },

      sections: [
        {
          heading: "Unsere Produkte",
          subheading: "Flexible und sichere Privatkredite für Ihre individuellen Bedürfnisse",
          content: [
            "Schnell, transparent und fair – Finanzielle Lösungen für jede Lebenslage wie zum Beispiel:",
          ],
        },
      ],

      benefits: [
        {
          title: "Refinanzierung Kredit",
          description:
            "Egal ob Kreditkarten oder Konsumkredite, oftmals zahlen Sie zu hohe Zinsen bei Ihrer Ratenzahlung. Profitieren Sie von besseren Konditionen.",
        },
        {
          title: "Ausbildungskredit",
          description:
            "Verwirklichen Sie Ihre Karriereziele mit unserem Bildungskredit. Lernen, wachsen und neue Chancen ergreifen.",
        },
        {
          title: "Kredit für Renovierung",
          description:
            "Machen Sie Ihre Wohnideen wahr. Egal ob moderne Küche, gemütliches Wohnzimmer oder komplette Haussanierung.",
        },
        {
          title: "Autokredit",
          description:
            "Machen Sie Ihre Mobilität flexibler, passen Sie das Fahrzeug der neuen Lebenssituation an oder erfüllen Sie sich Ihren Traumwagen.",
        },
        {
          title: "Konsumkredit",
          description:
            "Egal ob Sie Ihren schönsten Tag bei der Hochzeit besonders stilvoll feiern wollen oder Ihre Ehe mit einer traumhaften Hochzeitsreise beginnen.",
        },
        {
          title: "Gesundheitskredit",
          description:
            "Schnell kann durch einen Notfall wie Zahnschmerzen eine unerwartete Summe benötigt werden. Aber auch geplante Behandlungen können finanziert werden.",
        },
      ],

      notes: "Page has 6 product use cases, 3-step process, and requirements section.",
    },

    "kmu-kredit": {
      slug: "kmu-kredit",
      locale: "de",
      liveUrl: "/kredit-beantragen/kmu-kredit/",
      freshRoute: "routes/kredit-beantragen/kmu-kredit.tsx",
      crawledAt: "2025-12-21",
      status: "updated",

      hero: {
        tagline: "KMU Kreditnehmer",
        heading: "Flexible Finanzierungslösungen für Ihr Unternehmen",
        description: "Finden Sie bei uns den richtigen KMU-Kredit",
      },

      sections: [
        {
          heading: "Unsere Produkte",
          subheading: "Individuelle Lösungen und Fachwissen für das Wachstum Ihres Unternehmens",
          content: [
            "Schnell, transparent und fair – Finanzielle Lösungen für jedes Unternehmen",
          ],
        },
      ],

      benefits: [
        {
          title: "Ratenkredit",
          description:
            "Ratenkredite bezahlen Sie monatlich in Ratenzahlungen ab. Der Gesamtbetrag wird auf die gesamte Laufzeit verteilt.",
        },
        {
          title: "Endfälliger Kredit",
          description:
            "Endfällige Kredite haben eine Laufzeit von 1 bis 36 Monaten. Sie bezahlen das Darlehen inkl. Zinsen am Ende der Laufzeit.",
        },
        {
          title: "Anlagegüter",
          description:
            "Unternehmen benötigen modernste Ausstattung, um wettbewerbsfähig zu bleiben. Mit Cashare können Firmen in Maschinen, IT und mehr investieren.",
        },
        {
          title: "Wachstum",
          description:
            "Ermöglichen Sie Ihrem Unternehmen nachhaltiges Wachstum mit flexiblen Finanzierungsoptionen.",
        },
        {
          title: "Refinanzierung",
          description:
            "Konsolidieren und optimieren Sie Ihre bestehenden Kredite, um finanzielle Flexibilität zu gewinnen.",
        },
        {
          title: "Liquidität",
          description:
            "Ein stetiger Cashflow ist essenziell, um Betriebskosten zu decken und Wachstumsmöglichkeiten zu nutzen.",
        },
      ],

      notes:
        "Page has 2 loan types (Ratenkredit, Endfälliger Kredit), 4 use cases, 3-step process, and SME requirements.",
    },

    "hypotheken": {
      slug: "hypotheken",
      locale: "de",
      liveUrl: "/Hypotheken-Rechner.html",
      freshRoute: "routes/kredit-beantragen/hypotheken.tsx",
      crawledAt: "2025-12-21",
      status: "verified",

      hero: {
        heading: "Vergleichen Sie die günstigsten Hypotheken",
        description:
          "Brauchen Sie Hilfe? Rufen Sie uns unter 041 558 48 88 an",
      },

      sections: [
        {
          heading: "Hypothekendarlehensantrag",
          subheading: "Bitte füllen Sie untenstehende Felder aus",
          content: [
            "Ihre individuell errechneten Hypothekarzinsen.",
          ],
        },
      ],

      benefits: [
        {
          title: "Hypothek ablösen",
          description:
            "Refinanzierung bestehender Hypothek mit besseren Konditionen.",
        },
        {
          title: "Neue Hypothek",
          description:
            "Finanzierung für Immobilienkauf oder Neubau.",
        },
      ],

      charts: [
        {
          title: "Hypothekarzinsen nach Laufzeit",
          type: "bar",
          data: {
            "Libor-Hypothek": "0.59% - 1.18%",
            "Fest-Hypothek 3 Jahre": "0.69% - 0.91%",
            "Fest-Hypothek 5 Jahre": "0.85% - 1.05%",
            "Fest-Hypothek 10 Jahre": "1.08% - 1.28%",
            "Fest-Hypothek 15 Jahre": "1.57% - 1.76%",
          },
        },
      ],

      notes:
        "Live page is at /Hypotheken-Rechner.html (legacy HTML page). Calculator with two modes: refinancing or new mortgage. Form collects property type, location, value, mortgage amount. Shows rate comparison table.",
    },

    // ===========================================
    // INVESTIEREN
    // ===========================================
    "investieren": {
      slug: "investieren",
      locale: "de",
      liveUrl: "/investieren/",
      freshRoute: "routes/investieren.tsx",
      crawledAt: "2025-12-21",
      status: "updated",

      hero: {
        tagline: "Entfalten Sie Ihr finanzielles Potenzial",
        heading: "Clever in Private Debt investieren",
        description:
          "Bei Cashare bieten wir Ihnen massgeschneiderte Möglichkeiten, um in Kredite (Private Debt) investieren zu können.",
        cta: {
          text: "Jetzt investieren",
          href: "/werde-anleger",
        },
      },

      sections: [
        {
          heading: "Ihre Investition, Ihr Weg",
          subheading:
            "Übernehmen Sie die Kontrolle über Ihre finanzielle Zukunft mit flexiblen, auf Ihre Ziele zugeschnittenen Lösungen.",
          content: [],
        },
        {
          heading: "Unsere Investitionsmöglichkeiten",
          subheading: "Sicher und breit diversifiziert zu attraktiven Renditen",
          content: [
            "Egal ob Sie eine Privatperson oder ein institutioneller Anleger sind.",
          ],
        },
        {
          heading: "Unsere Vorteile",
          subheading: "Erfahrung - Sicherheit - Effizienz - Technologie",
          content: [
            "Mit Innovation und Verantwortung zu kosteneffizienten Lösungen für Kreditnehmer und Anleger.",
          ],
        },
      ],

      benefits: [
        {
          title: "Attraktive Rendite",
          description:
            "Unsere Investitionsmöglichkeiten bieten Ihnen eine Gelegenheit, mit der Beimischung von Krediten attraktive Renditen zu erzielen.",
        },
        {
          title: "Diversifizierte Portfolios",
          description:
            "Diversifizieren Sie Ihr Kreditportfolio mit einer Auswahl an verschiedenen Kreditarten und Risikoklassen.",
        },
        {
          title: "Experten Team",
          description:
            "Unsere Finanzexperten prüfen die Kreditanträge mit Ihrer grossen Erfahrung und unseren proprietären Modellen.",
        },
        {
          title: "Sichere Investitionen",
          description:
            "Wir legen grossen Wert auf die Sicherheit Ihrer Investitionen durch starke Risikomanagement- und Compliance-Prozesse.",
        },
      ],

      accordion: [
        {
          title: "Einfache und schnelle Anmeldung",
          content:
            "Ein paar Angaben reichen und schon kann es losgehen. Werden Sie nach erfolgreicher persönlicher Identifikation zum Investor.",
        },
        {
          title: "Investitionsmöglichkeiten nutzen",
          content:
            "Wir bieten Ihnen vielseitige Projekte, in die Sie bequem investieren können und ein diversifiziertes Portfolio aufbauen.",
        },
        {
          title: "Erzielen Sie eine ausgezeichnete Rendite",
          content:
            "Sie erhalten monatliche Rückzahlungen (bei Ratenkrediten) und Zinsen direkt auf Ihr Bankkonto.",
        },
      ],

      notes:
        "Page has live projects section with dynamic loan data (amount, interest, rating, progress). Renditerechner (return calculator) with amount/duration/interest inputs. 3 product cards: Private Anleger, Institutionelle Anleger, Plattform. 6-item advantages carousel.",
    },

    "privatinvestoren": {
      slug: "privatinvestoren",
      locale: "de",
      liveUrl: "/investieren/privatinvestoren/",
      freshRoute: "routes/investieren/privatinvestoren.tsx",
      crawledAt: "2025-12-21",
      status: "updated",

      hero: {
        tagline: "Privatanleger",
        heading: "Erfolgreich Geld in Kredite investieren",
        description:
          "Lassen Sie Ihr Geld für Sie arbeiten. Der beste Weg, um ein passives Einkommen aufzubauen.",
        cta: {
          text: "Jetzt investieren",
          href: "/werde-anleger/",
        },
      },

      sections: [
        {
          heading: "Werden Sie Investor in 3 Schritten",
          subheading: "So funktioniert es",
          content: [],
        },
        {
          heading: "Wann kann ich mit dem Investieren beginnen?",
          content: [
            "Sie sind mindestens 18 Jahre",
            "Sie sind CH/LI-Bürger oder besitzen eine gültige Aufenthaltsbewilligung für die Schweiz oder Liechtenstein",
            "Sie haben ein Schweizer Bankkonto und haben den Registrierungsprozess durchgelaufen.",
          ],
        },
        {
          heading: "Unser Rating",
          subheading:
            "Jeder Kredit wird von A (geringes Risiko, geringe Rendite) bis F (höheres Risiko, höhere Rendite) bewertet.",
          content: [],
        },
      ],

      charts: [
        {
          title: "Rating Übersicht",
          type: "bar",
          data: {
            "A": "3.9 – 5.4% (est. 4.65%)",
            "B": "4.0 – 5.9% (est. 4.95%)",
            "C": "4.6 – 7.3% (est. 5.95%)",
            "D": "5.6 – 9.7% (est. 7.65%)",
            "E": "7.0 – 11.4% (est. 9.20%)",
            "Gesamtrendite": "6.48%",
          },
        },
      ],

      accordion: [
        {
          title: "Einfache und schnelle Anmeldung",
          content:
            "Ein paar Angaben reichen und schon kann es losgehen. Werden Sie nach erfolgreicher persönlicher Identifikation zum Investor.",
        },
        {
          title: "Investitionsmöglichkeiten nutzen",
          content:
            "Wir bieten Ihnen vielseitige Projekte, in die Sie bequem investieren können und ein diversifiziertes Portfolio aufbauen.",
        },
        {
          title: "Erzielen Sie eine ausgezeichnete Rendite",
          content:
            "Sie erhalten monatliche Rückzahlungen (bei Ratenkrediten) und Zinsen direkt auf Ihr Bankkonto.",
        },
      ],

      notes:
        "Page has 3 investor requirements, rating table (A-E with F/G/H rejected), live projects carousel, Renditerechner, 6-item advantages carousel shared with main Investieren page.",
    },

    "institutionelle": {
      slug: "institutionelle",
      locale: "de",
      liveUrl: "/investieren/institutionelle-investoren/",
      freshRoute: "routes/investieren/institutionelle.tsx",
      crawledAt: "2025-12-21",
      status: "updated",

      hero: {
        tagline: "Institutionelle Anleger",
        heading: "Erfolgreich und professionell in Kredite investieren!",
        description:
          "Investitionen in Kredite als ideale Ergänzung zum Anlageportfolio.",
        cta: {
          text: "Jetzt investieren",
          href: "/werde-anleger/",
        },
      },

      sections: [
        {
          heading: "Werden Sie Investor in 3 Schritten",
          subheading: "So funktioniert es",
          content: [],
        },
        {
          heading: "Unsere Investitionsmöglichkeiten",
          subheading: "Sichere und diversifizierte Renditen",
          content: [
            "Investieren Sie direkt oder über strukturierte Produkte und Fonds direkt in Privatkredite, KMU-Kredite und Immobiliendarlehen.",
          ],
        },
        {
          heading: "Wann kann ich mit dem Investieren beginnen?",
          content: [
            "Im Handelsregister eingetragene Firma mit Sitz in der Schweiz oder Liechtenstein",
            "Zeichnungsberechtigter ist CH/LI-Bürger oder besitzt eine gültige Aufenthaltsbewilligung",
            "Die Firma hat ein Schweizer Bankkonto",
          ],
        },
      ],

      benefits: [
        {
          title: "Cashare Platform",
          description:
            "Direktzugang zu KMU- und Privatkrediten über API. Fixpreis- oder auktionsbasierte Kredite. Ganze Kredite oder Kreditanteile.",
        },
        {
          title: "Investment über strukturierte Produkte \"Notes\"",
          description:
            "Zugang zu Cashare-Krediten über strukturierte Notes. Flexible Strukturierung und Organisation.",
        },
        {
          title: "Investment Fonds",
          description:
            "Zugang zu KMU- und Privatkrediten über einen Fonds. Flexible Strukturierung und Organisation.",
        },
      ],

      charts: [
        {
          title: "Rating Übersicht",
          type: "bar",
          data: {
            "A": "3.9 – 5.4% (est. 4.65%)",
            "B": "4.0 – 5.9% (est. 4.95%)",
            "C": "4.6 – 7.3% (est. 5.95%)",
            "D": "5.6 – 9.7% (est. 7.65%)",
            "E": "7.0 – 11.4% (est. 9.20%)",
            "Gesamtrendite": "6.48%",
          },
        },
      ],

      accordion: [
        {
          title: "Einfache und schnelle Anmeldung",
          content:
            "Ein paar Angaben reichen und schon kann es losgehen. Werden Sie nach erfolgreicher persönlicher Identifikation zum Investor.",
        },
        {
          title: "Investitionsmöglichkeiten nutzen",
          content:
            "Wir bieten Ihnen vielseitige Kreditprojekte, in die Sie bequem investieren können. Definieren Sie Ihr eigenes Risikoprofil.",
        },
        {
          title: "Erzielen Sie eine ausgezeichnete Rendite",
          content:
            "Sie erhalten monatliche Rückzahlungen (bei Ratenkrediten) und Zinsen direkt auf Ihr Bankkonto.",
        },
      ],

      notes:
        "Live URL is /investieren/institutionelle-investoren/ (not /institutionelle/). 3 investment products: Cashare Platform, Notes, Fonds. Different requirements from private investors (company registration required). Same rating table and Renditerechner.",
    },

    // ===========================================
    // ÜBER UNS - TODO
    // ===========================================
    "wer-sind-wir": {
      slug: "wer-sind-wir",
      locale: "de",
      liveUrl: "/ueber-uns/wer-sind-wir/",
      freshRoute: "routes/ueber-uns/wer-sind-wir.tsx",
      crawledAt: "2025-12-21",
      status: "verified",

      hero: {
        heading: "Geschichte und Kompetenzen",
        description: "Das Unternehmen Cashare stellt sich vor",
      },

      sections: [
        {
          heading: "18 Jahre Cashare",
          content: [
            "Eine Reise voller Innovation, Vertrauen und Wachstum im Marketplace-Lending.",
          ],
        },
        {
          heading: "Was wir machen",
          content: [
            "Wir sind ein unabhängiger Finanzdienstleister und bringen Menschen und Unternehmen zusammen – als Anleger und Kreditnehmer.",
            "Unsere Plattform ist vollautomatisiert, einfach zu bedienen und sorgt für schnelle, sichere und transparente Abwicklung.",
            "Als lizenziertes Finanzinstitut legen wir grossen Wert auf höchste Standards in Sachen Compliance und Regulierung.",
          ],
        },
        {
          heading: "Wer wir sind",
          content: [
            "Seit unserer Gründung im Jahr 2008 prägen wir als erstes Crowdlending-FinTech der Schweiz die Zukunft der Finanzwelt.",
            "Getrieben von starken Werten und echter Unabhängigkeit, durften wir bereits über 60'000 Kunden begleiten.",
          ],
        },
      ],

      benefits: [
        {
          title: "Die Pioniere",
          description:
            "Gegründet im Januar 2008. Als Schweizer Fintech-Pionier haben wir den Weg für eine moderne und digitale Finanzbranche geebnet.",
        },
        {
          title: "Reguliert",
          description:
            "Als Aktiengesellschaft nach schweizerischem Recht mit Sitz in Hünenberg (ZG) und eingetragen im Handelsregister.",
        },
        {
          title: "Geprüft",
          description:
            "Seit der Gründung geprüft durch das führende Prüfungs- und Beratungsunternehmen PricewaterhouseCoopers.",
        },
        {
          title: "Genehmigt",
          description:
            "Finanzintermediär im Sinne von GwG Art. 2 Abs. 3 und Mitglied bei der von der FINMA anerkannten SRO Polyreg.",
        },
      ],

      accordion: [
        {
          title: "Transparent und fair",
          content:
            "Ohne versteckte Kosten verbinden wir Anleger und Kreditnehmer direkt über unsere Plattform.",
        },
        {
          title: "Innovative Finanzlösungen",
          content:
            "Wir nutzen moderne Technologien und datenbasierte Analysen für verschiedene finanzielle Bedürfnisse.",
        },
        {
          title: "Erprobte Expertise",
          content:
            "Mit unserer langjährigen Erfahrung und innovativen Technologie ermöglichen wir effiziente und fundierte Finanzentscheidungen.",
        },
        {
          title: "Kundenorientiert",
          content:
            "Unsere Mitarbeiter und Plattform stellen die Bedürfnisse von Anleger und Kreditnehmern in den Mittelpunkt.",
        },
      ],

      testimonials: [
        { quote: "", author: "Michael Borter", role: "CEO / Gründer" },
        { quote: "", author: "Roger Müller", role: "COO / Mitgründer" },
        { quote: "", author: "Sajmir Medija", role: "Leiter Geschäftsentwicklung" },
        { quote: "", author: "Delia Aellen", role: "Leiter Betrieb" },
        { quote: "", author: "Jonas Imfeld", role: "Leitender Risikomanager" },
        { quote: "", author: "Filipe Goncalves", role: "Verkaufsleiter" },
        { quote: "", author: "Andy Jenk", role: "Leiter B2B-Partnerschaften" },
        { quote: "", author: "Kassandra Bulica", role: "Kreditmanagerin" },
        { quote: "", author: "Arbresha Hoxhaj", role: "Kreditmanagerin" },
        { quote: "", author: "Débora Fernandes Martins", role: "Junior-Kreditanalyst" },
      ],

      notes:
        "Page shows 17 years (should be 18). Team carousel with 10 members. Vorstand & Beirat section with Jan F. Moermann (Vorstand) and 6 Beirat members: Tina Störmer, Dr. Tom Ludescher, Prof. Dr Alfred Mettler, Harald Schnabel, Dominik Joke, Oscar Neira. Same 6-item advantages carousel.",
    },

    "crowdlending": {
      slug: "crowdlending",
      locale: "de",
      liveUrl: "/ueber-uns/crowdlending/",
      freshRoute: "routes/ueber-uns/crowdlending.tsx",
      crawledAt: "2025-12-21",
      status: "verified",

      hero: {
        tagline: "Crowdlending",
        heading: "Die Zukunft von Krediten und Investitionen",
        description:
          "Kreditnehmer und Investoren verbinden – für eine intelligente finanzielle Zukunft.",
      },

      sections: [
        {
          heading: "So funktioniert Crowdlending",
          content: [],
        },
        {
          heading: "Was ist Crowdlending?",
          subheading: "Peer-to-Peer-Kredite einfach gemacht",
          content: [
            "Wir machen Peer-to-Peer-Kredite, auch bekannt als Marketplace Lending, einfach.",
          ],
        },
        {
          heading: "Wie funktioniert es?",
          subheading: "Kredite direkt von Anlegern erhalten",
          content: [
            "Auf Crowdlending-Plattformen wie Cashare beantragen Kreditnehmer einen Kredit, der direkt von Anlegern finanziert wird.",
            "Die Plattform dient als Marktplatz, übernimmt die gesamte Dokumentation und Abwicklung.",
          ],
        },
        {
          heading: "Warum Crowdlending wählen?",
          subheading: "Schnell, flexibel und transparent",
          content: [
            "Bei Cashare sind wir überzeugt, dass es einen besseren Weg gibt. Indem wir Banken als Zwischeninstanz eliminieren.",
            "Gegründet 2008, sind wir das erfahrendste FinTech-Unternehmen der Schweiz.",
          ],
        },
      ],

      benefits: [
        {
          title: "Für Kreditnehmer",
          description:
            "Kreditnehmer beantragen Kredite auf der Plattform. Nach erfolgreicher Bonitätsprüfung wird der Kredit aufgeschaltet.",
        },
        {
          title: "Für Investoren",
          description:
            "Anleger prüfen Kreditanfragen und entscheiden, wo sie ihr Kapital anlegen möchten.",
        },
        {
          title: "Direkte Verbindung",
          description:
            "Dieser Prozess schafft eine direkte Beziehung zwischen Kreditnehmern und Anlegern, fördert Transparenz.",
        },
      ],

      accordion: [
        {
          title: "Sichere Antragstellung",
          content:
            "Unsere Plattform hat bereits tausende Privatpersonen und Unternehmen dabei unterstützt, den benötigten Kredit zu erhalten.",
        },
        {
          title: "Klare Entscheidungen",
          content:
            "Dank modernster Technologie und datenbasierter Antragsprüfung ermöglichen wir eine schnelle und effiziente Bearbeitung.",
        },
        {
          title: "Wettbewerbsfähige Zinssätze",
          content:
            "Wir gestalten die Zukunft des Kreditwesens mit Transparenz, Verantwortung und Innovation.",
        },
        {
          title: "Direkte Investition",
          content:
            "Über unsere Plattform haben bereits tausende von Anlegern direkt in Kredite investiert.",
        },
        {
          title: "Höhere Renditen",
          content:
            "Durch den Wegfall von Banken als Zwischeninstanz ermöglicht Crowdlending attraktive Renditen.",
        },
        {
          title: "Kontrolle über Ihre Investition",
          content:
            "Egal ob die Kredite einzeln ausgesucht oder mit unserem Investment-Bot (Auto-Invest) automatisch investiert werden.",
        },
      ],

      notes:
        "Page explains what crowdlending is, how it works, and benefits for both borrowers and investors. Has two accordion sections: Vorteile für Kreditnehmer (3 items) and Vorteile für Investoren (3 items).",
    },

    "rating": {
      slug: "rating",
      locale: "de",
      liveUrl: "/ueber-uns/rating/",
      freshRoute: "routes/ueber-uns/rating.tsx",
      crawledAt: "2025-12-21",
      status: "verified",

      hero: {
        tagline: "Rating",
        heading: "Das Cashare Rating",
        description: "Erfahren Sie, wie unser Rating funktioniert",
      },

      sections: [
        {
          heading:
            "Erfahren Sie, was unser detailliertes Rating über Kreditrisiken verrät",
          content: [
            "Cashare hat eine proprietäre Kredit-Scoring-Technologie entwickelt, die big data, künstliche Intelligenz und maschinelles Lernen nutzt.",
            "Jeder Darlehensantrag durchläuft unser strenges Risikobewertungssystem und wird gegen Hunderte von Datenpunkten geprüft.",
            "Wir nutzen direkte API-Verbindungen zu mehreren externen Zahlungs- und Regierungsdatenbanken, um unsere Risikobewertung kontinuierlich zu verbessern.",
          ],
        },
        {
          heading: "Was sagt unsere Bewertung aus?",
          content: [],
        },
        {
          heading: "Unser Rating schafft Klarheit",
          content: [
            "Jeder Kredit erhält eine Risikobewertung von A (niedriges Risiko/niedrige Rendite) bis F (höheres Risiko/höhere Rendite).",
            "Die Rolle von Cashare als Anbieter einer P2P-Kreditplattform ist, Menschen zusammenzubringen. Es wird kein eigenes Geld verliehen.",
          ],
        },
        {
          heading: "Sicherheiten",
          content: [
            "Auf Cashare können Kredite durch den Kreditnehmer auch mit zusätzlichen Sicherheiten abgesichert werden.",
            "Die zusätzlichen Sicherheiten werden in den Kreditprojekten spezifisch ausgewiesen. Bei einer allfälligen Zahlungsunfähigkeit des Kreditnehmers können diese verwertet werden.",
          ],
        },
        {
          heading: "Mindestzinssatz (Zinsuntergrenze)",
          content: [
            "Cashare stellt sicher, dass stets ein fairer Zinssatz erzielt wird. Dieser beinhaltet stets die Eigenkapitalrendite für den Anleger.",
          ],
        },
      ],

      // Rating table data
      charts: [
        {
          title: "Risikobewertung und Rendite",
          type: "bar",
          data: {
            "A - Nominalzins": "3.9 – 5.4%",
            "A - Geschätzte Rendite": "4.65%",
            "B - Nominalzins": "4.0 – 5.9%",
            "B - Geschätzte Rendite": "4.95%",
            "C - Nominalzins": "4.6 – 7.3%",
            "C - Geschätzte Rendite": "5.95%",
            "D - Nominalzins": "5.6 – 9.7%",
            "D - Geschätzte Rendite": "7.65%",
            "E - Nominalzins": "7.0 – 11.4%",
            "E - Geschätzte Rendite": "9.20%",
            "F": "Abgelehnt",
            "Gesamtrendite": "6.48%",
          },
        },
      ],

      benefits: [
        {
          title: "Grundpfand",
          description:
            "Immobilien als Sicherheit für den Kredit.",
        },
        {
          title: "Bürgschaft",
          description:
            "Eine dritte Person bürgt für den Kredit.",
        },
      ],

      notes:
        "Rating page explains how Cashare's proprietary credit scoring works. Has rating table with A-E ratings showing Nominalzins and Geschätzte Rendite. Also explains collateral types (Grundpfand, Bürgschaft) and minimum interest rates.",
    },

    "jobs": {
      slug: "jobs",
      locale: "de",
      liveUrl: "/ueber-uns/jobs/",
      freshRoute: "routes/ueber-uns/jobs.tsx",
      crawledAt: "2025-12-21",
      status: "verified",

      hero: {
        tagline: "Jobs",
        heading: "Entdecke spannende Karrierechancen mit uns",
        description: "Gestalte die Zukunft der Finanzwelt mit Cashare",
      },

      sections: [
        {
          heading: "Warum Cashare wählen?",
          subheading: "Die Finanzbranche mit uns verändern",
          content: [
            "Wir sind stets auf der Suche nach leidenschaftlichen und kreativen Köpfen, die etwas in der Welt der Finanzen bewegen wollen.",
            "Willst du hinter die Kulissen eines innovativen FinTech-Unternehmens schauen und dich aktiv in eine dynamische Arbeitsumgebung einbringen?",
            "Bist du ein zuverlässiger, innovativer Teamplayer, der neue Ideen liebt?",
            "Du bist anpassungsfähig, flexibel und bereit, unser Team auf dem Weg in eine erfolgreiche Zukunft zu begleiten?",
            "Dann werde Teil unserer Mission und gestalte mit uns die Zukunft der Finanzbranche!",
          ],
        },
        {
          heading: "Bringe dein Wissen ein",
          content: [
            "Wir nehmen gerne auch Blindbewerbungen entgegen und freuen uns auf deine vollständigen Bewerbungsunterlagen an jobs@cashare.ch.",
          ],
        },
      ],

      notes:
        "Jobs page with careers info. Currently shows 'Zur Zeit sind keine Stellen verfügbar.' with link to join.com/companies/cashare for open positions. Has placeholder job cards (Betriebsleiter) that are likely dynamically loaded.",
    },

    "partner": {
      slug: "partner",
      locale: "de",
      liveUrl: "/ueber-uns/partner/",
      freshRoute: "routes/ueber-uns/partner.tsx",
      crawledAt: "2025-12-21",
      status: "verified",

      hero: {
        tagline: "Vertrauensvolle Partnerschaften",
        heading: "Partnerschaften mit Cashare zum Erfolg",
        description:
          "Möchten Sie Partner von Cashare werden? Dann freuen wir uns auf eine E-Mail an partner@cashare.ch.",
        cta: {
          text: "Partner werden",
          href: "mailto:partner@cashare.ch",
        },
      },

      // Partner categories with companies
      benefits: [
        // Row 1
        {
          icon: "kreditvergleich",
          title: "Partner: Kreditvergleich.ch",
          description:
            "Kreditvergleich.ch verbindet Kreditsuchende mit seriösen Kreditanbietern und Kreditvermittlern in der Schweiz.",
        },
        {
          icon: "benedict",
          title: "Schule: Bénédict",
          description:
            "Bénédict führt moderne, den heutigen Bedürfnissen angepasste Sprachschulen, Handelsschulen, Management-Schulen.",
        },
        {
          icon: "aus",
          title: "Schule: AUS",
          description:
            "Während ihrer 30-jährigen Geschichte hat AUS internationale Studierende mit relevantem Wirtschaftsfachwissen ausgestattet.",
        },
        {
          icon: "deutsche-boerse",
          title: "Mitgliedschaft: Deutsche Börse Venture Network",
          description:
            "Mit dem Deutsche Börse Venture Network® leistet die Deutsche Börse einen wesentlichen Beitrag zum Aufbau des Startup-Ökosystems.",
        },
        // Row 2
        {
          icon: "bisnode",
          title: "Datenlieferant: Dun & Bradstreet",
          description:
            "Seit fast 200 Jahren unterstützt Dun & Bradstreet seine Kunden und Partner mit Daten, Analysen und datenbasierten Lösungen.",
        },
        {
          icon: "crif",
          title: "Datenlieferant: CRIF",
          description:
            "CRIF AG ist in der Schweiz die führende Anbieterin von Lösungen für Kreditrisikomanagement und Betrugsbekämpfung.",
        },
        {
          icon: "axa",
          title: "Partner: AXA",
          description:
            "Die AXA ist der führende Versicherer in der Schweiz. Privat- und Unternehmenskunden profitieren von umfassenden Lösungen.",
        },
        {
          icon: "creditreform",
          title: "Datenlieferant: Creditreform",
          description:
            "Das Motto des Schweizerischen Gläubigerverbandes Creditreform ist Programm. Das moderne, genossenschaftliche Unternehmen.",
        },
        // Row 3
        {
          icon: "vfcms",
          title: "Mitgliedschaft: VfCMS",
          description:
            "Der Verein für Credit Management Schweiz (VfCMS) hat das Ziel, das Credit Management in der Schweiz zu fördern.",
        },
        {
          icon: "pwc",
          title: "Revision: PwC",
          description:
            "PwC Schweiz ist das führende Prüfungs- und Beratungsunternehmen in der Schweiz.",
        },
        {
          icon: "swiss-fintech",
          title: "Mitgliedschaft: Swiss Finance Startups",
          description:
            "Swiss Finance Startups (SFS) wurde im Mai 2014 in Zürich von einer Gruppe von Pionieren der Schweizer FinTech-Szene gegründet.",
        },
        {
          icon: "polyreg",
          title: "SRO: Polyreg",
          description:
            "Als Finanzintermediär tätige Personen oder Firmen mit Sitz in der Schweiz haben sich einer Selbstregulierungsorganisation anzuschliessen.",
        },
      ],

      notes:
        "Partner page lists 12 partners in categories: Partner (Kreditvergleich.ch, AXA), Schule (Bénédict, AUS), Mitgliedschaft (Deutsche Börse Venture Network, VfCMS, Swiss Finance Startups), Datenlieferant (Dun & Bradstreet, CRIF, Creditreform), Revision (PwC), SRO (Polyreg). Each has logo, category label, description and website link.",
    },

    "presse": {
      slug: "presse",
      locale: "de",
      liveUrl: "/presse/",
      freshRoute: "routes/ueber-uns/presse.tsx",
      crawledAt: "2025-12-21",
      status: "verified",

      hero: {
        tagline: "Presse Mitteilungen",
        heading: "Was die Presse sagt",
        description:
          "Crowdlending und Fintech sind Themen von nationalem und internationalem Interesse. Schauen Sie rein und erfahren Sie, was andere über uns sagen.",
        cta: {
          text: "Kontaktieren Sie uns",
          href: "#contact",
        },
      },

      // Sample press articles (page 1 of 5)
      testimonials: [
        {
          quote: "Leihe deinem Nächsten",
          author: "Neue Zürcher Zeitung",
          company:
            "Privatpersonen investieren in Privatpersonen. Investoren stellen Geld für Privatkredite zur Verfügung.",
        },
        {
          quote: "Free Banking: Hat die klassische Bank bald ausgedient?",
          author: "Aargauer Zeitung",
          company:
            "Datenlecks sind die Begleiterscheinung einer grossen digitalen Umwälzung im Bankgeschäft.",
        },
        {
          quote: "Peer-to-Peer-Kredite",
          author: "Finance 2.0",
          company:
            "Privatpersonen investieren in Privatpersonen. Investoren stellen Geld für Privatkredite zur Verfügung.",
        },
        {
          quote: "Der Investorenschwarm formiert sich",
          author: "Tages Anzeiger",
          company:
            "Der Schweizer Markt steckt noch in den Kinderschuhen. Anbieter und Experten rechnen mit hohem Wachstum.",
        },
        {
          quote: "Erste Studie zum Schweizer Crowdfunding Markt",
          author: "Hochschule Luzern",
          company:
            "Crowdfunding Monitoring 2014 – erste Studie zum Schweizer Crowdfunding Markt.",
        },
        {
          quote: "Von der Nische zur Masse",
          author: "Handelszeitung",
          company:
            "Der Schweizer Markt steckt noch in den Kinderschuhen. Anbieter und Experten rechnen mit hohem Wachstum.",
        },
        {
          quote: "Neue Konkurrenz für Banken",
          author: "Neue Zürcher Zeitung",
          company:
            "Hypothekenvermittler sowie Finanz- und Crowdfunding-Plattformen kämpfen zunehmend mit Banken um Marktanteile.",
        },
        {
          quote:
            "Rückblick auf die Konferenz 'Innovative Angebote im Retail Banking'",
          author: "Hochschule Luzern",
          company:
            "Die Konferenz fand am Donnerstag, 26 Juni 2014 am Institut für Finanzdienstleistungen statt.",
        },
        {
          quote: "Fenomeno crowdlending",
          author: "RSI",
          company:
            "Privatkredite sind in Großbritannien Realität, in der Schweiz stehen wir am Anfang.",
        },
        {
          quote: "Bank spielen und Geld verdienen",
          author: "KGeld",
          company:
            "Nicht nur Banken vergeben Kredite. Auch Privatleute können anderen Konsumenten ein Darlehen geben.",
        },
        {
          quote:
            "CD aufnehmen, Buch drucken, Konzert veranstalten: Kreative flirten mit Schwarm-Geld",
          author: "Aargauer Zeitung",
          company:
            "Das Finanzieren von Projekten oder Firmen durch eine Vielzahl von Menschen ist im Trend.",
        },
        {
          quote: "Anleger entdecken das Social Lending",
          author: "Neue Zürcher Zeitung",
          company:
            "Private Anleger entdecken die Kreditvergabe über Internet-Plattformen.",
        },
      ],

      notes:
        "Press page with media coverage from NZZ, Tages Anzeiger, Handelszeitung, Aargauer Zeitung, Finance 2.0, Hochschule Luzern, RSI, KGeld. Has 5 pages of press articles. Each article shows publication logo, headline, excerpt and link. CTA to contact for press inquiries.",
    },
  },
};

// Helper to get page by slug
export function getPageContent(slug: string): PageContent | undefined {
  return contentDatabase.pages[slug];
}

// Helper to get all pages by status
export function getPagesByStatus(status: PageContent["status"]): PageContent[] {
  return Object.values(contentDatabase.pages).filter((p) => p.status === status);
}

// Helper to get crawl progress
export function getCrawlProgress(): {
  total: number;
  crawled: number;
  verified: number;
  updated: number;
  todo: number;
  percent: number;
} {
  const pages = Object.values(contentDatabase.pages);
  const total = pages.length;
  const crawled = pages.filter((p) => p.status === "crawled").length;
  const verified = pages.filter((p) => p.status === "verified").length;
  const updated = pages.filter((p) => p.status === "updated").length;
  const todo = pages.filter((p) => p.status === "todo").length;
  const done = crawled + verified + updated;
  return {
    total,
    crawled,
    verified,
    updated,
    todo,
    percent: Math.round((done / total) * 100),
  };
}
