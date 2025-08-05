import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo-manguetech-navbar.png';
import './Navbar.css';
export default function NavbarSite() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'scrolled' : 'transparent'}`}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="navbar-logo"/>
          <span className="navbar-title ">MangueTech</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sobre">Sobre nós</Nav.Link>
            <Nav.Link href="#data-driven">Data Driven</Nav.Link>
            <Nav.Link href="#coparticipacao">Coparticipação Docente</Nav.Link>
            <Nav.Link href="#plataforma">Plataforma</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}