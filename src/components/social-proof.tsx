import { CalendarDays, ExternalLink, Globe2, Star, UserCheck } from "lucide-react";

type Lang = "he" | "en";

const COPY = {
  he: {
    credEyebrow: "אמינות מוכחת",
    credTitle: "משרד ותיק עם רקורד אמיתי",
    credSub: "המספרים והעובדות מדברים בעד עצמם – ללא הבטחות שיווקיות.",
    facts: [
      { icon: CalendarDays, label: "פעילים משנת 2000 – מעל 25 שנות ניסיון" },
      { icon: UserCheck, label: "בהובלת רו״ח שלמה נמרודי" },
      { icon: Globe2, label: "ליווי חברות, סטארטאפים ופעילות בינלאומית" },
    ],
    reviewsEyebrow: "חוות דעת לקוחות",
    reviewsTitle: "מה לקוחות שלנו אומרים",
    reviewsSub:
      "אנו מאמינים בשקיפות מלאה. במקום ציטוטים באתר, אנחנו מפנים אתכם ישירות למקורות הציבוריים שבהם מפורסמות חוות דעת אמיתיות על המשרד.",
    readOn: "קראו חוות דעת ב-",
    openSource: "פתיחת מקור המקור",
    ctaAll: "לצפייה בכל חוות הדעת",
    disclaimer:
      "מוצגים כאן קישורים למקורות ציבוריים בלבד. כל חוות דעת נכתבה על ידי הכותב במקור החיצוני.",
  },
  en: {
    credEyebrow: "Proven Credibility",
    credTitle: "An established firm with a real track record",
    credSub: "Facts, not marketing claims.",
    facts: [
      { icon: CalendarDays, label: "Established in 2000 – 25+ years of experience" },
      { icon: UserCheck, label: "Led by CPA Shlomo Nimrodi" },
      { icon: Globe2, label: "Serving companies, startups & international clients" },
    ],
    reviewsEyebrow: "Client Reviews",
    reviewsTitle: "What Our Clients Say",
    reviewsSub:
      "We believe in full transparency. Instead of quoting reviews on-site, we link you directly to the public platforms where authentic client reviews of the firm are published.",
    readOn: "Read reviews on ",
    openSource: "Open original source",
    ctaAll: "Read more reviews",
    disclaimer:
      "Only links to public sources are shown. Each review was written by its author on the external platform.",
  },
} as const;

const REVIEW_SOURCES = [
  {
    name: "Easy.co.il",
    href: "https://easy.co.il/page/2735913",
    description: {
      he: "פרופיל המשרד ודירוגי לקוחות באתר Easy.",
      en: "Firm profile and client ratings on Easy.",
    },
  },
  {
    name: "D.co.il (דפי זהב)",
    href: "https://www.d.co.il/reviews-76157350-c46140-p1/",
    description: {
      he: "חוות דעת מלקוחות בפלטפורמת דפי זהב.",
      en: "Customer reviews on the Dapei Zahav directory.",
    },
  },
  {
    name: "B144 / T.co.il",
    href: "https://www.t.co.il/mobile/busins/545-c:408.html",
    description: {
      he: "פרופיל עסקי וביקורות בפלטפורמת B144.",
      en: "Business profile and reviews on the B144 platform.",
    },
  },
] as const;

export function ClientLogosStrip({ lang = "he" }: { lang?: Lang }) {
  const t = COPY[lang];
  const dir = lang === "he" ? "rtl" : "ltr";
  return (
    <section dir={dir} aria-label={t.credTitle} className="border-y border-border/60 bg-background py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">{t.credEyebrow}</div>
          <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">{t.credTitle}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">{t.credSub}</p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.facts.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold">
                <f.icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm font-medium leading-relaxed text-foreground">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ExecutiveTestimonials({ lang = "he" }: { lang?: Lang }) {
  const t = COPY[lang];
  const dir = lang === "he" ? "rtl" : "ltr";
  const primary = REVIEW_SOURCES[0];

  return (
    <section dir={dir} className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">{t.reviewsEyebrow}</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">{t.reviewsTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.reviewsSub}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEW_SOURCES.map((src) => (
            <article
              key={src.href}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-gold" aria-hidden>
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{src.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {src.description[lang]}
              </p>
              <a
                href={src.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold"
              >
                {t.readOn}
                {src.name}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition hover:brightness-95"
          >
            {t.ctaAll}
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <p className="max-w-xl text-center text-xs text-muted-foreground">{t.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}

const SOCIAL = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nimrodi-co-cpa-israel-60734",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=191068078050890",
    path: "M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.9-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.13c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nimrodi_cpa/",
    path: "M12 2.16c3.2 0 3.58.02 4.85.07 1.17.06 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 0 1-1.38-.9 3.71 3.71 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.18 15.58 2.16 15.2 2.16 12s.02-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.17 1.06-.36 2.23-.42C8.42 2.18 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.14.63a5.87 5.87 0 0 0-2.13 1.38A5.87 5.87 0 0 0 .63 4.14C.33 4.9.13 5.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.8.72 1.48 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  },
];

export function SocialIcons({
  lang = "he",
  variant = "footer",
}: {
  lang?: Lang;
  variant?: "footer" | "inline";
}) {
  const label = lang === "he" ? "רשתות חברתיות" : "Social media";
  const base =
    variant === "footer"
      ? "text-primary-foreground/70 hover:text-gold focus-visible:text-gold"
      : "text-primary hover:text-gold focus-visible:text-gold";
  return (
    <nav aria-label={label} className="flex items-center gap-3">
      {SOCIAL.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className={`grid h-10 w-10 place-items-center rounded-full border border-current/20 transition hover:-translate-y-0.5 hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${base}`}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            className="h-[18px] w-[18px]"
            fill="currentColor"
          >
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </nav>
  );
}
