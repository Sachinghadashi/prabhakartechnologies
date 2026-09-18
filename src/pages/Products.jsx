import React, { useState } from "react";
import SEO from "../components/SEO";
import ContactModal from "../components/ContactModal";

const productsList = [
  {
    id: "bhaktirang",
    name: "Bhaktirang - Aarati & Bhajan App",
    category: "Mobile App (Android)",
    status: "Available Now",
    isLive: true,
    rating: "4.8 ★",
    downloads: "Devotional App",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.prabhakartechnologies.bhaktirang",
    description: "Bhaktirang is a comprehensive, beautifully crafted spiritual app designed to bring authentic Aartis, Bhajans, Chalisas, and Stotras right to your smartphone.",
    highlights: [
      "🕉️ Wide collection of authentic Aarties & Bhajans",
      "📶 Offline Reading Mode - access without active internet",
      "⚡ Ultra-fast, clean & distraction-free interface",
      "🔔 Daily devotional notifications & easy bookmarking"
    ],
    accentColor: "linear-gradient(135deg, #f97316, #ea580c)",
    badgeColor: "#f97316"
  },
  {
    id: "work-tracker",
    name: "Work Tracker Pro",
    category: "Productivity & Time Management",
    status: "In Testing / Coming Soon",
    isLive: false,
    rating: "Upcoming Product",
    downloads: "Enterprise Tool",
    playStoreUrl: null,
    description: "A professional productivity platform for individuals and teams to track work hours, manage overtime calculations, monitor shifts, and generate detailed work reports.",
    highlights: [
      "⏱️ One-tap work shift & overtime tracking",
      "📊 Automated work hour statistics & PDF exports",
      "💼 Task status and project time management",
      "🔒 Secure cloud sync and offline data logging"
    ],
    accentColor: "linear-gradient(135deg, #0ea5e9, #0284c7)",
    badgeColor: "#0ea5e9"
  },
  {
    id: "business-erp",
    name: "Enterprise Business & Hotel Management ERP",
    category: "Enterprise ERP Software",
    status: "Custom Deployment",
    isLive: false,
    rating: "B2B Enterprise Solution",
    downloads: "Custom Software",
    playStoreUrl: null,
    description: "An integrated Enterprise Resource Planning (ERP) platform designed for hotels, retail businesses, and service enterprises to manage reservations, inventory, staff shifts, and billing.",
    highlights: [
      "🏨 Hotel reservation, room status & guest check-ins",
      "🧾 POS Billing, GST invoicing & automated receipts",
      "📦 Inventory tracking & supplier purchase management",
      "📈 Comprehensive financial & sales analytics"
    ],
    accentColor: "linear-gradient(135deg, #10b981, #059669)",
    badgeColor: "#10b981"
  }
];

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleInquireProduct = (productName) => {
    setSelectedProduct(`Inquiry for ${productName}`);
    setIsModalOpen(true);
  };

  return (
    <div className="page">
      <SEO
        title="Our Products | Bhaktirang, Work Tracker Pro & Enterprise ERP | Prabhakar Technologies"
        description="Explore software applications developed by Prabhakar Technologies: Bhaktirang Aarati & Bhajan App available on Google Play, Work Tracker Pro, and Enterprise ERP Suite."
        keywords="Bhaktirang app, Aarati Bhajan app, Prabhakar Technologies products, Work Tracker Pro, Enterprise ERP, Play Store apps"
        url="https://prabhakartechnologies.in/products"
      />

      {/* Hero Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Our Software Products</h1>
        <p style={{ maxWidth: "750px", margin: "0 auto", fontSize: "1.15rem", color: "var(--text-muted)" }}>
          Innovating digital experiences. Explore our published mobile applications and enterprise software products.
        </p>
      </div>

      {/* Products Showcase Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
        {productsList.map((product) => (
          <div
            key={product.id}
            style={{
              background: "var(--glass-bg)",
              borderRadius: "24px",
              border: "1px solid var(--glass-border)",
              padding: "35px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              alignItems: "center",
              boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.4)"
            }}
          >
            {/* Left Content */}
            <div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px", flexWrap: "wrap" }}>
                <span
                  style={{
                    background: `${product.badgeColor}22`,
                    color: product.badgeColor,
                    border: `1px solid ${product.badgeColor}55`,
                    padding: "4px 14px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                >
                  {product.category}
                </span>
                {product.isLive && (
                  <span
                    style={{
                      background: "rgba(16, 185, 129, 0.15)",
                      color: "#10b981",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      padding: "4px 14px",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      fontWeight: "bold"
                    }}
                  >
                    🟢 Published on Play Store
                  </span>
                )}
              </div>

              <h2 style={{ fontSize: "2rem", color: "#fff", marginBottom: "10px" }}>{product.name}</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text-muted)", marginBottom: "20px" }}>
                {product.description}
              </p>

              {/* Highlights Bullet List */}
              <div style={{ marginBottom: "25px" }}>
                <h4 style={{ color: "#fff", marginBottom: "10px", fontSize: "1.1rem" }}>Key Features & Modules:</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
                  {product.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--glass-border)",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        fontSize: "0.9rem",
                        color: "#f8fafc"
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action / Store Button */}
              {product.isLive && product.playStoreUrl ? (
                <div style={{ display: "flex", gap: "15px", alignItems: "center", flexWrap: "wrap" }}>
                  <a
                    href={product.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                      color: "#fff",
                      padding: "14px 28px",
                      borderRadius: "30px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "1.05rem",
                      boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.5)",
                      transition: "transform 0.2s ease"
                    }}
                  >
                    <span>▶</span> Get it on Google Play
                  </a>
                  <a
                    href={product.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--accent-primary)",
                      fontSize: "0.95rem",
                      textDecoration: "underline",
                      fontWeight: "500"
                    }}
                  >
                    View App Listing ↗
                  </a>
                </div>
              ) : (
                <button
                  onClick={() => handleInquireProduct(product.name)}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid var(--glass-border)",
                    padding: "12px 24px",
                    borderRadius: "30px",
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "0.95rem"
                  }}
                >
                  Request Demo / Custom ERP Solution 💼
                </button>
              )}
            </div>

            {/* Right Visual Card */}
            <div
              style={{
                background: product.accentColor,
                borderRadius: "20px",
                padding: "35px 25px",
                textAlign: "center",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)"
              }}
            >
              <div style={{ fontSize: "4rem", marginBottom: "15px" }}>
                {product.id === "bhaktirang" ? "🕉️" : product.id === "work-tracker" ? "⏱️" : "🏨"}
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>{product.name}</h3>
              <p style={{ opacity: "0.9", fontSize: "0.95rem", marginBottom: "20px" }}>
                Crafted by Prabhakar Technologies
              </p>
              {product.playStoreUrl ? (
                <a
                  href={product.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#ffffff",
                    color: "#0f172a",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                  }}
                >
                  Download App Now
                </a>
              ) : (
                <button
                  onClick={() => handleInquireProduct(product.name)}
                  style={{
                    background: "#ffffff",
                    color: "#0f172a",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  Inquire Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSubject={selectedProduct || "Product Demo Inquiry"}
      />
    </div>
  );
};

export default Products;
