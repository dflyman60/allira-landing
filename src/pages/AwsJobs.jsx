import { Helmet } from "react-helmet-async";
import SeoPageHeader from "./SeoPageHeader";
import SeoMatchDemo from "./SeoMatchDemo";

const AWS_JOB_PATHS = [
  { label: "AWS Migration Jobs", href: "/aws-migration-jobs", category: "aws_migration" },
  {
    label: "AWS Solutions Architect Jobs",
    href: "/aws-solutions-architect-jobs",
    category: "aws_solutions_architect",
  },
  { label: "Cloud Engineer Jobs", href: "/cloud-engineer-jobs", category: "cloud_engineer" },
  { label: "DevOps Jobs", href: "/devops-jobs", category: "devops" },
  { label: "Platform Engineer Jobs", href: "/platform-engineer-jobs", category: "platform_engineer" },
  {
    label: "Infrastructure Engineer Jobs",
    href: "/infrastructure-engineer-jobs",
    category: "infrastructure_engineer",
  },
  { label: "SRE Jobs", href: "/site-reliability-engineer-jobs", category: "sre" },
  { label: "Cloud Migration Jobs", href: "/cloud-migration-jobs", category: "cloud_migration" },
];

const JOB_CATEGORY = "aws_general";

export default function AwsJobs() {
  return (
    <div style={pageStyle}>
      <Helmet>
        <title>AWS Jobs | Find Cloud Roles That Match Your Experience</title>
        <meta
          name="description"
          content="Explore AWS jobs across migration, DevOps, platform engineering, and architecture. Find roles aligned to your real cloud experience with signal-based matching."
        />
      </Helmet>

      <div style={containerStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <SeoPageHeader pageName="AWS Jobs" />

          <h1 style={titleStyle}>
            Find AWS jobs that actually match your cloud experience
          </h1>

          <p style={leadStyle}>
            AWS jobs vary widely across migration, architecture, DevOps,
            infrastructure, platform, and reliability roles. Allira helps you
            search by real cloud signals instead of relying on broad job titles
            alone.
          </p>

        </section>

        <SeoMatchDemo pageKey="awsJobs" jobCategory={JOB_CATEGORY} />

        {/* SUPPORTED PATHS */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Supported AWS job paths</h2>

          <p style={textStyle}>
            Use these focused pages to explore the AWS and cloud role families
            Allira is built to understand.
          </p>

          <div style={pathGridStyle}>
            {AWS_JOB_PATHS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  window.gtag?.("event", "seo_job_path_click", {
                    event_category: "navigation",
                    event_label: "/aws-jobs",
                    job_category: JOB_CATEGORY,
                    target_category: item.category,
                    target_path: item.href,
                  });
                }}
                style={pathCardStyle}
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Why AWS job search is difficult</h2>

          <p style={textStyle}>
            AWS job titles are often too broad. A role labeled cloud engineer
            might be focused on migration, infrastructure automation, operations,
            architecture, Kubernetes platforms, or reliability work.
          </p>

          <p style={textStyle}>
            Traditional job boards rely heavily on keywords, which makes it easy
            to miss good roles or waste time on jobs that only loosely match
            your cloud background.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>How signal-based matching helps</h2>

          <p style={textStyle}>
            Allira looks for deeper signals: AWS services, migration
            responsibilities, architecture patterns, Terraform, CI/CD,
            Kubernetes, observability, platform engineering, and cloud
            operations work.
          </p>

          <p style={textStyle}>
            That signal-based approach helps distinguish AWS migration jobs from
            AWS architect jobs, DevOps jobs, platform engineer jobs,
            infrastructure jobs, and SRE roles.
          </p>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={faqItemStyle}>
            <strong>What types of AWS jobs does Allira support?</strong>
            <p style={textStyle}>
              Allira supports AWS-related cloud roles across migration,
              architecture, cloud engineering, DevOps, platform engineering,
              infrastructure engineering, reliability, and cloud operations.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>How is Allira different from searching AWS jobs on job boards?</strong>
            <p style={textStyle}>
              Instead of matching only keywords, Allira evaluates job signals
              like technologies, responsibilities, patterns, and role intent to
              help identify better-fit cloud roles.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>Is Allira only for AWS migration roles?</strong>
            <p style={textStyle}>
              No. AWS migration is one supported path, but Allira also supports
              cloud engineer, architect, DevOps, platform, infrastructure, and
              SRE-style cloud roles.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>Can Allira help with DevOps, platform, and infrastructure roles?</strong>
            <p style={textStyle}>
              Yes. Allira is designed to recognize the difference between
              DevOps automation, platform engineering, cloud infrastructure, and
              reliability work so users can find roles that fit their experience.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaStyle}>
          <h2 style={h2Style}>Start finding better matches</h2>
          <p style={ctaTextStyle}>
            Use Allira’s signal-based matching to discover AWS jobs aligned with
            your cloud migration, architecture, DevOps, platform, infrastructure,
            and reliability experience.
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

const pathGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
  marginTop: "16px",
};

const pathCardStyle = {
  display: "block",
  padding: "16px",
  borderRadius: "12px",
  background: "#121933",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#f5f7fb",
  textDecoration: "none",
  fontWeight: "bold",
};

const faqItemStyle = {
  marginBottom: "16px",
};

const ctaStyle = {
  marginTop: "40px",
  paddingTop: "20px",
  borderTop: "1px solid rgba(255,255,255,0.1)",
};
