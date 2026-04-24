import { useMemo, useState } from "react";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

const DEMO_QUERY_CHIPS = ["AWS migration", "engineer", "senior"];

const DEMO_MATCHES = [
  {
    id: "job-1",
    title: "Senior AWS Migration Engineer",
    company: "Example Systems",
    fit: 100,
    label: "Strong Match",
    location: "US Fairfax, VA",
    workMode: "Onsite",
    seniority: "Senior",
    confidence: "High",
    ambiguity: "Low",
    whyShort:
      "Strong alignment with AWS migration and infrastructure modernization work.",
    signals: [
      "amazon web services",
      "cloud migration",
      "application migration",
      "database migration",
      "terraform",
    ],
    rationale: [
      "Direct match to AWS migration intent",
      "Strong overlap with cloud modernization responsibilities",
      "Title aligns closely with engineer + senior query terms",
    ],
    backSummary:
      "This role is a direct fit for the search intent and carries the strongest AWS migration alignment.",
    previewTags: ["AWS", "Migration", "Terraform", "Cloud"],
  },
  {
    id: "job-2",
    title: "Manager, Solution Architect",
    company: "XxXx",
    fit: 100,
    label: "Adjacent",
    location: "Los Angeles, CA",
    workMode: "Onsite",
    seniority: "Senior",
    confidence: "Low",
    ambiguity: "High",
    whyShort:
      "Strong evidence, but the title is broader and less migration-centric.",
    signals: [
      "application migration",
      "cloud migration",
      "database migration and conversion",
      "amazon web services",
      "aws lambda",
      "amazon ecs",
      "amazon eks",
    ],
    rationale: [
      "Strong migration-related signals appear in the role",
      "Architecture responsibilities overlap with migration delivery",
      "Title suggests a broader solution role rather than a direct migration engineer track",
    ],
    backSummary:
      "This is a strong adjacent fit with meaningful migration overlap, but the role title is broader than the search intent.",
    previewTags: ["Migration", "Architecture", "AWS", "Platform"],
  },
  {
    id: "job-3",
    title: "Senior Cloud Solution Architect",
    company: "Northwind Federal",
    fit: 76,
    label: "Partial Match",
    location: "US Austin, Texas Metropolitan",
    workMode: "Onsite",
    seniority: "Senior",
    confidence: "Medium",
    ambiguity: "Medium",
    whyShort:
      "Strong senior cloud overlap, but the role emphasizes Azure rather than AWS.",
    signals: [
      "cloud architecture",
      "solution architecture",
      "platform engineering",
      "migration planning",
      "azure",
    ],
    rationale: [
      "Good senior cloud alignment",
      "Architecture scope overlaps with transformation work",
      "Lower fit because the cloud platform emphasis is Azure, not AWS",
    ],
    backSummary:
      "Relevant senior cloud experience, but weaker alignment because the platform emphasis is Azure instead of AWS.",
    previewTags: ["Azure", "Architecture", "Cloud", "Senior"],
  },
];

