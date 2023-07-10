import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Meixuan Wu </span>
            from <span className="purple"> Seattle.</span>
            <br />  am thrilled to introduce myself as a diligent and ambitious individual who holds a master's degree in Financial Risk Management.
            <br /> Recently, I completed a comprehensive Java Full Stack Bootcamp, which equipped me with the necessary skills to develop websites from start to finish. 
            <br />Building websites has become my true passion, as I enjoy crafting captivating and user-friendly online experiences.
             <br />With my solid foundation in finance and expertise in Java, I bring a unique blend of knowledge and creativity to the field of web development. 
             <br />I am constantly seeking opportunities to expand my skills and contribute to exciting web projects. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Pocast
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">MEIXUAN WU</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;