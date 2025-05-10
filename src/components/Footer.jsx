import { Github, Instagram, Facebook } from "lucide-react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/Chrstsean" className="footer-link"><Github /></a>
        <a href="https://www.instagram.com/itzz.chrst/" className="footer-link"><Instagram /></a>
        <a href="https://www.facebook.com/owens.protacio" className="footer-link"><Facebook /></a>
      </div>
      <p className="footer-text">&copy; 2025 ChrstSean. All rights reserved.</p>
    </footer>
  );
}