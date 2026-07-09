import { createFileRoute } from "@tanstack/react-router";
import { ReceiptText } from "lucide-react";
import { ServiceLanding, buildFaqJsonLd, type ServiceResource } from "../components/service-landing";

const RESOURCES: ServiceResource[] = [
  {
    label: "המוסד לביטוח לאומי – מעסיקים",
    url: "https://www.btl.gov.il/Employers/Pages/default.aspx",
    source: "ביטוח לאומי (btl.gov.il)",
    description: "שיעורי דמי ביטוח, דיווח 102, ניכויים ותעריפי מעסיק ועובד.",
  },
  {
    label: "רשות המסים – ניכויים ושכר",
    url: "https://www.gov.il/he/departments/topics/employer_deductions",
    source: "רשות המסים (gov.il)",
    description: "מדרגות מס, נקודות זיכוי, טפסי 101 ו-106.",
  },
  {
    label: "סעיף 102 – אופציות לעובדים",
    url: "https://www.gov.il/he/departments/general/section_102_employee_options",
    source: "רשות המסים (gov.il)",
    description: "מסלול הוני ופירותי, אישור תוכנית ומינוי נאמן.",
  },
  {
    label: "משרד העבודה – זכויות עובדים ושכר מינימום",
    url: "https://www.gov.il/he/departments/ministry_of_labor_and_social_affairs",
    source: "משרד העבודה (gov.il)",
    description: "חוקי עבודה, שכר מינימום, ימי חופשה והבראה.",
  },
  {
    label: "PwC Israel – Global Mobility & Payroll",
    url: "https://www.pwc.com/il/en/services/tax/global-mobility.html",
    source: "PwC Israel",
    description: "היבטי שכר, ניוד עובדים בין־לאומי ותכנון מס.",
  },
  {
    label: "KPMG Israel – Employee Share Plans",
    url: "https://kpmg.com/il/en/home/services/tax.html",
    source: "KPMG Israel",
    description: "ניתוח תוכניות אופציות 102 במסלול הוני לחברות טכנולוגיה.",
  },
];


const FAQS = [
  {
    q: "מה כולל שירות הפקת תלושי שכר?",
    a: "חישוב שכר לפי דיווחי שעות, חישוב ניכויים (מס הכנסה, ביטוח לאומי, בריאות, פנסיה, קרן השתלמות), הפקת תלושים, קובץ ההעברה לבנק, טופסי 106 שנתיים ודיווח 102 לרשויות.",
  },
  {
    q: "האם השירות כולל דיווח 102 לביטוח לאומי ומס הכנסה?",
    a: "כן. אנחנו מפיקים ומגישים את דיווח 102 החודשי לביטוח לאומי ולרשות המסים, בזמן ובאופן מלא – כולל תשלום הניכויים.",
  },
  {
    q: "מטפלים גם באופציות לעובדים?",
    a: "כן. אנחנו מלווים תוכניות 102 שווי הוני ופירותי, כולל אישור נאמן, שערוך אופציות, דיווח לרשויות ולעובדים.",
  },
];

export const Route = createFileRoute("/payroll")({
  head: () => ({
    meta: [
      { title: "שירותי שכר ותלושים לעסקים | נמרודי ושות׳" },
      {
        name: "description",
        content:
          "הפקת תלושי שכר, דיווחי 102, טופסי 106, ניהול אופציות 102 לעובדים – שירות מקצועי ומדויק לחברות בכל גודל.",
      },
      { property: "og:title", content: "שירותי שכר ותלושים | נמרודי ושות׳" },
      {
        property: "og:description",
        content: "הפקת תלושים, דיווחי 102 ו-106, ניהול אופציות לעובדים.",
      },
      { property: "og:url", content: "/payroll" },
    ],
    links: [{ rel: "canonical", href: "/payroll" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      icon={ReceiptText}
      eyebrow="שכר ותלושים"
      title="שירותי שכר מלאים – מדיוק ועד עמידה בכל הרגולציה"
      intro="שכר הוא הלב של כל ארגון – וגם התחום המורכב ביותר מבחינת רגולציה. אנחנו מפיקים תלושים מדויקים בזמן, מלווים את התהליך מקצה לקצה, ודואגים שכל דיווח וכל תשלום יגיעו בזמן ובאופן חוקי."
      highlights={[
        "הפקת תלושי שכר חודשיים",
        "דיווחי 102 לביטוח לאומי ולמס הכנסה",
        "טופסי 106 שנתיים",
        "ניהול תוכניות אופציות 102 לעובדים",
        "חישוב פיצויים ופנסיה",
        "ליווי בגמר חשבון ובפרישה",
      ]}
      sections={[
        {
          title: "שירות שכר לחברות בכל גודל",
          body: "מסטארטאפ עם שלושה מייסדים ועד חברה עם 100+ עובדים – אנחנו מספקים שירות שכר מלא, כולל אינטגרציה עם מערכות דיווח שעות (Hibob, Papaya, בזק בינלאומי) וייעוץ אישי בכל שאלה שעולה.",
        },
        {
          title: "אופציות לעובדים ותוכניות 102",
          body: "יש לנו התמחות ייחודית בליווי תוכניות אופציות במסלול 102 שווי הוני – מהגשת התוכנית לרשות המסים, דרך אישור נאמן ועד ליווי במימוש בפועל. חשוב במיוחד לסטארטאפים ולחברות טכנולוגיה.",
        },
      ]}
      faqs={FAQS}
      resources={RESOURCES}
    />
  ),
});
