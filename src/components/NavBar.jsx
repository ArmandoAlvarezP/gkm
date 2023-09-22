import { Navbar, Nav, Container } from 'react-bootstrap';
export const NavBar = () => {
  return (
    <Navbar className='nav' fixed='top'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          className='logo-img'
          src="/img/gkm-logo.png"
          alt="GKM Logo"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
            <Nav.Link className='nav-text' href="#home">¿Quiénes Somos?</Nav.Link>
            <Nav.Link className='nav-text' href="#servicios">Servicios</Nav.Link>
            <Nav.Link className='nav-text' href="#educacion">Educación</Nav.Link>
            <Nav.Link className='nav-text' href="#salud">Salud</Nav.Link>
            <Nav.Link className='nav-text' href="#contacto">Contacto</Nav.Link>
          </Nav>
    </Container>
  </Navbar>
  )
}
