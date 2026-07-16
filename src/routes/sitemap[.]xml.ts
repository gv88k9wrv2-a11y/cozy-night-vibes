import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  /** matching EN path for hreflang alternate; omit for HE-only pages (e.g. blog) */
  en?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", en: "/en", changefreq: "weekly", priority: "1.0" },
          { path: "/services", en: "/en/services", changefreq: "monthly", priority: "0.9" },
          { path: "/cpa-herzliya", en: "/en/cpa-herzliya", changefreq: "monthly", priority: "0.9" },
          { path: "/cpa-startups", en: "/en/cpa-startups", changefreq: "monthly", priority: "0.9" },
          { path: "/cpa-freelancers", en: "/en/cpa-freelancers", changefreq: "monthly", priority: "0.9" },
          { path: "/cpa-international", en: "/en/cpa-international", changefreq: "monthly", priority: "0.9" },
          { path: "/cpa-foreign-companies", en: "/en/cpa-foreign-companies", changefreq: "monthly", priority: "0.9" },
          { path: "/tax-consulting", en: "/en/tax-consulting", changefreq: "monthly", priority: "0.9" },
          { path: "/audit", en: "/en/audit", changefreq: "monthly", priority: "0.9" },
          { path: "/bookkeeping", en: "/en/bookkeeping", changefreq: "monthly", priority: "0.9" },
          { path: "/payroll", en: "/en/payroll", changefreq: "monthly", priority: "0.9" },
          { path: "/team", en: "/en/team", changefreq: "monthly", priority: "0.7" },
          { path: "/faq", en: "/en/faq", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/blog/tax-planning-2026", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/startup-equity-102", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/crypto-reporting", changefreq: "monthly", priority: "0.7" },
          { path: "/about", en: "/en/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", en: "/en/contact", changefreq: "yearly", priority: "0.6" },
          { path: "/accessibility", en: "/en/accessibility", changefreq: "yearly", priority: "0.3" },
        ];

        const buildUrl = (loc: string, e: SitemapEntry) => {
          const alt = e.en
            ? [
                `    <xhtml:link rel="alternate" hreflang="he-IL" href="${BASE_URL}${e.path}"/>`,
                `    <xhtml:link rel="alternate" hreflang="en-US" href="${BASE_URL}${e.en}"/>`,
                `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${e.path}"/>`,
              ]
            : [];
          return [
            `  <url>`,
            `    <loc>${BASE_URL}${loc}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            ...alt,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n");
        };

        const urls: string[] = [];
        for (const e of entries) {
          urls.push(buildUrl(e.path, e));
          if (e.en) urls.push(buildUrl(e.en, e));
        }

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
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
