import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar navbar-scroll" : "navbar"}>
      <div className="nav-container">

        <Link to="/" className="logo">
          🏠 Find<span>YourPG</span>
        </Link>

        <div className={menuOpen ? "nav-links active" : "nav-links"}>

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/pgs" onClick={() => setMenuOpen(false)}>
            PGs
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <button className="list-btn">
            List Your PG
          </button>

        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;