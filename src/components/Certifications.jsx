import React from "react";
import "../styles/Certifications.css";

import cloud from "../assets/certificates/cloud.jpg";
import iot from "../assets/certificates/iot.jpg";
import paper from "../assets/certificates/paper.jpg";
import workshop from "../assets/certificates/workshop.jpg";

const Certifications = () => {
  const certificates = [
    {
      title: "NPTEL Cloud Computing",
      image: cloud,
    },
    {
      title: "NPTEL Internet of Things",
      image: iot,
    },
    {
      title: "Paper Presentation",
      image: paper,
    },
    {
      title: "Workshop Certificate",
      image: workshop,
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">
          Certifications & Achievements
        </h2>

        <div className="row g-4 mt-4">
          {certificates.map((cert, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                className="certificate-card"
                onContextMenu={(e) => e.preventDefault()}
              >
                <div className="certificate-image-wrapper">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="certificate-img"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>

                <div className="certificate-content">
                  <h5>{cert.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
