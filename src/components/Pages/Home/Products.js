import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='w-3/4 mx-auto mb-24'>
            <div className='text-center my-12'>
                <h2 className='font-bold text-3xl text-stone-500'>Our Products</h2>
                <h3 className='font-bold text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, itaque?</h3>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    products.slice().map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='flex justify-end my-12 font-bold text-xl '>
                <Link className='hover:bg-pink-400 p-2 hover:text-white rounded pr-4' to="/home">See all products ...</Link>
            </div>
        </div>
    );
};

export default Products;