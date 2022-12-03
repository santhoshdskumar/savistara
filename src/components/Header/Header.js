import { Navbar, Image, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Routes  } from 'react-router-dom';
import Homepage from "../../pages/Homepage";
import AboutUs from "../../pages/AboutUs";
import ContactUs from "../../pages/ContactUs";
import Logo from "../../assets/images/logo.png";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
return (
    <header className="header_section">
      <div className="container">
        <Navbar  expand="lg"  className="navbar navbar-expand-lg custom_nav-container ">
        <Navbar.Brand href="/">
          <p><Image src={Logo} /></p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/why">Why Savistara</Nav.Link>
          <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/repository">
               Repository
              </NavDropdown.Item>
          </NavDropdown>
          {/* <Nav.Link href="/activites">Our Activites</Nav.Link> */}
          <NavDropdown title="Join Savistara" id="basic-nav-dropdown">
              <NavDropdown.Item href="/teach">Teach</NavDropdown.Item>
              <NavDropdown.Item href="/joinus">
                Join Savistara
              </NavDropdown.Item>
              <NavDropdown.Item href="/volunteer">Volunteer</NavDropdown.Item>
              <NavDropdown.Item href="/ourprograms">Our Programs</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>

        </Navbar.Collapse>
        </Navbar >
      </div>
    </header>
)
}

export default Header;