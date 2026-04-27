import SeoHead from "../components/SeoHead";
import SeoPageHeader from "./SeoPageHeader";
import SeoMatchDemo from "./SeoMatchDemo";

const JOB_CATEGORY = "cloud_migration";

export default function CloudMigrationJobs() {
  return (
    <div style={pageStyle}>
      <SeoHead
        title="Cloud Migration Jobs | Application & Data Migration Roles"
        description="Explore cloud migration jobs across application, database, and modernization efforts. Find roles aligned with your migration experience."
      />

      <div style={containerStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <SeoPageHeader pageName="Cloud Migration Jobs" />

          <h1 style={titleStyle}>
            Find cloud migration jobs that match your modernization experience
          </h1>

          <p style={leadStyle}>
            Allira helps cloud migration engineers, modernization specialists,
            platform teams, and cloud architects find roles aligned to
            application migration, database migration, and multi-cloud
            transformation work.
          </p>

        </section>

        {/* CONTENT */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>What are cloud migration jobs?</h2>

          <p style={textStyle}>
            Cloud migration jobs focus on moving applications, data, databases,
            infrastructure, and business systems from legacy environments into
            cloud platforms. These roles can involve AWS, Azure, Google Cloud,
            hybrid cloud, or broader multi-cloud migration programs.
          </p>

          <p style={textStyle}>
            Migration work often combines planning, modernization, architecture,
            infrastructure, testing, data movement, cutover strategy, and
            post-migration optimization.
          </p>
        </section>

        <SeoMatchDemo pageKey="cloudMigration" jobCategory={JOB_CATEGORY} />

        <section style={sectionStyle}>
          <h2 style={h2Style}>Common cloud migration roles</h2>

          <ul style={listStyle}>
            <li>Cloud Migration Engineer</li>
            <li>Application Migration Specialist</li>
            <li>Cloud Modernization Engineer</li>
            <li>Database Migration Engineer</li>
            <li>Migration Solutions Architect</li>
            <li>Cloud Transformation Consultant</li>
            <li>Infrastructure Migration Engineer</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Key skills for cloud migration engineers</h2>

          <ul style={listStyle}>
            <li>Application migration planning, discovery, assessment, and execution</li>
            <li>Data and database migration with replication, conversion, and validation</li>
            <li>AWS, Azure, hybrid cloud, and multi-cloud migration patterns</li>
            <li>Infrastructure as Code, networking, identity, and landing zone readiness</li>
            <li>Cutover planning, testing, rollback planning, and modernization strategy</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>How cloud migration roles differ from cloud engineering roles</h2>

          <p style={textStyle}>
            Cloud engineering roles often focus on building and operating cloud
            environments. Cloud migration roles focus more specifically on moving
            existing applications, data, databases, and infrastructure into a new
            cloud environment safely.
          </p>

          <p style={textStyle}>
            A cloud migration role may include engineering and architecture, but
            the defining signals are migration planning, modernization,
            assessment, dependency mapping, cutover work, and migration execution.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Why signal-based matching matters for migration jobs</h2>

          <p style={textStyle}>
            Cloud migration job titles are often inconsistent. Some roles mention
            migration directly, while others use cloud modernization,
            transformation, architect, platform, infrastructure, or consultant
            language.
          </p>

          <p style={textStyle}>
            Allira uses signal-based matching to look for migration-specific
            responsibilities like application migration, database migration,
            modernization, discovery, cutover planning, and multi-cloud
            transformation.
          </p>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={faqItemStyle}>
            <strong>What does a cloud migration engineer do?</strong>
            <p style={textStyle}>
              Cloud migration engineers help move applications, data, databases,
              and infrastructure from legacy environments into cloud platforms.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>Are cloud migration jobs only AWS roles?</strong>
            <p style={textStyle}>
              No. Many are AWS-focused, but cloud migration jobs can involve
              Azure, Google Cloud, hybrid cloud, and multi-cloud migration work.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>What skills are common in cloud migration roles?</strong>
            <p style={textStyle}>
              Common skills include migration planning, application discovery,
              database migration, cloud networking, infrastructure as code,
              testing, cutover planning, and modernization.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>How are migration roles different from cloud engineer jobs?</strong>
            <p style={textStyle}>
              Cloud engineer jobs often focus on cloud operations and builds,
              while migration roles focus on moving and modernizing existing
              systems into cloud environments.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaStyle}>
          <h2 style={h2Style}>Start finding better matches</h2>
          <p style={ctaTextStyle}>
            Use Allira’s signal-based matching to discover cloud migration jobs
            aligned with your application migration, data migration, cloud
            modernization, and multi-cloud transformation experience.
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
