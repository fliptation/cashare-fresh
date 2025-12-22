#!/usr/bin/env -S deno run --allow-net --allow-write --allow-read

/**
 * Cashare Asset Download Script
 *
 * Downloads all missing global assets from the WordPress site
 * Run with: deno task download-assets
 */

interface Asset {
  url: string;
  localPath: string;
  category: string;
  priority: "high" | "medium" | "low";
}

const ASSETS: Asset[] = [
  // Product Icons (High Priority)
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/private-loan.png",
    localPath: "static/images/products/private-loan.png",
    category: "products",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/sme-loan.png",
    localPath: "static/images/products/sme-loan.png",
    category: "products",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/mortgage.png",
    localPath: "static/images/products/mortgage.png",
    category: "products",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/private-investor.png",
    localPath: "static/images/products/private-investor.png",
    category: "products",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/istitutional-investor.png",
    localPath: "static/images/products/institutional-investor.png",
    category: "products",
    priority: "high",
  },

  // Informational Icons (High Priority)
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/07/loan-icon-1.png",
    localPath: "static/images/icons/loan-icon-1.png",
    category: "icons",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/07/loan-icon-2.png",
    localPath: "static/images/icons/loan-icon-2.png",
    category: "icons",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/07/loan-icon-3.png",
    localPath: "static/images/icons/loan-icon-3.png",
    category: "icons",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/07/loan-icon-4.png",
    localPath: "static/images/icons/loan-icon-4.png",
    category: "icons",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/07/loan-icon-5.png",
    localPath: "static/images/icons/loan-icon-5.png",
    category: "icons",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/07/private-icon-1.png",
    localPath: "static/images/icons/private-icon-1.png",
    category: "icons",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/07/private-icon-2.png",
    localPath: "static/images/icons/private-icon-2.png",
    category: "icons",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/07/private-icon-3.png",
    localPath: "static/images/icons/private-icon-3.png",
    category: "icons",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/who-we-are.png",
    localPath: "static/images/info/who-we-are.png",
    category: "info",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/crowd-lending.png",
    localPath: "static/images/info/crowd-lending.png",
    category: "info",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/statistics.png",
    localPath: "static/images/info/statistics.png",
    category: "info",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/jobs.png",
    localPath: "static/images/info/jobs.png",
    category: "info",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/partner.png",
    localPath: "static/images/info/partner.png",
    category: "info",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/press.png",
    localPath: "static/images/info/press.png",
    category: "info",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/12/blog.png",
    localPath: "static/images/info/blog.png",
    category: "info",
    priority: "high",
  },

  // UI Elements (High Priority)
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/10/current-projects-line.svg",
    localPath: "static/images/ui/current-projects-line.svg",
    category: "ui",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/10/current-projects-line-mobile.svg",
    localPath: "static/images/ui/current-projects-line-mobile.svg",
    category: "ui",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/07/receive-loan-vector.png",
    localPath: "static/images/ui/receive-loan-vector.png",
    category: "ui",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/10/receive-loan-line-mobile.svg",
    localPath: "static/images/ui/receive-loan-line-mobile.svg",
    category: "ui",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/10/where-can-invest-line-mobile.svg",
    localPath: "static/images/ui/where-can-invest-line-mobile.svg",
    category: "ui",
    priority: "high",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2025/07/user-avatar.png",
    localPath: "static/images/ui/user-avatar.png",
    category: "ui",
    priority: "high",
  },

  // Hero/Banner Images (Medium Priority)
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/10/Calculator-Wide.png",
    localPath: "static/images/hero/calculator-wide.png",
    category: "hero",
    priority: "medium",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/10/layer.png",
    localPath: "static/images/hero/layer.png",
    category: "hero",
    priority: "medium",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/10/text.png",
    localPath: "static/images/hero/text.png",
    category: "hero",
    priority: "medium",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/10/Layer_1.png",
    localPath: "static/images/hero/layer-1.png",
    category: "hero",
    priority: "medium",
  },

  // Partner Logos (Medium Priority)
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/10/logo-2.png",
    localPath: "static/images/partners/edoeb-logo.png",
    category: "partners",
    priority: "medium",
  },
  {
    url: "https://www.cashare.ch/wp-content/uploads/2024/10/Frame-1000002746.png",
    localPath: "static/images/partners/edoeb-frame.png",
    category: "partners",
    priority: "medium",
  },
];

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
};

