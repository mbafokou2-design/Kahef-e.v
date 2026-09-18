import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faDrum,
  faPersonWalking,
  faChildren,
  faBrain,
  faUsers,
  faHouseChimney,
  faLocationDot,
  faPhone,
  faEnvelope,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";


const icons = [
  faFutbol,
  faDrum,
  faPersonWalking,
  faChildren,
  faBrain,
  faUsers,
  faHouseChimney,
];

const Activities = () => {
  const { t } = useLang();

  return (
    <div className="activities-page">
      {/* Page Header */}
      <section className="pageHeader" style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.activities.title}</h1>
        <div className="section-underline"></div>
      </section>

      {/* Activities Grid */}
      <section className="contentSection section">
        <div style={styles.grid}>
          {t.activities.list.map((activity, index) => {
            const CardTag = activity.category ? Link : "div";
            const cardProps = activity.category
              ? { to: "/activities" }
              : {};

            return (
              <CardTag
                key={index}
                className="card"
                style={{
                  ...styles.card,
                  textDecoration: "none",
                  cursor: activity.category ? "pointer" : "default",
                }}
                {...cardProps}
              >
                <div style={styles.cardTop}>
                  <span style={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  <div style={styles.iconWrap}>
                    <FontAwesomeIcon icon={icons[index]} size="xl" style={styles.icon} />
                  </div>
                </div>
                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{activity.title}</h3>
                  <p style={styles.cardDesc}>{activity.desc}</p>
                </div>
                <div style={styles.cardFooter}>
                  <span style={styles.cardLabel}>{t.nav.activities}</span>
                  {activity.category && <FontAwesomeIcon icon={faUpRightFromSquare} style={styles.cardArrow} />}
                </div>
              </CardTag>
            );
          })}
        </div>
      </section>

{/* Bottom Banner */}
      <section className="greenSection" style={styles.banner}>
        <div style={styles.bannerContent}>
          <h2 style={styles.bannerTitle}>{t.activities.joinUs}</h2>
          <div style={styles.bannerRow}>
            <span style={styles.bannerItem}>
              <FontAwesomeIcon icon={faLocationDot} style={styles.bannerIcon} />
              {t.footer.address}
            </span>
            <span style={styles.bannerItem}>
              <FontAwesomeIcon icon={faPhone} style={styles.bannerIcon} />
              {t.footer.phone}
            </span>
            <span style={styles.bannerItem}>
              <FontAwesomeIcon icon={faEnvelope} style={styles.bannerIcon} />
              {t.footer.email}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  pageHeader: {
    backgroundColor: "#FFFFFF",
    borderBottom: "3px solid #0A8F62",
    padding: "60px 20px 40px",
    textAlign: "center",
  },
  pageTitle: {
    fontSize: "clamp(1.8rem, 4vw, 3rem)",
    fontWeight: "900",
    color: "#12372A",
    marginBottom: "16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
    minHeight: "280px",
    padding: "28px",
    border: "1px solid #C8DED1",
    borderTop: "5px solid #0A8F62",
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 12px 28px rgba(18, 55, 42, .08)",
  },
  cardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  number: {
    color: "#0A8F62",
    fontSize: "0.75rem",
    fontWeight: "850",
    letterSpacing: "0.15em",
  },
  iconWrap: {
    width: "58px",
    height: "58px",
    backgroundColor: "#EAF4ED",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#0A8F62",
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    fontSize: "1.12rem",
    fontWeight: "800",
    color: "#12372A",
    marginBottom: "10px",
    lineHeight: "1.35",
  },
  cardDesc: {
    fontSize: "0.9rem",
    color: "#5B6A62",
    lineHeight: "1.65",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "16px",
    borderTop: "1px solid #D9E7DF",
  },
  cardLabel: {
    color: "#08734D",
    fontSize: "0.72rem",
    fontWeight: "850",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  cardArrow: {
    color: "#0A8F62",
  },
  banner: {
    backgroundColor: "#FFFFFF",
    borderTop: "4px solid #0A8F62",
    padding: "50px 20px",
    textAlign: "center",
  },
  bannerContent: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  bannerTitle: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#1B2922",
    marginBottom: "12px",
  },

bannerRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    fontSize: "0.95rem",
    color: "#5B6A62",
  },
  bannerItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    whiteSpace: "nowrap",
  },
  bannerIcon: {
    color: "#0A8F62",
    fontSize: "0.9rem",
  },
};

export default Activities;
