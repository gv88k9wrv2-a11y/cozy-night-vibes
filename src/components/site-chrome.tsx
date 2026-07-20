import { Link, useRouterState } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Menu,
  ChevronDown,
  Building2,
  Briefcase,
  Globe2,
  MapPin,
  Calculator,
  ReceiptText,
  FileSearch,
  FileSpreadsheet,
  Plane,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/972546688681?text=" +
  encodeURIComponent("פנייה מהאתר - נמרודי ושות");

const PHONE_TEL = "tel:099582211";
const PHONE_DISPLAY = "09-9582211";
const WHATSAPP_DISPLAY = "054-6688681";
const EMAIL = "office@nimrodi.co.il";
const ADDRESS_HE = "גלגלי הפלדה 16, הרצליה פיתוח";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("גלגלי הפלדה 16, הרצליה פיתוח");

/** Map current Hebrew path → English equivalent. */
function toEnglishPath(pathname: string): string {
  if (!pathname || pathname === "/") return "/en";
  if (pathname.startsWith("/en")) return pathname;
  if (pathname.startsWith("/blog")) return "/en";
  return `/en${pathname}`;
}

const MAIN_LINKS = [
  { to: "/", label: "בית" },
  { to: "/services", label: "שירותים" },
  { to: "/about", label: "אודות" },
  { to: "/team", label: "הצוות" },
  { to: "/blog", label: "בלוג" },
  { to: "/faq", label: "שאלות ותשובות" },
  { to: "/contact", label: "צור קשר" },
] as const;

type ServiceRoute =
  | "/bookkeeping"
  | "/payroll"
  | "/audit"
  | "/tax-consulting"
  | "/cpa-startups"
  | "/cpa-freelancers"
  | "/cpa-foreign-companies"
  | "/cpa-herzliya"
  | "/cpa-international";

type ServiceItem = {
  to: ServiceRoute;
  label: string;
  desc: string;
  icon: typeof Building2;
};

const SERVICE_GROUPS: { label: string; items: ServiceItem[] }[] = [
  {
    label: "שירותי ליבה",
    items: [
      {
        to: "/bookkeeping",
        label: "הנהלת חשבונות",
        desc: "Priority · ריווחית · QuickBooks",
        icon: Calculator,
      },
      {
        to: "/payroll",
        label: "שכר ותלושים",
        desc: "102, 106, אופציות לעובדים",
        icon: ReceiptText,
      },
      {
        to: "/audit",
        label: "ביקורת דוחות",
        desc: "Israeli GAAP · IFRS",
        icon: FileSearch,
      },
      {
        to: "/tax-consulting",
        label: "ייעוץ מס",
        desc: "תכנון, Pre-Ruling, השגות",
        icon: FileSpreadsheet,
      },
    ],
  },
  {
    label: "לפי סוג לקוח",
    items: [
      {
        to: "/cpa-startups",
        label: "סטארטאפים והייטק",
        desc: "גיוסי הון, 102, Flip",
        icon: Building2,
      },
      {
        to: "/cpa-freelancers",
        label: "עצמאים ופרילנסרים",
        desc: "פתיחת תיקים, דוח שנתי, הצהרת הון",
        icon: Briefcase,
      },
      {
        to: "/cpa-foreign-companies",
        label: "חברות זרות בישראל",
        desc: "הקמת חברה בת, סניף, TP",
        icon: Globe2,
      },
      {
        to: "/cpa-herzliya",
        label: "עסקים בהרצליה",
        desc: "משרד בוטיק בהרצליה פיתוח",
        icon: MapPin,
      },
    ],
  },
  {
    label: "מס בינלאומי",
    items: [
      {
        to: "/cpa-international",
        label: "רילוקיישן ותושבים חוזרים",
        desc: "ניתוק תושבות, הטבות עולים, אמנות מס",
        icon: Plane,
      },
    ],
  },
];

