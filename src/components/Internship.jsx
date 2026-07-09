  import React from "react";
  import "../styles/Internship.css";

  import {
    FaBriefcase,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGithub,
    FaJava,
  } from "react-icons/fa";

  import { SiBootstrap, SiMysql, SiSpringboot } from "react-icons/si";

  const Internship = () => {
    return (
      <section id="internship" className="internship-section">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            Internship Experience
          </h2>

          <div className="internship-card" data-aos="fade-up">
            <div className="company-header">
              <div className="company-icon">
                <FaBriefcase />
              </div>

              <div>
                <h3>Qono Technologies Pvt Ltd</h3>

                <span className="role-badge">
                  Full Stack Web Development Intern
                </span>
              </div>
            </div>

            <p className="internship-description">
              Completed a Full Stack Web Development Internship where I gained
              hands-on experience in modern web technologies and developed
              real-world applications.
            </p>

            <h5><b>Technologies Learned</b></h5>

            <div className="internship-skills">
              <div className="skill-badge">
                <FaHtml5 className="html-icon" />
                HTML
              </div>

              <div className="skill-badge">
                <FaCss3Alt className="css-icon" />
                CSS
              </div>

              <div className="skill-badge">
                <FaJs className="js-icon" />
                JavaScript
              </div>

              <div className="skill-badge">
                <SiBootstrap className="bootstrap-icon" />
                Bootstrap
              </div>

              <div className="skill-badge">
                <FaReact className="react-icon" />
                React
              </div>

              <div className="skill-badge">
                <SiMysql className="mysql-icon" />
                MySQL
              </div>
              <div className="skill-badge">
                <FaJava className="java-icon" />
                Java
              </div>

              <div className="skill-badge">
                <SiSpringboot className="spring-icon" />
                Spring Boot
              </div>
            </div>
            <div className="project-row">
              <div>
                <h6>Project Developed</h6>
                <p className="project-name">Billing Software</p>
              </div>

              <a
                href="https://github.com/kirubashankarganesan/billing-software"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub />
                GitHub Project
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Internship;
