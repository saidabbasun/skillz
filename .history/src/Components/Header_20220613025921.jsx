import React from 'react'
import '../styles/Header.scss';
import 
import Logo from '../assets/images/Logo.svg';
const Header = () => {
  return (
    <div>
        <div className="topDiscount">
            <p>One week only—50% off all courses with code 50OFF at checkout</p>
        </div>
        <div className="container">
            <div className="navbar">
                <NavLink to='/'>
                <img src={Logo} alt="logo" />
                </NavLink>
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
                        <NavLink to='/' className='navLink'>About</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to='/' className='navLink'>Contact</NavLink>
                    </div>
                </div>
                <NavLink to='/'>
                <i class="uil uil-shopping-cart" className='cart'></i>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header