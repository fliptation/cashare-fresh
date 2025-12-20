#!/usr/bin/env -S deno run --allow-read --allow-write
/**
 * Generate TypeScript types from translation JSON files
 *
 * Run: deno task i18n:types
 *
 * This script:
 * 1. Reads de.json as the source of truth
 * 2. Generates strict TypeScript interfaces
 * 3. Validates all locales have matching keys
 */

const LOCALES = ["de", "en", "fr"] as const;
const SOURCE_LOCALE = "de";
const LOCALES_DIR = new URL("./locales/", import.meta.url).pathname;
const TYPES_FILE = new URL("./types.ts", import.meta.url).pathname;

interface TranslationObject {
  [key: string]: string | TranslationObject;
}

function toPascalCase(str: string): string {
  return str
    .split(/[\s-_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function generateInterface(
  name: string,
  obj: Record<string, string>
): string {
  const keys = Object.keys(obj).sort();
  const properties = keys
    .map((key) => {
      // Quote keys with spaces or special chars
      const safeKey = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key) ? key : `"${key}"`;
      return `  ${safeKey}: string;`;
    })
    .join("\n");

  return `export interface ${name}Translations {\n${properties}\n}`;
}

async function loadTranslations(
  locale: string
): Promise<TranslationObject> {
  const path = `${LOCALES_DIR}${locale}.json`;
  const content = await Deno.readTextFile(path);
  return JSON.parse(content);
}

function getKeys(obj: Record<string, string>): Set<string> {
  return new Set(Object.keys(obj));
}

function validateLocales(
  source: TranslationObject,
  translations: Map<string, TranslationObject>
): string[] {
  const errors: string[] = [];

  for (const [namespace, sourceKeys] of Object.entries(source)) {
    const sourceKeySet = getKeys(sourceKeys as Record<string, string>);

    for (const [locale, localeTranslations] of translations) {
      if (locale === SOURCE_LOCALE) continue;

      const localeNamespace = localeTranslations[namespace] as
        | Record<string, string>
        | undefined;

      if (!localeNamespace) {
        errors.push(`Missing namespace "${namespace}" in ${locale}.json`);
        continue;
      }

      const localeKeySet = getKeys(localeNamespace);

      // Check for missing keys
      for (const key of sourceKeySet) {
        if (!localeKeySet.has(key)) {
          errors.push(`Missing key "${namespace}.${key}" in ${locale}.json`);
        }
      }

      // Check for extra keys
      for (const key of localeKeySet) {
        if (!sourceKeySet.has(key)) {
          errors.push(`Extra key "${namespace}.${key}" in ${locale}.json`);
        }
      }
    }
  }

  return errors;
}

async function main() {
  console.log("🔍 Loading translations...");

  // Load all translations
  const translations = new Map<string, TranslationObject>();
  for (const locale of LOCALES) {
    translations.set(locale, await loadTranslations(locale));
  }

  const source = translations.get(SOURCE_LOCALE)!;
  const namespaces = Object.keys(source).sort();

  // Validate all locales have same keys
  console.log("✅ Validating translations...");
  const errors = validateLocales(source, translations);

  if (errors.length > 0) {
    console.error("\n❌ Validation errors:");
    errors.forEach((e) => console.error(`   ${e}`));
    console.error("\nFix these errors before regenerating types.\n");
    Deno.exit(1);
  }

  console.log("📝 Generating types...");

  // Generate type file content
  const interfaces = namespaces.map((ns) =>
    generateInterface(toPascalCase(ns), source[ns] as Record<string, string>)
  );

  const translationsInterface = `export interface Translations {
${namespaces.map((ns) => `  ${ns}: ${toPascalCase(ns)}Translations;`).join("\n")}
}`;

  const namespaceType = `export type TranslationNamespace =
${namespaces.map((ns) => `  | "${ns}"`).join("\n")};`;

  const translationKeyType = `export type TranslationKey<N extends TranslationNamespace> =
${namespaces
  .map(
    (ns, i) =>
      `  ${i === 0 ? "" : ": "}N extends "${ns}"\n    ? keyof ${toPascalCase(ns)}Translations`
  )
  .join("\n")}
    : never;`;

  const output = `/**
 * i18n Type Definitions
 *
 * AUTO-GENERATED - DO NOT EDIT
 * Run \`deno task i18n:types\` to regenerate
 */

export type Locale = "de" | "en" | "fr";

${namespaceType}

${interfaces.join("\n\n")}

${translationsInterface}

${translationKeyType}
`;

  await Deno.writeTextFile(TYPES_FILE, output);
  console.log(`✨ Generated ${TYPES_FILE}`);
  console.log(`   ${namespaces.length} namespaces`);
  console.log(
    `   ${Object.values(source).reduce(
      (acc, ns) => acc + Object.keys(ns as object).length,
      0
    )} translation keys`
  );
}

main();
