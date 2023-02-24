import React from 'react';
import './RandomService.css'
import f1 from '../../../images/furniture/furniture (1).jpg';
import f9 from '../../../images/furniture/furniture (9).jpg';
import f10 from '../../../images/furniture/furniture (10).jpg';
import f11 from '../../../images/furniture/furniture (11).jpg';
import f12 from '../../../images/furniture/furniture (12).jpg';
import f13 from '../../../images/furniture/furniture (13).jpg';
import f14 from '../../../images/furniture/furniture (14).jpg';
import f15 from '../../../images/furniture/furniture (15).jpg';
import f2 from '../../../images/furniture/furniture (3).jpg';
import f3 from '../../../images/furniture/furniture (4).jpg';
import f4 from '../../../images/furniture/furniture (5).jpg';
import f5 from '../../../images/furniture/furniture (6).jpg';
import f6 from '../../../images/furniture/furniture (7).jpg';
import f8 from '../../../images/furniture/furniture (9).jpg';


const RandomProduct = () => {

    return (
        <div className='w-3/4 yyyy my-10 lg:my-24 mx-auto'>
            <h2 className='text-center my-12 text-xl font-bold text-gray-400'>This is random products</h2>

            <div className="random  flex gap-2">
                <div className='w-2/6  flex flex-col gap-2 '>
                    <div><img src={f1} alt="" /></div>
                    <div><img src={f6} alt="" /></div>
                    <div className='h-full'><img className='h-full cursor-pointer' src={f5} alt="" /></div>
                </div>
                <div className='w-2/6 flex flex-col gap-2 '>
                    <div><img src={f4} alt="" /></div>
                    <div><img src={f3} alt="" /></div>
                    <div className='h-full'><img className='h-full' src={f2} alt="" /></div>
                </div>
                <div className='w-3/6 flex flex-col gap-2 '>
                    <div><img src={f15} alt="" /></div>
                    <div className='h-full'><img className='h-full' src={f8} alt="" /></div>

                </div>
                <div className='w-2/6 flex flex-col gap-2 '>
                    <div><img src={f11} alt="" /></div>
                    <div><img src={f9} alt="" /></div>
                    <div><img src={f10} alt="" /></div>
                </div>
                <div className='w-2/6 flex flex-col gap-2 '>
                    <div><img src={f14} alt="" /></div>
                    <div className='h-full'><img className='h-full' src={f13} alt="" /></div>
                    <div className='h-full'><img className='h-full' src={f12} alt="" /></div>
                </div>

            </div>


        </div>
    );
};

export default RandomProduct;