import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
      const response = await fetch(`${API_BASE}/api/early-access`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to submit request.");
    }
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0b1020",
        color: "#f5f7fb",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "32px 24px 80px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "64px",
          }}
        >
          <div style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "0.5px" }}>
            Allira
          </div>

          <button
            style={{
              backgroundColor: "transparent",
              color: "#f5f7fb",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "10px",
              padding: "10px 16px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Coming Soon
          </button>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "32px",
            alignItems: "center",
            marginBottom: "72px",
            marginTop: "20px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                fontSize: "12px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#93a4c3",
                marginBottom: "14px",
              }}
            >
              Precision job matching for cloud engineers
            </div>

            <h1
              style={{
                fontSize: "56px",
                lineHeight: 1.05,
                margin: "0 0 18px 0",
                maxWidth: "700px",
                color: "#ffffff",
                fontWeight: 800,
              }}
            >
              Find cloud roles that actually fit your experience
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "#b8c3d9",
                maxWidth: "620px",
                marginBottom: "28px",
              }}
            >
              Allira cuts through job noise using signal-based matching, so you see
              roles that fit your background instead of generic keyword results.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "12px",
              }}
            >
              <input
                placeholder="e.g. AWS data migration"
                style={{
                  flex: "1 1 320px",
                  minWidth: "280px",
                  padding: "16px 18px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backgroundColor: "#121933",
                  color: "#f5f7fb",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "16px 22px",
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: "#4f7cff",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Find Matches
              </button>
            </div>

            <div style={{ color: "#8ea0c2", fontSize: "14px", marginBottom: "8px" }}>
              No filters. No noise. Just relevant roles.
            </div>

            <div style={{ color: "#9fb0cf", fontSize: "14px", marginBottom: "6px" }}>
              Built for AWS, DevOps, and cloud platform engineers
            </div>

            <div style={{ color: "#7f91b3", fontSize: "13px" }}>
              Live soon — early access opening shortly
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(180deg, #151d3b 0%, #0f1630 100%)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#8ea0c2",
                marginBottom: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Example match
            </div>

            <div
              style={{
                backgroundColor: "#0b1020",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>
                Senior AWS Migration Engineer
              </div>

              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(79,124,255,0.16)",
                  color: "#9cb8ff",
                  borderRadius: "999px",
                  padding: "8px 12px",
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "18px",
                }}
              >
                Strong Match
              </div>

              <div
                style={{
                  color: "#d7deec",
                  marginBottom: "10px",
                  fontSize: "15px",
                  lineHeight: 1.5,
                }}
              >
                Why this matches: Strong alignment with AWS migration and
                infrastructure tooling
              </div>

              <div style={{ color: "#d7deec", marginBottom: "12px", fontSize: "15px" }}>
                Matches: AWS, Data Migration, Terraform
              </div>

              <div style={{ color: "#9eb0d0", marginBottom: "18px", fontSize: "15px" }}>
                Missing: Kubernetes
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {["AWS", "Migration", "Terraform", "Cloud"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "8px 10px",
                      borderRadius: "999px",
                      backgroundColor: "#141c38",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "13px",
                      color: "#c7d3eb",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
            marginBottom: "72px",
          }}
        >
          {[
            {
              title: "Real Matching",
              text: "Allira looks beyond job titles and keyword stuffing to surface roles that actually align with your experience.",
            },
            {
              title: "Explainable Results",
              text: "See why a role matched, which signals were found, and what makes it worth your time.",
            },
            {
              title: "Built for Cloud",
              text: "Focused on AWS, cloud operations, DevOps, platform, and adjacent engineering roles from day one.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#11182f",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "18px",
                padding: "24px",
              }}
            >
              <div style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>
                {item.title}
              </div>
              <div style={{ color: "#aebbd5", lineHeight: 1.6, fontSize: "15px" }}>
                {item.text}
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            background: "linear-gradient(180deg, #11182f 0%, #0d1428 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "22px",
            padding: "32px",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              color: "#8ea0c2",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "12px",
            }}
          >
            How it works
          </div>

          <div style={{ fontSize: "34px", fontWeight: 700, marginBottom: "18px" }}>
            A cleaner path from intent to relevant jobs
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "18px",
            }}
          >
            {[
              "Describe the role you want in plain English.",
              "Allira maps that intent to real-world job signals.",
              "You get ranked cloud roles with clear reasons why they match.",
            ].map((text, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#0b1020",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    backgroundColor: "#4f7cff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    marginBottom: "14px",
                  }}
                >
                  {index + 1}
                </div>
                <div style={{ color: "#d7deec", lineHeight: 1.6 }}>{text}</div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            textAlign: "center",
            padding: "20px 0 10px",
          }}
        >
          <div style={{ fontSize: "34px", fontWeight: 700, marginBottom: "14px" }}>
            Start with better signal
          </div>
          <div
            style={{
              color: "#aebbd5",
              fontSize: "17px",
              maxWidth: "680px",
              margin: "0 auto 24px",
              lineHeight: 1.6,
            }}
          >
            Allira is built for cloud professionals who want fewer false positives
            and better role alignment from the start.
          </div>

          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              background: "linear-gradient(180deg, #11182f 0%, #0d1428 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "22px",
              padding: "32px",
              textAlign: "left",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gap: "18px",
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#d7deec",
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#d7deec",
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#d7deec",
                    }}
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#d7deec",
                    }}
                  >
                    What AWS jobs are you interested in?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    padding: "16px 24px",
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: "#4f7cff",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "16px",
                    cursor: "pointer",
                    opacity: status === "submitting" ? 0.8 : 1,
                  }}
                >
                  {status === "submitting" ? "Submitting..." : "Get Early Access"}
                </button>

                {status === "success" && (
                  <p style={{ color: "#7ee787", fontWeight: 600, margin: 0 }}>
                    Thanks — you're on the early access list. We'll reach out shortly.
                  </p>
                )}

                {status === "error" && (
                  <p style={{ color: "#ff8a8a", fontWeight: 600, margin: 0 }}>
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  backgroundColor: "#121933",
  color: "#f5f7fb",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};
