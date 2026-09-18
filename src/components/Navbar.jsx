import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactModal from "./ContactModal";
import "./Navbar.css";

import logo from "../assets/Prabhakar_Technologies.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" className="nav-logo-link">
            <img src={logo} alt="Prabhakar Technologies" className="nav-logo-img" />
          </Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </div>

        {/* Menu */}
        <ul className={open ? "nav-menu active" : "nav-menu"}>
          <li onClick={() => setOpen(false)} className={isActive("/") ? "active-link" : ""}>
            <Link to="/">Home</Link>
          </li>

          <li onClick={() => setOpen(false)} className={isActive("/about") ? "active-link" : ""}>
            <Link to="/about">About</Link>
          </li>

          <li onClick={() => setOpen(false)} className={isActive("/services") ? "active-link" : ""}>
            <Link to="/services">Services</Link>
          </li>

          <li onClick={() => setOpen(false)} className={isActive("/products") ? "active-link" : ""}>
            <Link to="/products">Products</Link>
          </li>

          <li onClick={() => setOpen(false)} className={isActive("/careers") ? "active-link" : ""}>
            <Link to="/careers">Careers</Link>
          </li>

          <li onClick={() => setOpen(false)}>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                color: "#fff",
                border: "none",
                padding: "8px 20px",
                borderRadius: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "0.9rem"
              }}
            >
              Contact Us 💬
            </button>
          </li>
        </ul>
      </nav>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSubject="General Inquiry - Prabhakar Technologies"
      />
    </>
  );
};

export default Navbar;
