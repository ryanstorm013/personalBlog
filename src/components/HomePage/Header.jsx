// import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary sticky-top"
      >
        <Container fluid>
          {/* <Row> */}
          <Navbar.Brand>
            <h3 className="text-warning">EP</h3>
          </Navbar.Brand>
          <Nav className="headerFont">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>

         
        </Container>
      </Navbar>
    </>
  );
}
