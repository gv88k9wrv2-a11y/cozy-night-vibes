import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, MessageCircle } from "lucide-react";
import {
  FloatingWhatsApp,
  SiteFooter,
  SiteHeader,
  WHATSAPP_URL,
} from "../components/site-chrome";
import imgTax from "../assets/blog-tax-planning.jpg";
import imgEquity from "../assets/blog-equity.jpg";
import imgCrypto from "../assets/blog-crypto.jpg";

const POST_IMAGES: Record<string, string> = {
  "tax-planning-2026": imgTax,
  "startup-equity-102": imgEquity,
  "crypto-reporting": imgCrypto,
};

type PostContent = {
  title: string;
  excerpt: string;
  date: string;
  readMin: number;
  category: string;
  sections: { h: string; p: string[] }[];
};

const POST_CONTENT: Record<string, PostContent> = {
  "tax-planning-2026": {
    title: "תכנון מס לסוף שנת 2026 – מה חשוב לדעת עכשיו",
    excerpt:
      "המדריך המלא לתכנון מס לפני סוף השנה: הפקדות פנסיוניות, קרנות השתלמות, הכרה בהוצאות והקדמת הכנסות.",
    date: "2026-06-10",
    readMin: 7,
    category: "מיסוי",
    sections: [
      {
        h: "למה בכלל לתכנן מס לפני סוף השנה?",
        p: [
          "רוב העצמאים ובעלי המניות מגלים את חבות המס שלהם רק כשהם רואים את הדוח השנתי – ואז כבר מאוחר. תכנון מס לפני 31 בדצמבר מאפשר לנצל הטבות שרלוונטיות רק לשנה השוטפת: הפקדות פנסיוניות, קרנות השתלמות, פחת מואץ על נכסים, והקדמה או דחייה של הכרה בהכנסות והוצאות.",
          "החיסכון הפוטנציאלי יכול להגיע לעשרות אלפי שקלים – בעיקר עבור מי שנמצא במדרגות מס גבוהות.",
        ],
      },
      {
        h: "הפקדות לקרן פנסיה ולקרן השתלמות",
        p: [
          "עצמאים זכאים לזיכוי מס בגובה 35% על הפקדות פנסיוניות עד תקרה שנתית. חשוב לוודא שההפקדה בפועל בוצעה עד 31 בדצמבר – לא תאריך הבקשה, תאריך הזיכוי בבנק.",
          "קרן השתלמות לעצמאים היא הטבה שכדאי לנצל בכל שנה. הפקדה של עד 4.5% מההכנסה החייבת (עד תקרה) מוכרת כהוצאה, והכספים פטורים ממס רווח הון לאחר שש שנים.",
        ],
      },
      {
        h: "הכרה בהוצאות – מה נכון לרכוש עכשיו?",
        p: [
          "רכישות של ציוד, מחשבים, תוכנות ואפילו רכב יכולות לזכות בפחת מואץ בשנה הראשונה. אם ממילא תכננתם לרכוש, שווה לבצע לפני סוף השנה.",
          "שימו לב: לא כל רכישה מוכרת מיידית. פריטי רכוש קבוע נפרסים על פני שנים לפי תקנות הפחת. התייעצו לפני רכישה גדולה.",
        ],
      },
      {
        h: "בעלי חברות – משיכה כדיבידנד או משכורת?",
        p: [
          "בעלי מניות מהותיים צריכים להחליט אם למשוך רווחים כמשכורת (חייב ביטוח לאומי ומס שולי) או כדיבידנד (מס של 33% כולל מס נוסף לבעלי הכנסות גבוהות). לכל אחת יש השלכות שונות – ולעיתים שילוב חכם מייעל את התוצאה.",
          "בנוסף, סעיף 62א לפקודה מחייב תשומת לב מיוחדת ל״משיכות בעלים״ שלא הוסדרו בזמן – אלו עלולות להיחשב כדיבידנד רעיוני עם חבות מס גבוהה.",
        ],
      },
    ],
  },
  "startup-equity-102": {
    title: "אופציות לעובדים בסטארטאפ – מסלול 102 שווי הוני",
    excerpt:
      "איך להעניק אופציות בצורה שממקסמת הטבות מס, אישור נאמן, ומלכודות נפוצות.",
    date: "2026-05-20",
    readMin: 9,
    category: "סטארטאפים",
    sections: [
      {
        h: "מה זה סעיף 102 ולמה כולם מדברים עליו?",
        p: [
          "סעיף 102 לפקודת מס הכנסה מאפשר לחברות להעניק אופציות ומניות לעובדים במסלול מס מיטבי. המסלול המועדף – ״שווי הוני עם נאמן״ – ממסה את הרווח כרווח הון בשיעור של 25% במקום מס שולי של עד 50%.",
          "לחברה יש חיסרון קטן: היא לא תוכל לדרוש את הוצאת השכר בגין האופציות כהוצאה. אבל מבחינת העובד, ההטבה משמעותית ומהותית.",
        ],
      },
      {
        h: "התנאים למסלול המיטבי",
        p: [
          "כדי להיכנס למסלול 102 שווי הוני, החברה צריכה להעביר את תוכנית האופציות לרשות המסים ולקבל אישור נאמן. תקופת החזקת המניות אצל הנאמן היא לפחות שנתיים מיום ההקצאה.",
          "עובד שמממש לפני תום השנתיים – מאבד את ההטבה ומחויב במס שולי מלא. לכן חשוב שגם החברה וגם העובד יבינו את התהליך.",
        ],
      },
      {
        h: "מלכודות שכיחות",
        p: [
          "אחת המלכודות הנפוצות היא הענקת אופציות ליועצים ולנותני שירות שאינם עובדים – הם לא זכאים למסלול 102 ויהיו חייבים במס שולי מלא במימוש. עבורם מסלול 3(i) לפקודה עשוי להיות מתאים יותר.",
          "מלכודת נוספת: חברות שמעניקות אופציות לפני שהעבירו תוכנית מסודרת לרשות המסים – ואז מגלות שלא ניתן להחיל את המסלול רטרואקטיבית.",
        ],
      },
    ],
  },
  "crypto-reporting": {
    title: "דיווח על מטבעות קריפטו לרשות המסים – מדריך מעשי",
    excerpt:
      "מתי חייבים לדווח על רווחי קריפטו, איך מחשבים רווח הון, הליך גילוי מרצון ומה עושים עם ארנקים אבודים.",
    date: "2026-07-04",
    readMin: 6,
    category: "מיסוי בינלאומי",
    sections: [
      {
        h: "האם קריפטו חייב במס בישראל?",
        p: [
          "כן. רשות המסים בישראל רואה במטבעות דיגיטליים ״נכס״ לצורכי מס, ולא ״מטבע״. כל מכירה, המרה למטבע אחר, או שימוש בקריפטו לרכישת מוצר או שירות – מהווה אירוע מס.",
          "המס הרלוונטי הוא מס רווח הון בשיעור של 25% (עבור יחיד שאינו עוסק בכך במסגרת עסק).",
        ],
      },
      {
        h: "איך מחשבים רווח הון בקריפטו?",
        p: [
          "רווח הון = תמורה במכירה פחות מחיר הקנייה (בשקלים חדשים, לפי שער חליפין ביום העסקה). זה נשמע פשוט, עד שמדובר על מאות עסקאות בשנה, החלפות בין מטבעות שונים, staking, airdrops ו-DeFi.",
          "המפתח הוא תיעוד מדויק ואוטומטי – ישנן מערכות (Koinly, CoinTracker) שמושכות את היסטוריית העסקאות מהארנקים והבורסות ובונות דוח מס מסודר.",
        ],
      },
      {
        h: "לא דיווחתם עד היום – מה עכשיו?",
        p: [
          "רשות המסים מפעילה הליך גילוי מרצון שמאפשר להסדיר עבר לא מדווח – לרוב ללא סנקציות פליליות ולעיתים בהקלה משמעותית של הריבית והקנסות. חשוב לפעול לפני שהרשות מגיעה אליכם.",
          "במשרד שלנו ליווינו עשרות הליכי גילוי מרצון בתחום הקריפטו. בהחלט אפשר לצאת מכל זה עם ראש שקט – בתנאי שפועלים נכון.",
        ],
      },
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POST_CONTENT[params.slug];
    if (!post) throw notFound();
    return { post, slug: params.slug };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "מאמר לא נמצא | נמרודי ושות׳" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${loaderData.post.title} | בלוג נמרודי ושות׳` },
        { name: "description", content: loaderData.post.excerpt },
        { property: "og:title", content: loaderData.post.title },
        { property: "og:description", content: loaderData.post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "og:image", content: "https://cpa-test-1.lovable.app/og-image.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:image", content: "https://cpa-test-1.lovable.app/og-image.jpg" },
        { property: "article:published_time", content: loaderData.post.date },
        { property: "article:section", content: loaderData.post.category },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.post.title,
            description: loaderData.post.excerpt,
            datePublished: loaderData.post.date,
            author: {
              "@type": "Organization",
              name: "נמרודי ושות׳ – רואי חשבון",
            },
            publisher: {
              "@type": "Organization",
              name: "נמרודי ושות׳ – רואי חשבון",
            },
            articleSection: loaderData.post.category,
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-bold text-primary">המאמר לא נמצא</h1>
        <p className="mt-3 text-muted-foreground">ייתכן שהקישור השתנה או שהמאמר הוסר.</p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          חזרה לבלוג
        </Link>
      </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function BlogPostPage() {
  const { post, slug } = Route.useLoaderData() as { post: PostContent; slug: string };
  const heroImg = POST_IMAGES[slug];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">בית</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">בלוג</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{post.category}</span>
        </nav>

        <div className="inline-flex items-center rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-gold">
          {post.category}
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex items-center gap-5 border-b border-border pb-6 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden />
            {new Date(post.date).toLocaleDateString("he-IL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {post.readMin} דק׳ קריאה
          </span>
        </div>

        {heroImg ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-xl">
            <img src={heroImg} alt={post.title} width={1024} height={1024} loading="lazy" className="h-64 w-full object-cover sm:h-96" />
          </div>
        ) : null}

        <p className="mt-8 text-lg leading-relaxed text-foreground/90">{post.excerpt}</p>

        <div className="mt-8 space-y-10">
          {post.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl font-bold text-primary">{s.h}</h2>
              <div className="mt-4 space-y-4">
                {s.p.map((para, i) => (
                  <p key={i} className="leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="font-display text-2xl font-bold">
            רוצים לשוחח על המצב הספציפי שלכם?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            פגישת ייעוץ ראשונית ללא עלות – נבין את הצרכים ונציע פתרון מותאם.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground hover:brightness-95"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            דברו איתנו
          </a>
        </div>

        <div className="mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
            לכל המאמרים
          </Link>
        </div>
      </article>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
