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

const teamMembers = [
  { role: "president", image: "/images/team/president.jpeg" },
  { role: "vicePresident", image: "/images/team/vice-president.jpeg" },
  { role: "secretaryGeneral", image: "/images/team/secretary-general.jpeg" },
];

const members = [
  "Ndeme Matuke",
  "Karlmax Boma",
  "Dr. Stanley Fokong",
  "Edwin Ehabe",
  "Celestine Njumbe",
  "Teddy Ekabe",
  "Derick Ndeh",
  "JN Mafany",
  "Dr. Colins Awungacha",
  "Dominic Anubodem",
  "Clement Ashu",
];

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
      <section className="pageHeader" style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.about.title}</h1>
        <div className="section-underline"></div>
      </section>

      {/* Main Content */}
      <section className="contentSection section">
        <div style={styles.contentWrap}>
          {/* Text Block */}
          <div style={styles.textBlock}>
            <h2 style={styles.subTitle}>KAHEF e.V.</h2>
            <p style={styles.bodyText}>{t.about.text}</p>
            <p style={{ ...styles.bodyText, marginTop: "20px", fontStyle: "italic", color: "#0A8F62" }}>
              {t.about.meaning}
            </p>
            <div style={styles.chairmanBox}>
              <div style={styles.chairmanAvatar}>
                <FontAwesomeIcon icon={faUser} size="lg" style={{ color: "#0A8F62" }} />
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
                +49 173 14 86 046
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section id="team" className="teamSection" style={styles.teamSection}>
        <div className="section">
          <h2 className="section-title">{t.team.title}</h2>
          <div className="section-underline"></div>
          <div style={styles.teamGrid}>
            {teamMembers.map((member) => (
              <article className="card" key={member.role} style={styles.teamCard}>
                <div
                  style={{
                    ...styles.photoFrame,
                    ...(member.role === "vicePresident" ? styles.tallPhotoFrame : {}),
                  }}
                >
                  <img
                    src={member.image}
                    alt={t.team[`${member.role}Label`]}
                    style={{
                      ...styles.memberPhoto,
                      ...(member.role === "vicePresident" ? styles.tallMemberPhoto : {}),
                    }}
                  />
                </div>
                <p style={styles.memberRole}>{t.team[`${member.role}Label`]}</p>
                <p style={styles.memberName}>{t.team[`${member.role}Name`]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="membershipSection" style={styles.membershipSection}>
        <div className="section">
          <h2 className="section-title">{t.membership.title}</h2>
          <div className="section-underline"></div>
          <p style={styles.membershipSubtitle}>{t.membership.subtitle}</p>
          <div style={styles.membersGrid}>
            {members.map((member, index) => (
              <article className="card" key={member} style={styles.memberCard}>
                <span style={styles.memberNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div style={styles.memberInitials}>
                  {member.replace("Dr. ", "").split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()}
                </div>
                <p style={styles.memberFullName}>{member}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="focusSection" style={styles.focusSection}>
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
      <section className="missionSection" style={styles.missionBanner}>
        <div style={styles.missionContent}>
          <p style={styles.missionQuote}>
            {t.home.slogan}
          </p>
          <p style={styles.missionSub}>{t.home.missionSub}</p>
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
    color: "#12372A",
    marginBottom: "16px",
    borderLeft: "4px solid #0A8F62",
    paddingLeft: "14px",
  },
  bodyText: {
    fontSize: "1rem",
    color: "#1B2922",
    lineHeight: "1.85",
  },
  infoCard: {
    flex: "1 1 240px",
    backgroundColor: "#EAF4ED",
    borderRadius: "12px",
    padding: "28px",
    borderTop: "4px solid #0A8F62",
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
    color: "#0A8F62",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  infoValue: {
    fontSize: "0.95rem",
    color: "#1B2922",
    fontWeight: "500",
  },
  focusSection: {
    backgroundColor: "#FFFFFF",
  },
  teamSection: {
    backgroundColor: "#EAF4ED",
  },
  membershipSection: {
    backgroundColor: "#FFFFFF",
  },
  membershipSubtitle: {
    maxWidth: "620px",
    margin: "-18px auto 32px",
    textAlign: "center",
    color: "#5B6A62",
    lineHeight: "1.6",
  },
  membersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },
  memberCard: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "20px",
    minHeight: "86px",
    borderLeft: "4px solid #0A8F62",
  },
  memberNumber: {
    position: "absolute",
    top: "10px",
    right: "14px",
    color: "#0A8F62",
    fontSize: "0.7rem",
    fontWeight: "800",
    letterSpacing: "1px",
  },
  memberInitials: {
    width: "44px",
    height: "44px",
    minWidth: "44px",
    borderRadius: "50%",
    backgroundColor: "#12372A",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8rem",
    fontWeight: "800",
  },
  memberFullName: {
    color: "#1B2922",
    fontSize: "0.95rem",
    fontWeight: "700",
    paddingRight: "18px",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
  },
  teamCard: {
    padding: "24px",
    textAlign: "center",
    borderTop: "4px solid #0A8F62",
  },
  photoFrame: {
    width: "100%",
    aspectRatio: "4 / 5",
    margin: "0 auto 18px",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    border: "3px solid #0A8F62",
  },
  tallPhotoFrame: {
    aspectRatio: "3 / 5",
  },
  memberPhoto: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center center",
  },
  tallMemberPhoto: {
    objectFit: "cover",
    objectPosition: "center top",
  },
  memberRole: {
    color: "#0A8F62",
    fontSize: "0.8rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "8px",
  },
  memberName: {
    color: "#1B2922",
    fontSize: "1rem",
    fontWeight: "700",
  },
  focusCard: {
    textAlign: "center",
    padding: "40px 24px",
  },
  iconWrap: {
    width: "64px",
    height: "64px",
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  icon: {
    color: "#0A8F62",
  },
  focusText: {
    fontSize: "0.95rem",
    color: "#1B2922",
    lineHeight: "1.6",
    fontWeight: "500",
  },
  missionBanner: {
    backgroundColor: "#0A8F62",
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
    color: "#1B2922",
    fontStyle: "italic",
    marginBottom: "12px",
  },
  missionSub: {
    fontSize: "0.9rem",
    color: "#0E5A3C",
    fontWeight: "600",
  },
  chairmanBox: {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginTop: "24px",
  padding: "18px 22px",
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
  borderLeft: "4px solid #0A8F62",
},
chairmanAvatar: {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "48px",
},
chairmanLabel: {
  fontSize: "0.75rem",
  fontWeight: "700",
  color: "#0A8F62",
  textTransform: "uppercase",
  letterSpacing: "1px",
},
chairmanName: {
  fontSize: "1.05rem",
  fontWeight: "700",
  color: "#1B2922",
},
};

export default About;
