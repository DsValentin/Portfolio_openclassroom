import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectsData from "../../projectsData"; // Remarquez que nous avons supprimé .json
import "./Project.scss";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <Container fluid className="project-section" id="project">
      <Container>
        <h1 className="project-heading">Mes Projets</h1>
        <div className="row">
          {projectsData.map((project) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 project-card"
              key={project.id}
              onClick={() => openModal(project)}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>

      <Modal show={selectedProject !== null} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProject?.img_modal}
            alt="modal-img"
            className="modal-img"
          />
          <p>
            <strong>Client:</strong> {selectedProject?.client}
          </p>
          <p>
            <strong>Présentation:</strong> {selectedProject?.presentation}
          </p>
          <p>
            <strong>Overview:</strong> {selectedProject?.overview}
          </p>
          <p>
            <strong>Tags:</strong> {selectedProject?.tags.join(", ")}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            href={selectedProject?.github}
            target="_blank"
          >
            Github
          </Button>
          {selectedProject?.website && (
            <Button
              variant="secondary"
              href={selectedProject?.website}
              target="_blank"
            >
              Website
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Projects;
