import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Heart } from "lucide-react";

const Header = () => {

    const services = [
    { name: "Confinement Nanny", href: "#confinement" },
    { name: "One Time / Ad Hoc", href: "#adhoc" },
    { name: "Recurring / Long-term", href: "#recurring" },
  ];

    return (
        // collapse below lg (show in one row at lg+). In production, consider change to md
        <Navbar bg="light" className="border-bottom" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <span className="fs-4 fw-bold m-0">NannyCare</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center"> 
          <NavDropdown title="Services" id="services-dropdown">
              {services.map((service) => (
              <NavDropdown.Item href={service.href}>{service.name}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="#resources">Pricing</Nav.Link>
            <Nav.Link href="#help">FAQ</Nav.Link>
            <Nav.Link href="#resources">About us</Nav.Link>
            </Nav>
          <Button variant="success" className="d-flex align-items-center gap-2">
            <Heart size={16} />
            Become a Caregiver
          </Button>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;