import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProviders/AuthProviders';
import Slider from '../Slider/Slider';

const NavigationBar = () => {
    
    return (
        <Container>
            <Navbar className='mt-2' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <h2 className='fw-semibold'>Pan<span className='text-danger'>P</span>ie</h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to={"/"}>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                        </Nav>
                        <Nav className='gap-1'>
                            {
                                // user && 
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {
                            // user ?
                            //     <Button variant="secondary">Logout</Button> :
                                <Link to={'/login'}>
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Slider></Slider>
        </Container>
    );
};

export default NavigationBar;