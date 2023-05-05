import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {  FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Recipe = () => {
    const recipe = useLoaderData();
    const { id, chefPicture, chefName, ratings, likes, recipe_img, name, method_of_cooking, numberOfRecipes, yearsOfExperience, description } = recipe;

    const handleClick = event => {
        event.currentTarget.disabled = true;
        toast('Good job')

    }

    return (
        <div className='mt-4 '>
            <h3 className='text-center'>Recipe Category</h3>
            <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
                <img className='w-50' src={chefPicture} alt="" />
                <div>
                    <h4>{chefName}</h4>
                    <p><small>Description: {description}</small></p>
                    <p className='mb-0'><small>Experience: {yearsOfExperience}</small></p>
                    <p><small>Number of Recipes: {numberOfRecipes}</small></p>
                </div>
            </div>
            <section className='mt-4'>
                <Card className='w-50 mx-auto'>
                    <Card.Img className='rounded' variant="top" src={recipe_img} />
                    <Card.Body className='mb-0'>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>
                            <p><small>Ingredients: {method_of_cooking}</small></p>
                        </Card.Text>
                        <div>
                            <Button onClick={handleClick} className='text-semibold' variant="success">Add to favorite</Button>
                        </div>
                            <ToastContainer></ToastContainer>
                    </Card.Body>
                    <Card.Footer className='text-muted d-flex'>
                        <div className='flex-grow-1'>
                            <Rating
                                placeholderRating={Math.round(ratings || 0)}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar />}
                            ></Rating>
                            <span className='text-warning'>{ratings}</span>
                        </div>
                        <div>
                            <FaRegThumbsUp /> {likes}
                        </div>
                    </Card.Footer>
                </Card>
            </section>
        </div>
    );
};

export default Recipe;