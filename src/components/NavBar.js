import React from "react";

const styles = {
  navbarStyle: {
    justifyContent: "flex-end",
    alignContent: "center",
  },
  anchorStyle: {
    textDecoration: "none",
    color: "inherit",
  },
};

function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navbarStyle} className="nav">
      <li className="nav-item">
        <a
          style={styles.anchorStyle}
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>

      <li className="nav-item">
        <a
          style={styles.anchorStyle}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>

      <li className="nav-item">
        <a
          style={styles.anchorStyle}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>

      <li className="nav-item">
        <a
          style={styles.anchorStyle}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
