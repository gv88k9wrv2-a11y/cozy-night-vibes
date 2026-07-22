import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-foreign.webp";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "Subsidiary or branch — which is better?", a: "Each has trade-offs. An Israeli subsidiary (Ltd) is a separate legal entity with limited liability and 23% corporate tax. A branch extends the foreign parent — simpler to set up but exposes the parent to Israeli tax and liability. The choice depends on scale, home-country tax treaties and roadmap." },
  { q: "How long does it take to set up an Israeli subsidiary?", a: "Registration takes 3–5 business days. Bank account opening for a foreign-owned entity typically takes 4–8 weeks due to KYC. We manage the entire process end-to-end." },
  { q: "Do you handle Israeli banking regulation?", a: "Yes. Bringing funds into Israel, FX conversion and account opening for foreign entities require expertise in AML/KYC rules and Bank of Israel policy. We represent clients with the banks and prepare all documentation." },
  { q: "What is Transfer Pricing and why does it matter?", a: "Transfer Pricing is the pricing of intra-group transactions between the foreign parent and Israeli subsidiary. Israeli law (Section 85A) requires arm's length pricing. A professional TP study is mandatory above a threshold and protects against future ITA assessments." },
  { q: "What is Permanent Establishment (PE) risk?", a: "If the foreign parent has meaningful presence in Israel — an office, a fixed employee closing deals, a central warehouse — it may be deemed to operate in Israel and become subject to Israeli corporate tax on that activity. Proper structuring (EOR, local Service Company) avoids unintended PE." },
  { q: "Can we pay Israeli developers without opening a branch?", a: "Yes — three options: (1) EOR (Employer of Record) — fast but expensive; (2) independent contractor — simple but limited by misclassification risk; (3) an Israeli subsidiary — higher setup cost but cheapest long-term and full control. We model the crossover point." },
  { q: "What Israeli tax benefits are available to foreign-owned subsidiaries?", a: "An Israeli subsidiary of a foreign group can access the full toolkit: Preferred Technological Enterprise (6–12% corporate tax), IIA grants, immediate R&D expensing, tax treaties with 60+ countries. Correct Transfer Pricing is essential to preserve these benefits." },
];