function FitGauge({ value, size = 92, color = "#9cd7b1", label = "FIT" }) {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div
      style={{
        width: size,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <svg
        width={size}
        height={size * 0.62}
        viewBox="0 0 100 58"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="9"
          strokeLinecap="round"
          pathLength="100"
        />
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray={`${clampedValue} 100`}
        />
      </svg>

      <div style={{ textAlign: "center", marginTop: "-6px" }}>
        <div style={{ fontSize: "11px", color: "#8ea0c2", letterSpacing: "0.7px" }}>
          {label}
        </div>
        <div style={{ fontSize: "32px", fontWeight: 800, lineHeight: 1 }}>
          {value}%
        </div>
      </div>
    </div>
  );
}

function QueryChip({ children }) {
  return <span style={queryChipStyle}>{children}</span>;
}

function BackMetric({ label, value }) {
  return (
    <div style={backMetricStyle}>
      <div style={metricLabelStyle}>{label}</div>
      <div style={{ color: "#ffffff", fontSize: "16px", fontWeight: 800 }}>{value}</div>
    </div>
  );
}

function DetailMiniPanel({ match, onClose }) {
  return (
    <div onClick={(e) => e.stopPropagation()} style={miniPanelStyle}>
      <div style={miniPanelHeaderStyle}>
        <div style={miniPanelTitleStyle}>More Detail</div>
        <button type="button" onClick={onClose} style={miniCloseButtonStyle}>
          ✕
        </button>
      </div>

      <div style={backSectionLabelStyle}>Signals</div>
      <div style={signalWrapStyle}>
        {match.signals.map((signal) => (
          <span key={signal} style={signalChipStyle}>
            {signal}
          </span>
        ))}
      </div>

      <div style={metricGridStyle}>
        <BackMetric label="Fit" value={`${match.fit}%`} />
        <BackMetric label="Confidence" value={match.confidence} />
        <BackMetric label="Ambiguity" value={match.ambiguity} />
      </div>
    </div>
  );
}

function MatchFlipCard({ match }) {
  const [flipped, setFlipped] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const chipTone =
    match.label === "Strong Match"
      ? { bg: "rgba(124, 232, 172, 0.14)", color: "#9fe0b5" }
      : match.label === "Adjacent"
      ? { bg: "rgba(255, 213, 103, 0.14)", color: "#ffe092" }
      : { bg: "rgba(159, 176, 207, 0.16)", color: "#c4d0e7" };

  function handleFlip() {
    setShowMore(false);
    setFlipped((prev) => !prev);
  }

  return (
    <div style={{ perspective: "1200px", minHeight: "430px" }}>
      <div
        onClick={handleFlip}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "430px",
          transformStyle: "preserve-3d",
          transition: "transform 0.58s cubic-bezier(0.22, 1, 0.36, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          cursor: "pointer",
        }}
      >
        <div style={{ ...cardSideStyle, backfaceVisibility: "hidden" }}>
          <div style={cardHeaderStyle}>
            <div style={{ minWidth: 0 }}>
              <div style={cardTitleStyle}>{match.title}</div>
              <div style={cardCompanyStyle}>{match.company}</div>
            </div>

            <div
              style={{
                ...labelPillStyle,
                backgroundColor: chipTone.bg,
                color: chipTone.color,
              }}
            >
              {match.label}
            </div>
          </div>

          <div style={dividerStyle} />

          <div style={summaryGridStyle}>
            <div>
              <div style={locationStyle}>{match.location}</div>
              <div style={metaStyle}>{match.workMode}</div>
              <div style={metaStyle}>{match.seniority}</div>
            </div>

            <FitGauge value={match.fit} />
          </div>

          <div style={whyShortStyle}>{match.whyShort}</div>

          <div style={tagWrapStyle}>
            {match.previewTags.map((tag) => (
              <span key={tag} style={tagChipStyle}>
                {tag}
              </span>
            ))}
          </div>

          <div style={cardFooterStyle}>
            <div style={hintStyle}>Tap to view rationale</div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(true);
              }}
              style={secondaryButtonStyle}
            >
              Flip Card
            </button>
          </div>
        </div>

        <div
          style={{
            ...cardSideStyle,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            overflow: "hidden",
          }}
        >
          {showMore && <DetailMiniPanel match={match} onClose={() => setShowMore(false)} />}

          <div style={backHeaderStyle}>
            <div>
              <div style={backEyebrowStyle}>Match Rationale</div>
              <div style={backTitleStyle}>{match.title}</div>
              <div style={cardCompanyStyle}>
                {match.company} · {match.location}
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowMore(true);
              }}
              style={secondaryButtonStyle}
            >
              More
            </button>
          </div>

          <div
            style={{
              ...labelPillStyle,
              display: "inline-block",
              backgroundColor: chipTone.bg,
              color: chipTone.color,
              marginBottom: "14px",
            }}
          >
            {match.label}
          </div>

          <div style={backSummaryStyle}>{match.backSummary}</div>

          <div style={backSectionLabelStyle}>Why this matched</div>
          <div style={{ display: "grid", gap: "9px", marginBottom: "14px" }}>
            {match.rationale.map((item) => (
              <div key={item} style={rationaleLineStyle}>
                ✔ {item}
              </div>
            ))}
          </div>

          <div style={cardFooterStyle}>
            <div style={hintStyle}>Tap again to return</div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowMore(false);
                setFlipped(false);
              }}
              style={secondaryButtonStyle}
            >
              Back to Front
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [queryValue, setQueryValue] = useState(DEMO_QUERY_CHIPS.join(", "));
  const [showResults, setShowResults] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const displayResults = useMemo(() => {
    if (!showResults) return [];
    return DEMO_MATCHES;
  }, [showResults]);

  function handleFindMatches() {
    setShowResults(true);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/api/early-access`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setFormStatus({
        type: "success",
        message: "Thanks — your early access request has been received.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div style={pageStyle}>
      <style>
        {`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(14px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div style={pageInnerStyle}>
        <header style={headerStyle}>
<div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
  <img
    src="/branding/logo-primary.png"
    alt="Allira"
    style={{
      height: "30px",
      width: "110px",
      display: "block",
    }}
  />

  <div
    style={{
      fontSize: "11px",
      color: "#8ea0c2",
      marginTop: "4px",
      letterSpacing: "0.3px",
    }}
  >
    Better job matching, built on signals
  </div>
</div>

          <button style={topButtonStyle}>Interactive Preview</button>
        </header>

        <section style={heroSectionStyle}>
          <div>
            <div style={eyebrowStyle}>Precision job matching for cloud engineers</div>

            <h1 style={heroTitleStyle}>
              Find cloud roles that actually fit your experience
            </h1>

            <p style={heroTextStyle}>
              Allira cuts through job noise using signal-based matching, so you see
              roles that fit your background instead of generic keyword results.
            </p>

            <div style={chipRowStyle}>
              {DEMO_QUERY_CHIPS.map((chip) => (
                <QueryChip key={chip}>{chip}</QueryChip>
              ))}
            </div>

            <div style={searchRowStyle}>
              <input
                value={queryValue}
                onChange={(e) => setQueryValue(e.target.value)}
                placeholder="AWS migration, engineer, senior"
                style={searchInputStyle}
              />
              <button onClick={handleFindMatches} style={primaryButtonStyle}>
                Find Matches
              </button>
            </div>

            <div style={helperTextStyle}>Preview intent: AWS migration, engineer, senior</div>
            <div style={helperTextStyle}>
              Curated product preview showing how Allira interprets intent
            </div>
            <div style={smallHelperTextStyle}>
              Live product experience and deeper matching logic coming next
            </div>
          </div>

          <div style={exampleCardOuterStyle}>
            <div style={exampleLabelStyle}>Example match</div>

            <div style={exampleCardInnerStyle}>
              <div style={exampleTitleStyle}>Senior AWS Migration Engineer</div>

              <div style={examplePillStyle}>Strong Match</div>

              <div style={exampleTextStyle}>
                Why this matches: Strong alignment with AWS migration and
                infrastructure modernization
              </div>

              <div style={exampleTextStyle}>Matches: AWS, Cloud Migration, Terraform</div>
              <div style={exampleMutedTextStyle}>
                Lower friction, direct role/title alignment
              </div>

              <div style={tagWrapStyle}>
                {["AWS", "Migration", "Terraform", "Cloud"].map((tag) => (
                  <span key={tag} style={tagChipStyle}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={pillarsGridStyle}>
          {[
            {
              title: "Real Matching",
              text: "Allira looks beyond job titles and keyword stuffing to surface roles that actually align with your experience.",
            },
            {
              title: "Explainable Results",
              text: "See why a role matched, which signals were found, and what makes it worth your time.",
            },
            {
              title: "Built for Cloud",
              text: "Focused on AWS, cloud operations, DevOps, platform, and adjacent engineering roles from day one.",
            },
          ].map((item) => (
            <div key={item.title} style={pillarCardStyle}>
              <div style={pillarTitleStyle}>{item.title}</div>
              <div style={pillarTextStyle}>{item.text}</div>
            </div>
          ))}
        </section>

        {showResults && (
          <section style={{ marginBottom: "64px" }}>
            <div style={resultsHeaderStyle}>
              <div>
                <div style={eyebrowStyle}>Interactive Preview</div>
                <h2 style={resultsTitleStyle}>Matches for “{queryValue}”</h2>
              </div>

              <div style={resultsSubTextStyle}>
                Curated results showing how Allira can distinguish direct, adjacent, and
                partial role alignment.
              </div>
            </div>

            <div style={resultsGridStyle}>
              {displayResults.map((match) => (
                <MatchFlipCard key={match.id} match={match} />
              ))}
            </div>
          </section>
        )}

        <section style={formSectionStyle}>
          <div style={eyebrowStyle}>Early Access</div>

          <h2 style={formTitleStyle}>Start with better signal</h2>

          <p style={formTextStyle}>
            Join the early access list and be among the first to experience signal-based
            matching for cloud and platform roles.
          </p>

          <form onSubmit={handleSubmit} style={formGridStyle}>
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleFormChange}
              required
              style={formInputStyle}
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormChange}
              required
              style={formInputStyle}
            />

            <input
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleFormChange}
              style={formInputStyle}
            />

            <textarea
              name="message"
              placeholder="What roles are you interested in?"
              value={formData.message}
              onChange={handleFormChange}
              required
              rows={4}
              style={{
                ...formInputStyle,
                resize: "vertical",
                minHeight: "110px",
                fontFamily: "inherit",
                lineHeight: "1.5",
                paddingTop: "16px",
              }}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                ...primaryButtonStyle,
                opacity: isSubmitting ? 0.8 : 1,
              }}
            >
              {isSubmitting ? "Submitting..." : "Get Early Access"}
            </button>
          </form>

          {formStatus.message && (
            <div
              style={{
                marginTop: "14px",
                color: formStatus.type === "success" ? "#9fe0b5" : "#ff9f9f",
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              {formStatus.message}
            </div>
          )}
        </section>

        <section style={howItWorksStyle}>
          <div style={eyebrowStyle}>How it works</div>

          <div style={howTitleStyle}>A cleaner path from intent to relevant jobs</div>

          <div style={howGridStyle}>
            {[
              "Describe the role you want in plain English or with targeted signals.",
              "Allira maps that intent to meaningful job signals and related roles.",
              "You get ranked cloud roles with clear reasons why they match.",
            ].map((text, index) => (
              <div key={index} style={howCardStyle}>
                <div style={stepBubbleStyle}>{index + 1}</div>
                <div style={{ color: "#d7deec", lineHeight: 1.6 }}>{text}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const pageStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#0b1020",
  color: "#f5f7fb",
  minHeight: "100vh",
  margin: 0,
};

const pageInnerStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "32px 24px 80px",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "56px",
  gap: "16px",
  flexWrap: "wrap",
};

const topButtonStyle = {
  backgroundColor: "transparent",
  color: "#f5f7fb",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "10px",
  padding: "10px 16px",
  cursor: "pointer",
  fontSize: "14px",
};

const heroSectionStyle = {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "32px",
  alignItems: "center",
  marginBottom: "64px",
  marginTop: "16px",
};

const eyebrowStyle = {
  display: "inline-block",
  fontSize: "12px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#93a4c3",
  marginBottom: "12px",
};

const heroTitleStyle = {
  fontSize: "56px",
  lineHeight: 1.05,
  margin: "0 0 16px 0",
  maxWidth: "700px",
  color: "#ffffff",
  fontWeight: 800,
};

const heroTextStyle = {
  fontSize: "18px",
  lineHeight: 1.6,
  color: "#b8c3d9",
  maxWidth: "620px",
  marginBottom: "20px",
};

const chipRowStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginBottom: "16px",
};

const queryChipStyle = {
  padding: "10px 14px",
  borderRadius: "999px",
  backgroundColor: "rgba(79,124,255,0.14)",
  color: "#bdd0ff",
  border: "1px solid rgba(79,124,255,0.22)",
  fontSize: "14px",
  fontWeight: 600,
};

const searchRowStyle = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginBottom: "10px",
};

const searchInputStyle = {
  flex: "1 1 320px",
  minWidth: "280px",
  padding: "16px 18px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  backgroundColor: "#121933",
  color: "#f5f7fb",
  fontSize: "16px",
  outline: "none",
};

const helperTextStyle = {
  color: "#9fb0cf",
  fontSize: "14px",
  marginBottom: "6px",
};

const smallHelperTextStyle = {
  color: "#7f91b3",
  fontSize: "13px",
};

const exampleCardOuterStyle = {
  background: "linear-gradient(180deg, #151d3b 0%, #0f1630 100%)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "20px",
  padding: "24px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
};

const exampleLabelStyle = {
  fontSize: "13px",
  color: "#8ea0c2",
  marginBottom: "14px",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const exampleCardInnerStyle = {
  backgroundColor: "#0b1020",
  borderRadius: "16px",
  padding: "20px",
  border: "1px solid rgba(255,255,255,0.08)",
};

const exampleTitleStyle = {
  fontSize: "22px",
  fontWeight: 700,
  marginBottom: "8px",
};

const examplePillStyle = {
  display: "inline-block",
  backgroundColor: "rgba(79,124,255,0.16)",
  color: "#9cb8ff",
  borderRadius: "999px",
  padding: "8px 12px",
  fontSize: "13px",
  fontWeight: 600,
  marginBottom: "18px",
};

const exampleTextStyle = {
  color: "#d7deec",
  marginBottom: "10px",
  fontSize: "15px",
  lineHeight: 1.5,
};

const exampleMutedTextStyle = {
  color: "#9eb0d0",
  marginBottom: "18px",
  fontSize: "15px",
};

const pillarsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "18px",
  marginBottom: "64px",
};

const pillarCardStyle = {
  backgroundColor: "#11182f",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "24px",
};

const pillarTitleStyle = {
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: "10px",
};

const pillarTextStyle = {
  color: "#aebbd5",
  lineHeight: 1.6,
  fontSize: "15px",
};

const resultsHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  alignItems: "center",
  marginBottom: "16px",
  flexWrap: "wrap",
};

