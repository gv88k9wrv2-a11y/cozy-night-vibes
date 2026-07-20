import { useState } from "react";
import { MessageCircle, Send, ShieldCheck } from "lucide-react";

type Lang = "he" | "en";

const COPY = {
  he: {
    eyebrow: "פגישת ייעוץ דיסקרטית",
    title: "בואו נדבר בארבע עיניים",
    subtitle:
      "מלאו פרטים והפנייה תגיע ישירות לשותף בכיר. אנו מחויבים לסודיות מלאה.",
    name: "שם מלא",
    company: "שם החברה / הסטארט-אפ",
    email: "כתובת אימייל",
    phone: "מספר טלפון",
    message: "כיצד נוכל לסייע לך?",
    messagePh: "ספרו לנו בקצרה על הצורך – מס, ביקורת, CFO, בינלאומי וכו׳.",
    submit: "שליחת פנייה דיסקרטית לקביעת פגישה",
    whatsapp: "או שלחו לנו וואטסאפ ישיר",
    privacy: "פנייתכם חסויה ולא תועבר לצד ג׳. תגובה תוך יום עסקים.",
    required: "*",
    successTitle: "הפנייה התקבלה בהצלחה",
    successText:
      "תודה! נחזור אליכם תוך יום עסקים לתיאום פגישת ייעוץ ראשונית ללא התחייבות.",
  },
  en: {
    eyebrow: "Discrete Consultation",
    title: "Let's have a confidential conversation",
    subtitle:
      "Send us a note and a senior partner will reach out personally. Full discretion guaranteed.",
    name: "Full Name",
    company: "Company / Startup Name",
    email: "Business Email Address",
    phone: "Direct Phone Number",
    message: "How can we assist your business?",
    messagePh:
      "Tell us briefly about your need – tax, audit, fractional CFO, cross-border, etc.",
    submit: "Schedule a Discrete Consultation",
    whatsapp: "Or reach us directly on WhatsApp",
    privacy:
      "Your inquiry is confidential and never shared. We respond within one business day.",
    required: "*",
    successTitle: "Your inquiry was received",
    successText:
      "Thank you. A senior partner will reach out within one business day to schedule your consultation.",
  },
} as const;

export function LeadForm({ lang = "he" }: { lang?: Lang }) {
  const t = COPY[lang];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const waHref = "https://wa.me/972546688681";
  const dir = lang === "he" ? "rtl" : "ltr";
  const align = lang === "he" ? "text-right" : "text-left";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text =
      lang === "he"
        ? `פנייה דיסקרטית מהאתר\nשם: ${form.name}\nחברה: ${form.company}\nאימייל: ${form.email}\nטלפון: ${form.phone}\nהודעה: ${form.message}`
        : `Discrete inquiry from the website\nName: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(
      `https://wa.me/972546688681?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    setSubmitted(true);
  };

  return (
    <section
      id="lead"
      dir={dir}
      className="border-t border-border/60 bg-gradient-to-b from-background to-secondary/40 py-16"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className={`mb-8 ${align}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            {t.eyebrow}
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.subtitle}</p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-gold/40 bg-card p-8 text-center shadow-sm">
            <h3 className="font-display text-2xl font-bold text-primary">
              {t.successTitle}
            </h3>
            <p className="mt-3 text-muted-foreground">{t.successText}</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <LFField
                label={t.name}
                required
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                autoComplete="name"
              />
              <LFField
                label={t.company}
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
                autoComplete="organization"
              />
              <LFField
                label={t.email}
                type="email"
                required
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                autoComplete="email"
              />
              <LFField
                label={t.phone}
                type="tel"
                required
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                autoComplete="tel"
              />
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-medium text-foreground">
                {t.message} <span className="text-gold">{t.required}</span>
              </span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.messagePh}
                maxLength={1000}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-sm transition hover:brightness-95"
            >
              <Send className="h-4 w-4" aria-hidden />
              {t.submit}
            </button>

            <div className="mt-5 flex flex-col items-center gap-2 border-t border-border/60 pt-5 text-center">
              <a
                href={waHref}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {t.whatsapp}
              </a>
              <p className="text-xs text-muted-foreground">{t.privacy}</p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function LFField({
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">
        {label} {required ? <span className="text-gold">*</span> : null}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        maxLength={200}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </label>
  );
}
