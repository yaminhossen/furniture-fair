import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/cameralogo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='bg-gray-300'>
            <div className="navbar  w-3/4 mx-auto py-6 ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Item 1</Link></li>
                            <li><Link to='/'>Item 1</Link></li>
                            <li><Link to='/'>Item 1</Link></li>
                            <li><Link to='/'>Login</Link></li>

                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><img width="50px" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contuct'>ContuctUs</Link></li>

                        <li><Link to='/login'>Login</Link></li>

                    </ul>
                </div>
                {/* <div className='hidden sm:block navbar-end'>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><img width="50px" src={logo} alt="" /></Link>
                </div> */}
                {/* <div className="navbar-end lg:hidden">
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><img width="50px" src={logo} alt="" /></Link>
                </div> */}

            </div>
        </div>
    );
};

export default Header;