import React from 'react';
import logo from '../../../assets/logo.png'
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img style={{ height: '110px' }} src={logo} alt="" />
                <h1 className='text-secondary'>Fast Food <span className='text-danger'>&</span> Restaurant</h1>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    Panpie Mexican Grill’s restaurant traffic grows as the chain proves its pricing power..  Panpie unveils sustainable-restaurant design as it aims to cut carbon footprint in half by 2030.. 
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;