const resultsTitleStyle = {
  fontSize: "36px",
  margin: 0,
  fontWeight: 800,
};

const resultsSubTextStyle = {
  color: "#9fb0cf",
  fontSize: "15px",
  maxWidth: "420px",
};

const resultsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "20px",
  animation: "fadeSlideIn 520ms ease-out both",
};

const cardSideStyle = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, #151d3b 0%, #0f1630 100%)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "22px",
  padding: "20px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
  display: "flex",
  flexDirection: "column",
};

const cardHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "flex-start",
  marginBottom: "14px",
};

const cardTitleStyle = {
  fontSize: "28px",
  fontWeight: 800,
  color: "#ffffff",
  lineHeight: 1.12,
  marginBottom: "6px",
};

const cardCompanyStyle = {
  color: "#9fb0cf",
  fontSize: "15px",
};

const labelPillStyle = {
  whiteSpace: "nowrap",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.6px",
  textTransform: "uppercase",
};

const dividerStyle = {
  height: "1px",
  backgroundColor: "rgba(255,255,255,0.16)",
  marginBottom: "14px",
};

const summaryGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "16px",
  alignItems: "center",
  marginBottom: "14px",
};

const locationStyle = {
  color: "#cdd7ea",
  fontSize: "15px",
  marginBottom: "7px",
};

