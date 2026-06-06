import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/Prabhakar_Technologies.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-logo">
        <Link to="/" className="nav-logo-link">
          <img src={logo} alt="Prabhakar Technologies" className="nav-logo-img" />
        </Link>
      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        {open ? '✕' : '☰'}
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
          <Link to="/products">Products</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to="/careers">Careers</Link>
        </li>


      </ul>

    </nav>
  );
};

export default Navbar;
