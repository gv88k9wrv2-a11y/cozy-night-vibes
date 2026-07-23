import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Calculator,
  ChartLine,
  FileSearch,
  FileSpreadsheet,
  Globe2,
  Handshake,
  MapPin,
  MessageCircle,
  Plane,
  ReceiptText,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "../components/site-chrome";
import { GovPortalLinks } from "../components/gov-portal-links";

type ServiceRoute =
  | "/fractional-cfo"
  | "/bookkeeping"
  | "/payroll"
  | "/audit"
  | "/tax-consulting"
  | "/cpa-startups"
  | "/cpa-freelancers"
  | "/cpa-foreign-companies"
  | "/cpa-herzliya"
  | "/cpa-international";

type ServiceItem = { icon: LucideIcon; label: string; desc: string; to: ServiceRoute };
type ServiceGroup = { title: string; items: ServiceItem[] };

const GROUPS: ServiceGroup[] = [
  {
    title: "שירותי ליבה",
    items: [
      { to: "/fractional-cfo", label: "Fractional CFO – ניהול כספים אסטרטגי", icon: ChartLine, desc: "סמנכ״ל כספים במיקור חוץ – Burn, Runway, מודלים למשקיעים, יחסי בורד ו-DD." },
      { to: "/bookkeeping", label: "הנהלת חשבונות", icon: Calculator, desc: "ניהול חשבונות מקוון, סגירות חודשיות ודוחות ניהוליים על פלטפורמות ענן מודרניות." },
      { to: "/payroll", label: "שכר ואופציות (ESOP)", icon: ReceiptText, desc: "תלושי שכר, סעיף 102 (תוכניות אופציות ESOP), טופס 106, טופס 161 וציות פנסיוני." },
      { to: "/audit", label: "ביקורת חשבונאית", icon: FileSearch, desc: "ביקורת דוחות כספיים לפי כללי חשבונאות מקובלים בישראל ו-IFRS; בדיקות נאותות למיזוגים ורכישות." },
      { to: "/tax-consulting", label: "ייעוץ מס", icon: FileSpreadsheet, desc: "תכנוני מס, החלטות מיסוי (Pre-Ruling), השגות וערעורים מול רשות המסים." },
    ],
  },
  {
    title: "לפי סוג לקוח",
    items: [
      { to: "/cpa-startups", label: "סטארטאפים וחברות טכנולוגיה", icon: Rocket, desc: "גיוסי הון, אופציות 102, מבנה Delaware-Israel Flip ומעמד מפעל טכנולוגי מועדף." },
      { to: "/cpa-freelancers", label: "עצמאים ופרילנסרים", icon: Briefcase, desc: "פתיחת תיק, ניהול שוטף, דוח שנתי והצהרת הון." },
      { to: "/cpa-foreign-companies", label: "חברות זרות בישראל", icon: Globe2, desc: "חברה בת או סניף, KYC, Transfer Pricing וציות שוטף." },
      { to: "/cpa-herzliya", label: "רואה חשבון בהרצליה פיתוח", icon: MapPin, desc: "משרד בוטיק מקומי בלב מסדרון ההייטק של ישראל." },
    ],
  },
  {
    title: "מיסוי בינלאומי",
    items: [
      { to: "/cpa-international", label: "רילוקיישן ותושבים חוזרים", icon: Plane, desc: "תושבות, הטבות עולים, אמנות מס ותכנון חוצה גבולות." },
    ],
  },
];

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
      { property: "og:url", content: "https://cpa-test-1.lovable.app/services" },
      { property: "og:image", content: "https://cpa-test-1.lovable.app/og-image.webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://cpa-test-1.lovable.app/og-image.webp" },
    ],
    links: [
      { rel: "canonical", href: "https://cpa-test-1.lovable.app/services" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://cpa-test-1.lovable.app/services" },
      { rel: "alternate", hrefLang: "en-US", href: "https://cpa-test-1.lovable.app/en/services" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">תחומי ההתמחות שלנו</div>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
              משרד רואי חשבון בוטיק – שירות מקצה לקצה
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              מפתיחת תיק ועד ביקורת שנתית ותכנון חוצה גבולות – כל מה שעסק מודרני, סטארטאפ או בעל מקצוע צריך, תחת קורת גג אחת.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">{g.title}</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="group flex cursor-pointer flex-col rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary group-hover:bg-gold/15 group-hover:text-gold">
                        <s.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold text-primary">{s.label}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      <span className="mt-4 inline-flex text-xs font-semibold text-gold">למידע נוסף ←</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

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

        <GovPortalLinks
          lang="he"
          title="פורטלי השירות המרכזיים של המדינה"
          links={[
            { label: "רשות המסים – אזור אישי, מע\"מ ודיווחים", href: "https://www.gov.il/he/departments/israel_tax_authority" },
            { label: "המוסד לביטוח לאומי", href: "https://www.btl.gov.il" },
            { label: "רשות החדשנות – מסלולי תמיכה ומענקים", href: "https://innovationisrael.org.il" },
            { label: "משרד המשפטים – רשם החברות והתאגידים", href: "https://www.gov.il/he/departments/ministry_of_justice" },
          ]}
        />
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
