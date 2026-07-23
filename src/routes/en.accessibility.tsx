import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";

const BASE = "https://cpa-test-1.lovable.app";

export const Route = createFileRoute("/en/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — Nimrodi & Co. CPA" },
      { name: "description", content: "Accessibility statement for the Nimrodi & Co. website — WCAG 2.1 AA compliance, physical office accessibility details, and contact information." },
      { property: "og:title", content: "Accessibility Statement — Nimrodi & Co. CPA" },
      { property: "og:url", content: `${BASE}/en/accessibility` },
      { property: "og:image", content: `${BASE}/og-image.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: `${BASE}/og-image.webp` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/accessibility` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/accessibility` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/accessibility` },
    ],
  }),
  component: AccessibilityEn,
});

function AccessibilityEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />

      <main id="main-content">
        <section className="border-b border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">
              Accessibility Statement
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: July 2026
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl space-y-8 px-4 text-muted-foreground leading-relaxed sm:px-6">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">
                1. Commitment to Accessibility
              </h2>
              <p>
                Nimrodi & Co. Certified Public Accountants regards accessibility as a core moral and professional value. The firm is committed to making its website and services accessible to the general public, including people with disabilities, in accordance with the Israeli Equal Rights for Persons with Disabilities Law, 5758-1998, and the Service Accessibility Regulations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">
                2. Website Accessibility (Digital Accessibility)
              </h2>
              <p>
                This website was made accessible in accordance with Israeli Standard 5568 for internet content accessibility at Level AA, and with the W3C WCAG 2.1 guidelines.
              </p>
              <ul className="list-disc space-y-2 ps-6">
                <li><strong>Keyboard navigation:</strong> Full support for keyboard navigation (Tab, Shift+Tab, Enter).</li>
                <li><strong>Screen reader compatibility:</strong> The site is built with semantic structure and ARIA attributes suitable for assistive technologies.</li>
                <li><strong>Design and text:</strong> Standard color contrast, ability to enlarge text without breaking site structure, and alternative text (Alt) for images and visual components.</li>
                <li><strong>Responsiveness:</strong> Fully adapted for browsing on a variety of screens, mobile devices, and tablets.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">
                3. Physical Office Accessibility Arrangements
              </h2>
              <p>
                The office is located at 16 Galgalei HaPlada Street, Herzliya Pituach. Below is a detailed list of accessibility arrangements in the building:
              </p>
              <ul className="list-disc space-y-2 ps-6">
                <li><strong>Disabled parking:</strong> Designated disabled parking spaces are available in the building parking lot and nearby.</li>
                <li><strong>Building and office access:</strong> An accessible route runs continuously from parking through the building entrance and lobby, up to the firm offices via accessible elevators.</li>
                <li><strong>Accessible restrooms:</strong> Accessible and approved disabled restrooms are available in the building.</li>
                <li><strong>Service animals:</strong> Guide dogs and service animals are welcome.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">
                4. Accessibility Coordinator, Inquiries, and Suggestions for Improvement
              </h2>
              <p>
                We continue our efforts to improve the accessibility of the website and the office service. If you encountered an inaccessible element, experienced difficulty browsing the site, or would like to request special accessibility arrangements before a meeting at our office, we will be happy to assist:
              </p>
              <div className="rounded-lg border border-border/60 bg-secondary/30 p-6 space-y-3">
                <p><strong>Accessibility Coordinator:</strong> Nimrodi & Co. Accessibility Team</p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+97299582211" className="text-primary hover:text-gold hover:underline">
                    +972-9-9582211
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a href="https://wa.me/972546688681" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold hover:underline">
                    +972-54-668-8681
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:office@nimrodi.co.il" className="text-primary hover:text-gold hover:underline">
                    office@nimrodi.co.il
                  </a>
                </p>
              </div>
              <p>
                Every inquiry is handled seriously and as quickly as possible in order to provide the best response.
              </p>
            </div>

            <p className="pt-4 text-sm text-muted-foreground/80">
              This statement was last updated in July 2026.
            </p>
          </div>
        </section>
      </main>

      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
