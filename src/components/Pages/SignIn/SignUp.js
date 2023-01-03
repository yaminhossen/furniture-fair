import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';

const SignUp = () => {
    return (
        <div>
            <div className='w-3/4 my-6 rounded-xl  bg-gray-300 mx-auto'>
                <h2 className='my-12 pt-8 text-center font-bold text-2xl text-gray-500'>SignUp</h2>
                <div className='w-3/5  mt-12 mb-24  mx-auto' >

                    <form >
                        <label className='pl-4 text-gray-400 font-bold' htmlFor="">Name</label>
                        <input type="text" name='name' placeholder="Your name" className="input bg-gray-100  w-full mb-6 max-auto" />
                        <br />
                        <label className='pl-4 text-gray-400 font-bold' htmlFor="">Email</label>
                        <input type="text" name='email' placeholder="Enter your email" className="input bg-gray-100  w-full mb-6 max-auto" />
                        <br />
                        <label className='pl-4 mt-12 text-gray-400 font-bold' htmlFor="">Password</label>
                        <input name='password' type="text" placeholder="Password" className="input bg-gray-100  mb-8 w-full max-auto" />

                        <br />
                        <input className="input text-gray-600 bg-gray-100 hover:bg-gray-400   w-full hover:text-white font-bold uppercase max-auto mb-8" type="submit" value="Sign UP" />
                    </form>
                    <p>Already resister? <Link className='text-blue-600' to='/login'>Please login</Link></p>
                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>
                    </div>
                    <div>
                        <h2 className='text-center font-bold text-gray-600 text-2xl'>Social Login</h2>
                    </div>
                    <div className='w-3/5 mx-auto '>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;