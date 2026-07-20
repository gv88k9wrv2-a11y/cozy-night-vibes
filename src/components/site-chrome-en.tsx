import { Link } from "@tanstack/react-router";
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

export const WHATSAPP_URL_EN =
  "https://wa.me/972545207207?text=Hello%2C%20I%27d%20like%20a%20consultation%20from%20Nimrodi%20%26%20Co.";

const MAIN_LINKS = [
  { to: "/en", label: "Home" },
  { to: "/en/services", label: "Services" },
  { to: "/en/about", label: "About" },
  { to: "/en/team", label: "Team" },
  { to: "/blog", label: "Blog (Hebrew)" },
  { to: "/en/faq", label: "FAQ" },
  { to: "/en/contact", label: "Contact" },
] as const;

type ServiceRoute =
  | "/en/bookkeeping"
  | "/en/payroll"
  | "/en/audit"
  | "/en/tax-consulting"
  | "/en/cpa-startups"
  | "/en/cpa-freelancers"
  | "/en/cpa-foreign-companies"
  | "/en/cpa-herzliya"
  | "/en/cpa-international";

type ServiceItem = {
  to: ServiceRoute;
  label: string;
  desc: string;
  icon: typeof Building2;
};

export const SERVICE_GROUPS_EN: { label: string; items: ServiceItem[] }[] = [
  {
    label: "Core Services",
    items: [
      { to: "/en/bookkeeping", label: "Bookkeeping", desc: "Priority · Xero · QuickBooks", icon: Calculator },
      { to: "/en/payroll", label: "Payroll", desc: "Section 102, ESOP, form 106", icon: ReceiptText },
      { to: "/en/audit", label: "Audit & Assurance", desc: "Israeli GAAP · IFRS", icon: FileSearch },
      { to: "/en/tax-consulting", label: "Tax Advisory", desc: "Planning, Pre-Ruling, appeals", icon: FileSpreadsheet },
    ],
  },
  {
    label: "By Client Type",
    items: [
      { to: "/en/cpa-startups", label: "Startups & Tech", desc: "Fundraising, ESOP, Flip", icon: Building2 },
      { to: "/en/cpa-freelancers", label: "Freelancers & Self-Employed", desc: "Setup, filings, capital declaration", icon: Briefcase },
      { to: "/en/cpa-foreign-companies", label: "Foreign Companies in Israel", desc: "Subsidiary, branch, Transfer Pricing", icon: Globe2 },
      { to: "/en/cpa-herzliya", label: "Businesses in Herzliya", desc: "Boutique firm in Herzliya Pituach", icon: MapPin },
    ],
  },
  {
    label: "International Tax",
    items: [
      { to: "/en/cpa-international", label: "Relocation & Returning Residents", desc: "Residency, olim benefits, treaties", icon: Plane },
    ],
  },
];

export const ALL_SERVICES_EN: ServiceItem[] = SERVICE_GROUPS_EN.flatMap((g) => g.items);

