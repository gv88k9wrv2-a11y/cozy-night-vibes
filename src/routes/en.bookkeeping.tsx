import { createFileRoute } from "@tanstack/react-router";
import { Calculator } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-bookkeeping.jpg";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "Which accounting software do you support?", a: "Priority, Xero, QuickBooks Online, NetSuite, Rivhit and SAP Business One. We choose the right platform per client and manage the full setup, chart of accounts and integrations." },
  { q: "Can you take over from an existing bookkeeper?", a: "Yes. We handle a clean migration: opening balances, historical reconciliations, VAT alignment and full handover from the previous provider — usually within 2–4 weeks." },
  { q: "Do you handle VAT and withholding tax reporting?", a: "Full monthly / bi-monthly VAT (Form 874), withholding tax on service providers (Form 856), employer reports and year-end reconciliations." },
];

export const Route = createFileRoute("/en/bookkeeping")({
  head: () => ({
    meta: [
      { title: "Bookkeeping Services in Israel | Nimrodi & Co. CPA" },
      { name: "description", content: "Professional bookkeeping in Israel — Priority, Xero, QuickBooks. Monthly VAT, withholding tax, management reports and clean books ready for audit." },
      { property: "og:title", content: "Bookkeeping — Nimrodi & Co. CPA" },
      { property: "og:description", content: "Modern digital bookkeeping and monthly reporting for companies and startups in Israel." },
      { property: "og:url", content: `${BASE}/en/bookkeeping` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/bookkeeping` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/bookkeeping` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/bookkeeping` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Nimrodi & Co. — service illustration"
      icon={Calculator}
      eyebrow="Bookkeeping"
      title="Modern digital bookkeeping for companies in Israel"
      intro="Clean, timely books are the foundation of every financial decision. We run full-cycle bookkeeping on modern cloud platforms — Priority, Xero and QuickBooks — with clear monthly reporting to management and investors."
      highlights={[
        "Full-cycle monthly bookkeeping",
        "VAT filings (Form 874) and withholding tax",
        "Bank & credit card reconciliations",
        "Management dashboards and KPIs",
        "Audit-ready trial balance",
        "Multi-currency and multi-entity",
      ]}
      sections={[
        {
          title: "What we do end-to-end",
          body: "We handle every touchpoint between transactions and financial statements:",
          bullets: [
            "Vendor invoice capture, approvals and payments",
            "Customer invoicing, collections tracking and A/R",
            "Payroll integration and employee reimbursements",
            "Monthly close with reconciliations and accruals",
            "VAT, withholding tax and annual reconciliations",
            "IFRS / Israeli GAAP presentation-ready reports",
          ],
        },
        {
          title: "Cloud stack & automation",
          body: "We work exclusively on modern cloud platforms so you and your investors have real-time visibility. Typical stack: accounting (Priority / Xero / QuickBooks), payments (Melio, Bill.com, Papaya), receipts (Dext, Hashavshevet Docs), and reporting (Google Sheets / Fathom / native BI).",
        },
        {
          title: "Reporting cadence",
          body: "Monthly management pack including P&L vs. budget, cash flow, A/R aging and KPIs relevant to your business. Quarterly investor updates and annual statements aligned with your auditors.",
        },
      ]}
      faqs={FAQS}
      ctaHeadline="Want cleaner, faster books? Let's talk."
    />
  ),
});
