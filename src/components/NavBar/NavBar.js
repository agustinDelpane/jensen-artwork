import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navImg">
      <Container className="navImgContainer">
        <Navbar.Brand href="/">
          <img src={require('../../img/brand.png')} alt="Logo" className="imgBrand"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/all" className="tlcNav">Todos los cuadros</Nav.Link>
            <Nav.Link href="/ofertas" className="oNav">Ofertas</Nav.Link>
            <Nav.Link href="/mejores-cuadros" className="mcNav">Mejores Cuadros</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/sobre-mi" className="smNav">Sobre mí</Nav.Link>
            <Nav.Link href="/contacto" className="cNav">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;









/*const NavBar = () => {
  return (
    <>
        <p>Soy NavBar pero no quiero funcionar porque me duele la cola un montonazo</p>
        logo
        <ul>
            <li>Inicio</li>
            <li>Todos los cuadros</li>
            <li>Mejores cuadros</li>
            <li>Ofertas</li>
            <li>Sobre Mí</li>
            <li>Contacto</li>
        </ul>
        Carrito
    </>
  )
}

export default NavBar;*/