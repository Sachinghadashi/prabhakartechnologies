import React, { useState } from "react";
import SEO from "../components/SEO";
import ContactModal from "../components/ContactModal";

const teamMembers = [
  {
    name: "Sachin Ghadashi",
    role: "Co-Founder & CEO",
    bio: "Visionary leader driving innovation and delivering robust IT solutions for modern businesses.",
    image: "/team/sachin.jpg",
    initials: "SG",
    color: "linear-gradient(135deg, #0ea5e9, #f97316)"
  },
  {
    name: "Vijay Bore",
    role: "Co-Founder & Business Development Officer",
    bio: "Dedicated leader focused on client acquisition, market expansion, and brand visibility.",
    image: "/team/vijay.jpg",
    initials: "VB",
    color: "linear-gradient(135deg, #10b981, #3b82f6)"
  },
  {
    name: "Pranali Kadam",
    role: "Co-Founder & Software Engineer",
    bio: "Building scalable, reliable, and user-focused software solutions using modern technologies.",
    image: "/team/pranali.jpg",
    initials: "PK",
    color: "linear-gradient(135deg, #ec4899, #8b5cf6)"
  }
];

const coreServices = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Crafting stunning, responsive, and high-performance web applications tailored to business goals."
  },
  {
    icon: "📱",
    title: "App Development",
    desc: "Building intuitive, high-speed mobile solutions for iOS and Android platforms."
  },
  {
    icon: "📊",
    title: "Data Analytics",
    desc: "Transforming complex raw data into actionable insights to power strategic growth."
  }
];

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="page">
      <SEO
        title="About Us | Prabhakar Technologies"
        description="Learn about Prabhakar Technologies, our mission, vision, and professional IT services."
        keywords="about Prabhakar Technologies, IT company India, Sachin Ghadashi, web development startup"
        url="https://prabhakartechnologies.in/about"
      />

      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>About Us</h1>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.15rem", color: "var(--text-muted)" }}>
          Empowering brands with modern digital solutions, innovative engineering, and dedicated technology partnership.
        </p>
      </div>

      {/* Overview & Key Stats Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "25px",
        marginBottom: "40px"
      }}>
        {/* Company Story Card */}
        <div style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid var(--glass-border)"
        }}>
          <h2 style={{ color: "var(--accent-primary)", marginBottom: "15px", fontSize: "1.6rem" }}>
            Who We Are
          </h2>
          <p style={{ lineHeight: "1.8", marginBottom: "15px" }}>
            Welcome to <strong>Prabhakar Technologies</strong>, a dynamic IT startup founded in <strong>2026</strong> by <strong>Sachin Ghadashi</strong>.
            We are driven by a passion for innovation and a commitment to helping businesses thrive in the digital era.
          </p>
          <p style={{ lineHeight: "1.8" }}>
            As a forward-thinking technology partner, we bridge the gap between business ideas and digital reality by delivering high-impact software, mobile, and web solutions.
          </p>
        </div>

        {/* Highlights / Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "15px"
        }}>
          <div style={{
            background: "rgba(14, 165, 233, 0.1)",
            border: "1px solid rgba(14, 165, 233, 0.3)",
            padding: "20px",
            borderRadius: "16px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <h3 style={{ fontSize: "2.2rem", color: "var(--accent-primary)", marginBottom: "5px" }}>2026</h3>
            <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "#f8fafc" }}>Year Founded</p>
          </div>
          <div style={{
            background: "rgba(249, 115, 22, 0.1)",
            border: "1px solid rgba(249, 115, 22, 0.3)",
            padding: "20px",
            borderRadius: "16px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <h3 style={{ fontSize: "2.2rem", color: "var(--accent-secondary)", marginBottom: "5px" }}>3+</h3>
            <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "#f8fafc" }}>Core Domains</p>
          </div>
          <div style={{
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            padding: "20px",
            borderRadius: "16px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gridColumn: "span 2"
          }}>
            <h3 style={{ fontSize: "1.8rem", color: "#10b981", marginBottom: "5px" }}>100% Client-Focused</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Delivering tailored digital solutions with complete transparency.</p>
          </div>
        </div>
      </div>

      <hr style={{ borderColor: "var(--glass-border)", margin: "40px 0" }} />

      {/* Core Expertise Cards */}
      <h2 style={{ color: "var(--accent-primary)", marginBottom: "25px", textAlign: "center" }}>
        Our Core Expertise
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
        marginBottom: "40px"
      }}>
        {coreServices.map((service, index) => (
          <div key={index} style={{
            background: "rgba(255, 255, 255, 0.03)",
            padding: "25px",
            borderRadius: "16px",
            border: "1px solid var(--glass-border)",
            transition: "transform 0.3s ease, border-color 0.3s ease"
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>{service.icon}</div>
            <h3 style={{ color: "#fff", marginBottom: "10px", fontSize: "1.3rem" }}>{service.title}</h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{service.desc}</p>
          </div>
        ))}
      </div>

      <hr style={{ borderColor: "var(--glass-border)", margin: "40px 0" }} />

      {/* Meet Our Team Section with Image Support */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "var(--accent-primary)", marginBottom: "10px", textAlign: "center" }}>
          Meet Our Leadership & Team
        </h2>
        <p style={{ textAlign: "center", marginBottom: "30px", color: "var(--text-muted)" }}>
          The passionate minds behind Prabhakar Technologies driving technology & growth.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px"
        }}>
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--glass-bg)",
                padding: "30px 20px",
                borderRadius: "20px",
                border: "1px solid var(--glass-border)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              {/* Profile Image with Fallback Badge */}
              <div style={{ position: "relative", width: "100px", height: "100px", marginBottom: "18px" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => {
                    e.target.style.display = "none";
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = "flex";
                    }
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid var(--accent-primary)",
                    boxShadow: "0 6px 20px rgba(14, 165, 233, 0.3)"
                  }}
                />
                {/* Fallback Badge when photo is missing */}
                <div
                  style={{
                    display: "none",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: member.color,
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    color: "#fff",
                    border: "3px solid var(--accent-primary)",
                    boxShadow: "0 6px 20px rgba(14, 165, 233, 0.3)"
                  }}
                >
                  {member.initials}
                </div>
              </div>

              <h3 style={{ color: "#fff", marginBottom: "6px", fontSize: "1.25rem" }}>{member.name}</h3>
              <span style={{
                color: "#10b981",
                fontSize: "0.85rem",
                fontWeight: "700",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
                display: "inline-block"
              }}>
                {member.role}
              </span>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.5", color: "var(--text-muted)" }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ borderColor: "var(--glass-border)", margin: "40px 0" }} />

      {/* Our Clients Section */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "var(--accent-primary)", marginBottom: "15px" }}>Our Trusted Clients</h2>
        <p style={{ marginBottom: "20px" }}>
          We take pride in partnering with growing businesses to engineer digital solutions that produce real business results.
        </p>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.04)",
            padding: "14px 24px",
            borderRadius: "12px",
            border: "1px solid var(--glass-border)",
            color: "#fff",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span style={{ fontSize: "1.2rem" }}>🤝</span> Dilraj Kirana Store
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div style={{
        background: "linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(249, 115, 22, 0.15))",
        border: "1px solid var(--glass-border)",
        borderRadius: "20px",
        padding: "35px",
        textAlign: "center",
        marginTop: "30px"
      }}>
        <h2 style={{ color: "#fff", marginBottom: "10px", fontSize: "1.8rem" }}>
          Ready to Elevate Your Business?
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "20px", maxWidth: "600px", margin: "0 auto 20px auto" }}>
          Whether you need a modern web application, mobile app development, or data analytics, we are here to bring your vision to life.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            padding: "14px 32px",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.4)",
            transition: "transform 0.2s ease"
          }}
        >
          Get in Touch 🚀
        </button>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSubject="Project Inquiry - Prabhakar Technologies"
      />
    </div>
  );
};

export default About;
