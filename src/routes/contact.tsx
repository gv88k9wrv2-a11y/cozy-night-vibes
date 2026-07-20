import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/contact-office.jpg";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "../components/site-chrome";
import { LeadForm } from "../components/lead-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "צור קשר | נמרודי ושות׳ – רואי חשבון בהרצליה פיתוח" },
      {
        name: "description",
        content:
          "יצירת קשר עם משרד רואי חשבון נמרודי ושות׳ – גלגלי הפלדה 16, הרצליה פיתוח. טלפון 09-9582211, וואטסאפ 054-6688681, דוא״ל office@nimrodi.co.il. פגישת ייעוץ ראשונית ללא התחייבות.",
      },
      { property: "og:title", content: "צור קשר – נמרודי ושות׳ רואי חשבון" },
      {
        property: "og:description",
        content:
          "טלפון, וואטסאפ ופרטי הגעה למשרד רואי חשבון נמרודי ושות׳ בהרצליה פיתוח.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/contact" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/contact" },
      { rel: "alternate", hrefLang: "en-US", href: "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app/en/contact" }
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
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
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <img src={heroImg} alt="קבלת אורחים במשרד רואי חשבון נמרודי ושות׳" width={1024} height={1024} loading="lazy" className="h-64 w-full object-cover sm:h-80" />
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-4">
            <ContactCard
              icon={Phone}
              title="טלפון"
              value="09-9582211"
              href="tel:099582211"
            />
            <ContactCard
              icon={MessageCircle}
              title="וואטסאפ"
              value="054-6688681"
              href={WHATSAPP_URL}
              accent
            />
            <ContactCard
              icon={Mail}
              title="דוא״ל"
              value="office@nimrodi.co.il"
              href="mailto:office@nimrodi.co.il"
            />
            <ContactCard
              icon={MapPin}
              title="כתובת המשרד"
              value="גלגלי הפלדה 16, הרצליה פיתוח"
              href="https://www.google.com/maps/search/?api=1&query=גלגלי+הפלדה+16+הרצליה+פיתוח"
            />
            <ContactCard
              icon={Clock}
              title="שעות פעילות"
              value="ימים א׳–ה׳ · 09:00–18:00"
            />
          </div>
        </div>
      </section>

      <LeadForm lang="he" />

      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
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
