import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipe = useLoaderData();
    const { id, chefPicture, chefName, ratings, likes, ingredients, numberOfRecipes, yearsOfExperience, recipe_img, short } = recipe;
    return (
        <div className='mt-4'>
            <h3 className='text-center'>Recipe Category</h3>
            <div className='d-flex gap-3'>
                <Card className='w-50'>
                    <Card.Img className='rounded' variant="top" src={chefPicture} />
                    <Card.Body className='mb-0'>
                        <Card.Title>{chefName}</Card.Title>
                        <Card.Text>
                            <p className='mb-0'><small>Experience: {yearsOfExperience}</small></p>
                            <p><small>Recipes number: {numberOfRecipes}</small></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='w-50'>
                    <Card.Img className='rounded' variant="top" src={recipe_img} />
                    <Card.Body className='mb-0'>
                        <Card.Title>{short}</Card.Title>
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
        </div>
    );
};

export default Recipe;