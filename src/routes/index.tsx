import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Briefcase,
  Building2,
  Calculator,
  ChartLine,
  CheckCircle2,
  FileSpreadsheet,
  Globe2,
  Handshake,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "../components/site-chrome";
import { ProcessSection, TestimonialsSection, WhyUsSection } from "../components/home-sections";
import { ClientLogosStrip, ExecutiveTestimonials } from "../components/social-proof";
import heroImage from "../assets/hero-office.jpg";

const FAQS = [
  {
    q: "איפה ממוקם המשרד ובאילו אזורים אתם מלווים לקוחות?",
    a: "המשרד ממוקם באזור התעשייה של הרצליה פיתוח. אנו מלווים לקוחות בהרצליה, רמת השרון, רעננה, תל אביב והסביבה – וגם לקוחות מרחוק בזום ובמערכות דיגיטליות.",
  },
  {
    q: "מה כולל ליווי חשבונאי לחברה או סטארטאפ?",
    a: "הליווי כולל הנהלת חשבונות שוטפת, הפקת תלושי שכר, דוחות כספיים ודוחות שנתיים, ייעוץ מס, שירותי חשבות וניהול כספים, ליווי גיוסי הון והכנה להנפקות – הכל תחת קורת גג אחת.",
  },
  {
    q: "האם אתם מתאימים גם לעצמאים ופרילנסרים בתחילת הדרך?",
    a: "בהחלט. אנו מלווים עצמאים, בעלי מקצוע חופשי, מתכנתים ויועצים – מפתיחת התיקים ברשויות, דרך דיווחים שוטפים ועד דוח שנתי, הצהרת הון ותכנון מס אישי.",
  },
  {
    q: "כמה עולה שירות של רואה חשבון?",
    a: "העלות נגזרת מהיקף הפעילות, מספר התנועות והשירותים הנדרשים. אנו מזמינים אתכם לפגישת ייעוץ ראשונית ללא התחייבות – ונציע תמחור שקוף המותאם אישית לעסק שלכם.",
  },
  {
    q: "האם אתם מטפלים בהכנסות מחו״ל, קריפטו ורילוקיישן?",
    a: "כן. יש לנו התמחות מיוחדת במיסוי מטבעות דיגיטליים וב-Web3, ליווי עסקאות קריפטו מורכבות, עבודה מול בנקים ישראלים להכנסת כספי קריפטו לחשבון בישראל, והגשת דוחות מותאמים לרשות המסים. בנוסף – ייעוץ מס בינלאומי, דיווחי חשבונות בחו״ל (FBAR/CRS), ניתוק תושבות וייעוץ לעולים חדשים ותושבים חוזרים.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "נמרודי ושות׳ – משרד רואי חשבון בהרצליה פיתוח לסטארטאפים וחברות זרות" },
      {
        name: "description",
        content:
          "משרד רואי חשבון בוטיק מוביל בהרצליה פיתוח. מתמחים במיסוי סטארטאפים, חברות זרות, ניהול כספים CFO, ציות מס קריפטו מורכב וגילוי מרצון.",
      },
      { property: "og:title", content: "נמרודי ושות׳ – משרד רואי חשבון בהרצליה פיתוח לסטארטאפים וחברות זרות" },
      {
        property: "og:description",
        content:
          "משרד רואי חשבון בוטיק מוביל בהרצליה פיתוח. מתמחים במיסוי סטארטאפים, חברות זרות, ניהול כספים CFO, ציות מס קריפטו מורכב וגילוי מרצון.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/" },
      { rel: "alternate", hrefLang: "en-US", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/" }
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
  component: HomePage,
});

const SERVICES = [
  {
    icon: Building2,
    title: "חברות וסטארטאפים",
    desc: "ליווי חשבונאי מלא לחברות טכנולוגיה, סטארטאפים ועסקים בצמיחה – דוחות כספיים, ביקורת ודיווח.",
  },
  {
    icon: Briefcase,
    title: "עצמאים ופרילנסרים",
    desc: "פתיחת תיקים, דיווחים שוטפים, דוחות שנתיים והצהרות הון – עם שקיפות ושירות אישי.",
  },
  {
    icon: TrendingUp,
    title: "גיוסי הון וליווי פיננסי",
    desc: "ליווי בגיוס ממשקיעים, קרנות ובנקים, הכנה להנפקות ובניית תשתית פיננסית לצמיחה.",
  },
  {
    icon: Calculator,
    title: "שירותי חשבות וניהול כספים",
    desc: "ניהול תזרים, בקרה תקציבית ודוחות מנהלים – כמו CFO חיצוני לחברה שלכם.",
  },
  {
    icon: Globe2,
    title: "ייעוץ מס בינלאומי",
    desc: "התאמה למס בינלאומי, דיווחי חו״ל, ניתוק תושבות, רילוקיישן ועולים חדשים.",
  },
  {
    icon: FileSpreadsheet,
    title: "ייעוץ מס ודיווחים מיוחדים",
    desc: "התמחות מיוחדת במיסוי מטבעות דיגיטליים, ליווי עסקאות קריפטו מורכבות, עבודה מול בנקים ישראלים להכנסת כספי קריפטו, והגשת דוחות מותאמים לרשות המסים. בנוסף: הכנסות משכירות, שוק ההון, גילוי מרצון וחוות דעת חשבונאיות.",
    badge: "מומחיות קריפטו",
  },
];

const HIGHLIGHTS = [
  { icon: Award, num: "25+", label: "שנות ניסיון" },
  { icon: Star, num: "5.0", label: "דירוג בגוגל" },
  { icon: Users, num: "80+", label: "המלצות לקוחות" },
  { icon: Handshake, num: "100%", label: "יחס אישי ושקיפות" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="main-content">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="משרד רואי חשבון נמרודי ושות׳ בהרצליה פיתוח"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/85 to-primary/60" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-2xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              משרד בוטיק · הרצליה פיתוח
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              נמרודי ושות׳ – <span className="text-gold">רואי חשבון</span>
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/85 sm:text-xl">
              למעלה מ־25 שנות ניסיון בליווי חברות, סטארטאפים, עצמאים ופרילנסרים.
              ביקורת, דיווח וייעוץ פיננסי – עם שירות אישי, מקצועי ודיסקרטי.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-base font-semibold text-gold-foreground shadow-lg transition hover:brightness-95"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                ייעוץ ראשוני ללא התחייבות
              </a>
              <a
                href="tel:099582211"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
              >
                <Phone className="h-5 w-5" aria-hidden />
                09-9582211
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-primary-foreground/20 pt-8 sm:grid-cols-4">
              {HIGHLIGHTS.map(({ icon: Icon, num, label }) => (
                <div key={label}>
                  <Icon className="mb-2 h-5 w-5 text-gold" aria-hidden />
                  <dt className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
                    {num}
                  </dt>
                  <dd className="text-xs text-primary-foreground/70 sm:text-sm">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ClientLogosStrip lang="he" />

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-semibold uppercase tracking-widest text-gold">
              תחומי ההתמחות שלנו
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              ליווי חשבונאי מקיף – מהיום הראשון ועד ההנפקה
            </h2>
            <p className="mt-4 text-muted-foreground">
              משרד בוטיק שנותן מענה תחת קורת גג אחת: ביקורת, מס, ניהול כספים ופיננסים.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, desc, badge }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  {badge && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
                      ✦ {badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-right scale-x-0 bg-gold transition group-hover:scale-x-100" />
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              לכל השירותים
            </Link>
          </div>
        </div>
      </section>

      <WhyUsSection />
      <ProcessSection />

      {/* ABOUT */}
      <section className="border-y border-border/60 bg-secondary/50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-gold">
              אודות המשרד
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              משרד רואי חשבון בהרצליה עם ניסיון של מעל 25 שנה
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              המשרד פועל מאז שנת 2000 מהרצליה פיתוח, ומנוהל על ידי רו״ח שלמה נמרודי –
              בעל ותק של למעלה מ־30 שנה בחשבונאות, ניהול פיננסי וייעוץ עסקי, ששימש
              בעברו כחשב ומנהל כספים של חברות ציבוריות לרבות הליכי הנפקה בבורסה.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              אנו מלווים חברות, עמותות, שותפויות ויחידים – עם התמחות מיוחדת בליווי
              פיננסי לחברות טכנולוגיה, חברות ציבוריות וסטארט־אפים באזור הרצליה,
              רמת השרון, רעננה ותל אביב.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "משרד בוטיק – יחס אישי ודיסקרטי",
                "מומחיות בחברות טכנולוגיה, סטארטאפים וגיוסי הון",
                "כלים חשבונאיים מתקדמים וניהול חשבונות מקוון",
                "זמינות גבוהה ומענה מקצועי, שקוף ויעיל",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
            >
              עוד על המשרד ←
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-gold/20 to-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <div className="grid grid-cols-2 gap-0 bg-primary text-primary-foreground">
                <div className="border-l border-primary-foreground/10 p-6">
                  <ChartLine className="mb-3 h-6 w-6 text-gold" aria-hidden />
                  <div className="font-display text-3xl font-bold">30+</div>
                  <div className="text-sm text-primary-foreground/70">שנות ניסיון של שלמה נמרודי</div>
                </div>
                <div className="p-6">
                  <Building2 className="mb-3 h-6 w-6 text-gold" aria-hidden />
                  <div className="font-display text-3xl font-bold">2000</div>
                  <div className="text-sm text-primary-foreground/70">שנת ההקמה של המשרד</div>
                </div>
                <div className="border-t border-l border-primary-foreground/10 p-6">
                  <Users className="mb-3 h-6 w-6 text-gold" aria-hidden />
                  <div className="font-display text-3xl font-bold">מאות</div>
                  <div className="text-sm text-primary-foreground/70">לקוחות מלווים לאורך השנים</div>
                </div>
                <div className="border-t border-primary-foreground/10 p-6">
                  <Star className="mb-3 h-6 w-6 text-gold" aria-hidden />
                  <div className="font-display text-3xl font-bold">5.0★</div>
                  <div className="text-sm text-primary-foreground/70">
                    <a
                      href="https://maps.app.goo.gl/jxWz9287qp3QRVFg8"
                      target="_blank"
                      rel="noopener"
                      className="hover:text-gold"
                    >
                      ביקורות ב־Google
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ExecutiveTestimonials lang="he" />


      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-widest text-gold">
              שאלות ותשובות
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              רוצים לדעת יותר? התחלנו בשבילכם
            </h2>
          </div>

          <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-card">
            {FAQS.map((f, i) => (
              <details key={i} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-right font-semibold text-primary">
                  <span>{f.q}</span>
                  <span className="mt-1 text-gold transition group-open:rotate-45" aria-hidden>
                    ＋
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl bg-primary p-10 text-center text-primary-foreground shadow-xl sm:p-14">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              נשמח להכיר ולראות איך נוכל לעזור לעסק שלכם
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              פגישת ייעוץ ראשונה – ללא עלות וללא התחייבות. נבין את הצרכים, נציג פתרונות
              ותמחור שקוף, ותקבלו החלטה רגועה.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground transition hover:brightness-95"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                שליחת הודעה בוואטסאפ
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/20"
              >
                לעמוד יצירת קשר
              </Link>
            </div>
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
