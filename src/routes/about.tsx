import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  ChartLine,
  
  Handshake,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "../components/site-chrome";
import aboutImage from "../assets/about-visual.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "אודות | נמרודי ושות׳ – רואי חשבון בהרצליה פיתוח" },
      {
        name: "description",
        content:
          "משרד רואי חשבון בוטיק בהרצליה פיתוח, פעיל משנת 2000. שלמה נמרודי, רו״ח עם ניסיון של מעל 30 שנה בחשבונאות, ניהול כספים, גיוסי הון והנפקות בבורסה.",
      },
      { property: "og:title", content: "אודות נמרודי ושות׳ – רואי חשבון בהרצליה" },
      {
        property: "og:description",
        content:
          "מעל 25 שנות ניסיון בליווי חברות טכנולוגיה, סטארטאפים, עצמאים ופרילנסרים בהרצליה והסביבה.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Award, title: "מקצועיות בלתי מתפשרת", desc: "כלים חשבונאיים מתקדמים, ידע עדכני והכשרה מתמדת." },
  { icon: Handshake, title: "יחס אישי ודיסקרטי", desc: "כל לקוח מקבל מענה ישיר, לא ״מרכזייה״." },
  { icon: ChartLine, title: "חשיבה אסטרטגית", desc: "לא רק מספרים – ליווי לצמיחה וקבלת החלטות." },
  { icon: Users, title: "זמינות גבוהה", desc: "תקשורת פתוחה, שקופה ומהירה לאורך כל השנה." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">אודות</div>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            נמרודי ושות׳ – רואי חשבון
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            משרד בוטיק בהרצליה פיתוח, פעיל מאז שנת 2000. ניסיון של דור שלם, מומחיות
            פיננסית וחשיבה אסטרטגית – בגובה העיניים.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              משרד רואי חשבון <strong className="text-foreground">נמרודי ושות׳</strong> ממוקם
              באזור התעשייה של הרצליה פיתוח, ופועל מאז שנת 2000. זהו משרד בוטיק מקצועי
              ומנוסה, המוקם ומנוהל על ידי רו״ח שלמה נמרודי – בעל ותק של למעלה מ־30 שנה
              בתחומי החשבונאות, הניהול הפיננסי והייעוץ העסקי.
            </p>
            <p>
              בעברו שימש שלמה נמרודי כחשב ומנהל כספים של חברות ציבוריות, לרבות ליווי הליכי
              הנפקה בבורסה בישראל. לאורך השנים צבר המשרד ניסיון עשיר בליווי חברות, עמותות,
              שותפויות ויחידים מכל תחומי הפעילות – עם התמחות מיוחדת בליווי פיננסי לחברות
              טכנולוגיה, חברות ציבוריות וסטארט־אפים באזור הרצליה, רמת השרון, רעננה ותל אביב.
            </p>
            <p>
              אנו מלווים תהליכים מורכבים של סוגיות חשבונאיות, הנהלת חשבונות וניהול כספים,
              כולל גיוסי הון, הכנה להנפקות, בניית דוחות כספיים, ייעוץ מס, טיפול בהצהרות
              הון, פתיחת תיקים ברשויות המס, ליווי בהליכי גילוי מרצון, ודיווחי מס מגוונים –
              לרבות הכנסות משכירות מגורים, שוק ההון ומטבעות קריפטו.
            </p>
            <p>
              אנחנו מאמינים בליווי אישי של לקוחות – לא רק במספרים, אלא גם באנשים שמאחוריהם.
              אנחנו מלווים כל יזם ועסק בגובה העיניים, שומרים על זמינות גבוהה ומציעים מענה
              מקצועי, שקוף ויעיל.
            </p>
          </div>

          <aside className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={aboutImage}
                alt="פתרונות חשבונאיים מקצועיים – נמרודי ושות׳"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-xl border border-gold/40 bg-gold/10 p-6">
              <Star className="mb-2 h-6 w-6 text-gold" aria-hidden />
              <div className="font-display text-2xl font-bold text-primary">5.0 ★★★★★</div>
              <p className="mt-1 text-sm text-muted-foreground">
                דירוג מושלם בביקורות Google מלקוחות המשרד.
              </p>
              <a
                href="https://maps.app.goo.gl/jxWz9287qp3QRVFg8"
                target="_blank"
                rel="noopener"
                className="mt-3 inline-block text-sm font-semibold text-primary hover:text-gold"
              >
                לצפייה בביקורות ←
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold text-primary sm:text-4xl">
            הערכים שמובילים אותנו
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6">
                <Icon className="mb-3 h-6 w-6 text-gold" aria-hidden />
                <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Building2 className="mx-auto mb-4 h-8 w-8 text-gold" aria-hidden />
          <h2 className="font-display text-3xl font-bold text-primary">
            רוצים להכיר את המשרד מקרוב?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            נקבע פגישת היכרות – פרונטלית בהרצליה פיתוח או בזום – ונראה איך נוכל לתמוך בכם.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground transition hover:brightness-95"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              קביעת פגישה
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              לתחומי ההתמחות
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

