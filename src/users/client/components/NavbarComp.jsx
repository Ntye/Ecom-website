import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/logo.svg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as Fa from 'react-icons/fa'
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <>
      <Navbar key={'lg'} expand={'lg'} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"> <img src={Logo} className='logo' alt='/'/> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
                  <img src={Logo} className='logo' alt='/'/> 
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              <Nav variant="underline" className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/client">
                      <div className="page">
                        <span className='icon'><Fa.FaHome/>  </span>
                        <span>Acceuil</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="panier">
                      <div className="page">
                        <span className='icon'><Fa.FaShoppingCart/>  </span>
                        <span>Panier</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="compte">
                      <div className="page">
                        <span className='icon'><Fa.FaUser />  </span>
                        <span>Compte</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavbarComp;