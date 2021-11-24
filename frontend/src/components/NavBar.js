import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navigate } from "react-router-dom";

const NavBar = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  var navLinks = (
    <Nav>
      <Nav.Link href="https://fb.com">Facebook</Nav.Link>
      <Nav.Link href="https://instagram.com">Instagram</Nav.Link>
    </Nav>
  );

  const logOut = () => {
    localStorage.removeItem("user");
  };

  if (user != undefined) {
    navLinks = (
      <Nav>
        <Nav.Link href="#home">
          Hola <strong>{user.name}</strong>
        </Nav.Link>
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Perfil</Nav.Link>
        <Nav.Link href="/" onClick={logOut}>
          Salir
        </Nav.Link>
      </Nav>
    );
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Experts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            {navLinks}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
