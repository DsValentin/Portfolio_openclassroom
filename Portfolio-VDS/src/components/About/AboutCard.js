import React from "react";
import Card from "react-bootstrap/Card";
import "./AboutCard.scss";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour. Je m'appelle <strong>Valentin De sousa</strong>
            <br />
            Je suis heureux de me présenter en tant qu'Intégrateur Web
            fraîchement diplômé d'OpenClassrooms.
            <br />
            Au cours de ma formation complète, j'ai acquis une solide maîtrise
            des langages fondamentaux du web, tels que HTML5, CSS3 et
            JavaScript. J'ai également développé des compétences en intégration
            de frameworks populaires comme React, me permettant de créer des
            interfaces utilisateur modernes et réactives.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
