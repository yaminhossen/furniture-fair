import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price } = service;
    return (
        <div className='text-center service'>
            <img src={img} className="w-full lg:h-96  " alt="" />
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

export default Service;