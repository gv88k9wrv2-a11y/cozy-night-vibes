import { createFileRoute } from "@tanstack/react-router";
import { FileSpreadsheet } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-tax.webp";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "What is a Pre-Ruling and when should we get one?", a: "A Pre-Ruling is a binding written position from the Israel Tax Authority on a specific transaction (M&A, reorganization, ESOP structure, residency, crypto activity). We recommend one whenever the tax exposure is material and precedent is unclear." },
  { q: "Do you handle tax disputes, audits and appeals?", a: "Yes — from responding to ITA information requests, through the assessment process (שומה), objections (השגה), settlement negotiations and appeals to the District Court." },
  { q: "Can you handle crypto tax compliance?", a: "Yes. We provide crypto tax services — Bitcoin, DeFi, NFT, staking. We produce certified blockchain P&L reports, obtain Pre-Rulings, and manage AML/KYC to move capital into the Israeli banking system in strict alignment with Bank of Israel policy." },
  { q: "What is Voluntary Disclosure (גילוי מרצון)?", a: "A structured ITA process to legalize previously undeclared foreign accounts, assets or income — paying the tax with limited interest and receiving criminal immunity. With FATCA and CRS in force, exposure is nearly automatic; acting proactively is essential." },
  { q: "Can you plan a corporate reorganization tax-efficiently?", a: "Yes — we plan and execute tax-deferred reorganizations under Sections 103–105, including mergers, spin-offs and asset transfers between related entities." },
];

export const Route = createFileRoute("/en/tax-consulting")({
  head: () => ({
    meta: [
      { title: "Complex Tax Disputes, Crypto & Voluntary Disclosure | Nimrodi & Co." },
      { name: "description", content: "Israeli tax advisory: Pre-Rulings, crypto compliance, Voluntary Disclosure, reorganizations, audits and appeals for companies and investors. Book a call." },
      { property: "og:title", content: "Tax Advisory, Crypto & Voluntary Disclosure — Nimrodi & Co." },
      { property: "og:description", content: "Tax planning, Pre-Rulings, crypto compliance and Voluntary Disclosure from a Herzliya boutique CPA firm." },
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
      heroImage={heroImg}
      heroImageAlt="Tax planning documents on an executive desk"
      icon={FileSpreadsheet}
      eyebrow="Complex Tax, Crypto & Voluntary Disclosure"
      title="Complex tax disputes, crypto assets and Voluntary Disclosure"
      intro="Sound tax planning saves years of pain. We advise entrepreneurs, companies and international investors on complex Israeli and cross-border tax matters — structuring transactions, obtaining Pre-Rulings, defending audits, managing crypto compliance, and running Voluntary Disclosure programs — with the same partners you speak to on day one."
      highlights={[
        "Corporate & personal tax planning",
        "Pre-Rulings (החלטות מיסוי) from the Israel Tax Authority",
        "Reorganizations under Sections 103–105",
        "Objections (השגה) and District Court appeals",
        "Crypto tax compliance — Bitcoin, DeFi, NFT, staking",
        "AML/KYC to move crypto capital into Israeli banks",
        "Voluntary Disclosure (גילוי מרצון) — foreign accounts",
        "FATCA, FBAR and CRS reporting",
        "Residency planning (returning resident, exit tax)",
      ]}
      sections={[
        {
          title: "Planning that anticipates the Exit",
          body: "Effective tax planning happens before transactions close, not after. We work with founders, executives and boards to model the tax implications of fundraising, M&A, secondaries, spin-offs and Exit — and choose the structure that maximizes after-tax outcome.",
        },
        {
          title: "Pre-Rulings (החלטות מיסוי)",
          body: "For material or novel transactions we prepare and negotiate written Pre-Rulings with the Israel Tax Authority. A well-prepared ruling gives certainty to founders, employees, buyers and investors — and often unlocks the deal.",
        },
        {
          title: "Crypto Tax Compliance",
          body: "The Israel Tax Authority classifies Bitcoin, Ethereum and digital assets as property for tax purposes — every sale, coin-to-coin swap or purchase-in-crypto is a taxable event. We advise on digital assets, DeFi, NFT and staking — including certified reports and moving capital into the Israeli banking system in strict alignment with Bank of Israel policy:",
          bullets: [
            "Full blockchain P&L: Binance, Coinbase, Kraken, KuCoin, MetaMask",
            "Real capital-gain calculation using FIFO/LIFO at transaction-date FX",
            "DeFi handling: Liquidity Mining, Yield Farming, Lending, Airdrops",
            "NFT taxation: minting, primary sale, secondary market, royalties",
            "Staking and Mining — ordinary income vs. capital gains classification",
            "Pre-Ruling on trader (business) vs. investor (capital) classification",
            "End-to-end AML/KYC and Israeli banking onboarding for crypto proceeds",
            "Reporting under ITA Circular 05/2018 and subsequent guidance",
          ],
        },
        {
          title: "Voluntary Disclosure (גילוי מרצון) for undeclared foreign accounts",
          body: "If you hold undeclared foreign bank accounts, securities, real estate, crypto or business activity, Voluntary Disclosure is the safe path to legalize the position — paying the tax with limited interest and obtaining criminal immunity. Acting before the ITA reaches you is essential — with FATCA and CRS, exposure is nearly automatic:",
          bullets: [
            "Anonymous preliminary track — assess issues without disclosing the taxpayer",
            "Regular track / short-form track for accounts below defined thresholds",
            "Full asset schedule, activity mapping and historic income reconstruction",
            "FATCA handling (US accounts), FBAR and Form 8938 coordination",
            "CRS — global automatic exchange of information between tax authorities",
            "Bringing the funds into Israel through the local banking system",
            "Legalizing undeclared foreign inheritances and complex estates",
          ],
        },
        {
          title: "Complex tax audits and District Court appeals",
          body: "For material assessments — cross-border issues, Pocket Company, Section 3(J1), Transfer Pricing, Preferred Enterprise or crypto taxation — you need advisors who know current case law and ITA practice. We lead complex matters from objection through District Court appeal:",
          bullets: [
            "Professional dissection of the assessment and identification of attack points",
            "Evidence file: source documents, expert opinions, supporting case law",
            "Negotiation with the ITA — settlements that save interest and penalties",
            "Appeal to the District Court, Civil Tax Division",
            "Joint representation with leading tax-law counsel",
          ],
        },
        {
          title: "Objections, settlements and criminal-tax matters",
          body: "If the ITA challenges a position, we represent the client through every stage: initial response, assessment (שומה), objection (השגה), settlement negotiations and — where needed — District Court appeal. In criminal-tax matters we build the accounting defense file jointly with tax-law counsel, including kofer (settlement in lieu of prosecution) applications.",
        },
      ]}
      faqs={FAQS}
    />
  ),
});
