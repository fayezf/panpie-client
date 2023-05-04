import React, { useEffect, useState } from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';

const LeftNav = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-fayezf.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4 className='mt-4 text-center'>All Chef Details</h4>
            <div className=' row row-cols-1 row-cols-md-2'>
            {
                chefs.map(chef => <ChefDetails 
                    key={chef.id}
                    chef={chef}
                    ></ChefDetails>)
            }
            </div>
        </div>
    );
};

export default LeftNav;