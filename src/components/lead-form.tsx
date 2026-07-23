import { useState } from "react";
import { CheckCircle2, Loader2, Mail, MessageCircle, Send, ShieldCheck } from "lucide-react";

type Lang = "he" | "en";

const RECIPIENT = "oren@nimrodi.co.il";
const WHATSAPP_NUMBER = "972546688681";

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
    phonePh: "לדוגמה: 050-1234567 או ‎+1 415 555 0100",
    message: "כיצד נוכל לסייע לך?",
    messagePh: "ספרו לנו בקצרה על הצורך – מס, ביקורת, CFO, בינלאומי וכו׳.",
    submit: "שליחת פנייה במייל",
    sending: "מכין את הפנייה…",
    whatsapp: "מעדיפים וואטסאפ? שליחה מיידית בצ׳אט",
    privacy: "פנייתכם חסויה ולא תועבר לצד ג׳. תגובה תוך יום עסקים.",
    required: "*",
    successTitle: "פנייתך מוכנה לשליחה",
    successText:
      "נפתחה עבורך אפליקציית הדוא״ל עם הפרטים לשליחה ל-oren@nimrodi.co.il. אם היא לא נפתחה, ניתן לפנות אלינו בוואטסאפ.",
    successCta: "לשליחת פנייה נוספת",
    successWhats: "המשך בוואטסאפ",
    errors: {
      name: "אנא הזינו שם מלא (לפחות 2 תווים).",
      email: "כתובת אימייל אינה תקינה – ודאו שהיא כוללת @ ודומיין חוקי.",
      phone:
        "מספר טלפון אינו תקין. הזינו מספר מקומי (למשל 050-1234567) או בינלאומי החל ב-+.",
      message: "אנא פרטו בקצרה במה נוכל לסייע (לפחות 10 תווים).",
    },
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
    phonePh: "e.g. +1 415 555 0100 or 050-1234567",
    message: "How can we assist your business?",
    messagePh:
      "Tell us briefly about your need – tax, audit, fractional CFO, cross-border, etc.",
    submit: "Send inquiry by email",
    sending: "Preparing your inquiry…",
    whatsapp: "Prefer WhatsApp? Chat with us instantly",
    privacy:
      "Your inquiry is confidential and never shared. We respond within one business day.",
    required: "*",
    successTitle: "Your inquiry is ready to send",
    successText:
      "Your email app just opened with the details pre-filled for oren@nimrodi.co.il. If it didn't open, reach us on WhatsApp instead.",
    successCta: "Send another inquiry",
    successWhats: "Continue on WhatsApp",
    errors: {
      name: "Please enter your full name (at least 2 characters).",
      email: "Please enter a valid email address including @ and a valid domain.",
      phone:
        "Invalid phone number. Enter a local number (e.g. 050-1234567) or international starting with +.",
      message: "Please tell us briefly how we can help (at least 10 characters).",
    },
  },
} as const;

type FormState = { name: string; company: string; email: string; phone: string; message: string };
type FieldErrors = Partial<Record<keyof FormState, string>>;

// Strict email regex – requires local, @, domain with TLD >= 2
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

