import React from "react";
import ProjectData from "./ProjectData.js";
import GitHubRepo from "../../../assets/images/github-mark.svg";
import styled from "styled-components";

const styles = {
  portfolioStyle: {
    columns: "2 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
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

const Projects = styled.div`
  columns: 2 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 425px) {
    columns: 1 auto;
  }
`;

export default function renderProjects() {
  function darken(event) {
    const darkness = 50;
    event.target.style.filter = `brightness(${darkness}%)`;
  }
  function lighten(event) {
    event.target.style.filter = "none";
  }

  return (
    <Projects>
      {ProjectData.map((project) => (
        <section
          style={styles.sectionStyle}
          key={project.id}
          className="project col-md-5 col-sm-10 col-lg-4"
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
    </Projects>
  );
}
