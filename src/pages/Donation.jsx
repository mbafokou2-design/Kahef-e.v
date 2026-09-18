import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";

const Donation = () => {
  const { t } = useLang();

  return (
    <div className="donation-page">
      <section className="pageHeader" style={styles.pageHeader}>
        <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" style={{ color: "#0A8F62", marginBottom: "16px" }} />
        <h1 style={styles.pageTitle}>{t.donation.title}</h1>
        <div className="section-underline"></div>
        <p style={styles.pageSubtitle}>{t.donation.subtitle}</p>
      </section>

      <section className="contentSection section">
        <div style={styles.donationBox}>
          <div style={styles.donationDetails}>
            <p style={styles.donationLine}>{t.donation.iban}</p>
            <p style={styles.donationLine}>{t.donation.bic}</p>
            <p style={styles.donationLine}>{t.donation.bank}</p>
            <p style={styles.donationLine}>{t.donation.recipient}</p>
            <p style={styles.donationLine}>{t.donation.reference}</p>
          </div>
          <p style={styles.donationNote}>{t.donation.note}</p>
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
  pageSubtitle: {
    color: "#0A8F62",
    fontSize: "1rem",
    fontWeight: "700",
  },
  donationBox: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#FFFFFF",
    border: "2px solid #0A8F62",
    borderRadius: "14px",
    padding: "36px",
  },
  donationDetails: {
    backgroundColor: "#EAF4ED",
    borderRadius: "10px",
    padding: "22px 24px",
    marginBottom: "18px",
  },
  donationLine: {
    fontSize: "0.95rem",
    color: "#1B2922",
    lineHeight: "2",
    fontFamily: "monospace",
  },
  donationNote: {
    fontSize: "0.88rem",
    color: "#5B6A62",
    fontStyle: "italic",
    lineHeight: "1.6",
    textAlign: "center",
  },
};

export default Donation;
