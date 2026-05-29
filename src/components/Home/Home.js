import React from "react";
import { Container } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <div className="home-center-wrap">
          <div className="home-text-block">
            <h1
  style={{
    paddingBottom: 15,
    color: "#ffffff"
  }}
  className="heading"
>
  Hi!{" "}
  <span className="wave" role="img" aria-labelledby="wave">
    👋🏻
  </span>
</h1>

<h1
  className="heading-name"
  style={{
    color: "#ffffff"
  }}
>
  我是
  <strong className="main-name"> 王戬</strong>
</h1>
            <div style={{ paddingTop: 20, textAlign: "left" }}>
              <Type />
            </div>
          </div>

          <div className="home-image-block">
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "350px" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;