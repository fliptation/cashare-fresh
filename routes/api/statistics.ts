import { Handlers } from "$fresh/server.ts";

// Cashare API base URL
const CASHARE_API_BASE = "https://my.cashare.ch/api";

// Cache for statistics (15 minutes TTL)
let cachedStats: {
  data: StatisticsResponse | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

interface StatisticsResponse {
  rating: [string, number][];
  totalRequestedLoanVolume: [number, number][];
  membersAndFinancedProjects: [string | number, string | number, string | number][];
}

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const lang = url.searchParams.get("lang") || "de";

    // Check cache
    const now = Date.now();
    if (cachedStats.data && now - cachedStats.timestamp < CACHE_TTL) {
      return new Response(JSON.stringify(cachedStats.data), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=900",
        },
      });
    }

    try {
      // Fetch from Cashare API
      const response = await fetch(
        `${CASHARE_API_BASE}/${lang}/webservice/statistics`,
        {
          headers: {
            "Accept": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const data = await response.json() as StatisticsResponse;

      // Update cache
      cachedStats = {
        data,
        timestamp: now,
      };

      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=900",
        },
      });
    } catch (error) {
      console.error("Failed to fetch statistics:", error);

      // Return cached data if available, even if stale
      if (cachedStats.data) {
        return new Response(JSON.stringify(cachedStats.data), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=60",
          },
        });
      }

      // Return mock data for development
      const mockData: StatisticsResponse = {
        rating: [
          ["AA", 15],
          ["A", 25],
          ["BBB", 30],
          ["BB", 18],
          ["B", 8],
          ["C", 4],
        ],
        totalRequestedLoanVolume: [
          [2018, 450],
          [2019, 680],
          [2020, 920],
          [2021, 1250],
          [2022, 1680],
          [2023, 2100],
          [2024, 2450],
        ],
        membersAndFinancedProjects: [
          ["Jahr", "Finanzierte Projekte", "Mitglieder"],
          [2018, 150, 8500],
          [2019, 280, 15000],
          [2020, 420, 25000],
          [2021, 680, 42000],
          [2022, 950, 58000],
          [2023, 1200, 72000],
          [2024, 1450, 85000],
        ],
      };

      return new Response(JSON.stringify(mockData), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      });
    }
  },
};
