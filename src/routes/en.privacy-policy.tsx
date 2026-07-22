import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";

export const Route = createFileRoute("/en/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Nimrodi & Co. CPA" },
      {
        name: "description",
        content:
          "Privacy policy of Nimrodi & Co. CPA: website inquiries are confidential, encrypted and never shared with third parties. Full professional secrecy.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Privacy Policy | Nimrodi & Co. CPA" },
      { property: "og:description", content: "Full confidentiality for prospective clients and inquiries." },
    ],
    links: [{ rel: "canonical", href: "/en/privacy-policy" }],
  }),
  component: PrivacyPageEn,
});

function PrivacyPageEn() {
  return (
    <>
      <SiteHeaderEn />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-primary">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">Absolute confidentiality</h2>
            <p className="mt-2">
              Nimrodi & Co. CPA ("the Firm") is bound by strict professional secrecy under the
              Israeli CPA ethics code and the Protection of Privacy Law, 5741-1981. All client and
              prospect information is treated with full discretion.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">Information we collect</h2>
            <p className="mt-2">
              Through the website's contact forms we collect only the details you choose to
              provide: name, company name, business email, direct phone number and message
              content. We do not collect financial or sensitive personal data through the site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">Use of information</h2>
            <p className="mt-2">
              Submitted details are used exclusively to respond and schedule a consultation. Your
              information is never sold, rented or transferred to any third party.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">Data security</h2>
            <p className="mt-2">
              The site operates over HTTPS. Sensitive information handled as part of a client
              engagement is stored on the Firm's secured systems in accordance with the Israel Tax
              Authority, the Institute of Certified Public Accountants in Israel and ISA
              requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">Your rights</h2>
            <p className="mt-2">
              You may request access, correction or deletion of any personal information we hold
              about you by writing to
              <a href="mailto:office@nimrodi.co.il" className="text-gold underline"> office@nimrodi.co.il</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">Contact</h2>
            <p className="mt-2">
              Nimrodi & Co. CPA · 16 Galgalei ha-Plada St, Herzliya Pituach · +972-9-9582211 ·
              <a href="mailto:office@nimrodi.co.il" className="text-gold underline"> office@nimrodi.co.il</a>
            </p>
          </section>
        </div>
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </>
  );
}
