import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
    return ( 
        <Navbar bg="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/" class="text-white">
                <p class="fw-bolder text-light h5">North American Artist <br></br>Development Foundation</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">
                    <p class="fw-bolder text-light h5">Home</p>
                </Nav.Link>
                <Nav.Link href="/About">
                    <p class="fw-bolder text-light h5">About</p>
                </Nav.Link>
                <Nav.Link href="/Gallery">
                    <p class="fw-bolder text-light h5">Gallery</p>
                </Nav.Link>
                <Nav.Link href="/Login">
                    <p class="fw-bolder text-light h5">Login</p>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
     );
}

export default Header;