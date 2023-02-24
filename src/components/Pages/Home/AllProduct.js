import React from 'react';
import useProduct from '../Hook/useProduct';
import Product from './Product';

const AllProduct = () => {
    const [products, setProducts] = useProduct();

    return (
        <div className='mx-24 my-14'>
            <h3 className='text-3xl text-gray-400 text-center font-bold my-8'>All products</h3>
            <div className='grid grid-cols-4 gap-4'>
                {
                    products.slice().map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProduct;