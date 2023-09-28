import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
      }
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    } 
  return (
    <Navbar className={ scrolled ? 'nav scrolled' : 'nav' } fixed='top' expand='lg'>
        <Container>
        <Navbar.Brand href="#home">
            <img
            className='logo-img'
            src="/img/gkm-logo.png"
            alt="GKM Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
