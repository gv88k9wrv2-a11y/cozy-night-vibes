import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2, Briefcase, Globe2, MapPin, Calculator, ReceiptText,
  FileSearch, FileSpreadsheet, Plane, MessageCircle, LineChart,
} from "lucide-react";

import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn, WHATSAPP_URL_EN } from "../components/site-chrome-en";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";

const GROUPS = [
  {
    title: "Core Services",
    items: [
      { to: "/en/fractional-cfo", label: "Fractional CFO", icon: LineChart, desc: "Outsourced senior CFO — Burn, Runway, VC-ready models, Board and continuous DD readiness." },
      { to: "/en/bookkeeping", label: "Bookkeeping", icon: Calculator, desc: "Priority, Xero, QuickBooks — clean books, monthly closes and management reporting." },
      { to: "/en/payroll", label: "Payroll & ESOP", icon: ReceiptText, desc: "Israeli payslips, Section 102 equity, Form 106, Form 161 and pension compliance." },
      { to: "/en/audit", label: "Audit & Assurance", icon: FileSearch, desc: "Statutory audits under Israeli GAAP and IFRS; M&A due diligence." },
      { to: "/en/tax-consulting", label: "Tax Advisory", icon: FileSpreadsheet, desc: "Tax planning, Pre-Rulings, objections and appeals with the ITA." },
    ],
  },

  {
    title: "By Client Type",
    items: [
      { to: "/en/cpa-startups", label: "Startups & Tech", icon: Building2, desc: "Fundraising, ESOP, Israeli-Delaware Flip, Preferred Tech Enterprise." },
      { to: "/en/cpa-freelancers", label: "Freelancers & Self-Employed", icon: Briefcase, desc: "Setup, ongoing filings, annual return and capital declaration." },
      { to: "/en/cpa-foreign-companies", label: "Foreign Companies", icon: Globe2, desc: "Subsidiary, branch, KYC, Transfer Pricing and ongoing compliance." },
      { to: "/en/cpa-herzliya", label: "Herzliya Pituach", icon: MapPin, desc: "Local boutique firm at the heart of Israel's tech corridor." },
    ],
  },
  {
    title: "International Tax",
    items: [
      { to: "/en/cpa-international", label: "Relocation & Returning Residents", icon: Plane, desc: "Residency, olim benefits, treaties and cross-border planning." },
    ],
  },
] as const;

export const Route = createFileRoute("/en/services")({
  head: () => ({
    meta: [
      { title: "Services — Nimrodi & Co. CPA | Herzliya Pituach" },
      { name: "description", content: "The full range of services from Nimrodi & Co. — audit, tax advisory, bookkeeping, payroll, ESOP, international structures and startup fundraising." },
      { property: "og:title", content: "Services — Nimrodi & Co." },
      { property: "og:description", content: "Comprehensive accounting, tax and financial services for companies, startups and individuals in Israel." },
      { property: "og:url", content: `${BASE}/en/services` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/services` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/services` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/services` },
    ],
  }),
  component: ServicesEn,
});

function ServicesEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">Our services</div>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
              A full-service boutique CPA firm
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              From day-one setup through year-end audits and cross-border planning — everything a modern business or professional needs, under one roof.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">{g.title}</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((s) => (
                    <Link key={s.to} to={s.to} className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-xl">
                      <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary group-hover:bg-gold/15 group-hover:text-gold">
                        <s.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold text-primary">{s.label}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      <span className="mt-4 inline-flex text-xs font-semibold text-gold">Learn more →</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Not sure which service fits?</h2>
            <p className="mt-3 text-primary-foreground/80">Book a free intro call — we'll map your needs and quote transparently.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL_EN} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground">
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
              <Link to="/en/contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                Contact page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