function isValidPhone(raw: string): boolean {
  const trimmed = raw.trim();
  if (!trimmed) return false;
  // International: starts with + followed by 8–15 digits (E.164-ish, tolerant of separators)
  if (trimmed.startsWith("+")) {
    const digits = trimmed.slice(1).replace(/\D/g, "");
    return digits.length >= 8 && digits.length <= 15;
  }
  // Local: only digits/separators; must contain 9–11 digits (covers IL 09/10 digits & most locales)
  if (!/^[\d\s().-]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 11;
}

function validate(form: FormState, t: (typeof COPY)[Lang]): FieldErrors {
  const errors: FieldErrors = {};
  if (form.name.trim().length < 2) errors.name = t.errors.name;
  if (!EMAIL_RE.test(form.email.trim())) errors.email = t.errors.email;
  if (!isValidPhone(form.phone)) errors.phone = t.errors.phone;
  if (form.message.trim().length < 10) errors.message = t.errors.message;
  return errors;
}

export function LeadForm({ lang = "he" }: { lang?: Lang }) {
  const t = COPY[lang];
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>(`https://wa.me/${WHATSAPP_NUMBER}`);
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const dir = lang === "he" ? "rtl" : "ltr";
  const align = lang === "he" ? "text-right" : "text-left";

  const buildBody = () =>
    lang === "he"
      ? `פנייה חדשה מהאתר\n\nשם: ${form.name}\nחברה: ${form.company || "—"}\nאימייל: ${form.email}\nטלפון: ${form.phone}\n\nהודעה:\n${form.message}\n`
      : `New inquiry from the website\n\nName: ${form.name}\nCompany: ${form.company || "—"}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}\n`;

  const buildSubject = () =>
    lang === "he"
      ? `פנייה חדשה מהאתר – ${form.name}`
      : `New website inquiry – ${form.name}`;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validate(form, t);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      const first = Object.keys(validation)[0];
      document.getElementById(`lf-${first}`)?.focus();
      return;
    }
    setSubmitting(true);

    // GA4 conversion event
    try {
      const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: "form_submission", form_id: "lead_form", language: lang });
      w.gtag?.("event", "form_submission", { form_id: "lead_form", language: lang });
    } catch {
      /* noop */
    }

    const subject = buildSubject();
    const body = buildBody();
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
    setLastWhatsAppUrl(wa);

    await new Promise((r) => setTimeout(r, 500));
    // Open the user's mail client to send to oren@nimrodi.co.il
    window.location.href = mailto;

    setSubmitting(false);
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setErrors({});
    setForm({ name: "", company: "", email: "", phone: "", message: "" });
    setLastWhatsAppUrl(`https://wa.me/${WHATSAPP_NUMBER}`);
  };

  return (
    <section
      id="lead"
      dir={dir}
      className="border-t border-border/60 bg-gradient-to-b from-background to-secondary/40 py-16"
      aria-labelledby="lead-title"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className={`mb-8 ${align}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            {t.eyebrow}
          </div>
          <h2 id="lead-title" className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.subtitle}</p>
        </div>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="rounded-2xl border border-gold/40 bg-card p-8 text-center shadow-sm animate-in fade-in zoom-in-95 duration-500"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
              <CheckCircle2 className="h-8 w-8" aria-hidden />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary">{t.successTitle}</h3>
            <p className="mt-3 text-muted-foreground">{t.successText}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={lastWhatsAppUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground hover:brightness-95"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {t.successWhats}
              </a>
              <button
                type="button"
                onClick={reset}
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent"
              >
                {t.successCta}
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8"
            aria-busy={submitting}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <LFField
                id="lf-name"
                label={t.name}
                required
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                autoComplete="name"
                error={errors.name}
              />
              <LFField
                id="lf-company"
                label={t.company}
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
                autoComplete="organization"
              />
              <LFField
                id="lf-email"
                label={t.email}
                type="email"
                required
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                autoComplete="email"
                inputMode="email"
                error={errors.email}
              />
              <LFField
                id="lf-phone"
                label={t.phone}
                type="tel"
                required
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                autoComplete="tel"
                inputMode="tel"
                placeholder={t.phonePh}
                dirAttr="ltr"
                error={errors.phone}
              />
            </div>

            <label htmlFor="lf-message" className="mt-4 block">
              <span className="text-sm font-medium text-foreground">
                {t.message} <span className="text-gold">{t.required}</span>
              </span>
              <textarea
                id="lf-message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.messagePh}
                maxLength={1000}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "lf-message-error" : undefined}
                className={`mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 ${
                  errors.message
                    ? "border-destructive focus:border-destructive focus:ring-destructive/30"
                    : "border-input focus:border-gold focus:ring-gold/30"
                }`}
              />
              {errors.message && (
                <p id="lf-message-error" className="mt-1 text-xs font-medium text-destructive">
                  {errors.message}
                </p>
              )}
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-sm transition hover:brightness-95 disabled:cursor-wait disabled:opacity-80"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  {t.sending}
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" aria-hidden />
                  {t.submit}
                </>
              )}
            </button>

            <div className="mt-5 flex flex-col items-center gap-2 border-t border-border/60 pt-5 text-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener"
                aria-label={t.whatsapp}
                className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-gold/15"
              >
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden />
                {t.whatsapp}
              </a>
              <p className="text-xs text-muted-foreground">{t.privacy}</p>
            </div>
            <Send className="hidden" aria-hidden />
          </form>
        )}
      </div>
    </section>
  );
}

function LFField({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  inputMode,
  placeholder,
  dirAttr,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "search" | "url" | "none" | "decimal";
  placeholder?: string;
  dirAttr?: "ltr" | "rtl";
  error?: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-foreground">
        {label} {required ? <span className="text-gold">*</span> : null}
      </span>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        dir={dirAttr}
        maxLength={200}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 ${
          error
            ? "border-destructive focus:border-destructive focus:ring-destructive/30"
            : "border-input focus:border-gold focus:ring-gold/30"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </label>
  );
}
