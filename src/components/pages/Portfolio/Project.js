import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Badge, Button } from "react-bootstrap";
import GitHubRepo from "../../../assets/images/github-mark.svg";

function stackLabel(tag) {
  return tag.replace(/^\s*<\s*/, "").replace(/\s*\/?>\s*$/, "");
}

function hasPublicUrl(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isInternalPath(value) {
  return typeof value === "string" && value.trim().startsWith("/");
}

export default function Project({ projects }) {
  if (!projects.length) {
    return (
      <p className="text-muted" role="status">
        No projects in this category yet.
      </p>
    );
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-4 portfolio-grid">
      {projects.map((project) => {
        const demoUrl = hasPublicUrl(project.src) ? project.src.trim() : null;
        const repoUrl = hasPublicUrl(project.source) ? project.source.trim() : null;

        return (
          <Col key={project.id}>
            <Card className="portfolio-card h-100 border-0">
              <div className="portfolio-card-img-wrap">
                <Card.Img
                  variant="top"
                  src={project.img}
                  alt={project.name}
                  className="portfolio-card-img"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h3" className="h5 mb-2">
                  {project.name}
                </Card.Title>
                <Card.Text className="text-muted small flex-grow-1">
                  {project.shortDescription}
                </Card.Text>
                {project.stack?.length ? (
                  <div className="portfolio-stack mb-3" aria-label="Technologies">
                    {project.stack.map((tag) => (
                      <Badge
                        key={tag}
                        bg="dark"
                        text="light"
                        className="stack-chip"
                      >
                        {stackLabel(tag)}
                      </Badge>
                    ))}
                  </div>
                ) : null}
                <div className="d-flex flex-wrap gap-2 align-items-center mt-auto pt-1">
                  {demoUrl ? (
                    isInternalPath(demoUrl) ? (
                      <Button
                        variant="primary"
                        size="sm"
                        as={Link}
                        to={demoUrl}
                      >
                        {project.demoLabel?.trim() || "Live demo"}
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size="sm"
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.demoLabel?.trim() || "Live demo"}
                      </Button>
                    )
                  ) : null}
                  {repoUrl ? (
                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-github-link d-inline-flex align-items-center justify-content-center"
                      aria-label={`${project.name} public repository`}
                    >
                      <img src={GitHubRepo} alt="" width={28} height={28} />
                    </a>
                  ) : null}
                </div>
                {!demoUrl && !repoUrl ? (
                  <p className="small text-muted mb-0 mt-2">
                    No public demo or repository for this project.
                  </p>
                ) : null}
                {demoUrl && !repoUrl && !isInternalPath(demoUrl) ? (
                  <p className="small text-muted mb-0 mt-2">
                    Source code is not shared (private or proprietary).
                  </p>
                ) : null}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
