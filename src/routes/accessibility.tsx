import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות | נמרודי ושות׳ – רואי חשבון" },
      {
        name: "description",
        content:
          "הצהרת נגישות אתר נמרודי ושות׳ – רואי חשבון בהרצליה. עמידה בתקן WCAG 2.1 רמה AA ובתקנות שוויון זכויות לאנשים עם מוגבלות.",
      },
      { property: "og:title", content: "הצהרת נגישות – נמרודי ושות׳" },
      { property: "og:url", content: "/accessibility" },
      { property: "og:image", content: "https://cpa-test-1.lovable.app/og-image.webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://cpa-test-1.lovable.app/og-image.webp" },
    ],
    links: [
      { rel: "canonical", href: "https://cpa-test-1.lovable.app/accessibility" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://cpa-test-1.lovable.app/accessibility" },
      { rel: "alternate", hrefLang: "en-US", href: "https://cpa-test-1.lovable.app/en/accessibility" }
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
        <section className="border-b border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">
              הצהרת נגישות
            </h1>
            <p className="mt-4 text-muted-foreground">
              עודכן לאחרונה: יולי 2026
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl space-y-8 px-4 text-muted-foreground leading-relaxed sm:px-6">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">
                1. מחויבות לנגישות
              </h2>
              <p>
                משרד רואי החשבון נמרודי ושות׳ רואה בנגישות ערך מרכזי, מוסרי ומקצועי. המשרד פועל להנגשת אתר האינטרנט ושירותיו לכלל הציבור, לרבות אנשים עם מוגבלות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח-1998 ותקנות הנגישות לשירות.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">
                2. נגישות אתר האינטרנט (נגישות דיגיטלית)
              </h2>
              <p>
                האתר הונגש בהתאם לתקן הישראלי (ת״י 5568) לנגישות תכנים באינטרנט ברמת AA ובהתאם להנחיות מסמך WCAG 2.1 של ארגון W3C הבינלאומי.
              </p>
              <ul className="list-inside list-disc space-y-2 pr-4">
                <li><strong>ניווט מקלדת:</strong> תמיכה מלאה בתוספי ניווט באמצעות המקלדת (Tab, Shift+Tab, Enter).</li>
                <li><strong>התאמה לקוראי מסך:</strong> האתר נבנה עם מבנה סמנטי ומאפייני ARIA המותאמים לטכנולוגיות מסייעות.</li>
                <li><strong>עיצוב וטקסט:</strong> ניגודיות צבעים תקנית, אפשרות להגדלת טקסטים ללא פגיעה במבנה האתר, וטקסט חלופי (Alt) לתמונות ורכיבים ויזואליים.</li>
                <li><strong>רספונסיביות:</strong> התאמה מלאה לגלישה במגוון מסכים, מובייל וטאבלטים.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">
                3. הסדרי נגישות פיזיים במשרד
              </h2>
              <p>
                המשרד ממוקם ברחוב גלגלי הפלדה 16, הרצליה פיתוח. להלן פירוט הסדרי הנגישות במבנה:
              </p>
              <ul className="list-inside list-disc space-y-2 pr-4">
                <li><strong>חניית נכים:</strong> קיימות חניות נכים מסומנות בחניון הבניין ובקרבתו.</li>
                <li><strong>גישה לבניין ולמשרדים:</strong> רצף גישה נגיש מהחניה, דרך כניסת הבניין והלובי, ועד למשרדי הפירמה דרך מעליות מונגשות.</li>
                <li><strong>שירותים נגישים:</strong> במבנה קיימים שירותי נכים מונגשים ומאושרים.</li>
                <li><strong>חיות שירות:</strong> מותרת הכניסה לכלבי נחייה וחיות שירות.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">
                4. רכז נגישות, פניות והצעות לשיפור
              </h2>
              <p>
                אנו ממשיכים במאמצים לשפר את נגישות האתר והשירות במשרד. אם נתקלתם ברכיב לא נגיש, בקושי בגלישה באתר, או אם ברצונכם לבקש התאמת נגישות מיוחדת לקראת פגישה במשרדינו, נשמח לעמוד לרשותכם:
              </p>
              <div className="rounded-lg border border-border/60 bg-secondary/30 p-6 space-y-3">
                <p><strong>רכז/ת נגישות המשרד:</strong> צוות נגישות – נמרודי ושות׳</p>
                <p>
                  <strong>טלפון:</strong>{" "}
                  <a href="tel:099582211" className="text-primary hover:text-gold hover:underline">
                    09-9582211
                  </a>
                </p>
                <p>
                  <strong>וואטסאפ:</strong>{" "}
                  <a href="https://wa.me/972546688681" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold hover:underline">
                    054-6688681
                  </a>
                </p>
                <p>
                  <strong>דוא״ל:</strong>{" "}
                  <a href="mailto:office@nimrodi.co.il" className="text-primary hover:text-gold hover:underline">
                    office@nimrodi.co.il
                  </a>
                </p>
              </div>
              <p>
                כל פנייה מטופלת ברצינות ובמהירות המרבית על מנת לספק את המענה המיטבי.
              </p>
            </div>

            <p className="pt-4 text-sm text-muted-foreground/80">
              הצהרה זו עודכנה לאחרונה בחודש יולי 2026.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
