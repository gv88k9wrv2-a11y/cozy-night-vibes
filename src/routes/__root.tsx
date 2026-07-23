import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

// Replace with your GA4 Measurement ID (e.g. "G-XXXXXXXXXX") to enable analytics.
const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX";
const GA_ENABLED = GA4_MEASUREMENT_ID.startsWith("G-") && !GA4_MEASUREMENT_ID.includes("XXXX");

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" dir="rtl">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-primary">עמוד זה אינו קיים</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          ייתכן שהקישור השתנה או שהעמוד הוסר. אפשר לחזור לדף הבית או לעבור לאחד משירותי הליבה שלנו.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            חזרה לדף הבית
          </Link>
          <Link
            to="/services"
            className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-input bg-background px-5 py-2 text-sm font-medium text-foreground hover:bg-accent"
          >
            לסקירת השירותים
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" dir="rtl">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          הדף לא נטען
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          משהו השתבש. אפשר לרענן או לחזור לדף הבית.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            נסה שוב
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            לדף הבית
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "נמרודי ושות׳ – רואי חשבון",
  alternateName: "Shlomo Nimrodi & Co. CPA",
  description:
    "משרד רואי חשבון בוטיק בהרצליה פיתוח. למעלה מ־25 שנות ניסיון בליווי חברות, סטארטאפים, עצמאים ופרילנסרים – ביקורת, דיווח, ייעוץ מס וגיוסי הון.",
  url: "https://www.nimrodi.co.il",
  image: "https://cpa-test-1.lovable.app/og-image.webp",
  telephone: "+972-9-9582211",
  email: "office@nimrodi.co.il",
  areaServed: ["הרצליה", "רמת השרון", "רעננה", "תל אביב", "ישראל"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "גלגלי הפלדה 16",
    addressLocality: "הרצליה פיתוח",
    addressCountry: "IL",
  },
  founder: { "@type": "Person", name: "שלמה נמרודי" },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:30",
      closes: "18:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+972-54-6688681",
      contactType: "customer service",
      availableLanguage: ["he", "en"],
    },
  ],
  sameAs: ["https://maps.app.goo.gl/jxWz9287qp3QRVFg8"],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "נמרודי ושות׳ – רואי חשבון",
  url: "https://www.nimrodi.co.il",
  inLanguage: "he-IL",
  publisher: { "@type": "Organization", name: "נמרודי ושות׳ – רואי חשבון" },
};

const DEFAULT_ORIGIN = "https://cpa-test-1.lovable.app";
const ACCOUNTING_SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "נמרודי ושות' - משרד רואי חשבון",
  image: `${DEFAULT_ORIGIN}/og-image.jpg`,
  "@id": `${DEFAULT_ORIGIN}/#website`,
  url: DEFAULT_ORIGIN,
  telephone: "+972-9-9582211",
  email: "office@nimrodi.co.il",
  address: {
    "@type": "PostalAddress",
    streetAddress: "גלגלי הפלדה 16",
    addressLocality: "הרצליה פיתוח",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.1624,
    longitude: 34.8085,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:30",
    closes: "17:00",
  },
  priceRange: "Premium Boutique Advisory",
  description:
    "משרד רואי חשבון בוטיק בהרצליה פיתוח. מתמחים בביקורת דוחות כספיים, תכנוני מס מתקדמים, ליווי פיננסי מעמיק ושירותי CFO חיצוניים לסטארטאפים, פרילנסרים, חברות הייטק ובעלי התמחות מיוחדת במתן מעטפת פיננסית וחשבונאית מלאה לחברות זרות בישראל.",
};


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1a2545" },
      { name: "author", content: "נמרודי ושות׳ – רואי חשבון" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "נמרודי ושות׳ – רואי חשבון" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "נמרודי ושות׳ – משרד רואי חשבון בהרצליה פיתוח לסטארטאפים וחברות זרות" },
      { property: "og:title", content: "נמרודי ושות׳ – משרד רואי חשבון בהרצליה פיתוח לסטארטאפים וחברות זרות" },
      { name: "twitter:title", content: "נמרודי ושות׳ – משרד רואי חשבון בהרצליה פיתוח לסטארטאפים וחברות זרות" },
      { name: "description", content: "משרד רואי חשבון בוטיק בהרצליה פיתוח. מתמחים במיסוי סטארטאפים, חברות זרות, ניהול כספים CFO, ציות מס קריפטו מורכב וגילוי מרצון." },
      { property: "og:description", content: "משרד רואי חשבון בוטיק בהרצליה פיתוח. מתמחים במיסוי סטארטאפים, חברות זרות, ניהול כספים CFO, ציות מס קריפטו מורכב וגילוי מרצון." },
      { name: "twitter:description", content: "משרד רואי חשבון בוטיק בהרצליה פיתוח. מתמחים במיסוי סטארטאפים, חברות זרות, ניהול כספים CFO, ציות מס קריפטו מורכב וגילוי מרצון." },
      { property: "og:image", content: "https://cpa-test-1.lovable.app/og-image.webp" },
      { name: "twitter:image", content: "https://cpa-test-1.lovable.app/og-image.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&family=Frank+Ruhl+Libre:wght@500;700;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(WEBSITE_JSONLD),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(ACCOUNTING_SERVICE_JSONLD),
      },

      ...(GA_ENABLED

        ? [
            {
              src: `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`,
              async: true,
            },
            {
              children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA4_MEASUREMENT_ID}',{send_page_view:false});`,
            },
          ]
        : []),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const origin = window.location.origin;
    if (origin === DEFAULT_ORIGIN) return;
    document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]').forEach((el) => {
      if (!el.textContent?.includes("AccountingService")) return;
      try {
        const data = JSON.parse(el.textContent) as Record<string, unknown>;
        if (data["@type"] !== "AccountingService") return;
        data.url = origin;
        data["@id"] = `${origin}/#website`;
        data.image = `${origin}/og-image.jpg`;
        el.textContent = JSON.stringify(data);
      } catch {
        /* ignore */
      }
    });
  }, []);

  useEffect(() => {

    if (!GA_ENABLED || typeof window === "undefined") return;
    const w = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
    const page_path = window.location.pathname + window.location.search;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "page_view", page_path, page_title: document.title });
    w.gtag?.("event", "page_view", {
      page_path,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
