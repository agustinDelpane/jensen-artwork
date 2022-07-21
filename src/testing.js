/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'*/

function NavBar() {
    return (
      <>
        <Navbar className='color-nav'>
          <Container>
            <Navbar.Brand href="/">
              <img src={require('../../img/brand.png')} alt="Logo" className="imgBrand" ></img>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home" className='homeNav'>Todos los cuadros</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavBar;