import SeoHead from "../components/SeoHead";
import SeoPageHeader from "./SeoPageHeader";
import SeoMatchDemo from "./SeoMatchDemo";

const JOB_CATEGORY = "devops";

export default function DevOpsJobs() {
  return (
    <div style={pageStyle}>
      <SeoHead
        title="DevOps Jobs | CI/CD, Automation & Cloud Engineering Roles"
        description="Explore DevOps jobs focused on CI/CD, automation, and cloud infrastructure. Find roles that match your DevOps and platform experience."
      />

      <div style={containerStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <SeoPageHeader pageName="DevOps Jobs" />

          <h1 style={titleStyle}>
            Find DevOps jobs that match your cloud and automation experience.
          </h1>

          <p style={leadStyle}>
            Allira helps DevOps engineers, AWS DevOps specialists, platform
            engineers, and cloud operations professionals find roles aligned to
            real infrastructure, automation, and delivery signals.
          </p>

        </section>

        {/* CONTENT */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>What are DevOps jobs?</h2>

          <p style={textStyle}>
            DevOps jobs focus on improving how software and infrastructure are
            built, deployed, automated, monitored, and operated. These roles
            often sit between cloud infrastructure, CI/CD engineering, platform
            engineering, and cloud operations.
          </p>

          <p style={textStyle}>
            In AWS DevOps engineer roles, the work may include infrastructure as
            code, deployment pipelines, container platforms, monitoring,
            reliability, and cloud infrastructure automation.
          </p>
        </section>

        <SeoMatchDemo pageKey="devops" jobCategory={JOB_CATEGORY} />

        <section style={sectionStyle}>
          <h2 style={h2Style}>Common DevOps roles</h2>

          <ul style={listStyle}>
            <li>DevOps Engineer</li>
            <li>AWS DevOps Engineer</li>
            <li>Cloud DevOps Engineer</li>
            <li>Platform Engineer</li>
            <li>CI/CD Engineer</li>
            <li>Site Reliability Engineer</li>
            <li>Cloud Operations Engineer</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Key skills for DevOps jobs</h2>

          <ul style={listStyle}>
            <li>CI/CD engineering with GitHub Actions, Jenkins, GitLab, or similar tools</li>
            <li>Terraform, CloudFormation, and infrastructure as code</li>
            <li>AWS services, cloud networking, IAM, containers, ECS, and EKS</li>
            <li>Kubernetes, Docker, Linux, scripting, and release automation</li>
            <li>Monitoring, logging, incident response, and reliability practices</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Why signal-based matching matters for DevOps roles</h2>

          <p style={textStyle}>
            DevOps job titles can hide very different responsibilities. One role
            may focus on AWS automation and Terraform, while another may lean
            toward release management, SRE, cloud operations, or platform
            engineering.
          </p>

          <p style={textStyle}>
            Allira uses signal-based matching to look beyond the title and
            identify the actual tools, responsibilities, and cloud operations
            patterns that match your DevOps experience.
          </p>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={faqItemStyle}>
            <strong>What does a DevOps engineer do?</strong>
            <p style={textStyle}>
              DevOps engineers automate infrastructure, improve deployment
              pipelines, support cloud operations, and help teams release
              software reliably.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>What skills are common in AWS DevOps engineer roles?</strong>
            <p style={textStyle}>
              Common skills include AWS services, Terraform, CI/CD pipelines,
              containers, Kubernetes, monitoring, scripting, and infrastructure
              automation.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>Are DevOps jobs the same as platform engineering roles?</strong>
            <p style={textStyle}>
              They often overlap. Platform engineering roles may focus more on
              internal developer platforms, while DevOps roles often emphasize
              automation, deployment, reliability, and cloud operations.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaStyle}>
          <h2 style={h2Style}>Start finding better matches</h2>
          <p style={ctaTextStyle}>
            Use Allira’s signal-based matching to discover DevOps jobs aligned
            with your AWS, Terraform, CI/CD, platform engineering, and cloud
            operations experience.
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
