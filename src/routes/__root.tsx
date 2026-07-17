import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" dir="rtl">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">הדף לא נמצא</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          הדף שחיפשת אינו קיים או שהוסר.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            חזרה לדף הבית
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
  image: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg",
  telephone: "+972-9-9582211",
  areaServed: ["הרצליה", "רמת השרון", "רעננה", "תל אביב", "ישראל"],
  address: {
    "@type": "PostalAddress",
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
      { title: "נמרודי ושות׳ – רואי חשבון בהרצליה | ליווי חברות, סטארטאפים ועצמאים" },
      { property: "og:title", content: "נמרודי ושות׳ – רואי חשבון בהרצליה | ליווי חברות, סטארטאפים ועצמאים" },
      { name: "twitter:title", content: "נמרודי ושות׳ – רואי חשבון בהרצליה | ליווי חברות, סטארטאפים ועצמאים" },
      { name: "description", content: "משרד רואי חשבון בוטיק בהרצליה פיתוח. מעל 25 שנות ניסיון בליווי חברות, סטארטאפים, עצמאים ופרילנסרים – ביקורת, דיווח, ייעוץ מס וגיוסי הון. פגישת ייעוץ ראשונה ללא התחייבות." },
      { property: "og:description", content: "משרד רואי חשבון בוטיק בהרצליה פיתוח. מעל 25 שנות ניסיון בליווי חברות, סטארטאפים, עצמאים ופרילנסרים – ביקורת, דיווח, ייעוץ מס וגיוסי הון. פגישת ייעוץ ראשונה ללא התחייבות." },
      { name: "twitter:description", content: "משרד רואי חשבון בוטיק בהרצליה פיתוח. מעל 25 שנות ניסיון בליווי חברות, סטארטאפים, עצמאים ופרילנסרים – ביקורת, דיווח, ייעוץ מס וגיוסי הון. פגישת ייעוץ ראשונה ללא התחייבות." },
      { property: "og:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg" },
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

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
