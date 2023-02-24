import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Offer.css'
import ff from '../../../images/furniture/fur.png'

const Offer = () => {
    const [tarikh, setTarikh] = useState(0);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [day, setDay] = useState(0);
    const countDownDate = new Date("March 25, 2023 15:37:25").getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        // console.log(now);
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        const bar = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";


        setSecond(seconds);
        setTarikh(bar);
        setDay(days);
        setHour(hours);
        setMinute(minutes);
        // If the count down is over, write some text 
        // console.log(day);
        if (distance < 0) {
            clearInterval(x);
            setTarikh('EXPIRED');
        }
        // return tarikh;
    }, 1000);

    return (

        <div className='bg-stone-200 w-3/4 rounded-xl mx-auto flex'>
            <div className=' flex  mx-auto items-center hidden md:block lg:block '>
                <img className='offerchair' src={ff} alt="" />
            </div>
            <div className="divider divider-horizontal py-12 mr-12 lg:mr-0  lg:py-24 "></div>
            <div className='w-3/6 p-6 '>
                <div className='flex justify-center'>
                    <div className='flex gap-4'>
                        <div>
                            {/* For text gradiant <h1>text-transparent bg-clip-text bg-gradient-to-br from-stone-400 to-orange-400 </h1> */}
                        </div>
                        <div className='flex'>
                            <div><span className=''>up to</span> <span className='sf text-6xl text-transparent bg-clip-text bg-gradient-to-br from-black to-blue-600 font-bold'>75%</span></div>
                            <div className='text-2xl font-bold text-stone-500 mt-7'>off</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-stone-500 mt-10 mb-4 text-center'>The wooden touch stool</h2>
                </div>
                <div className="grid grid-flow-col gap-5 text-center justify-center auto-cols-max pr-4">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-xl">
                            <span style={{ "--value": day }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-xl">
                            <span style={{ "--value": hour }}></span>
                        </span>
                        hrs
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-xl">
                            <span style={{ "--value": minute }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-xl">
                            <span style={{ "--value": second }}></span>
                        </span>
                        sec
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <Link to="/dashboard" className='btn'>Shop now</Link>
                </div>

            </div>



        </div>
    );
};

export default Offer;