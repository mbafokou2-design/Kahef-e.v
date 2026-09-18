import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLang } from "../context/LanguageContext";
import { faLocationDot, faPhone, faEnvelope, faPaperPlane, faCircleCheck, faMessage } from "@fortawesome/free-solid-svg-icons";

// Replace with your real Formspree endpoint
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

const Contact = () => {
  const { t, lang } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="pageHeader" style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.contact.title}</h1>
        <div className="section-underline"></div>
        <p style={styles.pageSubtitle}>{t.contact.subtitle}</p>
      </section>

      {/* Content */}
      <section className="contentSection section">
        <div style={styles.wrapper}>

          {/* Left — Info */}
          <div className="contact-info-column" style={styles.infoCol}>
            <div style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.infoIconWrap}>
                  <FontAwesomeIcon icon={faLocationDot} style={styles.infoIcon} />
                </div>
                <div>
                  <p style={styles.infoLabel}>{t.contact.address}</p>
                  <p style={styles.infoValue}>{t.footer.address}</p>
                </div>
              </div>

              <div style={styles.divider}></div>

              <div style={styles.infoItem}>
                <div style={styles.infoIconWrap}>
                  <FontAwesomeIcon icon={faEnvelope} style={styles.infoIcon} />
                </div>
                <div>
                  <p style={styles.infoLabel}>{t.contact.emailLabel}</p>
                  <a href="mailto:kahef.do@web.de" style={styles.infoLink}>
                    kahef.do@web.de
                  </a>
                </div>
                <div style={styles.infoIconWrap}>
                  <FontAwesomeIcon icon={faPhone} style={styles.infoIcon} />
                </div>
                <div>
                  <p style={styles.infoLabel}>{t.contact.phone}</p>
                  <a href="tel:+491731486046" style={styles.infoLink}>
                    +49 173 14 86 046
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div style={styles.mapWrap}>
              <iframe
                title={t.contact.mapTitle}
                src="https://www.google.com/maps?q=Bornstra%C3%9Fe+61,+44145+Dortmund&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-column" style={styles.formCol}>
            <div className="contact-form-heading">
              <div className="contact-form-kicker">
                <span className="contact-form-kicker-icon"><FontAwesomeIcon icon={faMessage} /></span>
                <span>{t.contact.emailLabel}</span>
              </div>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.subtitle}</p>
            </div>
            {status === "success" ? (
              <div style={styles.successBox}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="3x"
                  style={{ color: "#0A8F62", marginBottom: "16px" }}
                />
                <h3 style={styles.successTitle}>
                  {lang === "de"
                    ? "Nachricht gesendet!"
                    : "Message sent!"}
                </h3>
                <p style={styles.successSub}>
                  {lang === "de"
                    ? "Wir melden uns so schnell wie möglich bei Ihnen."
                    : "We will get back to you as soon as possible."}
                </p>
                <button
                  style={styles.resetBtn}
                  onClick={() => setStatus("idle")}
                >
                  {t.contact.newMessage}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" style={styles.form}>
                {/* Name */}
                <div className="contact-field" style={styles.fieldGroup}>
                  <label style={styles.label}>{t.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input"
                    style={styles.input}
                    placeholder={t.contact.name}
                  />
                </div>

                {/* Email */}
                <div className="contact-field" style={styles.fieldGroup}>
                  <label style={styles.label}>{t.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                    style={styles.input}
                    placeholder={t.contact.email}
                  />
                </div>

                {/* Message */}
                <div className="contact-field contact-field-message" style={styles.fieldGroup}>
                  <label style={styles.label}>{t.contact.message}</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-input"
                    style={{ ...styles.input, resize: "vertical" }}
                    placeholder={t.contact.message}
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p style={styles.errorMsg}>
                    {lang === "de"
                      ? "Fehler beim Senden. Bitte versuche es erneut."
                      : "Error sending message. Please try again."}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="contact-submit"
                  style={styles.submitBtn}
                  disabled={status === "sending"}
                >
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ marginRight: "8px" }}
                  />
                  {status === "sending" ? t.contact.sending : t.contact.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Impressum */}
      <section className="section" style={styles.impressumSection}>
        <div className="contact-impressum" style={styles.impressumBox}>
          <h2 style={styles.impressumTitle}>{t.contact.impressumTitle}</h2>
          <p style={styles.impressumLine}>
            <strong>{t.contact.accountHolder}:</strong> KAHEF - Kamerun Heritage Foundation e.V.
          </p>
          <p style={styles.impressumLine}>Bornstraße 61</p>
          <p style={styles.impressumLine}>44145 Dortmund</p>
          <p style={styles.impressumLine}>{t.contact.phoneNumber}</p>
          <p style={styles.impressumLine}>
            {t.contact.emailShort}: <a href="mailto:kahef.do@web.de" style={styles.infoLink}>kahef.do@web.de</a>
          </p>
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
    marginTop: "8px",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "flex-start",
  },
  infoCol: {
    flex: "1 1 280px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    padding: "28px",
    borderTop: "4px solid #0A8F62",
  },
  infoItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
  },
  infoIconWrap: {
    width: "44px",
    height: "44px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "44px",
  },
  infoIcon: {
    color: "#0A8F62",
  },
  infoLabel: {
    fontSize: "0.75rem",
    fontWeight: "700",
    color: "#0A8F62",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "4px",
  },
  infoValue: {
    fontSize: "0.95rem",
    color: "#1B2922",
    lineHeight: "1.6",
  },
  infoLink: {
    fontSize: "0.95rem",
    color: "#1B2922",
    textDecoration: "none",
    fontWeight: "600",
  },
  divider: {
    height: "1px",
    backgroundColor: "#C8DED1",
    margin: "20px 0",
  },
  mapWrap: {
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid #C8DED1",
  },
  formCol: {
    flex: "2 1 340px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: "700",
    color: "#1B2922",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  input: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1.5px solid #C8DED1",
    fontSize: "0.95rem",
    color: "#1B2922",
    outline: "none",
    fontFamily: "'Segoe UI', sans-serif",
    transition: "border 0.2s",
    backgroundColor: "#EAF4ED",
  },
  submitBtn: {
    backgroundColor: "#0A8F62",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "30px",
    padding: "14px 32px",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s",
  },
  errorMsg: {
    color: "#cc0000",
    fontSize: "0.9rem",
    backgroundColor: "#fff0f0",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #ffcccc",
  },
  successBox: {
    textAlign: "center",
    padding: "60px 20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  successTitle: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#1B2922",
    marginBottom: "10px",
  },
  successSub: {
    fontSize: "0.95rem",
    color: "#5B6A62",
    marginBottom: "24px",
  },
  resetBtn: {
    backgroundColor: "#0E5A3C",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "30px",
    padding: "12px 28px",
    fontWeight: "700",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  donationBox: {
    maxWidth: "700px",
    margin: "50px auto 0",
    backgroundColor: "#FFFFFF",
    border: "2px solid #0A8F62",
    borderRadius: "14px",
    padding: "32px",
  },
  impressumSection: {
    paddingTop: "0",
  },
  impressumBox: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "28px",
    backgroundColor: "#F4FAF6",
    borderTop: "4px solid #0A8F62",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
  },
  impressumTitle: {
    color: "#12372A",
    fontSize: "1.3rem",
    fontWeight: "800",
    marginBottom: "16px",
  },
  impressumLine: {
    color: "#1B2922",
    fontSize: "0.95rem",
    lineHeight: "1.7",
  },
  donationHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "6px",
  },
  donationTitle: {
    fontSize: "1.4rem",
    fontWeight: "800",
    color: "#1B2922",
  },
  donationSubtitle: {
    fontSize: "0.95rem",
    color: "#0A8F62",
    fontWeight: "700",
    marginBottom: "18px",
  },
  donationDetails: {
    backgroundColor: "#EAF4ED",
    borderRadius: "10px",
    padding: "18px 20px",
    marginBottom: "16px",
  },
  donationLine: {
    fontSize: "0.9rem",
    color: "#1B2922",
    lineHeight: "1.9",
    fontFamily: "monospace",
  },
  donationNote: {
    fontSize: "0.85rem",
    color: "#5B6A62",
    fontStyle: "italic",
    lineHeight: "1.6",
  },
};

export default Contact;
