import React from "react";
import ResumePDF from "../../assets/documents/Joshua-Moran.pdf";

export default function Resume() {
  return (
    <div className="resume-page">
      <h2>Resume</h2>
      <p>
        Download my{" "}
        <a className="download-btn" href={ResumePDF} download="Joshua-Moran.pdf">
          Resume (PDF)
        </a>
      </p>

      <h2>Technical skills</h2>
      <p className="text-muted small mb-3">
        Highlights from my resume; see the PDF for full detail.
      </p>

      <h3 className="h5 mt-4">Languages</h3>
      <ul>
        <li>Java, JavaScript, TypeScript, PHP, Python, SQL</li>
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
    </div>
  );
}
