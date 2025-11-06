import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Arijit Saha</span>{" "}
            from <span className="purple">Kolkata, India</span>.
            <br />
            I’m jsut graduated form{" "}
            <span className="purple">Jis University</span> where{" "}
            <span className="purple"></span>
            <br /> I Pursuing {" "}
            <span className="purple">B.Tech</span> In{" "}
            <span className="purple">Computer Science and Engineering</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports 🏏
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>
          {/* 
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arijit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
