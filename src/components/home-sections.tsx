import { motion } from "framer-motion";
import {
  ClipboardList,
  FileSearch2,
  HandCoins,
  MessageSquareHeart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Timer,
  UserCheck,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};


const WHY_US = [
  {
    icon: UserCheck,
    title: "יחס אישי של שותף",
    desc: "אתם מדברים ישירות עם רואה החשבון המטפל – לא מוקד, לא מזכירה. כל פנייה מקבלת מענה תוך יום עבודה.",
  },
  {
    icon: ShieldCheck,
    title: "דיסקרטיות וביטחון",
    desc: "משרד בוטיק שמלווה חברות ציבוריות ופרטיות מזה למעלה מ־25 שנה. כל מידע נשמר ברמת סודיות מלאה.",
  },
  {
    icon: Rocket,
    title: "מומחיות בטכנולוגיה וגיוסים",
    desc: "ניסיון ממשי בליווי סטארטאפים, הנפקות, אופציות 102, Transfer Pricing ופעילות מול משקיעים זרים.",
  },
  {
    icon: HandCoins,
    title: "תמחור שקוף וקבוע",
    desc: "מודל תמחור ברור מראש. ללא הפתעות בסוף החודש וללא שעות חיוב עמומות.",
  },
  {
    icon: Timer,
    title: "זמינות ומענה מהיר",
    desc: "אתם לא מחכים ימים לתשובה. וואטסאפ, מייל וטלפון – כולם מנוטרים ומקבלים מענה מהיר.",
  },
  {
    icon: MessageSquareHeart,
    title: "שפה שאתם מבינים",
    desc: "מסבירים לכם כל תשלום וכל דיווח בשפה פשוטה. אתם יוצאים מכל פגישה עם תמונת מצב ברורה.",
  },
];

const PROCESS = [
  {
    icon: MessageSquareHeart,
    title: "פגישת היכרות",
    desc: "שיחה ראשונית ללא עלות – מבינים את העסק, המבנה והצרכים.",
  },
  {
    icon: ClipboardList,
    title: "תוכנית עבודה מותאמת",
    desc: "הצעה מקצועית עם היקף שירותים, לוחות זמנים ותמחור שקוף וקבוע.",
  },
  {
    icon: FileSearch2,
    title: "מעבר חלק וקליטה",
    desc: "העברת חומרים מהמשרד הקודם, פתיחת מערכות דיווח וסנכרון מלא – ללא הפרעה לשוטף.",
  },
  {
    icon: Sparkles,
    title: "ליווי שוטף וצמיחה",
    desc: "דיווחים בזמן, פגישות תקופתיות, ייעוץ פרואקטיבי – והמשרד גדל אתכם.",
  },
];

export function WhyUsSection() {
  return (
    <section className="border-y border-border/60 bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">
            למה נמרודי ושות׳
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            שישה יתרונות שהופכים אותנו למשרד שנשארים אתו
          </h2>
          <p className="mt-4 text-muted-foreground">
            לקוחות בוחרים בנו בזכות שילוב של מקצועיות, זמינות וליווי אישי לאורך זמן.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map(({ icon: Icon, title, desc }, i) => (
            <motion.article
              key={title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">
            תהליך העבודה
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            מהפגישה הראשונה ועד ליווי שוטף – בארבעה צעדים
          </h2>
        </motion.div>

        <ol className="mt-14 grid gap-8 md:grid-cols-4">
          {PROCESS.map(({ icon: Icon, title, desc }, i) => (
            <motion.li
              key={title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="relative"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-background font-display text-lg font-bold text-primary">
                  {i + 1}
                </span>
                <Icon className="h-5 w-5 text-gold" aria-hidden />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

