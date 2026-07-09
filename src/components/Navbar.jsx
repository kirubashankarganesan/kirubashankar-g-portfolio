import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar ${
        scrolled ? "navbar-scroll" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}

        <a className="navbar-brand brand-logo" href="#home">
          <div className="logo-circle">KS</div>
          <span className="brand-name">Kirubashankar</span>
        </a>
        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#internship" className="nav-link">
                Internship
              </a>
            </li>

            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a href="#certifications" className="nav-link">
                Certifications
              </a>
            </li>

            <li className="nav-item">
              <a href="#footer" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
