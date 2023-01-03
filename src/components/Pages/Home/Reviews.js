import React, { useEffect, useState } from 'react';

import reviewer1 from '../../../images/review/expert-1.jpg';
import reviewer2 from '../../../images/review/expert-2.jpg';
import reviewer3 from '../../../images/review/expert-3.jpg';
import reviewer4 from '../../../images/review/expert-4.jpg';
import reviewer5 from '../../../images/review/expert-5.jpg';
import reviewer6 from '../../../images/review/expert-6.png';

const Reviews = () => {
    const second = [
        { name: 'Robert', img: reviewer1, des: 'The service was awesome The man was just good' },
        { name: 'Johnson', img: reviewer2, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloremque deserunt exercitationem officiis! Iure, consequuntur!' },
        { name: 'Henry Ford', img: reviewer3, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum nam earum consectetur autem illo.' },
        { name: 'Klinton', img: reviewer4, des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae tempora dolorum dignissimos explicabo assumenda cupiditate.' },
        { name: 'Jakoward', img: reviewer5, des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquam, voluptas quam ducimus dolores earum?' },
        { name: 'Brutpit', img: reviewer6, des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet accusamus, blanditiis maxime odio error velit?' },

    ];
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => 0 + Math.floor(Math.random() * 6));
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    const person = second[seconds];
    const pic = person.img;
    // console.log(pic);
    return (
        <section className=' bg-stone-100 my-12 pt-12'>
            <h2 className='text-center font-bold text-5xl py-2'>Good news from far away <span></span></h2>
            <h2 className='text-center text-gray-500 font-bold text-xl'>Let's see what peaple think of our services</h2>
            <div>

                <div className='flex w-3/4 mx-auto py-12'>
                    <div className='w-2/6 hidden lg:block'>
                        <div className="card flex ava ">
                            <div className="avatar flex justify-end mr-8 mb-12">
                                <div className="w-16  mask mask-hexagon">
                                    <img src={reviewer1} />
                                </div>
                            </div>

                        </div>
                        <div className="card ">
                            <div className="avatar flex justify-center my-12 ">
                                <div className="w-12 mask mask-hexagon">
                                    <img src={reviewer2} />
                                </div>
                            </div>

                        </div>
                        <div className="card ">
                            <div className="avatar flex justify-end mt-32 ">
                                <div className="w-20 mask mask-hexagon">
                                    <img src={reviewer3} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card md:w-5/6 sm:w-5/6 w-4/6">
                        <figure className="px-10 pt-10 avatar">
                            <div className="avatar online">
                                <div className="w-32 rounded-full">
                                    <img src={pic} alt='' />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className='h-24 font-bold text-xl text-gray-500'>{second[seconds].des}</p>
                            <h2 className="card-title font-bold text-2xl text-gray-700">Name: {second[seconds].name}</h2>

                            <div className=" mb-">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" checked />
                                </div>
                                <div className="avatar-group -space-x-6 mt-16">
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src={reviewer1} alt="" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src={reviewer2} alt="" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src={reviewer6} alt="" />
                                        </div>
                                    </div>
                                    <div className="avatar placeholder">
                                        <div className="w-12 bg-neutral-focus text-neutral-content">
                                            <span>+99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/6 hidden  lg:block'>
                        <div className="card flex ">
                            <div className="avatar flex justify-start mb-12 ">
                                <div className="w-20 mask mask-hexagon">
                                    <img src={reviewer4} />
                                </div>
                            </div>

                        </div>
                        <div className="card ">
                            <div className="avatar flex justify-center my-12 ml-20 ">
                                <div className="w-16 mask mask-hexagon">
                                    <img src={reviewer5} />
                                </div>
                            </div>

                        </div>
                        <div className="card ">
                            <div className="avatar flex justify-start mt-32 ">
                                <div className="w-16 mask mask-hexagon">
                                    <img src={reviewer6} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section >
    );
};

export default Reviews;