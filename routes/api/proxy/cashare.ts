/**
 * Proxy API route for Cashare backend
 * Handles CORS by making server-side requests to my.cashare.ch
 */

import { Handlers } from "$fresh/server.ts";

const API_BASE = "https://my.cashare.ch";

export const handler: Handlers = {
  async POST(req) {
    try {
      const body = await req.json();
      const { endpoint, payload } = body;

      if (!endpoint) {
        return new Response(JSON.stringify({ error: "Missing endpoint" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const url = `${API_BASE}${endpoint}`;
      console.log("Proxy request to:", url);
      console.log("Payload:", JSON.stringify(payload, null, 2));

      // Make server-side request to Cashare API
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await response.text();
      console.log("Response status:", response.status);
      console.log("Response body (first 500 chars):", text.substring(0, 500));

      // Try to parse as JSON
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        // If not JSON, return error with status
        return new Response(
          JSON.stringify({
            action: "message",
            message: `API returned non-JSON response (status ${response.status})`,
            rawResponse: text.substring(0, 200),
          }),
          {
            status: 200, // Return 200 so frontend can handle
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Proxy error:", error);
      return new Response(
        JSON.stringify({
          action: "message",
          message: error instanceof Error ? error.message : "Proxy request failed"
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  },
};
