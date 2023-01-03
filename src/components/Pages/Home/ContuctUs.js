import React from 'react';
import './ContuctUs'

const ContuctUs = () => {
    return (
        <div className=''>
            <div className="contuct rounded-xl w-3/4 my-24 mx-auto hero min-h-screen ">

                <div className="hero-content flex-col gap-24 w-full lg:flex-row">
                    <div className="text-white w-1/3 bg-gray-500 hidden lg:block coninfo rounded-md p-16">
                        <h1 className="text-2xl font-bold">Contuct Information</h1>
                        <div className='flex'>
                            <div className='flex justify-center items-center'>pp</div>
                            <div className='ml-4'>
                                <h2 className='text-blue-500 font-bold '>Address:</h2>
                                <h2>2342 Sugar Camp Road, Mirpur 432, Dhaka</h2>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <div className='flex justify-center items-center'>pp</div>
                            <div className='ml-4'>
                                <h2 className='text-blue-500 font-bold'>Phone:</h2>
                                <h2>2342 Sugar Camp Road, Mirpur 432, Dhaka</h2>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <div className='flex justify-center items-center'>pp</div>
                            <div className='ml-4'>
                                <h2 className='text-blue-500 font-bold'>Email:</h2>
                                <h2>2342 Sugar Camp Road, Mirpur 432, Dhaka</h2>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <div className='flex justify-center items-center'>pp</div>
                            <div className='ml-4'>
                                <h2 className='text-blue-500 font-bold'>Email:</h2>
                                <h2>2342 Sugar Camp Road, Mirpur 432, Dhaka</h2>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <div className='flex justify-center items-center'>pp</div>
                            <div className='ml-4'>
                                <h2 className='text-blue-500 font-bold'>Email:</h2>
                                <h2>2342 Sugar Camp Road, Mirpur 432, Dhaka</h2>
                            </div>
                        </div>
                    </div>
                    <div className="card w-2/3 shadow-2xl mt- bg-gray-500 ">
                        {/* <h2>Send Message</h2> */}
                        <div className="card-body">
                            <h2 className='font-bold text-xl text-white text-center '>Contuct Us:</h2>
                            <h2 className=' w-3/4
                             mx-auto text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro cupiditate placeat?</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-200 font-bold ">Email</span>
                                </label>
                                <input type="text" placeholder="Enter your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-200 font-bold ">Password</span>
                                </label>
                                <input type="text" placeholder="Password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-200 font-bold ">Your Conments</span>
                                </label>
                                <textarea className="textarea" placeholder="What you want to say us!! Write here please!"></textarea>

                            </div>
                            <div className="form-control  mt-6 w-1/3 mx-auto">

                                <button className="btn bg-gray-700 bg-opacity-400 border-none font-bold ">Send Us</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContuctUs;