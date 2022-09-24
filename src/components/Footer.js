import React, { useState } from "react";
import GitHubLogo from "../assets/images/github-mark.svg";
import LinkedInLogo from "../assets/images/linkedin.svg";

const styles = {
  footerStyles: {
    padding: "1em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  imgStyles: {
    width: "2.5em",
    margin: "1em",
  },
};

export default function Footer() {
  function darken(event) {
    const darkness = 50;
    event.target.style.filter = `brightness(${darkness}%)`;
  }
  function lighten(event) {
    event.target.style.filter = "none";
  }

  return (
    <div className="footer" style={styles.footerStyles}>
      <a
        href="https://github.com/joshmoran501"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          onMouseOver={darken}
          onMouseLeave={lighten}
          src={GitHubLogo}
          style={styles.imgStyles}
          alt="Github"
        ></img>
      </a>
      <a
        href="https://linkedin.com/in/joshua-moran501"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          onMouseOver={darken}
          onMouseLeave={lighten}
          src={LinkedInLogo}
          style={styles.imgStyles}
          alt="LinkedIn"
        ></img>
      </a>
    </div>
  );
}
