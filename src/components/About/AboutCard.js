import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            毕业于 <span className="purple">奥克兰大学</span>，主修{" "}
            <span className="purple">
              电影与屏幕研究、数字媒体传播与视觉叙事
            </span>
            。在校获 <span className="purple">国际学生卓越奖学金</span>，
            <span className="purple">GPA 7.15/9.0</span>。
            <br />
            <br />
            我熟悉{" "}
            <span className="purple">
              摄影、视频剪辑与新媒体内容制作
            </span>
            ，能够独立完成{" "}
            <span className="purple">
              拍摄、后期调色、文案编辑及视觉排版
            </span>
            等。
            <br />
            <br />
            同时，我也长期运营{" "}
            <span className="purple">个人摄影类小红书账号</span>
            ，分享风景摄影与旅行影像内容，单篇内容最高获得
            <span className="purple">9.9w点赞</span>，摄影作品曾被{" "}
            <span className="purple">Tourism New Zealand</span> 用于旅游宣传。
            <br />
            <br />
            相比传统内容运营，我更关注{" "}
            <span className="purple">影像叙事、视觉表达与内容氛围感</span>{" "}
            的建立。希望未来能够继续在{" "}
            <span className="purple">
              数字媒体、视觉传播与影像创作领域
            </span>
            进行探索与实践。
            <br />
            <br />
            除了拍摄之外，我喜欢参与那些能激发我的创造力并带给我灵感的活动：
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> 阅读 📖
            </li>
            <li className="about-activity">
              <ImPointRight /> 观影 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> 旅行与探索 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;