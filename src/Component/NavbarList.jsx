import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MyButton from "./UI/Button/MyButton";
import { BiX, BiMenu } from "react-icons/bi";



function NavbarList() {
  let k = 0;

  const NavbarLinkClick = () => {
    return document.querySelector(".navbar-toggler").click();
  }

  return (
    <Navbar bg="light" expand="lg" className="shadow navbar">
      <Container>
        <Navbar.Brand href="#home">NineStars</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" 
        onClick={()=>{
          if(k===0){
            document.querySelector(".hamburger-menu").classList.add("hamburger");
            document.querySelector(".hamburger-close").classList.add("close");
            k=1;
          } else {
            document.querySelector(".hamburger-menu").classList.remove("hamburger");
            document.querySelector(".hamburger-close").classList.remove("close");
            k=0;
          }
        }}  
        >
          <BiMenu className="hamburger-menu" />
          <BiX className="hamburger-close" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="p-0">
          <Nav.Link onClick={NavbarLinkClick} href="#home" data-toggle="collapse" >Home</Nav.Link>
          <Nav.Link onClick={NavbarLinkClick} href="#about" >About Us</Nav.Link>
          <Nav.Link onClick={NavbarLinkClick} href="#services" >Services</Nav.Link>
          <Nav.Link onClick={NavbarLinkClick} href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link onClick={NavbarLinkClick} href="#team">Team</Nav.Link>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={NavbarLinkClick} href="#action/3.1">Drop Down 1</NavDropdown.Item>
            <NavDropdown.Item onClick={NavbarLinkClick} href="#action/3.2">Drop Down 2</NavDropdown.Item>

            <div className="dropdown-child">
              <NavDropdown
                title="Drop Down 3"
                id="basic-nav-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item onClick={NavbarLinkClick} href="#action/3.1">
                  Drop Down 1
                </NavDropdown.Item>
                <NavDropdown.Item onClick={NavbarLinkClick} href="#action/3.2">
                  Drop Down 2
                </NavDropdown.Item>
                <NavDropdown.Item onClick={NavbarLinkClick} href="#action/3.3">
                  Drop Down 3
                </NavDropdown.Item>
                <NavDropdown.Item onClick={NavbarLinkClick} href="#action/3.4">
                  Drop Down 4
                </NavDropdown.Item>
                <NavDropdown.Item onClick={NavbarLinkClick} href="#action/3.5">
                  Drop Down 5
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <NavDropdown.Item onClick={NavbarLinkClick} href="#action/3.4">Drop Down 4</NavDropdown.Item>
            <NavDropdown.Item onClick={NavbarLinkClick} href="#action/3.5">Drop Down 5</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link onClick={NavbarLinkClick} href="#contact">Contact Us</Nav.Link>
          <Nav.Link onClick={NavbarLinkClick} href="#about" className="p-0"><MyButton id="btn-nav" >Get Started</MyButton></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarList;
