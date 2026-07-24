import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/team-photo.webp";
import { Users } from "lucide-react";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";

const BASE = "https://cpa-test-1.lovable.app";

export const Route = createFileRoute("/en/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Nimrodi & Co. CPA" },
      { name: "description", content: "Meet the partners and senior team at Nimrodi & Co., a boutique CPA firm in Herzliya Pituach." },
      { property: "og:title", content: "Our Team — Nimrodi & Co." },
      { property: "og:description", content: "Senior partners with decades of experience across tax, audit and cross-border structures." },
      { property: "og:url", content: `${BASE}/en/team` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/team` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/team` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/team` },
    ],
  }),
  component: TeamEn,
});

const TEAM = [
  { name: "Shlomo Nimrodi, CPA", role: "Founding Partner", bio: "Certified Public Accountant. Member of the Institute of CPAs in Israel. Extensive experience as a Controller and CFO for private and public companies. Extensive experience in consulting and accompanying foreign companies operating in Israel. Expert in Israeli and international taxation, handling complex tax issues for companies and individuals. Full guidance of IPO processes on the Tel Aviv Stock Exchange and comprehensive assistance to startups in fundraising." },
];

function TeamEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              <Users className="h-3.5 w-3.5" aria-hidden />
              The team
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">Our partners and senior team</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Our professional team provides private clients, corporations, and startups with comprehensive accounting expertise and advanced, high-level tax solutions.
            </p>
          </div>
        </section>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <img src={heroImg} alt="Nimrodi & Co. CPA team at the Herzliya Pituach offices" width={1024} height={1024} loading="lazy" decoding="async" className="h-auto w-full object-cover" />
          </div>
        </div>
      </section>


        <section className="py-16">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:max-w-md">
            {TEAM.map((m) => (
              <article key={m.name} className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-bold text-primary">{m.name}</h2>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">{m.role}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
