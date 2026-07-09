import React from "react";
import "../styles/Home.css";
import profile from "../assets/images/profile.jpg";
import resume from "../assets/Kirubashankar_G_Resume.pdf";
const Home = () => {
  return (
    <section
      id="home"
      className="home-section d-flex align-items-center justify-content-center"
    >
      <div className="hero-card container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div
            className="col-md-5 text-center image-section"
            data-aos="fade-right"
          >
            <img src={profile} alt="Profile" className="profile-img" />
          </div>

          {/* Description */}
          <div
            className="col-md-7 text-center text-md-start content-section"
            data-aos="fade-left"
          >
            <h1 className="fw-bold">
              Hi, I'm <span className="text-primary">Kirubashankar G</span>
            </h1>

            <h4 className="mb-3">Full Stack Developer</h4>

            <p className="lead">
              Passionate Full Stack Developer with a strong foundation in React,
              Spring Boot, Java and MySQL. I enjoy building responsive web
              applications, solving real-world problems and continuously
              learning new technologies to create efficient and scalable
              software solutions.
            </p>

            <div className="mt-4">
              <a
                href={resume}
                download="Kirubashankar_G_Resume.pdf"
                className="btn btn-primary me-3"
              >
                Download Resume
              </a>

              <a href="#footer" className="btn btn-outline-primary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
