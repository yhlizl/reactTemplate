import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export function Header() {
    

    return (
        <>
            <header>
                <Navbar bg = "dark" variant="dark" expand="lg" collapseOnSelect>
                    <Navbar.Brand href ="/" />
                        HomePage
                    <Navbar.Toggle arial-controls="NAV" />
                    <Navbar.Collapse id= "NAV">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">
                                <i className="fa-solid fa-house-chimney"></i>
                                    Home
                                </Nav.Link>
                                <Nav.Link href="#login">
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                    login
                                </Nav.Link>
                            </Nav>

                    </Navbar.Collapse>


                </Navbar>
            </header>
        </>
    )
}

