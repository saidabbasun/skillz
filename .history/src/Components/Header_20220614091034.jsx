import React from 'react'

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
                <Link  to={`/`}>
                <img src={Logo} alt="logo" />
                </Link>
                <div className="navbarNav">
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Courses</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Free Workshops</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Blog</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>About</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Contact</Link>
                    </div>
                </div>
                <div className="menuStor">
                <div className="storWrapper">
                <Link  to={`/`}>
                <i className ="uil uil-shopping-cart stor"></i>
                </Link>
                     <div className="count">
                        <p>0</p>
                     </div>
                     <i className="uil uil-apps stor"></i>
                </div>
                </div>
              
               
            </div>
        </div>
    </div>
  )
}

export default Header