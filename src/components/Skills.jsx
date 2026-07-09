import React from "react";
import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiClaude } from "react-icons/si";

import { SiBootstrap, SiSpringboot, SiMysql } from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title text-center mb-5" data-aos="fade-up">
          My Skills
        </h2>

        <div className="row g-4">
          {/* Frontend */}

          <div className="col-md-6 col-lg-3">
            <div className="skill-card" data-aos="zoom-in">
              <h4>Frontend</h4>

              <div className="skill-badge">
                <FaHtml5 className="html-icon" />
                <span>HTML</span>
              </div>

              <div className="skill-badge">
                <FaCss3Alt className="css-icon" />
                <span>CSS</span>
              </div>

              <div className="skill-badge">
                <FaJs className="js-icon" />
                <span>JavaScript</span>
              </div>
              <div className="skill-badge">
                <SiBootstrap className="bootstrap-icon" />
                Bootstrap
              </div>

              <div className="skill-badge">
                <FaReact className="react-icon" />
                <span>React</span>
              </div>
            </div>
          </div>

          {/* Backend */}

          <div className="col-md-6 col-lg-3">
            <div className="skill-card" data-aos="zoom-in" data-aos-delay="100">
              <h4>Backend</h4>

              <div className="skill-badge">
                <FaJava className="java-icon" />
                Java
              </div>

              <div className="skill-badge">
                <SiSpringboot className="spring-icon" />
                Spring Boot
              </div>
            </div>
          </div>

          {/* Database */}

          <div className="col-md-6 col-lg-3">
            <div
              className="skill-card"
              className="skill-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h4>Database</h4>
              <div className="skill-badge">
                <SiMysql className="mysql-icon" />
                MySQL
              </div>
            </div>
          </div>

          {/* Tools */}

          <div className="col-md-6 col-lg-3">
            <div
              className="skill-card"
              className="skill-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h4>Tools</h4>

              <div className="skill-badge">
                <FaGitAlt className="git-icon" /> Git
              </div>
              <div className="skill-badge">
                <FaGithub className="github-icon" />
                GitHub
              </div>
              <div className="skill-badge">
                <VscVscode className="vscode-icon" /> VS Code
              </div>
              <div className="skill-badge">
                <SiClaude className="claude-icon" />
                Claude AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
