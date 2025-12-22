import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET() {
    return new Response(null, {
      status: 301,
      headers: { Location: "/ueber-uns/presse" },
    });
  },
};
