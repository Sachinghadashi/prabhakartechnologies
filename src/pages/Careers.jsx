import React, { useState } from "react";
import SEO from "../components/SEO";
import ContactModal from "../components/ContactModal";

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const emailAddress = "prabhakartechnologies2@gmail.com";

  return (
    <div className="page">
      <SEO
        title="Careers | Join Prabhakar Technologies"
        description="Explore career opportunities at Prabhakar Technologies. Join our passionate engineering and business development team."
        keywords="careers Prabhakar Technologies, IT jobs India, software engineer jobs"
        url="https://prabhakartechnologies.in/careers"
      />

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Build Your Career With Us</h1>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.15rem", color: "var(--text-muted)" }}>
          We are building a culture of innovation, continuous learning, and impactful engineering.
        </p>
      </div>

      {/* Main Career Card */}
      <div
        style={{
          background: "var(--glass-bg)",
          padding: "40px",
          borderRadius: "24px",
          border: "1px solid var(--glass-border)",
          textAlign: "center",
          maxWidth: "750px",
          margin: "0 auto 40px auto",
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.4)"
        }}
      >
        <div style={{ fontSize: "3.5rem", marginBottom: "15px" }}>🚀</div>
        <h2 style={{ color: "#fff", marginBottom: "12px", fontSize: "1.8rem" }}>
          We are Always Looking for Talent!
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "25px" }}>
          While we may not have immediate active openings posted today, we are rapidly expanding. If you are a passionate software engineer, mobile developer, web developer, or sales professional, we want to hear from you!
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              color: "#fff",
              border: "none",
              padding: "14px 30px",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.4)",
              transition: "transform 0.2s ease"
            }}
          >
            📧 Send Your Resume
          </button>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent("Job Application / Resume")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              color: "#fff",
              border: "1px solid var(--glass-border)",
              padding: "14px 24px",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-block"
            }}
          >
            🚀 Open in Gmail
          </a>
        </div>
      </div>

      {/* Why Join Us Grid */}
      <h2 style={{ textAlign: "center", color: "var(--accent-primary)", marginBottom: "25px" }}>
        Why Join Prabhakar Technologies?
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "25px", borderRadius: "16px", border: "1px solid var(--glass-border)" }}>
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>💡</div>
          <h3 style={{ color: "#fff", marginBottom: "8px" }}>Innovation First</h3>
          <p style={{ fontSize: "0.95rem" }}>Work on modern web, mobile, and cloud technologies with room to experiment and grow.</p>
        </div>

        <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "25px", borderRadius: "16px", border: "1px solid var(--glass-border)" }}>
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🤝</div>
          <h3 style={{ color: "#fff", marginBottom: "8px" }}>Collaborative Culture</h3>
          <p style={{ fontSize: "0.95rem" }}>Direct collaboration with founders and leaders in a transparent, startup environment.</p>
        </div>

        <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "25px", borderRadius: "16px", border: "1px solid var(--glass-border)" }}>
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>📈</div>
          <h3 style={{ color: "#fff", marginBottom: "8px" }}>Career Acceleration</h3>
          <p style={{ fontSize: "0.95rem" }}>Take ownership of end-to-end features and see the direct impact of your work on live products.</p>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSubject="Job Application / Resume - Prabhakar Technologies"
      />
    </div>
  );
};

export default Careers;
