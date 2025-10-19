//import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
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
    <Navbar bg="light" className="border-bottom" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <span className="fs-4 fw-bold m-0">NannyCare</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center"> 
          <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#walking">Walking</NavDropdown.Item>
              <NavDropdown.Item href="#sitting">Sitting</NavDropdown.Item>
              <NavDropdown.Item href="#boarding">Boarding</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Health & Wellness" id="health-dropdown">
              <NavDropdown.Item href="#wellness">Wellness</NavDropdown.Item>
              <NavDropdown.Item href="#health">Health</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#resources">Resources</Nav.Link>
            <Nav.Link href="#help">Help Center & Safety</Nav.Link>
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


const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <ServicesSection />
            <Footer />
        </div>
    );
};

export default Index;