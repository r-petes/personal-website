import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import rplogo from "../assets/rp-logo.png";

function NavigationBar( ) {
    return (
      <Navbar
        expand="lg"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto"
            >
              <Nav.Link href="/" className="navigation-button">
                HOME
              </Nav.Link>
              <Nav.Link href="about-me" className="navigation-button">
                ABOUT
              </Nav.Link>
                <Nav.Link href="contact" className="navigation-button">
                  CONTACT
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavigationBar;