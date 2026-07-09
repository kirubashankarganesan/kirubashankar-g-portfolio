import React from "react";
import "../styles/Footer.css";

import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="container">
        <div className="footer-heading">
          <p>LET'S CONNECT</p>

          <h2>Let's Build Something Amazing Together</h2>
        </div>

        <div className="footer-card">
          <div className="row">
            <div className="col-lg-7">
              <h3>Contact Information</h3>

              <div className="contact-box">
                <FaEnvelope className="contact-icon" />

                <div>
                  <small>Email</small>

                  <h6>kirubashankarg2005@gmail.com</h6>
                </div>
              </div>

              <div className="contact-box">
                <FaPhone className="contact-icon" />

                <div>
                  <small>Phone</small>

                  <h6>+91 9600362841</h6>
                </div>
              </div>

              <div className="contact-box">
                <FaLocationDot className="contact-icon" />

                <div>
                  <small>Location</small>

                  <h6>Coimbatore, Tamil Nadu</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <h3>Connect With Me</h3>

              <a
                href="https://www.linkedin.com/in/kirubashankar-g-5613422a4/"
                className="social-box"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://github.com/kirubashankarganesan"
                className="social-box"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 <strong>Kirubashankar</strong>. All Rights Reserved.
          </p>

          <a href="#home" className="back-top">
            <FaArrowUp />
            Back To Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
