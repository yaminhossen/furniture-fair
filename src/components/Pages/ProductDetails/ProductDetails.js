import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { ID } = useParams();
    return (
        <div className='mb-32 mt-12'>
            <h3>THis is product details</h3>
            <h2>Product id is: {ID}</h2>
        </div>
    );
};

export default ProductDetails;