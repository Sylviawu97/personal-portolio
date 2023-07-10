import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import game from "../../Assets/Projects/game.jpg";

function Projects() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={game}
                isBlog={false}
                title="CardGame"
                description="In this game, we have two players ( A and b) holding three cards for each round and they will compete by the numbers on the card. The winner will gain one point. Once one player gets 5 points in total, the game ends. To win the game, I set some rules."
                ghLink="https://github.com/Sylviawu97/gameProject"
            
              />
            </Col>
            </Row>
      </Container>
    </Container>
  );
}

export default Projects;