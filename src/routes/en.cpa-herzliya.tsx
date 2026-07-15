import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";
const FAQS = [
  { q: "Where is the office located?", a: "In the Herzliya Pituach business district — walking distance from the main tech campuses (Microsoft, Apple, Meta and Israel's leading startups)." },
  { q: "Do you serve clients outside Herzliya?", a: "Yes — we serve clients across Israel and abroad. But being local in Herzliya Pituach gives us deep familiarity with the tech, biotech and finance ecosystem here." },
  { q: "Can we meet in person?", a: "Absolutely. In-person meetings at our Herzliya Pituach office are always welcome, alongside video calls for flexibility." },
];

export const Route = createFileRoute("/en/cpa-herzliya")({
  head: () => ({
    meta: [
      { title: "CPA in Herzliya Pituach | Nimrodi & Co." },
      { name: "description", content: "Boutique CPA firm located in Herzliya Pituach — serving tech companies, startups, foreign entities and professionals in Israel's leading business district." },
      { property: "og:title", content: "CPA in Herzliya Pituach — Nimrodi & Co." },
      { property: "og:description", content: "Local boutique firm at the heart of Israel's tech corridor." },
      { property: "og:url", content: `${BASE}/en/cpa-herzliya` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/cpa-herzliya` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-herzliya` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-herzliya` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      icon={MapPin}
      eyebrow="Herzliya Pituach"
      title="Boutique CPA firm in the heart of Herzliya Pituach"
      intro="Our office is located in Herzliya Pituach, at the center of Israel's premier business and technology district. We serve local tech companies, startups, foreign R&D centers, professionals and successful families in the Sharon region."
      highlights={[
        "Located in Herzliya Pituach business district",
        "Deep familiarity with local tech ecosystem",
        "In-person and video meetings",
        "Partners with 25+ years of experience",
        "Bilingual practice (Hebrew and English)",
      ]}
      sections={[
        {
          title: "Why local matters",
          body: "Herzliya Pituach is home to Microsoft, Apple, Meta and many of Israel's most important startups and VC funds. Being physically here means we know the ecosystem, work with local counsel and can meet you and your team in person on short notice.",
        },
        {
          title: "Who we serve locally",
          body: "Tech companies (Israeli and foreign R&D centers), startups from seed to growth, professional services firms, private clients and family offices, and freelancers and independent professionals in the Sharon region.",
        },
      ]}
      faqs={FAQS}
    />
  ),
});
