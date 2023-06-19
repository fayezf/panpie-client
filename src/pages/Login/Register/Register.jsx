import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProviders/AuthProviders';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);
    const [valid, setValid] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        // validation
        setValid('');
        setSuccess('');

        if (!/(?=.*[A-Z]).[A-Z]/.test(password)) {
            setValid('Please add at least two uppercase.')
            return
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setValid('Please add a special character.');
            return
        }
        else if (password.length < 6) {
            setValid('Password must be 6 characters long');
            return
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateUserProfile(createdUser, name, photo)
                console.log(createdUser)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container>
            <NavigationBar></NavigationBar>
            <div className='mt-4'>
                <h3 className='text-center'>Please Register your account</h3>
                <Form onSubmit={handleRegister} className='w-25 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleAccepted}
                            type="checkbox"
                            name='accept'
                            label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                    </Form.Group>
                    <Button variant="primary" disabled={!accepted} type="submit">
                        Register
                    </Button>
                    <p className='text-danger'>{valid}</p>
                    <p className='text-success'>{success}</p>
                    <br />
                    <Form.Text className="text-secondary">
                        Already have an account? <Link to="/login">Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Register;