import SeoHead from "../components/SeoHead";
import SeoPageHeader from "./SeoPageHeader";
import SeoMatchDemo from "./SeoMatchDemo";

const JOB_CATEGORY = "platform_engineer";

export default function PlatformEngineerJobs() {
  return (
    <div style={pageStyle}>
      <SeoHead
        title="Platform Engineer Jobs | Internal Platform & Kubernetes Roles"
        description="Find platform engineering jobs focused on Kubernetes, internal platforms, and developer experience. Discover roles aligned to modern platform engineering."
      />

      <div style={containerStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <SeoPageHeader pageName="Platform Engineer Jobs" />

          <h1 style={titleStyle}>
            Find platform engineer jobs that match your infrastructure and platform experience
          </h1>

          <p style={leadStyle}>
            Allira helps platform engineers find roles focused on internal
            developer platforms, reusable infrastructure systems, Kubernetes
            platforms, developer experience, and infrastructure abstraction.
          </p>

        </section>

        {/* CONTENT */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>What are platform engineer jobs?</h2>

          <p style={textStyle}>
            Platform engineer jobs focus on building the internal systems that
            help engineering teams ship software faster and more reliably. These
            roles often involve creating reusable infrastructure, developer
            workflows, deployment platforms, and cloud-native foundations.
          </p>

          <p style={textStyle}>
            Unlike roles that only operate cloud environments, platform
            engineering often emphasizes building products for developers:
            internal developer platforms, paved roads, golden paths, and
            self-service infrastructure.
          </p>
        </section>

        <SeoMatchDemo pageKey="platformEngineer" jobCategory={JOB_CATEGORY} />

        <section style={sectionStyle}>
          <h2 style={h2Style}>Common platform engineering roles</h2>

          <ul style={listStyle}>
            <li>Platform Engineer</li>
            <li>Senior Platform Engineer</li>
            <li>Internal Developer Platform Engineer</li>
            <li>Kubernetes Platform Engineer</li>
            <li>Developer Experience Engineer</li>
            <li>Cloud Platform Engineer</li>
            <li>Infrastructure Platform Engineer</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Key skills for platform engineers</h2>

          <ul style={listStyle}>
            <li>Kubernetes, containers, service platforms, and cluster operations</li>
            <li>Infrastructure as Code with Terraform or CloudFormation</li>
            <li>Internal developer platforms, self-service workflows, and paved roads</li>
            <li>CI/CD systems, deployment tooling, and release workflows</li>
            <li>Developer experience, platform APIs, automation, and observability</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>How platform engineering differs from DevOps</h2>

          <p style={textStyle}>
            DevOps roles often focus on automation, delivery, and operations
            across teams. Platform engineering is more product-oriented: the
            platform itself is built, maintained, and improved for internal
            engineering customers.
          </p>

          <p style={textStyle}>
            A platform engineer may still use DevOps tools, but the work is
            typically centered on reusable systems, abstractions, Kubernetes
            platforms, developer experience, and infrastructure that other teams
            can consume safely.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Why signal-based matching matters for platform roles</h2>

          <p style={textStyle}>
            Platform engineer job titles can overlap with DevOps, SRE, cloud
            infrastructure, and cloud operations roles. The important difference
            is often hidden in the responsibilities: developer experience,
            self-service platforms, reusable infrastructure, and platform
            product thinking.
          </p>

          <p style={textStyle}>
            Allira uses signal-based matching to look for those deeper platform
            signals so you can find roles that match your infrastructure and
            platform engineering background.
          </p>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={faqItemStyle}>
            <strong>What does a platform engineer do?</strong>
            <p style={textStyle}>
              Platform engineers build internal tools, infrastructure systems,
              deployment platforms, and self-service workflows that help
              development teams move faster.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>Is platform engineering the same as DevOps?</strong>
            <p style={textStyle}>
              Not exactly. Platform engineering may use DevOps practices, but it
              usually focuses more on building reusable platforms and developer
              experiences for internal engineering teams.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>What skills are common in platform engineer jobs?</strong>
            <p style={textStyle}>
              Common skills include Kubernetes, Terraform, cloud infrastructure,
              CI/CD systems, internal developer platforms, observability, and
              automation.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>What is developer experience in platform engineering?</strong>
            <p style={textStyle}>
              Developer experience means making it easier for engineers to build,
              deploy, observe, and operate software through clear workflows,
              templates, tooling, and self-service infrastructure.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaStyle}>
          <h2 style={h2Style}>Start finding better matches</h2>
          <p style={ctaTextStyle}>
            Use Allira’s signal-based matching to discover platform engineer
            jobs aligned with your Kubernetes, infrastructure abstraction,
            developer experience, and internal platform background.
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
