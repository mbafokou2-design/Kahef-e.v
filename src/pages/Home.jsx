import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faPeopleGroup,
  faPalette,
  faDove,
  faScaleBalanced,
  faMasksTheater,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";
const heroLogo = "/logo.png";

const Home = () => {
  const { t } = useLang();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="homeHero" style={styles.hero}>
        <div style={styles.heroOverlay} className="hero-overlay">
          {/* Left — Text */}
          <div style={styles.heroContent}>
            <p style={styles.heroEyebrow}>{t.home.location}</p>
            <h1 style={styles.heroTitle}>{t.home.slogan}</h1>
            <p style={styles.heroIntro}>{t.home.intro}</p>
            <p style={{ ...styles.heroIntro, fontStyle: "italic", color: "#0A8F62", fontSize: "0.95rem" }}>
              {t.about.meaning}
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link to="/about" style={styles.heroBtn}>
                {t.home.cta}
              </Link>
              <Link to="/donation" style={styles.donationBtn}>
                <FontAwesomeIcon icon={faHandHoldingHeart} style={{ marginRight: "8px" }} />
                {t.donation.subtitle}
              </Link>
            </div>
          </div>

          {/* Right — Logo */}
          <div style={styles.heroImageBox} className="hero-image-box">
            <img src={heroLogo} alt="KAHEF e.V. logo" style={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="greenSection" style={styles.focusSection}>
        <div className="section">
          <h2 className="section-title">{t.about.focusTitle}</h2>
          <div className="section-underline"></div>
          <div className="grid-3">
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faHandshake} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus1}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faPeopleGroup} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus2}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faPalette} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus3}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faDove} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus4}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faScaleBalanced} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus5}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faMasksTheater} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus6}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="activitiesSection" style={styles.activitiesPreview}>
        <div className="section">
          <h2 className="section-title">{t.activities.title}</h2>
          <div className="section-underline"></div>
          <div className="grid-2">
            {t.activities.featured.map((activity, index) => (
              <Link
                to="/activities"
                className="card"
                key={index}
                style={{ ...styles.activityCard, textDecoration: "none" }}
              >
                <h3 style={styles.activityTitle}>{activity.title}</h3>
              </Link>
            ))}
          </div>
          <div style={styles.ctaWrap}>
            <Link to="/activities" style={styles.outlineBtn}>
              {t.nav.activities} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    width: "100%",
    minHeight: "70vh",
    background: "linear-gradient(160deg, #EAF4ED 0%, #FFFFFF 55%, #DDEFE5 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroOverlay: {
    width: "100%",
    maxWidth: "1100px",
    padding: "60px 20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "center",
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  heroEyebrow: {
    color: "#0A8F62",
    fontWeight: "700",
    fontSize: "0.9rem",
    letterSpacing: "2px",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "900",
    color: "#12372A",
    lineHeight: "1.15",
    marginBottom: "24px",
  },
  heroIntro: {
    fontSize: "1.05rem",
    color: "#1B2922",
    lineHeight: "1.75",
    marginBottom: "24px",
    maxWidth: "560px",
  },
  heroBtn: {
    display: "inline-block",
    backgroundColor: "#0A8F62",
    color: "#FFFFFF",
    padding: "14px 32px",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "0.95rem",
    textDecoration: "none",
  },
  heroImageBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroImage: {
    width: "100%",
    maxWidth: "420px",
    height: "auto",
    objectFit: "contain",
  },
  focusSection: {
    backgroundColor: "#FFFFFF",
  },
  focusCard: {
    textAlign: "center",
    padding: "36px 24px",
  },
  icon: {
    color: "#0A8F62",
    marginBottom: "16px",
  },
  cardTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#12372A",
    lineHeight: "1.5",
  },
  activitiesPreview: {
    backgroundColor: "#DDEFE5",
  },
  activityCard: {
    borderLeft: "6px solid #0A8F62",
    borderRadius: "18px",
    backgroundColor: "#F4FAF6",
    boxShadow: "0 14px 28px rgba(18, 55, 42, 0.10)",
    padding: "30px",
  },
  activityTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#12372A",
    marginBottom: "8px",
  },
  ctaWrap: {
    textAlign: "center",
    marginTop: "36px",
  },
  outlineBtn: {
    display: "inline-block",
    border: "2px solid #0E5A3C",
    color: "#0E5A3C",
    padding: "12px 28px",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "0.95rem",
    textDecoration: "none",
  },
  donationBtn: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "#EAF4ED",
    color: "#0A8F62",
    border: "2px solid #0A8F62",
    padding: "14px 28px",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "0.95rem",
    textDecoration: "none",
  },
};

export default Home;
