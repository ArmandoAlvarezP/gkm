import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    } 
  return (
    <Navbar className='nav' fixed='top' expand='lg'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          className='logo-img'
          src="/img/gkm-logo.png"
          alt="GKM Logo"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
            <Nav.Link 
                className={ activeLink === 'home' ? 'active navbar-link nav-text' : 'navbar-link nav-text' } 
                href="#home"
                onClick={() => onUpdateActiveLink('home')}
            >
                ¿Quiénes Somos?
            </Nav.Link>
            <Nav.Link  
                className={ activeLink === 'servicios' ? 'active navbar-link nav-text' : 'navbar-link nav-text' } 
                href="#servicios"
                onClick={() => onUpdateActiveLink('servicios')}
            >
                Servicios
            </Nav.Link>
            <Nav.Link 
                className={ activeLink === 'educacion' ? 'active navbar-link nav-text' : 'navbar-link nav-text' } 
                href="#educacion"
                onClick={() => onUpdateActiveLink('educacion')}
            >
                Educación
            </Nav.Link>
            <Nav.Link 
                className={ activeLink === 'salud' ? 'active navbar-link nav-text' : 'navbar-link nav-text' } 
                href="#salud"
                onClick={() => onUpdateActiveLink('salud')}
            >
                Salud
            </Nav.Link>
            <Nav.Link 
                className={ activeLink === 'contacto' ? 'active navbar-link nav-text' : 'navbar-link nav-text' } 
                href="#contacto"
                onClick={() => onUpdateActiveLink('contacto')}
            >
                Contacto
            </Nav.Link>
          </Nav>
    </Container>
  </Navbar>
  )
}
