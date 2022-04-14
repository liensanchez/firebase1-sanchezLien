import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../Carrito/CartWidget';
import { NavLink } from 'react-router-dom';


function NavBar() {


  return (

    <Navbar bg="light" expand="lg">

      <Container>

        <NavLink to='/' ><img src="https://i.ibb.co/V2jcGcT/logo.jpg" /></NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link href="#home">Sucursales</Nav.Link>

            <Nav.Link href="#link">Quiero arreglar mi equipo</Nav.Link>

            <NavDropdown title="Equipos" id="basic-nav-dropdown">

              <NavDropdown.Item href="">Iphone</NavDropdown.Item>

              <NavDropdown.Item href="">Samsung</NavDropdown.Item>

            </NavDropdown>

          </Nav>

          <> {/*utilizamos asi y no div para evitar crear otro nodo */}

            <Nav.Link className="justify-content-end"><CartWidget/></Nav.Link>

            <Nav.Link className="justify-content-end">Usuario</Nav.Link>     

          </>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  ) 

}

export default NavBar