import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-international.webp";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "What tax benefits do new immigrants (olim chadashim) receive?", a: "New immigrants and senior returning residents enjoy a 10-year exemption on foreign-source income and capital gains, plus an exemption from reporting foreign assets. Timing and planning of relocation are critical to maximize the benefit." },
  { q: "Can I sever Israeli tax residency by relocating?", a: "Yes, but severance requires more than moving abroad. The ITA looks at 'center of life' (family, home, work, social ties). We plan and document the severance to withstand challenge — and address the exit tax exposure." },
  { q: "How does the US-Israel tax treaty work in practice?", a: "The treaty allocates taxing rights, provides tie-breaker rules for residency, and grants foreign tax credits. Practical planning — timing of income recognition, ESOP exercise, pension distributions — often makes a large after-tax difference." },
];

export const Route = createFileRoute("/en/cpa-international")({
  head: () => ({
    meta: [
      { title: "International Tax — Relocation, Olim & Returning Residents | Nimrodi & Co." },
      { name: "description", content: "Israeli international tax planning: relocation, tax residency severance, new immigrant benefits, returning residents, tax treaties and cross-border structures." },
      { property: "og:title", content: "International Tax — Nimrodi & Co." },
      { property: "og:description", content: "Cross-border tax planning for relocation, olim and returning residents." },
      { property: "og:url", content: `${BASE}/en/cpa-international` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/cpa-international` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-international` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-international` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="World map illustrating international tax connections"
      icon={Plane}
      eyebrow="International Tax"
      title="Relocation, olim and cross-border tax planning"
      intro="Moving to or from Israel — as an oleh, returning resident, expat or global executive — is one of the highest-impact tax events of a lifetime. We plan the move end-to-end, coordinate with foreign counsel, and file across jurisdictions."
      highlights={[
        "New immigrant (oleh chadash) 10-year benefits",
        "Senior returning resident status",
        "Israeli tax residency severance & exit tax",
        "Tax treaties (US, UK, Canada, France, Germany…)",
        "Foreign account reporting (CRS / FATCA)",
        "Crypto & digital asset taxation",
      ]}
      sections={[
        {
          title: "New immigrants & returning residents",
          body: "Israel grants generous 10-year exemptions to new immigrants and senior returning residents on foreign-source income and gains. But the benefit is fragile — poor planning around exercise of pre-aliyah equity, US pension distributions or trusts can waste it. We plan timing and structure years in advance.",
        },
        {
          title: "Relocation & residency severance",
          body: "Leaving Israel? Center of life, physical presence, family, home, work and social ties all matter. We help plan and document the severance, address exit tax (Section 100A), coordinate with the destination country's advisor, and manage ongoing Israeli exposure post-relocation.",
        },
        {
          title: "Treaty planning & cross-border",
          body: (
            <>
              For dual-status individuals, executives with global equity and families spread across countries — we plan across treaties, coordinate foreign tax credits, time income recognition and file coordinated returns. Foreign parents entering Israel should also see our <Link to="/en/cpa-foreign-companies" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">foreign-company support</Link>, and founders considering an Israel–Delaware flip should review our <Link to="/en/cpa-startups" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">startup CPA practice</Link>.
            </>
          ),
        },
      ]}
      govPortals={{
        title: "Israeli Tax Benefits & Relocation Resources",
        links: [
          { label: "Tax Benefits for Returning Residents & New Immigrants (Olim)", href: "https://www.gov.il/en/departments/ministry_of_aliyah_and_integration" },
          { label: "Double Taxation Treaties of Israel", href: "https://www.gov.il/en/departments/units/double_taxation_agreements" },
          { label: "Israel Tax Authority – International Taxation Portal", href: "https://www.gov.il/en/departments/units/international_taxation_unit" },
        ],
      }}
      faqs={FAQS}
    />
  ),
});
