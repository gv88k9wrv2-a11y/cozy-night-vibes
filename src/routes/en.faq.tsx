import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";

const FAQS = [
  { cat: "General", q: "Where is your office and which regions do you serve?", a: "Our office is located in Herzliya Pituach. We serve clients across Israel and internationally via video." },
  { cat: "General", q: "How does the first meeting work?", a: "A free 45-minute introductory meeting — in-person or via video. We map your situation, discuss options and follow up with a transparent proposal." },
  { cat: "General", q: "In which languages do you work?", a: "Hebrew and English, at full professional level — including reports, meetings and correspondence." },
  { cat: "Fees", q: "How is pricing determined?", a: "We prefer fixed-scope engagements. Fees are based on activity volume, complexity and required services. No billable-hour surprises." },
  { cat: "Startups", q: "When should a startup engage a CPA?", a: "Before incorporation. Structure, founders' equity, vesting and 83(b) elections all have long-term tax impact." },
  { cat: "Startups", q: "Do you handle Israeli-Delaware Flips?", a: "Yes — end-to-end, including the Israeli Pre-Ruling for tax-deferred share exchange." },
  { cat: "Foreign companies", q: "Can you register a subsidiary and open a bank account for a foreign company?", a: "Yes. Subsidiary registration is 3–5 business days; bank account opening for foreign-owned entities typically takes 4–8 weeks including KYC." },
  { cat: "Individuals", q: "What are the tax benefits for new immigrants?", a: "New immigrants and senior returning residents enjoy 10 years of exemption on foreign-source income and gains, and an exemption from reporting foreign assets." },
];

export const Route = createFileRoute("/en/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Nimrodi & Co. CPA" },
      { name: "description", content: "Answers to the most common questions about our services, pricing, working process and Israeli taxation." },
      { property: "og:title", content: "FAQ — Nimrodi & Co." },
      { property: "og:description", content: "Everything you wanted to ask before starting to work with a CPA." },
      { property: "og:url", content: `${BASE}/en/faq` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/faq` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/faq` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/faq` },
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
  component: FaqEn,
});

function FaqEn() {
  const cats = Array.from(new Set(FAQS.map((f) => f.cat)));
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">FAQ</div>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">Frequently asked questions</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              The most common questions we get from prospective clients — grouped by topic.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
            {cats.map((cat) => (
              <div key={cat}>
                <h2 className="font-display text-2xl font-bold text-primary">{cat}</h2>
                <div className="mt-4 space-y-3">
                  {FAQS.filter((f) => f.cat === cat).map((f) => (
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
            ))}
          </div>
        </section>
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
