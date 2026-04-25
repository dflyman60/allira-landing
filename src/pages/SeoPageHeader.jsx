import NavigationMenu from "./NavigationMenu";

export default function SeoPageHeader({ pageName }) {
  return (
    <div style={seoHeaderStyle}>
      <div style={seoBrandStackStyle}>
        <img
          src="/branding/logo-primary.png"
          alt="Allira"
          style={seoLogoStyle}
        />
        <div style={seoMetaLineStyle}>
          <span style={seoLogoTaglineStyle}>
            Better job matching, built on signals
          </span>
          <span style={seoMetaDividerStyle}>—</span>
          <span style={seoPageNameStyle}>{pageName}</span>
        </div>
        <a href="/" style={seoBreadcrumbStyle}>
          ← Allira
        </a>
      </div>

      <NavigationMenu />
    </div>
  );
}

const seoHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
  marginBottom: "28px",
};

const seoBrandStackStyle = {
  display: "flex",
  flexDirection: "column",
  lineHeight: 1.1,
};

const seoLogoStyle = {
  height: 30,
  width: 110,
  display: "block",
  objectFit: "contain",
};

const seoLogoTaglineStyle = {
  fontSize: 11,
  color: "#8ea0c2",
  letterSpacing: 0.3,
};

const seoMetaLineStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexWrap: "wrap",
  marginTop: 4,
  marginLeft: "12px",
};

const seoMetaDividerStyle = {
  color: "#8ea0c2",
  fontSize: 11,
};

const seoPageNameStyle = {
  color: "#9fb0cf",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: 0.6,
  fontWeight: 700,
};

const seoBreadcrumbStyle = {
  color: "#9fb0cf",
  fontSize: "14px",
  textDecoration: "none",
  marginTop: "6px",
  marginLeft: "12px",
  width: "fit-content",
};
