import React, { useState } from "react";
import SEO from "../components/SEO";
import ContactModal from "../components/ContactModal";

const servicesList = [
  {
    icon: "🌐",
    title: "Web Application & Website Development",
    subtitle: "High-Performance Web Engineering",
    description: "We design and build modern, scalable web applications, business portals, and SEO-optimized corporate websites engineered for lightning-fast speeds and high conversion.",
    capabilities: [
      "Custom React.js & Next.js Web Applications",
      "Corporate Websites & E-Commerce Platforms",
      "SEO, Core Web Vitals & Page Speed Optimization",
      "Responsive, Mobile-First Glassmorphism Interfaces"
    ],
    techStack: ["React.js", "Vite", "Node.js", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    icon: "📱",
    title: "Mobile Application Engineering",
    subtitle: "Android & Cross-Platform Mobile Apps",
    description: "From concept and UI/UX prototyping to Google Play Store publishing, we engineer intuitive mobile apps like our published devotional app, Bhaktirang.",
    capabilities: [
      "Native Android & Cross-Platform Mobile Apps",
      "UI/UX Design & Prototyping",
      "Google Play Store Publishing & Maintenance",
      "Offline Data Caching & Push Notifications"
    ],
    techStack: ["React Native", "Android Studio", "Firebase", "REST APIs", "SQLite"]
  },
  {
    icon: "⚙️",
    title: "Enterprise ERP & Business Automation",
    subtitle: "Streamline Business Operations",
    description: "Tailor-made Enterprise Resource Planning (ERP) software and management systems designed to automate daily tasks, inventory, shifts, and business workflows.",
    capabilities: [
      "Custom Business ERP & Work Trackers",
      "Hotel & Retail Management Systems",
      "Overtime & Shift Log Management",
      "Role-Based Access Control & Security"
    ],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Java", "Docker"]
  },
  {
    icon: "🤖",
    title: "AI Integration & Automation",
    subtitle: "Next-Gen Artificial Intelligence",
    description: "Empower your web and mobile applications with AI integration, automated chatbots, prompt engineering, and intelligent workflow automation.",
    capabilities: [
      "Google Gemini & OpenAI API Integration",
      "Intelligent Chatbots & Customer Support Agents",
      "Automated Text & Document Processing",
      "AI Prompt Engineering & Custom Agents"
    ],
    techStack: ["Python", "Google Gemini API", "OpenAI API", "REST APIs"]
  },
  {
    icon: "📊",
    title: "Data Analytics & Business Intelligence",
    subtitle: "Turn Data Into Smart Growth",
    description: "Transform complex raw business data into interactive visual metrics dashboards, automated reporting pipelines, and strategic data insights.",
    capabilities: [
      "Interactive Business Intelligence Dashboards",
      "Automated Data ETL & Processing Pipelines",
      "Custom Reporting Tools & Export Systems",
      "Database Architecture & Performance Tuning"
    ],
    techStack: ["Python", "PostgreSQL", "Pandas", "SQL", "Supabase"]
  }
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleInquire = (serviceTitle) => {
    setSelectedService(`Inquiry for ${serviceTitle}`);
    setIsModalOpen(true);
  };

  return (
    <div className="page">
      <SEO
        title="Our Services | Web, Mobile, ERP & AI Solutions | Prabhakar Technologies"
        description="Comprehensive IT & software services by Prabhakar Technologies: Custom Web Applications, Mobile App Engineering, Business ERP Systems, AI Solutions, and Data Analytics."
        keywords="web development India, app development startup, ERP systems, AI solutions, hotel management software, data analytics"
        url="https://prabhakartechnologies.in/services"
      />

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Our Enterprise & Digital Services</h1>
        <p style={{ maxWidth: "750px", margin: "0 auto", fontSize: "1.15rem", color: "var(--text-muted)" }}>
          End-to-end digital solutions designed to streamline business operations, elevate user experiences, and accelerate growth.
        </p>
      </div>

      {/* Services Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--glass-bg)",
              padding: "35px 25px",
              borderRadius: "24px",
              border: "1px solid var(--glass-border)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.4)"
            }}
          >
            <div>
              <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{service.icon}</div>
              <h2 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: "6px" }}>{service.title}</h2>
              <span style={{ color: "var(--accent-primary)", fontSize: "0.85rem", fontWeight: "bold", textTransform: "uppercase", display: "inline-block", marginBottom: "15px" }}>
                {service.subtitle}
              </span>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--text-muted)", marginBottom: "20px" }}>
                {service.description}
              </p>

              {/* Deliverables List */}
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ color: "#fff", fontSize: "0.95rem", marginBottom: "10px" }}>Key Deliverables:</h4>
                <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                  {service.capabilities.map((cap, cIdx) => (
                    <li
                      key={cIdx}
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--glass-border)",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        color: "#f8fafc",
                        marginBottom: "6px"
                      }}
                    >
                      ✓ {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "25px" }}>
                {service.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      background: "rgba(14, 165, 233, 0.1)",
                      color: "#38bdf8",
                      border: "1px solid rgba(14, 165, 233, 0.25)",
                      padding: "3px 10px",
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: "600"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleInquire(service.title)}
              style={{
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "0.95rem",
                cursor: "pointer",
                boxShadow: "0 8px 20px -4px rgba(14, 165, 233, 0.4)",
                transition: "transform 0.2s ease"
              }}
            >
              Start This Project 🚀
            </button>
          </div>
        ))}
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSubject={selectedService || "Enterprise Service Inquiry"}
      />
    </div>
  );
};

export default Services;
