import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MyButton from "./UI/Button/MyButton";
import { BiX, BiMenu } from "react-icons/bi";



function NavbarList() {
  let k = 0;
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
          <Nav.Link href="#home" data-toggle="collapse" >Home</Nav.Link>
          <Nav.Link href="#about" >About Us</Nav.Link>
          <Nav.Link href="#services" >Services</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Drop Down 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Drop Down 2</NavDropdown.Item>

            <div className="dropdown-child">
              <NavDropdown
                title="Drop Down 3"
                id="basic-nav-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Drop Down 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Drop Down 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Drop Down 3
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Drop Down 4
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Drop Down 5
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <NavDropdown.Item href="#action/3.4">Drop Down 4</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Drop Down 5</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#link">Contact Us</Nav.Link>
          <MyButton id="btn-nav">Get Started</MyButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarList;
