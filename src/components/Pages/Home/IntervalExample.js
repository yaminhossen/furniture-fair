import React, { useState, useEffect } from 'react';
import reviewer1 from '../../../images/review/expert-1.jpg';
import reviewer2 from '../../../images/review/expert-2.jpg';
import reviewer3 from '../../../images/review/expert-3.jpg';
import reviewer4 from '../../../images/review/expert-4.jpg';
import reviewer5 from '../../../images/review/expert-5.jpg';
import reviewer6 from '../../../images/review/expert-6.png';

const IntervalExample = () => {
    const second = [
        { name: 'Robert', img: reviewer1, des: 'The service was awesome The man was just good' },
        { name: 'Johnson', img: reviewer2 },
        { name: 'Henry Ford', img: reviewer3 },
        { name: 'Klinton', img: reviewer4 },
        { name: 'Jakoward', img: reviewer5 },
        { name: 'Brutpit', img: reviewer6 },

    ];
    const [seconds, setSeconds] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSeconds(seconds => 0 + Math.floor(Math.random() * 6));
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div >

        </div>
    );
};

export default IntervalExample;