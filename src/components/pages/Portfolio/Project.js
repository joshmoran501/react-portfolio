import React from "react";
import ProjectData from "./ProjectData.js";
import GitHubRepo from "../../../assets/images/github-mark.svg";

const styles = {
  portfolioStyle: {
    columns: "2 auto",
    display: "flex",
    flexWrap: "wrap",
  },
  sectionStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imgStyle: {
    maxWidth: "40%",
  },
  linksStyle: {
    display: "flex",
  },
  githubStyle: {
    width: "1.5em",
    margin: "1em",
  },
};

export default function Projects() {
  function darken(event) {
    const darkness = 50;
    event.target.style.filter = `brightness(${darkness}%)`;
  }
  function lighten(event) {
    event.target.style.filter = "none";
  }

  return (
    <section className="portfolio row" style={styles.portfolioStyle}>
      {ProjectData.map((project) => (
        <section
          style={styles.sectionStyle}
          key={project.id}
          className="project col-5"
        >
          <img
            style={styles.imgStyle}
            src={project.img}
            alt={project.name}
            className="project-img"
          ></img>
          <section style={styles.linksStyle} className="project-links">
            <a href={project.src}>
              <h4>{project.name}</h4>
              <p>{project.shortDescription}</p>
            </a>
            <a href={project.source}>
              <img
                style={styles.githubStyle}
                onMouseOver={darken}
                onMouseLeave={lighten}
                alt="github"
                src={GitHubRepo}
              ></img>
            </a>
          </section>
        </section>
      ))}
    </section>
  );
}
