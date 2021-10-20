import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
    const { user, logOut } = UseAuth()
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>

                    <Navbar.Toggle />
                    {
                        user.email ? <div><Button variant="outline-primary" onClick={logOut} className="text-white me-3">Log Out</Button><img src={user.photoURL} className="rounded-circle me-3" width="50px" alt="" />  </div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    <Navbar.Collapse className=" w-50 justify-content-center border border-primary rounded-pill me-3">

                        <Nav.Link as={Link} to="/services"  >Services</Nav.Link>
                        <Nav.Link as={Link} to="/equipment"> Instruments</Nav.Link>
                        <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" > About</Nav.Link>



                    </Navbar.Collapse>
                    <Navbar.Brand as={Link} to="/"><span style={{ color: 'blue' }}>SMK </span> Diagonostic Center</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;