import { createFileRoute, Link } from "@tanstack/react-router";
import { LineChart } from "lucide-react";
import { ServiceLanding, buildFaqJsonLd } from "../components/service-landing";
import heroImg from "../assets/service-cfo.webp";

const FAQS = [
  {
    q: "מה זה Fractional CFO ולמי זה מתאים?",
    a: "Fractional CFO הוא סמנכ״ל כספים בכיר במיקור חוץ, המצטרף לחברה בהיקף חלקי (יום בשבוע, כמה ימים בחודש) במקום עלות מלאה של CFO משרה מלאה. מתאים במיוחד לסטארטאפים בשלבי Seed–Series B, לחברות זרות שפועלות בישראל וזקוקות לדמות כספים בכירה מקומית, ולעסקים בצמיחה שעדיין לא מצדיקים CFO Full-Time. אתם מקבלים ניסיון של מאות סבבי גיוס וישיבות דירקטוריון – בשבריר מהעלות.",
  },
  {
    q: "מה ההבדל בין Fractional CFO להנהלת חשבונות?",
    a: "הנהלת חשבונות היא רישום היסטורי של מה שקרה. Fractional CFO צופה קדימה: בונה מודל פיננסי, מנהל תזרים ו-Runway, מכין דקים למשקיעים, יושב עם הבורד, מנהל את ה-Data Room ומייצג בפני VC-ים. שני התפקידים משלימים – אנחנו מספקים את שניהם תחת קורת גג אחת עם מעבר מידע חלק ביניהם.",
  },
  {
    q: "איך מחושבים Burn Rate ו-Runway ולמה זה קריטי?",
    a: "Burn Rate (גרוס/נטו) הוא קצב שריפת המזומן החודשי. Runway הוא מספר החודשים עד שהמזומן נגמר – החישוב הבסיסי הוא Cash Balance ÷ Net Burn. במציאות ה-CFO בונה תרחישים (Base/Bull/Bear), משקלל Deferred Revenue, גיוסי חוב וקווי אשראי, ומזהה את ה-Trigger Points שמחייבים החלטה: לקצץ, לגייס, או להאיץ. כלל אצבע – להתחיל גיוס כשנותרו לפחות 9–12 חודשי Runway.",
  },
  {
    q: "אתם מלווים בפועל את הצגת החברה למשקיעים?",
    a: "כן. אנחנו יושבים בפגישות VC ליד המייסדים, עונים על שאלות פיננסיות מורכבות, מגנים על ההנחות שבמודל, ומנווטים את החלק הכספי של המצגת. הליווי כולל הכנה מראש (Dry Run), Coaching על מונחים פיננסיים, ותגובה בזמן אמת לאתגרי המשקיעים סביב Unit Economics, LTV/CAC, Rule of 40 ו-Gross Margin.",
  },
  {
    q: "מה כולל Data Room ו-Ongoing DD?",
    a: "Data Room מקצועי כולל: דוחות כספיים מבוקרים לשנתיים אחורות, Cap Table מלא בדילול מלא ב-Carta/Pulley, הסכמי מייסדים ו-Vesting, תוכנית 102 מאושרת, חוזי לקוחות עיקריים, הסכמי עבודה עם עובדי מפתח, מדיניות Transfer Pricing, אישורי מס ומע״מ, פוליסות ביטוח וקורספונדנציה עם רשויות. Ongoing DD משמעו שהחדר תמיד עדכני ומוכן – כך שכשמגיעה הצעה, אפשר להיכנס למו״מ תוך ימים ולא חודשים.",
  },
  {
    q: "מהם המדדים (KPIs) שאתם עוקבים אחריהם עבור הבורד?",
    a: "לחברות SaaS: MRR/ARR, Net Revenue Retention, Gross Margin, CAC Payback, LTV/CAC, Magic Number, Rule of 40. לחברות מסחר: Contribution Margin, Repeat Rate, AOV, Inventory Turnover. חוצה מגזר: Cash Balance, Burn, Runway, Headcount, ותקציב מול ביצוע. אנחנו בונים Dashboard חודשי עם ניתוח סטיות והמלצות פעולה, שמגיע לבורד ולמשקיעים בתאריך קבוע.",
  },
  {
    q: "כמה עולה שירות Fractional CFO?",
    a: "מודל התמחור גמיש ותלוי היקף: Retainer חודשי קבוע (יום בשבוע / יומיים בחודש), פרויקטלי (הכנה לגיוס, הכנה ל-DD, בניית מודל פיננסי) או שילוב. יתרון עיקרי – אתם משלמים על השכבה הבכירה בלבד, כאשר הצוות המקצועי (הנהלת חשבונות, חשבות שכר, ביקורת) פועל תחתיו בעלות סטנדרטית. חוסך 60–75% מעלות CFO משרה מלאה בישראל.",
  },
  {
    q: "מתי חברה צריכה לעבור ל-CFO משרה מלאה?",
    a: "בדרך כלל אחרי Series B, כשה-ARR חוצה את רף $10M, יש 50+ עובדים, פעילות בכמה מדינות ודירקטוריון עם משקיעים מוסדיים. אנחנו מלווים את המעבר: מגדירים את דרישות התפקיד, מבצעים תהליך גיוס, וממשיכים ללוות את ה-CFO החדש כיועצים חיצוניים במשך תקופת חפיפה כדי לשמור על רציפות.",
  },
];

