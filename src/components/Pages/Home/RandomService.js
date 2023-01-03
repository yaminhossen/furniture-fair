import React from 'react';
import './RandomService.css'
import photo1 from '../../../images/random/cat.jpg'
import photo2 from '../../../images/random/forest.jpg'
import photo3 from '../../../images/random/forest2.jpg'
import photo4 from '../../../images/random/forest3.jpg'
import photo5 from '../../../images/random/fruits.jpg'
import photo6 from '../../../images/random/parrot.jpg'
import photo7 from '../../../images/random/redFlower.jpg'
import photo8 from '../../../images/random/redflower2.jpg'
import photo9 from '../../../images/random/redTulip.jpg'
import photo10 from '../../../images/random/sunflower.jpg'
import photo11 from '../../../images/random/sunset.jpg'
import photo12 from '../../../images/random/river.jpg'
import photo13 from '../../../images/random/river2.jpg'
import photo14 from '../../../images/random/tiger.jpg'
import photo15 from '../../../images/random/tree.jpg'
import f1 from '../../../images/furniture/furniture (1).jpg';
import f9 from '../../../images/furniture/furniture (9).jpg';
import f10 from '../../../images/furniture/furniture (10).jpg';
import f11 from '../../../images/furniture/furniture (11).jpg';
import f12 from '../../../images/furniture/furniture (12).jpg';
import f13 from '../../../images/furniture/furniture (13).jpg';
import f14 from '../../../images/furniture/furniture (14).jpg';
import f15 from '../../../images/furniture/furniture (15).jpg';
import f16 from '../../../images/furniture/furniture (16).jpg';
import f17 from '../../../images/furniture/furniture (17).jpg';
import f18 from '../../../images/furniture/furniture (18).jpg';
import f19 from '../../../images/furniture/furniture (19).jpg';
import f2 from '../../../images/furniture/furniture (3).jpg';
import f3 from '../../../images/furniture/furniture (4).jpg';
import f4 from '../../../images/furniture/furniture (5).jpg';
import f5 from '../../../images/furniture/furniture (6).jpg';
import f6 from '../../../images/furniture/furniture (7).jpg';
import f7 from '../../../images/furniture/furniture (8).jpg';
import f8 from '../../../images/furniture/furniture (9).jpg';


const RandomService = () => {
    //     // const interval = setInterval(() => {
    //     console.log(Math.floor(Math.random() * 5));
    // }, 2000);

    // // return interval;
    // const vut = setInterval()

    return (
        <div className='w-3/4 yyyy my-24 mx-auto'>
            <h2 className='text-center my-12 text-xl font-bold text-pink-400'>This is random servcie</h2>

            <div className="flex gap-2">
                <div className='w-2/6 flex flex-col gap-2 '>
                    <div><img src={f1} alt="" /></div>
                    <div><img src={f6} alt="" /></div>
                    <div><img src={f5} alt="" /></div>
                </div>
                <div className='w-2/6 flex flex-col gap-2 '>
                    <div><img src={f4} alt="" /></div>
                    <div><img src={f3} alt="" /></div>
                    <div><img src={f2} alt="" /></div>
                </div>
                <div className='w-3/6 flex flex-col gap-2 '>
                    <div><img src={f15} alt="" /></div>
                    <div><img src={f8} alt="" /></div>
                    {/* <div><img src={f15} alt="" /></div> */}
                </div>
                <div className='w-2/6 flex flex-col gap-2 '>
                    <div><img src={f11} alt="" /></div>
                    <div><img src={f9} alt="" /></div>
                    <div><img src={f10} alt="" /></div>
                </div>
                <div className='w-2/6 flex flex-col gap-2 '>
                    <div><img src={f14} alt="" /></div>
                    <div><img src={f13} alt="" /></div>
                    <div><img src={f12} alt="" /></div>
                </div>

            </div>

            {/* <div className='flex'>
                <div className=' w-1/4 mt-2'>
                    <div className='  px-2 '><img className='h- w-full' src={photo14} alt="" /></div>
                    <div className=' pt-2 px-2 '><img className=' w-full' src={photo6} alt="" /></div>
                    <div className=' pt-2 px-2 '><img className=' w-full' src={photo11} alt="" /></div>

                </div>
                <div className='flex w-2/6  '>
                    <div>
                        <div className='w-'><img className='mt-2 ' src={photo7} alt="" /></div>
                        <div className='flex'>
                            <div className=' w-1/3 '>
                                <div className='ml- h-1/2'><img className='mt-2 h-' src={photo10} alt="" />
                                    <div className=' w-'>
                                        <img className='mt-2 h-' src={photo12} alt="" /></div>


                                </div>

                            </div>
                            <div className='flex w-2/3 '>
                                <div className='ml-2 h- '><img className='mt-2 four  h-' src={photo5} alt="" />

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className=' w-'>
                                <img className='mt-2 w-full one' src={photo1} alt="" /></div>
                        </div>
                    </div>


                </div>

                <div className='flex w-3/6 '>
                    <div>
                        <div className='flex'>
                            <div className=' w-1/3 '>
                                <div className='ml-2 h-1/2'><img className='mt-2 h-36' src={photo13} alt="" />
                                    <div className=' w-'>
                                        <div><img className='mt-2 h-' src={photo8} alt="" /></div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex w-2/3 '>
                                <div className='ml-2 h- '><img className='mt-2  h-72' src={photo15} alt="" />

                                </div>

                            </div>
                        </div>
                        <div className='ml-2 '>
                            <img className='mt-2 ' src={photo9} alt="" />
                        </div>
                        <div className='flex '>
                            <div className='ml-2'>
                                <img className='mt-2 ' src={photo4} alt="" />
                            </div>
                            <div className='ml-2'>
                                <img className='mt-2 ' src={photo4} alt="" />
                            </div>
                        </div>
                        <div className='ml-2 '>
                            <img className='mt-2 ' src={photo3} alt="" />
                        </div>
                    </div>

                </div>

            </div> */}
        </div>
    );
};

export default RandomService;