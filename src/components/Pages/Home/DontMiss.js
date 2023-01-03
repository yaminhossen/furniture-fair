import React from 'react';
import './Banner.css';
import offer from '../../../images/offer/offer.png'

const DontMiss = () => {
    return (
        <div className=''>
            <div className='w-3/4  mx-auto '>
                <div className="hero min-h-screen bg-stone-200  rounded-2xl">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='flex offer  justify-center hidden lg:block w-2/4'>
                            <img className='' src={offer} alt='' />
                        </div>
                        <div className='flex w-2/4 justify-center ml-12'>
                            <div>
                                <h1 className="text-5xl font-bold">Don't miss out on special offers</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <ul className="menu  w-56 p-2 rounded-box">
                                    <li>
                                        <a className='font-bold text-gray-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                            Friendship
                                        </a>
                                    </li>
                                    <li>
                                        <a className='font-bold text-gray-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Combo offer
                                        </a>
                                    </li>
                                    <li>
                                        <a className='font-bold text-gray-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                            First visit
                                        </a>
                                    </li>
                                </ul>
                                <div className="form-control mt-7">
                                    <h3 className='font-bold pl-3 mb-1'>Subscribe Us</h3>
                                    <div className="input-group">
                                        <input type="email" placeholder="Enter your email" className="input input-bordered" />
                                        <button className="btn btn-square">
                                            sbcs
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DontMiss;