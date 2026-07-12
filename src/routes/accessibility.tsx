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
      { property: "og:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
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
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-muted-foreground sm:px-6">
          <p>
            משרד רואי החשבון נמרודי ושות׳ רואה בנגישות ערך מרכזי ופועל להנגיש את
            אתר האינטרנט שלו לכלל הציבור, לרבות אנשים עם מוגבלות, בהתאם לחוק
            שוויון זכויות לאנשים עם מוגבלות, התשנ״ח-1998 ותקנותיו.
          </p>
          <h2 className="pt-4 font-display text-xl font-bold text-primary">
            רמת הנגישות באתר
          </h2>
          <p>
            האתר נבנה ברמת עמידה AA של תקן WCAG 2.1 של ארגון W3C. האתר כולל תמיכה
            בקוראי מסך, ניווט מלא באמצעות מקלדת, טקסטים חלופיים לתמונות, ניגודיות
            צבעים תקנית, וטקסט בגודל שניתן להגדלה.
          </p>
          <h2 className="pt-4 font-display text-xl font-bold text-primary">
            פנייה בנושא נגישות
          </h2>
          <p>
            אם נתקלתם באלמנט לא נגיש או שקיים אצלכם קושי לגלוש באתר, נשמח לקבל
            פנייה ולתקן בהקדם:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>טלפון: 09-9582211</li>
            <li>וואטסאפ: 054-5207207</li>
            <li>
              דוא״ל:{" "}
              <a href="mailto:office@nimrodi.co.il" className="font-semibold text-primary hover:text-gold">
                office@nimrodi.co.il
              </a>
            </li>
          </ul>
          <p className="pt-4 text-sm">
            הצהרה זו עודכנה לאחרונה בחודש נובמבר 2026.
          </p>
        </div>
      </section>

      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
