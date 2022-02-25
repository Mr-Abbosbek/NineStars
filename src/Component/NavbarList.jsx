import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MyButton from "./UI/Button/MyButton";
import { BiX, BiMenu } from "react-icons/bi";



function NavbarList() {
  let k = 0;
  
  const NavbarLinkClick = (evt) => {
    document.querySelector(".navbar-toggler").click();
    let menuLink = document.querySelectorAll(".menu-link");
    for (let i = 0; i < menuLink.length; i++) {
      menuLink[i].className = menuLink[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
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
          <Nav.Link className="menu-link" onClick={(e)=>NavbarLinkClick(e)}  href="#home" id="active" >Home</Nav.Link>
          <Nav.Link className="menu-link" onClick={(e)=>NavbarLinkClick(e)} href="#about" >About Us</Nav.Link>
          <Nav.Link className="menu-link" onClick={(e)=>NavbarLinkClick(e)} href="#services" >Services</Nav.Link>
          <Nav.Link className="menu-link" onClick={(e)=>NavbarLinkClick(e)} href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link className="menu-link" onClick={(e)=>NavbarLinkClick(e)} href="#team">Team</Nav.Link>

          <NavDropdown className="menu-link" title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={()=>document.querySelector(".navbar-toggler").click()} href="#action/3.1">Drop Down 1</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>document.querySelector(".navbar-toggler").click()} href="#action/3.2">Drop Down 2</NavDropdown.Item>

            <div className="dropdown-child">
              <NavDropdown
                title="Drop Down 3"
                id="basic-nav-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item onClick={(e)=>document.querySelector(".navbar-toggler").click()} href="#action/3.1">
                  Drop Down 1
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e)=>document.querySelector(".navbar-toggler").click()} href="#action/3.2">
                  Drop Down 2
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e)=>document.querySelector(".navbar-toggler").click()} href="#action/3.3">
                  Drop Down 3
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e)=>document.querySelector(".navbar-toggler").click()} href="#action/3.4">
                  Drop Down 4
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e)=>document.querySelector(".navbar-toggler").click()} href="#action/3.5">
                  Drop Down 5
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <NavDropdown.Item onClick={(e)=>document.querySelector(".navbar-toggler").click()} href="#action/3.4">Drop Down 4</NavDropdown.Item>
            <NavDropdown.Item onClick={(e)=>document.querySelector(".navbar-toggler").click()} href="#action/3.5">Drop Down 5</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="menu-link" onClick={(e)=>NavbarLinkClick(e)} href="#contact">Contact Us</Nav.Link>
          <Nav.Link className="menu-link nav-link-btn p-0" onClick={(e)=>NavbarLinkClick(e)} href="#about"><MyButton id="btn-nav" >Get Started</MyButton></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarList;
