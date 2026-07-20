import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/contact-office.jpg";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn, WHATSAPP_URL_EN } from "../components/site-chrome-en";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";

export const Route = createFileRoute("/en/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nimrodi & Co. CPA | Herzliya Pituach, Israel" },
      { name: "description", content: "Contact Nimrodi & Co. — boutique CPA firm in Herzliya Pituach. Free introductory consultation for companies, startups and individuals." },
      { property: "og:title", content: "Contact Nimrodi & Co." },
      { property: "og:description", content: "Free introductory consultation with our senior team." },
      { property: "og:url", content: `${BASE}/en/contact` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/contact` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/contact` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/contact` },
    ],
  }),
  component: ContactEn,
});

function ContactEn() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello, my name is ${name}${company ? ` from ${company}` : ""}. I'm interested in: ${service || "a consultation"}. ${message}`;
    window.open(`https://wa.me/972546688681?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">Get in touch</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Free introductory consultation. We usually respond within a business day.
            </p>
          </div>
        </section>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <img src={heroImg} alt="Nimrodi & Co. office reception" width={1024} height={1024} loading="lazy" className="h-64 w-full object-cover sm:h-80" />
          </div>
        </div>
      </section>


        <section className="py-16">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-gold" aria-hidden />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</div>
                    <a href="tel:+97299582211" className="mt-1 block text-lg font-semibold text-primary hover:text-gold">+972-9-9582211</a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 text-gold" aria-hidden />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                    <a href={WHATSAPP_URL_EN} target="_blank" rel="noopener" className="mt-1 block text-lg font-semibold text-primary hover:text-gold">+972-54-6688681</a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-gold" aria-hidden />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                    <a href="mailto:office@nimrodi.co.il" className="mt-1 block text-lg font-semibold text-primary hover:text-gold">office@nimrodi.co.il</a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-gold" aria-hidden />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Office</div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=16+Galgalei+ha-Plada+St+Herzliya+Pituach"
                      target="_blank"
                      rel="noopener"
                      className="mt-1 block text-primary hover:text-gold"
                    >
                      16 Galgalei ha-Plada St, Herzliya Pituach
                    </a>
                    <p className="mt-1 text-xs text-muted-foreground">Sun–Thu 08:30–18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-primary">Request a consultation</h2>
              <p className="mt-1 text-sm text-muted-foreground">Fill in the details — we'll follow up via WhatsApp.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">Full name *</label>
                  <input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground">Company (optional)</label>
                  <input id="company" value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground">Service of interest</label>
                  <select id="service" value={service} onChange={(e) => setService(e.target.value)} className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-gold focus:outline-none">
                    <option value="">-- Select --</option>
                    <option>Startup / tech company</option>
                    <option>Foreign company in Israel</option>
                    <option>Freelancer / self-employed</option>
                    <option>Tax planning / advisory</option>
                    <option>Audit</option>
                    <option>International tax / relocation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                  <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-gold focus:outline-none" />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 font-semibold text-gold-foreground hover:brightness-95">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
