import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiSass,
  DiGithub,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import "./Techstack.scss";

function Techstack() {
  const [visibleIcons, setVisibleIcons] = useState([]);
  const [selectedTech, setSelectedTech] = useState(null);

  useEffect(() => {
    const delays = [0, 500, 1000, 1500, 2000, 2500, 3000];
    const timeouts = delays.map((delay, index) => {
      return setTimeout(() => {
        setVisibleIcons((prev) => [...prev, index]);
      }, delay);
    });

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  const handleClick = (techName) => {
    if (selectedTech === techName) {
      setSelectedTech(null);
    } else {
      setSelectedTech(techName);
    }
  };

  const techData = [
    { name: "JavaScript", icon: <DiJavascript1 className="tech-icon" /> },
    { name: "React", icon: <DiReact className="tech-icon" /> },
    { name: "MongoDB", icon: <DiMongodb className="tech-icon" /> },
    { name: "Sass", icon: <DiSass className="tech-icon" /> },
    { name: "GitHub", icon: <DiGithub className="tech-icon" /> },
    { name: "HTML5", icon: <DiHtml5 className="tech-icon" /> },
    { name: "CSS3", icon: <DiCss3 className="tech-icon" /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techData.map((tech, index) => (
        <div
          key={tech.name}
          className={`col-4 col-md-2 tech-icons ${
            visibleIcons.includes(index) ? "visible" : ""
          }`}
        >
          <div
            className={`tech-icon-content ${
              selectedTech === tech.name ? "active" : ""
            }`}
            onClick={() => handleClick(tech.name)}
          >
            {selectedTech === tech.name ? (
              <p className="tech-text">{tech.name}</p>
            ) : (
              tech.icon
            )}
          </div>
        </div>
      ))}
    </Row>
  );
}

export default Techstack;
