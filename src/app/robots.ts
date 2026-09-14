import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const AI_AND_SEARCH_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "CCBot",
  "Bingbot",
] as const;

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${site.domain.replace(/\/$/, "")}/sitemap-index.xml`;

  const botRules = AI_AND_SEARCH_BOTS.map((userAgent) => ({
    userAgent,
    allow: "/",
    disallow: ["/api/"],
  }));

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      ...botRules,
    ],
    sitemap,
  };
}
