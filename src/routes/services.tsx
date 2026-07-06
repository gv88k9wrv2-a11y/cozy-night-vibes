import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bitcoin,
  Briefcase,
  Building2,
  Calculator,
  ChartLine,
  CheckCircle2,
  FileSearch,
  FileSpreadsheet,
  Globe2,
  Handshake,
  Home,
  MessageCircle,
  PiggyBank,
  Plane,
  ReceiptText,
  ScrollText,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "../components/site-chrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "שירותי משרד רואי חשבון | נמרודי ושות׳ – הרצליה" },
      {
        name: "description",
        content:
          "כל שירותי משרד רואי חשבון נמרודי ושות׳: ליווי חברות וסטארטאפים, שירותים לעצמאים ופרילנסרים, ייעוץ מס, הנהלת חשבונות, גיוסי הון, ייעוץ בינלאומי וקריפטו.",
      },
      { property: "og:title", content: "שירותי משרד רואי חשבון נמרודי ושות׳" },
      {
        property: "og:description",
        content:
          "ליווי חשבונאי מקיף לחברות, סטארטאפים ועצמאים – ייעוץ מס, גיוסי הון, ניהול כספים ועוד.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const COMPANY_SERVICES = [
  { icon: FileSpreadsheet, title: "הגשת דוחות שנתיים לחברות", desc: "דוחות כספיים ודוחות למס הכנסה בהתאם לרשויות." },
  { icon: ReceiptText, title: "ניהול שכר ותלושים", desc: "הפקת תלושי שכר חודשיים וניהול מערכות שכר." },
  { icon: TrendingUp, title: "גיוס כספים לסטארטאפים", desc: "ליווי בגיוס ממשקיעים, קרנות ובנקים." },
  { icon: Building2, title: "פתיחת תיקים ברשויות המס", desc: "הבסיס הנכון והבטוח להקמת העסק והכנה לצמיחה." },
  { icon: Calculator, title: "הנהלת חשבונות שוטפת", desc: "ניהול חשבונות מקוון שוטף ומקצועי לחברות." },
  { icon: ChartLine, title: "חשבות וניהול כספים", desc: "ניהול כספי החברה, תזרים ובקרה תקציבית – כמו CFO חיצוני." },
  { icon: Globe2, title: "ייעוץ מס בינלאומי", desc: "התאמה למס בינלאומי לחברות עם פעילות חוצה גבולות." },
  { icon: FileSearch, title: "חוות דעת חשבונאיות", desc: "מתן חוות דעת מקצועיות לצרכים משפטיים ועסקיים." },
  { icon: PiggyBank, title: "ייעוץ כלכלי והערכת שווי", desc: "ליווי בקנייה ומכירה של עסקים והערכות שווי." },
];

const INDIVIDUAL_SERVICES = [
  { icon: ScrollText, title: "הגשת דוחות והצהרות הון", desc: "דוחות שנתיים לעצמאים, פרילנסרים ובעלי שליטה." },
  { icon: Home, title: "הכנסות משכירות וחשבונות חו״ל", desc: "דיווח על הכנסות משכר דירה ונכסים פיננסיים בחו״ל." },
  { icon: Plane, title: "ייעוץ מס לעולים ותושבים חוזרים", desc: "מיצוי זכויות והטבות מס בישראל." },
  { icon: ShieldCheck, title: "בדיקת תלושי שכר וגמר חשבון", desc: "קבלת מלוא הזכויות והכספים המגיעים לעובד." },
  { icon: Briefcase, title: "פתיחת תיקים לעצמאים", desc: "פתיחת תיקי עוסק במע״מ, מס הכנסה וביטוח לאומי." },
  { icon: Bitcoin, title: "חישוב מס רווח הון וקריפטו", desc: "ייעוץ ודיווח על הכנסות ממטבעות דיגיטליים." },
  { icon: FileSearch, title: "הליך גילוי מרצון", desc: "ליווי מקצועי בהסדרת נכסים והכנסות לא מדווחות." },
  { icon: Plane, title: "רילוקיישן וניתוק תושבות", desc: "מעבר חלק והסדרת חבות המס בישראל." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">
            תחומי ההתמחות שלנו
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            שירותי משרד רואי חשבון
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            מענה מקצועי ומקיף לחברות, סטארטאפים, עצמאים ופרילנסרים – מפתיחת תיקים ועד
            הנפקות, גיוסי הון וייעוץ מס בינלאומי.
          </p>
        </div>
      </section>

      <ServicesGroup
        icon={Building2}
        eyebrow="לחברות וסטארטאפים"
        title="חברות טכנולוגיה, סטארטאפים ועסקים בצמיחה"
        subtitle="מהשלבים הראשונים ועד ניהול שוטף, גיוסי הון והנפקות."
        items={COMPANY_SERVICES}
      />

      <ServicesGroup
        icon={Users}
        eyebrow="לעצמאים ופרילנסרים"
        title="עצמאים, בעלי מקצוע, פרילנסרים ויועצים"
        subtitle="שקט וביטחון פיננסי, שירות אישי ותכנון מס חכם."
        items={INDIVIDUAL_SERVICES}
        alt
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Handshake className="mx-auto mb-4 h-8 w-8 text-gold" aria-hidden />
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            לא בטוחים איזה שירות מתאים לכם?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            נשמח לפגישת ייעוץ ראשונית ללא התחייבות – נבין את המצב, נאבחן ונציע פתרון מותאם.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground transition hover:brightness-95"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              דברו איתנו בוואטסאפ
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

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

type Item = { icon: typeof Building2; title: string; desc: string };

function ServicesGroup({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
  items,
  alt,
}: {
  icon: typeof Building2;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: Item[];
  alt?: boolean;
}) {
  return (
    <section className={`${alt ? "border-y border-border/60 bg-secondary/40" : ""} py-16`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
            <Icon className="h-3.5 w-3.5" aria-hidden />
            {eyebrow}
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: I, title: t, desc }) => (
            <article
              key={t}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <I className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary">{t}</h3>
              <p className="mt-1.5 flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>{desc}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
