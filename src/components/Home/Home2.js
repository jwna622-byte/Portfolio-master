import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container
  fluid
  className="home-about-section"
  style={{ marginTop: "-200px" }}
>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
  <span className="purple">关于我</span>
</h1>
            <p className="home-about-body">
              我毕业于奥克兰大学传媒与传播学专业，主修电影与屏幕研究、数字媒体传播及视觉叙事方向。我热爱通过摄影、影像与新媒体内容表达情绪、故事与空间氛围，并持续探索视觉内容在数字平台中的传播方式。
              <br />
              <br />
              我熟悉
              <i>
                <b className="purple">
                  {" "}
                  摄影、视频剪辑与新媒体内容制作{" "}
                </b>
              </i>
              — 能够独立完成
           <b className="purple">
                  {" "}
                  拍摄、后期调色、文案编辑及视觉排版等。{" "}
              
                </b>
              <br />
              <br />
              同时，我也长期运营
              <i>
                <b className="purple">
                  {" "}
                  个人摄影类小红书账号，{" "}
                </b>
              </i>
              分享风景摄影与旅行影像内容，单篇内容最高获得9.9w点赞，摄影作品曾被 Tourism New Zealand 用于旅游宣传。
              <br />
              <br />
             相比传统内容运营，我更关注
              <b className="purple"> 影像叙事、视觉表达与内容氛围感 </b> 的建立。希望未来能够继续在{" "}
              <i>
                <b className="purple">数字媒体、视觉传播与影像创作领域</b>进行探索与实践。{" "}
          
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
