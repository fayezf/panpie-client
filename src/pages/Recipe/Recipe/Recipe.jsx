import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipe = useLoaderData();
    const {id, chefPicture, chefName, likes, ingredients} = recipe;
    return (
        <Card>
            <Card.Img variant="top" src={chefPicture} />
            <Card.Body>
                <Card.Title>{chefName}</Card.Title>
                <Card.Text>
                    <ul>
                        <li>{ingredients}</li>
                    </ul>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
                <div>
                <FaRegThumbsUp /> {likes}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default Recipe;