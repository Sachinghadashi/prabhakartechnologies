import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--glass-border)",
        padding: "50px 20px 30px 20px",
        marginTop: "auto"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "40px",
          textAlign: "left"
        }}>
          {/* Col 1: Brand Info */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "12px" }}>
              Prabhakar Technologies
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--text-muted)", marginBottom: "15px" }}>
              Dynamic IT startup founded by Sachin Ghadashi. Engineering high-performance web, mobile, and data analytics solutions.
            </p>
            <span style={{ fontSize: "0.85rem", color: "#10b981", fontWeight: "bold" }}>
              📍 Based in Pune, India • Founded 2026
            </span>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: "#fff", marginBottom: "15px", fontSize: "1.1rem" }}>Quick Navigation</h4>
            <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li><Link to="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link></li>
              <li><Link to="/about" style={{ color: "var(--text-muted)", textDecoration: "none" }}>About Us</Link></li>
              <li><Link to="/services" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Our Services</Link></li>
              <li><Link to="/products" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Our Products</Link></li>
              <li><Link to="/careers" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Careers</Link></li>
            </ul>
          </div>

          {/* Col 3: Published Products */}
          <div>
            <h4 style={{ color: "#fff", marginBottom: "15px", fontSize: "1.1rem" }}>Featured Products</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.prabhakartechnologies.bhaktirang"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  color: "#10b981",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  display: "inline-block"
                }}
              >
                ▶ Bhaktirang App on Google Play ↗
              </a>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                💼 Work Tracker Pro (Coming Soon)
              </span>
            </div>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h4 style={{ color: "#fff", marginBottom: "15px", fontSize: "1.1rem" }}>Get In Touch</h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "10px" }}>
              Have a project or career inquiry? Connect with us directly:
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "0.9rem"
              }}
            >
              💬 Contact Support / Team
            </button>
          </div>
        </div>

        <div style={{
          maxWidth: "1200px",
          margin: "40px auto 0 auto",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          fontSize: "0.85rem",
          color: "var(--text-muted)"
        }}>
          <p>© 2026 Prabhakar Technologies. All Rights Reserved.</p>
          <p>Founded by Sachin Ghadashi</p>
        </div>
      </footer>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSubject="Footer Inquiry - Prabhakar Technologies"
      />
    </>
  );
};

export default Footer;
