import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/logo.svg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as Fa from 'react-icons/fa'

import { useLocation } from 'react-router-dom';

import "./styles/NavbarC.css"
import "../client/components/styles/ClientInterface.css"
import NavComponent from "./NavComponent.jsx";

function NavbarC({navItems}) {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'activelink' : '';
    };

    return (
      <>
        <Navbar key={'lg'} expand={'lg'} className="bg-body-tertiary mb-3 ">
          <Container fluid>
            <Navbar.Brand href="#"> <img src={Logo} className='logo' alt='/'/> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
              placement="start"
              className="custom-offcanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
                    <img src={Logo} className='logo' alt='/'/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='custom-body'>
                <Nav variant="underline" className="justify-content-end flex-grow-1 pe-3">
                  <Form className="custom-search">
                    <Form.Control
                      name="search"
                      type="search"
                      placeholder="Search"
                      className="search-input"
                      aria-label="Search"
                    />
                    <Button variant="outline-success" className='custom-searchbutton'><Fa.FaSearch/> </Button>
                  </Form>
                  {navItems.map((item, index) => (
                    <NavComponent
                      key={item.id}
                      name={item.name}
                      icon={item.icon}
                      link={item.link}
                    />
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    );
}

export default NavbarC;