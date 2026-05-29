import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import photo1 from "../../Assets/Photography/photo1.JPG";
import photo2 from "../../Assets/Photography/photo2.JPG";
import photo3 from "../../Assets/Photography/photo3.JPG";
import photo4 from "../../Assets/Photography/photo4.JPG";
import photo5 from "../../Assets/Photography/photo5.JPG";
import photo6 from "../../Assets/Photography/photo6.JPG";
import photo7 from "../../Assets/Photography/photo7.JPG";
import photo8 from "../../Assets/Photography/photo8.JPG";
import photo9 from "../../Assets/Photography/photo9.JPG";
import photo10 from "../../Assets/Photography/photo10.JPG";
import photo11 from "../../Assets/Photography/photo11.JPG";
import photo12 from "../../Assets/Photography/photo12.JPG";
import photo13 from "../../Assets/Photography/photo13.JPG";
import photo14 from "../../Assets/Photography/photo14.JPG";
import photo15 from "../../Assets/Photography/photo15.JPG";
import photo16 from "../../Assets/Photography/photo16.JPG";
import photo17 from "../../Assets/Photography/photo17.JPG";
import photo18 from "../../Assets/Photography/photo18.JPG";
import photo19 from "../../Assets/Photography/photo19.JPG";
import photo20 from "../../Assets/Photography/photo20.JPG";

function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo8, photo9, photo10,
    photo11, photo12, photo13, photo14, photo15,
    photo16, photo17, photo18, photo19, photo20,
  ];

  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          我的 <strong className="purple">影集</strong>
        </h1>

        <p style={{ color: "white" }}>Photography Collection</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {photos.map((photo, index) => (
            <Col md={4} className="project-card" key={index}>
              <div className="project-card-view card">
                <img
                  src={photo}
                  alt={`photography-${index + 1}`}
                  onClick={() => setSelectedPhoto(photo)}
                  style={{
                    width: "100%",
                    aspectRatio: "3 / 4",
                    objectFit: "cover",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedPhoto}
            alt="selected"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "10px",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </Container>
  );
}

export default Photography;