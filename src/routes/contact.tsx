import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "../components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "צור קשר | נמרודי ושות׳ – רואי חשבון בהרצליה פיתוח" },
      {
        name: "description",
        content:
          "יצירת קשר עם משרד רואי חשבון נמרודי ושות׳ בהרצליה פיתוח. טלפון 09-9582211, וואטסאפ 054-5207207. פגישת ייעוץ ראשונית ללא התחייבות.",
      },
      { property: "og:title", content: "צור קשר – נמרודי ושות׳ רואי חשבון" },
      {
        property: "og:description",
        content:
          "טלפון, וואטסאפ ופרטי הגעה למשרד רואי חשבון נמרודי ושות׳ בהרצליה פיתוח.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">
            צור קשר
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            בואו נדבר
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            ניתן ליצור קשר בטלפון, בוואטסאפ, במייל או במילוי הטופס למטה – ונחזור אליכם
            בהקדם.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <ContactCard
              icon={Phone}
              title="טלפון"
              value="09-9582211"
              href="tel:+97299582211"
            />
            <ContactCard
              icon={MessageCircle}
              title="וואטסאפ"
              value="054-5207207"
              href={WHATSAPP_URL}
              accent
            />
            <ContactCard
              icon={MapPin}
              title="כתובת המשרד"
              value="הרצליה פיתוח, ישראל"
              href="https://maps.app.goo.gl/jxWz9287qp3QRVFg8"
            />
            <ContactCard
              icon={Clock}
              title="שעות פעילות"
              value="ימים א׳–ה׳ · 09:00–18:00"
            />
          </div>

          <form
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-3"
            action={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = String(data.get("name") || "");
              const phone = String(data.get("phone") || "");
              const message = String(data.get("message") || "");
              const text = `פנייה מהאתר\nשם: ${name}\nטלפון: ${phone}\nהודעה: ${message}`;
              window.open(
                `https://wa.me/972545207207?text=${encodeURIComponent(text)}`,
                "_blank",
                "noopener",
              );
            }}
          >
            <h2 className="font-display text-2xl font-bold text-primary">שליחת פנייה</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              מלאו פרטים ונשלח את ההודעה ישירות אלינו בוואטסאפ.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field name="name" label="שם מלא" required />
              <Field name="phone" label="טלפון" type="tel" required />
            </div>
            <Field name="email" label="אימייל (רשות)" type="email" className="mt-4" />

            <label className="mt-4 block">
              <span className="text-sm font-medium text-foreground">איך נוכל לעזור?</span>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                placeholder="ספרו לנו מעט על העסק והצרכים שלכם"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground transition hover:brightness-95"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              שליחה בוואטסאפ
            </button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              <Mail className="mb-0.5 inline h-3.5 w-3.5" aria-hidden /> לחילופין, ניתן להתקשר
              ישירות ל־09-9582211.
            </p>
          </form>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  className = "",
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </label>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  accent,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <div
      className={`flex items-center gap-4 rounded-xl border p-5 transition ${
        accent
          ? "border-gold/40 bg-gold/10 hover:bg-gold/15"
          : "border-border bg-card hover:border-gold/40"
      }`}
    >
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div>
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="mt-0.5 font-display text-lg font-semibold text-primary">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
      {inner}
    </a>
  ) : (
    inner
  );
}
