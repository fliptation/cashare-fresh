import type { Locale } from "../../lib/i18n/index.ts";

type LegalPageType = "agb" | "datenschutz" | "impressum" | "cookies";

interface LegalProps {
  locale: Locale;
  page: LegalPageType;
}

const content = {
  de: {
    agb: {
      title: "Allgemeine Geschäftsbedingungen (AGB)",
      subtitle: "der Cashare AG, Hünenberg – Version 1.7 / 1. Februar 2025",
      sections: [
        {
          title: "I. Allgemeine Bestimmungen",
          content: `
            <h4>Einleitung</h4>
            <p>1. Diese Allgemeinen Geschäftsbedingungen der Cashare AG, Hünenberg (nachfolgend Cashare) regeln die Teilnahmevoraussetzungen, sowie die Rechte und Pflichten der Mitglieder (Darlehensnehmer, Finanzgeber/Anleger) in Zusammenhang mit den von Cashare angebotenen Dienstleistungen.</p>
            <p>2. Cashare vergibt auf ihrer Kreditplattform www.cashare.ch Darlehensnehmern Kredite unter der Bedingung, dass diese anschliessend an Dritte Finanzgeber/Anleger weiterverkauft und abgetreten werden können. Diese Kreditplattform ermöglicht den einfachen und unkomplizierten Abschluss und die rasche Abwicklung von Darlehensverträgen. Die Dienstleistungen von Cashare beinhalten insbesondere das Zurverfügungstellen der Plattform für die Darlehensnehmer und Dritte Finanzgeber/Anleger sowie die Prüfung und Gewährung der Darlehen und Hypotheken.</p>
            <p>Die Cashare fungiert jeweils selbst als Darlehensgeberin, wobei sie die Forderungen und Leistungen in der Regel nach Vertragsabschluss an andere Finanzgeber/Anleger abtritt. Cashare behält sich diesbezüglich ausdrücklich das Recht vor, das Darlehen oder Teile davon an Dritte (an andere Mitglieder als Finanzgeber/Anleger oder auf dem Sekundärmarkt) zu verkaufen und die Forderungen entsprechend abzutreten.</p>
            <p>3. Mitglieder können die Kreditplattform www.cashare.ch entweder als Darlehensnehmer oder als Finanzgeber/Anleger nutzen oder Gebote auf aufgeschaltete Kreditprojekte abgeben.</p>

            <h4>A. Dienstleistungs-Nutzung, Mitgliedschaft und Auflösung der Mitgliedschaft</h4>

            <h5>aa) Registrierung</h5>
            <p>1. Die Nutzung der Dienstleistungen von Cashare setzt die Registrierung als Mitglied voraus. Die Registrierung erfolgt kostenlos durch Eröffnung eines Nutzerkontos, unter Zustimmung zu diesen Allgemeinen Geschäftsbedingungen (AGB).</p>
            <p>2. Ein Anspruch auf Registrierung oder Nutzung der Dienstleistungen von Cashare besteht nicht; Cashare behält sich das Recht vor, eine Registrierung ohne Grundangabe abzulehnen, Mitglieder auszuschliessen oder eine Dienstleistung nicht mehr anzubieten.</p>
            <p>Ausgeschlossenen Mitgliedern ist es untersagt, sich ohne vorgängiges schriftliches Einverständnis von Cashare nochmals zu registrieren. Missachtung dieser Vorschriften kann (straf-) rechtliche Schritte nach sich ziehen.</p>
            <p>3. Die Registrierung als Mitglied steht nur Unternehmen mit Handelsregistereintrag und Geschäftssitz in der Schweiz oder Liechtenstein sowie unbeschränkt handlungsfähigen natürlichen Personen mit Wohnsitz in der Schweiz oder Liechtenstein offen, welche zudem eine Bankverbindung in der Schweiz oder Liechtenstein haben. Pro Mitglied kann nur ein Nutzerkonto geführt werden; das Nutzerkonto ist persönlich und nicht übertragbar.</p>
            <p>4. Bei der Registrierung sind die nachstehenden Angaben vollständig und wahrheitsgetreu anzugeben:</p>
            <ol>
              <li>Firma, Name, Vorname;</li>
              <li>Adresse (kein Postfach), Wohnort;</li>
              <li>Geburtsdatum oder Gründungsdatum</li>
              <li>Telefonnummer; und</li>
              <li>gültige persönliche E-Mail-Adresse; und</li>
            </ol>
            <p>5. Das Mitglied ist verpflichtet, ein sicheres Passwort zu wählen und dieses geheim zu halten. Cashare versendet niemals E-Mails oder ruft an, in welchen Sie um die Bekanntgabe Ihres Passwortes gebeten werden.</p>

            <h5>bb) Identifikation</h5>
            <p>1. Das Mitglied hat sich mittels Videoanruf und entsprechender Überprüfung seines gültigen Identitätsdokuments (Ausweis oder Pass) zu identifizieren. Für die Identifikation fällt eine Bearbeitungsgebühr von CHF 5.00 an, welche mittels Banküberweisung vom Eigenkonto auf das Konto von Cashare zu leisten ist.</p>
            <p>2. Alternativ zur Online-Identifikation kann das Mitglied das gültige Identitätsdokument mittels gelben Identitätskartenverfahren der Schweizerischen Post (vormals PostIdent) oder einer amtlichen bzw. notariellen Beglaubigung bei Cashare einreichen.</p>

            <h5>cc) Benutzerkonto</h5>
            <p>1. Mitglieder erhalten nach erfolgreicher Registrierung Zugang zum persönlichen Nutzerkonto, in welchem die Darlehensgesuche sowie die abgegebenen Gebote und abgeschlossenen Verträge angezeigt werden.</p>
            <p>2. Darlehensnehmer haben während der Finanzierungsphase sowie während der ersten 10 Tage nach Abschluss der Finanzierungsphase täglich, während der Laufzeit des Darlehens mindestens wöchentlich Einsicht in das eigene Konto auf der Kreditplattform zu nehmen.</p>
            <p>3. Es liegt in der Verantwortung des Mitglieds, seine hinterlegten Angaben aktuell zu halten.</p>
            <p>4. Handlungen, welche unter dem Nutzerkonto eines Mitglieds vorgenommen werden, werden diesem Mitglied zugerechnet.</p>
            <p>5. Der Zugang zum persönlichen Nutzerkonto kann von Cashare aus Sicherheitsgründen oder für Wartungsarbeiten ohne Vorankündigung temporär eingeschränkt werden. Cashare haftet nicht für Schäden aus solchen Einschränkungen.</p>

            <h5>dd) Beendigung der Mitgliedschaft</h5>
            <p>1. Cashare kann die Mitgliedschaft mit sofortiger Wirkung und ohne Vorankündigung beenden, wenn das Mitglied unrichtige Angaben zur Person gemacht hat oder gegen Bestimmungen dieser AGB verstossen hat.</p>
            <p>2. Ein Mitglied kann seine Mitgliedschaft jederzeit mittels E-Mail an support@cashare.ch mit sofortiger Wirkung beenden, sofern sein Nutzerkonto ausgeglichen ist, alle Darlehen vollständig zurückbezahlt wurden und keine offenen Darlehensgesuche bestehen.</p>

            <h4>B. Datenschutz</h4>
            <p>1. Die eigenen Personendaten werden anderen Mitgliedern nur insoweit bekannt gegeben, als deren Kenntnis zur Erbringung der Dienstleistungen von Cashare oder zur Ausführung abgeschlossener Verträge erforderlich ist.</p>
            <p>2. Für sämtliche Informationen betreffend Erhebung, Verwendung und Weitergabe von Personendaten, die im Rahmen der Nutzung der Dienstleistungen von Cashare bekannt gegeben oder erhoben werden, gelten die Bestimmungen der Datenschutzerklärung von Cashare.</p>
            <p>3. Cashare ist berechtigt, die Mitgliederdaten zu Marketingzwecken innerhalb der Gruppe zu verwenden. Das Mitglied kann seine Einwilligung jederzeit widerrufen.</p>
            <p>4. Das Mitglied sichert zu, dass allfällige Inhalte, die es hochlädt, nicht gegen Rechte Dritter verstossen.</p>
            <p>5. Das Mitglied unterlässt jegliche Verwendung der Dienstleistungen von Cashare, welche die Nutzung durch andere Mitglieder beeinträchtigen könnte. Insbesondere ist der Versand von Massen-E-Mails (Spam), das Hacking in fremde Computer und die Einschleusung von Viren und anderer Malware, das automatisierte Herunterladen von Inhalten von der Kreditplattform sowie das Extrahieren und Wiederverwenden von Daten untersagt.</p>
            <p>6. Kontaktdaten anderer Mitglieder dürfen nur für den Abschluss und die Abwicklung von Darlehens- bzw. Abtretungsverträgen verwendet werden.</p>

            <h4>C. Sanktionen</h4>
            <p>Cashare kann bei Verstössen gegen diese AGB:</p>
            <ul>
              <li>Verwarnungen aussprechen;</li>
              <li>Darlehensgesuche löschen;</li>
              <li>Benutzerkonten vorübergehend oder dauerhaft sperren.</li>
            </ul>
            <p>Weitergehende rechtliche Schritte bleiben vorbehalten.</p>
          `,
        },
        {
          title: "II. Kreditplattform",
          content: `
            <h4>A. Risikohinweis</h4>
            <p><strong>Die Finanzgeber/Anleger werden darauf hingewiesen, dass die Übernahme von Darlehensforderungen mit Risiken verbunden sein kann, welche den Verlust des gesamten Darlehensbetrags umfassen können.</strong></p>

            <h4>B. Darlehensgesuch</h4>
            <p>1. Zur Stellung eines Darlehensgesuchs muss das Mitglied über ein Nutzerkonto verfügen und sich identifiziert haben.</p>
            <p>2. Das Darlehensgesuch ist mittels Gesuchformular zu stellen, welches alle für die Beurteilung erforderlichen Angaben enthält (Einnahmen/Ausgaben, Geschäftszahlen bei Unternehmen, gewünschter Kreditbetrag, Laufzeit, Verwendungszweck).</p>
            <p>3. Der Zinssatz wird von Cashare festgelegt.</p>
            <p>4. Das Darlehensgesuch stellt ein verbindliches Angebot zum Abschluss eines Darlehensvertrags mit Cashare dar.</p>

            <h4>C. Kreditfähigkeits- und Bonitätsprüfung</h4>
            <p>1. Erforderliche Unterlagen sind einzureichen: Lohnabrechnungen (3 Monate), Mietvertrag, Krankenkassenpolice, bei Unternehmen Bilanzen und Erfolgsrechnungen.</p>
            <p>2. Der Gesuchsteller ermächtigt Cashare, bei Dritten Auskünfte einzuholen, insbesondere bei der IKO und ZEK.</p>
            <p>3. Cashare veröffentlicht anonymisierte Bewertungen auf der Plattform.</p>
            <p>4. Der Gesuchsteller erklärt sich mit der Veröffentlichung der Bewertung einverstanden.</p>

            <h4>D. Keine Beratung</h4>
            <p>1. Die von Cashare selbst oder mit Hilfe Dritter erstellte Bewertung ist rein indikativer Natur.</p>
            <p>2. Cashare gibt keine Anlageempfehlungen ab.</p>
            <p>3. Finanzgeber/Anleger treffen ihre Entscheide selbständig.</p>
            <p>4. Die Auto-Invest-Funktion generiert automatisierte Gebote gemäss benutzerdefinierten Parametern. Diese Gebote sind verbindlich und unwiderruflich.</p>

            <h4>E. Aufschalten des Darlehensgesuchs</h4>
            <p>1. Nach positiver Prüfung wird das Darlehensgesuch mit Rating auf der Plattform aufgeschaltet.</p>
            <p>2. Ein Anspruch auf Aufschaltung besteht nicht; Cashare kann ein Gesuch ohne Angabe von Gründen ablehnen.</p>
            <p>3. Mit der Aufschaltung des Darlehensgesuchs wird der Darlehensvertrag zwischen dem Darlehensnehmer und Cashare automatisch abgeschlossen.</p>

            <h4>F. Finanzierungsphase</h4>
            <p>1. Finanzgeber/Anleger können auf aufgeschaltete Darlehensgesuche verbindliche Gebote abgeben.</p>
            <p>2. Der Bieter hat den Betrag und den von Cashare festgelegten Zinssatz anzugeben.</p>
            <p>3. Die Abgabe eines Gebots stellt die verbindliche Bereitschaft zur Annahme des Angebots dar.</p>
            <p>4. Gebote können nicht widerrufen werden.</p>
            <p>5. Es gilt das Prinzip "first come, first served"; die Finanzierungsphase endet bei 100% Finanzierung oder Ablauf der Finanzierungsfrist.</p>

            <h4>G. Abschluss der Finanzierungsphase</h4>
            <p>1. Der Darlehensnehmer erhält den Darlehensvertrag als PDF, muss diesen ausdrucken, unterschreiben und das Original an Cashare senden.</p>
            <p>2. Mit dem Abschluss der Finanzierungsphase werden automatisch die Abtretungsverträge abgeschlossen.</p>
            <p>3. Die Abtretungsverträge stehen unter der aufschiebenden Bedingung, dass der Darlehensnehmer sein KKG-Widerrufsrecht nicht ausübt.</p>
            <p>4. Finanzgeber/Anleger erhalten individuelle Abtretungsverträge für ihre finanzierten Beträge.</p>
            <p>5. Der Darlehensnehmer erhält die Finanzierungsergebnisse inklusive Rückzahlungskonditionen.</p>

            <h4>H. Abwicklung</h4>
            <p>1. Finanzgeber/Anleger haben 5 Tage Zeit, die Gelder auf das Cashare-Konto zu überweisen.</p>
            <p>2. Lastschriftverfahren ist optional verfügbar.</p>
            <p>3. Die Gelder werden nicht investiert/verzinst bis zur Überweisung an den Darlehensnehmer.</p>
            <p>4. Nach Erhalt des unterschriebenen Vertrags und ohne KKG-Widerruf überweist Cashare den Darlehensbetrag.</p>
            <p>5. Bei Widerruf oder fehlendem unterschriebenem Vertrag gibt Cashare die Anlegergelder ohne Zinsen zurück.</p>

            <h4>I. Widerrufsrecht</h4>
            <p>1. Private Darlehensnehmer: 14-tägige Widerrufsfrist ab Vertragserhalt.</p>
            <p>2. Juristische Personen: 10-tägige Widerrufsfrist.</p>
            <p>3. Widerrufsadresse: Cashare AG, Bösch 73, 6331 Hünenberg oder support@cashare.ch</p>

            <h4>J. Rückzahlung</h4>
            <p>1. Monatliche Raten oder endfällige Zahlung sind zu den festgelegten Terminen auf das Cashare-Konto zu leisten.</p>
            <p>2. Zahlungen per Banküberweisung oder E-Banking; Schalterzahlungen werden nicht akzeptiert.</p>
            <p>3. Cashare leitet die Zahlungen an die Finanzgeber/Anleger weiter.</p>
            <p>4. Cashare kann Lastschriftverfahren (LSV+, Debit Direct) anordnen.</p>

            <h4>K. Verzug</h4>
            <p>1. Versäumte Zahlungen lösen automatisch Verzug aus, ohne dass eine Mahnung erforderlich ist.</p>
            <p>2. Cashare sendet eine schriftliche Mahnung und setzt eine Zahlungsfrist.</p>
            <p>3. Unbezahlte Beträge werden nach Fristablauf sofort fällig.</p>
            <p>4. Inkassoverfahren werden eingeleitet, wenn keine Zahlung eingeht.</p>
            <p>5. Der Darlehensnehmer trägt Verzugszinsen und Inkassogebühren gemäss Gebührenordnung.</p>
          `,
        },
        {
          title: "III. Haftungsbeschränkung",
          content: `
            <p><strong>Cashare haftet nur für von Cashare absichtlich oder grobfahrlässig herbeigeführte direkte Schäden.</strong></p>
            <p>Keine Haftung besteht für:</p>
            <ul>
              <li>Indirekte Schäden oder Folgeschäden</li>
              <li>Leistungen Dritter</li>
              <li>Verhalten von Mitgliedern gegenüber anderen</li>
              <li>Richtigkeit der Bonitätsprüfung</li>
              <li>Überprüfung der Zahlungsfähigkeit</li>
              <li>Verluste der Finanzgeber/Anleger durch Zahlungsausfälle</li>
              <li>Inkassounternehmen</li>
              <li>Gefälschte Unterlagen</li>
              <li>Technische Ausfälle, Netzwerkprobleme, Übertragungsfehler, Systeminkompatibilität, Malware, unerlaubter Zugriff</li>
            </ul>
          `,
        },
        {
          title: "IV. Schadloshaltung",
          content: `
            <p>Das Mitglied hält Cashare von Ansprüchen Dritter schadlos, die aus dem Verhalten des Mitglieds entstehen, einschliesslich Kosten der Rechtsverteidigung.</p>
          `,
        },
        {
          title: "V. Teilungültigkeit",
          content: `
            <p>Ungültige Bestimmungen werden durch wirtschaftlich gleichwertige Alternativen ersetzt; der Rest bleibt unberührt.</p>
          `,
        },
        {
          title: "VI. Übertragbarkeit",
          content: `
            <p>1. Cashare kann Rechte und Pflichten an Dritte übertragen.</p>
            <p>2. Mitglieder können ihre Mitgliedschaft oder damit verbundene Rechte und Pflichten nicht übertragen.</p>
          `,
        },
        {
          title: "VII. Änderungen dieser AGB",
          content: `
            <p>1. Cashare kann diese AGB jederzeit ändern.</p>
            <p>2. Geänderte AGB werden 15 Tage vor Inkrafttreten zugestellt.</p>
            <p>3. Kein Widerspruch innerhalb von 10 Tagen gilt als Zustimmung.</p>
          `,
        },
        {
          title: "VIII. Verknüpfte Websites",
          content: `
            <p>Cashare kontrolliert keine externen Websites, übernimmt keine Garantie für deren Inhalte/Produkte und benötigt vorgängige schriftliche Zustimmung für externe Verlinkungen.</p>
          `,
        },
        {
          title: "IX. Vertraulichkeit und Verschlüsselung",
          content: `
            <p>Daten werden über unkontrollierte öffentliche Netzwerke ausgetauscht; Verschlüsselung garantiert keinen vollständigen Schutz; Daten können abgefangen werden.</p>
          `,
        },
        {
          title: "X. Aufzeichnungen",
          content: `
            <p>Cashare zeichnet Website-Aktivitäten für Sicherheit, Systemverwaltung und Marketinganalyse gemäss Datenschutzerklärung auf.</p>
          `,
        },
        {
          title: "XI. Immaterialgüterrechte",
          content: `
            <p>1. Inhalte sind urheberrechtlich geschützt; persönliche/private Nutzung mit Quellenangabe erlaubt.</p>
            <p>2. Öffentliche/kommerzielle Nutzung ohne schriftliche Zustimmung verboten.</p>
            <p>3. Cashare, Cashare Platform, Logo sind eingetragene Marken.</p>
            <p>4. Vervielfältigung/Nutzung der Marken ohne Zustimmung verboten.</p>
          `,
        },
        {
          title: "XII. Anwendbares Recht, Gerichtsstand",
          content: `
            <p>1. Es gilt Schweizer Recht; UN-Kaufrecht ist ausgeschlossen.</p>
            <p>2. Gilt auch für Einwohner Liechtensteins.</p>
            <p>3. <strong>Der ausschliessliche Gerichtsstand für alle Rechtsstreitigkeiten ist Zug.</strong></p>
            <p>4. Die Bestimmungen des Konsumkreditgesetzes (KKG) gelten, wo anwendbar.</p>
          `,
        },
      ],
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      subtitle: "Informationen zum Schutz Ihrer persönlichen Daten",
      sections: [
        {
          title: "1. Einleitung",
          content: `
            <p>Die Cashare AG verpflichtet sich zum Schutz Ihrer persönlichen Daten gemäss dem Schweizer Datenschutzgesetz (DSG) und der EU-Datenschutz-Grundverordnung (DSGVO).</p>
            <p>Die Nutzung unserer Website erfordert in der Regel keine Angabe personenbezogener Daten. Für die Kontoeröffnung und Kreditdienstleistungen ist jedoch die Erhebung bestimmter Daten erforderlich.</p>
          `,
        },
        {
          title: "2. Verantwortliche Stelle",
          content: `
            <p><strong>Cashare AG</strong><br>
            Bösch 73<br>
            CH-6331 Hünenberg<br>
            Schweiz</p>
            <p>E-Mail: <a href="mailto:datenschutz@cashare.ch">datenschutz@cashare.ch</a></p>
          `,
        },
        {
          title: "3. Datenerhebung",
          content: `
            <h4>Automatisch erhobene Daten</h4>
            <p>Bei jedem Besuch unserer Website werden automatisch folgende Daten in Server-Logfiles gespeichert:</p>
            <ul>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>IP-Adresse (anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
            </ul>
            <p>Diese Daten werden ausschliesslich für Sicherheitszwecke und zur Optimierung der Website verwendet.</p>

            <h4>Bei Registrierung</h4>
            <p>Bei der Kontoeröffnung erheben wir die für die Vertragsabwicklung erforderlichen Daten wie Name, Adresse, E-Mail und Telefonnummer.</p>
          `,
        },
        {
          title: "4. Cookies",
          content: `
            <p>Unsere Website verwendet Cookies zur Optimierung des Nutzererlebnisses. Sie können Cookies in Ihren Browsereinstellungen deaktivieren. Weitere Informationen finden Sie in unserer <a href="/cookies">Cookie-Richtlinie</a>.</p>
          `,
        },
        {
          title: "5. Bonitätsprüfung",
          content: `
            <p>Für die Kreditprüfung werden Ihre Daten an folgende Auskunfteien übermittelt:</p>
            <ul>
              <li>ZEK (Zentralstelle für Kreditinformation)</li>
              <li>IKO (Informationsstelle für Konsumkredit)</li>
              <li>Bisnode</li>
              <li>CRIF</li>
            </ul>
          `,
        },
        {
          title: "6. Ihre Rechte",
          content: `
            <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
            <ul>
              <li><strong>Auskunftsrecht:</strong> Sie können jederzeit Auskunft über Ihre gespeicherten Daten verlangen.</li>
              <li><strong>Berichtigungsrecht:</strong> Sie können die Korrektur unrichtiger Daten verlangen.</li>
              <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen ("Recht auf Vergessenwerden").</li>
              <li><strong>Datenübertragbarkeit:</strong> Sie können Ihre Daten in einem gängigen Format erhalten.</li>
              <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
            </ul>
            <p>Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter <a href="mailto:datenschutz@cashare.ch">datenschutz@cashare.ch</a>.</p>
          `,
        },
        {
          title: "7. Datensicherheit",
          content: `
            <p>Alle Datenübertragungen sind durch 256-Bit SSL-Verschlüsselung geschützt. Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor unbefugtem Zugriff zu schützen.</p>
          `,
        },
        {
          title: "8. Aufbewahrung",
          content: `
            <p>Ihre Daten werden nur so lange gespeichert, wie es für die Erfüllung der vertraglichen Pflichten erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben.</p>
          `,
        },
      ],
    },
    impressum: {
      title: "Impressum",
      subtitle: "Rechtliche Informationen über die Cashare AG",
      sections: [
        {
          title: "Unternehmen",
          content: `
            <p><strong>Cashare AG</strong><br>
            Aktiengesellschaft nach schweizerischem Recht</p>

            <h4>Adresse</h4>
            <p>Bösch 73<br>
            CH-6331 Hünenberg<br>
            Schweiz</p>
          `,
        },
        {
          title: "Kontakt",
          content: `
            <p><strong>Telefon:</strong> <a href="tel:+41415584888">+41 41 558 48 88</a></p>
            <p><strong>E-Mail:</strong> <a href="mailto:info@cashare.ch">info@cashare.ch</a></p>
            <p><strong>Support:</strong> <a href="mailto:support@cashare.ch">support@cashare.ch</a></p>
            <p><strong>Website:</strong> <a href="https://www.cashare.ch">www.cashare.ch</a></p>
          `,
        },
        {
          title: "Handelsregister",
          content: `
            <p><strong>Registergericht:</strong> Kantonsgericht Zug (ZG)</p>
            <p><strong>Registernummer:</strong> CH-170.3.031.740-7</p>
            <p><strong>UID:</strong> CHE-114.036.826</p>
          `,
        },
        {
          title: "Bankverbindung",
          content: `
            <p><strong>IBAN:</strong> CH06 0900 0000 6076 2123 0</p>
            <p><strong>BIC:</strong> POFICHBEXXX</p>
          `,
        },
        {
          title: "Geschäftsleitung",
          content: `
            <ul>
              <li>Michael Borter</li>
              <li>Roger Müller</li>
              <li>Delia Aellen</li>
            </ul>
          `,
        },
        {
          title: "Regulatorische Mitgliedschaften",
          content: `
            <ul>
              <li>Mitglied der SRO Polyreg</li>
              <li>Lizenzierter Konsumkreditgeber (Volkswirtschaftsdirektion Kanton Zug)</li>
              <li>Zugelassener Finanzintermediär nach Schweizer Geldwäschereigesetz</li>
              <li>Registriert beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB)</li>
            </ul>
          `,
        },
      ],
    },
    cookies: {
      title: "Cookie-Richtlinie",
      subtitle: "Informationen zur Verwendung von Cookies auf unserer Website",
      sections: [
        {
          title: "Was sind Cookies?",
          content: `
            <p>Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen uns, Ihre Präferenzen zu speichern und die Website-Nutzung zu verbessern.</p>
          `,
        },
        {
          title: "Welche Cookies verwenden wir?",
          content: `
            <h4>Notwendige Cookies</h4>
            <p>Diese Cookies sind für den Betrieb der Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugang zu sicheren Bereichen.</p>

            <h4>Analyse-Cookies</h4>
            <p>Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. Die Informationen werden anonymisiert gesammelt.</p>

            <h4>Marketing-Cookies</h4>
            <p>Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten. Sie können auch die Häufigkeit begrenzen, mit der Sie eine Anzeige sehen.</p>
          `,
        },
        {
          title: "Cookie-Verwaltung",
          content: `
            <p>Sie können Cookies über Ihre Browsereinstellungen verwalten:</p>
            <ul>
              <li><strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
              <li><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
              <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies</li>
              <li><strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen</li>
            </ul>
            <p>Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität unserer Website beeinträchtigen kann.</p>
          `,
        },
        {
          title: "Drittanbieter-Cookies",
          content: `
            <p>Wir nutzen Dienste von Drittanbietern, die eigene Cookies setzen können:</p>
            <ul>
              <li><strong>Google Analytics:</strong> Für Website-Analysen</li>
              <li><strong>Facebook Pixel:</strong> Für Marketing-Zwecke</li>
            </ul>
            <p>Diese Drittanbieter haben eigene Datenschutzrichtlinien.</p>
          `,
        },
        {
          title: "Kontakt",
          content: `
            <p>Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns unter <a href="mailto:datenschutz@cashare.ch">datenschutz@cashare.ch</a>.</p>
          `,
        },
      ],
    },
  },
  en: {
    agb: {
      title: "Terms and Conditions",
      subtitle: "Version 1.7 / As of February 1, 2025",
      sections: [
        {
          title: "I. General Provisions",
          content: `
            <h4>1. Scope</h4>
            <p>These Terms and Conditions apply to the use of the Cashare AG crowdlending platform. By registering, you accept these terms in full.</p>

            <h4>2. Registration</h4>
            <p>The platform is open to individuals residing in Switzerland or Liechtenstein and companies based in these countries. A valid Swiss bank account is required.</p>

            <h4>3. Account Management</h4>
            <p>Each account is personal and non-transferable. You are obligated to keep your information up to date. Cashare reserves the right to reject registrations or suspend accounts.</p>

            <h4>4. Identification</h4>
            <p>Identification is done online via video call (fee CHF 5) or by submitting notarized documents.</p>
          `,
        },
        {
          title: "II. Crédit Platform",
          content: `
            <h4>1. Risk Warnings</h4>
            <p><strong>Important:</strong> Lending carries risks, including potential total loss of the entire loan amount. Only invest money you can afford to lose.</p>

            <h4>2. Loan Application</h4>
            <p>Borrowers submit detailed financial information. Cashare performs a creditworthiness assessment. If approved, the loan request is published on the platform.</p>

            <h4>3. Crédit Assessment</h4>
            <p>Cashare obtains data from third parties (ZEK, IKO, Bisnode, CRIF). Ratings are purely indicative and do not constitute binding recommendations.</p>

            <h4>4. Funding Phase</h4>
            <p>Investors submit binding bids at fixed interest rates. First come, first served principle applies. Upon full funding, the contract is automatically concluded.</p>

            <h4>5. Withdrawal Rights</h4>
            <p>Private borrowers have a 14-day withdrawal period. Business customers have a 10-day withdrawal period.</p>

            <h4>6. Payment Processing</h4>
            <p>Monthly payments are made to Cashare's account. Collection procedures are automatically initiated for late payments.</p>
          `,
        },
        {
          title: "III. Limitation of Liability",
          content: `
            <p>Cashare is not liable for:</p>
            <ul>
              <li>The accuracy of crédit assessments</li>
              <li>Borrowers' ability to pay</li>
              <li>Investor losses</li>
              <li>Third-party actions</li>
              <li>Technical failures or transmission errors</li>
            </ul>
            <p>Liability is limited to intent and gross negligence.</p>
          `,
        },
        {
          title: "IV. Data Protection",
          content: `
            <p>Personal data processing is carried out in accordance with our <a href="/en/privacy">Privacy Policy</a>.</p>
          `,
        },
        {
          title: "V. Applicable Law",
          content: `
            <p>Swiss law applies. Exclusive jurisdiction is Zug, Switzerland.</p>
          `,
        },
      ],
    },
    datenschutz: {
      title: "Privacy Policy",
      subtitle: "Information about the protection of your personal data",
      sections: [
        {
          title: "1. Introduction",
          content: `
            <p>Cashare AG is committed to protecting your personal data in accordance with the Swiss Data Protection Act (DSG) and the EU General Data Protection Régulation (GDPR).</p>
            <p>Using our website generally does not require personal data. However, account creation and crédit services require the collection of certain data.</p>
          `,
        },
        {
          title: "2. Data Controller",
          content: `
            <p><strong>Cashare AG</strong><br>
            Bösch 73<br>
            CH-6331 Hünenberg<br>
            Switzerland</p>
            <p>Email: <a href="mailto:privacy@cashare.ch">privacy@cashare.ch</a></p>
          `,
        },
        {
          title: "3. Data Collection",
          content: `
            <h4>Automatically Collected Data</h4>
            <p>Each visit to our website automatically stores the following data in server log files:</p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address (anonymized)</li>
              <li>Date and time of access</li>
            </ul>
            <p>This data is used exclusively for security purposes and website optimization.</p>

            <h4>During Registration</h4>
            <p>When opening an account, we collect data necessary for contract processing such as name, address, email and phone number.</p>
          `,
        },
        {
          title: "4. Cookies",
          content: `
            <p>Our website uses cookies to optimize user experience. You can disable cookies in your browser settings. More information can be found in our <a href="/en/cookies">Cookie Policy</a>.</p>
          `,
        },
        {
          title: "5. Crédit Assessment",
          content: `
            <p>For crédit assessment, your data is transmitted to the following crédit bureaus:</p>
            <ul>
              <li>ZEK (Central Crédit Information Office)</li>
              <li>IKO (Consumer Crédit Information Office)</li>
              <li>Bisnode</li>
              <li>CRIF</li>
            </ul>
          `,
        },
        {
          title: "6. Your Rights",
          content: `
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right of access:</strong> You can request information about your stored data at any time.</li>
              <li><strong>Right to rectification:</strong> You can request correction of inaccurate data.</li>
              <li><strong>Right to erasure:</strong> You can request deletion of your data ("right to be forgotten").</li>
              <li><strong>Data portability:</strong> You can receive your data in a common format.</li>
              <li><strong>Right to object:</strong> You can object to the processing of your data.</li>
            </ul>
            <p>To exercise your rights, contact us at <a href="mailto:privacy@cashare.ch">privacy@cashare.ch</a>.</p>
          `,
        },
        {
          title: "7. Data Security",
          content: `
            <p>All data transmissions are protected by 256-bit SSL encryption. We implement technical and organizational measures to protect your data from unauthorized access.</p>
          `,
        },
        {
          title: "8. Retention",
          content: `
            <p>Your data is only stored as long as necessary for fulfilling contractual obligations or as required by legal retention periods.</p>
          `,
        },
      ],
    },
    impressum: {
      title: "Legal Notice",
      subtitle: "Legal information about Cashare AG",
      sections: [
        {
          title: "Company",
          content: `
            <p><strong>Cashare AG</strong><br>
            Stock corporation under Swiss law</p>

            <h4>Address</h4>
            <p>Bösch 73<br>
            CH-6331 Hünenberg<br>
            Switzerland</p>
          `,
        },
        {
          title: "Contact",
          content: `
            <p><strong>Phone:</strong> <a href="tel:+41415584888">+41 41 558 48 88</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@cashare.ch">info@cashare.ch</a></p>
            <p><strong>Support:</strong> <a href="mailto:support@cashare.ch">support@cashare.ch</a></p>
            <p><strong>Website:</strong> <a href="https://www.cashare.ch">www.cashare.ch</a></p>
          `,
        },
        {
          title: "Commercial Register",
          content: `
            <p><strong>Court:</strong> Canton Court Zug (ZG)</p>
            <p><strong>Register number:</strong> CH-170.3.031.740-7</p>
            <p><strong>UID:</strong> CHE-114.036.826</p>
          `,
        },
        {
          title: "Bank Details",
          content: `
            <p><strong>IBAN:</strong> CH06 0900 0000 6076 2123 0</p>
            <p><strong>BIC:</strong> POFICHBEXXX</p>
          `,
        },
        {
          title: "Management",
          content: `
            <ul>
              <li>Michael Borter</li>
              <li>Roger Müller</li>
              <li>Delia Aellen</li>
            </ul>
          `,
        },
        {
          title: "Regulatory Memberships",
          content: `
            <ul>
              <li>Member of SRO Polyreg</li>
              <li>Licensed consumer crédit provider (Economic Directorate Canton Zug)</li>
              <li>Approved financial intermediary under Swiss Anti-Money Laundering Act</li>
              <li>Registered with the Federal Data Protection Commissioner (FDPIC)</li>
            </ul>
          `,
        },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      subtitle: "Information about the use of cookies on our website",
      sections: [
        {
          title: "What are Cookies?",
          content: `
            <p>Cookies are small text files stored on your device when you visit our website. They help us save your preferences and improve website usage.</p>
          `,
        },
        {
          title: "What Cookies Do We Use?",
          content: `
            <h4>Necessary Cookies</h4>
            <p>These cookies are essential for website operation. They enable basic functions like page navigation and access to secure areas.</p>

            <h4>Analytics Cookies</h4>
            <p>These cookies help us understand how visitors interact with our website. Information is collected anonymously.</p>

            <h4>Marketing Cookies</h4>
            <p>These cookies are used to make advertising more relevant to you. They can also limit how often you see an ad.</p>
          `,
        },
        {
          title: "Cookie Management",
          content: `
            <p>You can manage cookies through your browser settings:</p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Settings → Privacy → Cookies</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>
            <p>Please note that disabling cookies may affect website functionality.</p>
          `,
        },
        {
          title: "Third-Party Cookies",
          content: `
            <p>We use third-party services that may set their own cookies:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics</li>
              <li><strong>Facebook Pixel:</strong> For marketing purposes</li>
            </ul>
            <p>These third parties have their own privacy policies.</p>
          `,
        },
        {
          title: "Contact",
          content: `
            <p>For questions about our cookie policy, contact us at <a href="mailto:privacy@cashare.ch">privacy@cashare.ch</a>.</p>
          `,
        },
      ],
    },
  },
  fr: {
    agb: {
      title: "Conditions Générales (CGV)",
      subtitle: "Version 1.7 / En vigueur depuis le 1er février 2025",
      sections: [
        {
          title: "I. Dispositions Générales",
          content: `
            <h4>1. Champ d'application</h4>
            <p>Les présentes Conditions Générales s'appliquent à l'utilisation de la plateforme de crowdlending de Cashare AG. En vous inscrivant, vous acceptez ces conditions dans leur intégralité.</p>

            <h4>2. Inscription</h4>
            <p>La plateforme est ouverte aux personnes physiques résidant en Suisse ou au Liechtenstein ainsi qu'aux entreprises basées dans ces pays. Un compte bancaire suisse valide est requis.</p>

            <h4>3. Gestion du compte</h4>
            <p>Chaque compte est personnel et non transférable. Vous êtes tenu de maintenir vos informations à jour. Cashare se réserve le droit de refuser des inscriptions ou de suspendre des comptes.</p>

            <h4>4. Identification</h4>
            <p>L'identification se fait en ligne via appel vidéo (frais CHF 5) ou par soumission de documents notariés.</p>
          `,
        },
        {
          title: "II. Plateforme de Crédit",
          content: `
            <h4>1. Avertissements sur les risques</h4>
            <p><strong>Important :</strong> Le prêt comporte des risques, y compris la perte totale potentielle du montant du prêt. N'investissez que l'argent que vous pouvez vous permettre de perdre.</p>

            <h4>2. Demande de crédit</h4>
            <p>Les emprunteurs soumettent des informations financières détaillées. Cashare effectue une évaluation de solvabilité. En cas d'approbation, la demande de crédit est publiée sur la plateforme.</p>

            <h4>3. Évaluation de crédit</h4>
            <p>Cashare obtient des données de tiers (ZEK, IKO, Bisnode, CRIF). Les notations sont purement indicatives et ne constituent pas des recommandations contraignantes.</p>

            <h4>4. Phase de financement</h4>
            <p>Les investisseurs soumettent des offres contraignantes à des taux d'intérêt fixes. Le principe du premier arrivé, premier servi s'applique. Une fois le financement complet, le contrat est automatiquement conclu.</p>

            <h4>5. Droit de rétractation</h4>
            <p>Les emprunteurs privés ont un délai de rétractation de 14 jours. Les clients professionnels ont un délai de 10 jours.</p>

            <h4>6. Traitement des paiements</h4>
            <p>Les paiements mensuels sont effectués sur le compte de Cashare. Des procédures de recouvrement sont automatiquement initiées en cas de retard de paiement.</p>
          `,
        },
        {
          title: "III. Limitation de Responsabilité",
          content: `
            <p>Cashare n'est pas responsable de :</p>
            <ul>
              <li>L'exactitude des évaluations de crédit</li>
              <li>La capacité de paiement des emprunteurs</li>
              <li>Les pertes des investisseurs</li>
              <li>Les actions de tiers</li>
              <li>Les pannes techniques ou erreurs de transmission</li>
            </ul>
            <p>La responsabilité est limitée à l'intention et à la négligence grave.</p>
          `,
        },
        {
          title: "IV. Protection des Données",
          content: `
            <p>Le traitement des données personnelles est effectué conformément à notre <a href="/fr/confidentialite">Politique de Confidentialité</a>.</p>
          `,
        },
        {
          title: "V. Droit Applicable",
          content: `
            <p>Le droit suisse s'applique. La juridiction exclusive est Zoug, Suisse.</p>
          `,
        },
      ],
    },
    datenschutz: {
      title: "Politique de Confidentialité",
      subtitle: "Informations sur la protection de vos données personnelles",
      sections: [
        {
          title: "1. Introduction",
          content: `
            <p>Cashare AG s'engage à protéger vos données personnelles conformément à la Loi fédérale sur la protection des données (LPD) et au Règlement général sur la protection des données (RGPD) de l'UE.</p>
            <p>L'utilisation de notre site web ne nécessite généralement pas de données personnelles. Cependant, la création de compte et les services de crédit nécessitent la collecte de certaines données.</p>
          `,
        },
        {
          title: "2. Responsable du Traitement",
          content: `
            <p><strong>Cashare AG</strong><br>
            Bösch 73<br>
            CH-6331 Hünenberg<br>
            Suisse</p>
            <p>Email : <a href="mailto:privacy@cashare.ch">privacy@cashare.ch</a></p>
          `,
        },
        {
          title: "3. Collecte de Données",
          content: `
            <h4>Données collectées automatiquement</h4>
            <p>Chaque visite sur notre site web enregistre automatiquement les données suivantes dans les fichiers journaux du serveur :</p>
            <ul>
              <li>Type et version du navigateur</li>
              <li>Système d'exploitation</li>
              <li>Adresse IP (anonymisée)</li>
              <li>Date et heure d'accès</li>
            </ul>
            <p>Ces données sont utilisées exclusivement à des fins de sécurité et d'optimisation du site web.</p>

            <h4>Lors de l'inscription</h4>
            <p>Lors de l'ouverture d'un compte, nous collectons les données nécessaires au traitement du contrat telles que nom, adresse, email et numéro de téléphone.</p>
          `,
        },
        {
          title: "4. Cookies",
          content: `
            <p>Notre site web utilise des cookies pour optimiser l'expérience utilisateur. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Plus d'informations dans notre <a href="/fr/cookies">Politique de Cookies</a>.</p>
          `,
        },
        {
          title: "5. Évaluation de Crédit",
          content: `
            <p>Pour l'évaluation de crédit, vos données sont transmises aux bureaux de crédit suivants :</p>
            <ul>
              <li>ZEK (Bureau central d'information sur le crédit)</li>
              <li>IKO (Bureau d'information sur le crédit à la consommation)</li>
              <li>Bisnode</li>
              <li>CRIF</li>
            </ul>
          `,
        },
        {
          title: "6. Vos Droits",
          content: `
            <p>Vous disposez des droits suivants concernant vos données personnelles :</p>
            <ul>
              <li><strong>Droit d'accès :</strong> Vous pouvez demander des informations sur vos données stockées à tout moment.</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes.</li>
              <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données ("droit à l'oubli").</li>
              <li><strong>Portabilité des données :</strong> Vous pouvez recevoir vos données dans un format courant.</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données.</li>
            </ul>
            <p>Pour exercer vos droits, contactez-nous à <a href="mailto:privacy@cashare.ch">privacy@cashare.ch</a>.</p>
          `,
        },
        {
          title: "7. Sécurité des Données",
          content: `
            <p>Toutes les transmissions de données sont protégées par un cryptage SSL 256 bits. Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé.</p>
          `,
        },
        {
          title: "8. Conservation",
          content: `
            <p>Vos données ne sont conservées que le temps nécessaire à l'exécution des obligations contractuelles ou selon les délais de conservation légaux.</p>
          `,
        },
      ],
    },
    impressum: {
      title: "Mentions Légales",
      subtitle: "Informations juridiques sur Cashare AG",
      sections: [
        {
          title: "Entreprise",
          content: `
            <p><strong>Cashare AG</strong><br>
            Société anonyme de droit suisse</p>

            <h4>Adresse</h4>
            <p>Bösch 73<br>
            CH-6331 Hünenberg<br>
            Suisse</p>
          `,
        },
        {
          title: "Contact",
          content: `
            <p><strong>Téléphone :</strong> <a href="tel:+41415584888">+41 41 558 48 88</a></p>
            <p><strong>Email :</strong> <a href="mailto:info@cashare.ch">info@cashare.ch</a></p>
            <p><strong>Support :</strong> <a href="mailto:support@cashare.ch">support@cashare.ch</a></p>
            <p><strong>Site web :</strong> <a href="https://www.cashare.ch">www.cashare.ch</a></p>
          `,
        },
        {
          title: "Registre du Commerce",
          content: `
            <p><strong>Tribunal :</strong> Tribunal cantonal de Zoug (ZG)</p>
            <p><strong>Numéro de registre :</strong> CH-170.3.031.740-7</p>
            <p><strong>IDE :</strong> CHE-114.036.826</p>
          `,
        },
        {
          title: "Coordonnées Bancaires",
          content: `
            <p><strong>IBAN :</strong> CH06 0900 0000 6076 2123 0</p>
            <p><strong>BIC :</strong> POFICHBEXXX</p>
          `,
        },
        {
          title: "Direction",
          content: `
            <ul>
              <li>Michael Borter</li>
              <li>Roger Müller</li>
              <li>Delia Aellen</li>
            </ul>
          `,
        },
        {
          title: "Affiliations Réglementaires",
          content: `
            <ul>
              <li>Membre de l'OAR Polyreg</li>
              <li>Prêteur agréé (Direction économique du canton de Zoug)</li>
              <li>Intermédiaire financier agréé selon la loi suisse sur le blanchiment d'argent</li>
              <li>Enregistré auprès du Préposé fédéral à la protection des données (PFPDT)</li>
            </ul>
          `,
        },
      ],
    },
    cookies: {
      title: "Politique de Cookies",
      subtitle: "Informations sur l'utilisation des cookies sur notre site web",
      sections: [
        {
          title: "Que sont les Cookies ?",
          content: `
            <p>Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez notre site web. Ils nous aident à enregistrer vos préférences et à améliorer l'utilisation du site.</p>
          `,
        },
        {
          title: "Quels Cookies Utilisons-nous ?",
          content: `
            <h4>Cookies Nécessaires</h4>
            <p>Ces cookies sont essentiels au fonctionnement du site web. Ils permettent des fonctions de base comme la navigation et l'accès aux zones sécurisées.</p>

            <h4>Cookies d'Analyse</h4>
            <p>Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web. Les informations sont collectées de manière anonyme.</p>

            <h4>Cookies Marketing</h4>
            <p>Ces cookies sont utilisés pour rendre la publicité plus pertinente pour vous. Ils peuvent également limiter la fréquence d'affichage d'une annonce.</p>
          `,
        },
        {
          title: "Gestion des Cookies",
          content: `
            <p>Vous pouvez gérer les cookies via les paramètres de votre navigateur :</p>
            <ul>
              <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
              <li><strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies</li>
              <li><strong>Safari :</strong> Paramètres → Confidentialité → Cookies</li>
              <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
            </ul>
            <p>Veuillez noter que la désactivation des cookies peut affecter la fonctionnalité du site web.</p>
          `,
        },
        {
          title: "Cookies Tiers",
          content: `
            <p>Nous utilisons des services tiers qui peuvent définir leurs propres cookies :</p>
            <ul>
              <li><strong>Google Analytics :</strong> Pour l'analyse du site web</li>
              <li><strong>Facebook Pixel :</strong> À des fins marketing</li>
            </ul>
            <p>Ces tiers ont leurs propres politiques de confidentialité.</p>
          `,
        },
        {
          title: "Contact",
          content: `
            <p>Pour toute question concernant notre politique de cookies, contactez-nous à <a href="mailto:privacy@cashare.ch">privacy@cashare.ch</a>.</p>
          `,
        },
      ],
    },
  },
};

export function Legal({ locale, page }: LegalProps) {
  const t = content[locale][page];

  return (
    <div class="legal-page">
      <div class="legal-page__header">
        <div class="container container--sm">
          <h1 class="legal-page__title">{t.title}</h1>
          <p class="legal-page__subtitle">{t.subtitle}</p>
        </div>
      </div>

      <div class="legal-page__content">
        <div class="container container--sm">
          {t.sections.map((section, index) => (
            <section key={index} class="legal-section">
              <h2 class="legal-section__title">{section.title}</h2>
              <div
                class="legal-section__content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
