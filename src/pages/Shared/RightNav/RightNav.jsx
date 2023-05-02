import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button className='mb-2' variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            <div>
                <h4 className='mt-5'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='text-primary mb-2'> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='text-info mb-2'> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='text-danger'> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;