import { createFileRoute } from "@tanstack/react-router";
import { FileSearch } from "lucide-react";
import { ServiceLanding, buildFaqJsonLd, type ServiceResource } from "../components/service-landing";

const RESOURCES: ServiceResource[] = [
  {
    label: "רשות ניירות ערך – דיווחי חברות ציבוריות",
    url: "https://www.isa.gov.il",
    source: "רשות ניירות ערך (isa.gov.il)",
    description: "דרישות הדיווח והביקורת החלות על חברות ציבוריות בישראל.",
  },
  {
    label: "רשות המסים – הוראות ניהול פנקסי חשבונות",
    url: "https://www.gov.il/he/departments/israel_tax_authority",
    source: "רשות המסים בישראל (gov.il)",
    description: "הוראות מקצועיות לניהול פנקסים, סקירת חשבונות וביקורת.",
  },
  {
    label: "רשם החברות – חובת הגשת דוח שנתי",
    url: "https://www.gov.il/he/departments/israeli_corporations_authority",
    source: "רשות התאגידים – משרד המשפטים (gov.il)",
    description: "חובות דיווח של חברה בע״מ, כולל דוחות מבוקרים ואגרה שנתית.",
  },
  {
    label: "IAS Plus – מרכז הידע ל-IFRS",
    url: "https://www.iasplus.com/en",
    source: "Deloitte",
    description: "מדריכי IFRS מלאים, תקנים חדשים ופרסומים מקצועיים.",
  },
  {
    label: "PwC – IFRS Reporting Services",
    url: "https://www.pwc.com/gx/en/services/audit-assurance/ifrs-reporting.html",
    source: "PwC",
    description: "מדריך יישום התקינה הבינלאומית וניתוחים מקצועיים.",
  },
  {
    label: "KPMG Israel – Audit & Assurance",
    url: "https://kpmg.com/il/en/home/services/audit.html",
    source: "KPMG Israel",
    description: "עקרונות איכות ומתודולוגיית ביקורת של Big Four בישראל.",
  },
];


const FAQS = [
  {
    q: "מי חייב בדוח מבוקר על ידי רואה חשבון?",
    a: "בישראל, כל חברה בע״מ חייבת להגיש דוח כספי מבוקר חתום על ידי רואה חשבון מוסמך. עמותות, חל״צים ומוסדות ציבור מעל תקרות מסוימות גם הם חייבים בביקורת.",
  },
  {
    q: "כמה זמן לוקח תהליך ביקורת?",
    a: "תלוי בהיקף החברה – מכמה שבועות לחברה קטנה ועד חודשים לחברה בינונית עם פעילות מורכבת. אנחנו מתכננים את התהליך מראש כדי לעמוד במועדי הדיווח.",
  },
  {
    q: "האם אתם עובדים עם התקינה הבינלאומית (IFRS)?",
    a: "כן. אנחנו מכינים דוחות גם לפי כללי החשבונאות המקובלים בישראל (Israeli GAAP) וגם לפי IFRS – רלוונטי לחברות עם פעילות בינלאומית, משקיעים זרים או תכניות הנפקה.",
  },
];

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "ביקורת דוחות כספיים לחברות | נמרודי ושות׳" },
      {
        name: "description",
        content:
          "ביקורת דוחות כספיים לחברות, עמותות ושותפויות. עמידה בתקנים ישראליים ובינלאומיים (IFRS), דוחות סקורים ובקרה פנימית.",
      },
      { property: "og:title", content: "ביקורת דוחות כספיים | נמרודי ושות׳" },
      {
        property: "og:description",
        content: "ביקורת מקצועית לחברות, עמותות ושותפויות – Israeli GAAP ו-IFRS.",
      },
      { property: "og:url", content: "/audit" },
    ],
    links: [{ rel: "canonical", href: "/audit" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      icon={FileSearch}
      eyebrow="ביקורת ודוחות"
      title="ביקורת דוחות כספיים – אמון מקצועי שנשען עליו"
      intro="דוח כספי מבוקר הוא כרטיס הביקור של החברה – מול משקיעים, בנקים, רשויות ולקוחות. אנחנו מבצעים ביקורת מקצועית ויסודית, בעמידה בכל התקנים – ומספקים לכם דוח שאפשר לסמוך עליו."
      highlights={[
        "ביקורת שנתית לחברות בע״מ",
        "דוחות סקורים רבעוניים",
        "ביקורת עמותות ומלכ״רים",
        "ביקורת חברות ציבוריות",
        "התאמות ל-IFRS",
        "בדיקת בקרה פנימית",
      ]}
      sections={[
        {
          title: "למי מתאימה הביקורת שלנו?",
          body: "אנחנו מבקרים חברות פרטיות וציבוריות במגוון תחומים – עם דגש על חברות טכנולוגיה, סטארטאפים, חברות בעלות פעילות בינלאומית, עמותות ומוסדות ציבור. הגישה שלנו יסודית אך יעילה – אתם מקבלים דוח מקצועי בלי בירוקרטיה מיותרת.",
        },
        {
          title: "הביקורת כתהליך שמייצר ערך",
          body: "ביקורת טובה היא לא רק חתימה בסוף השנה. במהלך התהליך אנחנו זיהיים סיכונים, מציעים שיפורי בקרה פנימית, ומספקים תובנות אמיתיות על הבריאות הפיננסית של החברה – ערך שממשיך לפעול לאורך כל השנה.",
          bullets: [
            "זיהוי סיכונים פיננסיים ותפעוליים",
            "המלצות לשיפור בקרה פנימית",
            "תובנות על תזרים, רווחיות ומבנה עלויות",
          ],
        },
      ]}
      faqs={FAQS}
      resources={RESOURCES}
    />
  ),
});
