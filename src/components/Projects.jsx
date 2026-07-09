import React from "react";
import "../styles/Projects.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

import { SiBootstrap, SiMysql, SiSpringboot } from "react-icons/si";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">
          My Projects
        </h2>

        <div
          id="projectCarousel"
          className="carousel slide"
          data-bs-ride="false"
          data-bs-touch="true"
        >
          <div className="carousel-inner">
            {/* =====================================
                    PROJECT 1
            ====================================== */}

            <div className="carousel-item active">
              <div className="project-card" data-aos="zoom-in">
                <div className="project-header">
                  <div>
                    <h3>Student Information Management System</h3>

                    <span className="project-badge">
                      Full Stack Web Application
                    </span>
                  </div>

                  <div className="project-nav">
                    <span className="nav-space"></span>

                    <button
                      className="nav-btn"
                      type="button"
                      data-bs-target="#projectCarousel"
                      data-bs-slide="next"
                    >
                      ❯
                    </button>
                  </div>
                </div>

                <p className="project-description">
                  Student Information Management System (SIMS) is a Full Stack
                  Web Application developed to manage student records,
                  attendance, leave requests, academic performance, task
                  assignments and communication between students and faculty
                  through one centralized platform.
                </p>

                <h5>Technologies Used</h5>

                <div className="project-skills">
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
                    <SiSpringboot className="spring-icon" />
                    Spring Boot
                  </div>
                </div>

                <div className="project-row">
                  <div>
                    <h6>Project Developed</h6>

                    <p className="project-name">
                      Student Information Management System
                    </p>
                  </div>

                  <a
                    href="https://github.com/kirubashankarganesan/student-information-management-system"
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

            {/* =====================================
                    PROJECT 2
            ====================================== */}

            <div className="carousel-item">
              <div className="project-card" data-aos="zoom-in">
                <div className="project-header">
                  <div>
                    <h3>Expense Tracker</h3>

                    <span className="project-badge">
                      Full Stack Web Application
                    </span>
                  </div>

                  <div className="project-nav">
                    <button
                      className="nav-btn"
                      type="button"
                      data-bs-target="#projectCarousel"
                      data-bs-slide="prev"
                    >
                      ❮
                    </button>

                    <span className="nav-space"></span>
                  </div>
                </div>
                <p className="project-description">
                  Developed a secure full-stack Expense Tracker application with
                  JWT-based authentication, expense, category, and budget
                  management. Built RESTful APIs using Spring Boot and
                  integrated them with a responsive React frontend featuring
                  dashboard analytics, charts, and PDF/Excel report generation.
                </p>

                <h5>Technologies Used</h5>

                <div className="project-skills">
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
                    <SiSpringboot className="spring-icon" />
                    Spring Boot
                  </div>
                </div>

                <div className="project-row">
                  <div>
                    <h6>Project Developed</h6>

                    <p className="project-name">Expense Tracker</p>
                  </div>

                  <a
                    href="https://github.com/kirubashankarganesan/expense-tracker"
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
          </div>

          {/* Indicators */}

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>

            <button
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide-to="1"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
