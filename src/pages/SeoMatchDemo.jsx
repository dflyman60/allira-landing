import { useState } from "react";

const DEMO_MATCHES_BY_PAGE = {
  awsJobs: [
    {
      title: "AWS Cloud Engineer",
      fit: 96,
      confidence: "High",
      ambiguity: "Low",
      why: "Strong AWS infrastructure, cloud operations, and platform signal alignment.",
      signals: ["AWS", "cloud infrastructure", "IAM", "Terraform"],
    },
    {
      title: "AWS Solutions Architect",
      fit: 91,
      confidence: "High",
      ambiguity: "Medium",
      why: "Architecture ownership, AWS service design, and cloud strategy signals match.",
      signals: ["solutions architecture", "AWS", "system design", "scalability"],
    },
    {
      title: "AWS DevOps Engineer",
      fit: 88,
      confidence: "Medium",
      ambiguity: "Medium",
      why: "CI/CD, infrastructure automation, and AWS delivery patterns are present.",
      signals: ["DevOps", "CI/CD", "Terraform", "cloud automation"],
    },
  ],
  awsMigration: [
    {
      title: "Senior AWS Migration Engineer",
      fit: 97,
      confidence: "High",
      ambiguity: "Low",
      why: "Direct AWS migration and modernization signals align with the page intent.",
      signals: ["AWS migration", "application migration", "Terraform", "modernization"],
    },
    {
      title: "Cloud Migration Specialist",
      fit: 92,
      confidence: "High",
      ambiguity: "Medium",
      why: "Migration planning, cloud transformation, and infrastructure transition signals match.",
      signals: ["cloud migration", "planning", "cutover", "transformation"],
    },
    {
      title: "Application Migration Engineer",
      fit: 89,
      confidence: "Medium",
      ambiguity: "Medium",
      why: "Application migration responsibilities are present even with a broader engineering title.",
      signals: ["application migration", "AWS", "dependency mapping", "testing"],
    },
  ],
  cloudEngineer: [
    {
      title: "AWS Cloud Engineer",
      fit: 95,
      confidence: "High",
      ambiguity: "Low",
      why: "AWS services, networking, IAM, and infrastructure responsibilities line up clearly.",
      signals: ["AWS", "VPC", "IAM", "cloud infrastructure"],
    },
    {
      title: "Cloud Infrastructure Engineer",
      fit: 91,
      confidence: "High",
      ambiguity: "Medium",
      why: "Infrastructure, compute, storage, and Terraform signals fit cloud engineering intent.",
      signals: ["Terraform", "compute", "storage", "networking"],
    },
    {
      title: "Cloud Operations Engineer",
      fit: 84,
      confidence: "Medium",
      ambiguity: "Medium",
      why: "Cloud operations overlap is strong, though less directly engineering-title aligned.",
      signals: ["cloud operations", "monitoring", "AWS", "incident response"],
    },
  ],
  devops: [
    {
      title: "AWS DevOps Engineer",
      fit: 95,
      confidence: "High",
      ambiguity: "Low",
      why: "AWS automation, CI/CD, and infrastructure-as-code signals are strongly aligned.",
      signals: ["AWS", "CI/CD", "Terraform", "automation"],
    },
    {
      title: "CI/CD Platform Engineer",
      fit: 88,
      confidence: "Medium",
      ambiguity: "Medium",
      why: "Pipeline and release automation signals align with DevOps delivery work.",
      signals: ["CI/CD", "release automation", "platform", "pipelines"],
    },
    {
      title: "Infrastructure Automation Engineer",
      fit: 86,
      confidence: "Medium",
      ambiguity: "Medium",
      why: "Terraform and automation signals suggest strong adjacent DevOps fit.",
      signals: ["Terraform", "IaC", "automation", "cloud infrastructure"],
    },
  ],
  platformEngineer: [
    {
      title: "Platform Engineer",
      fit: 94,
      confidence: "High",
      ambiguity: "Low",
      why: "Internal platform and reusable infrastructure signals match the page intent.",
      signals: ["platform engineering", "self-service", "developer workflows"],
    },
    {
      title: "Kubernetes Platform Engineer",
      fit: 91,
      confidence: "High",
      ambiguity: "Medium",
      why: "Kubernetes platform ownership and cluster operations are strong platform signals.",
      signals: ["Kubernetes", "clusters", "platform", "containers"],
    },
    {
      title: "Internal Developer Platform Engineer",
      fit: 96,
      confidence: "High",
      ambiguity: "Low",
      why: "Developer experience and internal platform responsibilities are a direct match.",
      signals: ["developer experience", "IDP", "self-service", "golden paths"],
    },
  ],
  awsArchitect: [
    {
      title: "AWS Solutions Architect",
      fit: 96,
      confidence: "High",
      ambiguity: "Low",
      why: "AWS architecture, service design, and scalability signals are directly aligned.",
      signals: ["AWS architecture", "system design", "scalability", "reliability"],
    },
    {
      title: "Cloud Architecture Lead",
      fit: 90,
      confidence: "High",
      ambiguity: "Medium",
      why: "Architecture leadership and cloud design patterns match the page intent.",
      signals: ["cloud architecture", "leadership", "design patterns"],
    },
    {
      title: "Enterprise Cloud Architect",
      fit: 87,
      confidence: "Medium",
      ambiguity: "Medium",
      why: "Enterprise cloud strategy is aligned, though broader than AWS-only work.",
      signals: ["enterprise architecture", "cloud strategy", "stakeholders"],
    },
  ],
  infrastructureEngineer: [
    {
      title: "Cloud Infrastructure Engineer",
      fit: 94,
      confidence: "High",
      ambiguity: "Low",
      why: "Cloud infrastructure, networking, compute, and storage signals are strong.",
      signals: ["cloud infrastructure", "networking", "compute", "storage"],
    },
    {
      title: "Systems Infrastructure Engineer",
      fit: 88,
      confidence: "Medium",
      ambiguity: "Medium",
      why: "Systems and reliability responsibilities are adjacent to cloud infrastructure work.",
      signals: ["Linux", "systems", "reliability", "networking"],
    },
    {
      title: "Terraform Infrastructure Engineer",
      fit: 91,
      confidence: "High",
      ambiguity: "Low",
      why: "Infrastructure-as-code and Terraform signals directly fit infrastructure engineering.",
      signals: ["Terraform", "IaC", "AWS", "automation"],
    },
  ],
  sre: [
    {
      title: "Site Reliability Engineer",
      fit: 95,
      confidence: "High",
      ambiguity: "Low",
      why: "Reliability ownership, incident response, and observability signals are direct matches.",
      signals: ["SRE", "incident response", "SLOs", "observability"],
    },
    {
      title: "Cloud Reliability Engineer",
      fit: 90,
      confidence: "High",
      ambiguity: "Medium",
      why: "Cloud reliability and production health responsibilities align strongly.",
      signals: ["cloud reliability", "monitoring", "production health"],
    },
    {
      title: "Observability Engineer",
      fit: 84,
      confidence: "Medium",
      ambiguity: "Medium",
      why: "Observability is a strong reliability signal, though narrower than a full SRE role.",
      signals: ["metrics", "logs", "traces", "dashboards"],
    },
  ],
  cloudMigration: [
    {
      title: "Cloud Migration Engineer",
      fit: 95,
      confidence: "High",
      ambiguity: "Low",
      why: "Cloud migration, modernization, and migration execution signals are direct matches.",
      signals: ["cloud migration", "modernization", "cutover", "planning"],
    },
    {
      title: "Application Migration Specialist",
      fit: 91,
      confidence: "High",
      ambiguity: "Medium",
      why: "Application migration and dependency planning align with migration work.",
      signals: ["application migration", "dependency mapping", "testing"],
    },
    {
      title: "Data Migration Engineer",
      fit: 86,
      confidence: "Medium",
      ambiguity: "Medium",
      why: "Data migration is adjacent to broader cloud migration and modernization programs.",
      signals: ["data migration", "database migration", "validation"],
    },
  ],
};

