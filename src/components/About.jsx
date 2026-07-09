import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">
          About Me
        </h2>

        <div className="about-card" data-aos="fade-up">
          <div className="about-content">
            <h3>Who Am I?</h3>
            <p>
                {"\u00A0\u00A0\u00A0\u00A0"}Hello! I'm <strong>Kirubashankar G</strong>, a Computer Science
              and Engineering student at{" "}
              <strong>Dr. N.G.P Institute of Technology, Coimbatore</strong>,
              with a strong interest in software development and modern web
              technologies. I enjoy building responsive, scalable, and
              user-friendly web applications while continuously improving my
              technical and problem-solving skills.
            </p>

            <p>
              My technical expertise includes React, Java, Spring Boot, MySQL,
              HTML, CSS, JavaScript, Bootstrap, Git, and GitHub. I enjoy working
              on full-stack projects that combine clean user interfaces with
              efficient backend systems and database management.
            </p>

            <p>
              I successfully completed a Full Stack Web Development Internship
              at
              <strong> Qono Technologies Pvt. Ltd.</strong>, where I gained
              hands-on experience in developing real-world web applications and
              working with industry-standard development practices.
            </p>

            <p>
              I am currently seeking opportunities to begin my career as a
              <strong> Full Stack Developer</strong>, where I can apply my technical knowledge,
              contribute to meaningful projects, and continue learning in a
              collaborative environment.
            </p>

            <div className="education-item">
              <h5>B.E. Computer Science and Engineering</h5>

              <p>Dr. N.G.P Institute of Technology, Coimbatore</p>

              <span>
                <strong>CGPA:</strong> 8.75
              </span>
              <br />
              <span>
                <strong>Expected Graduation:</strong> 2027
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
