import { useState } from "react";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "AWS Jobs", href: "/aws-jobs" },
  { label: "AWS Migration Jobs", href: "/aws-migration-jobs" },
  { label: "AWS Architect Jobs", href: "/aws-solutions-architect-jobs" },
  { label: "Cloud Engineer Jobs", href: "/cloud-engineer-jobs" },
  { label: "DevOps Jobs", href: "/devops-jobs" },
  { label: "Platform Engineer Jobs", href: "/platform-engineer-jobs" },
  { label: "Infrastructure Engineer Jobs", href: "/infrastructure-engineer-jobs" },
  { label: "SRE Jobs", href: "/site-reliability-engineer-jobs" },
  { label: "Cloud Migration Jobs", href: "/cloud-migration-jobs" },
];

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <div style={menuWrapStyle}>
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((v) => !v)}
        style={hamburgerButtonStyle}
      >
        <span style={hamburgerLineStyle} />
        <span style={hamburgerLineStyle} />
        <span style={hamburgerLineStyle} />
      </button>

      {isMenuOpen && (
        <div style={mobileMenuStyle}>
          {MENU_ITEMS.map((item) => {
            const isActive = item.href === currentPath;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (isActive) {
                    e.preventDefault();
                    return;
                  }
                  setIsMenuOpen(false);
                }}
                style={{
                  ...mobileMenuLinkStyle,
                  ...(isActive ? activeMenuLinkStyle : inactiveMenuLinkStyle),
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

const menuWrapStyle = {
  position: "relative",
  marginTop: "4px",
};

const hamburgerButtonStyle = {
  width: 42,
  height: 42,
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,.18)",
  backgroundColor: "rgba(18,25,51,.74)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
  cursor: "pointer",
};

const hamburgerLineStyle = {
  width: 18,
  height: 2,
  borderRadius: 999,
  backgroundColor: "#f5f7fb",
};

const mobileMenuStyle = {
  position: "absolute",
  top: "calc(100% + 10px)",
  right: 0,
  minWidth: 260,
  backgroundColor: "#121933",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: 14,
  padding: 8,
  boxShadow: "0 20px 45px rgba(0,0,0,.28)",
  zIndex: 20,
};

const mobileMenuLinkStyle = {
  display: "block",
  padding: "11px 12px",
  borderRadius: 10,
  textDecoration: "none",
  fontSize: 14,
};

const activeMenuLinkStyle = {
  color: "#8ea0c2",
  opacity: 0.65,
  pointerEvents: "none",
  cursor: "default",
  fontWeight: 800,
  backgroundColor: "rgba(255,255,255,.05)",
};

const inactiveMenuLinkStyle = {
  color: "#f5f7fb",
  opacity: 0.85,
  cursor: "pointer",
  fontWeight: 700,
};
