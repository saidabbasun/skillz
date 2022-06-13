import React from 'react'
import '../styles/Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';
const Header = () => {
  return (
    <div>
        <div className="topDiscount">
            <p>One week only—50% off all courses with code 50OFF at checkout</p>
        </div>
        <div className="container">
            <div className="navbar">
                <Link to='/'>
                <img src={Logo} alt="logo" />
                </Link>
                <div className="navbarNav">
                    <div className="navItem">
                        <Link to='/' className='Link'>Courses</Link>
                    </div>
                    <div className="navItem">
                        <Link to='/' className='Link'>Free Workshops</Link>
                    </div>
                    <div className="navItem">
                        <Link to='/' className='Link'>Blog</Link>
                    </div>
                    <div className="navItem">
                        <Link to='/' className='Link'>About</Link>
                    </div>
                    <div className="navItem">
                        <Link to='/' className='Link'>Contact</Link>
                    </div>
                </div>
                <Link to='/'>
                <i class="uil uil-shopping-cart" className='cart'></i>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header