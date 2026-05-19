import React from "react";
import GitHubLogo from "../assets/images/github-mark.svg";
import LinkedInLogo from "../assets/images/linkedin.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer-links">
        <a
          href="https://github.com/joshmoran501"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <img src={GitHubLogo} alt="" />
        </a>
        <span className="site-footer-spacer" aria-hidden="true" />
        <a
          href="https://linkedin.com/in/joshua-moran501"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <img src={LinkedInLogo} alt="" />
        </a>
      </div>
      <p className="site-footer-copy">© {year} Joshua Moran</p>
    </footer>
  );
}
