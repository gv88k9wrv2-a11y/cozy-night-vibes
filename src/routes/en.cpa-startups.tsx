import { createFileRoute } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "When does a startup need a CPA?", a: "Before incorporation. Choosing the right structure (Israeli Ltd / Delaware / dual-entity), founders' equity, vesting mechanics and 83(b) elections all affect the eventual tax outcome and fundraising trajectory." },
  { q: "Do you support fundraising rounds?", a: "Yes — from Pre-Seed to Series C. We prepare the data room, build the financial model, coordinate with counsel on SAFEs / convertibles / priced rounds, and structure the round for tax efficiency." },
  { q: "Can you handle a US Delaware Flip?", a: "Absolutely. Israeli-Delaware Flips are a recurring practice for us — including the Israeli Pre-Ruling for tax-deferred share exchange, coordination with US counsel and post-flip Transfer Pricing setup." },
  { q: "What is Section 102 and how does it work?", a: "Section 102 lets Israeli companies grant equity to employees at preferential capital gains tax (25%) via a trustee. We prepare and file the plan, work with the trustee, and support employees at exercise and sale." },
  { q: "What is the Preferred Tech Enterprise regime?", a: "Companies that meet R&D and revenue thresholds under the Encouragement of Capital Investments Law can enjoy corporate tax of 12% (or 6% for a Special Preferred Tech Enterprise), vs. the standard 23%. We check eligibility and file with the ITA." },
];

export const Route = createFileRoute("/en/cpa-startups")({
  head: () => ({
    meta: [
      { title: "CPA for Startups in Israel | Fundraising, ESOP, Delaware Flip" },
      { name: "description", content: "Boutique CPA firm for Israeli startups — fundraising support, Section 102 ESOP, Israeli-Delaware Flip, Preferred Tech Enterprise, IFRS/US-GAAP." },
      { property: "og:title", content: "CPA for Startups — Nimrodi & Co." },
      { property: "og:description", content: "Accounting, tax and CFO services for Israeli startups from seed to exit." },
      { property: "og:url", content: `${BASE}/en/cpa-startups` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/cpa-startups` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-startups` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-startups` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      icon={Rocket}
      eyebrow="Startups & Tech"
      title="CPA for Israeli startups — from incorporation to exit"
      intro="We speak startup fluently. Nimrodi & Co. supports dozens of Israeli startups at every stage — pre-seed to Series C, Delaware Flips, ESOP plans, Preferred Tech Enterprise status and Exit readiness."
      highlights={[
        "Fundraising support: SAFE, convertibles, priced rounds",
        "Section 102 ESOP (capital gains / income track)",
        "Israeli-Delaware Flip and international structures",
        "Board- and investor-ready reporting",
        "Preferred Tech Enterprise (6%–12% corporate tax)",
        "Full DD and QoE support pre-Exit",
      ]}
      sections={[
        {
          title: "What we cover, end-to-end",
          body: "Everything you need so you can focus on product and customers:",
          bullets: [
            "Incorporation, structure and founders' agreements",
            "Digital bookkeeping (Priority / QuickBooks / Xero)",
            "IFRS / US-GAAP annual financial statements",
            "Corporate and founder tax planning",
            "IIA grants, R&D incentives and Chief Scientist programs",
            "Data room prep, DD support and round closing",
          ],
        },
        {
          title: "Stage-by-stage support",
          body: "Every stage has its own priorities. We meet you where you are:",
          bullets: [
            "Pre-Seed: entity setup, structure, vesting, 83(b) elections",
            "Seed: books, cash management, financial model, Section 102 foundation",
            "Series A: IFRS/US-GAAP statements, budget control, board reporting",
            "Growth: Transfer Pricing, global expansion, Preferred Enterprise filing",
            "Exit / IPO: data room, DD support, founder and employee tax",
          ],
        },
        {
          title: "Israeli-Delaware Flip",
          body: "Most Israeli startups eventually flip to a Delaware parent to satisfy US investors. We manage the Israeli side end-to-end: Pre-Ruling with the ITA for tax-deferred share exchange, coordination with US and Israeli counsel, and post-flip Transfer Pricing between the Delaware parent and the Israeli R&D subsidiary.",
        },
        {
          title: "Preferred Tech Enterprise",
          body: "The Encouragement of Capital Investments Law grants qualifying tech companies significantly reduced corporate tax rates. We assess eligibility, prepare and file the application, and defend the position on ITA audits.",
        },
      ]}
      faqs={FAQS}
      ctaHeadline="Building a startup or about to raise? Let's talk."
    />
  ),
});