const metaStyle = {
  color: "#9fb0cf",
  fontSize: "14px",
  marginBottom: "3px",
};

const whyShortStyle = {
  color: "#d7deec",
  marginBottom: "14px",
  fontSize: "15px",
  lineHeight: 1.5,
};

const tagWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const tagChipStyle = {
  padding: "8px 10px",
  borderRadius: "999px",
  backgroundColor: "#141c38",
  border: "1px solid rgba(255,255,255,0.08)",
  fontSize: "13px",
  color: "#c7d3eb",
};

const cardFooterStyle = {
  marginTop: "10px",
  paddingTop: "6px",
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "center",
};

const hintStyle = {
  color: "#8ea0c2",
  fontSize: "13px",
};

const backHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "12px",
};

const backEyebrowStyle = {
  fontSize: "12px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#93a4c3",
  marginBottom: "8px",
  fontWeight: 700,
};

const backTitleStyle = {
  fontSize: "25px",
  fontWeight: 800,
  color: "#ffffff",
  lineHeight: 1.14,
  marginBottom: "7px",
};

const backSummaryStyle = {
  color: "#d7deec",
  fontSize: "15px",
  lineHeight: 1.5,
  marginBottom: "16px",
  paddingRight: "8px",
};

const backSectionLabelStyle = {
  fontSize: "12px",
  color: "#8ea0c2",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  marginBottom: "8px",
  fontWeight: 700,
};

