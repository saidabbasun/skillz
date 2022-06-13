import React from 'react'
import Logo from '../assets/images/Logo.svg';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <div className="container">
            <div className="footerWrap">
                <img src={Logo} alt="" />
                <div className="linkWrap">
                      <ul className="oneLine">
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
                      </ul>
                </div>
                <div className="twoLine">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer