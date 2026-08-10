import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src="/logo.png" alt="Nexussoft Labs logo" className="site-footer__logo" />
          <p>
            Nexussoft Labs is a hybrid software studio delivering websites, mobile apps, desktop tools, and support platforms for African and global teams.
          </p>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__title">Contacts</p>
          <a href="mailto:hello@nexus.studio">hello@nexus.studio</a>
          <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://maps.app.goo.gl/G7qXpWFuyYBJg2P68" target="_blank" rel="noreferrer">Google Maps location</a>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__title">Partnerships</p>
          <p>Agency collaboration network</p>
          <p>Technology and cloud partners</p>
          <p>Local startup community</p>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__title">Quick links</p>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contacts</Link>
        </div>
      </div>
      <div className="site-footer__copy">
        <p>© {new Date().getFullYear()} Nexussoft Labs. Built for teams that want clear, modern digital products.</p>
      </div>
    </footer>
  );
}