async function ensureDir(dirPath: string) {
  try {
    await Deno.mkdir(dirPath, { recursive: true });
  } catch (error) {
    if (!(error instanceof Deno.errors.AlreadyExists)) {
      throw error;
    }
  }
}

async function downloadAsset(asset: Asset): Promise<boolean> {
  try {
    // Check if file already exists
    try {
      await Deno.stat(asset.localPath);
      console.log(
        `${colors.yellow}⊙${colors.reset} ${asset.localPath} ${colors.yellow}already exists${colors.reset}`
      );
      return true;
    } catch {
      // File doesn't exist, proceed with download
    }

    // Ensure directory exists
    const dir = asset.localPath.split("/").slice(0, -1).join("/");
    await ensureDir(dir);

    // Download file
    console.log(`${colors.cyan}↓${colors.reset} Downloading ${asset.url}...`);
    const response = await fetch(asset.url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.arrayBuffer();
    await Deno.writeFile(asset.localPath, new Uint8Array(data));

    const sizeKB = (data.byteLength / 1024).toFixed(1);
    console.log(
      `${colors.green}✓${colors.reset} ${asset.localPath} ${colors.green}(${sizeKB} KB)${colors.reset}`
    );
    return true;
  } catch (error) {
    console.error(
      `${colors.red}✗${colors.reset} ${asset.localPath} ${colors.red}failed: ${error.message}${colors.reset}`
    );
    return false;
  }
}

async function main() {
  console.log(`${colors.bright}${colors.blue}
╔═══════════════════════════════════════════╗
║   Cashare Asset Download Script          ║
╚═══════════════════════════════════════════╝${colors.reset}
`);

  const priorities = ["high", "medium", "low"] as const;
  let totalSuccess = 0;
  let totalFailed = 0;
  let totalSkipped = 0;

  for (const priority of priorities) {
    const assets = ASSETS.filter((a) => a.priority === priority);
    if (assets.length === 0) continue;

    console.log(
      `\n${colors.bright}${priority.toUpperCase()} Priority Assets (${assets.length} files)${colors.reset}\n`
    );

    for (const asset of assets) {
      const success = await downloadAsset(asset);
      if (success) {
        // Check if it was skipped (already existed)
        try {
          const stat = await Deno.stat(asset.localPath);
          if (stat.mtime && stat.mtime < new Date(Date.now() - 1000)) {
            totalSkipped++;
          } else {
            totalSuccess++;
          }
        } catch {
          totalSuccess++;
        }
      } else {
        totalFailed++;
      }

      // Small delay to avoid overwhelming the server
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  console.log(`\n${colors.bright}${colors.blue}
╔═══════════════════════════════════════════╗
║   Download Summary                        ║
╚═══════════════════════════════════════════╝${colors.reset}
`);

  console.log(`Total assets: ${colors.bright}${ASSETS.length}${colors.reset}`);
  console.log(
    `Downloaded: ${colors.green}${totalSuccess}${colors.reset}`
  );
  console.log(
    `Already existed: ${colors.yellow}${totalSkipped}${colors.reset}`
  );
  console.log(`Failed: ${colors.red}${totalFailed}${colors.reset}`);

  if (totalFailed > 0) {
    console.log(
      `\n${colors.yellow}Some downloads failed. Check the URLs or try again later.${colors.reset}`
    );
    Deno.exit(1);
  }

  console.log(
    `\n${colors.green}${colors.bright}All assets downloaded successfully!${colors.reset}\n`
  );
}

if (import.meta.main) {
  main();
}
