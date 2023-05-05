import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProviders/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const Login = () => {
    const [valid, setValid] = useState('')
    const [success, setSuccess] = useState('')

    const auth = getAuth(app)
    const googleProvider =new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

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

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIN = () => {
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const loggedUser =result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log('error', error.message)
        })

    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            const loggedUser =result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log('error', error.message)
        })

    }

    return (
        <Container>
            <NavigationBar></NavigationBar>
            <div className='mt-4'>
                <h3 className='text-center'>Please Login</h3>
                <Form onSubmit={handleLogin} className='w-25 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='text-danger'>{valid}</p>
                    <p className='text-success'>{success}</p>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't have an account? <Link to="/register">Register</Link>
                    </Form.Text>
                    <Form.Text className='mt-3'>
                        <Button onClick={handleGoogleSignIN} className='my-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                    </Form.Text>
                    <Form.Text className="text-danger">
                        <Button onClick={handleGithubSignIn} className='my-2' variant="outline-secondary"> <FaGithub /> Login with Github</Button>
                    </Form.Text>
                </Form>
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Login;