import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import rplogo from "../assets/rp-logo.png";

function NavigationBar( ) {
    return (
      <Navbar
        expand="lg"
        className="navigation-bar"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/" >
                Home
              </Nav.Link>
              <Nav.Link href="about-me">
                About Me
              </Nav.Link>
                <Nav.Link href="contact">
                  Contact
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavigationBar;