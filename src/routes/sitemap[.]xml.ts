import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/cpa-herzliya", changefreq: "monthly", priority: "0.9" },
          { path: "/cpa-startups", changefreq: "monthly", priority: "0.9" },
          { path: "/cpa-freelancers", changefreq: "monthly", priority: "0.9" },
          { path: "/cpa-international", changefreq: "monthly", priority: "0.9" },
          { path: "/cpa-foreign-companies", changefreq: "monthly", priority: "0.9" },
          { path: "/tax-consulting", changefreq: "monthly", priority: "0.9" },
          { path: "/audit", changefreq: "monthly", priority: "0.9" },
          { path: "/bookkeeping", changefreq: "monthly", priority: "0.9" },
          { path: "/payroll", changefreq: "monthly", priority: "0.9" },
          { path: "/team", changefreq: "monthly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/blog/tax-planning-2026", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/startup-equity-102", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/crypto-reporting", changefreq: "monthly", priority: "0.7" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
          { path: "/accessibility", changefreq: "yearly", priority: "0.3" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
