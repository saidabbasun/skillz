import React from 'react'
import '../styles/Header.scss';
import { NavLink } from "react-router-dom";
import Logo from '../assets/images/Logo.svg';
const Header = () => {
  return (
    <div>
        <div className="topDiscount">
            <p>One week only—50% off all courses with code 50OFF at checkout</p>
        </div>
        <div className="container">
            <div className="navbar">
                <img src={Logo} alt="logo" />
                <div className="navbarNav">
                    <div className="navItem">
                        <NavLink to='/' className='navLink'>Courses</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to='/' className='navLink'>Free Workshops</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to='/' className='navLink'>Blog</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to='/' className='navLink'>Blog</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to='/' className='navLink'>Blog</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header