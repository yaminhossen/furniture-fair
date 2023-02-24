import React from 'react';
import chair from '../../../images/dashboard/fur.png'

import DashboardItem from './DashboardItem';
const items = [
    { id: 1, name: "Wooden smooth chair", img: chair, price: 62 },
    { id: 2, name: "Wooden smooth chair", img: chair, price: 32 },
    { id: 3, name: "Wooden smooth chair", img: chair, price: 42 },
]
const Dashboard = () => {
    return (
        <div className='mx-12 lg:mx-28 my-14'>
            <h3 id='top' className='text-4xl font-bold font-mon'>Shopping Cart</h3>
            <h3 className='font-semibold  text-slate-600 text-xl my-5'>All item . Which You are selected.</h3>
            <div className="flex flex-col w-full">

                <div className="divider "></div>

            </div>
            <div className='flex-row md:flex lg:flex'>
                <div className='lg:w-2/3 '>
                    {
                        items.map(item => <DashboardItem
                            key={item.id}
                            item={item}
                        ></DashboardItem>)
                    }
                </div>
                <div className='flex justify-center lg:w-1/3 shadow-lg shadow-slate-300 rounded-3xl  ml-4'>
                    <div className='w-full mx-8 mt-12'>
                        <h3 className='text-center text-2xl font-bold'>Order Summary</h3>
                        <div className='mt-12'>
                            <div className='flex justify-between my-4'>
                                <div className='text-md font-bold text-slate-500'>Subtotal</div>
                                <div className='font-bold'>$136.00</div>
                            </div>
                            <div className="divider my-0 "></div>
                            <div className='flex justify-between my-4'>
                                <div className='text-md font-bold text-slate-500'>Shipping estimate</div>
                                <div className='font-bold'>$8.00</div>
                            </div>
                            <div className="divider my-0 "></div>
                            <div className='flex justify-between my-4'>
                                <div className='text-md font-bold text-slate-500'>Tax estimate</div>
                                <div className='font-bold'>$20.00</div>
                            </div>
                            <div className="divider my-0 "></div>
                            <div className='flex justify-between'>
                                <div className='font-bold text-xl'>Order total</div>
                                <div className='font-bold'>$164.00</div>
                            </div>

                        </div>
                        <button className='p-3 font-bold text-center w-full border-2 mt-10 text-xl rounded-xl bg-slate-500 text-white hover:bg-slate-600'>Cheakout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;