import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/972545207207?text=%D7%A4%D7%A0%D7%99%D7%99%D7%94%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20-%20%D7%A0%D7%9E%D7%A8%D7%95%D7%93%D7%99%20%D7%95%D7%A9%D7%95%D7%AA";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-bold text-primary sm:text-xl">
            נמרודי ושות׳
          </span>
          <span className="text-[11px] text-muted-foreground sm:text-xs">
            רואי חשבון · הרצליה פיתוח
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/80 md:flex">
          <Link to="/" className="hover:text-primary" activeProps={{ className: "text-primary" }}>
            בית
          </Link>
          <Link to="/services" className="hover:text-primary" activeProps={{ className: "text-primary" }}>
            שירותים
          </Link>
          <Link to="/about" className="hover:text-primary" activeProps={{ className: "text-primary" }}>
            אודות
          </Link>
          <Link to="/team" className="hover:text-primary" activeProps={{ className: "text-primary" }}>
            הצוות
          </Link>
          <Link to="/blog" className="hover:text-primary" activeProps={{ className: "text-primary" }}>
            בלוג
          </Link>
          <Link to="/faq" className="hover:text-primary" activeProps={{ className: "text-primary" }}>
            שאלות ותשובות
          </Link>
          <Link to="/contact" className="hover:text-primary" activeProps={{ className: "text-primary" }}>
            צור קשר
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+97299582211"
            className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-secondary sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            09-9582211
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-gold-foreground shadow-sm transition hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            ייעוץ ראשוני
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div>
          <div className="font-display text-xl font-bold">נמרודי ושות׳</div>
          <p className="mt-2 text-sm text-primary-foreground/70">
            משרד רואי חשבון בוטיק בהרצליה פיתוח. מעל 25 שנות ניסיון בליווי חברות,
            סטארטאפים, עצמאים ופרילנסרים.
          </p>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            ניווט
          </div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-gold">דף הבית</Link></li>
            <li><Link to="/services" className="hover:text-gold">שירותים</Link></li>
            <li><Link to="/about" className="hover:text-gold">אודות</Link></li>
            <li><Link to="/team" className="hover:text-gold">הצוות</Link></li>
            <li><Link to="/blog" className="hover:text-gold">בלוג</Link></li>
            <li><Link to="/faq" className="hover:text-gold">שאלות ותשובות</Link></li>
            <li><Link to="/contact" className="hover:text-gold">צור קשר</Link></li>
            <li><Link to="/accessibility" className="hover:text-gold">הצהרת נגישות</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            שירותים מובילים
          </div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>ליווי חברות וסטארטאפים</li>
            <li>שירותים לעצמאים ופרילנסרים</li>
            <li>ייעוץ מס ישראלי ובינלאומי</li>
            <li>גיוסי הון וייעוץ פיננסי</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            יצירת קשר
          </div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href="tel:+97299582211" className="hover:text-gold">טלפון: 09-9582211</a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hover:text-gold">
                וואטסאפ: 054-5207207
              </a>
            </li>
            <li>הרצליה פיתוח, ישראל</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} נמרודי ושות׳ – רואי חשבון. כל הזכויות שמורות.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="פנייה בוואטסאפ"
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}

export { WHATSAPP_URL };
