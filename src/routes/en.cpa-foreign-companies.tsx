import { createFileRoute } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-foreign.jpg";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "Subsidiary or branch — which is better?", a: "Each has pros and cons. An Israeli subsidiary (Ltd) is a separate legal entity with limited liability and 23% corporate tax. A branch is an extension of the foreign parent — simpler to set up but exposes the parent. Choice depends on activity scale, home-country tax and treaties." },
  { q: "How long does it take to set up an Israeli subsidiary?", a: "Registration itself takes 3–5 business days. Bank account opening for a foreign-owned entity can take 4–8 weeks due to KYC. We manage the entire process." },
  { q: "Do you handle Israeli banking regulation?", a: "Yes. Bringing funds into Israel, FX conversion and account opening for foreign entities require expertise in AML/KYC rules. We represent clients with the banks and prepare all documentation." },
  { q: "What is Transfer Pricing and why does it matter?", a: "Transfer Pricing is the pricing of intra-group transactions between the foreign parent and Israeli subsidiary. Israeli law requires arm's length pricing. A professional TP study is mandatory above a threshold and protects against future ITA assessments." },
];

export const Route = createFileRoute("/en/cpa-foreign-companies")({
  head: () => ({
    meta: [
      { title: "Foreign Companies in Israel — Subsidiary, Branch, TP | Nimrodi & Co." },
      { name: "description", content: "Setting up in Israel: subsidiary or branch registration, banking KYC, Israeli payroll, Transfer Pricing and ongoing tax compliance." },
      { property: "og:title", content: "Foreign Companies in Israel — Nimrodi & Co." },
      { property: "og:description", content: "Full local support for international companies operating in Israel." },
      { property: "og:url", content: `${BASE}/en/cpa-foreign-companies` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/cpa-foreign-companies` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-foreign-companies` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-foreign-companies` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Nimrodi & Co. — service illustration"
      icon={Globe2}
      eyebrow="Foreign Companies in Israel"
      title="Full local support for international companies entering Israel"
      intro="A foreign company entering the Israeli market needs a local partner who understands the regulation, language, banking and tax authorities. We support international tech companies, global startups and foreign funds through every stage of market entry."
      highlights={[
        "Israeli subsidiary (Ltd) or branch setup",
        "Bank account opening and KYC",
        "Israeli payroll for local employees",
        "Transfer Pricing and intra-group documentation",
        "Ongoing filings with ITA and Registrar",
      ]}
      sections={[
        {
          title: "Choosing the right structure",
          body: "The first decision is structural. We analyze your options — Israeli subsidiary, branch, or EOR — considering planned scale, home country, treaties and future roadmap.",
        },
        {
          title: "Setup process",
          body: "Once the decision is made we handle everything:",
          bullets: [
            "Company registration with the Registrar (2–3 business days)",
            "Registration with VAT, ITA and Bituach Leumi",
            "Bank account opening with full KYC support",
            "Employer registration and payroll setup",
            "Accounting system tailoring (Priority / SAP / QuickBooks)",
          ],
        },
        {
          title: "Ongoing management",
          body: "After setup we continue as your local finance team — day-to-day bookkeeping, VAT and tax filings, monthly payroll, quarterly group reporting packs, annual audited financials and international tax planning.",
        },
        {
          title: "Transfer Pricing & regulation",
          body: "For companies with material intra-group transactions we prepare Transfer Pricing studies compliant with OECD guidelines and Israeli regulations. Robust documentation protects against ITA assessments and gives certainty to the group.",
        },
      ]}
      faqs={FAQS}
      ctaHeadline="Considering market entry to Israel? Let's schedule an intro call."
    />
  ),
});
