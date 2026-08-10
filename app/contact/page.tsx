import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contacts — Nexus" };

const ratingUrl = "https://maps.app.goo.gl/G7qXpWFuyYBJg2P68";
const googleIcon = "https://cdn.simpleicons.org/google/4285F4";

const socials = [
  {
    label: "Email",
    href: "mailto:hello@nexus.studio",
    icon: "https://img.icons8.com/color/48/000000/gmail.png"
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/15551234567",
    icon: "https://cdn.simpleicons.org/whatsapp/25D366"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/yourcompany",
    icon: "https://cdn.simpleicons.org/facebook/1877f2"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourcompany",
    icon: "https://cdn.simpleicons.org/instagram/E4405F"
  },
  {
    label: "X",
    href: "https://x.com/yourcompany",
    icon: "https://cdn.simpleicons.org/x/000000"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/yourcompany",
    icon: "https://img.icons8.com/color/48/000000/linkedin-circled.png"
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@yourcompany",
    icon: "https://cdn.simpleicons.org/youtube/FF0000"
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@yourcompany",
    icon: "https://cdn.simpleicons.org/tiktok/000000"
  }
];

export default function Contact() {
  return (
    <section className="site-page">
      <div className="site-grid site-grid--2" style={{ alignItems: "start" }}>
        <div className="site-card">
          <p className="site-kicker">contact</p>
          <h1 className="site-title">Start a project.</h1>
          <p className="site-subtitle">
            Tell us the problem you&apos;re solving. We reply within one business day with next steps — usually a short scoping call.
          </p>

          <div className="site-grid" style={{ marginTop: "1.25rem", gap: "0.8rem" }}>
            <div>
              <p className="site-kicker" style={{ marginBottom: "0.25rem" }}>reach us through</p>
              <div className="site-grid site-social-grid" style={{ marginTop: "0.5rem", gap: "0.5rem" }}>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="site-pill site-social-pill"
                    aria-label={social.label}
                  >
                    <img src={social.icon} alt={social.label} className="site-social-icon" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
              <div className="site-card" style={{ marginTop: "1rem", padding: "1.25rem" }}>
                <p className="site-kicker" style={{ marginBottom: "0.35rem" }}>book an appointment</p>
                <p className="site-subtitle" style={{ marginTop: 0 }}>
                  Email us or message on WhatsApp and we’ll confirm your preferred time within one business day.
                </p>
              </div>
            </div>
            <div>
              <p className="site-kicker" style={{ marginBottom: "0.25rem" }}>project details</p>
              <div className="site-grid" style={{ marginTop: "0.75rem", gap: "0.9rem" }}>
                <div className="site-card" style={{ padding: "1.25rem" }}>
                  <p className="site-kicker" style={{ marginBottom: "0.25rem" }}>budget</p>
                  <p className="site-subtitle" style={{ marginTop: 0 }}>
                    Share your budget range so we can propose a scope that matches your needs.
                  </p>
                </div>
                <div className="site-card" style={{ padding: "1.25rem" }}>
                  <p className="site-kicker" style={{ marginBottom: "0.25rem" }}>service type</p>
                  <p className="site-subtitle" style={{ marginTop: 0 }}>
                    Let us know if you need a website, mobile app, desktop tool, support portal, or AI assistant.
                  </p>
                </div>
                <div className="site-card" style={{ padding: "1.25rem" }}>
                  <p className="site-kicker" style={{ marginBottom: "0.25rem" }}>urgency</p>
                  <p className="site-subtitle" style={{ marginTop: 0 }}>
                    Tell us how soon you want delivery so we can give you a realistic timeline.
                  </p>
                </div>
              </div>
              <div className="site-card" style={{ marginTop: "1rem", padding: "1.25rem" }}>
                <p className="site-kicker" style={{ marginBottom: "0.25rem" }}>location</p>
                <p className="site-subtitle" style={{ marginTop: 0 }}>
                  Find us on Google Maps and leave a rating to help others discover our studio.
                </p>
                <a
                  href={ratingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="site-button site-button--secondary"
                  style={{
                    marginTop: "0.8rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "#4285F4",
                    borderColor: "#4285F4",
                    color: "#fff",
                  }}
                >
                  <img src={googleIcon} alt="Google" style={{ width: "18px", height: "18px" }} />
                  Rate us on Google
                </a>
              </div>
            </div>
            <div>
              <p className="site-kicker" style={{ marginBottom: "0.25rem" }}>response time</p>
              <p className="site-subtitle" style={{ marginTop: 0 }}>&lt; 1 business day</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