const rationaleLineStyle = {
  color: "#d7deec",
  fontSize: "14px",
  lineHeight: 1.45,
};

const miniPanelStyle = {
  position: "absolute",
  top: "16px",
  right: "16px",
  width: "320px",
  maxWidth: "calc(100% - 32px)",
  background: "linear-gradient(180deg, #101833 0%, #0b1228 100%)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "18px",
  padding: "18px",
  boxShadow: "0 22px 50px rgba(0,0,0,0.35)",
  zIndex: 3,
};

const miniPanelHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "14px",
  gap: "12px",
};

const miniPanelTitleStyle = {
  fontSize: "12px",
  color: "#93a4c3",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  fontWeight: 700,
};

const signalWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "16px",
};

const signalChipStyle = {
  padding: "7px 10px",
  borderRadius: "999px",
  backgroundColor: "rgba(79,124,255,0.10)",
  border: "1px solid rgba(79,124,255,0.18)",
  color: "#c8d7ff",
  fontSize: "12px",
  fontWeight: 600,
};

const metricGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
};

const backMetricStyle = {
  backgroundColor: "#0f1730",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "12px 12px",
};

const metricLabelStyle = {
  color: "#8ea0c2",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.7px",
  marginBottom: "4px",
  fontWeight: 700,
};

