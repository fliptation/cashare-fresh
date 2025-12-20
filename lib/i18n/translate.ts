#!/usr/bin/env -S deno run --allow-read --allow-write --allow-env --allow-net

/**
 * Translation Agent
 *
 * Translates all i18n keys from German (source of truth) to English and French.
 * Uses the Anthropic API for high-quality translations.
 *
 * Usage:
 *   deno task translate           # Translate missing/changed keys
 *   deno task translate --all     # Force retranslate everything
 *   deno task translate --dry-run # Preview changes without writing
 */

import Anthropic from "npm:@anthropic-ai/sdk@0.39.0";

const LOCALES_DIR = new URL("./locales/", import.meta.url).pathname;
const SOURCE_LOCALE = "de";
const TARGET_LOCALES = ["en", "fr"] as const;

type Translations = Record<string, Record<string, string>>;

// Language names for prompts
const LANGUAGE_NAMES: Record<string, string> = {
  de: "German",
  en: "English",
  fr: "French",
};

/**
 * Load translations from JSON file
 */
async function loadTranslations(locale: string): Promise<Translations> {
  const path = `${LOCALES_DIR}${locale}.json`;
  try {
    const content = await Deno.readTextFile(path);
    return JSON.parse(content);
  } catch {
    return {};
  }
}

/**
 * Save translations to JSON file
 */
async function saveTranslations(
  locale: string,
  translations: Translations
): Promise<void> {
  const path = `${LOCALES_DIR}${locale}.json`;
  const content = JSON.stringify(translations, null, 2) + "\n";
  await Deno.writeTextFile(path, content);
}

/**
 * Find keys that need translation
 */
function findMissingKeys(
  source: Translations,
  target: Translations,
  forceAll: boolean
): Array<{ namespace: string; key: string; value: string }> {
  const missing: Array<{ namespace: string; key: string; value: string }> = [];

  for (const [namespace, keys] of Object.entries(source)) {
    for (const [key, value] of Object.entries(keys)) {
      const targetValue = target[namespace]?.[key];

      // Skip if target exists and we're not forcing retranslation
      if (targetValue && !forceAll) {
        continue;
      }

      missing.push({ namespace, key, value });
    }
  }

  return missing;
}

/**
 * Batch translate using Anthropic API
 */
async function translateBatch(
  client: Anthropic,
  items: Array<{ namespace: string; key: string; value: string }>,
  targetLocale: string
): Promise<Map<string, Map<string, string>>> {
  if (items.length === 0) {
    return new Map();
  }

  const targetLanguage = LANGUAGE_NAMES[targetLocale];

  // Build the prompt with all items
  const itemsList = items
    .map(
      (item, i) =>
        `${i + 1}. [${item.namespace}.${item.key}]: "${item.value}"`
    )
    .join("\n");

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `You are a professional translator for a Swiss fintech company called Cashare (peer-to-peer lending platform).

Translate the following German UI texts to ${targetLanguage}. Maintain:
- Professional, trustworthy tone appropriate for financial services
- Consistent terminology (e.g., "Kredit" = "loan" in EN, "crédit" in FR)
- Proper formatting (keep placeholders, punctuation style)
- Swiss context (CHF currency, Swiss German expressions if relevant)

German texts to translate:
${itemsList}

Respond ONLY with a JSON object mapping the index numbers to translations:
{
  "1": "translated text 1",
  "2": "translated text 2",
  ...
}

No explanations, just the JSON.`,
      },
    ],
  });

  // Parse response
  const content = response.content[0];
  if (content.type !== "text") {
    throw new Error("Unexpected response type");
  }

  let parsed: Record<string, string>;
  try {
    // Extract JSON from response (handle potential markdown code blocks)
    let jsonStr = content.text.trim();
    if (jsonStr.startsWith("```")) {
      jsonStr = jsonStr.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }
    parsed = JSON.parse(jsonStr);
  } catch (e) {
    console.error("Failed to parse response:", content.text);
    throw e;
  }

  // Build result map
  const result = new Map<string, Map<string, string>>();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const translation = parsed[String(i + 1)];

    if (!translation) {
      console.warn(`Missing translation for ${item.namespace}.${item.key}`);
      continue;
    }

    if (!result.has(item.namespace)) {
      result.set(item.namespace, new Map());
    }
    result.get(item.namespace)!.set(item.key, translation);
  }

  return result;
}

