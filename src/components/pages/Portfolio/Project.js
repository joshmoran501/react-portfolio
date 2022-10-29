import React from "react";
import ProjectData from "./ProjectData.js";
import GitHubRepo from "../../../assets/images/github-mark.svg";
import styled from "styled-components";

const LinkBox = styled.a`
  position: relative;
  bottom: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  padding: 5px;
  border: 5px;
  border-style: solid;
  border-radius: 5px;
  width: 225px;
`;

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
    backgroundRepeat: "no-repeat",
    margin: "1%",
  },
  imgStyle: {
    maxWidth: "40%",
  },
  linkStyle: {
    textDecoration: "none",
    opacity: "100%",
  },
  githubStyle: {
    width: "2.5em",
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
        <a
          href={project.src}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            backgroundSize: "250px 250px",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${project.img})`,
            height: "250px",
            margin: "1%",
          }}
          key={project.id}
          className="project col-md-5 col-sm-10 col-lg-3"
        >
          {/* <img
            style={styles.imgStyle}
            src={project.img}
            alt={project.name}
            className="project-img"
          ></img> */}
          <LinkBox>
            <a style={styles.linkStyle} href={project.src}>
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
          </LinkBox>
        </a>
      ))}
    </Projects>
  );
}
