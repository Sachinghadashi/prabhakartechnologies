import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/Prabhakar_Technologies.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Prabhakar Technologies" style={{ height: '85px', objectFit: 'contain', transform: 'scale(1.3)', transformOrigin: 'left center' }} />
        </Link>
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
          <Link to="/products">Products</Link>
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
