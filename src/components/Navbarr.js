import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'



export default class Navbarr extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" bg="danger" data-bs-theme="dark">
          <Container>
            <Navbar.Brand><Link style={{textDecoration: 'none',color:'white'}} to="/">News Monkey</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link ><Link style={{textDecoration: 'none',color:'white'}} to="/entertainment">Entertainment</Link></Nav.Link>
                <Nav.Link ><Link style={{textDecoration: 'none',color:'white'}} to="/sports">Sports</Link></Nav.Link>
                <Nav.Link ><Link style={{textDecoration: 'none',color:'white'}} to="/general">General</Link></Nav.Link>
                <Nav.Link ><Link style={{textDecoration: 'none',color:'white'}} to="/health">Health</Link></Nav.Link>
                <Nav.Link ><Link style={{textDecoration: 'none',color:'white'}} to="/science">Science</Link></Nav.Link>
                <Nav.Link ><Link style={{textDecoration: 'none',color:'white'}} to="/technology">Technology</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
