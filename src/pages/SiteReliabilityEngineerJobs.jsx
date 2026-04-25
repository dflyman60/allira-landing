import SeoPageHeader from "./SeoPageHeader";
import SeoMatchDemo from "./SeoMatchDemo";

const JOB_CATEGORY = "sre";

export default function SiteReliabilityEngineerJobs() {
  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <SeoPageHeader pageName="Site Reliability Engineer Jobs" />

          <h1 style={titleStyle}>
            Find Site Reliability Engineer jobs that match your reliability and cloud experience
          </h1>

          <p style={leadStyle}>
            Allira helps Site Reliability Engineers find roles aligned to
            reliability engineering, observability, incident response, cloud
            infrastructure reliability, automation, and operational excellence.
          </p>

        </section>

        {/* CONTENT */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>What are Site Reliability Engineer jobs?</h2>

          <p style={textStyle}>
            Site Reliability Engineer jobs focus on keeping systems reliable,
            observable, scalable, and resilient. These roles often combine cloud
            infrastructure knowledge with automation, monitoring, incident
            response, and operational engineering.
          </p>

          <p style={textStyle}>
            SRE jobs may overlap with infrastructure and cloud operations, but
            the core focus is reliability: reducing toil, improving service
            health, responding to incidents, and making systems easier to operate.
          </p>
        </section>

        <SeoMatchDemo pageKey="sre" jobCategory={JOB_CATEGORY} />

        <section style={sectionStyle}>
          <h2 style={h2Style}>Common SRE responsibilities</h2>

          <ul style={listStyle}>
            <li>Improve service reliability, availability, and performance</li>
            <li>Build monitoring, alerting, dashboards, and observability systems</li>
            <li>Participate in incident response, on-call, and post-incident reviews</li>
            <li>Automate operational workflows and reduce manual toil</li>
            <li>Define SLIs, SLOs, error budgets, and reliability standards</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Key skills for Site Reliability Engineers</h2>

          <ul style={listStyle}>
            <li>Observability tools, metrics, logs, traces, alerts, and dashboards</li>
            <li>Cloud infrastructure, Linux, networking, containers, and Kubernetes</li>
            <li>Incident response, root cause analysis, and operational readiness</li>
            <li>Automation with scripting, infrastructure as code, and CI/CD systems</li>
            <li>Reliability practices like SLOs, SLIs, error budgets, and capacity planning</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>How SRE differs from DevOps and infrastructure engineering</h2>

          <p style={textStyle}>
            DevOps roles often emphasize delivery automation and deployment
            workflows. Infrastructure engineering focuses on cloud, systems, and
            network foundations. SRE roles are centered on reliability outcomes:
            uptime, observability, incident response, and operational excellence.
          </p>

          <p style={textStyle}>
            A strong SRE role may include automation and infrastructure work, but
            the defining signals are reliability ownership, production health,
            measurable service objectives, and reducing operational risk.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Why signal-based matching matters for SRE roles</h2>

          <p style={textStyle}>
            SRE job titles can overlap with DevOps, infrastructure engineering,
            platform engineering, and cloud operations. The important signals are
            often in the responsibilities: observability, on-call, incidents,
            SLOs, reliability automation, and production ownership.
          </p>

          <p style={textStyle}>
            Allira uses signal-based matching to identify those deeper reliability
            patterns so you can find Site Reliability Engineer jobs that fit your
            actual cloud and production systems experience.
          </p>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={faqItemStyle}>
            <strong>What does a Site Reliability Engineer do?</strong>
            <p style={textStyle}>
              Site Reliability Engineers improve production reliability through
              monitoring, automation, incident response, performance work, and
              operational engineering.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>What skills are common in SRE jobs?</strong>
            <p style={textStyle}>
              Common skills include observability, incident response, Linux,
              cloud infrastructure, Kubernetes, automation, scripting, and
              reliability practices like SLOs and error budgets.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>How are SRE jobs different from DevOps jobs?</strong>
            <p style={textStyle}>
              DevOps roles often focus on delivery automation, while SRE roles
              focus more directly on service reliability, production health,
              incident response, and operational excellence.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>Are SRE roles cloud-focused?</strong>
            <p style={textStyle}>
              Many SRE roles are cloud-focused, especially when services run on
              AWS or Kubernetes, but the main emphasis is reliability and
              production operations rather than cloud usage alone.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaStyle}>
          <h2 style={h2Style}>Start finding better matches</h2>
          <p style={ctaTextStyle}>
            Use Allira’s signal-based matching to discover Site Reliability
            Engineer jobs aligned with your observability, incident response,
            automation, cloud infrastructure, and reliability experience.
          </p>

          <a href="/" style={buttonStyle}>
            Try the Allira preview
          </a>
        </section>
      </div>
    </div>
  );
}

/* STYLES */

const pageStyle = {
  background: "#0b1020",
  color: "#f5f7fb",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
};

const containerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "58px 20px 80px",
};

const heroStyle = {
  marginBottom: "40px",
};

const topNavStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  marginBottom: "10px",
};

const topNavLinkStyle = {
  color: "#9fb0cf",
  fontSize: "14px",
  textDecoration: "none",
};

const topNavActionsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const eyebrowStyle = {
  color: "#8ea0c2",
  fontSize: "12px",
  textTransform: "uppercase",
  marginBottom: "10px",
};

const titleStyle = {
  fontSize: "44px",
  fontWeight: 800,
  marginBottom: "16px",
};

const leadStyle = {
  color: "#b8c3d9",
  fontSize: "18px",
  marginBottom: "20px",
};

const buttonStyle = {
  padding: "14px 20px",
  background: "#4f7cff",
  color: "#fff",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};

const sectionStyle = {
  marginBottom: "32px",
};

const h2Style = {
  fontSize: "24px",
  marginBottom: "12px",
};

const textStyle = {
  color: "#cdd7ea",
  lineHeight: 1.6,
  marginBottom: "10px",
};

const ctaTextStyle = {
  ...textStyle,
  marginBottom: "28px",
};

const listStyle = {
  paddingLeft: "20px",
  color: "#cdd7ea",
  lineHeight: 1.6,
};

const faqItemStyle = {
  marginBottom: "16px",
};

const ctaStyle = {
  marginTop: "40px",
  paddingTop: "20px",
  borderTop: "1px solid rgba(255,255,255,0.1)",
};
