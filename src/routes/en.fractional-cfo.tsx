import { createFileRoute, Link } from "@tanstack/react-router";
import { LineChart } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-cfo.webp";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";

const FAQS = [
  {
    q: "What is a Fractional CFO and who is it for?",
    a: "A Fractional CFO is a senior Chief Financial Officer engaged on a part-time basis (one day per week, several days per month) instead of the cost of a full-time hire. It is the right model for Seed–Series B startups, foreign companies operating in Israel that need a senior local finance presence, and growth-stage businesses that do not yet justify a full-time CFO. You get the experience of hundreds of funding rounds and board meetings — at a fraction of the cost.",
  },
  {
    q: "How is a Fractional CFO different from a bookkeeper?",
    a: "Bookkeeping is the historical record of what already happened. A Fractional CFO looks forward: builds the financial model, manages cash and Runway, prepares investor decks, sits in the boardroom, runs the Data Room and represents the company in front of VCs. The two functions are complementary — we deliver both under one roof with a clean information handoff between them.",
  },
  {
    q: "How are Burn Rate and Runway calculated, and why does it matter?",
    a: "Burn Rate (gross/net) is monthly cash consumption. Runway is the number of months until cash runs out — basic formula: Cash Balance ÷ Net Burn. In practice the CFO builds scenarios (Base/Bull/Bear), factors in Deferred Revenue, debt facilities and credit lines, and identifies the Trigger Points that force a decision: cut, raise, or accelerate. Rule of thumb — start fundraising while at least 9–12 months of Runway remain.",
  },
  {
    q: "Do you actually attend investor pitches?",
    a: "Yes. We sit in VC meetings alongside the founders, answer complex financial questions, defend the model's assumptions and navigate the financial portion of the pitch. Support includes pre-meeting dry runs, coaching on financial terminology, and live response to investor challenges around Unit Economics, LTV/CAC, Rule of 40 and Gross Margin.",
  },
  {
    q: "What does a Data Room and Ongoing DD include?",
    a: "A professional Data Room includes: audited financial statements for two prior years, fully-diluted Cap Table on Carta/Pulley, founders' agreements with vesting, approved Section 102 (Equity & ESOP Incentive Plans) plan, key customer contracts, key employee agreements, Transfer Pricing policy, tax and VAT clearances, insurance policies and authority correspondence. Ongoing DD means the room is always current and ready — so when an offer arrives, you enter negotiations in days, not months.",
  },
  {
    q: "Which KPIs do you track for the Board?",
    a: "For SaaS: MRR/ARR, Net Revenue Retention, Gross Margin, CAC Payback, LTV/CAC, Magic Number, Rule of 40. For commerce: Contribution Margin, Repeat Rate, AOV, Inventory Turnover. Cross-sector: Cash Balance, Burn, Runway, Headcount and Budget-vs-Actual. We build a monthly Dashboard with variance analysis and recommended actions, delivered to the board and investors on a fixed cadence.",
  },
  {
    q: "How much does a Fractional CFO cost?",
    a: "Pricing is flexible and scope-dependent: fixed monthly Retainer (one day per week / two days per month), project-based (fundraise prep, DD readiness, model build), or a mix. Key advantage — you only pay for the senior layer, while the professional team beneath (bookkeeping, payroll, audit) operates at standard cost. Saves 60–75% versus a full-time CFO in Israel.",
  },
  {
    q: "When should a company move to a full-time CFO?",
    a: "Usually after Series B, when ARR crosses $10M, headcount is 50+, operations span multiple countries and the board includes institutional investors. We manage the transition: define the role, run the search, and continue to advise the incoming CFO as external consultants during the handover to preserve continuity.",
  },
];