/**
 * Apply translations to target object
 */
function applyTranslations(
  target: Translations,
  translations: Map<string, Map<string, string>>,
  source: Translations
): Translations {
  // Start with a copy maintaining source structure/order
  const result: Translations = {};

  for (const namespace of Object.keys(source)) {
    result[namespace] = { ...target[namespace] };

    // Apply new translations
    const nsTranslations = translations.get(namespace);
    if (nsTranslations) {
      for (const [key, value] of nsTranslations) {
        result[namespace][key] = value;
      }
    }
  }

  return result;
}

/**
 * Main translation function
 */
async function main() {
  const args = Deno.args;
  const forceAll = args.includes("--all");
  const dryRun = args.includes("--dry-run");

  console.log("🌍 Cashare Translation Agent\n");

  // Check for API key
  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    console.error("❌ ANTHROPIC_API_KEY environment variable is required");
    console.error("   Set it with: export ANTHROPIC_API_KEY=your-key");
    Deno.exit(1);
  }

  const client = new Anthropic({ apiKey });

  // Load source translations
  console.log(`📖 Loading source translations (${SOURCE_LOCALE})...`);
  const source = await loadTranslations(SOURCE_LOCALE);
  const sourceKeyCount = Object.values(source).reduce(
    (sum, ns) => sum + Object.keys(ns).length,
    0
  );
  console.log(`   Found ${sourceKeyCount} keys in ${Object.keys(source).length} namespaces\n`);

  // Process each target locale
  for (const targetLocale of TARGET_LOCALES) {
    console.log(`\n🎯 Translating to ${LANGUAGE_NAMES[targetLocale]} (${targetLocale})...`);

    // Load existing translations
    const target = await loadTranslations(targetLocale);

    // Find missing keys
    const missing = findMissingKeys(source, target, forceAll);

    if (missing.length === 0) {
      console.log("   ✓ All keys are up to date");
      continue;
    }

    console.log(`   Found ${missing.length} keys to translate`);

    if (dryRun) {
      console.log("   📋 Keys to translate:");
      for (const item of missing) {
        console.log(`      - ${item.namespace}.${item.key}`);
      }
      continue;
    }

    // Translate in batches of 20 to avoid token limits
    const BATCH_SIZE = 20;
    const allTranslations = new Map<string, Map<string, string>>();

    for (let i = 0; i < missing.length; i += BATCH_SIZE) {
      const batch = missing.slice(i, i + BATCH_SIZE);
      console.log(
        `   Translating batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(missing.length / BATCH_SIZE)}...`
      );

      const batchTranslations = await translateBatch(client, batch, targetLocale);

      // Merge into allTranslations
      for (const [ns, keys] of batchTranslations) {
        if (!allTranslations.has(ns)) {
          allTranslations.set(ns, new Map());
        }
        for (const [key, value] of keys) {
          allTranslations.get(ns)!.set(key, value);
        }
      }

      // Small delay between batches to be nice to the API
      if (i + BATCH_SIZE < missing.length) {
        await new Promise((r) => setTimeout(r, 500));
      }
    }

    // Apply and save
    const updated = applyTranslations(target, allTranslations, source);
    await saveTranslations(targetLocale, updated);

    console.log(`   ✓ Saved ${missing.length} translations`);
  }

  console.log("\n✅ Translation complete!");

  // Remind to regenerate types
  console.log("\n💡 Don't forget to run: deno task i18n:types");
}

// Run
main().catch((err) => {
  console.error("❌ Error:", err.message);
  Deno.exit(1);
});
