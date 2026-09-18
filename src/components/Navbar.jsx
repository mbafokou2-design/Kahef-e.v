import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";

const logoImage = "/logo.png";

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.activities, path: "/activities" },
    { label: t.nav.gallery, path: "/gallery" },
    { label: t.nav.contact, path: "/contact" },
  ];
  const isActive = (path) => path.includes("#") ? location.pathname + location.hash === path : location.pathname === path;

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <Link to="/" className="brand-link" onClick={() => setMenuOpen(false)}>
            <img src={logoImage} alt="KAHEF logo" className="brand-logo" />
          </Link>
          <div className="desktop-nav-links">
            {navLinks.map((link) => <Link key={link.path} to={link.path} className={isActive(link.path) ? "nav-link active" : "nav-link"}>{link.label}</Link>)}
          </div>
          <div className="nav-actions">
            <div className="language-menu">
              <button className="language-trigger" onClick={() => setLanguageOpen((open) => !open)} aria-label="Choose language" aria-expanded={languageOpen}>
                <span aria-hidden="true">{lang === "de" ? "🇩🇪" : "🇬🇧"}</span>
                <span>{lang === "de" ? "DE" : "EN"}</span>
                <FontAwesomeIcon icon={faChevronDown} className={languageOpen ? "chevron rotated" : "chevron"} />
              </button>
              {languageOpen && (
                <div className="language-drawer">
                  <button className={lang === "de" ? "language-option selected" : "language-option"} onClick={() => { if (lang !== "de") toggleLang(); setLanguageOpen(false); }}>🇩🇪 <span>Deutsch</span></button>
                  <button className={lang === "en" ? "language-option selected" : "language-option"} onClick={() => { if (lang !== "en") toggleLang(); setLanguageOpen(false); }}>🇬🇧 <span>English</span></button>
                </div>
              )}
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>
        <div className={menuOpen ? "mobile-nav open" : "mobile-nav"}>
          {navLinks.map((link) => <Link key={link.path} to={link.path} className={isActive(link.path) ? "mobile-nav-link active" : "mobile-nav-link"} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
