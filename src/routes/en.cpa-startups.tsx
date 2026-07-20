import { createFileRoute } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-startups.jpg";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "When does a startup need a CPA?", a: "Before incorporation. Choosing the right structure (Israeli Ltd / Delaware C-Corp / dual-entity), founders' equity, vesting mechanics and 83(b) elections all affect the eventual tax outcome and fundraising trajectory." },
  { q: "Do you support fundraising rounds?", a: "Yes — from Pre-Seed to Series C and beyond. We prepare the data room, build the financial model, coordinate with counsel on SAFEs / CLAs / priced rounds, and structure the round for tax efficiency." },
  { q: "Can you handle an Israel–Delaware Flip?", a: "Yes — this is a core practice. We manage the Israeli side end-to-end: Pre-Ruling with the ITA for tax-deferred share exchange, coordination with US counsel, and post-flip Transfer Pricing between the Delaware C-Corp parent and the Israeli R&D subsidiary." },
  { q: "What is Section 102 and how does it work?", a: "Section 102 lets Israeli companies grant equity to employees under the capital gains track (25% tax) via a trustee. We prepare and file the plan, appoint and work with the trustee, and support employees at exercise and sale." },
  { q: "What is the Preferred Technological Enterprise regime?", a: "Companies meeting R&D and revenue thresholds under the Capital Investments Encouragement Law enjoy corporate tax of 12% (or 6% for a Special Preferred Technological Enterprise), vs. the standard 23%. We check eligibility, file with the ITA and defend on audit." },
  { q: "What is a 409A Valuation and why does it matter?", a: "If your company is a Delaware C-Corp or planning a US round, you need a fair-market-value assessment of the common stock under IRC §409A — required on every option grant, after every material event, and at least every 12 months. Wrong valuation exposes employees and the company to a 20% IRS penalty plus interest." },
  { q: "How should we build the Cap Table for investors?", a: "Investors scrutinize the cap table. We build it in Carta, Pulley or Ledgy, keep it fully diluted (including SAFEs, CLAs and Option Pool), and run dilution simulations of future rounds so founders understand the impact before signing." },
  { q: "What is a Secondary Transaction and what are the tax risks?", a: "A Secondary is a sale of founder or employee shares to an existing or new investor — an opportunity for early liquidity. The main risk is misclassification: a Section 102 capital-gains gain (25%) can be reclassified as employment income (up to 50%) without proper structuring. We advise on route, escrow, clawback and Pre-Rulings." },
];

