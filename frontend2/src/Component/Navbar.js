import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Mind from './MMind.json'
import Lottie from "lottie-react";


const NavigationBar = () => {
  return (
    <Navbar expand="lg" style={{ border: 'none', height:80  }}className='navclass'>
           <Navbar.Brand  className='logo'>
           <Lottie animationData={Mind}/> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link as={Link} to="/"style={{color:'white' , fontSize:23 , marginRight:50}}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{color:'white',fontSize:23,marginRight:50}}>About</Nav.Link>
         
          <Nav.Link as={Link} to="/contact" style={{color:'white',fontSize:23,marginRight:50}}>Contact</Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{color:'white',fontSize:23}} className='b166'>TryAsk</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
