import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = { title: "Pricing — Nexus" };

const tiers = [
  {
    name: "Sprint",
    price: "$8,000+",
    desc: "A scoped feature or MVP slice, built in 2–4 weeks.",
    includes: ["1 engineer + shared design/QA", "Fixed scope & price", "Weekly working demos", "2 weeks of post-launch support"],
  },
  {
    name: "Build",
    price: "$25,000+",
    desc: "A full product v1, from first sketch to production launch.",
    includes: ["2–3 engineers, dedicated designer", "Fixed scope & price", "Weekly working demos", "30 days of post-launch support"],
    featured: true,
  },
  {
    name: "Partner",
    price: "custom",
    desc: "An ongoing team embedded with yours, billed monthly.",
    includes: ["Dedicated pod, sized to your roadmap", "Monthly retainer, cancel anytime", "Async standups & sprint planning", "Direct Slack access to the team"],
  },
];

const faqs = [
  { q: "How is a fixed price possible for custom software?", a: "We scope tightly before quoting — a short paid discovery phase for larger projects if the brief isn't firm yet. The estimating risk is ours, not yours." },
  { q: "Who owns the code?", a: "You do, from the first commit. Everything ships to a repository under your account." },
  { q: "What if scope changes mid-project?", a: "We log it as a change request with its own price and timeline impact, and you decide whether to include it — no surprise invoices." },
  { q: "Do you work with early-stage startups?", a: "Yes — the Sprint tier exists specifically for teams validating an idea before committing to a full build." },
  { q: "Where is the team based?", a: "Across four continents. Overlap hours are scheduled for every project; most collaboration happens async in writing." },
];

export default function Pricing() {
  return (
    <>
      <section className="site-page">
        <div className="site-card">
          <p className="site-kicker">pricing</p>
          <h1 className="site-title">One price. Set before we start.</h1>
          <p className="site-subtitle">
            Every engagement is quoted as a fixed scope and fixed price. Ranges below reflect typical projects — your quote is confirmed after a scoping call.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-shell">
          <div className="site-grid site-grid--3">
            {tiers.map((tier) => (
              <div key={tier.name} className={`site-card ${tier.featured ? "site-card--accent" : ""}`}>
                <p className="site-kicker" style={{ color: tier.featured ? "rgba(255, 255, 255, 0.75)" : "var(--cobalt)" }}>
                  /{tier.name.toLowerCase()}
                </p>
                <h2 className="site-section-title">{tier.name}</h2>
                <p className="site-title" style={{ fontSize: "1.9rem", marginTop: "0.4rem" }}>{tier.price}</p>
                <p className="site-subtitle" style={{ marginTop: "0.5rem", color: tier.featured ? "rgba(247, 242, 234, 0.8)" : "var(--muted)" }}>
                  {tier.desc}
                </p>
                <ul className="site-grid" style={{ marginTop: "1rem", gap: "0.6rem" }}>
                  {tier.includes.map((item) => (
                    <li key={item} className="site-pill" style={{ justifyContent: "flex-start", width: "100%" }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "1.1rem" }}>
                  <Button href="/contact" variant={tier.featured ? "primary" : "secondary"}>
                    get a quote →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-shell">
          <p className="site-kicker">faq</p>
          <h2 className="site-section-title">Common questions</h2>
          <div className="site-grid" style={{ marginTop: "1rem" }}>
            {faqs.map((item) => (
              <details key={item.q} className="site-card" style={{ padding: "1rem 1.2rem" }}>
                <summary className="cursor-pointer list-none font-display" style={{ fontSize: "1rem", fontWeight: 600 }}>
                  {item.q}
                </summary>
                <p className="site-subtitle" style={{ marginTop: "0.6rem" }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
