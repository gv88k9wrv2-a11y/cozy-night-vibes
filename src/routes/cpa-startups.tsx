import { createFileRoute } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { ServiceLanding, buildFaqJsonLd, type ServiceResource } from "../components/service-landing";

const RESOURCES: ServiceResource[] = [
  {
    label: "רשות החדשנות – מסלולי מענקים ל-R&D",
    url: "https://innovationisrael.org.il",
    source: "רשות החדשנות (innovationisrael.org.il)",
    description: "קרן המו״פ, מסלול תנופה, ותוכניות לחברות טכנולוגיה בשלבים שונים.",
  },
  {
    label: "רשות המסים – סעיף 102 לפקודת מס הכנסה",
    url: "https://www.gov.il/he/departments/general/section_102_employee_options",
    source: "רשות המסים (gov.il)",
    description: "מסלול הוני 25%, אישור נאמן ותהליך הגשת תוכנית אופציות.",
  },
  {
    label: "חוק עידוד השקעות הון – מפעל טכנולוגי מועדף",
    url: "https://www.gov.il/he/departments/topics/preferred_technology_enterprise",
    source: "רשות המסים (gov.il)",
    description: "שיעורי מס מופחתים 6%/12% ומענקים לחברות היי-טק.",
  },
  {
    label: "רשם החברות – הקמת חברה בע״מ",
    url: "https://www.gov.il/he/departments/israeli_corporations_authority",
    source: "רשות התאגידים – משרד המשפטים (gov.il)",
    description: "רישום חברה, הגשת תקנון והסכמי מייסדים.",
  },
  {
    label: "PwC Israel – Emerging Companies (Startups)",
    url: "https://www.pwc.com/il/en/services/tax/emerging-companies.html",
    source: "PwC Israel",
    description: "ליווי סטארטאפים בגיוסים, Flip ו-Due Diligence.",
  },
  {
    label: "Deloitte Israel – High-Tech Practice",
    url: "https://www2.deloitte.com/il/en/pages/technology-media-and-telecommunications/topics/technology.html",
    source: "Deloitte Israel",
    description: "מחקר Big Four על שוק הטכנולוגיה הישראלי וגיוסי הון.",
  },
];


const FAQS = [
  {
    q: "מתי סטארטאפ צריך רואה חשבון?",
    a: "כבר לפני הקמת החברה. בחירת מבנה נכון (חברה בע״מ / חברת החזקות), הסכמי מייסדים, שיוך הוני (Founders equity), טיפול נכון ב-vesting וב-83b election – משפיעים על ההכנסה, המס וההצלחה בגיוסים הבאים.",
  },
  {
    q: "אתם מלווים גם בגיוסי הון?",
    a: "כן. אנחנו מלווים סטארטאפים בכל שלבי הגיוס – מ־Pre-Seed ועד Series C. נכין את הנתונים הפיננסיים ל-Data Room, נעבוד מול המשקיעים, נטפל ב-SAFE / Convertible Notes ובמבנה הנכון של הגיוס מבחינת מס.",
  },
  {
    q: "יש לנו פעילות בארה״ב / דלאוור – אתם יודעים להתמודד?",
    a: "בהחלט. אנחנו מלווים חברות עם מבנה Israeli-Delaware Flip, סניפים בחו״ל וחברות בנות בארה״ב, אירופה ואסיה. יש לנו קשרי עבודה עם רו״ח מקצועיים במדינות המרכזיות.",
  },
  {
    q: "מה זה 102 ואיך זה עובד?",
    a: "סעיף 102 לפקודת מס הכנסה מאפשר הענקת אופציות לעובדים במיסוי מופחת (מסלול הוני 25%). אנחנו מכינים את התוכנית, מגישים לפקיד השומה, ומלווים את הנאמן והחברה לאורך כל חיי התוכנית.",
  },
  {
    q: "מה תדירות הדיווח לסטארטאפ?",
    a: "מומלץ דיווח חודשי שוטף להנהלה, ורבעונית למשקיעים. אנחנו מספקים דוחות ניהוליים ברורים שמתאימים להצגה לבורד ולמשקיעים.",
  },
];

export const Route = createFileRoute("/cpa-startups")({
  head: () => ({
    meta: [
      { title: "רואה חשבון לסטארטאפים | ליווי גיוסי הון | נמרודי ושות׳" },
      {
        name: "description",
        content:
          "רואה חשבון לסטארטאפים – ליווי חשבונאי, ייעוץ מס, גיוסי הון, אופציות לעובדים (102), Flip לדלאוור וניהול פיננסי. משרד נמרודי ושות׳ בהרצליה פיתוח.",
      },
      { property: "og:title", content: "רואה חשבון לסטארטאפים – נמרודי ושות׳" },
      {
        property: "og:description",
        content:
          "ליווי חשבונאי ופיננסי לסטארטאפים בכל שלב – מהקמה ועד גיוסים, אופציות ו-Exit.",
      },
      { property: "og:url", content: "/cpa-startups" },
    ],
    links: [{ rel: "canonical", href: "/cpa-startups" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      icon={Rocket}
      eyebrow="רואה חשבון לסטארטאפים"
      title="רואה חשבון לסטארטאפים – מהקמה ועד Exit"
      intro="אנחנו יודעים איך עובד סטארטאפ – מהמצגת הראשונה למשקיע, דרך גיוסי ה-Seed, ועד להנפקה או Exit. משרד נמרודי ושות׳ מלווה עשרות סטארטאפים ישראליים בשלבים שונים, וזה כל היום שלנו."
      highlights={[
        "ליווי בגיוסי הון: SAFE, Convertible, Priced Rounds",
        "תוכניות אופציות לעובדים (102 הוני / הכנסה)",
        "Israeli-Delaware Flip ופעילות בינלאומית",
        "דוחות ניהוליים למשקיעים ולבורד",
      ]}
      sections={[
        {
          title: "שירותים חשבונאיים לסטארטאפים",
          body: "כל מה שצריך כדי להתמקד במוצר ובלקוחות – במקום בבירוקרטיה:",
          bullets: [
            "הקמת חברה, מבנה מיסויי אופטימלי והסכמי מייסדים",
            "הנהלת חשבונות שוטפת דיגיטלית (Priority / QuickBooks / Xero)",
            "דוחות כספיים שנתיים לפי IFRS / US-GAAP",
            "תכנון מס לחברה ולמייסדים",
            "R&D tax incentives, מסלולי רשות החדשנות ומענקי מדען הראשי",
            "הכנה ל-Due Diligence, ניהול Data Room ותמיכה בסבבי גיוס",
          ],
        },
        {
          title: "אופציות לעובדים (סעיף 102)",
          body: "אופציות הן כלי גיוס וגיוס-אמון קריטי בסטארטאפים. אנחנו מכינים תוכנית 102 במסלול ההוני (מיסוי מופחת של 25%), מטפלים באישור פקיד השומה, מלווים את הנאמן ומדריכים את העובדים בהיבטי המס במימוש ובמכירה.",
        },
        {
          title: "פעילות בינלאומית ו-Flip",
          body: "רוב הסטארטאפים הישראליים בסופו של דבר מגיעים לפעילות בארה״ב או באירופה. אנחנו מלווים תהליכי Israeli-Delaware Flip, הקמת חברות בנות ומבנים בינלאומיים, כולל שיקולי Transfer Pricing ואמנות מס.",
        },
      ]}
      faqs={FAQS}
      resources={RESOURCES}
      ctaHeadline="חושבים על הקמת סטארטאפ או לפני גיוס? בואו נדבר."
    />
  ),
});
