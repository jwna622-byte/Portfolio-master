import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import daydreamGif from "../../Assets/Videos/daydream.gif";
import fantasyCover from "../../Assets/Projects/fantasy-cover.png";
import dontBeAfraidCover from "../../Assets/Projects/dont-be-afraid-cover.png";
import deliveryCover from "../../Assets/Projects/delivery-man-cover.png";
import aiDoctorsCover from "../../Assets/Projects/ai-doctors-cover.png";
import xiaohongshuCover from "../../Assets/Projects/xiaohongshu-cover.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          近期 <strong className="purple">作品集 </strong>
        </h1>
        <p style={{ color: "white" }}>2023-2026</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daydreamGif}
              title="沙发上的白日梦（2023）"
              description={
                <>
                  灵感来自同名歌曲，通过镜头推进的方式，从沙发上的女孩、耳机，到旋转的CD，再转化为梵高的《星空》，表现音乐如何带领人进入一个脱离现实压力、充满自由与想象力的精神世界。
                  <br />
                  <br />
                  制作过程：使用 Procreate 手绘动画，共完成约130张草图。之后再将这些片段导出、拼接成视频，并通过 GIPHY 转换为 GIF 动图，最终完成作品。
                </>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fantasyCover}
              title="幻想中的权力（2024）"
              description={
                <>
                  围绕 Some Like It Hot 与 I Married a Witch 展开，探讨经典好莱坞电影中女性如何通过伪装、表演与幻想获得权力。
                  <br />
                  <br />
                  重点挑选了能够体现角色权力关系变化的关键场景，通过镜头节奏、角色动作、表情与台词之间的联系建立影片之间的对话。表明影片中的女性角色看似获得了掌控关系与命运的主动权，但这种力量往往只能存在于非现实的幻想空间之中。
                </>
              }
              videoLink="https://youtu.be/9IYyQll7LX0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dontBeAfraidCover}
              title="Don’t be afraid（2024）"
              description={
  <>
    这部作品围绕“老房子”展开，讲述我与爷爷之间的记忆，以及我在成长后重新理解“死亡”与“离别”并从中获得力量的过程。
    <br />
    <br />
    全片没有使用动态视频，仅通过静态照片来完成叙事。通过画面的顺序、停留时间与转场节奏，让照片像记忆碎片一样慢慢展开。同时，影片没有使用背景音乐，而是以旁白与环境音营造氛围，使情绪更加真实、克制，也更贴近回忆本身。
  </>
}
              
              videoLink="https://youtu.be/ZtjQc24yIwE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deliveryCover}
              title="外卖员（2025）"
              description={
                <>
                  影片以陈诚的个人经历为主线，讲述他18岁来到新西兰，从厨师转为外卖骑手，并在异国他乡继续支撑家庭生活的故事。通过他对日常工作、移民经历与未来的讲述，呈现普通移民劳动者在身份、语言、签证、就业环境与家庭责任之间的现实处境。
                  <br />
                  <br />
                 围绕陈诚从厨师转为外卖骑手的个人经历设计采访内容，拍摄时结合人物采访、送餐画面、旧照片与家庭影像等呈现他真实的工作节奏与生活压力。剪辑上以陈诚的讲述作为叙事主线，保留交通声、摩托车声、雨声和街道人声等环境音，增强纪录片的现场感，并通过影像与声音的交织，展现移民劳动者在异国生活中的辛苦、责任与坚持。
                </>
              }
              videoLink="https://youtu.be/CoIOrYqWzH4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiDoctorsCover}
              title="AI doctors: The way of the future?（2025）"
              description={
                <>
                  这是一部以新闻播报形式呈现的未来影像作品，故事设定在2050年，探讨人工智能全面进入医疗系统后的社会反应。影片围绕一家完全由AI运营的诊所展开，通过新闻主播、现场记者、街头采访与AI医生访谈，展现公众对于“AI医生”的期待、怀疑与不安。
                  <br />
                  <br />
                  在制作上，影片结合新闻演播室、诊所外景、街头采访和AI视觉动画素材，营造出真实新闻报道与科幻未来感交织的效果。希望引导观众思考：当AI变得无法逃避，我们应如何接受、质疑并重新定义人与技术之间的关系。
                </>
              }
              videoLink="https://youtu.be/wjbkRljzSD8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xiaohongshuCover}
              title="个人小红书账号（2026）"
              description="除了课程中的影像与纪录片创作，我也通过个人社交媒体账号持续进行视觉内容表达，围绕摄影、日常观察、旅行记录与情绪化影像展开。"
              videoLink="https://xhslink.com/m/6HRSdtFij47"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;