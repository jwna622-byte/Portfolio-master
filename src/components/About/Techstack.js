import React from "react";
import { Col, Row } from "react-bootstrap";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Go from "../../Assets/TechIcons/go.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="摄影摄像" style={{ width: "30px", height: "30px" }} />
        <div className="tech-icons-text">摄影摄像</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="视频剪辑" style={{ width: "30px", height: "30px" }} />
        <div className="tech-icons-text">视频剪辑</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="内容策划" style={{ width: "30px", height: "30px" }} />
        <div className="tech-icons-text">内容策划</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt="推文排版" style={{ width: "30px", height: "30px" }} />
        <div className="tech-icons-text">推文排版</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="影像叙事" style={{ width: "30px", height: "30px" }} />
        <div className="tech-icons-text">影像叙事</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="AI创作" style={{ width: "30px", height: "30px" }} />
        <div className="tech-icons-text">AI创作</div>
      </Col>
    </Row>
  );
}

export default Techstack;