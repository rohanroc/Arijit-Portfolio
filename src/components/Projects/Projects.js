import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/lets.png";
import emotion from "../../Assets/Projects/news.png";
import editor from "../../Assets/Projects/unnamed.png";
import chatify from "../../Assets/Projects/unnamed1.jpeg";
import suicide from "../../Assets/Projects/r.png";
import bitsOfCode from "../../Assets/Projects/hire.png";

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
              imgPath={chatify}
              isBlog={false}
              title="FilmFinder"
              description="A simple and elegant Movie Finder web app built using React.js, Tailwind CSS, and the TMDB API.
Search for movies, view details, and explore trending titles with an intuitive and responsive interface."
              ghLink="https://github.com/rohanroc/FilmFinder"
              demoLink="https://film-finder-sigma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hire.IO"
              description="Designed and developed a full-stack web app for job postings and applications with features like user onboarding, job wishlists, and application status tracking."
              ghLink="https://github.com/rohanroc/Hire.io"
              demoLink="https://hire-io.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CodeReviewer"
              description="An AI-powered Code Review Platform built with React, Node, Express, and Prism.js — write, edit, and get instant GenAI feedback on your code with clean syntax highlighting and real-time insights."
              ghLink="https://github.com/rohanroc/CodeReviewer"
              demoLink="https://codereviewer-q702.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Lest's Code"
              description="Best Resources For CS Student
Step by step guides and paths to learn different tools or technologies"
              ghLink="https://github.com/rohanroc/LetsCode-2.0"
              demoLink="https://rohanroc.github.io/LetsCode-2.0/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Resume Builder"
              description="The Resume Builder project is a web application powered by OpenAI's ChatGPT API that aims to simplify the process of creating professional resumes. This README file provides an overview of the project, its overview, features, installation instructions, and usage guidelines."
              ghLink="https://github.com/rohanroc/Resume-Builder"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="A simple and responsive news application built with React.js, Bootstrap, and the News API to fetch and display the latest news headlines from around the world."
              ghLink="https://github.com/rohanroc/InstaNews"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
