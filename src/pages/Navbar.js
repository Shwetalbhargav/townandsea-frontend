import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './LandingPage.css';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand-custom">
          TOWN & SEA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#reserve">THE RESERVE</Nav.Link>
            <Nav.Link href="#auctions">AUCTIONS</Nav.Link>
            <Nav.Link href="#blog">BLOG</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            <Button className="custom-button">LOGIN / REGISTER</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