export const Route = createFileRoute("/en/cpa-foreign-companies")({
  head: () => ({
    meta: [
      { title: "Foreign Companies in Israel — Subsidiary, Branch, TP & IP | Nimrodi & Co." },
      { name: "description", content: "Israeli CPA for foreign companies: subsidiary or branch setup, banking KYC, payroll, Transfer Pricing and cross-border IP. Book a consultation." },
      { property: "og:title", content: "Foreign Companies in Israel — Nimrodi & Co." },
      { property: "og:description", content: "Comprehensive onboarding for international companies entering the Israeli market — entity, payroll, TP and IP." },
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
      heroImageAlt="Office tower with international company flags"
      icon={Globe2}
      eyebrow="Foreign Companies in Israel"
      title="Full local support for international companies entering Israel"
      intro="A foreign company entering the Israeli market needs a local partner who understands the regulation, language, banking system and tax authorities. We support international tech companies, global startups, foreign funds and multinationals through every stage of market entry — from entity setup to ongoing global compliance."
      highlights={[
        "Israeli subsidiary (Ltd) or branch setup",
        "Bank account opening and full KYC support",
        "Global Payroll & Israeli labor-law compliance",
        "Transfer Pricing (Section 85A) — Local File, Master File, CbCR",
        "US GAAP & IFRS reporting to the parent company",
        "Cross-border IP structuring under OECD BEPS",
        "Ongoing filings with ITA, VAT and the Registrar",
        "Preferred Technological Enterprise (6–12% corporate tax)",
      ]}
      sections={[
        {
          title: "Choosing the right structure",
          body: "The structural decision comes first. We analyze the options — Israeli subsidiary, branch, or EOR — considering planned scale, home country, treaty network, IP roadmap and future funding.",
        },
        {
          title: "End-to-end setup process",
          body: "Once the decision is made we handle everything:",
          bullets: [
            "Company registration with the Registrar (2–3 business days)",
            "Registration with VAT, ITA and Bituach Leumi",
            "Bank account opening with full KYC representation",
            "Employer registration and payroll setup",
            "Accounting system tailoring for the entity's needs",
          ],
        },
        {
          title: "Global Payroll & Israeli labor law",
          body: "Employing in Israel means compliance with a dense set of local labor obligations — every one of which we manage as your local finance function:",
          bullets: [
            "Monthly payslips compliant with Israeli labor law",
            "Pension, severance and study fund contributions",
            "Reporting to Bituach Leumi and income tax withholding",
            "Executive compensation, options (Section 102 – Equity & ESOP Incentive Plans) and equity awards",
            "Termination, severance settlements and Form 161 filings",
            "Global payroll coordination with parent HR systems",
          ],
        },
        {
          title: "Ongoing management & parent reporting",
          body: "After setup we operate as your local finance team — day-to-day bookkeeping, VAT and tax filings, monthly payroll, quarterly reporting packs to the parent, and annual audited financial statements aligned to the group's US GAAP or IFRS reporting standard.",
        },
        {
          title: "Transfer Pricing & BEPS compliance",
          body: "For companies with material intra-group transactions we prepare Transfer Pricing studies compliant with OECD guidelines and Section 85A of the Israeli Income Tax Ordinance. Robust documentation protects against ITA assessments and gives certainty to the group:",
          bullets: [
            "Full benchmark study of comparable market transactions",
            "Selection of the optimal method (CUP, Cost Plus, TNMM)",
            "Functional analysis — functions, assets and risks",
            "Local File and Master File under BEPS Action 13",
            "Country-by-Country Reporting (CbCR) coordination",
            "Annual updates and defense before the ITA",
          ],
        },
        {
          title: "Cross-Border IP Tax Structuring",
          body: "The location of a group's intellectual property is one of the most consequential tax decisions — it drives effective tax rate, royalty flows and eventual Exit valuation. We plan and execute optimal IP structures in Israel and abroad, in full compliance with OECD BEPS and the Israeli Income Tax Ordinance:",
          bullets: [
            "IP location strategy: Israel (Preferred Tech 6–12%), Ireland, Luxembourg, Singapore",
            "Intra-group technology transfers under Section 85A at arm's length",
            "BEPS compliance: Substance, DEMPE, Master File / Local File / CbCR",
            "Cost-Sharing Agreements (CSA) between Israeli parent and foreign subsidiaries",
            "Patent and trademark strategy, royalty models and License Agreements",
            "Pre-Rulings from the ITA on IP transactions and full documentation",
            "Optimization of withholding tax on royalties under tax treaties",
          ],
        },
        {
          title: "Israeli tax incentives for multinationals",
          body: "Foreign-owned Israeli subsidiaries can access the full range of Israeli tax incentives, dramatically reducing the group's effective tax rate — provided the Transfer Pricing story is coherent:",
          bullets: [
            "Preferred Technological Enterprise — 6% corporate tax (12% standard track)",
            "Dividend exemption from a Preferred Enterprise in defined cases",
            "Immediate expensing of R&D in the year incurred",
            "IIA grants — 20–50% of approved R&D expenditure",
            "Tax treaties with 60+ countries — bilateral relief from double taxation",
          ],
        },
        {
          title: "Fractional CFO for foreign companies in Israel",
          body: (
            <>
              Multinationals operating in Israel need a senior local finance presence that speaks the HQ's language (US GAAP / IFRS, SOX-ready internal controls) while knowing Israeli regulation in depth. We serve as the company's Israeli <Link to="/en/fractional-cfo" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">Fractional CFO</Link> — the bridge between Corporate and Local — while also leading the annual <Link to="/en/audit" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">statutory audit and M&A due diligence</Link> and running local <Link to="/en/payroll" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">payroll and Section 102 equity plans</Link>.
            </>
          ),
          bullets: [
            "Local Country Controller / Country CFO for HQ in Israel",
            "Monthly and quarterly reporting to HQ in the required format and currency",
            "Local budget control aligned with the Group plan",
            "Israeli banking, insurance and regulatory relationship management",
            "Support for statutory audits and Group internal audit",
            "Readiness for M&A, Carve-Out or Wind-Down",
          ],
        },
      ]}

      faqs={FAQS}
      ctaHeadline="Considering market entry to Israel? Let's schedule an intro call."
    />
  ),
});
