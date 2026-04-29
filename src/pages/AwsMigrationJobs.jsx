import SeoHead from "../components/SeoHead";
import SeoPageHeader from "./SeoPageHeader";
import SeoMatchDemo from "./SeoMatchDemo";

export default function AwsMigrationJobs() {
  return (
    <div style={pageStyle}>
      <SeoHead
        title="AWS Migration Jobs That Match Your Experience | Cloud Transformation | Allira"
        description="Find AWS migration jobs across cloud transformation, infrastructure migration, and modernization roles using signal-based matching."
      />

      <div style={containerStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <SeoPageHeader pageName="AWS Migration Jobs" />

          <h1 style={titleStyle}>
            Find AWS Migration Jobs That Match Your Experience
          </h1>

          <p style={leadStyle}>
            Find AWS migration jobs across cloud transformation, infrastructure
            migration, and modernization roles.
          </p>

          <p style={leadStyle}>
            Allira helps engineers and architects find AWS migration roles aligned to
            real migration responsibilities, cloud transformation work, and
            infrastructure modernization signals.
          </p>

          <p style={leadStyle}>
            AWS migration roles can vary significantly. Some focus on lift-and-shift
            migrations, while others involve re-architecture, data migration,
            cloud-native transformation, or modernization strategies.
          </p>

          <p style={leadStyle}>
            This page helps you explore AWS migration jobs by migration type,
            responsibilities, and technologies so you can find roles that better match
            your experience.
          </p>

          <p style={leadStyle}>
            Browse AWS migration jobs updated regularly across cloud transformation,
            replatforming, and modernization roles.
          </p>

        </section>

        {/* CONTENT */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>What are AWS migration jobs?</h2>

          <p style={textStyle}>
            AWS migration jobs focus on helping organizations move applications,
            infrastructure, and data from on-premise environments or other cloud
            platforms into AWS. These roles typically involve planning migration
            strategies, executing cloud transformations, and optimizing systems
            post-migration.
          </p>

          <p style={textStyle}>
            Common responsibilities include application migration, database
            migration, infrastructure modernization, and building scalable
            cloud-native architectures using AWS services like EC2, S3, Lambda,
            and RDS.
          </p>
        </section>

        <SeoMatchDemo pageKey="awsMigration" sourcePage="aws_migration_jobs" />

        <section style={sectionStyle}>
          <h2 style={h2Style}>Common AWS migration roles</h2>

          <p style={textStyle}>
            These roles help distinguish between lift-and-shift, replatforming, and
            cloud-native transformation work.
          </p>

          <ul style={listStyle}>
            <li>AWS Migration Engineer</li>
            <li>Cloud Migration Specialist</li>
            <li>Cloud Solutions Architect (Migration Focus)</li>
            <li>DevOps Engineer (Cloud Migration)</li>
            <li>Infrastructure / Platform Engineer</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Key skills for AWS migration jobs</h2>

          <p style={textStyle}>
            AWS migration roles require experience in cloud transformation,
            infrastructure migration, and modernization strategies.
          </p>

          <ul style={listStyle}>
            <li>AWS services (EC2, S3, RDS, Lambda)</li>
            <li>Infrastructure as Code (Terraform, CloudFormation)</li>
            <li>Networking and VPC design</li>
            <li>Data and database migration strategies</li>
            <li>CI/CD and DevOps practices</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Why signal-based matching matters</h2>

          <p style={textStyle}>
            AWS migration job search is difficult because migration responsibilities
            vary widely between roles.
          </p>

          <p style={textStyle}>
            Some positions focus on infrastructure movement, while others involve
            application refactoring, data migration, or full cloud transformation.
          </p>

          <p style={textStyle}>
            Allira uses signal-based matching to analyze migration patterns,
            technologies, and responsibilities so you can find roles that match your
            actual experience.
          </p>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={faqItemStyle}>
            <strong>What does an AWS migration engineer do?</strong>
            <p style={textStyle}>
              They plan and execute the movement of applications, data, and
              infrastructure into AWS, ensuring performance, scalability, and
              reliability.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>What tools are used in AWS migration?</strong>
            <p style={textStyle}>
              Common tools include AWS Migration Hub, DMS, Terraform,
              CloudFormation, and CI/CD pipelines.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>Are AWS migration jobs in demand?</strong>
            <p style={textStyle}>
              Yes. As companies continue moving to the cloud, migration roles
              remain one of the highest demand areas in cloud engineering.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaStyle}>
          <p style={textStyle}>
            Whether you're focused on lift-and-shift migrations, modernization, or
            cloud-native transformation, Allira helps you find AWS migration jobs
            aligned with your background.
          </p>

          <h2 style={h2Style}>Start finding better matches</h2>
          <p style={ctaTextStyle}>
            Use Allira’s signal-based matching to discover AWS migration roles
            aligned with your experience.
          </p>

          <a href="/" style={buttonStyle}>
            Explore AWS Migration Jobs That Match Your Experience
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
