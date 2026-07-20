import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "מדיניות פרטיות | נמרודי ושות׳ – רואי חשבון" },
      {
        name: "description",
        content:
          "מדיניות הפרטיות של נמרודי ושות׳ – רואי חשבון. פנייתכם דרך האתר חסויה, מאובטחת ואינה מועברת לצד שלישי. סודיות מקצועית מלאה.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "מדיניות פרטיות | נמרודי ושות׳" },
      { property: "og:description", content: "מחויבות לסודיות מלאה של פונים ולקוחות." },
    ],
    links: [
      { rel: "canonical", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/privacy-policy" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/privacy-policy" },
      { rel: "alternate", hrefLang: "en-US", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/en/privacy-policy" }
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6" dir="rtl">
        <h1 className="font-display text-4xl font-bold text-primary">מדיניות פרטיות</h1>
        <p className="mt-4 text-sm text-muted-foreground">עודכן לאחרונה: יולי 2026</p>

        <div className="mt-8 space-y-6 text-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">מחויבות לסודיות</h2>
            <p className="mt-2">
              נמרודי ושות׳ – רואי חשבון (להלן: "המשרד") מחויב לחיסיון מוחלט של פרטי לקוחות ופונים,
              בהתאם לכללי האתיקה המקצועית של רואי חשבון בישראל ולחוק הגנת הפרטיות, התשמ״א-1981.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">איזה מידע נאסף</h2>
            <p className="mt-2">
              דרך טפסי הפנייה באתר אנו אוספים אך ורק את הפרטים שבחרתם למסור: שם, שם חברה, כתובת
              אימייל, מספר טלפון ותוכן ההודעה. איננו אוספים מידע פיננסי או אישי רגיש דרך האתר.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">שימוש במידע</h2>
            <p className="mt-2">
              המידע משמש אך ורק ליצירת קשר חוזר לצורך תיאום פגישת ייעוץ ומתן מענה מקצועי. הפרטים
              אינם נמכרים, מושכרים או מועברים לצד שלישי בכל צורה שהיא.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">אבטחת מידע</h2>
            <p className="mt-2">
              האתר פועל תחת חיבור מוצפן (HTTPS). מידע רגיש שנמסר במסגרת ייצוג לקוח נשמר במערכות
              מאובטחות של המשרד בהתאם להנחיות רשות המסים, לשכת רואי חשבון בישראל ודרישות ה-ISA.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">זכויותיכם</h2>
            <p className="mt-2">
              עומדת לכם הזכות לעיין במידע שנשמר עליכם, לתקנו או לבקש את מחיקתו. פנייה בעניין זה
              ניתן להעביר לכתובת <a href="mailto:office@nimrodi.co.il" className="text-gold underline">office@nimrodi.co.il</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">יצירת קשר</h2>
            <p className="mt-2">
              נמרודי ושות׳ – רואי חשבון · גלגלי הפלדה 16, הרצליה פיתוח · טלפון 09-9582211 ·
              <a href="mailto:office@nimrodi.co.il" className="text-gold underline"> office@nimrodi.co.il</a>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
