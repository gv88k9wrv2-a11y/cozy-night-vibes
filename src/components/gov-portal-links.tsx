import { Building2, ExternalLink, ShieldCheck } from "lucide-react";

export type GovPortalLink = {
  label: string;
  href: string;
};

export type GovPortalLinksProps = {
  title: string;
  links: GovPortalLink[];
  lang?: "he" | "en";
};

export function GovPortalLinks({ title, links, lang = "he" }: GovPortalLinksProps) {
  const isHe = lang === "he";
  const subtitle = isHe
    ? "פורטלים רשמיים של רשויות מדינת ישראל – למידע ולביצוע פעולות ישירות."
    : "Official portals of the State of Israel — for information and direct actions.";
  const badge = isHe ? "מקורות רשמיים" : "Official Sources";
  const externalLabel = isHe ? "פתיחה בכרטיסייה חדשה" : "Opens in a new tab";

  return (
    <section aria-labelledby="gov-portal-heading" className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6" dir={isHe ? "rtl" : "ltr"}>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
                {badge}
              </div>
              <h2
                id="gov-portal-heading"
                className="mt-2 font-display text-xl font-bold text-primary sm:text-2xl"
              >
                {title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-lg border border-border bg-background p-3 text-sm transition hover:border-gold/60 hover:bg-secondary/40"
                >
                  <Building2
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary/70 group-hover:text-gold"
                    aria-hidden
                  />
                  <span className="flex-1 text-foreground group-hover:text-primary">
                    {l.label}
                  </span>
                  <ExternalLink
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-gold"
                    aria-label={externalLabel}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