const ALL_SERVICES: ServiceItem[] = SERVICE_GROUPS.flatMap((g) => g.items);

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const enHref = toEnglishPath(pathname);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
      >
        דלג לתוכן העיקרי
      </a>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex min-w-0 flex-col leading-tight">
          <span className="truncate font-display text-lg font-bold text-primary sm:text-xl">
            נמרודי ושות׳
          </span>
          <span className="hidden text-[11px] text-muted-foreground sm:block sm:text-xs">
            רואי חשבון · הרצליה פיתוח
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="ניווט ראשי"
          className="hidden items-center gap-1 text-sm font-medium text-foreground/80 lg:flex"
        >
          <Link
            to="/"
            className="rounded-md px-3 py-2 hover:text-primary"
            activeProps={{ className: "rounded-md px-3 py-2 text-primary" }}
            activeOptions={{ exact: true }}
          >
            בית
          </Link>

          {/* Services mega-menu (hover) */}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 hover:text-primary"
            >
              שירותים
              <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" aria-hidden />
            </button>

            <div className="pointer-events-none invisible absolute right-0 top-full z-50 w-[720px] translate-y-1 pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-6 rounded-xl border border-border bg-card p-6 shadow-2xl">
                {SERVICE_GROUPS.map((group) => (
                  <div key={group.label}>
                    <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gold">
                      {group.label}
                    </div>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            className="group/link flex items-start gap-3 rounded-lg p-2 transition hover:bg-secondary"
                          >
                            <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-secondary text-primary group-hover/link:bg-gold/20 group-hover/link:text-gold">
                              <item.icon className="h-4 w-4" aria-hidden />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-primary">{item.label}</div>
                              <div className="truncate text-xs text-muted-foreground">{item.desc}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-3 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">
                    כל השירותים תחת קורת גג אחת
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-primary hover:text-gold"
                  >
                    לעמוד השירותים המלא ←
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {MAIN_LINKS.filter((l) => l.to !== "/" && l.to !== "/services").map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 hover:text-primary"
              activeProps={{ className: "rounded-md px-3 py-2 text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={enHref}
            className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-primary hover:bg-secondary"
            aria-label="English version"
            hrefLang="en"
          >
            EN
          </a>
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-secondary md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-1.5 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-gold-foreground shadow-sm transition hover:brightness-95 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            ייעוץ ראשוני
          </a>

          {/* Mobile menu toggle */}
          <MobileMenu enHref={enHref} />
        </div>
      </div>
      </header>
    </>
  );
}

function MobileMenu({ enHref }: { enHref: string }) {
  return (
    <details className="group relative lg:hidden">
      <summary
        aria-label="פתח תפריט"
        className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md border border-border bg-card text-primary [&::-webkit-details-marker]:hidden"
      >
        <Menu className="h-5 w-5 group-open:hidden" aria-hidden />
        <span className="hidden text-lg font-bold group-open:block" aria-hidden>
          ×
        </span>
      </summary>

      <div className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background shadow-xl">
        <div className="px-4 py-4 sm:px-6">
          {/* Primary links */}
          <ul className="space-y-1">
            {MAIN_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
                  activeProps={{
                    className:
                      "block rounded-md bg-secondary px-3 py-2.5 text-base font-semibold text-primary",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Services groups */}
          <div className="mt-5 border-t border-border pt-4">
            {SERVICE_GROUPS.map((group) => (
              <div key={group.label} className="mb-4">
                <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  {group.label}
                </div>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-secondary"
                      >
                        <item.icon className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                        <span className="text-foreground">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
            <a
              href={enHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2.5 text-sm font-semibold text-primary"
              aria-label="English version"
              hrefLang="en"
            >
              EN / English
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-3 py-2.5 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden />
              התקשרו
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-3 py-2.5 text-sm font-semibold text-gold-foreground"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              וואטסאפ
            </a>
          </div>
        </div>
      </div>
    </details>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="font-display text-xl font-bold">נמרודי ושות׳</div>
          <p className="mt-2 text-sm text-primary-foreground/70">
            משרד רואי חשבון בוטיק בהרצליה פיתוח. מעל 25 שנות ניסיון בליווי חברות,
            סטארטאפים, עצמאים ופרילנסרים.
          </p>
          <address className="mt-4 space-y-1 text-sm not-italic text-primary-foreground/80">
            <div>
              <a href={PHONE_TEL} className="hover:text-gold">טלפון: {PHONE_DISPLAY}</a>
            </div>
            <div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hover:text-gold">
                וואטסאפ: {WHATSAPP_DISPLAY}
              </a>
            </div>
            <div>
              <a href={`mailto:${EMAIL}`} className="hover:text-gold">{EMAIL}</a>
            </div>
            <div>
              <a href={MAPS_URL} target="_blank" rel="noopener" className="hover:text-gold">
                {ADDRESS_HE}
              </a>
            </div>
          </address>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            ניווט
          </div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {MAIN_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
            <li><Link to="/accessibility" className="hover:text-gold">הצהרת נגישות</Link></li>
          </ul>
        </div>

        {SERVICE_GROUPS.slice(0, 2).map((group) => (
          <div key={group.label}>
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
              {group.label}
            </div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {group.items.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold">{l.label}</Link>
                </li>
              ))}
              {group.label === "לפי סוג לקוח" &&
                SERVICE_GROUPS[2].items.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:text-gold">{l.label}</Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} נמרודי ושות׳ – רואי חשבון. כל הזכויות שמורות.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="פנייה בוואטסאפ"
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}

/** Inline sub-nav to related services – for use inside pages */
export function RelatedServicesNav({ currentPath }: { currentPath?: string }) {
  const items = ALL_SERVICES.filter((l) => l.to !== currentPath);
  return (
    <section
      aria-label="שירותים נוספים"
      className="border-t border-border/60 bg-secondary/30 py-14"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">
            המשך קריאה
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
            שירותים נוספים במשרד
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            כל תחומי ההתמחות של נמרודי ושות׳ – רואי חשבון בהרצליה פיתוח.
          </p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                  <l.icon className="h-4 w-4" aria-hidden />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-primary">{l.label}</div>
                  <div className="mt-0.5 truncate text-xs text-muted-foreground">{l.desc}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { WHATSAPP_URL, SERVICE_GROUPS, ALL_SERVICES };