const formSectionStyle = {
  background: "linear-gradient(180deg, #11182f 0%, #0d1428 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "32px",
  marginBottom: "56px",
  maxWidth: "780px",
  marginLeft: "auto",
  marginRight: "auto",
};

const formTitleStyle = {
  fontSize: "34px",
  fontWeight: 800,
  margin: "0 0 12px 0",
};

const formTextStyle = {
  color: "#aebbd5",
  fontSize: "17px",
  lineHeight: 1.6,
  marginBottom: "22px",
};

const formGridStyle = {
  display: "grid",
  gap: "14px",
};

const formInputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  backgroundColor: "#121933",
  color: "#f5f7fb",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const howItWorksStyle = {
  background: "linear-gradient(180deg, #11182f 0%, #0d1428 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "32px",
  marginBottom: "56px",
};

const howTitleStyle = {
  fontSize: "34px",
  fontWeight: 700,
  marginBottom: "18px",
};

const howGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "18px",
};

const howCardStyle = {
  backgroundColor: "#0b1020",
  borderRadius: "16px",
  padding: "20px",
  border: "1px solid rgba(255,255,255,0.06)",
};

const stepBubbleStyle = {
  width: "34px",
  height: "34px",
  borderRadius: "999px",
  backgroundColor: "#4f7cff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  marginBottom: "14px",
};

const primaryButtonStyle = {
  padding: "16px 22px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: "#4f7cff",
  color: "white",
  fontWeight: 700,
  fontSize: "16px",
  cursor: "pointer",
};

const secondaryButtonStyle = {
  padding: "10px 14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.12)",
  backgroundColor: "transparent",
  color: "#dfe7f7",
  fontWeight: 700,
  fontSize: "13px",
  cursor: "pointer",
};

const miniCloseButtonStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.10)",
  backgroundColor: "transparent",
  color: "#dfe7f7",
  fontWeight: 700,
  fontSize: "14px",
  cursor: "pointer",
};
