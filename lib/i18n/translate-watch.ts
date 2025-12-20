#!/usr/bin/env -S deno run --allow-read --allow-write --allow-env --allow-net

/**
 * Translation Watcher
 *
 * Watches the German translation file and automatically translates
 * changes to English and French.
 *
 * Usage:
 *   deno task translate:watch
 */

const LOCALES_DIR = new URL("./locales/", import.meta.url).pathname;
const SOURCE_FILE = `${LOCALES_DIR}de.json`;
const DEBOUNCE_MS = 2000; // Wait 2 seconds after last change

let debounceTimer: number | undefined;
let isTranslating = false;

async function runTranslation() {
  if (isTranslating) {
    console.log("⏳ Translation already in progress, skipping...");
    return;
  }

  isTranslating = true;
  console.log("\n🔄 Changes detected, starting translation...\n");

  try {
    const command = new Deno.Command("deno", {
      args: ["task", "translate"],
      cwd: new URL("../../", import.meta.url).pathname,
      stdout: "inherit",
      stderr: "inherit",
    });

    const { code } = await command.output();

    if (code === 0) {
      console.log("\n✅ Translation complete, watching for changes...\n");
    } else {
      console.error("\n❌ Translation failed\n");
    }
  } catch (err) {
    console.error("Error running translation:", err);
  } finally {
    isTranslating = false;
  }
}

async function main() {
  console.log("👀 Watching for translation changes...");
  console.log(`   Source: ${SOURCE_FILE}`);
  console.log("   Press Ctrl+C to stop\n");

  const watcher = Deno.watchFs(SOURCE_FILE);

  for await (const event of watcher) {
    if (event.kind === "modify") {
      // Debounce - wait for changes to settle
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      debounceTimer = setTimeout(() => {
        runTranslation();
      }, DEBOUNCE_MS);
    }
  }
}

main().catch(console.error);
