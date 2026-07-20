import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Linkedin, Mail } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";
import teamPhoto from "../assets/team-photo.jpg";

const TEAM = [
  {
    name: "רו״ח שלמה נמרודי",
    role: "שותף מייסד",
    bio: "בעל ותק של למעלה מ־30 שנה בחשבונאות, ניהול פיננסי וייעוץ עסקי. שימש בעברו כחשב ומנהל כספים של חברות ציבוריות, לרבות ליווי הליכי הנפקה בבורסה. מוסמך על ידי לשכת רואי החשבון בישראל.",
    credentials: ["רו״ח מוסמך", "תואר B.A. בחשבונאות וכלכלה", "30+ שנות ניסיון"],
  },
  {
    name: "צוות ראשי צוות",
    role: "ראשי צוות חשבונאות ומס",
    bio: "צוות ראשי צוות מקצועי המתמחה בליווי חברות טכנולוגיה, סטארטאפים ועצמאים – עם ניסיון בדוחות כספיים, ייעוץ מס, תלושי שכר וליווי גיוסים.",
    credentials: ["רו״ח מוסמכים", "התמחות בטכנולוגיה", "ליווי גיוסי הון"],
  },
  {
    name: "צוות הנהלת חשבונות",
    role: "מנהלי חשבונות בכירים",
    bio: "מנהלי חשבונות בכירים המתמחים בעבודה במערכות דיגיטליות מתקדמות – Priority, ריווחית, חשבשבת ו-QuickBooks. שקיפות מלאה ודיוק בכל דיווח.",
    credentials: ["מנהלי חשבונות סוג 3", "מערכות דיגיטליות", "שכר וניכויים"],
  },
];

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "הצוות שלנו | נמרודי ושות׳ – רואי חשבון בהרצליה" },
      {
        name: "description",
        content:
          "הכירו את הצוות המקצועי של משרד רואי חשבון נמרודי ושות׳ – רואי חשבון מוסמכים, מנהלי חשבונות ומומחי מס עם ניסיון של עשרות שנים.",
      },
      { property: "og:title", content: "הצוות של נמרודי ושות׳" },
      {
        property: "og:description",
        content: "רואי חשבון, מנהלי חשבונות ומומחי מס בוטיק בהרצליה פיתוח.",
      },
      { property: "og:url", content: "/team" },
      { property: "og:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/team" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/team" },
      { rel: "alternate", hrefLang: "en-US", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/en/team" }
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">
            הצוות שלנו
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            אנשים שאתם רוצים לצידכם
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            צוות מקצועי, זמין ומחויב – עם ניסיון של עשרות שנים בליווי חברות, סטארטאפים
            ועצמאים.
          </p>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <img
              src={teamPhoto}
              alt="צוות משרד רואי חשבון נמרודי ושות׳"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
          {TEAM.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary font-display text-3xl font-bold text-gold">
                {p.name.replace("רו״ח ", "").charAt(0)}
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-primary">
                {p.name}
              </h2>
              <div className="mt-1 text-sm font-medium text-gold">{p.role}</div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.bio}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {p.credentials.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-xs text-foreground/80">
                    <GraduationCap className="h-3.5 w-3.5 text-gold" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-2">
                <a
                  href="mailto:office@nimrodi.co.il"
                  aria-label="שליחת מייל"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-gold hover:text-gold"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-gold hover:text-gold"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-secondary/40 p-8 text-center">
          <Award className="mx-auto mb-4 h-10 w-10 text-gold" aria-hidden />
          <h2 className="font-display text-2xl font-bold text-primary">
            מחפשים להצטרף לצוות?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            אנחנו תמיד מחפשים רואי חשבון, סטודנטים ומנהלי חשבונות מוכשרים להצטרף
            למשרד. שלחו קו״ח ל־<a href="mailto:office@nimrodi.co.il" className="font-semibold text-primary hover:text-gold">office@nimrodi.co.il</a>.
          </p>
        </div>
      </section>

      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
