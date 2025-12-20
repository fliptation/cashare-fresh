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
      subtitle: "Version 1.7 / Stand: 1. Februar 2025",
      sections: [
        {
          title: "I. Allgemeine Bestimmungen",
          content: `
            <h4>1. Geltungsbereich</h4>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Crowdlending-Plattform der Cashare AG. Mit der Registrierung akzeptieren Sie diese Bedingungen vollumfänglich.</p>

            <h4>2. Registrierung</h4>
            <p>Die Plattform steht natürlichen Personen mit Wohnsitz in der Schweiz oder Liechtenstein sowie Unternehmen mit Sitz in diesen Ländern offen. Eine gültige Schweizer Bankverbindung ist erforderlich.</p>

            <h4>3. Kontoverwaltung</h4>
            <p>Jedes Konto ist persönlich und nicht übertragbar. Sie sind verpflichtet, Ihre Angaben aktuell zu halten. Cashare behält sich das Recht vor, Registrierungen abzulehnen oder Konten zu sperren.</p>

            <h4>4. Identifikation</h4>
            <p>Die Identifikation erfolgt online via Videoanruf (Gebühr CHF 5) oder durch Einreichung notariell beglaubigter Dokumente.</p>
          `,
        },
        {
          title: "II. Kreditplattform",
          content: `
            <h4>1. Risikohinweise</h4>
            <p><strong>Wichtig:</strong> Die Kreditvergabe birgt Risiken, einschliesslich des möglichen Totalverlusts des gesamten Kreditbetrags. Investieren Sie nur Geld, dessen Verlust Sie verkraften können.</p>

            <h4>2. Kreditantrag</h4>
            <p>Kreditnehmer reichen detaillierte Finanzinformationen ein. Cashare führt eine Bonitätsprüfung durch. Bei positiver Bewertung wird der Kreditantrag auf der Plattform publiziert.</p>

            <h4>3. Bonitätsprüfung</h4>
            <p>Cashare bezieht Daten von Drittanbietern (ZEK, IKO, Bisnode, CRIF). Die Ratings sind rein indikativ und stellen keine verbindliche Empfehlung dar.</p>

            <h4>4. Finanzierungsphase</h4>
            <p>Investoren geben verbindliche Gebote zu festen Zinssätzen ab. Es gilt das Prinzip "first come, first served". Bei vollständiger Finanzierung wird der Vertrag automatisch abgeschlossen.</p>

            <h4>5. Widerrufsrecht</h4>
            <p>Private Kreditnehmer haben ein 14-tägiges Widerrufsrecht. Geschäftskunden haben ein 10-tägiges Widerrufsrecht.</p>

            <h4>6. Zahlungsabwicklung</h4>
            <p>Monatliche Zahlungen werden an das Konto von Cashare geleistet. Bei Zahlungsverzug werden automatisch Inkassoverfahren eingeleitet.</p>
          `,
        },
        {
          title: "III. Haftungsbeschränkung",
          content: `
            <p>Cashare haftet nicht für:</p>
            <ul>
              <li>Die Richtigkeit der Bonitätsprüfung</li>
              <li>Die Zahlungsfähigkeit der Kreditnehmer</li>
              <li>Verluste der Investoren</li>
              <li>Handlungen Dritter</li>
              <li>Technische Ausfälle oder Übertragungsfehler</li>
            </ul>
            <p>Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.</p>
          `,
        },
        {
          title: "IV. Datenschutz",
          content: `
            <p>Die Verarbeitung personenbezogener Daten erfolgt gemäss unserer <a href="/datenschutzerklaerung">Datenschutzerklärung</a>.</p>
          `,
        },
        {
          title: "V. Anwendbares Recht",
          content: `
            <p>Es gilt Schweizer Recht. Ausschliesslicher Gerichtsstand ist Zug, Schweiz.</p>
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
            <p>Alle Datenübertragungen sind durch 256-Bit SSL-Verschlüsselung geschützt. Wir setzen technische und organisatorische Massnahmen ein, um Ihre Daten vor unbefugtem Zugriff zu schützen.</p>
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
          title: "II. Credit Platform",
          content: `
            <h4>1. Risk Warnings</h4>
            <p><strong>Important:</strong> Lending carries risks, including potential total loss of the entire loan amount. Only invest money you can afford to lose.</p>

            <h4>2. Loan Application</h4>
            <p>Borrowers submit detailed financial information. Cashare performs a creditworthiness assessment. If approved, the loan request is published on the platform.</p>

            <h4>3. Credit Assessment</h4>
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
              <li>The accuracy of credit assessments</li>
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
            <p>Cashare AG is committed to protecting your personal data in accordance with the Swiss Data Protection Act (DSG) and the EU General Data Protection Regulation (GDPR).</p>
            <p>Using our website generally does not require personal data. However, account creation and credit services require the collection of certain data.</p>
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
          title: "5. Credit Assessment",
          content: `
            <p>For credit assessment, your data is transmitted to the following credit bureaus:</p>
            <ul>
              <li>ZEK (Central Credit Information Office)</li>
              <li>IKO (Consumer Credit Information Office)</li>
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
              <li>Licensed consumer credit provider (Economic Directorate Canton Zug)</li>
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
