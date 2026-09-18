import React, { useState } from "react";
import "./ContactModal.css";

const ContactModal = ({ isOpen, onClose, defaultSubject = "General Inquiry" }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: defaultSubject,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const emailAddress = "prabhakartechnologies2@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
    formData.subject || defaultSubject
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">📬 Get in Touch</h2>
        <p className="modal-subtitle">
          We would love to hear from you! Reach out directly or send us a message below.
        </p>

        {/* Quick Contact Options */}
        <div className="contact-options-grid">
          <div className="email-display-box">
            <span className="email-text">✉️ {emailAddress}</span>
            <button className="copy-btn" onClick={handleCopyEmail}>
              {copied ? "✓ Copied!" : "📋 Copy Email"}
            </button>
          </div>

          <div className="quick-links-group">
            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link-btn gmail-btn"
            >
              🚀 Compose in Gmail
            </a>
            <a
              href={`mailto:${emailAddress}?subject=${encodeURIComponent(defaultSubject)}`}
              className="quick-link-btn mailto-btn"
            >
              📧 Open Mail App
            </a>
          </div>
        </div>

        <hr className="modal-divider" />

        {/* Interactive Form */}
        {submitted ? (
          <div className="submission-success">
            <span className="success-icon">🎉</span>
            <h3>Message Drafted!</h3>
            <p>
              Thank you, <strong>{formData.name || "Friend"}</strong>. If your mail client didn't open automatically, please click below to send via Gmail:
            </p>
            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="send-now-btn"
            >
              Send via Gmail Web
            </a>
            <button
              className="reset-btn"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                required
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="e.g. Project Inquiry / Job Application"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Message / Resume Link</label>
              <textarea
                rows="4"
                required
                placeholder="Tell us about your project requirements or share your portfolio/resume link..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="submit-form-btn">
              Send Message 🚀
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