function SeoDemoCard({ match }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={cardPerspectiveStyle}>
      <div
        onClick={() => setFlipped((v) => !v)}
        style={{
          ...cardFlipStyle,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div style={{ ...cardSideStyle, backfaceVisibility: "hidden" }}>
          <div style={cardTitleStyle}>{match.title}</div>
          <div style={fitPillStyle}>{match.fit}% fit</div>
          <p style={cardTextStyle}>{match.why}</p>
          <div style={cardHintStyle}>Tap to view rationale</div>
        </div>

        <div
          style={{
            ...cardSideStyle,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div style={backEyebrowStyle}>Match Rationale</div>
          <div style={cardTitleStyle}>{match.title}</div>
          <p style={cardTextStyle}>Why this matched: {match.why}</p>
          <div style={signalWrapStyle}>
            {match.signals.map((signal) => (
              <span key={signal} style={signalChipStyle}>
                {signal}
              </span>
            ))}
          </div>
          <div style={metricGridStyle}>
            <div style={metricBoxStyle}>Fit<br />{match.fit}%</div>
            <div style={metricBoxStyle}>Confidence<br />{match.confidence}</div>
            <div style={metricBoxStyle}>Ambiguity<br />{match.ambiguity}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SeoMatchDemo({ pageKey, jobCategory }) {
  const [showMatches, setShowMatches] = useState(false);
  const matches = DEMO_MATCHES_BY_PAGE[pageKey] || [];

  function handleFindMatches() {
    setShowMatches((current) => {
      const next = !current;
      if (next) {
        window.gtag?.("event", "seo_find_matches_click", {
          event_category: "engagement",
          event_label: window.location.pathname,
          job_category: jobCategory,
        });
      }
      return next;
    });
  }

  return (
    <section style={demoSectionStyle}>
      <div style={demoHeaderStyle}>
        <div>
          <div style={demoEyebrowStyle}>Interactive Preview</div>
          <h2 style={demoTitleStyle}>Preview signal-based matches</h2>
        </div>
        <button type="button" onClick={handleFindMatches} style={demoButtonStyle}>
          Find Matches {showMatches ? "↓" : "↑"}
        </button>
      </div>

      {showMatches && (
        <div style={demoGridStyle}>
          {matches.map((match) => (
            <SeoDemoCard key={match.title} match={match} />
          ))}
        </div>
      )}
    </section>
  );
}

const demoSectionStyle = {
  marginBottom: "40px",
  padding: "24px",
  borderRadius: "18px",
  background: "linear-gradient(180deg,#121933 0%,#0f1630 100%)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const demoHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap",
};

const demoEyebrowStyle = {
  color: "#8ea0c2",
  fontSize: "12px",
  textTransform: "uppercase",
  marginBottom: "8px",
};

const demoTitleStyle = {
  fontSize: "24px",
  margin: 0,
};

const demoButtonStyle = {
  padding: "14px 20px",
  background: "#4f7cff",
  color: "#fff",
  borderRadius: "10px",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
};

const demoGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "16px",
  marginTop: "20px",
};

const cardPerspectiveStyle = {
  perspective: 1200,
  minHeight: 365,
};

const cardFlipStyle = {
  position: "relative",
  minHeight: 365,
  transformStyle: "preserve-3d",
  transition: "transform .58s cubic-bezier(.22,1,.36,1)",
  cursor: "pointer",
};

const cardSideStyle = {
  position: "absolute",
  inset: 0,
  padding: "18px 18px 34px",
  borderRadius: "16px",
  background: "linear-gradient(180deg,#151d3b 0%,#0b1020 100%)",
  border: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 18px 40px rgba(0,0,0,.22)",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  overflow: "hidden",
};

const cardTitleStyle = {
  color: "#fff",
  fontSize: "20px",
  fontWeight: 800,
  lineHeight: 1.2,
  marginBottom: "12px",
  minHeight: "48px",
};

const fitPillStyle = {
  width: "fit-content",
  padding: "7px 10px",
  borderRadius: 999,
  background: "rgba(79,124,255,.16)",
  color: "#9cb8ff",
  fontSize: "12px",
  fontWeight: 800,
  marginBottom: "14px",
};

const cardTextStyle = {
  color: "#cdd7ea",
  lineHeight: 1.5,
  fontSize: "14px",
};

const cardHintStyle = {
  color: "#8ea0c2",
  fontSize: "13px",
  marginTop: "auto",
};

const backEyebrowStyle = {
  color: "#8ea0c2",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: 0.7,
  marginBottom: "8px",
  fontWeight: 700,
};

const signalWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "18px",
  marginBottom: "14px",
};

const signalChipStyle = {
  padding: "6px 9px",
  borderRadius: 999,
  backgroundColor: "rgba(79,124,255,.10)",
  border: "1px solid rgba(79,124,255,.18)",
  color: "#c8d7ff",
  fontSize: "12px",
  fontWeight: 600,
};

const metricGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "8px",
  marginTop: "17px",
  marginBottom: "12px",
};

const metricBoxStyle = {
  backgroundColor: "#0f1730",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: "12px",
  padding: "9px 8px",
  color: "#d7deec",
  fontSize: "11px",
  lineHeight: 1.5,
  minWidth: 0,
};
