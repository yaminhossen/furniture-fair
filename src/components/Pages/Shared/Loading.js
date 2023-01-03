import React from 'react';
import spinner from '../../../images/logo/spinnerpng.png'

const Loading = () => {
    return (
        <div className='flex justify-center items-center my-32'>
            <button type="button" className="bg-indig-500 animate-spin w-8 text-blue-800" disabled>
                <img src={spinner} alt="" />
            </button>Loading...

        </div>
    );
};

export default Loading;