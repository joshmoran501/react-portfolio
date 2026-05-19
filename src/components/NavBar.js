import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const styles = {
  navbarStyle: {
    fontSize: "1.1rem",
  },
};

function NavTab()
{
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="p-0">
      <Container fluid className="px-0 justify-content-end">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={styles.navbarStyle} id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/resume">
              Resume
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTab;