export const Route = createFileRoute("/fractional-cfo")({
  head: () => ({
    meta: [
      { title: "Fractional CFO | ניהול כספים אסטרטגי | נמרודי ושות׳" },
      {
        name: "description",
        content:
          "שירותי Fractional CFO – ניהול כספים אסטרטגי, Burn Rate, Runway, מודלים פיננסיים, הכנה ל-Due Diligence וליווי גיוסי הון. תאמו פגישה.",
      },
      { property: "og:title", content: "Fractional CFO – נמרודי ושות׳" },
      {
        property: "og:description",
        content:
          "סמנכ״ל כספים בכיר במיקור חוץ – ניהול תזרים, מודלים, ובורד לסטארטאפים ולחברות זרות בישראל.",
      },
      { property: "og:url", content: "/fractional-cfo" },
      { property: "og:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.webp" },
    ],
    links: [
      { rel: "canonical", href: "/fractional-cfo" },
      { rel: "alternate", hrefLang: "he-IL", href: "/fractional-cfo" },
      { rel: "alternate", hrefLang: "en-US", href: "/en/fractional-cfo" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      heroImage={heroImg}
      heroImageAlt="חדר ישיבות עם מסכי ניהול פיננסי – שירותי Fractional CFO"
      icon={LineChart}
      eyebrow="ניהול כספים ו-CFO"
      title="Fractional CFO – ניהול כספים אסטרטגי לחברות בצמיחה"
      intro="סמנכ״ל כספים בכיר במיקור חוץ – בעלות שברירית של CFO משרה מלאה. אנחנו מלווים סטארטאפים, חברות זרות בישראל ועסקים בצמיחה בכל מה שקשור לניהול תזרים, מודלים פיננסיים, הכנה לגיוסי הון, ייצוג בפני משקיעים וישיבות דירקטוריון, וניהול מוכנות מתמדת ל-Due Diligence."
      highlights={[
        "תקציב שנתי מפורט וניהול תזרים מזומנים",
        "Burn Rate ו-Runway – חישוב, ניטור ותרחישים",
        "מודל פיננסי 3–5 שנים ל-VC (Base / Bull / Bear)",
        "יחסי משקיעים ובורד – דקים, KPIs ומצגות",
        "ייצוג בישיבות בפני קרנות הון סיכון ומשקיעי אנג׳ל",
        "ניהול Data Room ומוכנות מתמדת ל-Due Diligence",
        "אופטימיזציית Unit Economics ו-Rule of 40",
        "ניהול קווי אשראי, Venture Debt וגידור מטבע",
        "היערכות ל-M&A, אקזיט או המשך גיוס",
      ]}
      sections={[
        {
          title: "אסטרטגיית פיננסים תאגידית",
          body: (
            <>
              אנחנו הופכים את הפיננסים ממרכז עלות למנוע צמיחה. תכנון תקציב אחראי, בקרה שוטפת מול ביצוע, וזיהוי מוקדם של סטיות – עם המלצות פעולה ברורות להנהלה ולבורד. השירות משתלב באופן טבעי עם <Link to="/cpa-startups" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">ליווי סטארטאפים</Link>, <Link to="/cpa-foreign-companies" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">ליווי חברות זרות בישראל</Link> ו<Link to="/audit" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">ביקורת דוחות כספיים</Link>.
            </>
          ),
          bullets: [
            "בניית תקציב שנתי (Bottom-Up + Top-Down) עם Ownership של מנהלים",
            "Cash Flow Forecast שבועי / חודשי / רבעוני",
            "ניתוח סטיות (Actual vs Budget) חודשי עם דרישת פעולה",
            "אופטימיזציית הוצאות SaaS, כוח אדם ושיווק",
            "חישוב Break-Even ותכנון מסלול לרווחיות",
            "ניהול Working Capital ומחזורי גבייה/תשלום",
          ],
        },
        {
          title: "Burn Rate & Runway – חיי החברה",
          body:
            "כל סטארטאפ חי או מת על ה-Runway שלו. אנחנו מנהלים את חישובי Burn ו-Runway כמו שעון – ומזהים את הרגע שבו צריך להתחיל את הגיוס הבא, לצמצם או לשנות אסטרטגיה, כל עוד יש עדיין מרחב תמרון:",
          bullets: [
            "Gross Burn vs Net Burn – חישוב חודשי מדויק",
            "Runway Simulation לפי תרחישי הכנסה, גיוס ואירועים",
            "Cash Trigger Points – מתי חובה לקבל החלטה",
            "בקרת Deferred Revenue וקווי אשראי",
            "תזמון גיוס: תמיד להתחיל עם 9–12 חודשי Runway",
            "Dashboards בזמן אמת להנהלה ולבורד",
          ],
        },
        {
          title: "יחסי משקיעים והכנה לדירקטוריון",
          body:
            "פגישת בורד מקצועית מייצרת אמון – פגישה לא מוכנה שוחקת אותו. אנחנו בונים את חבילת החומרים, מכינים את המייסדים ל-Q&A, ולעיתים יושבים בפגישה עצמה כדי לתמוך במיצג הכספי ולהחזיר קרדיביליות פיננסית:",
          bullets: [
            "Board Deck חודשי / רבעוני – מבנה קבוע ומקצועי",
            "KPI Dashboard חוצה מגזר: SaaS, E-Commerce, Marketplace",
            "Financial Model 3–5 שנים בקבצים שמשקיע יודע לבדוק",
            "Investor Update Email חודשי – בונה קרדיביליות ומוניטין",
            "Coaching למייסדים לפני פגישות VC",
            "ייצוג מקצועי בישיבות בורד ובוועדות (Audit, Comp)",
          ],
        },
        {
          title: "מודל פיננסי לגיוס הון",
          body:
            "משקיע רציני מחפש קודם כל מודל שמדבר את השפה שלו: הנחות ברורות, מנועי הכנסה מודלרים, ורגישות שהוא יכול לשחק איתה. המודלים שלנו נבנים בסטנדרט של קרנות ה-VC המובילות ומעברים DD בלי הפתעות:",
          bullets: [
            "מנועי הכנסה: SaaS ARR, Transactional Revenue, Marketplace GMV",
            "Cohort Analysis ו-Retention Curves מבוססי דאטה",
            "Unit Economics: CAC, LTV, Payback Period, Gross Margin",
            "Scenario Analysis: Base / Bull / Bear עם הנחות ניתנות להזזה",
            "Cap Table Waterfall למקרה אקזיט בכל שווי",
            "Dilution Simulation לסבבי גיוס עתידיים",
          ],
        },
        {
          title: "מוכנות מתמדת ל-Due Diligence ול-M&A",
          body:
            "הזדמנויות רכישה או גיוס מגיעות ללא התראה. חברה מוכנה מכניסה למו״מ תוך ימים; חברה לא מוכנה מפסידה עסקאות של מיליוני דולרים. אנחנו מנהלים את ה-Data Room כתהליך שוטף, לא כפרויקט חירום:",
          bullets: [
            "Data Room ב-DocSend / Digify / Google Drive עם מבנה תיקיות סטנדרטי VC",
            "עדכון רבעוני של כל המסמכים הפיננסיים והמשפטיים",
            "Cap Table נקי בדילול מלא כולל SAFEs, CLAs ו-Option Pool",
            "היסטוריית מס נקייה – ללא שומות פתוחות או חובות",
            "Quality of Earnings (QoE) לפני מכירה מהותית",
            "ניהול תהליך DD מול קונים ומשקיעים מתחילתו ועד סופו",
            "תיאום עם עורכי דין (ישראל + חו״ל), רו״ח מבקרים ושמאים",
          ],
        },
        {
          title: "גמישות מותאמת לשלב שאתם בו",
          body:
            "אין מודל אחד שמתאים לכולם. אנחנו מגיעים בהיקף שנכון לשלב שלכם – מיום בשבוע לסטארטאפ Seed, ועד 3 ימים בשבוע לחברת Series B שבדרך ל-IPO. תמיד עם אותו CFO מלווה, כדי לשמור על רציפות והיסטוריה מוסדית:",
          bullets: [
            "מודל Retainer חודשי קבוע – תמחור צפוי ושקוף",
            "פרויקטלי: בניית מודל, הכנת Data Room, ליווי סבב גיוס",
            "Interim CFO – החלפת CFO יוצא עד גיוס קבוע",
            "חוסך 60–75% מעלות CFO משרה מלאה בישראל",
            "גישה לצוות שלם: הנהלת חשבונות, שכר, ביקורת ומיסים",
            "מעבר חלק ל-CFO משרה מלאה בהמשך – אנחנו מלווים את הגיוס",
          ],
        },
      ]}
      govPortals={{
        title: "פורטלי מימון, מענקים וקרנות מדינה",
        links: [
          { label: "רשות המסים – הטבות מס, מקדמות ודיווחים", href: "https://www.gov.il/he/departments/israel_tax_authority" },
          { label: "רשות החדשנות – מסלולי מימון ומענקים", href: "https://innovationisrael.org.il" },
        ],
      }}
      faqs={FAQS}
      ctaHeadline="לפני הגיוס הבא או בישיבת בורד חודש הבא? בואו נדבר."
    />
  ),
});
