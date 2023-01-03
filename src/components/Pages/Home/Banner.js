import React from 'react';
import b1 from '../../../images/banner/b1.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className='w-3/4 mx-auto banners'>
                <div className='flex justify-center items-center'>
                    <div className='  '>
                        <div className='p-8 rounded rounded-xl  '>
                            <div className='flex'>
                                <div className=' font-bold text-9xl '>H</div>
                                <div className='mt-8 text-stone-400'>
                                    <div className='text-2xl font-bold'>ome</div>
                                    <div className='text-6xl font-bold'>Comfort</div>
                                </div>
                            </div>

                            <h3>THsissj Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit..</h3>
                            <button className='btn p-3 mt-8 rounded-xl bg-stone-400
                             border-none text-white border '>More Info..</button>
                        </div>
                    </div>
                    <div className='banners ml-'>
                        <img src={b1} className='banners ' alt="" />
                    </div>
                </div>
            </div>

        </div >

    );
};

export default Banner;
