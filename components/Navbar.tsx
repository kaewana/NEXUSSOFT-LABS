"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contacts" },
];

const siteLogo = "/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">
        <Link href="/" className="site-navbar__brand">
          <img src={siteLogo} alt="Nexussoft Labs logo" className="site-navbar__logo" />
          <div className="site-navbar__brand-text">
            <span className="site-navbar__name">Nexussoft Labs</span>
            <span className="site-navbar__tagline">Hybrid software studio</span>
          </div>
        </Link>

        <div className="site-navbar__desktop">
          <nav className="site-navbar__links" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="site-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <button
          type="button"
          className="site-menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`site-navbar__mobile ${open ? "is-open" : ""}`}>
          <nav className="site-navbar__links" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="site-nav-link" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
