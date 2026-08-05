import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";
import logoImage from "../assets/images/logo.png";

const Footer = () => {
  const { t } = useLang();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.activities, path: "/activities" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Column 1 - Brand */}
        <div style={styles.col}>
          <img src={logoImage} alt="KAHEF logo" style={styles.footerLogo} />
          <p style={styles.tagline}>
            {t.home.slogan}
          </p>
          {/* <div style={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div> */}
        </div>

        {/* Column 2 - Quick Links */}
        <div style={styles.col}>
          <h3 style={styles.colTitle}>{t.footer.quickLinks}</h3>
          <ul style={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.path} style={styles.linkItem}>
                <Link to={link.path} style={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div style={styles.col}>
          <h3 style={styles.colTitle}>{t.footer.contactUs}</h3>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faLocationDot} style={styles.contactIcon} />
            <span>{t.footer.address}</span>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} style={styles.contactIcon} />
            <span>{t.footer.phone}</span>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.contactIcon} />
            <span>{t.footer.email}</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>
          &copy; {new Date().getFullYear()} KAHEF e.V. — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#0D2C1D",
    color: "#FBF7EF",
    fontFamily: "'Segoe UI', sans-serif",
    marginTop: "auto",
    borderTop: "2px solid #C9974A",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "50px 20px 30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "space-between",
  },
  col: {
    flex: "1 1 220px",
    minWidth: "200px",
  },
  brand: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "#FBF7EF",
    margin: "0 0 10px",
  },
  accent: {
    color: "#C9974A",
  },
  tagline: {
    fontSize: "0.9rem",
    color: "#D8D2C2",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  socials: {
    display: "flex",
    gap: "16px",
  },
  socialIcon: {
    color: "#C9974A",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  colTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#C9974A",
    marginBottom: "16px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  linkItem: {
    borderBottom: "1px solid #1A3D2A",
    paddingBottom: "8px",
  },
  link: {
    color: "#FBF7EF",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.2s",
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "14px",
    fontSize: "0.9rem",
    color: "#FBF7EF",
    lineHeight: "1.5",
  },
  contactIcon: {
    color: "#C9974A",
    marginTop: "3px",
    minWidth: "16px",
  },
  bottomBar: {
    borderTop: "1px solid #1A3D2A",
    padding: "16px 20px",
    textAlign: "center",
    backgroundColor: "#0D2C1D",
  },
  bottomText: {
    fontSize: "0.8rem",
    color: "#D8D2C2",
    margin: 0,
  },
  footerLogo: {
    height: "56px",
    width: "auto",
    maxWidth: "180px",
    marginBottom: "14px",
    objectFit: "contain",
  },
};

export default Footer;