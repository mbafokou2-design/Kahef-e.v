import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLang();
  const links = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.activities, path: "/activities" },
    { label: t.nav.gallery, path: "/gallery" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="KAHEF logo" className="footer-logo" />
          <p>{t.home.slogan}</p>
        </div>
        <div className="footer-column">
          <p className="footer-kicker">{t.footer.quickLinks}</p>
          <div className="footer-links">
            {links.map((link) => <Link key={link.path} to={link.path}>{link.label}</Link>)}
          </div>
        </div>
        <div className="footer-column footer-contact">
          <p className="footer-kicker">{t.footer.contactUs}</p>
          <p><FontAwesomeIcon icon={faLocationDot} /> {t.footer.address}</p>
          <a href="tel:+491731486046"><FontAwesomeIcon icon={faPhone} /> {t.footer.phone}</a>
          <a href="mailto:kahef.do@web.de"><FontAwesomeIcon icon={faEnvelope} /> {t.footer.email}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} KAHEF e.V. — {t.footer.rights}</span>
        <a href="#top" aria-label="Back to top"><FontAwesomeIcon icon={faArrowUp} /></a>
      </div>
    </footer>
  );
};

export default Footer;
