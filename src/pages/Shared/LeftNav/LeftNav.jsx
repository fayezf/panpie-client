import React, { useEffect, useState } from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';

const LeftNav = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4 className='mt-5'>All Chef Details</h4>
            {
                chefs.map(chef => <ChefDetails 
                    key={chef.id}
                    chef={chef}
                    ></ChefDetails>)
            }
        </div>
    );
};

export default LeftNav;