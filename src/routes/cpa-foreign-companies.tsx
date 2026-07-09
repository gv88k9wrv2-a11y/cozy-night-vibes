import { createFileRoute } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { ServiceLanding, buildFaqJsonLd, type ServiceResource } from "../components/service-landing";

const RESOURCES: ServiceResource[] = [
  {
    label: "רשם החברות – רישום חברה זרה וסניף",
    url: "https://www.gov.il/he/departments/israeli_corporations_authority",
    source: "רשות התאגידים – משרד המשפטים (gov.il)",
    description: "רישום חברה בע״מ, סניף של חברת חוץ ואגרות שנתיות.",
  },
  {
    label: "רשות ההשקעות – חוק עידוד השקעות הון",
    url: "https://www.gov.il/he/departments/authority_for_investments_and_development_of_the_industry_and_economy",
    source: "משרד הכלכלה – רשות ההשקעות (gov.il)",
    description: "מסלולי הטבות מס ומענקים למשקיעים זרים בישראל.",
  },
  {
    label: "Transfer Pricing – סעיף 85א לפקודה",
    url: "https://www.gov.il/he/departments/general/transfer_pricing",
    source: "רשות המסים (gov.il)",
    description: "חובת דיווח על עסקאות בין-חברתיות ומחקרי TP.",
  },
  {
    label: "בנק ישראל – פיקוח על הבנקים ו-KYC",
    url: "https://www.boi.org.il/he/BankingSupervision",
    source: "בנק ישראל (boi.org.il)",
    description: "רגולציית איסור הלבנת הון, פתיחת חשבונות לתאגידים זרים.",
  },
  {
    label: "PwC Israel – Doing Business in Israel",
    url: "https://www.pwc.com/il/en/publications/doing-business-in-israel.html",
    source: "PwC Israel",
    description: "מדריך רשמי של PwC למשקיעים זרים ולחברות בין-לאומיות.",
  },
  {
    label: "KPMG – Investment in Israel Guide",
    url: "https://kpmg.com/il/en/home/insights/2023/investment-in-israel.html",
    source: "KPMG Israel",
    description: "מבנה משפטי, מיסוי חברות ותמריצים לחברות זרות.",
  },
];


const FAQS = [
  {
    q: "מה עדיף – לפתוח חברה בת בישראל או סניף?",
    a: "לכל מבנה יתרונות וחסרונות. חברה בת (Ltd) היא ישות משפטית נפרדת עם אחריות מוגבלת ומיסוי חברות רגיל (23%). סניף הוא הרחבה של החברה הזרה, פשוט יותר להקמה אך חושף את החברה האם. הבחירה תלויה בהיקף הפעילות, שיקולי מס במדינת האם ואמנות מס.",
  },
  {
    q: "כמה זמן לוקח להקים חברה בת בישראל?",
    a: "טכנית ניתן להקים חברה תוך 3-5 ימי עסקים ברשם החברות. פתיחת חשבון בנק לחברה זרה או לחברה בבעלות זרה יכולה לקחת 4-8 שבועות ודורשת KYC מלא. אנחנו מלווים את כל התהליך מקצה לקצה.",
  },
  {
    q: "אתם מטפלים גם ברגולציה של בנק ישראל?",
    a: "כן. הכנסת כספים לישראל, המרות מט״ח ופתיחת חשבונות בנק לישויות זרות דורשים ידע ברגולציה ובנהלי איסור הלבנת הון. אנחנו מייצגים מול הבנקים ומכינים את כל התיעוד הדרוש.",
  },
  {
    q: "מה עם עובדים בישראל – חייבים תלוש?",
    a: "כן. כל עובד שכיר בישראל חייב לקבל תלוש שכר חוקי, גם אם הוא עובד בפועל עבור חברה זרה. יש מספר אפשרויות: פתיחת סניף לחברה הזרה, שימוש בחברת EOR (Employer of Record), או הקמת חברה בת. אנחנו נמליץ על הפתרון האופטימלי.",
  },
  {
    q: "מה זה Transfer Pricing ולמה זה חשוב?",
    a: "Transfer Pricing הוא תמחור העסקאות בין החברה הזרה לחברה הבת בישראל. הרשויות דורשות שהתמחור יהיה במחירי שוק (Arm's Length). דוח TP מקצועי הוא חובה מעל היקף מסוים ומגן מפני שומות עתידיות של רשות המסים.",
  },
];

