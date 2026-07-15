import { createFileRoute } from "@tanstack/react-router";
import { FileSearch } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "Do you audit under IFRS and US GAAP?", a: "Yes. Our engagements cover Israeli GAAP, IFRS and — via our international correspondents — US GAAP conversions for parent-company consolidation." },
  { q: "How long does a statutory audit take?", a: "For a typical small-medium company, 4–8 weeks depending on preparedness of the books. We provide a preparation checklist to shorten the timeline significantly." },
  { q: "Can you support due diligence for M&A / fundraising?", a: "Yes — we run buy-side or sell-side DD, prepare data rooms, quality-of-earnings analyses and normalized EBITDA schedules." },
];

export const Route = createFileRoute("/en/audit")({
  head: () => ({
    meta: [
      { title: "Audit & Assurance Services in Israel | Nimrodi & Co. CPA" },
      { name: "description", content: "Independent statutory audits under Israeli GAAP and IFRS. Due diligence, quality of earnings and internal control reviews." },
      { property: "og:title", content: "Audit & Assurance — Nimrodi & Co." },
      { property: "og:description", content: "Statutory audits, IFRS conversions and M&A due diligence in Israel." },
      { property: "og:url", content: `${BASE}/en/audit` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/audit` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/audit` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/audit` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      icon={FileSearch}
      eyebrow="Audit & Assurance"
      title="Statutory audits, IFRS reporting and due diligence"
      intro="Every Israeli company is required to file audited annual financial statements. We deliver rigorous, risk-based audits that satisfy the Registrar, the Tax Authority, banks and investors — while giving management genuinely useful insights."
      highlights={[
        "Statutory annual audits (Israeli GAAP)",
        "IFRS reporting for regulated entities",
        "Internal control and process reviews",
        "Buy-side & sell-side M&A due diligence",
        "Quality of Earnings and EBITDA normalization",
        "Non-profit (amuta) special audits and Form 5471",
      ]}
      sections={[
        {
          title: "Audit approach",
          body: "We follow International Standards on Auditing (ISA) with a risk-based approach — focused testing on material items, meaningful analytics and clear management letter comments that add value beyond the opinion itself.",
        },
        {
          title: "IFRS conversion",
          body: "For subsidiaries of foreign parents that report in IFRS or US GAAP, we prepare conversion packs, group reporting schedules and coordinate with the group auditor on interim and year-end deliverables.",
        },
        {
          title: "Due diligence",
          body: "M&A DD engagements: data room, historical financial analysis, quality of earnings, working capital normalization, tax exposure review and closing mechanism support.",
        },
      ]}
      faqs={FAQS}
    />
  ),
});
