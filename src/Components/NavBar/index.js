import React from 'react';
import "./styles.css"
import { Nav, Navbar, Button, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Container>
            <Navbar bg="trans" >
                <Navbar.Brand href="#home">
                <img
                    id="logo"
                    alt="logo"
                    src = "https://www.graphicsprings.com/filestorage/stencils/8b3cdc9079cf50b7ba51ca2f1899ab11.svg"
                    className="d-inline-block align-top"
                />{' '}
                <span id="home"><b>HELPING HANDS</b></span>
                </Navbar.Brand>
                
                <Nav className="mr-auto"></Nav>
                
                <Nav>
                    <Nav.Link href="#deets"><b>Donated Books</b></Nav.Link>
                    <Nav.Link href="#deets"><b>Donation Center</b></Nav.Link>
                    <Nav.Link href="#deets"><Button class="btn btn-outline-dark rounded-pill" style={{width:"5rem"}}>Donate</Button></Nav.Link>
                    <Nav.Link href="#deets"><b>Work With Us</b></Nav.Link>
                    <Nav.Link href="#deets"><b>Contact Us</b></Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default NavBar;