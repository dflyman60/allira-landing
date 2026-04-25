import SeoPageHeader from "./SeoPageHeader";
import SeoMatchDemo from "./SeoMatchDemo";

const JOB_CATEGORY = "aws_solutions_architect";

export default function AwsSolutionsArchitectJobs() {
  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <SeoPageHeader pageName="AWS Solutions Architect Jobs" />

          <h1 style={titleStyle}>
            Find AWS Solutions Architect jobs that match your architecture experience
          </h1>

          <p style={leadStyle}>
            Allira helps AWS Solutions Architects, cloud architects, and
            architecture-focused engineers find roles aligned to system design,
            scalability, reliability, and cloud architecture patterns.
          </p>

        </section>

        {/* CONTENT */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>What are AWS Solutions Architect jobs?</h2>

          <p style={textStyle}>
            AWS Solutions Architect jobs focus on designing cloud systems that
            are scalable, reliable, secure, and aligned to business and technical
            requirements. These roles often involve architecture decisions,
            service selection, migration planning, and cloud design patterns.
          </p>

          <p style={textStyle}>
            Some AWS architect roles are customer-facing, helping clients design
            solutions and understand tradeoffs. Others are internal architecture
            roles that guide engineering teams, platform strategy, and cloud
            modernization programs.
          </p>
        </section>

        <SeoMatchDemo pageKey="awsArchitect" jobCategory={JOB_CATEGORY} />

        <section style={sectionStyle}>
          <h2 style={h2Style}>Common responsibilities of solutions architects</h2>

          <ul style={listStyle}>
            <li>Design AWS architectures for applications, data, and platforms</li>
            <li>Translate business needs into technical cloud designs</li>
            <li>Evaluate scalability, reliability, security, and cost tradeoffs</li>
            <li>Create architecture diagrams, migration plans, and reference patterns</li>
            <li>Guide teams on service selection and cloud design decisions</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Key skills for AWS Solutions Architects</h2>

          <ul style={listStyle}>
            <li>AWS services across compute, storage, networking, identity, and data</li>
            <li>System design, distributed systems, scalability, and reliability</li>
            <li>Architecture patterns for cloud-native and migration workloads</li>
            <li>Security, IAM, networking, cost optimization, and resilience planning</li>
            <li>Stakeholder communication, technical discovery, and solution design</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>How architect roles differ from engineering roles</h2>

          <p style={textStyle}>
            Engineering roles often focus on building, deploying, and operating
            systems. AWS Solutions Architect roles focus more on design,
            tradeoffs, patterns, and helping teams choose the right architecture
            before implementation begins.
          </p>

          <p style={textStyle}>
            Architects may still be hands-on, but the core value is usually in
            system design, cloud strategy, technical guidance, and aligning
            solutions with business goals rather than day-to-day DevOps
            execution.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Why signal-based matching matters for architect roles</h2>

          <p style={textStyle}>
            AWS Solutions Architect job titles can overlap with cloud engineer,
            platform engineer, DevOps, and infrastructure roles. The important
            signals are often in the responsibilities: architecture ownership,
            design patterns, stakeholder guidance, scalability, reliability, and
            system-level decision making.
          </p>

          <p style={textStyle}>
            Allira uses signal-based matching to identify architecture-focused
            roles that fit your actual AWS architecture experience, not just
            roles that happen to mention cloud or AWS.
          </p>
        </section>

        {/* FAQ */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={faqItemStyle}>
            <strong>What does an AWS Solutions Architect do?</strong>
            <p style={textStyle}>
              AWS Solutions Architects design cloud systems, recommend services,
              document architecture patterns, and help teams build scalable,
              reliable, and secure solutions on AWS.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>Are solutions architect jobs hands-on?</strong>
            <p style={textStyle}>
              Some are hands-on, but many focus more on architecture, discovery,
              technical guidance, diagrams, stakeholder communication, and design
              decisions.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>What skills matter most for AWS architect roles?</strong>
            <p style={textStyle}>
              Strong AWS service knowledge, system design, scalability,
              networking, security, reliability, cost awareness, and clear
              communication are common requirements.
            </p>
          </div>

          <div style={faqItemStyle}>
            <strong>How are architect roles different from cloud engineer jobs?</strong>
            <p style={textStyle}>
              Cloud engineers usually build and operate systems, while solutions
              architects focus on designing systems, defining patterns, and
              guiding implementation choices.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaStyle}>
          <h2 style={h2Style}>Start finding better matches</h2>
          <p style={ctaTextStyle}>
            Use Allira’s signal-based matching to discover AWS Solutions
            Architect jobs aligned with your cloud architecture, system design,
            reliability, scalability, and stakeholder-facing experience.
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
