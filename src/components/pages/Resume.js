import React from "react";
import { Row, Col } from "react-bootstrap";
import ResumePDF from "../../assets/documents/Joshua-Moran.pdf";
import DownloadIcon from "../../assets/images/download-solid-full.svg";

export default function Resume()
{
  return (
    <div className="resume-page">
      <Row className="g-4 align-items-start">
        <Col xs={12} lg={9} className="order-2 order-lg-1">
          <h2>Technical skills</h2>


          <h3 className="h5 mt-4">Languages</h3>
          <ul>
            <li>Java, JavaScript, TypeScript, PHP, Python, R, SQL</li>
          </ul>

          <h3 className="h5 mt-4">Frameworks and libraries</h3>
          <ul>
            <li>Laravel</li>
            <li>React</li>
          </ul>

          <h3 className="h5 mt-4">Tools and IDEs</h3>
          <ul>
            <li>IntelliJ IDEA, Android Studio, Visual Studio Code</li>
          </ul>

          <h3 className="h5 mt-4">Version control</h3>
          <ul>
            <li>Git, GitHub</li>
          </ul>

          <h3 className="h5 mt-4">Databases</h3>
          <ul>
            <li>MySQL and relational database design</li>
          </ul>

          <h3 className="h5 mt-4">Development practices</h3>
          <ul>
            <li>Agile, Scrum, software development lifecycle (SDLC)</li>
            <li>Test-driven development (TDD)</li>
          </ul>

          <h3 className="h5 mt-4">Technologies and delivery</h3>
          <ul>
            <li>REST APIs</li>
            <li>SaaS applications</li>
            <li>CI/CD concepts</li>
            <li>AI-assisted development tools</li>
          </ul>
        </Col>
        <Col xs={12} lg={3} className="order-1 order-lg-2 resume-download-col">
          <a
            className="download-btn d-inline-flex align-items-center gap-2"
            href={ResumePDF}
            download="Joshua-Moran.pdf"
            role="button"
          >
            <img src={DownloadIcon} alt="" aria-hidden="true" className="download-btn-icon" />
            Download Resume (PDF)
          </a>
        </Col>
      </Row>
    </div>
  );
}
