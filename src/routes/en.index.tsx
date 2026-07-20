import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Globe2,
  MessageCircle,
  Phone,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  FloatingWhatsAppEn,
  SiteFooterEn,
  SiteHeaderEn,
  WHATSAPP_URL_EN,
} from "../components/site-chrome-en";
import { ClientLogosStrip, ExecutiveTestimonials } from "../components/social-proof";
import heroImage from "../assets/hero-office.jpg";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";

const FAQS = [
  {
    q: "Where are you located and which regions do you serve?",
    a: "Our office is located in Herzliya Pituach business district. We serve clients in Herzliya, Ramat HaSharon, Ra'anana, Tel Aviv and beyond — as well as remote clients around the world via Zoom and digital collaboration tools.",
  },
  {
    q: "What does full accounting support for a company or startup include?",
    a: "End-to-end support: bookkeeping, payroll, annual and financial statements, tax advisory, CFO services, fundraising support and pre-IPO readiness — all under one roof.",
  },
  {
    q: "Do you work with freelancers and self-employed clients starting out?",
    a: "Absolutely. We support freelancers, independent professionals, developers and consultants — from opening files with the authorities, through ongoing reporting to annual returns, capital declarations and personal tax planning.",
  },
  {
    q: "How much does a CPA service cost?",
    a: "Fees depend on activity volume, number of transactions and required services. We invite you to a free introductory meeting where we present transparent, tailored pricing.",
  },
  {
    q: "Do you handle foreign income, crypto and relocation?",
    a: "Yes. We have a dedicated international tax practice — foreign account reporting (FBAR/FATCA counterparts), crypto taxation, residency severance and advisory for new immigrants and returning residents.",
  },
];

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Nimrodi & Co. CPA — Herzliya Pituach | Companies, Startups, Freelancers" },
      {
        name: "description",
        content:
          "Boutique CPA firm in Herzliya Pituach, Israel. Over 25 years of experience: audit, tax advisory, bookkeeping, payroll and fundraising support. Free introductory consultation.",
      },
      { property: "og:title", content: "Nimrodi & Co. CPA — Herzliya Pituach" },
      { property: "og:description", content: "Boutique CPA firm with 25+ years — accounting, tax and financial management for companies, startups and freelancers." },
      { property: "og:url", content: `${BASE}/en` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en` },
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomeEn,
});

function HomeEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Herzliya Pituach skyline" className="h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              25+ years serving Israeli & international clients
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-primary sm:text-6xl">
              Boutique CPA firm in Herzliya Pituach
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Personal attention, senior-partner involvement and deep expertise in Israeli taxation, high-tech accounting, cross-border structures and fundraising — from Seed to Exit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL_EN} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-semibold text-gold-foreground transition hover:brightness-95">
                <MessageCircle className="h-5 w-5" aria-hidden />
                Free consultation
              </a>
              <a href="tel:+97299582211" className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
                <Phone className="h-4 w-4" aria-hidden />
                +972-9-9582211
              </a>
            </div>

            <div className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { n: "25+", l: "Years of experience" },
                { n: "300+", l: "Active clients" },
                { n: "$500M+", l: "Raised by clients" },
                { n: "40+", l: "Countries" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-gold sm:text-4xl">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ClientLogosStrip lang="en" />

        {/* Services */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-gold">Our services</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">Everything a modern business needs</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                { to: "/en/cpa-startups", icon: Building2, title: "Startups & Tech", desc: "Fundraising, ESOP (section 102), Israeli-Delaware Flip, preferred tech enterprise status." },
                { to: "/en/cpa-freelancers", icon: Briefcase, title: "Freelancers & Self-Employed", desc: "File openings, VAT reporting, annual returns, capital declarations." },
                { to: "/en/cpa-foreign-companies", icon: Globe2, title: "Foreign Companies", desc: "Subsidiary vs. branch, banking, Transfer Pricing, ongoing compliance." },
                { to: "/en/tax-consulting", icon: Award, title: "Tax Advisory", desc: "Planning, Pre-Ruling with the ITA, appeals and objections." },
                { to: "/en/audit", icon: TrendingUp, title: "Audit & Assurance", desc: "Israeli GAAP & IFRS, statutory audits, due diligence." },
                { to: "/en/cpa-international", icon: Users, title: "International Tax", desc: "Relocation, returning residents, olim benefits, treaties." },
              ].map((s) => (
                <Link key={s.to} to={s.to} className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-xl">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary group-hover:bg-gold/15 group-hover:text-gold">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 inline-flex text-xs font-semibold text-gold">Learn more →</span>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/en/services" className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                All services
              </Link>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="border-y border-border/60 bg-secondary/40 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-gold">Why Nimrodi & Co.</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">A boutique firm, Big-Four expertise</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Senior partner attention", d: "Direct access to the partner in charge — not a rotating junior team." },
                { t: "Cross-border expertise", d: "Israeli-US Flips, transfer pricing, treaties, dual filings." },
                { t: "Tech industry native", d: "Priority, QuickBooks, Xero, NetSuite — and we speak startup." },
                { t: "Regulatory depth", d: "Tax Authority pre-rulings, IIA grants, preferred enterprise status." },
                { t: "Fundraising support", d: "Data rooms, financial modeling, DD ready — from Seed to Series C." },
                { t: "Bilingual practice", d: "Full service in Hebrew and English, working across time zones." },
              ].map((f) => (
                <div key={f.t} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                    <div>
                      <h3 className="font-display text-lg font-bold text-primary">{f.t}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ExecutiveTestimonials lang="en" />

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-gold">FAQ</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">Frequently asked questions</h2>
            </div>
            <div className="mt-10 space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="group rounded-lg border border-border bg-card p-4 shadow-sm open:shadow-md">
                  <summary className="cursor-pointer list-none font-semibold text-primary">
                    <span className="mr-2 text-gold">+</span>
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's talk about your business</h2>
            <p className="mt-3 text-primary-foreground/80">Free introductory consultation — no obligations.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL_EN} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground hover:brightness-95">
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
              <Link to="/en/contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-transparent px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
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
