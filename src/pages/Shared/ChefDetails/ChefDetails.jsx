import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefDetails = ({ chef }) => {
    const { id, chefPicture, chefName, likes, numberOfRecipes, yearsOfExperience } = chef;
    return (
        <Card className="mb-4 w-50">
            <Card.Header className='d-flex align-items-center'>
                <Card.Img className='rounded' variant="top" src={chefPicture} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{chefName}</Card.Title>
                <Card.Text>
                    <p><small>Years of Experience: {yearsOfExperience}</small></p>
                    <div className='text-muted d-flex'>
                        <div className='flex-grow-1'>
                            <p><small>Number of Recipes: {numberOfRecipes}</small></p>
                        </div>
                        <div>
                            <FaRegThumbsUp /> {likes}
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Link to={`/chefs/${id}`}><Button className='w-100 text-semibold' variant="success">View Recipe</Button></Link>
            </Card.Footer>
        </Card>
    );
};

export default ChefDetails;