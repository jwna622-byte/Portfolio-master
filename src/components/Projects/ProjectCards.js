import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          borderRadius: "10px 10px 0 0",
        }}
      />

      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Card.Title>{props.title}</Card.Title>

        <Card.Text
          style={{
            textAlign: "justify",
            flexGrow: 1,
          }}
        >
          {props.description}
        </Card.Text>

        {props.videoLink && (
          <Button
            variant="primary"
            href={props.videoLink}
            target="_blank"
            rel="noreferrer"
            style={{
              marginTop: "auto",
              alignSelf: "center",
            }}
          >
            <CgWebsite /> &nbsp;观看作品
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;