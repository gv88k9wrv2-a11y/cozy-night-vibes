import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";

export const Route = createFileRoute("/en/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — Nimrodi & Co. CPA" },
      { name: "description", content: "Accessibility statement for the Nimrodi & Co. website — WCAG 2.1 AA compliance and contact for accessibility issues." },
      { property: "og:url", content: `${BASE}/en/accessibility` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/accessibility` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/accessibility` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/accessibility` },
    ],
  }),
  component: AccessibilityEn,
});

function AccessibilityEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">Accessibility statement</h1>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>Nimrodi & Co. is committed to making its website accessible to all users, including people with disabilities. This site has been designed and developed with accessibility in mind, targeting the international WCAG 2.1 Level AA standard and the Israeli Equal Rights for People with Disabilities Regulations (Service Accessibility) 5773-2013.</p>
          <h2 className="font-display text-2xl font-bold text-primary">Features</h2>
          <ul className="list-disc space-y-2 ps-6">
            <li>Semantic HTML and ARIA labels</li>
            <li>Full keyboard navigation with visible focus indicators</li>
            <li>Skip-to-content link at the top of every page</li>
            <li>Sufficient color contrast (WCAG AA)</li>
            <li>Alt text on informative images</li>
            <li>Responsive layout for mobile, tablet and desktop</li>
          </ul>
          <h2 className="font-display text-2xl font-bold text-primary">Reporting accessibility issues</h2>
          <p>If you experience an accessibility barrier on this site, please contact our accessibility coordinator so we can address it:</p>
          <ul className="list-disc space-y-1 ps-6">
            <li>Email: <a href="mailto:office@nimrodi.co.il" className="text-primary hover:text-gold">office@nimrodi.co.il</a></li>
            <li>Phone: <a href="tel:+97299582211" className="text-primary hover:text-gold">+972-9-9582211</a></li>
          </ul>
          <p className="text-xs">Last updated: July 2026.</p>
        </div>
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
