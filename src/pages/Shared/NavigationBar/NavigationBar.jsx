import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProviders/AuthProviders';
import Slider from '../Slider/Slider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Container>
            <Navbar className='mt-2' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <h2 className='fw-semibold'>Pan<span className='text-danger'>P</span>ie</h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            <Link to="/" className='text-decoration-none'>Home</Link>
                            <Link to="/blog" className='text-decoration-none'>Blog</Link>
                        </Nav>
                        <Nav className='gap-1'>
                            {
                                user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {
                                user ?
                                    <Button onClick={handleLogout} variant="secondary">Logout</Button> :
                                    <Link to={'/login'}>
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;