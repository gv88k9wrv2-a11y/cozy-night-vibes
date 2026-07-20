import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";

export const POSTS = [
  {
    slug: "tax-planning-2026" as const,
    title: "תכנון מס לסוף שנת 2026 – מה חשוב לדעת עכשיו",
    excerpt:
      "המדריך המלא לתכנון מס לפני סוף השנה: הפקדות פנסיוניות, קרנות השתלמות, הכרה בהוצאות והקדמת הכנסות – כל מה שיכול לחסוך לכם עשרות אלפי שקלים.",
    date: "2026-06-10",
    readMin: 7,
    category: "מיסוי",
  },
  {
    slug: "startup-equity-102" as const,
    title: "אופציות לעובדים בסטארטאפ – מסלול 102 שווי הוני",
    excerpt:
      "איך להעניק אופציות לעובדים בצורה שממקסמת הטבות מס גם למעסיק וגם לעובד. מסלול 102 שווי הוני, אישור נאמן, ומלכודות שכדאי להימנע מהן.",
    date: "2026-05-20",
    readMin: 9,
    category: "סטארטאפים",
  },
  {
    slug: "crypto-reporting" as const,
    title: "דיווח על מטבעות קריפטו לרשות המסים – מדריך מעשי",
    excerpt:
      "כל מה שצריך לדעת על דיווח רווחי קריפטו: מתי חייבים לדווח, איך מחשבים רווח הון, הליך גילוי מרצון, ומה עושים עם ארנקים שאבדו.",
    date: "2026-07-04",
    readMin: 6,
    category: "מיסוי בינלאומי",
  },
];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "בלוג מקצועי | נמרודי ושות׳ – רואי חשבון בהרצליה" },
      {
        name: "description",
        content:
          "מאמרים מקצועיים על מיסוי, ליווי סטארטאפים, קריפטו, גיוסי הון, ורגולציה – בשפה נגישה ומעודכנת.",
      },
      { property: "og:title", content: "בלוג – נמרודי ושות׳" },
      {
        property: "og:description",
        content: "עדכונים ומאמרים על מיסוי, חשבונאות וגיוסי הון.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:image", content: "https://cpa-test-1.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://cpa-test-1.lovable.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">
            בלוג מקצועי
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            תובנות שממנפות עסקים
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            מדריכים, טיפים ועדכונים מהעולם החשבונאי והמיסויי – מבוסס ניסיון ממשי בשטח.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg"
            >
              <div className="mb-3 inline-flex w-fit items-center rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-gold">
                {p.category}
              </div>
              <h2 className="font-display text-xl font-bold text-primary group-hover:text-gold">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                  {new Date(p.date).toLocaleDateString("he-IL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {p.readMin} דק׳ קריאה
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
