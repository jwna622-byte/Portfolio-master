import React from "react";
import { Col, Row } from "react-bootstrap";

import photoshop from "../../Assets/TechIcons/photoshop.svg";
import lightroom from "../../Assets/TechIcons/lightroom.svg";
import capcut from "../../Assets/TechIcons/capcut.svg";
import canva from "../../Assets/TechIcons/canva.svg";
import chatgpt from "../../Assets/TechIcons/chatgpt.svg";
import gemini from "../../Assets/TechIcons/gemini.svg";
import word from "../../Assets/TechIcons/word.svg";
import excel from "../../Assets/TechIcons/excel.svg";
import powerpoint from "../../Assets/TechIcons/powerpoint.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={photoshop}
          alt="Photoshop"
          className="tech-icon-images"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="tech-icons-text">Photoshop（PS）</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={lightroom}
          alt="Lightroom"
          className="tech-icon-images"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="tech-icons-text">Lightroom（LR）</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={capcut}
          alt="剪映"
          className="tech-icon-images"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="tech-icons-text">剪映</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={canva}
          alt="Canva"
          className="tech-icon-images"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="tech-icons-text">Canva</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={chatgpt}
          alt="ChatGPT"
          className="tech-icon-images"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={gemini}
          alt="Gemini"
          className="tech-icon-images"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="tech-icons-text">Gemini</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={word}
          alt="Word"
          className="tech-icon-images"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="tech-icons-text">Word</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={excel}
          alt="Excel"
          className="tech-icon-images"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="tech-icons-text">Excel</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={powerpoint}
          alt="PowerPoint"
          className="tech-icon-images"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="tech-icons-text">PowerPoint</div>
      </Col>
    </Row>
  );
}

export default Toolstack;