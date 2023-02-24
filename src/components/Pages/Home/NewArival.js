import React from 'react';
import './Offer.css'
import './Product.css'
import { useNavigate } from 'react-router-dom'
import f6 from '../../../images/furniture/furniture (6).jpg';
import f12 from '../../../images/furniture/furniture (12).jpg';
import f17 from '../../../images/furniture/furniture (17).jpg';
import f27 from '../../../images/furniture/furniture (27).jpg';
import f26 from '../../../images/furniture/furniture (26).jpg';
import f23 from '../../../images/furniture/furniture (23).jpg';

const NewArival = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/dashboard');
    }
    return (
        <div className='w-3/4 mx-auto my-12'>
            <h2 className='text-3xl font-bold font-serif my-3 text-stone-500 title  '>New arival</h2>
            <div className=' '>
                <div className='flex w-full gap-4 '>



                    <div className='w-1/3 frame'>
                        <div className='w-full  h-full '><img className='image1  w-full proimage' src={f17} alt="" /></div>
                        <div className='info  w-full h-full  '><button onClick={handleNavigate} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-gray-200 border-none text-black hover:text-white hover:font-bold'>Buy Now</button></div>

                    </div>
                    <div className='w-1/3  '>
                        <div className='frame'>
                            <div className='w-full gap-4  '><img className='image2 h-full w-full proimage' src={f6} alt="" /></div>
                            <div className='info  w-full h-full '><button onClick={handleNavigate} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-gray-200 border-none text-black hover:text-white hover:font-bold'>Buy Now</button></div>
                        </div>
                        <div className=' flex gap- mt-4 w-full'>
                            <div className='frame'>
                                <div className='w-full'><img src={f26} className='w-full image2 proimage' alt="" /></div>
                                <div className='info  w-full h-full '><button onClick={handleNavigate} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-gray-200 border-none text-black hover:text-white hover:font-bold'>Buy Now</button></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className="frame"><div className=' w-full'><img className='image3 w-full proimage' src={f12} alt="" /></div>
                            <div className='info  w-full h-full '><button onClick={handleNavigate} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-gray-200 border-none text-black hover:text-white hover:font-bold'>Buy Now</button></div>
                        </div>
                        <div className=' flex gap-4  mt-4 w-'>
                            <div className="frame">
                                <div className='w-ful'><img src={f23} className='image4 w-full proimage' alt="" />
                                    <div className='info  w-full h-full '><button onClick={handleNavigate} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-gray-200 border-none text-black hover:text-white hover:font-bold'>Buy Now</button></div></div>
                            </div>
                            <div className="frame"><div className='w-full'><img src={f27} className='image4 w-full proimage' alt="" />
                                <div className='info  w-full h-full '><button onClick={handleNavigate} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-gray-200 border-none text-black hover:text-white hover:font-bold'>Buy Now</button></div></div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default NewArival;