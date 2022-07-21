import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import Hamburger from 'hamburger-react';

function Header() {
    return (
      <>
        <Navbar bsPrefix="navbar" expand="lg" style={{backgroundColor:"black"}}>
          <Container>
            <LinkContainer to="/">
               <Navbar.Brand style={{fontFamily: 'inter', fontWeight:"800"}} className="text-light mx-lg-3 mx-sm-2"><span style={{fontSize:"max(2vw,min(24px))"}}>MERYAN VICE</span></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle  className="p-0 m-0 text-light d-lg-none black" aria-controls="responsive-navbar-nav">
                <Hamburger/>
            </Navbar.Toggle>
            <Navbar.Collapse  id="basic-navbar-nav">
              <Nav className="ml-auto position-relative">
                <LinkContainer clasName="text-light" to="/">
                    <Nav.Link
                     className="text-light mx-lg-3" bsPrefix="nav-links-text" >HOME</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/schedule">
                    <Nav.Link 
                    className="text-light mx-lg-3" bsPrefix="nav-links-text">SCHEDULE NOW</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/work">
                    <Nav.Link 
                    className="text-light mx-lg-3" bsPrefix="nav-links-text">WORK</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          </>
      );
    }
    

export default Header;