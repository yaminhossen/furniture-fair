import React from 'react';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import banner4 from '../../../images/banner/fBanner11.jpg'
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
            {/* <div className='grid mb-24  w-3/4 mx-auto '>
           
            <div className='banners  w-full'>
                <div className="banners duration-75 transition-transform  rounded carousel w-full ">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <div className='ml-12 grid grid-cols-2 '>
                                <div className='p-8 rounded rounded-xl  '>
                                    <h2 className='text-5xl font-bold mb-4'><span className='text-amber-400  '>Home</span> <br />Comforrt</h2>
                                    <h3>THsissj Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit..</h3>
                                    <button className='btn-warning p-3 mt-4 rounded-xl'>More Info..</button>
                                </div>
                            </div>
                            <div>
                                <img src={b1} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div > */}
        </div >

    );
};

export default Banner;
