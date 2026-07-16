import { Link, useRouterState } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  FloatingWhatsApp,
  RelatedServicesNav,
  SiteFooter,
  SiteHeader,
  WHATSAPP_URL,
} from "./site-chrome";

export type ServiceFAQ = { q: string; a: string };

export type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  highlights: string[];
  sections: { title: string; body: string; bullets?: string[] }[];
  faqs: ServiceFAQ[];
  ctaHeadline?: string;
  icon: LucideIcon;
  heroImage?: string;
  heroImageAlt?: string;
};

export function ServiceLanding({
  eyebrow,
  title,
  intro,
  highlights,
  sections,
  faqs,
  ctaHeadline = "מוכנים להתקדם? נשמח לפגישת ייעוץ ראשונית ללא התחייבות.",
  icon: Icon,
  heroImage,
  heroImageAlt,
}: ServiceLandingProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
      {/* Hero */}
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <nav className="mb-6 text-xs text-muted-foreground" aria-label="breadcrumb">
            <Link to="/" className="hover:text-primary">בית</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary">שירותים</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{eyebrow}</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            <Icon className="h-3.5 w-3.5" aria-hidden />
            {eyebrow}
          </div>

          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{intro}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-semibold text-gold-foreground transition hover:brightness-95"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              ייעוץ ראשוני בוואטסאפ
            </a>
            <a
              href="tel:+97299582211"
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" aria-hidden />
              09-9582211
            </a>
          </div>

          {heroImage ? (
            <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-xl">
              <img
                src={heroImage}
                alt={heroImageAlt ?? title}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80 md:h-96"
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6">
          {sections.map((s) => (
            <article key={s.title}>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                {s.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground whitespace-pre-line">
                {s.body}
              </p>
              {s.bullets && (
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border/60 bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold text-primary">
            שאלות ותשובות
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-border bg-card p-4 shadow-sm open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-semibold text-primary">
                  <span className="mr-2 text-gold">+</span>
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <RelatedServicesNav currentPath={pathname} />

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            {ctaHeadline}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground hover:brightness-95"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              דברו איתנו
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              לעמוד יצירת קשר
            </Link>
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

export function buildFaqJsonLd(faqs: ServiceFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
