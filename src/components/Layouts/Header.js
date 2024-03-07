import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import Logo from "../../assets/logo/logo192.png";
import "../../styles/HeaderStyle.css"
function Header(){
  return (
    <Header>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo"> <img src={Logo} alt="Logo" className="img-fluid"/>
          </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/Buy">Buy</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/"><div className="cart">
            <i class="bi bi-bag"></i>
              </div></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Header>
  )
}

export default Header