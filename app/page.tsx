import Link from "next/link";

const highlights = [
  { title: "Fast launch sprints", text: "Move from idea to live experience in focused delivery windows." },
  { title: "Clear support flow", text: "Visitors can ask questions in real time and get practical answers." },
  { title: "Modern presence", text: "A refined site that feels calm, polished, and ready for growth." },
];

const services = [
  { title: "Launch website", price: "$3,000–$8,000", details: "Conversion-focused sites for fast product launches." },
  { title: "SaaS MVP", price: "$8,000–$25,000", details: "Core product builds with account, pricing, and admin workflows." },
  { title: "Support portal", price: "$4,000–$15,000", details: "Knowledge base, ticketing, and live help for support teams." },
  { title: "Brand refresh + site", price: "$2,500–$9,000", details: "Visual identity, messaging, and launch-ready pages." },
  { title: "AI assistant", price: "$2,500–$10,000", details: "Smart help experiences that collect leads and reduce support load." },
];

export default function HomePage() {
  return (
    <>
      <section className="site-hero">
        <div className="site-shell">
          <div className="site-hero__content">
            <div className="site-card site-card--accent">
              <span className="site-badge">Hybrid software studio</span>
              <h1 className="site-title" style={{ marginTop: "0.9rem", color: "var(--paper)" }}>
                Build a digital presence that feels thoughtful and clear.
              </h1>
              <p className="site-subtitle" style={{ color: "rgba(247, 242, 234, 0.8)", maxWidth: "640px" }}>
                From launch-ready websites to thoughtful support experiences, we help teams present their work with clarity and confidence.
              </p>
              <div className="site-hero__actions">
                <Link href="/about" className="site-button site-button--primary">
                  Learn more
                </Link>
                <Link href="/contact" className="site-button site-button--secondary" style={{ borderColor: "rgba(255,255,255,0.25)", color: "var(--paper)" }}>
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="site-grid site-grid--3" style={{ marginTop: "1rem" }}>
              {highlights.map((item) => (
                <div key={item.title} className="site-card">
                  <h2 className="site-section-title">{item.title}</h2>
                  <p className="site-subtitle" style={{ marginTop: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-shell">
          <p className="site-kicker">services</p>
          <div className="site-grid site-grid--3" style={{ marginTop: "1rem", gap: "1rem" }}>
            {services.map((service) => (
              <div key={service.title} className="site-card">
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-start" }}>
                  <p className="site-section-title" style={{ margin: 0 }}>{service.title}</p>
                  <p className="site-subtitle" style={{ margin: 0, fontWeight: 600 }}>{service.price}</p>
                </div>
                <p className="site-subtitle" style={{ marginTop: "0.75rem" }}>{service.details}</p>
              </div>
            ))}
          </div>
          <div className="site-card" style={{ marginTop: "1rem", padding: "1rem" }}>
            <p className="site-kicker">pricing note</p>
            <p className="site-subtitle" style={{ marginTop: 0 }}>
              Share your expected budget, the type of service you want, and how urgent the project is. A small upfront deposit reserves the timeline and keeps proposals aligned.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
