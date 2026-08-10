import type { Metadata } from "next";

export const metadata: Metadata = { title: "About — Nexus" };

const values = [
  { title: "Async by default", desc: "Meetings are the exception, not the schedule. Decisions live in writing so the next timezone can pick them up." },
  { title: "Fixed scope, fixed price", desc: "We quote the outcome, not the hours. Estimates are our risk to manage, not yours." },
  { title: "Your infrastructure", desc: "Code lands in your repo, on your cloud account, from day one. Nothing to migrate later." },
  { title: "Senior by design", desc: "Every engineer on a project has shipped production software before — we don't train on your budget." },
];

const ratingUrl = "https://maps.app.goo.gl/G7qXpWFuyYBJg2P68";

const stats = [
  { value: "12", label: "people, four continents" },
  { value: "27", label: "projects shipped" },
  { value: "0", label: "offices leased" },
  { value: "4.9", label: "average client rating" },
];

const projects = [
  { title: "Product launch platform", desc: "Launch-ready SaaS site built for growth." },
  { title: "Conversion website", desc: "Design-driven landing pages that convert." },
  { title: "Support portal", desc: "Chat and help desk experiences for customers." },
];

export default function About() {
  return (
    <>
      <section className="site-page">
        <div className="site-card">
          <p className="site-kicker">about Nexussoft Labs</p>
          <h1 className="site-title">Built as a hybrid company from the first commit.</h1>
          <p className="site-subtitle">
            Nexussoft Labs started with one question: why does a software team need a lease? We put together engineers, a designer, and a QA lead across four countries and went looking for the first client instead of an office.
          </p>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-shell">
          <p className="site-kicker">how we work</p>
          <div className="site-grid site-grid--2" style={{ marginTop: "1rem" }}>
            {values.map((value) => (
              <div key={value.title} className="site-card">
                <h3 className="site-section-title">{value.title}</h3>
                <p className="site-subtitle" style={{ marginTop: 0 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-shell">
          <p className="site-kicker">the numbers</p>
          <div className="site-grid site-grid--4" style={{ marginTop: "1rem" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="site-card">
                <p className="site-title">{stat.value}</p>
                <p className="site-subtitle" style={{ marginTop: "0.35rem" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-shell">
          <p className="site-kicker">projects & location</p>
          <div className="site-grid site-grid--3" style={{ marginTop: "1rem", gap: "0.9rem" }}>
            {projects.map((project) => (
              <div key={project.title} className="site-card">
                <h3 className="site-section-title">{project.title}</h3>
                <p className="site-subtitle" style={{ marginTop: 0 }}>{project.desc}</p>
              </div>
            ))}
            <div className="site-card">
              <p className="site-kicker">location</p>
              <p className="site-subtitle" style={{ marginTop: 0 }}>
                Hybrid studio, remote by design. Find us on Google Maps and leave a rating so more teams can discover Nexussoft Labs.
              </p>
              <a href={ratingUrl} target="_blank" rel="noreferrer" className="site-button site-button--secondary" style={{ marginTop: "1rem", display: "inline-flex" }}>
                Rate us on Google
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
