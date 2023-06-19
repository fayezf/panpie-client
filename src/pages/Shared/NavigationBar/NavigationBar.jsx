import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
                    <Link className='text-decoration-none' to="/"><h2 className='fw-semibold text-black'>Pan<span className='text-danger'>P</span>ie</h2></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            <NavLink to="/" className={({isActive})=> (isActive ? 'text-decoration-none text-success' : 'text-decoration-none')}>Home</NavLink>
                            <NavLink to="/about" className={({isActive})=> (isActive ? 'text-decoration-none text-success' : 'text-decoration-none')}>About</NavLink>
                            <NavLink to="/blog" className={({isActive})=> (isActive ? 'text-decoration-none text-success' : 'text-decoration-none')}>Blog</NavLink>
                        </Nav>
                        <Nav className='gap-1'>
                            {
                                user &&
                                <Image title={user.displayName} style={{ width: '40px' }} src={user.photoURL} roundedCircle />
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