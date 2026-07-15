import { createFileRoute } from "@tanstack/react-router";
import { ReceiptText } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "Can you run payroll for a foreign company with employees in Israel?", a: "Yes. We register the entity as an Israeli employer, set up payroll, National Insurance (Bituach Leumi), income tax and pension arrangements, and produce compliant Israeli payslips (tlush)." },
  { q: "Do you handle Section 102 ESOP plans?", a: "Yes — we work with trustees, coordinate Tax Authority approvals, produce Form 106, and support employees through exercise and sale." },
  { q: "What about severance (Form 161) and terminations?", a: "We prepare Form 161, coordinate with pension providers, calculate tax-optimal severance splits and support the departing employee through the process." },
];

export const Route = createFileRoute("/en/payroll")({
  head: () => ({
    meta: [
      { title: "Israeli Payroll Services | Section 102 ESOP | Nimrodi & Co." },
      { name: "description", content: "Full Israeli payroll: monthly payslips (tlush), Bituach Leumi, income tax, Section 102 ESOP, Form 106, Form 161 and pension compliance." },
      { property: "og:title", content: "Payroll & ESOP Services — Nimrodi & Co." },
      { property: "og:description", content: "Israeli payroll and equity compensation done right." },
      { property: "og:url", content: `${BASE}/en/payroll` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/payroll` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/payroll` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/payroll` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      icon={ReceiptText}
      eyebrow="Payroll & ESOP"
      title="Israeli payroll, equity compensation and employer compliance"
      intro="Israeli payroll is complex — mandatory pension, study fund, National Insurance, disability, health tax, severance, expat regimes and equity plans. We handle it all so you can focus on your team."
      highlights={[
        "Monthly Israeli payslips (tlush)",
        "Bituach Leumi & income tax filings",
        "Section 102 equity plans (capital / income track)",
        "Form 106, Form 161 (severance)",
        "Pension & study fund compliance",
        "Payroll for foreign companies (EOR alternative)",
      ]}
      sections={[
        {
          title: "Payroll for Israeli & foreign employers",
          body: "Whether you are an Israeli company hiring locally or a foreign company setting up first employees in Israel, we register the entity, arrange pension/insurance providers and run monthly payroll end-to-end.",
          bullets: [
            "Registration with Tax Authority, Bituach Leumi and pension funds",
            "Monthly gross-to-net calculations and payslips",
            "Employer filings (Form 102, annual Form 126)",
            "Employee onboarding and offboarding",
            "Support with expat and relocation tax regimes",
          ],
        },
        {
          title: "Section 102 ESOP plans",
          body: "We help startups design and operate Section 102 stock option plans in the capital gains track (25% preferential tax) — including trustee coordination, Tax Authority filings, exercise mechanics and employee guidance at sale/exit events.",
        },
        {
          title: "Termination & severance",
          body: "We prepare Form 161, coordinate with the pension provider on severance release, help split taxable vs. tax-deferred portions, and support the employee through their filing.",
        },
      ]}
      faqs={FAQS}
    />
  ),
});
