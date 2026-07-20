import { Quote } from "lucide-react";

type Lang = "he" | "en";

const COPY = {
  he: {
    logosTitle: "חברות וסטארט-אפים שצומחים איתנו",
    logosSub: "לקוחות בתחומי הייטק, פינטק, ביומד, ריטייל וייצור – בישראל ובחו״ל.",
    testTitle: "מנהלים בכירים ממליצים",
    testEyebrow: "עדויות מנכ״לים ו-CFOs",
  },
  en: {
    logosTitle: "Empowering High-Growth Ventures & Enterprises",
    logosSub: "Trusted by tech, fintech, biomed, retail and manufacturing companies in Israel and abroad.",
    testTitle: "Executive Testimonials",
    testEyebrow: "From CEOs & Global CFOs",
  },
} as const;

const LOGOS = [
  "Northwind",
  "Helios AI",
  "Meridian Bio",
  "Kestrel Labs",
  "Aurora Fintech",
  "Vertex Cloud",
  "Lumen Health",
  "Arcadia Ventures",
];

const TESTIMONIALS: Record<Lang, { quote: string; name: string; role: string }[]> = {
  en: [
    {
      quote:
        "Partner-level responsiveness we didn't get at a Big Four. Shlomo and his team closed our Series B audit and Delaware Flip in parallel — on time and without a single surprise.",
      name: "Daniel R.",
      role: "CEO, B2B SaaS (Series B)",
    },
    {
      quote:
        "Cross-border tax strategy that actually saved us millions. Their Section 85A and IP-migration work stood up to two rounds of institutional DD without a scratch.",
      name: "Anna K.",
      role: "Global CFO, Fintech Group",
    },
    {
      quote:
        "The most responsive advisors we've ever worked with. Answers on WhatsApp within the hour, board-grade memos within the day.",
      name: "Michael T.",
      role: "Founder & CEO, DeepTech Startup",
    },
  ],
  he: [
    {
      quote:
        "רמת מענה של שותף בכיר – משהו שלא קיבלנו בביג פור. שלמה והצוות סגרו לנו ביקורת סבב B ו-Flip לדלאוור במקביל, בזמן, וללא הפתעה אחת.",
      name: "דניאל ר.",
      role: "מנכ״ל, חברת SaaS (סבב B)",
    },
    {
      quote:
        "אסטרטגיית מיסוי חוצת-גבולות שחסכה לנו מיליונים בפועל. עבודת סעיף 85א׳ והמעברי IP עמדו בשני סבבי DD מוסדיים בלי שריטה.",
      name: "אנה ק.",
      role: "CFO גלובלית, קבוצת פינטק",
    },
    {
      quote:
        "היועצים הכי זמינים שעבדנו איתם. מענה בוואטסאפ תוך שעה, מסמכים ברמת בורד תוך יום.",
      name: "מיכאל ט.",
      role: "מייסד ומנכ״ל, סטארטאפ דיפ-טק",
    },
  ],
};

export function ClientLogosStrip({ lang = "he" }: { lang?: Lang }) {
  const t = COPY[lang];
  const dir = lang === "he" ? "rtl" : "ltr";
  const items = [...LOGOS, ...LOGOS];
  return (
    <section dir={dir} aria-label={t.logosTitle} className="border-y border-border/60 bg-background py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t.logosTitle}
          </div>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">{t.logosSub}</p>
        </div>

        <div
          className="group relative mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ul className="flex w-max animate-[logo-scroll_38s_linear_infinite] items-center gap-12 group-hover:[animation-play-state:paused]">
            {items.map((name, i) => (
              <li
                key={`${name}-${i}`}
                className="flex h-12 shrink-0 items-center justify-center px-2 font-display text-lg font-semibold uppercase tracking-[0.18em] text-muted-foreground/70 opacity-70 grayscale transition hover:opacity-100 hover:text-primary hover:grayscale-0"
                aria-hidden={i >= LOGOS.length ? true : undefined}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes logo-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export function ExecutiveTestimonials({ lang = "he" }: { lang?: Lang }) {
  const t = COPY[lang];
  const items = TESTIMONIALS[lang];
  const dir = lang === "he" ? "rtl" : "ltr";
  return (
    <section dir={dir} className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t.testEyebrow}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
            {t.testTitle}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={i}
              className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg"
            >
              <Quote
                className="absolute -top-3 h-9 w-9 rounded-full bg-gold p-2 text-gold-foreground shadow-md"
                style={lang === "he" ? { right: "1.5rem" } : { left: "1.5rem" }}
                aria-hidden
              />
              <blockquote className="mt-2 text-sm leading-relaxed text-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display text-base font-semibold text-primary">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const SOCIAL = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nimrodi-co-cpa/",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nimrodi.cpa",
    path: "M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.9-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.13c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nimrodi.cpa/",
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
