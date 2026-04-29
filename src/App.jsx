import { useMemo, useState } from "react";
import SeoHead from "./components/SeoHead";
import NavigationMenu from "./pages/NavigationMenu";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
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
  const clamped = Math.max(0, Math.min(100, value));

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
          strokeDasharray={`${clamped} 100`}
        />
      </svg>

      <div style={{ textAlign: "center", marginTop: "-6px" }}>
        <div
          style={{
            fontSize: "11px",
            color: "#8ea0c2",
            letterSpacing: "0.7px",
          }}
        >
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
      <div style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>
        {value}
      </div>
    </div>
  );
}

function FeatureIcon({ src }) {
  return (
    <div style={featureIconShellStyle}>
      <img src={src} alt="" style={{ width: 36, height: 36 }} />
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
        {match.signals.map((s) => (
          <span key={s} style={signalChipStyle}>
            {s}
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

  const tone =
    match.label === "Strong Match"
      ? { bg: "rgba(124,232,172,.14)", color: "#9fe0b5" }
      : match.label === "Adjacent"
        ? { bg: "rgba(255,213,103,.14)", color: "#ffe092" }
        : { bg: "rgba(159,176,207,.16)", color: "#c4d0e7" };

  function flip() {
    setShowMore(false);
    setFlipped((v) => !v);
  }

  return (
    <div style={{ perspective: 1200, minHeight: 510 }}>
      <div
        onClick={flip}
        style={{
          position: "relative",
          width: "100%",
          minHeight: 510,
          transformStyle: "preserve-3d",
          transition: "transform .58s cubic-bezier(.22,1,.36,1)",
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
                backgroundColor: tone.bg,
                color: tone.color,
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
            {match.previewTags.map((t) => (
              <span key={t} style={tagChipStyle}>
                {t}
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
          {showMore && (
            <DetailMiniPanel match={match} onClose={() => setShowMore(false)} />
          )}

          <div style={backContentStyle}>
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
                width: "fit-content",
                backgroundColor: tone.bg,
                color: tone.color,
                marginBottom: 14,
              }}
            >
              {match.label}
            </div>

            <div style={backSummaryStyle}>{match.backSummary}</div>

            <div style={backSectionLabelStyle}>Why this matched</div>

            <div style={{ display: "grid", gap: 9, marginBottom: 14 }}>
              {match.rationale.map((r) => (
                <div key={r} style={rationaleLineStyle}>
                  ✔ {r}
                </div>
              ))}
            </div>
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
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const displayResults = useMemo(
    () => (showResults ? DEMO_MATCHES : []),
    [showResults],
  );

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/api/early-access`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

      window.gtag?.("event", "early_access_submit", {
        event_category: "conversion",
        event_label: "early_access_form",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
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
      <SeoHead
        title="Allira | Signal-Based Job Matching for Cloud Engineers"
        description="Find cloud and AWS jobs that actually match your experience. Allira uses signal-based matching to surface relevant roles across migration, DevOps, and platform engineering."
      />

      <style>
        {`
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media(max-width:900px){
            .allira-hero-grid,
            .allira-results-grid,
            .allira-pillars-grid,
            .allira-how-grid,
            .allira-faq-grid {
              grid-template-columns:1fr!important;
            }

            .allira-hero-title {
              font-size:46px!important;
            }

            .allira-seo-intro {
              grid-template-columns:1fr!important;
            }
          }
        `}
      </style>

      <div style={orbOneStyle} />
      <div style={orbTwoStyle} />

      <div style={pageInnerStyle}>
        <header style={headerStyle}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <img
              src="/branding/logo-primary.png"
              alt="Allira"
              style={{
                height: 30,
                width: 110,
                display: "block",
                objectFit: "contain",
              }}
            />
            <div style={logoTaglineStyle}>
              Better job matching, built on signals <span style={logoMetaDividerStyle}>—</span>{" "}
              <span style={logoPageNameStyle}>Home</span>
            </div>
          </div>

          <div style={headerActionsStyle}>
            <button style={topButtonStyle}>Early access — results improving with real use</button>
            <NavigationMenu />
          </div>
        </header>

        <section className="allira-hero-grid" style={heroSectionStyle}>
          <div>
            <div style={eyebrowStyle}>
              Precision job matching for cloud engineers
            </div>

            <h1 className="allira-hero-title" style={heroTitleStyle}>
              Find cloud roles that actually fit your experience.
            </h1>

            <p style={heroTextStyle}>
              Allira uses signal-based job matching to help AWS and cloud
              engineers find roles aligned to their real experience—not just
              keywords.
            </p>

            <div style={chipRowStyle}>
              {DEMO_QUERY_CHIPS.map((c) => (
                <QueryChip key={c}>{c}</QueryChip>
              ))}
            </div>

            <div style={searchRowStyle}>
              <input
                value={queryValue}
                onChange={(e) => setQueryValue(e.target.value)}
                placeholder="AWS migration, cloud engineer, senior"
                style={searchInputStyle}
              />
                <button
                  onClick={() => {
                    setShowResults((prev) => {
                      const next = !prev;
                      if (next) {
                        window.gtag?.("event", "find_matches_click", {
                          event_category: "engagement",
                          event_label: "hero_search",
                        });
                      }
                      return next;
                    });
                  }}
                  style={primaryButtonStyle}
                >
                  Find Matches {showResults ? "↓" : "↑"}
                </button>
            </div>

            <div style={helperTextStyle}>
              Example search: AWS migration engineer, cloud platform, senior roles
            </div>
            <div style={helperTextStyle}>
              Curated product preview showing how Allira interprets intent.
            </div>
            <div style={smallHelperTextStyle}>
              Live product experience and deeper matching logic coming next.
            </div>
          </div>

          <div style={exampleCardOuterStyle}>
            <div style={exampleLabelStyle}>Example match</div>
            <div style={exampleCardInnerStyle}>
              <div style={exampleTitleStyle}>Senior AWS Migration Engineer</div>
              <div style={examplePillStyle}>Strong Match</div>
              <div style={exampleTextStyle}>
                Why this matches: Strong alignment with AWS migration and
                infrastructure modernization.
              </div>
              <div style={exampleTextStyle}>
                Matches: AWS, Cloud Migration, Terraform
              </div>
              <div style={exampleMutedTextStyle}>
                Lower friction, direct role/title alignment
              </div>
              <div style={tagWrapStyle}>
                {["AWS", "Migration", "Terraform", "Cloud"].map((t) => (
                  <span key={t} style={tagChipStyle}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="allira-seo-intro" style={seoIntroStyle}>
          <div style={seoIconStyle}>
            <img
              src="/branding/cloud-signal.svg"
              alt=""
              style={{ width: 42, height: 42 }}
            />
          </div>
          <div>
            <p style={seoLeadStyle}>
              Allira is built for AWS cloud engineers, platform engineers, and
              DevOps professionals looking for roles in cloud infrastructure,
              migration, and platform engineering.
            </p>
            <p style={seoBodyStyle}>
              Instead of relying on keyword searches, Allira evaluates real job
              signals to match you with cloud roles that align with your
              experience across AWS services, infrastructure tooling, and
              engineering responsibilities.
            </p>
          </div>
        </section>

        <section className="allira-pillars-grid" style={pillarsGridStyle}>
          {[
            {
              title: "Real Matching",
              text: "Allira looks beyond job titles and keyword stuffing to surface roles that actually align with your experience.",
              icon: "/branding/target-signal.svg",
            },
            {
              title: "Explainable Results",
              text: "See why a role matched, which signals were found, and what makes it worth your time.",
              icon: "/branding/explain-signal.svg",
            },
            {
              title: "Built for Cloud",
              text: "Purpose-built for AWS and cloud professionals—not generic job boards.",
              icon: "/branding/cloud-signal.svg",
            },
          ].map((i) => (
            <div key={i.title} style={pillarCardStyle}>
              <FeatureIcon src={i.icon} />
              <div style={pillarTitleStyle}>{i.title}</div>
              <div style={pillarTextStyle}>{i.text}</div>
            </div>
          ))}
        </section>

        {showResults && (
          <section style={{ marginBottom: 64 }}>
            <div style={resultsHeaderStyle}>
              <div>
                <div style={eyebrowStyle}>Interactive Preview</div>
                <h2 style={resultsTitleStyle}>Matches for “{queryValue}”</h2>
              </div>
              <div style={resultsSubTextStyle}>
                Curated results showing how Allira can distinguish direct,
                adjacent, and partial role alignment.
              </div>
            </div>

            <div className="allira-results-grid" style={resultsGridStyle}>
              {displayResults.map((m) => (
                <MatchFlipCard key={m.id} match={m} />
              ))}
            </div>
          </section>
        )}

        <section style={formSectionStyle}>
          <div style={eyebrowStyle}>Early Access</div>
          <h2 style={formTitleStyle}>Start with better signal</h2>
          <p style={formTextStyle}>
            Join the early access list and be among the first to experience signal-based matching for cloud and platform roles.
          </p>

          <div style={earlyAccessNoteStyle}>
            Early access is focused on AWS, cloud migration, platform engineering, and DevOps roles.
          </div>

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
                minHeight: 110,
                fontFamily: "inherit",
                lineHeight: 1.5,
                paddingTop: 16,
              }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ ...primaryButtonStyle, opacity: isSubmitting ? 0.8 : 1 }}
            >
              {isSubmitting ? "Submitting..." : "Get Early Access"}
            </button>
          </form>

          {formStatus.message && (
            <div
              style={{
                marginTop: 14,
                color: formStatus.type === "success" ? "#9fe0b5" : "#ff9f9f",
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              {formStatus.message}
            </div>
          )}
        </section>

        <section style={faqSectionStyle}>
          <div style={eyebrowStyle}>FAQ</div>
        
          <h2 style={faqTitleStyle}>
            Common questions about Allira
          </h2>
        
          <div className="allira-faq-grid" style={faqGridStyle}>
            {[
              {
                q: "What is signal-based job matching?",
                a: "Instead of relying on keyword searches, Allira evaluates real job signals like technologies, responsibilities, and patterns to match you with roles that actually fit your experience."
              },
              {
                q: "Is Allira built for AWS engineers?",
                a: "Yes. Early access is focused on AWS cloud engineers, platform engineers, and DevOps professionals working across cloud infrastructure and migration."
              },
              {
                q: "How is this different from job boards like LinkedIn?",
                a: "Traditional job boards rely heavily on keyword matching. Allira analyzes deeper signals to surface roles that align more closely with your actual experience and intent."
              },
              {
                q: "What types of roles will I find?",
                a: "You’ll see roles across AWS, cloud infrastructure, platform engineering, DevOps, and migration-focused engineering positions."
              }
            ].map((item) => (
              <div key={item.q} style={faqCardStyle}>
                <div style={faqQuestionStyle}>{item.q}</div>
                <div style={faqAnswerStyle}>{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={howItWorksStyle}>
          <div style={eyebrowStyle}>How it works</div>
          <div style={howTitleStyle}>
            A cleaner path from intent to relevant jobs
          </div>

          <div className="allira-how-grid" style={howGridStyle}>
            {[
              "Describe the role you want in plain English or with targeted signals.",
              "Allira maps that intent to meaningful job signals and related roles.",
              "You get ranked cloud roles with clear reasons why they match.",
            ].map((t, idx) => (
              <div key={t} style={howCardStyle}>
                <div style={stepBubbleStyle}>{idx + 1}</div>
                <div style={{ color: "#d7deec", lineHeight: 1.6 }}>{t}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


const faqSectionStyle = {
  marginBottom: "56px",
};

const faqTitleStyle = {
  fontSize: "34px",
  fontWeight: 800,
  marginBottom: "18px",
};

const faqGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "18px",
};

const faqCardStyle = {
  backgroundColor: "rgba(17,24,47,.82)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: "18px",
  padding: "22px",
};

const faqQuestionStyle = {
  fontSize: "17px",
  fontWeight: 700,
  marginBottom: "10px",
  color: "#ffffff",
};

const faqAnswerStyle = {
  color: "#c3cee3",
  lineHeight: 1.6,
  fontSize: "15px",
};

const pageStyle = {
  fontFamily: "Arial,sans-serif",
  backgroundColor: "#0b1020",
  backgroundImage:
    "radial-gradient(circle at 80% 18%, rgba(79,124,255,.24), transparent 34%), radial-gradient(circle at 18% 4%, rgba(96,165,250,.12), transparent 30%), linear-gradient(180deg,#070b16 0%,#0b1020 55%,#08101f 100%)",
  color: "#f5f7fb",
  minHeight: "100vh",
  margin: 0,
  position: "relative",
  overflow: "hidden",
};

const earlyAccessNoteStyle = {
  marginTop: "6px",
  marginBottom: "18px",
  color: "#9fb0cf",
  fontSize: "14px",
  lineHeight: 1.5,
};

const orbOneStyle = {
  position: "absolute",
  width: 520,
  height: 520,
  right: -220,
  top: 180,
  background: "radial-gradient(circle,rgba(79,124,255,.18),transparent 62%)",
  filter: "blur(4px)",
  pointerEvents: "none",
};

const orbTwoStyle = {
  position: "absolute",
  width: 440,
  height: 440,
  left: -180,
  top: 680,
  background: "radial-gradient(circle,rgba(156,215,177,.10),transparent 62%)",
  filter: "blur(8px)",
  pointerEvents: "none",
};

const pageInnerStyle = {
  maxWidth: 1180,
  margin: "0 auto",
  padding: "32px 24px 80px",
  position: "relative",
  zIndex: 1,
};

const headerStyle = {
  marginTop: "12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 56,
  gap: 16,
  flexWrap: "wrap",
};

const logoTaglineStyle = {
  fontSize: 11,
  color: "#8ea0c2",
  marginTop: 4,
  marginLeft: 12,
  letterSpacing: 0.3,
};

const logoMetaDividerStyle = {
  color: "#8ea0c2",
  marginLeft: 8,
};

const logoPageNameStyle = {
  color: "#9fb0cf",
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: 0.6,
  fontWeight: 700,
};

const topButtonStyle = {
  backgroundColor: "transparent",
  color: "#f5f7fb",
  border: "1px solid rgba(255,255,255,.18)",
  borderRadius: 10,
  padding: "10px 16px",
  cursor: "pointer",
  fontSize: 14,
};

const headerActionsStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const heroSectionStyle = {
  display: "grid",
  gridTemplateColumns: "1.05fr .95fr",
  gap: 34,
  alignItems: "start",
  marginBottom: 44,
  marginTop: 16,
};

const eyebrowStyle = {
  display: "inline-block",
  fontSize: 12,
  letterSpacing: 1.3,
  textTransform: "uppercase",
  color: "#93a4c3",
  marginBottom: 12,
  fontWeight: 700,
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
  fontSize: 21,
  lineHeight: 1.55,
  color: "#c6d2e8",
  maxWidth: 690,
  marginBottom: 24,
};

const chipRowStyle = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginBottom: 18,
};

const queryChipStyle = {
  padding: "11px 16px",
  borderRadius: 999,
  backgroundColor: "rgba(79,124,255,.14)",
  color: "#d3ddff",
  border: "1px solid rgba(79,124,255,.34)",
  fontSize: 15,
  fontWeight: 700,
};

const searchRowStyle = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginBottom: 14,
};

const searchInputStyle = {
  flex: "1 1 380px",
  minWidth: 280,
  padding: "18px 20px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,.15)",
  backgroundColor: "rgba(18,25,51,.74)",
  color: "#f5f7fb",
  fontSize: 18,
  outline: "none",
};

const helperTextStyle = {
  color: "#b7c5e0",
  fontSize: 15,
  marginBottom: 7,
};

const smallHelperTextStyle = {
  color: "#8ea0c2",
  fontSize: 14,
};

const seoIntroStyle = {
  display: "grid",
  gridTemplateColumns: "88px 1fr",
  gap: 26,
  alignItems: "start",
  borderTop: "1px solid rgba(255,255,255,.10)",
  paddingTop: 30,
  marginBottom: 38,
  maxWidth: 980,
};

const seoIconStyle = {
  width: 74,
  height: 74,
  borderRadius: 999,
  background:
    "linear-gradient(180deg,rgba(79,124,255,.22),rgba(79,124,255,.08))",
  border: "1px solid rgba(255,255,255,.10)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 20px 50px rgba(0,0,0,.24)",
};

const seoLeadStyle = {
  color: "#f5f7fb",
  fontSize: 22,
  lineHeight: 1.45,
  margin: "0 0 14px 0",
  maxWidth: 860,
};

const seoBodyStyle = {
  color: "#c2cce0",
  fontSize: 19,
  lineHeight: 1.62,
  margin: 0,
  maxWidth: 900,
};

const exampleCardOuterStyle = {
  marginTop: "50px",
  background: "linear-gradient(180deg, #151d3b 0%, #0f1630 100%)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "20px",
  padding: "24px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
};

const exampleLabelStyle = {
  fontSize: 13,
  color: "#8ea0c2",
  marginBottom: 14,
  textTransform: "uppercase",
  letterSpacing: 1,
};

const exampleCardInnerStyle = {
  backgroundColor: "rgba(11,16,32,.82)",
  borderRadius: 16,
  padding: 20,
  border: "1px solid rgba(255,255,255,.08)",
};

const exampleTitleStyle = {
  fontSize: 22,
  fontWeight: 700,
  marginBottom: 8,
};

const examplePillStyle = {
  display: "inline-block",
  backgroundColor: "rgba(79,124,255,.16)",
  color: "#9cb8ff",
  borderRadius: 999,
  padding: "8px 12px",
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 18,
};

const exampleTextStyle = {
  color: "#d7deec",
  marginBottom: 10,
  fontSize: 15,
  lineHeight: 1.5,
};

const exampleMutedTextStyle = {
  color: "#9eb0d0",
  marginBottom: 18,
  fontSize: 15,
};

const pillarsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 22,
  marginBottom: 64,
};

const pillarCardStyle = {
  backgroundColor: "rgba(17,24,47,.82)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: 20,
  padding: 28,
  minHeight: 250,
  backdropFilter: "blur(8px)",
};

const featureIconShellStyle = {
  width: 76,
  height: 76,
  borderRadius: 999,
  background:
    "linear-gradient(180deg,rgba(79,124,255,.22),rgba(79,124,255,.08))",
  border: "1px solid rgba(255,255,255,.10)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 22,
};

const pillarTitleStyle = {
  fontSize: 25,
  fontWeight: 800,
  marginBottom: 12,
};

const pillarTextStyle = {
  color: "#c3cee3",
  lineHeight: 1.62,
  fontSize: 17,
};

const resultsHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: 20,
  alignItems: "center",
  marginBottom: 16,
  flexWrap: "wrap",
};

const resultsTitleStyle = {
  fontSize: 36,
  margin: 0,
  fontWeight: 800,
};

const resultsSubTextStyle = {
  color: "#9fb0cf",
  fontSize: 15,
  maxWidth: 420,
};

const resultsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,minmax(0,1fr))",
  gap: 20,
  animation: "fadeSlideIn 520ms ease-out both",
};

const cardSideStyle = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg,#151d3b 0%,#0f1630 100%)",
  border: "1px solid rgba(255,255,255,.10)",
  borderRadius: 22,
  padding: 20,
  boxShadow: "0 20px 60px rgba(0,0,0,.22)",
  display: "flex",
  flexDirection: "column",
};

const cardHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  alignItems: "flex-start",
  marginBottom: 14,
};

const cardTitleStyle = {
  fontSize: 28,
  fontWeight: 800,
  color: "#fff",
  lineHeight: 1.12,
  marginBottom: 6,
};

const cardCompanyStyle = {
  color: "#9fb0cf",
  fontSize: 15,
};

const labelPillStyle = {
  whiteSpace: "nowrap",
  padding: "8px 12px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 0.6,
  textTransform: "uppercase",
};

const dividerStyle = {
  height: 1,
  backgroundColor: "rgba(255,255,255,.16)",
  marginBottom: 14,
};

const summaryGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: 16,
  alignItems: "center",
  marginBottom: 14,
};

const locationStyle = {
  color: "#cdd7ea",
  fontSize: 15,
  marginBottom: 7,
};

const metaStyle = {
  color: "#9fb0cf",
  fontSize: 14,
  marginBottom: 3,
};

const whyShortStyle = {
  color: "#d7deec",
  marginBottom: 14,
  fontSize: 15,
  lineHeight: 1.5,
};

const tagWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
};

const tagChipStyle = {
  padding: "8px 10px",
  borderRadius: 999,
  backgroundColor: "#141c38",
  border: "1px solid rgba(255,255,255,.08)",
  fontSize: 13,
  color: "#c7d3eb",
};

const cardFooterStyle = {
  marginTop: "auto",
  paddingTop: 14,
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  alignItems: "center",
};

const hintStyle = {
  color: "#8ea0c2",
  fontSize: 13,
};

const backContentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

const backHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 12,
  marginBottom: 12,
};

const backEyebrowStyle = {
  fontSize: 12,
  letterSpacing: 1,
  textTransform: "uppercase",
  color: "#93a4c3",
  marginBottom: 8,
  fontWeight: 700,
};

const backTitleStyle = {
  fontSize: 25,
  fontWeight: 800,
  color: "#fff",
  lineHeight: 1.14,
  marginBottom: 7,
};

const backSummaryStyle = {
  color: "#d7deec",
  fontSize: 15,
  lineHeight: 1.5,
  marginBottom: 16,
  paddingRight: 8,
};

const backSectionLabelStyle = {
  fontSize: 12,
  color: "#8ea0c2",
  textTransform: "uppercase",
  letterSpacing: 0.8,
  marginBottom: 8,
  fontWeight: 700,
};

const rationaleLineStyle = {
  color: "#d7deec",
  fontSize: 14,
  lineHeight: 1.45,
};

const miniPanelStyle = {
  position: "absolute",
  top: 16,
  right: 16,
  width: 320,
  maxWidth: "calc(100% - 32px)",
  background: "linear-gradient(180deg,#101833 0%,#0b1228 100%)",
  border: "1px solid rgba(255,255,255,.10)",
  borderRadius: 18,
  padding: 18,
  boxShadow: "0 22px 50px rgba(0,0,0,.35)",
  zIndex: 3,
};

const miniPanelHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 14,
  gap: 12,
};

const miniPanelTitleStyle = {
  fontSize: 12,
  color: "#93a4c3",
  textTransform: "uppercase",
  letterSpacing: 0.8,
  fontWeight: 700,
};

const signalWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginBottom: 16,
};

const signalChipStyle = {
  padding: "7px 10px",
  borderRadius: 999,
  backgroundColor: "rgba(79,124,255,.10)",
  border: "1px solid rgba(79,124,255,.18)",
  color: "#c8d7ff",
  fontSize: 12,
  fontWeight: 600,
};

const metricGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 10,
};

const backMetricStyle = {
  backgroundColor: "#0f1730",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: 14,
  padding: "12px 12px",
};

const metricLabelStyle = {
  color: "#8ea0c2",
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: 0.7,
  marginBottom: 4,
  fontWeight: 700,
};

const formSectionStyle = {
  background:
    "linear-gradient(180deg,rgba(17,24,47,.88) 0%,rgba(13,20,40,.88) 100%)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: 22,
  padding: 32,
  marginBottom: 56,
  maxWidth: 780,
  marginLeft: "auto",
  marginRight: "auto",
  backdropFilter: "blur(8px)",
};

const formTitleStyle = {
  fontSize: 34,
  fontWeight: 800,
  margin: "0 0 12px 0",
};

const formTextStyle = {
  color: "#aebbd5",
  fontSize: 17,
  lineHeight: 1.6,
  marginBottom: 22,
};

const formGridStyle = {
  display: "grid",
  gap: 14,
};

const formInputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.12)",
  backgroundColor: "#121933",
  color: "#f5f7fb",
  fontSize: 16,
  outline: "none",
  boxSizing: "border-box",
};

const howItWorksStyle = {
  background:
    "linear-gradient(180deg,rgba(17,24,47,.86) 0%,rgba(13,20,40,.86) 100%)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: 22,
  padding: 32,
  marginBottom: 56,
};

const howTitleStyle = {
  fontSize: 34,
  fontWeight: 700,
  marginBottom: 18,
};

const howGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 18,
};

const howCardStyle = {
  backgroundColor: "#0b1020",
  borderRadius: 16,
  padding: 20,
  border: "1px solid rgba(255,255,255,.06)",
};

const stepBubbleStyle = {
  width: 34,
  height: 34,
  borderRadius: 999,
  backgroundColor: "#4f7cff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  marginBottom: 14,
};

const primaryButtonStyle = {
  padding: "16px 22px",
  borderRadius: 12,
  border: "none",
  backgroundColor: "#4f7cff",
  color: "white",
  fontWeight: 700,
  fontSize: 16,
  cursor: "pointer",
};

const secondaryButtonStyle = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,.12)",
  backgroundColor: "transparent",
  color: "#dfe7f7",
  fontWeight: 700,
  fontSize: 13,
  cursor: "pointer",
};

const miniCloseButtonStyle = {
  width: 30,
  height: 30,
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,.10)",
  backgroundColor: "transparent",
  color: "#dfe7f7",
  fontWeight: 700,
  fontSize: 14,
  cursor: "pointer",
};
