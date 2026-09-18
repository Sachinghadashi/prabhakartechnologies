import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ContactModal from "../components/ContactModal";
import "./Home.css";

import logo from "../assets/Prabhakar_Technologies.png";

const techCategories = [
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: ["React.js", "Vite", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "JSON"]
  },
  {
    category: "Mobile & AI Integration",
    icon: "📱",
    skills: ["React Native", "Android Studio", "Google Gemini AI", "OpenAI API", "Prompt Engineering"]
  },
  {
    category: "Database & Cloud",
    icon: "☁️",
    skills: ["PostgreSQL", "Firebase", "MongoDB", "Supabase", "Vercel Cloud"]
  }
];

const developmentSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your business goals, target audience, and project scope to formulate an architectural blueprint."
  },
  {
    step: "02",
    title: "UI/UX & Prototyping",
    desc: "Crafting intuitive, user-centric wireframes and visually stunning modern designs focused on conversion."
  },
  {
    step: "03",
    title: "Engineering & QA Testing",
    desc: "Building scalable code using modern stacks, followed by continuous integration and rigorous quality assurance."
  },
  {
    step: "04",
    title: "Deployment & Support",
    desc: "Deploying to high-performance cloud environments with ongoing monitoring, security, and feature updates."
  }
];

const faqs = [
  {
    q: "What services does Prabhakar Technologies provide?",
    a: "We specialize in Custom Web Development, Mobile Application Engineering (Android & Cross-platform), Data Analytics & BI Dashboards, ERP Systems, and AI Integration."
  },
  {
    q: "How can I start a project with Prabhakar Technologies?",
    a: "Simply click the 'Get in Touch' button or send us an email at prabhakartechnologies2@gmail.com. Our team will schedule an initial consultation to discuss your requirements."
  },
  {
    q: "Where can I download your mobile applications?",
    a: "Our devotional app 'Bhaktirang' is live on the Google Play Store! You can find the direct link on our Products page."
  },
  {
    q: "Do you provide post-launch maintenance and support?",
    a: "Yes! We offer comprehensive post-launch support, security monitoring, server maintenance, and feature enhancement packages."
  }
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="home">
      <SEO
        title="Prabhakar Technologies | Modern Software, Web & Mobile App Solutions"
        description="Prabhakar Technologies is a forward-thinking software development startup specializing in web development, mobile apps, ERP systems, AI solutions, and data analytics."
        keywords="Prabhakar Technologies, IT company India, web development, software engineering, mobile apps, Bhaktirang app, Sachin Ghadashi"
        url="https://prabhakartechnologies.in"
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          ⚡ Dynamic IT Startup & Software Agency
        </div>

        <img src={logo} alt="Prabhakar Technologies" className="hero-logo" />

        <h1>
          Architecting Scalable <span>Web, Mobile & AI Solutions</span>
        </h1>

        <p className="hero-subtext">
          We transform business visions into high-performance web applications, publish engaging mobile apps, and engineer data-driven solutions for the digital era.
        </p>

        {/* Hero CTAs */}
        <div className="hero-cta-group">
          <Link to="/products" className="hero-btn primary-btn">
            Explore Our Products 📲
          </Link>
          <button onClick={() => setIsModalOpen(true)} className="hero-btn secondary-btn">
            Start Your Project 💬
          </button>
        </div>

        {/* Key Metrics Counter */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <h3>2026</h3>
            <p>Founded</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Client Commitment</p>
          </div>
          <div className="stat-card">
            <h3>4+</h3>
            <p>Core Tech Domains</p>
          </div>
          <div className="stat-card">
            <h3>4.8 ★</h3>
            <p>Rated Published Apps</p>
          </div>
        </div>
      </section>

      {/* Featured Published Product Showcase */}
      <section className="featured-section">
        <div className="featured-card">
          <div className="featured-info">
            <span className="live-badge">
              🟢 PUBLISHED ON GOOGLE PLAY STORE
            </span>
            <h2>Bhaktirang - Aarati & Bhajan App</h2>
            <p>
              Our flagship devotional Android application offering authentic Aarties, Bhajans, and Chalisas with offline reading, fast performance, and zero ad distractions.
            </p>
            <div className="featured-action-group">
              <a
                href="https://play.google.com/store/apps/details?id=com.prabhakartechnologies.bhaktirang"
                target="_blank"
                rel="noopener noreferrer"
                className="playstore-btn"
              >
                <span>▶</span> Download on Google Play
              </a>
              <Link to="/products" className="view-details-link">
                View All Products ↗
              </Link>
            </div>
          </div>

          <div className="featured-preview-box">
            <div className="app-icon">🕉️</div>
            <h3>Bhaktirang App</h3>
            <p className="app-author">Prabhakar Technologies</p>
            <div className="app-meta">
              <span>⭐ 4.8 Rating</span>
              <span>•</span>
              <span>Devotional Android App</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="section-container">
        <div className="section-header">
          <h2>Our Core Capabilities</h2>
          <p>Delivering end-to-end digital engineering tailored to modern business requirements.</p>
        </div>

        <div className="services-overview-grid">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Web Application Development</h3>
            <p>Building high-speed, SEO-optimized, and responsive web platforms using React and modern architectures.</p>
            <Link to="/services" className="card-link">Learn More →</Link>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Mobile Application Engineering</h3>
            <p>Designing and deploying cross-platform Android and mobile applications from concept to Play Store release.</p>
            <Link to="/services" className="card-link">Learn More →</Link>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Data Analytics & Business Intelligence</h3>
            <p>Transforming complex enterprise data into actionable metrics, visual dashboards, and growth insights.</p>
            <Link to="/services" className="card-link">Learn More →</Link>
          </div>

          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>AI Integration & Automation</h3>
            <p>Integrating Google Gemini AI and OpenAI models to automate workflows and elevate user experiences.</p>
            <Link to="/services" className="card-link">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* Modern Technology Stack */}
      <section className="section-container tech-stack-section">
        <div className="section-header">
          <h2>Modern Technology Stack</h2>
          <p>We leverage industry-leading tools and frameworks to ensure scalability, security, and speed.</p>
        </div>

        <div className="tech-grid">
          {techCategories.map((cat, idx) => (
            <div key={idx} className="tech-card">
              <div className="tech-card-header">
                <span className="tech-icon">{cat.icon}</span>
                <h3>{cat.category}</h3>
              </div>
              <div className="tech-pills">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Development Process */}
      <section className="section-container process-section">
        <div className="section-header">
          <h2>Our Development Process</h2>
          <p>A structured, transparent workflow designed for consistent software delivery.</p>
        </div>

        <div className="process-grid">
          {developmentSteps.map((step, idx) => (
            <div key={idx} className="process-card">
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about working with Prabhakar Technologies.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${activeFaq === idx ? "active" : ""}`}
              onClick={() => toggleFaq(idx)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                <span className="faq-toggle">{activeFaq === idx ? "−" : "+"}</span>
              </div>
              {activeFaq === idx && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner-section">
        <div className="cta-banner-content">
          <h2>Have a Project in Mind?</h2>
          <p>Let's collaborate to bring your web app, mobile app, or software product to life.</p>
          <button onClick={() => setIsModalOpen(true)} className="cta-banner-btn">
            Get in Touch Now 🚀
          </button>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSubject="Homepage Inquiry - Prabhakar Technologies"
      />
    </div>
  );
};

export default Home;
