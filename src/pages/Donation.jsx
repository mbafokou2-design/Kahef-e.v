import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";

const Donation = () => {
  const { t } = useLang();

  return (
    <div>
      <section style={styles.pageHeader}>
        <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" style={{ color: "#C9974A", marginBottom: "16px" }} />
        <h1 style={styles.pageTitle}>{t.donation.title}</h1>
        <div className="section-underline"></div>
        <p style={styles.pageSubtitle}>{t.donation.subtitle}</p>
      </section>

      <section className="section">
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
  pageSubtitle: {
    color: "#C9974A",
    fontSize: "1rem",
    fontWeight: "700",
  },
  donationBox: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#FBF7EF",
    border: "2px solid #C9974A",
    borderRadius: "14px",
    padding: "36px",
  },
  donationDetails: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "22px 24px",
    marginBottom: "18px",
  },
  donationLine: {
    fontSize: "0.95rem",
    color: "#14231A",
    lineHeight: "2",
    fontFamily: "monospace",
  },
  donationNote: {
    fontSize: "0.88rem",
    color: "#5F6B65",
    fontStyle: "italic",
    lineHeight: "1.6",
    textAlign: "center",
  },
};

export default Donation;