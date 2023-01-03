import React from 'react';
import './Offer.css'
import f1 from '../../../images/furniture/furniture (1).jpg';
import f2 from '../../../images/furniture/furniture (2).jpg';
import f3 from '../../../images/furniture/furniture (3).jpg';
import f4 from '../../../images/furniture/furniture (4).jpg';
import f5 from '../../../images/furniture/furniture (5).jpg';
import f6 from '../../../images/furniture/furniture (6).jpg';
import f12 from '../../../images/furniture/furniture (12).jpg';
import f17 from '../../../images/furniture/furniture (17).jpg';
import f27 from '../../../images/furniture/furniture (27).jpg';
import f26 from '../../../images/furniture/furniture (26).jpg';
import f23 from '../../../images/furniture/furniture (23).jpg';

const NewArival = () => {
    return (
        <div className='w-3/4 mx-auto my-12'>
            <h2 className='font-bold text-3xl font-bold font-serif my-3 text-stone-500 title  '>New arival</h2>
            <div className=' '>
                <div className='flex w-full gap-4 '>



                    <div className='w-1/3'>
                        <div className='w-full  '><img className='image1 w-full' src={f17} alt="" /></div>
                        {/* <div className=' flex gap-1 mt-1 w-full'>
                            <div className='w-full'><img src={f2} className='w-full' alt="" /></div>
                            <div className='w-full'><img src={f1} className='w-full' alt="" /></div>
                        </div> */}
                    </div>
                    <div className='w-1/3  '>
                        <div className='w-full gap-4  '><img className='image2 w-full' src={f6} alt="" /></div>
                        <div className=' flex gap- mt-4 w-full'>
                            {/* <div className='w-full'><img src={f5} className='w-full' alt="" /></div> */}
                            <div className='w-full'><img src={f26} className='w-full image2' alt="" /></div>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className=' w-full'><img className='image3 w-full' src={f12} alt="" /></div>
                        <div className=' flex gap-4  mt-4 w-'>
                            <div className='w-ful'><img src={f23} className='image4 w-full' alt="" /></div>
                            <div className='w-full'><img src={f27} className='image4 w-full' alt="" /></div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default NewArival;