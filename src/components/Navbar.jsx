import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-logo">
        Prabhakar Technologies
      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* Menu */}
      <ul className={open ? "nav-menu active" : "nav-menu"}>

        <li onClick={() => setOpen(false)}>
          <Link to="/">Home</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to="/about">About</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to="/services">Services</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to="/careers">Careers</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to="/clients">Clients</Link>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;
