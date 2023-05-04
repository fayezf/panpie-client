import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';

const Terms = () => {
    return (
        <Container>
            <NavigationBar></NavigationBar>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe esse quisquam qui, suscipit modi dolore voluptatem similique odit, recusandae cum iure hic quod, deserunt exercitationem temporibus deleniti sint id.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
            <Footer></Footer>
        </Container>
    );
};

export default Terms;