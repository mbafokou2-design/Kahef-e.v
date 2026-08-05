import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faPeopleGroup,
  faPalette,
  faDove,
  faScaleBalanced,
  faMasksTheater,
} from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const { t } = useLang();

  const focusAreas = [
    { icon: faHandshake, text: t.about.focus1 },
    { icon: faPeopleGroup, text: t.about.focus2 },
    { icon: faPalette, text: t.about.focus3 },
    { icon: faDove, text: t.about.focus4 },
    { icon: faScaleBalanced, text: t.about.focus5 },
    { icon: faMasksTheater, text: t.about.focus6 },
  ];

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.about.title}</h1>
        <div className="section-underline"></div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div style={styles.contentWrap}>
          {/* Text Block */}
          <div style={styles.textBlock}>
            <h2 style={styles.subTitle}>KAHEF e.V.</h2>
            <p style={styles.bodyText}>{t.about.text}</p>
            <p style={{ ...styles.bodyText, marginTop: "20px", fontStyle: "italic", color: "#C9974A" }}>
              {t.about.meaning}
            </p>
            <div style={styles.chairmanBox}>
              <div style={styles.chairmanAvatar}>
                <FontAwesomeIcon icon={faUser} size="lg" style={{ color: "#C9974A" }} />
              </div>
              <div>
                <p style={styles.chairmanLabel}>{t.about.chairmanLabel}</p>
                <p style={styles.chairmanName}>{t.about.chairmanName}</p>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div style={styles.infoCard}>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>
                {t.contact.address}
              </span>
              <span style={styles.infoValue}>
                Bornstraße 61, 44145 Dortmund
              </span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>
                {t.contact.phone}
              </span>
              <span style={styles.infoValue}>
                +49 (Client to provide)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section style={styles.focusSection}>
        <div className="section">
          <h2 className="section-title">{t.about.focusTitle}</h2>
          <div className="section-underline"></div>
          <div className="grid-3">
            {focusAreas.map((area, index) => (
              <div className="card" key={index} style={styles.focusCard}>
                <div style={styles.iconWrap}>
                  <FontAwesomeIcon
                    icon={area.icon}
                    size="2x"
                    style={styles.icon}
                  />
                </div>
                <p style={styles.focusText}>{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section style={styles.missionBanner}>
        <div style={styles.missionContent}>
          <p style={styles.missionQuote}>
            {t.home.slogan}
          </p>
          <p style={styles.missionSub}>— KAHEF e.V., Dortmund</p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  pageHeader: {
    backgroundColor: "#FBF7EF",
    borderBottom: "3px solid #C9974A",
    padding: "60px 20px 40px",
    textAlign: "center",
  },
  pageTitle: {
    fontSize: "clamp(1.8rem, 4vw, 3rem)",
    fontWeight: "900",
    color: "#0D2C1D",
    marginBottom: "16px",
  },
  contentWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "flex-start",
  },
  textBlock: {
    flex: "2 1 320px",
  },
  subTitle: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#0D2C1D",
    marginBottom: "16px",
    borderLeft: "4px solid #C9974A",
    paddingLeft: "14px",
  },
  bodyText: {
    fontSize: "1rem",
    color: "#14231A",
    lineHeight: "1.85",
  },
  infoCard: {
    flex: "1 1 240px",
    backgroundColor: "#f4f4f4",
    borderRadius: "12px",
    padding: "28px",
    borderTop: "4px solid #C9974A",
  },
  infoRow: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "20px",
  },
  infoLabel: {
    fontSize: "0.75rem",
    fontWeight: "700",
    color: "#C9974A",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  infoValue: {
    fontSize: "0.95rem",
    color: "#14231A",
    fontWeight: "500",
  },
  focusSection: {
    backgroundColor: "#FBF7EF",
  },
  focusCard: {
    textAlign: "center",
    padding: "40px 24px",
  },
  iconWrap: {
    width: "64px",
    height: "64px",
    backgroundColor: "#FBF7EF",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  icon: {
    color: "#C9974A",
  },
  focusText: {
    fontSize: "0.95rem",
    color: "#14231A",
    lineHeight: "1.6",
    fontWeight: "500",
  },
  missionBanner: {
    backgroundColor: "#C9974A",
    padding: "60px 20px",
    textAlign: "center",
  },
  missionContent: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  missionQuote: {
    fontSize: "clamp(1.3rem, 3vw, 2rem)",
    fontWeight: "800",
    color: "#14231A",
    fontStyle: "italic",
    marginBottom: "12px",
  },
  missionSub: {
    fontSize: "0.9rem",
    color: "#1A3D2A",
    fontWeight: "600",
  },
  chairmanBox: {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginTop: "24px",
  padding: "18px 22px",
  backgroundColor: "#FBF7EF",
  borderRadius: "12px",
  borderLeft: "4px solid #C9974A",
},
chairmanAvatar: {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: "#FBF7EF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "48px",
},
chairmanLabel: {
  fontSize: "0.75rem",
  fontWeight: "700",
  color: "#C9974A",
  textTransform: "uppercase",
  letterSpacing: "1px",
},
chairmanName: {
  fontSize: "1.05rem",
  fontWeight: "700",
  color: "#14231A",
},
};

export default About;