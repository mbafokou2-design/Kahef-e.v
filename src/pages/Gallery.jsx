import { useLang } from "../context/LanguageContext";

const Gallery = () => {
  const { t, lang } = useLang();

  const emptyMsg =
    lang === "de"
      ? "Fotos folgen — in der Dokumentation wurden keine Bilder angegeben."
      : "Photos coming soon — no images were specified in the documentation.";

  return (
    <div>
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.gallery.title}</h1>
        <div className="section-underline"></div>
        <p style={styles.pageSubtitle}>{t.gallery.subtitle}</p>
      </section>

      <section className="section">
        <div style={styles.emptyBox}>
          <p style={styles.emptyText}>{emptyMsg}</p>
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
    marginTop: "8px",
  },
  emptyBox: {
    width: "100%",
    maxWidth: "800px",
    minHeight: "200px",
    margin: "0 auto",
    border: "2px dashed #C9974A",
    borderRadius: "14px",
    backgroundColor: "#FBF7EF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 24px",
  },
  emptyText: {
    color: "#5F6B65",
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: "1.6",
  },
};

export default Gallery;
