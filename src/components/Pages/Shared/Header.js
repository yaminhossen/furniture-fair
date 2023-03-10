import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../../images/logo/furniture-logo.png';
import auth from '../../../firebase.init';
import './Header.css';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='bg-gray-300'>
            <div className="navbar  w-3/4 mx-auto py-4 ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='hover:bg-gray-400 ' to='/home'>Home</Link></li>
                            <li><Link className='hover:bg-gray-400 ' to='/blog'>Blog</Link></li>
                            <li><Link className='hover:bg-gray-400 ' to='/contuct'>ContuctUs</Link></li>

                            {
                                user ?
                                    <button className='py-1 hover:bg-gray-400 rounded-lg  px-4' onClick={handleSignOut}>SignOut</button>
                                    :
                                    <li><Link className='hover:bg-gray-400 ' to='/login'>Login</Link></li>
                            }
                            <li><Link className='hover:bg-gray-400 ' to='/dashboard'>Dashboard</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className=" hover:bg-gray-200 rounded-lg"><img width="100px " src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='hover:bg-gray-400 ' to='/home'>Home</Link></li>
                        <li><Link className='hover:bg-gray-400 ' to='/blog'>Blog</Link></li>
                        <li><Link className='hover:bg-gray-400 ' to='/contuct'>ContuctUs</Link></li>

                        {
                            user ?
                                <button className='mx- hover:bg-gray-400 rounded-lg  px-4' onClick={handleSignOut}>SignOut</button>
                                :
                                <li><Link className='hover:bg-gray-400 ' to='/login'>Login</Link></li>
                        }
                        <li><Link className='hover:bg-gray-400 ' to='/dashboard'>Dashboard</Link></li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;