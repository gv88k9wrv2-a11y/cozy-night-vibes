import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-freelancers.jpg";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "When should I register as osek patur vs. osek murshe?", a: "Osek patur (VAT-exempt dealer) is available under an annual revenue threshold updated yearly by the ITA. Above the threshold — or if your clients need VAT invoices — you must register as osek murshe. We assess the right fit at setup." },
  { q: "Sole proprietor or private company — what's better?", a: "It depends on income, expenses, savings and family situation. We run a personal simulation comparing after-tax cash — usually incorporation becomes attractive above a certain net profit range, but always subject to Pocket Company (חברת ארנק) risk analysis." },
  { q: "What is a capital declaration (הצהרת הון)?", a: "The ITA periodically requires self-employed individuals to file a personal statement of assets and liabilities. Differences between statements are treated as taxable income unless explained. We prepare and defend it." },
  { q: "I work with clients abroad — how do I invoice?", a: "An Israeli self-employed invoicing a foreign client applies 0% VAT under Section 30(a)(5) — no VAT charged, but input VAT is still recoverable. Invoices in English, currency conversion at the correct rate, and W-8BEN handling for US clients are all part of the setup we manage." },
  { q: "What is a Pocket Company (חברת ארנק) and how do I avoid the trap?", a: "Section 62A of the Israeli Income Tax Ordinance targets one-person companies used to shelter what is effectively employment income. Classification as a Pocket Company eliminates the corporate tax benefit and applies effective tax of ~48%. We structure incorporation to prove genuine business substance — multiple clients, business risk, real investment." },
];

export const Route = createFileRoute("/en/cpa-freelancers")({
  head: () => ({
    meta: [
      { title: "CPA for Freelancers, Consultants & Single-Member Companies in Israel" },
      { name: "description", content: "Israeli CPA for freelancers, consultants and single-member companies — digital registration, ongoing filings, annual return, capital declaration and Pocket Company (חברת ארנק) planning." },
      { property: "og:title", content: "CPA for Freelancers — Nimrodi & Co." },
      { property: "og:description", content: "Premium service for Israeli freelancers, elite tech consultants and boutique agencies." },
      { property: "og:url", content: `${BASE}/en/cpa-freelancers` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/cpa-freelancers` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-freelancers` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-freelancers` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Nimrodi & Co. — service illustration"
      icon={Briefcase}
      eyebrow="Freelancers, Consultants & Single-Member Companies"
      title="CPA for freelancers, elite consultants and boutique agencies"
      intro="Premium accounting for elite high-tech consultants, independent contractors and boutique agencies. Streamlined, fully digital tax registration; comprehensive annual returns and capital declarations; and strategic planning for the crossover from sole proprietor (עוסק מורשה) to incorporated company (חברה בע״מ) — with full protection against Pocket Company (חברת ארנק) reclassification."
      highlights={[
        "Full digital registration with VAT, ITA and Bituach Leumi",
        "Osek patur / osek murshe fit assessment",
        "Monthly / bi-monthly VAT and withholding filings",
        "Annual personal tax return with full deduction optimization",
        "Capital declaration (הצהרת הון) preparation and defense",
        "Sole proprietor → private company crossover simulation",
        "Pocket Company (חברת ארנק) risk mitigation",
        "Global freelancers — foreign clients, 0% VAT (Section 30(a)(5))",
        "Passive income: rental, crypto, foreign securities",
      ]}
      sections={[
        {
          title: "Getting started — the practical playbook",
          body: "When you go independent there's a required sequence of actions with the tax authorities. We handle all of it:",
          bullets: [
            "Status selection: osek patur / osek murshe / private company",
            "VAT file opening within 21 days of first invoice",
            "ITA file + Form 5329 and advance-payment instruction",
            "Bituach Leumi file + declared expected income",
            "Pension fund and Keren Hishtalmut for self-employed setup",
            "Digital invoice books / cloud accounting system activation",
          ],
        },
        {
          title: "Ongoing reporting",
          body: "Depending on your volume — monthly or bi-monthly VAT (Form 874), income tax advances (Form 102), withholding on subcontractors and annual reconciliations. All filed on time with reminders and reviewed by us.",
        },
        {
          title: "Annual return, capital declaration & tax planning",
          body: "We prepare your annual personal return, optimize deductions (pension, study fund, life insurance, home-office expenses, professional education), prepare the capital declaration (הצהרת הון) when the ITA requires it, and plan the coming year — including whether it's time to incorporate.",
        },
        {
          title: "Maximizing refunds and credits",
          body: "Most freelancers miss credits and refunds they're entitled to. We map every applicable item and file amended returns up to six years back where relevant:",
          bullets: [
            "Tax credit points (parents, children, academic degree, periphery residence)",
            "Full recognition of vehicle, phone, home-office and internet expenses",
            "Pension and Keren Hishtalmut contributions to the annual ceilings",
            "Retroactive refund claims (up to 6 years back)",
            "Correct withholding coordination between salaried and self-employed income",
          ],
        },
        {
          title: "Global freelancers — Israeli self-employed with foreign clients",
          body: "If you're a developer, designer, consultant or marketer working directly with clients in the US, Europe or Asia, your tax structure needs specialist handling. We support hundreds of global freelancers and know every nuance:",
          bullets: [
            "English invoices with 0% VAT under Section 30(a)(5)",
            "Receiving payments via PayPal, Wise, Stripe, Payoneer and wire",
            "Correct FX rate on income and payment dates",
            "Digital invoicing compliant with ITA requirements",
            "W-8BEN handling with US clients to avoid withholding",
            "Capital declaration with foreign assets (bank, PayPal, crypto)",
            "Foreign tax credit coordination under treaty",
          ],
        },
        {
          title: "Passive income — rental, crypto, securities",
          body: "Most freelancers also build a personal investment portfolio. We fold all passive income into a single, tax-efficient annual return:",
          bullets: [
            "Residential rental — 10% flat track vs. marginal-rate track with expenses",
            "Capital gains on Israeli and foreign securities — 25% + foreign tax credit",
            "Crypto (Bitcoin, Ethereum, altcoins) — 25% capital gains on real gain",
            "Dividends from Israeli (25%) and foreign companies (per treaty)",
            "Airbnb / short-term rental — business vs. passive classification",
          ],
        },
        {
          title: "Sole proprietor → private company — and the Pocket Company (חברת ארנק) trap",
          body: "Incorporation can be a major strategic step, but it carries the risk of being reclassified as a Pocket Company under Section 62A of the Israeli Income Tax Ordinance. The rule targets professionals using an Ltd shell for what is effectively employment — reclassification eliminates the tax benefit and applies ~48% effective tax. We structure the setup to be safe:",
          bullets: [
            "Economic crossover simulation — sole proprietor vs. company",
            "Genuine business substance: multiple clients, business risk, investment",
            "Avoid single-client dominance (70%+ of revenue is a clear red flag)",
            "Hiring employees or subcontractors — strengthens business classification",
            "Separation of owner's draws from salary; documentation of owner's role",
            "Pre-Ruling in borderline cases — full protection against future assessment",
            "Controlling-shareholder distribution policy compliant with Section 3(J1)",
          ],
        },
      ]}
      faqs={FAQS}
    />
  ),
});
