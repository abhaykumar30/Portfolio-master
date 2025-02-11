import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhay Kumar Rajpoot</span> from <span className="purple"> Dhampur, Uttar Pradesh, India.</span>
            <br />
            I am currently pursuing MCA from Lovely Professional University Punjab.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing change utill you don't want"{" "}
          </p>
          <footer className="blockquote-footer">Abhay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
