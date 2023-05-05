import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
             <div className='my-5 text-center'>
            <img style={{height:"400px"}} src="https://img.freepik.com/free-vector/error-404-page-found-confused-characters_107791-13163.jpg?w=996&t=st=1683266180~exp=1683266780~hmac=f3069bfb91349b45b4e2db4d5e93bba614f54d534268c20bab12fae421c7b4a9" alt="" />
            <br />
            <Button variant="success "><Link className='text-decoration-none text-white' to='/'>Back To Home</Link></Button>
        </div>
        </div>
    );
};

export default ErrorPage;