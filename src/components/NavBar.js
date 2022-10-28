import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const styles = {
  navbarStyle: {
    fontSize: "1.5em",
  },
};

function NavTab() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={styles.navbarStyle} id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    /* <ul style={styles.navbarStyle} className="nav">
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

      <li>
          <a.Link
            as={Link}
            to="/portfolio" className="nav-item"
            style={styles.anchorStyle}
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
            >
            Portfolio
        </a.link>
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
        {/* <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTarget" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button> */
  );
}

export default NavTab;
