import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-freelancers.jpg";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "When should I register as osek patur vs. osek murshe?", a: "Osek patur (VAT-exempt dealer) is available under an annual revenue threshold updated yearly by the ITA. Above the threshold — or if your clients need VAT invoices — you must register as osek murshe. We assess the right fit at setup." },
  { q: "Company or self-employed — what's better?", a: "It depends on income level, expenses, savings goals and family situation. We run a personal simulation comparing after-tax cash — usually a company becomes attractive above a certain net profit range." },
  { q: "What is a capital declaration (hatzharat hon)?", a: "The ITA periodically requires self-employed individuals to file a personal statement of assets and liabilities. Differences between statements are treated as taxable income unless explained. We prepare and defend it." },
];

export const Route = createFileRoute("/en/cpa-freelancers")({
  head: () => ({
    meta: [
      { title: "CPA for Freelancers & Self-Employed in Israel | Nimrodi & Co." },
      { name: "description", content: "Israeli CPA for freelancers and self-employed: setup, ongoing filings, annual return, capital declaration and tax planning." },
      { property: "og:title", content: "CPA for Freelancers — Nimrodi & Co." },
      { property: "og:description", content: "Personal, patient service for Israeli freelancers and independent professionals." },
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
      eyebrow="Freelancers & Self-Employed"
      title="CPA for freelancers, consultants and independent professionals"
      intro="We support hundreds of freelancers across Israel — developers, designers, consultants, doctors, lawyers, therapists. Personal, patient service, transparent pricing, and a partner who actually picks up the phone."
      highlights={[
        "File opening with all authorities",
        "Osek patur / osek murshe assessment",
        "Monthly / bi-monthly VAT and withholding filings",
        "Annual personal tax return",
        "Capital declaration (hatzharat hon)",
        "Self-employed vs. company simulation",
      ]}
      sections={[
        {
          title: "Getting started",
          body: "We open your files with the ITA, Bituach Leumi and VAT, register you in the right regime, set up simple digital bookkeeping and walk you through what to keep, what to deduct and how to report.",
        },
        {
          title: "Ongoing reporting",
          body: "Depending on your volume — monthly or bi-monthly VAT (Form 874), income tax advances (Form 102), withholding on subcontractors and annual reconciliations. All filed on time with reminders and reviewed by us.",
        },
        {
          title: "Annual return & tax planning",
          body: "We prepare your annual personal return, optimize deductions (pension, study fund, life insurance, home-office expenses), and plan the coming year — including whether it's time to incorporate.",
        },
      ]}
      faqs={FAQS}
    />
  ),
});
