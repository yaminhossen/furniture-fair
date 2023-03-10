import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { id, img, name, price } = product;
    const navigate = useNavigate();
    const productDetails = (id) => {
        // navigate(`/product/${id}`);
        navigate('/dashboard')
    }
    return (
        <div>
            <div className='text-center frame'>
                <img src={img} className="w-full h-48 lg:h-96 proimage" alt="" />

                <div className='info w-full h-48 lg:h-96'>
                    <div className=''>
                        <button onClick={() => productDetails(id)} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-gray-200 border-none text-black hover:text-white hover:font-bold'>Buy Now</button>
                        <br />
                        <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-gray-200 border-none text-black hover:text-white hover:font-bold mt-2'>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex justify-start mt-2'>
                    <div>
                        <p className='text- font-bold text-stone-500'>{name}</p>
                    </div>
                </div>
                <div className='justify-end pr-2 flex'>
                    <p ><span className='text-amber-400 text-xl'>*****</span> <br /> <span className='text-md font-bold text-stone-500'>$ {price}</span></p>

                </div>
            </div>
        </div>
    );
};

export default Product;