export const Route = createFileRoute("/en/cpa-startups")({
  head: () => ({
    meta: [
      { title: "CPA for Startups in Israel | Fundraising, Section 102, Delaware Flip, 409A" },
      { name: "description", content: "Boutique CPA firm for Israeli startups — Pre-Seed to Series C, SAFE/CLA structuring, Section 102 ESOP, 409A valuations, Israel–Delaware Flip, Preferred Technological Enterprise, IIA grants and IFRS/US-GAAP." },
      { property: "og:title", content: "CPA for Startups — Nimrodi & Co." },
      { property: "og:description", content: "Accounting, tax and CFO services for Israeli startups from Pre-Seed to Exit." },
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
      heroImage={heroImg}
      heroImageAlt="Nimrodi & Co. — service illustration"
      icon={Rocket}
      eyebrow="Startups & Technology Ventures"
      title="CPA for Israeli startups — from incorporation to Exit"
      intro="We speak startup fluently. Nimrodi & Co. supports Israeli technology ventures at every stage — Pre-Seed to Series C, Israel–Delaware Flips, Section 102 ESOPs, 409A valuations, Preferred Technological Enterprise status, IIA grants and Exit / M&A readiness."
      highlights={[
        "Fundraising support: SAFE, CLA, priced rounds (Seed → Series C)",
        "Section 102 ESOP — capital gains track with trustee",
        "409A valuations and dual IFRS 2 / ASC 718 option accounting",
        "Israel–Delaware Flip and cross-border reorganizations",
        "Preferred Technological Enterprise (6%–12% corporate tax)",
        "IIA / Israel Innovation Authority grants and financial audits",
        "Secondary transactions — founder and employee liquidity",
        "Full Cap Table on Carta / Pulley / Ledgy",
        "M&A Due Diligence and Quality of Earnings pre-Exit",
      ]}
      sections={[
        {
          title: "What we cover, end-to-end",
          body: "Everything you need so you can focus on product and customers:",
          bullets: [
            "Incorporation, structure and founders' agreements",
            "Digital bookkeeping (Priority / QuickBooks / Xero / NetSuite)",
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
          title: "Israel–Delaware Corporate Flip",
          body: "Most Israeli startups eventually flip to a Delaware C-Corp parent to satisfy US investors. We manage the Israeli side end-to-end: Pre-Ruling with the ITA for tax-deferred share exchange, coordination with US and Israeli counsel, and post-flip Transfer Pricing between the Delaware parent and the Israeli R&D subsidiary — with a clean audit trail to the New Angels Law and Preferred Enterprise regimes.",
        },
        {
          title: "Section 102 ESOP & 409A Valuations",
          body: "Equity is the strongest talent-retention tool a startup has. We prepare and file the Section 102 plan, appoint the trustee, and produce the accounting and valuations required for both Israeli and US reporting:",
          bullets: [
            "Section 102 capital gains track — 25% tax with trustee",
            "409A valuation for common stock (Delaware / US operations)",
            "Option accounting under IFRS 2 (Israel) and ASC 718 (US)",
            "Employee support at exercise and sale — tax optimization",
            "Coordination with the Israeli trustee and US transfer agent",
          ],
        },
        {
          title: "Preferred Technological Enterprise & Israeli tax incentives",
          body: "The Capital Investments Encouragement Law grants qualifying tech companies significantly reduced corporate tax. We assess eligibility, prepare and file the application, and defend the position on ITA audit:",
          bullets: [
            "Preferred Technological Enterprise — 12% corporate tax",
            "Special Preferred Technological Enterprise — 6% corporate tax",
            "New Angels Law — enhanced R&D expense recognition for investors",
            "IIA grants — 20–50% of approved R&D expenditure",
            "Immediate R&D expensing and dividend exemption in defined cases",
          ],
        },
        {
          title: "Secondary Transactions for founders & employees",
          body: "A Secondary — sale of founder or employee shares to an existing or new investor — is a valuable early-liquidity opportunity but carries significant tax risk. Misclassification can convert a 25% capital gain into employment income taxed at up to 50%. We advise founders and employees on the full strategy:",
          bullets: [
            "Confirmation of Section 102 capital-gains routing pre-transaction",
            "Transaction structure: Direct Sale, Tender Offer, trustee-led aggregation",
            "Escrow, holdback and Clawback provisions — accounting and tax treatment",
            "Pre-Ruling with the ITA for material transactions",
            "Employee reporting (Form 106) and trustee coordination",
            "Founder-level planning: tax spreading, returning-resident relief, spousal split",
          ],
        },
        {
          title: "Funding structures: SAFE, CLA and conversions",
          body: "SAFE (Simple Agreement for Future Equity) and CLA (Convertible Loan Agreement) are the dominant early-stage funding instruments. Each has trade-offs, risks and accounting complexity. We structure the documents and accounting so nothing surprises you at the next round:",
          bullets: [
            "SAFE terms: Valuation Cap, Discount, MFN, Pro-Rata",
            "CLA with interest, maturity and automatic/optional conversion",
            "Accounting under IFRS 9 / ASC 480 — liability vs. equity",
            "Conversion scenarios at the next round — fully diluted impact",
            "Tax implications for company and investor — including FIRPTA and Section 1202 QSBS",
            "Side Letters and Consent Forms required for the next round",
          ],
        },
        {
          title: "Fundraising readiness — what a serious investor will check",
          body: "Before you approach a Priced Round, the accounting-legal foundation must survive professional Due Diligence without surprises. The items we prepare upfront:",
          bullets: [
            "Clean fully-diluted Cap Table — including SAFEs, CLAs and Option Pool",
            "Consistent, audited financial statements for two prior years",
            "Section 102 plan approved by the ITA with an active trustee",
            "Documented Transfer Pricing policy between Israel and subsidiaries",
            "Proper founders' agreements with Vesting and Cliff",
            "Key customer contracts without problematic Change-of-Control clauses",
            "Clean tax file — no open assessments or authority arrears",
          ],
        },
      ]}
      faqs={FAQS}
      ctaHeadline="Building a startup or about to raise? Let's talk."
    />
  ),
});
