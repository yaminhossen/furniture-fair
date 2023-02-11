import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { ID } = useParams();
    return (
        <div className='mx-auto  mb-32 w-full mt-12'>
            <div className='text-center'>
                <h3>This is product details</h3>
                <h2>Product id is: {ID}</h2>
                <button><Link to='/checkout' className='btn btn-info mt-4'>CheakOut</Link></button>
            </div>
        </div>
    );
};

export default ProductDetails;