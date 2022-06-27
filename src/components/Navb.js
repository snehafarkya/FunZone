import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';
import {Link } from 'react-router-dom';

export default function Navb() {
  return (
    <Navbar variant='dark' bg="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">FunZone</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='alink' href="#home"> <Link to="/">Home</Link> </Nav.Link>
          <Nav.Link className='alink'  href="#link"><Link to="/Music">Music</Link></Nav.Link>
          <Nav.Link className='alink'  href="#link"></Nav.Link>
          <Nav.Link className='alink' href="#link"><Link to="/Contact">Contact</Link></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
