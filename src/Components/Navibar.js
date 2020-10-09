import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div ` 
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        &:hover {
            color:white
        }
    }
`
export default function NaviBar() {
    return (
    <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>A.D-Мебель России</Navbar.Brand>
                <Navbar.Toggle aria-aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about">about</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button href="tel:89379108300" variant="primary">Позвонить</Button>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    </Styles>
    )

};