export const Route = createFileRoute("/en/fractional-cfo")({
  head: () => ({
    meta: [
      { title: "Fractional CFO Services in Israel | Burn, Runway, Fundraising | Nimrodi & Co." },
      {
        name: "description",
        content:
          "Fractional CFO services: strategic finance, Burn Rate and Runway, investor-grade models, Board relations and M&A readiness. Book a consultation.",
      },
      { property: "og:title", content: "Fractional CFO — Nimrodi & Co." },
      {
        property: "og:description",
        content:
          "Elite outsourced CFO leadership for startups and foreign corporations operating in Israel — flexible, fractional, senior.",
      },
      { property: "og:url", content: `${BASE}/en/fractional-cfo` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/fractional-cfo` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/fractional-cfo` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/fractional-cfo` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Executive boardroom with financial dashboards — Fractional CFO services"
      icon={LineChart}
      eyebrow="Financial Management & CFO"
      title="Fractional CFO — strategic corporate finance for growth-stage companies"
      intro="Senior outsourced Chief Financial Officer leadership — at a fraction of the cost of a full-time hire. We support Israeli startups, foreign corporations operating in Israel and scaling businesses across budgeting and cash management, investor-grade financial models, Board relations, VC representation and continuous readiness for institutional Due Diligence."
      highlights={[
        "Annual budgeting and rigorous cash flow management",
        "Burn Rate & Runway — calculation, monitoring and scenarios",
        "3–5 year VC-grade financial model (Base / Bull / Bear)",
        "Investor & Board relations — decks, KPIs and pitch prep",
        "Live representation in VC and angel investor meetings",
        "Data Room management and continuous DD readiness",
        "Unit Economics and Rule of 40 optimization",
        "Debt facilities, Venture Debt and FX hedging",
        "M&A, exit and next-round preparation",
      ]}
      sections={[
        {
          title: "Strategic Corporate Finance",
          body: (
            <>
              We turn finance from a cost center into a growth engine. Disciplined budgeting, continuous variance tracking, and early detection of drift — with clear recommended actions for management and the board. This service pairs naturally with our <Link to="/en/cpa-startups" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">startup CPA practice</Link>, <Link to="/en/cpa-foreign-companies" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">foreign-company support in Israel</Link>, and <Link to="/en/audit" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">statutory audit and assurance</Link>.
            </>
          ),
          bullets: [
            "Annual budget build (Bottom-Up + Top-Down) with manager ownership",
            "Weekly / monthly / quarterly Cash Flow Forecast",
            "Monthly Actual-vs-Budget variance analysis with required actions",
            "SaaS, headcount and marketing spend optimization",
            "Break-Even analysis and path to profitability",
            "Working Capital and collections / payables cycle management",
          ],
        },
        {
          title: "Burn Rate & Runway — the company's lifeline",
          body:
            "Every startup lives and dies by its Runway. We manage Burn and Runway calculations like clockwork — and identify the moment to start the next raise, cut costs, or shift strategy while there is still room to maneuver:",
          bullets: [
            "Gross Burn vs Net Burn — precise monthly calculation",
            "Runway simulation across revenue, funding and event scenarios",
            "Cash Trigger Points — when a decision becomes mandatory",
            "Deferred Revenue and credit facility monitoring",
            "Fundraise timing: always start with 9–12 months of Runway",
            "Real-time dashboards for management and the Board",
          ],
        },
        {
          title: "Investor Relations & Board readiness",
          body:
            "A professional board meeting builds trust — an unprepared meeting erodes it. We build the materials package, prep founders for Q&A, and often sit in the meeting itself to support the financial presentation and reinforce financial credibility:",
          bullets: [
            "Monthly / quarterly Board Deck — consistent, professional structure",
            "Cross-sector KPI Dashboard: SaaS, E-Commerce, Marketplace",
            "3–5 year Financial Model in files a VC knows how to review",
            "Monthly Investor Update email — builds credibility and reputation",
            "Founder coaching before VC meetings",
            "Professional representation in Board meetings and committees (Audit, Comp)",
          ],
        },
        {
          title: "Financial model for fundraising",
          body:
            "Serious investors look first for a model that speaks their language: clear assumptions, modular revenue engines, and sensitivities they can play with. Our models are built to leading VC standards and pass DD without surprises:",
          bullets: [
            "Revenue engines: SaaS ARR, Transactional Revenue, Marketplace GMV",
            "Cohort Analysis and data-driven Retention Curves",
            "Unit Economics: CAC, LTV, Payback Period, Gross Margin",
            "Scenario Analysis: Base / Bull / Bear with adjustable assumptions",
            "Cap Table Waterfall for exit at any valuation",
            "Dilution Simulation for future funding rounds",
          ],
        },
        {
          title: "Continuous Due Diligence & M&A readiness",
          body:
            "Acquisition and funding opportunities arrive without warning. A ready company enters negotiations in days; an unready company loses multi-million-dollar deals. We manage the Data Room as an ongoing process, not an emergency project:",
          bullets: [
            "Data Room on DocSend / Digify / Google Drive with standard VC folder structure",
            "Quarterly refresh of all financial and legal documents",
            "Clean fully-diluted Cap Table — SAFEs, CLAs and Option Pool included",
            "Clean tax history — no open assessments or arrears",
            "Quality of Earnings (QoE) ahead of material transactions",
            "End-to-end DD process management with buyers and investors",
            "Coordination with counsel (Israel + abroad), auditors and appraisers",
          ],
        },
        {
          title: "Tailored flexibility for your stage",
          body:
            "One size does not fit all. We engage at the intensity your stage requires — from one day a week for a Seed startup to three days a week for a Series B company on the IPO path. Always with the same CFO lead, to preserve continuity and institutional memory:",
          bullets: [
            "Fixed monthly Retainer — predictable, transparent pricing",
            "Project-based: model build, Data Room prep, funding round support",
            "Interim CFO — bridging between outgoing and incoming CFO",
            "Saves 60–75% vs. a full-time CFO in Israel",
            "Access to an entire team: bookkeeping, payroll, audit and tax",
            "Smooth handover to a full-time CFO when the time comes",
          ],
        },
      ]}
      faqs={FAQS}
      ctaHeadline="Approaching the next raise or preparing for a board meeting? Let's talk."
    />
  ),
});
