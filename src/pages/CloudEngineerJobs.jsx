import SeoHead from "../components/SeoHead";
import SeoPageHeader from "./SeoPageHeader";
import SeoMatchDemo from "./SeoMatchDemo";

const JOB_CATEGORY = "cloud_engineer";

export default function CloudEngineerJobs() {
  return (
    <div style={pageStyle}>
      <SeoHead
        title="Cloud Engineer Jobs | AWS, Platform & Infrastructure Roles"
        description="Find cloud engineer jobs across AWS, infrastructure, and platform engineering. Discover roles aligned with your real cloud experience."
      />

      <div style={containerStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <SeoPageHeader pageName="Cloud Engineer Jobs" />

          <h1 style={titleStyle}>
            Find cloud engineer jobs that match your real experience.
          </h1>

          <p style={leadStyle}>
            Allira helps cloud engineers, AWS specialists, platform engineers,
            DevOps professionals, and cloud operations teams find roles aligned
            to real infrastructure and engineering signals.
          </p>

        </section>

        {/* CONTENT */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>What are cloud engineer jobs?</h2>

          <p style={textStyle}>
            Cloud engineer jobs focus on building, operating, and improving
            cloud infrastructure. These roles often include AWS cloud engineer
            responsibilities, cloud infrastructure jobs, platform engineering
            work, DevOps practices, and cloud operations support.
          </p>

          <p style={textStyle}>
            The best cloud roles are not always obvious from the title alone.
            Some are labeled platform engineer, infrastructure engineer, DevOps
            engineer, cloud operations engineer, or site reliability engineer.
          </p>
        </section>

        <SeoMatchDemo pageKey="cloudEngineer" jobCategory={JOB_CATEGORY} />

        <section style={sectionStyle}>
          <h2 style={h2Style}>Common cloud engineer roles</h2>

          <ul style={listStyle}>
            <li>Cloud Engineer</li>
            <li>AWS Cloud Engineer</li>
            <li>Cloud Infrastructure Engineer</li>
            <li>Platform Engineer</li>
            <li>DevOps Engineer</li>
            <li>Cloud Operations Engineer</li>
            <li>Site Reliability Engineer</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Key skills for cloud engineer jobs</h2>

          <ul style={listStyle}>
            <li>AWS services like EC2, S3, IAM, Lambda, ECS, and EKS</li>
            <li>Infrastructure as Code with Terraform or CloudFormation</li>
            <li>Linux, networking, VPCs, load balancing, and DNS</li>
            <li>CI/CD pipelines, containers, and Kubernetes</li>
            <li>Monitoring, reliability, incident response, and cloud operations</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Why signal-based matching matters</h2>

          <p style={textStyle}>
            Cloud engineer job titles can be noisy. A role might say DevOps,
            platform, infrastructure, SRE, or cloud operations while still
            matching the same underlying AWS cloud engineering experience.
          </p>

          <p style={textStyle}>
            Allira uses signal-based matching to look at responsibilities,
            technologies, and patterns in the role so you can find cloud
            engineer jobs that fit your actual background.
          </p>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={faqItemStyle}>
            <strong>What does a cloud engineer do?</strong>
            <p style={textStyle}>
              Cloud engineers build and operate infrastructure across cloud
              platforms like AWS. They often work with compute, networking,
              identity, deployment pipelines, and reliability tooling.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>Are AWS cloud engineer roles different from DevOps roles?</strong>
            <p style={textStyle}>
              They can overlap. AWS cloud engineer roles may focus more on cloud
              services and infrastructure, while DevOps roles often emphasize
              automation, CI/CD, deployments, and operational workflows.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>What roles are similar to cloud engineer jobs?</strong>
            <p style={textStyle}>
              Similar roles include platform engineer, cloud infrastructure
              engineer, DevOps engineer, cloud operations engineer, and site
              reliability engineer.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaStyle}>
          <h2 style={h2Style}>Start finding better matches</h2>
          <p style={ctaTextStyle}>
            Use Allira’s signal-based matching to discover cloud engineer jobs
            aligned with your AWS, platform, DevOps, and infrastructure
            experience.
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
