import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./Project.scss";

function ProjectCard({ project }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Card
      className={`project-card-view ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <Card.Img
        variant="top"
        src={project.img_cover}
        alt="card-img"
        className="card-img-top"
      />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Button className="btn-custom" onClick={handleClick}>
          Détails
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
