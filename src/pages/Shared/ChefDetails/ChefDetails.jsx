import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefDetails = ({ chef }) => {
    const { id, chefPicture, chefName, likes, numberOfRecipes, yearsOfExperience } = chef;
    return (
        <Container>
            <div className='mb-0'>
                <img src={chefPicture} alt="" />
                <h5>Name: {chefName}</h5>
                <p><small>Years of Experience: {yearsOfExperience}</small></p>
                <p><small>Number of Recipes: {numberOfRecipes}</small></p>
                <p><FaRegThumbsUp></FaRegThumbsUp> {likes}</p>
                <Link><Button className='fw-semibold' variant="success">View Recipes</Button></Link>
            </div>
        </Container>
    );
};

export default ChefDetails;