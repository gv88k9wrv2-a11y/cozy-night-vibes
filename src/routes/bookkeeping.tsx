import { createFileRoute } from "@tanstack/react-router";
import { Calculator } from "lucide-react";
import { ServiceLanding, buildFaqJsonLd, type ServiceResource } from "../components/service-landing";

const RESOURCES: ServiceResource[] = [
  {
    label: "רשות המסים – ניהול פנקסי חשבונות",
    url: "https://www.gov.il/he/departments/israel_tax_authority",
    source: "רשות המסים בישראל (gov.il)",
    description: "הוראה מקצועית 36 ותקנות ניהול ספרים לעוסקים וחברות.",
  },
  {
    label: "מע״מ – שערים, דיווח וחשבוניות",
    url: "https://www.gov.il/he/departments/topics/vat",
    source: "רשות המסים (gov.il)",
    description: "שיעורי המע״מ, חובת דיווח תקופתי, חשבונית מס וחשבונית מס דיגיטלית.",
  },
  {
    label: "חשבונית ישראל – מודל חשבוניות במרשם",
    url: "https://www.gov.il/he/departments/general/invoices_israel",
    source: "רשות המסים (gov.il)",
    description: "רפורמת ׳חשבונית ישראל׳ – מספרי הקצאה לחשבוניות מס.",
  },
  {
    label: "ביטוח לאומי – דיווח מעסיקים ועצמאים",
    url: "https://www.btl.gov.il",
    source: "המוסד לביטוח לאומי (btl.gov.il)",
    description: "דיווחי 102, שיעורי דמי ביטוח לעצמאים ולמעסיקים.",
  },
  {
    label: "Deloitte Israel – Accounting & Reporting",
    url: "https://www2.deloitte.com/il/en/services/audit.html",
    source: "Deloitte Israel",
    description: "נהלי הנהלת חשבונות ובקרה פנימית בסטנדרט Big Four.",
  },
  {
    label: "EY Israel – Tax & Compliance",
    url: "https://www.ey.com/en_il/services/tax",
    source: "EY Israel",
    description: "עדכוני חקיקה, מע״מ ואוטומציה של תהליכי הנהלת חשבונות.",
  },
];


const FAQS = [
  {
    q: "האם אתם עובדים במערכות דיגיטליות?",
    a: "בהחלט. אנחנו עובדים ב-Priority, ריווחית, חשבשבת, QuickBooks ו-Xero. כל המסמכים מוקלטים בסריקה חכמה, ואתם מקבלים גישה מקוונת מלאה לחשבונות בזמן אמת.",
  },
  {
    q: "מה כלול בשירות הנהלת חשבונות שוטפת?",
    a: "רישום חשבוניות ותקבולים, התאמות בנקים וכרטיסי אשראי, הפקת דיווחים למע״מ ומקדמות למס הכנסה, דוח רווח והפסד חודשי, ניהול לקוחות וספקים.",
  },
  {
    q: "האם השירות מתאים גם לעצמאים?",
    a: "כן. אנחנו נותנים שירות הנהלת חשבונות לעצמאים, עוסקים פטורים, שותפויות וחברות – עם התאמה אישית להיקף הפעילות.",
  },
];

export const Route = createFileRoute("/bookkeeping")({
  head: () => ({
    meta: [
      { title: "הנהלת חשבונות דיגיטלית | נמרודי ושות׳ בהרצליה" },
      {
        name: "description",
        content:
          "הנהלת חשבונות מקצועית ודיגיטלית לחברות ועצמאים – Priority, ריווחית, QuickBooks. דיווחי מע״מ, שכר, התאמות בנקים ודוחות בזמן אמת.",
      },
      { property: "og:title", content: "הנהלת חשבונות דיגיטלית | נמרודי ושות׳" },
      {
        property: "og:description",
        content: "שירותי הנהלת חשבונות שוטפת לחברות ועצמאים במערכות דיגיטליות מובילות.",
      },
      { property: "og:url", content: "/bookkeeping" },
    ],
    links: [{ rel: "canonical", href: "/bookkeeping" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      icon={Calculator}
      eyebrow="הנהלת חשבונות"
      title="הנהלת חשבונות דיגיטלית – שקיפות בזמן אמת"
      intro="שכחו מקלסרים וניירות. אנחנו מנהלים את החשבונות שלכם במערכות דיגיטליות מובילות, עם סריקה חכמה של מסמכים וגישה מקוונת בזמן אמת. אתם רואים את המצב בכל רגע – ואנחנו דואגים שהכל מדויק ובזמן."
      highlights={[
        "עבודה ב-Priority, ריווחית, QuickBooks ו-Xero",
        "סריקה חכמה של חשבוניות וקבלות",
        "דיווחי מע״מ ומקדמות – בזמן ומדויק",
        "התאמות בנקים וכרטיסי אשראי",
        "דוחות מנהלים חודשיים",
        "גישה מקוונת מלאה בזמן אמת",
      ]}
      sections={[
        {
          title: "למה דיגיטלי?",
          body: "עבודה דיגיטלית חוסכת זמן, מפחיתה טעויות ומאפשרת תובנות בזמן אמת. במקום לחכות לסוף החודש כדי לראות איפה עומדים – אתם רואים את המצב בכל רגע, מכל מקום.",
          bullets: [
            "אין יותר קלסרים או אובדן מסמכים",
            "גיבוי ענן אוטומטי לכל התיעוד",
            "אינטגרציה מלאה עם הבנק ומערכות ה-CRM",
            "דוחות שנוצרים מיידית בלחיצת כפתור",
          ],
        },
        {
          title: "מעבר חלק מהמשרד הקודם",
          body: "אנחנו מנוסים בקליטת לקוחות ממשרדים אחרים – העברת נתונים, קליטת יתרות פתיחה, ותאום מלא עם הנהלת החשבונות הקודמת. המעבר קורה ברקע, בלי הפרעה לפעילות השוטפת.",
        },
      ]}
      faqs={FAQS}
      resources={RESOURCES}
    />
  ),
});
