import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import polaroid from "../../Assets/TechIcons/拍立得.svg";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="iPhone 摄影" style={{ width: "30px", height: "30px" }} />
        <div className="tech-icons-text">iPhone 摄影</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="相机" style={{ width: "30px", height: "30px" }} />
        <div className="tech-icons-text">相机</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="Pocket 3" style={{ width: "30px", height: "30px" }} />
        <div className="tech-icons-text">Pocket 3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="胶片相机" style={{ width: "30px", height: "30px" }} />
        <div className="tech-icons-text">胶片相机</div>
      </Col>

    <Col xs={4} md={2} className="tech-icons">
  <img
    src={polaroid}
    alt="拍立得"
    style={{ width: "30px", height: "30px" }}
  />
  <div className="tech-icons-text">拍立得</div>
</Col>
    </Row>
  );
}

export default Toolstack;