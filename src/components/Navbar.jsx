import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const closeMobileMenu = () => {
    const navbarMenu = document.getElementById("navbarNav");
    const toggleButton = document.querySelector(".navbar-toggler");

    if (navbarMenu?.classList.contains("show")) {
      navbarMenu.classList.remove("show");
      toggleButton?.classList.add("collapsed");
      toggleButton?.setAttribute("aria-expanded", "false");
    }
  };

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

        <a
          className="navbar-brand brand-logo"
          href="#home"
          onClick={closeMobileMenu}
        >
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
              <a href="#home" className="nav-link" onClick={closeMobileMenu}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMobileMenu}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={closeMobileMenu}>
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#internship"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Internship
              </a>
            </li>

            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={closeMobileMenu}>
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#certifications"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Certifications
              </a>
            </li>

            <li className="nav-item">
              <a href="#footer" className="nav-link" onClick={closeMobileMenu}>
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
