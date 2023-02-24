import React from 'react';

const DashboardItem = ({ item }) => {
    const { img, name, price } = item;
    return (
        <div className=' rounded-2xl shadow-lg  shadow-gray-300 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-x-yellow-700 p-4'>
                <div className='flex justify-center items-center bg-slate-200 rounded-3xl h-48'>
                    <div className='w-44 p-8'>
                        <img className='' src={img} alt="" />
                    </div>
                </div>
                <div className=' mt-8'>
                    <h3 className='text-xl font-bold text-center text-slate-600'>{name}</h3>
                    <div className=' flex justify-center mt-12'>
                        <div className='flex'>

                            <div className='flex'>
                                <div className='mr-6 cursor-pointer ring-2 ring-slate-400 rounded-full p-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>

                                </div>
                                <div className='mr-6 p-1 font-bold'>1</div>
                                <div className='cursor-pointer ring-2 ring-slate-400 rounded-full p-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' mt-8'>
                    <h3 className='text-xl font-bold text-center text-slate-400 hover:text-red-400 cursor-pointer'> Remove</h3>
                    <div className='text-center mt-12'>
                        <p className='px-8 py-1 border-2 rounded-lg  inline border-green-600 font-bold text-green-600'>${price}.00</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardItem;