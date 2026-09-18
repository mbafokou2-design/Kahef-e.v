import { useLang } from "../context/LanguageContext";

const siteImages = import.meta.glob("../assets/images/**/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
  query: "?url",
});

const galleryImages = [
  ...Object.entries(siteImages)
    .filter(([path]) => !path.endsWith("/logo.png"))
    .map(([_path, url]) => ({
    key: "photo",
    url,
    })),
  { key: "president", url: "/images/team/president.jpeg" },
  { key: "vicePresident", url: "/images/team/vice-president.jpeg" },
  { key: "secretaryGeneral", url: "/images/team/secretary-general.jpeg" },
  { key: "community", url: "/images/team/Commnunity.jpeg" },
  { key: "communityEvent", url: "/images/team/WhatsApp%20Image%202026-09-17%20at%2014.20.49.jpeg" },
];

const Gallery = () => {
  const { t, lang } = useLang();

  const _emptyMsg =
    lang === "de"
      ? "Fotos folgen — in der Dokumentation wurden keine Bilder angegeben."
      : "Photos coming soon — no images were specified in the documentation.";

  return (
    <div>
      <section className="pageHeader" style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.gallery.title}</h1>
        <div className="section-underline"></div>
        <p style={styles.pageSubtitle}>{t.gallery.subtitle}</p>
      </section>

      <section className="contentSection section">
        <div style={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <figure
              className={`card ${image.key === "community" ? "galleryFeatured" : ""}`}
              key={image.url}
              style={styles.galleryCard}
            >
              <img
                src={image.url}
                alt={t.gallery[image.key]}
                style={{
                  ...styles.galleryImage,
                  ...(image.key === "community" ? styles.featuredGalleryImage : {}),
                }}
              />
              <figcaption style={styles.galleryCaption}>{t.gallery[image.key]}</figcaption>
            </figure>
          ))}
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
  emptyBox: {
    width: "100%",
    maxWidth: "800px",
    minHeight: "200px",
    margin: "0 auto",
    border: "2px dashed #0A8F62",
    borderRadius: "14px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 24px",
  },
  emptyText: {
    color: "#5B6A62",
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: "1.6",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
  },
  galleryCard: {
    overflow: "hidden",
    padding: "0",
  },
  galleryImage: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    backgroundColor: "#FFFFFF",
  },
  featuredGalleryImage: {
    height: "360px",
  },
  galleryCaption: {
    padding: "14px 16px",
    color: "#1B2922",
    fontSize: "0.9rem",
    fontWeight: "700",
  },
};

export default Gallery;
