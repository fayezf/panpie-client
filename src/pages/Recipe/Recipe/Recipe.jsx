import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipe = useLoaderData();
    const { id, chefPicture, chefName, ratings, likes, ingredients } = recipe;
    return (
        <div className='mt-4'>
            <h3>Recipe Category</h3>
            <Card>
                <Card.Img variant="top" src={chefPicture} />
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>{ingredients}</li>
                        </ul>
                    </Card.Text>
                    <Button className='text-semibold' variant="success">Add to favorite</Button>
                </Card.Body>
                <Card.Footer className='text-muted d-flex'>
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={ratings}
                            readonly
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar />}
                        ></Rating>
                        <span>{ratings}</span>
                    </div>
                    <div>
                        <FaRegThumbsUp /> {likes}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Recipe;