import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";
import { BLOG_POSTS } from "../data/blog-posts";

export const POSTS = BLOG_POSTS;

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "בלוג מקצועי | נמרודי ושות׳ – רואי חשבון בהרצליה" },
      {
        name: "description",
        content:
          "מאמרים מקצועיים על מיסוי בינלאומי, סטארטאפים, קריפטו, נדל״ן וחברות זרות בישראל – בשפה נגישה ומעודכנת. פנו אלינו לייעוץ.",
      },
      { property: "og:title", content: "בלוג – נמרודי ושות׳" },
      {
        property: "og:description",
        content: "עדכונים ומאמרים מקצועיים על מיסוי, חשבונאות וגיוסי הון.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:image", content: "https://cpa-test-1.lovable.app/og-image.webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://cpa-test-1.lovable.app/og-image.webp" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

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
            מדריכים, טיפים ועדכונים מעולם החשבונאות והמיסוי – מבוסס ניסיון ממשי בשטח.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              aria-label={`קרא את המאמר: ${p.title}`}
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
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:underline">
                קרא את המאמר ←
              </span>
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
