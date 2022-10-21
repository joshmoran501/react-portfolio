import React, { useState } from "react";
import GitHubLogo from "../assets/images/github-mark.svg";
import LinkedInLogo from "../assets/images/linkedin.svg";
import styled from "styled-components";

const styles = {
  // footerStyles: {
  //   background: "#23415a",
  //   padding: "1em",
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   position: "relative",
  //   width: "100%",
  // },
  imgStyles: {
    height: "50px",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
};

const Footer = styled.footer`
  height: 10vh;
  background-color: #23415a;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  @media (min-width: 630px) {
    position: fixed;
    bottom: 0px;
  }
`;

export default function renderFooter() {
  function darken(event) {
    const darkness = 50;
    event.target.style.filter = `brightness(${darkness}%)`;
  }
  function lighten(event) {
    event.target.style.filter = "none";
  }

  return (
    <>
      <Footer>
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
      </Footer>
    </>
  );
}
