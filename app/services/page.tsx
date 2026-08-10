import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services — Nexussoft Labs" };

const services = [
  {
    title: "Launch website",
    price: "$2,500–$7,000",
    details: "Conversion-focused landing pages and marketing sites priced for the Kenyan/African market.",
  },
  {
    title: "Web application",
    price: "$4,000–$16,000",
    details: "Custom web apps for business operations, marketplaces, admin panels, and SaaS products.",
  },
  {
    title: "Android app",
    price: "$5,000–$18,000",
    details: "Native Android apps designed for local users and international reach.",
  },
  {
    title: "iOS app",
    price: "$5,000–$18,000",
    details: "Native iOS experiences for professional mobile customers and product launches.",
  },
  {
    title: "Desktop app",
    price: "$6,000–$20,000",
    details: "Cross-platform desktop tools and native Windows/macOS applications.",
  },
  {
    title: "Progressive Web App",
    price: "$3,500–$12,000",
    details: "Mobile-friendly web apps that behave like native apps across devices.",
  },
  {
    title: "E-commerce store",
    price: "$3,500–$12,000",
    details: "Online stores with payments, inventory, shipping, and local currency support.",
  },
  {
    title: "Support portal",
    price: "$4,000–$15,000",
    details: "Customer help portals with chat, knowledge base, and ticket workflows.",
  },
  {
    title: "Brand refresh + site",
    price: "$2,500–$9,000",
    details: "Brand strategy, visual identity, and website refresh for a stronger launch.",
  },
  {
    title: "API integration",
    price: "$2,000–$8,000",
    details: "Connect payments, SMS, analytics, CRMs, and third-party services reliably.",
  },
  {
    title: "AI assistant",
    price: "$2,500–$10,000",
    details: "Smart assistant experiences that answer visitors, capture leads, and reduce support load.",
  },
  {
    title: "Maintenance & support",
    price: "$1,000–$4,500",
    details: "Ongoing updates, hosting support, and priority maintenance for live products.",
  },
];

const offers = [
  { title: "Startup bundle", detail: "Website + branding from $4,500 — ideal for new businesses launching in Africa." },
  { title: "Mobile starter", detail: "Android or iOS app + backend from $7,500 — launch faster with a single package." },
  { title: "Support boost", detail: "Support portal + AI assistant from $6,500 — reduce customer wait times and scale support." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="site-page">
        <div className="site-card">
          <p className="site-kicker">services</p>
          <h1 className="site-title">What we build and how we price it.</h1>
          <p className="site-subtitle">
            These ranges reflect our typical work. Send your budget, desired service, and urgency so we can propose the right scope and timeline.
          </p>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-shell">
          <p className="site-kicker">service catalogue</p>
          <div className="site-grid site-grid--3" style={{ gap: "1rem" }}>
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
        </div>
      </section>

      <section className="site-section">
        <div className="site-shell">
          <div className="site-card">
            <p className="site-kicker">special offers</p>
            <div className="site-grid" style={{ marginTop: "1rem", gap: "0.75rem" }}>
              {offers.map((offer) => (
                <div key={offer.title} className="site-card" style={{ padding: "1rem" }}>
                  <p className="site-section-title" style={{ margin: 0 }}>{offer.title}</p>
                  <p className="site-subtitle" style={{ marginTop: "0.5rem" }}>{offer.detail}</p>
                </div>
              ))}
            </div>
            <p className="site-subtitle" style={{ marginTop: "1rem" }}>
              Offers vary by project size and timeline. Share your target budget and delivery window when you get in touch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
