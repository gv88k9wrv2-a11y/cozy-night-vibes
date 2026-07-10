import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/972545207207?text=%D7%A4%D7%A0%D7%99%D7%99%D7%94%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20-%20%D7%A0%D7%9E%D7%A8%D7%95%D7%93%D7%99%20%D7%95%D7%A9%D7%95%D7%AA";

const MAIN_LINKS = [
  { to: "/", label: "בית" },
  { to: "/services", label: "שירותים" },
  { to: "/about", label: "אודות" },
  { to: "/team", label: "הצוות" },
  { to: "/blog", label: "בלוג" },
  { to: "/faq", label: "שאלות ותשובות" },
  { to: "/contact", label: "צור קשר" },
] as const;

const SERVICE_LINKS = [
  { to: "/cpa-herzliya", label: "רו״ח בהרצליה" },
  { to: "/cpa-startups", label: "סטארטאפים" },
  { to: "/cpa-freelancers", label: "עצמאים ופרילנסרים" },
  { to: "/cpa-international", label: "מס בינלאומי ורילוקיישן" },
  { to: "/cpa-foreign-companies", label: "חברות זרות בישראל" },
  { to: "/tax-consulting", label: "ייעוץ מס" },
  { to: "/audit", label: "ביקורת דוחות" },
  { to: "/bookkeeping", label: "הנהלת חשבונות" },
  { to: "/payroll", label: "שכר ותלושים" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-bold text-primary sm:text-xl">
            נמרודי ושות׳
          </span>
          <span className="text-[11px] text-muted-foreground sm:text-xs">
            רואי חשבון · הרצליה פיתוח
          </span>
        </Link>

        <nav
          aria-label="ניווט ראשי"
          className="hidden items-center gap-6 text-sm font-medium text-foreground/80 md:flex"
        >
          {MAIN_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+97299582211"
            className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-secondary sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            09-9582211
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-gold-foreground shadow-sm transition hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            ייעוץ ראשוני
          </a>
        </div>
      </div>

      {/* Services sub-nav – visible on every page */}
      <div className="border-t border-border/40 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav
            aria-label="ניווט שירותים"
            className="scrollbar-none flex gap-1 overflow-x-auto py-2 text-xs sm:text-sm"
          >
            {SERVICE_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="shrink-0 rounded-full border border-transparent px-3 py-1.5 font-medium text-muted-foreground transition hover:border-gold/40 hover:bg-background hover:text-primary"
                activeProps={{
                  className:
                    "shrink-0 rounded-full border border-gold/50 bg-background px-3 py-1.5 font-semibold text-primary",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div>
          <div className="font-display text-xl font-bold">נמרודי ושות׳</div>
          <p className="mt-2 text-sm text-primary-foreground/70">
            משרד רואי חשבון בוטיק בהרצליה פיתוח. מעל 25 שנות ניסיון בליווי חברות,
            סטארטאפים, עצמאים ופרילנסרים.
          </p>
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
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            שירותים
          </div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {SERVICE_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            יצירת קשר
          </div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href="tel:+97299582211" className="hover:text-gold">טלפון: 09-9582211</a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hover:text-gold">
                וואטסאפ: 054-5207207
              </a>
            </li>
            <li>הרצליה פיתוח, ישראל</li>
          </ul>
        </div>
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
  const items = SERVICE_LINKS.filter((l) => l.to !== currentPath);
  return (
    <section
      aria-label="שירותים נוספים"
      className="border-t border-border/60 bg-secondary/30 py-10"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">
          שירותים נוספים במשרד
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          כל תחומי ההתמחות של נמרודי ושות׳ – רואי חשבון בהרצליה פיתוח.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {items.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition hover:border-gold hover:bg-gold/10"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { WHATSAPP_URL };
