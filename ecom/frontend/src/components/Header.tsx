import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';
export function Header() {
    

    return (
        <>
            <header>
                <Navbar bg = "dark" variant="dark" expand="lg" collapseOnSelect>
                    <LinkContainer to="/">
                    <Navbar.Brand>            Pro Shop        </Navbar.Brand>

                    </LinkContainer>

                    
                    <Navbar.Toggle arial-controls="NAV" />
                    <Navbar.Collapse id= "NAV">
                            <Nav className="mr-auto">
                            <LinkContainer to="/home">
                                <Nav.Link >
                                <i className="fa-solid fa-house-chimney"></i>
                                    Home
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/login">
                                <Nav.Link>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                    login
                                </Nav.Link>
                            </LinkContainer>
                            </Nav>

                    </Navbar.Collapse>


                </Navbar>
            </header>
        </>
    )
}

