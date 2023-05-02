import React from 'react';
import { Carousel } from 'react-bootstrap';

import recipe1 from '../../../assets/recipe1.jpg'
import recipe2 from '../../../assets/recipe2.jpg'

const Slider = () => {
    return (
        <div>
            <Carousel className='mt-3'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={recipe1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger'>Welcome To Our Restaurant</h3>
                        <p className='text-danger fs-4'>Do you have a restaurant, or are you planning to open one and need a solid online presence?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={recipe2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>Individual finger food recipes</h3>
                        <p className='text-danger fs-4'>These savory cheddar cheese and broccoli breakfast cups can be served warm at the breakfast table.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={recipe1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>Food Recipe</h3>
                        <p className='text-danger fs-4'>
                        Small Meal Ideas: How to Spice Up Mealtimes the Easy Way - Chas' Crazy Creations..
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;