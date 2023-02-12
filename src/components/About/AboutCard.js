import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manpreet Singh </span>
            from <span className="purple"> Punjab, India.</span>
            <br />I am a Full Stack developer and a Tech Enthusiast. I love to 
            <br />
            learn new technologies and implement them in my projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Light Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Software is a great combination of artistry and engineering."{" "}
          </p>
          <footer className="blockquote-footer">Manpreet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
