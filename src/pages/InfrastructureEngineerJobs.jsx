import SeoHead from "../components/SeoHead";
import SeoPageHeader from "./SeoPageHeader";
import SeoMatchDemo from "./SeoMatchDemo";

export default function InfrastructureEngineerJobs() {
  return (
    <div style={pageStyle}>
      <SeoHead
        title="Infrastructure Engineer Jobs | Cloud & Systems Roles"
        description="Explore infrastructure engineer jobs across cloud, systems, and infrastructure as code. Find roles that match your infrastructure experience."
      />

      <div style={containerStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <SeoPageHeader pageName="Infrastructure Engineer Jobs" />

          <h1 style={titleStyle}>
            Find infrastructure engineer jobs that match your cloud and systems experience
          </h1>

          <p style={leadStyle}>
            Allira helps infrastructure engineers find roles aligned to cloud
            infrastructure, systems reliability, networking, compute, storage,
            Terraform, and hybrid cloud foundations.
          </p>

        </section>

        {/* CONTENT */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>What are infrastructure engineer jobs?</h2>

          <p style={textStyle}>
            Infrastructure engineer jobs focus on building and maintaining the
            systems that applications and teams depend on. These roles often
            cover cloud infrastructure, compute, storage, networking, systems
            reliability, and hybrid cloud environments.
          </p>

          <p style={textStyle}>
            Infrastructure engineers may work close to platform and operations
            teams, but the emphasis is usually on durable systems foundations:
            provisioning, connectivity, capacity, reliability, and repeatable
            infrastructure patterns.
          </p>
        </section>

        <SeoMatchDemo pageKey="infrastructureEngineer" sourcePage="infrastructure_engineer_jobs" />

        <section style={sectionStyle}>
          <h2 style={h2Style}>Common infrastructure engineering roles</h2>

          <ul style={listStyle}>
            <li>Infrastructure Engineer</li>
            <li>Cloud Infrastructure Engineer</li>
            <li>Systems Engineer</li>
            <li>Infrastructure Automation Engineer</li>
            <li>Hybrid Cloud Engineer</li>
            <li>Network Infrastructure Engineer</li>
            <li>Compute and Storage Engineer</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Key skills for infrastructure engineers</h2>

          <ul style={listStyle}>
            <li>Cloud infrastructure across AWS compute, storage, networking, and identity</li>
            <li>Terraform, CloudFormation, and infrastructure as code</li>
            <li>Linux systems, networking, DNS, VPCs, routing, and load balancing</li>
            <li>Hybrid cloud, on-premise connectivity, and platform foundations</li>
            <li>Reliability, monitoring, capacity planning, and operational readiness</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>How infrastructure roles differ from DevOps and platform engineering</h2>

          <p style={textStyle}>
            DevOps roles often center on delivery automation and deployment
            workflows. Platform engineering focuses on reusable developer
            platforms and self-service systems. Infrastructure engineering is
            usually closer to the underlying cloud, network, compute, storage,
            and systems foundations.
          </p>

          <p style={textStyle}>
            A strong infrastructure role may include automation, but the core
            responsibility is making the environment stable, scalable, connected,
            and ready for the teams and workloads that depend on it.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Why signal-based matching matters</h2>

          <p style={textStyle}>
            Infrastructure engineer job titles can overlap with cloud engineer,
            platform engineer, systems engineer, and operations roles. The
            important signals are often hidden in the responsibilities:
            networking, compute, storage, reliability, Terraform, and hybrid
            cloud foundations.
          </p>

          <p style={textStyle}>
            Allira uses signal-based matching to identify the infrastructure
            patterns in each role so you can find jobs that match your actual
            cloud and systems background.
          </p>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={faqItemStyle}>
            <strong>What does an infrastructure engineer do?</strong>
            <p style={textStyle}>
              Infrastructure engineers design, build, and maintain the cloud,
              network, compute, storage, and systems foundations that
              applications run on.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>What skills are common in infrastructure engineer jobs?</strong>
            <p style={textStyle}>
              Common skills include AWS infrastructure, networking, Linux,
              Terraform, infrastructure as code, monitoring, reliability, and
              hybrid cloud connectivity.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>How are infrastructure jobs different from DevOps jobs?</strong>
            <p style={textStyle}>
              DevOps roles often focus on deployment and automation workflows,
              while infrastructure roles focus more on the underlying systems,
              cloud foundations, networking, and reliability.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>Are infrastructure engineer roles cloud-focused?</strong>
            <p style={textStyle}>
              Many are cloud-focused, especially on AWS, but some also include
              hybrid cloud, data center connectivity, networking, and platform
              foundations.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaStyle}>
          <h2 style={h2Style}>Start finding better matches</h2>
          <p style={ctaTextStyle}>
            Use Allira’s signal-based matching to discover infrastructure
            engineer jobs aligned with your cloud, systems, networking,
            Terraform, and reliability experience.
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