export const Route = createFileRoute("/cpa-foreign-companies")({
  head: () => ({
    meta: [
      { title: "ליווי חברות זרות בישראל | הקמת חברה בת וסניף | נמרודי ושות׳" },
      {
        name: "description",
        content:
          "ליווי מלא לחברות זרות בישראל – הקמת חברה בת או סניף, פתיחת חשבונות בנק, ניהול שכר לעובדים, Transfer Pricing ודיווח לרשויות המס.",
      },
      { property: "og:title", content: "ליווי חברות זרות בישראל – נמרודי ושות׳" },
      {
        property: "og:description",
        content:
          "משרד רואי חשבון בעל ניסיון עשיר בליווי חברות בינלאומיות בישראל – הקמה, ניהול, מיסוי ורגולציה.",
      },
      { property: "og:url", content: "/cpa-foreign-companies" },
    ],
    links: [{ rel: "canonical", href: "/cpa-foreign-companies" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      icon={Globe2}
      eyebrow="ליווי חברות זרות בישראל"
      title="ליווי חברות זרות בהקמת פעילות בישראל"
      intro="חברה זרה שרוצה להיכנס לשוק הישראלי צריכה פרטנר מקומי שמכיר את הרגולציה, השפה, הבנקים ורשויות המס. אנחנו במשרד נמרודי ושות׳ מלווים חברות טכנולוגיה בינלאומיות, סטארטאפים גלובליים וקרנות זרות בכל שלבי הכניסה לשוק הישראלי."
      highlights={[
        "הקמת חברה בת ישראלית (Ltd) או סניף",
        "פתיחת חשבונות בנק וטיפול ב-KYC",
        "ניהול שכר לעובדים בישראל",
        "Transfer Pricing ותיעוד עסקאות בין-חברתיות",
        "דיווח שוטף לרשות המסים ולרשם החברות",
      ]}
      sections={[
        {
          title: "בחירת המבנה המתאים",
          body: "החלטת המבנה היא הראשונה והחשובה. אנחנו נבחן איתך את השיקולים – חברה בת עצמאית, סניף, או שימוש ב-EOR – בהתחשב בהיקף הפעילות המתוכנן, מדינת האם, אמנות מס ותוכניות עתידיות.",
        },
        {
          title: "תהליך ההקמה",
          body: "מרגע קבלת ההחלטה, אנחנו מטפלים בכל התהליך:",
          bullets: [
            "רישום חברה ברשם החברות (2-3 ימי עסקים)",
            "רישום במע״מ, מס הכנסה וביטוח לאומי",
            "פתיחת חשבון בנק – ליווי מלא ב-KYC",
            "רישום כמעסיק וניהול תלושי שכר",
            "התאמת מערכת הנהלת חשבונות (Priority / SAP / QuickBooks)",
          ],
        },
        {
          title: "ניהול שוטף",
          body: "לאחר ההקמה, אנחנו נמשיך ללוות את הפעילות – הנהלת חשבונות שוטפת, דיווחי מע״מ ומס, שכר חודשי, דוחות רבעוניים לחברה האם, דוחות כספיים שנתיים ותכנון מס בין-לאומי.",
        },
        {
          title: "Transfer Pricing ורגולציה",
          body: "עבור חברות עם עסקאות בין-חברתיות משמעותיות, אנחנו מכינים דוחות Transfer Pricing מקצועיים בהתאם לתקנות ה-OECD ורשות המסים הישראלית. הדוחות מגנים על החברה מפני שומות עתידיות ומייצרים ודאות מיסויית.",
        },
      ]}
      faqs={FAQS}
      resources={RESOURCES}
      ctaHeadline="שוקלים כניסה לשוק הישראלי? נשמח לתאם שיחת ייעוץ ראשונית."
    />
  ),
});