export function SiteHeaderEn() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/en" className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-lg font-bold text-primary sm:text-xl">
              Nimrodi &amp; Co.
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block sm:text-xs">
              Certified Public Accountants · Herzliya Pituach
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 text-sm font-medium text-foreground/80 lg:flex">
            <Link to="/en" className="rounded-md px-3 py-2 hover:text-primary" activeProps={{ className: "rounded-md px-3 py-2 text-primary" }} activeOptions={{ exact: true }}>
              Home
            </Link>

            <div className="group relative">
              <button type="button" className="inline-flex items-center gap-1 rounded-md px-3 py-2 hover:text-primary">
                Services
                <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" aria-hidden />
              </button>
              <div className="pointer-events-none invisible absolute left-0 top-full z-50 w-[720px] translate-y-1 pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-3 gap-6 rounded-xl border border-border bg-card p-6 shadow-2xl">
                  {SERVICE_GROUPS_EN.map((group) => (
                    <div key={group.label}>
                      <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gold">
                        {group.label}
                      </div>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item.to}>
                            <Link to={item.to} className="group/link flex items-start gap-3 rounded-lg p-2 transition hover:bg-secondary">
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
                    <span className="text-xs text-muted-foreground">All services under one roof</span>
                    <Link to="/en/services" className="text-xs font-semibold text-primary hover:text-gold">
                      All services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {MAIN_LINKS.filter((l) => l.to !== "/en" && l.to !== "/en/services").map((l) => (
              <Link key={l.to} to={l.to} className="rounded-md px-3 py-2 hover:text-primary" activeProps={{ className: "rounded-md px-3 py-2 text-primary" }}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/"
              className="hidden items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-primary hover:bg-secondary sm:inline-flex"
              aria-label="Hebrew version"
            >
              עברית
            </Link>
            <a href="tel:+97299582211" className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-secondary md:inline-flex">
              <Phone className="h-4 w-4" aria-hidden />
              +972-9-9582211
            </a>
            <a
              href={WHATSAPP_URL_EN}
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-1.5 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-gold-foreground shadow-sm transition hover:brightness-95 sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Free consult
            </a>
            <MobileMenuEn />
          </div>
        </div>
      </header>
    </>
  );
}

function MobileMenuEn() {
  return (
    <details className="group relative lg:hidden">
      <summary aria-label="Open menu" className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md border border-border bg-card text-primary [&::-webkit-details-marker]:hidden">
        <Menu className="h-5 w-5 group-open:hidden" aria-hidden />
        <span className="hidden text-lg font-bold group-open:block" aria-hidden>×</span>
      </summary>
      <div className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background shadow-xl">
        <div className="px-4 py-4 sm:px-6">
          <ul className="space-y-1">
            {MAIN_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
                  activeProps={{ className: "block rounded-md bg-secondary px-3 py-2.5 text-base font-semibold text-primary" }}
                  activeOptions={{ exact: l.to === "/en" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-border pt-4">
            {SERVICE_GROUPS_EN.map((group) => (
              <div key={group.label} className="mb-4">
                <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  {group.label}
                </div>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-secondary">
                        <item.icon className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                        <span className="text-foreground">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4">
            <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2.5 text-sm font-semibold text-primary">
              עברית
            </Link>
            <a href={WHATSAPP_URL_EN} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-3 py-2.5 text-sm font-semibold text-gold-foreground">
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </details>
  );
}

export function SiteFooterEn() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="font-display text-xl font-bold">Nimrodi &amp; Co.</div>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Boutique CPA firm in Herzliya Pituach. Over 25 years of experience serving companies, startups, freelancers and foreign investors in Israel.
          </p>
          <div className="mt-4 space-y-1 text-sm text-primary-foreground/80">
            <div><a href="tel:+97299582211" className="hover:text-gold">Phone: +972-9-9582211</a></div>
            <div><a href={WHATSAPP_URL_EN} target="_blank" rel="noopener" className="hover:text-gold">WhatsApp: +972-54-5207207</a></div>
            <div>Herzliya Pituach, Israel</div>
          </div>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Navigation</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {MAIN_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-gold">{l.label}</Link></li>
            ))}
            <li><Link to="/en/accessibility" className="hover:text-gold">Accessibility</Link></li>
            <li><Link to="/" className="hover:text-gold">עברית / Hebrew</Link></li>
          </ul>
        </div>
        {SERVICE_GROUPS_EN.slice(0, 2).map((group) => (
          <div key={group.label}>
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">{group.label}</div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {group.items.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-gold">{l.label}</Link></li>
              ))}
              {group.label === "By Client Type" &&
                SERVICE_GROUPS_EN[2].items.map((l) => (
                  <li key={l.to}><Link to={l.to} className="hover:text-gold">{l.label}</Link></li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Nimrodi &amp; Co. — Certified Public Accountants. All rights reserved.
      </div>
    </footer>
  );
}

export function FloatingWhatsAppEn() {
  return (
    <a
      href={WHATSAPP_URL_EN}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}

export function RelatedServicesNavEn({ currentPath }: { currentPath?: string }) {
  const items = ALL_SERVICES_EN.filter((l) => l.to !== currentPath);
  return (
    <section aria-label="Related services" className="border-t border-border/60 bg-secondary/30 py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">Continue reading</div>
          <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">More services from Nimrodi &amp; Co.</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            All areas of expertise of our boutique CPA firm in Herzliya Pituach.
          </p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md">
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
