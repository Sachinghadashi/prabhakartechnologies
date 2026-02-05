import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Prabhakar Technologies</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/clients">Clients</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
