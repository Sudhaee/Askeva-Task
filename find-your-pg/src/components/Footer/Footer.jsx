import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-logo">
          <h2>🏠 Find Your PG</h2>
          <p>
            Helping students and professionals find
            safe, verified and affordable PG accommodations.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/pgs">PGs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>📍 Chennai, Tamil Nadu</p>
          <p>📞 +91 9876543210</p>
          <p>✉ support@findyourpg.com</p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="copyright">
        © 2026 Find Your PG. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;