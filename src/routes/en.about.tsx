import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, MessageCircle } from "lucide-react";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn, WHATSAPP_URL_EN } from "../components/site-chrome-en";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: "About Nimrodi & Co. — Boutique CPA in Herzliya Pituach" },
      { name: "description", content: "About Nimrodi & Co. CPA — 25+ years serving Israeli and international clients from Herzliya Pituach with Big-Four expertise and boutique-firm attention." },
      { property: "og:title", content: "About Nimrodi & Co." },
      { property: "og:description", content: "A boutique CPA firm delivering senior-partner attention and Big-Four depth." },
      { property: "og:url", content: `${BASE}/en/about` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/about` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/about` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/about` },
    ],
  }),
  component: AboutEn,
});

function AboutEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              <Award className="h-3.5 w-3.5" aria-hidden />
              About the firm
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">
              A boutique CPA firm with big-firm depth
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Nimrodi & Co. was founded on a simple idea: give clients the depth and rigor of a Big-Four firm — with the accessibility, partner attention and continuity of a boutique. For 25+ years we've been trusted advisors to founders, executives, families and international companies operating in Israel.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6">
            <article>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Our story</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Founded by Shlomo Nimrodi, CPA — a graduate of one of Israel's leading Big-Four firms — the practice grew by word of mouth: entrepreneurs, executives and families who wanted a real advisor rather than a form-filler. Today we serve hundreds of active clients across tech, professional services, real estate and family offices, both in Israel and abroad.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Our approach</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Senior-partner attention. You always talk to the person actually doing the work.",
                  "Long-term relationships. Most of our clients have been with us for a decade or more.",
                  "Modern stack. We work on cloud accounting platforms so you have real-time visibility.",
                  "Cross-border fluency. Israeli tax deeply understood, coordinated with US, UK and EU advisors.",
                  "Transparent pricing. Fixed-scope engagements wherever possible — no billing surprises.",
                ].map((v) => (
                  <li key={v} className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Where we're based</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our office is in Herzliya Pituach — Israel's premier business district and home to the country's leading technology campuses. We serve clients across Israel and internationally.
              </p>
            </article>
          </div>
        </section>

        <section className="border-t border-border/60 bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's talk</h2>
            <p className="mt-3 text-primary-foreground/80">Free introductory consultation — no obligation.</p>
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
