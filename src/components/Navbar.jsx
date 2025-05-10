import { Link } from "react-router-dom";
import { HomeIcon, InfoIcon, CodeIcon, MailIcon } from "lucide-react";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">ChrstSean</h1>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link"><HomeIcon className="icon" /> Home</Link></li>
        <li><Link to="/about" className="nav-link"><InfoIcon className="icon" /> About</Link></li>
        <li><Link to="/projects" className="nav-link"><CodeIcon className="icon" /> Projects</Link></li>
        <li><Link to="/contact" className="nav-link"><MailIcon className="icon" /> Contact</Link></li>
      </ul>
    </nav>
  );
}
