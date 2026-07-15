import { createFileRoute } from "@tanstack/react-router";
import { FileSpreadsheet } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "What is a Pre-Ruling and when should we get one?", a: "A Pre-Ruling is a binding written position from the Israel Tax Authority on a specific transaction (M&A, reorganization, ESOP structure, residency). We recommend it whenever the tax exposure is material and precedent is unclear." },
  { q: "Do you handle Tax Authority audits and appeals?", a: "Yes — from responding to information requests, through the assessment process, objections (hasaga) and appeals to the district court where necessary." },
  { q: "Can you plan a corporate reorganization tax-efficiently?", a: "We plan and execute tax-deferred reorganizations under Sections 103-105, including mergers, spin-offs and asset transfers between related entities." },
];

export const Route = createFileRoute("/en/tax-consulting")({
  head: () => ({
    meta: [
      { title: "Israeli Tax Advisory & Planning | Pre-Rulings | Nimrodi & Co." },
      { name: "description", content: "Strategic Israeli tax planning: Pre-Rulings, reorganizations, appeals, residency, cross-border structures — for companies, entrepreneurs and investors." },
      { property: "og:title", content: "Tax Advisory — Nimrodi & Co." },
      { property: "og:description", content: "Tax planning, Pre-Rulings and appeals from a Herzliya boutique CPA firm." },
      { property: "og:url", content: `${BASE}/en/tax-consulting` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/tax-consulting` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/tax-consulting` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/tax-consulting` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      icon={FileSpreadsheet}
      eyebrow="Tax Advisory"
      title="Strategic Israeli tax planning and representation"
      intro="Sound tax planning saves years of pain. We help entrepreneurs, companies and investors structure transactions, obtain Pre-Rulings, respond to audits and defend positions — with the same partners you speak to on day one."
      highlights={[
        "Corporate & personal tax planning",
        "Pre-Rulings from the Israel Tax Authority",
        "Reorganizations under Sections 103–105",
        "Objections and appeals in tax audits",
        "Residency planning (severance / return)",
        "Voluntary disclosure programs",
      ]}
      sections={[
        {
          title: "Planning that anticipates the exit",
          body: "The best tax planning happens before transactions close, not after. We work with founders, executives and boards to model the tax implications of fundraising, M&A, secondaries, spin-offs and Exit — and choose the structure that maximizes after-tax outcome.",
        },
        {
          title: "Pre-Rulings",
          body: "For material or novel transactions we prepare and negotiate written Pre-Rulings with the Israel Tax Authority. A well-prepared ruling gives certainty to founders, employees, buyers and investors — and often unlocks the deal.",
        },
        {
          title: "Audits, objections and appeals",
          body: "If the ITA challenges a position, we represent the client through every stage: initial response, assessment (shuma), objection (hasaga), settlement negotiations and — where needed — appeal to the district court.",
        },
      ]}
      faqs={FAQS}
    />
  ),
});
