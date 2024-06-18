import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  { Link,Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';

function NavBar() {
  return (
    <div>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container d-flex space-between >
        <Navbar.Brand href="#home">WE <span className='text-danger'>-News</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link  as={Link} to={"/news"} >NEWS</Nav.Link>
            <Nav.Link  as={Link} to={"/about"} >ABOUT</Nav.Link>
            <Nav.Link  as={Link} to={"/contact"}>CONTACT US</Nav.Link>
            
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default NavBar
