import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/my-photo.png";
import Toolstack from "./Toolstack";
import Softwarestack from "./Softwarestack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "-20px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="purple">关于我</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "50px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            专业 <strong className="purple">技能 </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
           使用 <strong className="purple">工具</strong> 
          </h1>
          <Toolstack />
<h1 className="project-heading">
  掌握 <strong className="purple">软件</strong>
</h1>
<Softwarestack />
      
        </Container>
      </Container>
    </>
  );
}

export default About;
