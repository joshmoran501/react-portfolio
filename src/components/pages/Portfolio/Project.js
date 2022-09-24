import React from "react";
import ProjectData from "./ProjectData.js";
import GitHubRepo from "../../../assets/images/github-mark.svg";

const styles = {
  portfolioStyle: {
    columns: "2 auto",
  },
};

export default function Projects() {
  return (
    <section className="portfolio" style={styles.portfolioStyle}>
      {ProjectData.map((project) => (
        <section key={project.id} className="project">
          <img
            src={project.img}
            alt={project.name}
            className="project-img"
          ></img>
          <section className="project-links">
            <a href={project.src}>{project.name}</a>
            <a href={project.source}>
              <img href={GitHubRepo}></img>
            </a>
          </section>
        </section>
      ))}
    </section>
  );
}
