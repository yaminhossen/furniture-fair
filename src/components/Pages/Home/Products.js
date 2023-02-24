import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../Hook/useProduct';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useProduct([]);
    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, [])
    return (
        <div className='w-3/4 mx-auto mb-24'>
            <div className='text-center my-12'>
                <h2 className='font-bold text-3xl text-stone-500'>Best Selling Products</h2>
                <h3 className='font-bold text-stone-400'>Here have all unique design product.Which have resonable price.You can try out. </h3>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    products.slice(0, 8).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='flex justify-end my-12 font-bold text-xl '>
                <Link className='hover:bg-gray-600 p-2 hover:text-white rounded pr-4' to="/allproduct">See all products ...</Link>
            </div>
        </div>
    );
};

export default Products;