import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';  // Import custom CSS

function NavigationBar() {
    return (
        <Navbar expand="lg" className="navbar fixed-top"> {/* Add fixed-top class for full-width navbar */}
            <Navbar.Brand href="/" className="navbar-brand">MyApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                    <Nav.Link as={Link} to="/trivia" className="nav-link">Trivia</Nav.Link>
                    <Nav.Link as={Link} to="/games" className="nav-link">Games</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
