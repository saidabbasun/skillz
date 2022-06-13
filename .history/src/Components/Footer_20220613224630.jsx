import React from 'react'
import Logo from '../assets/images/Logo.svg';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <div className="container">
            <div className="footerWrap">
                <img src={Logo} alt=""  className='footerLogo'/>
                <div className="linkWrap">
                      <div className="oneLine">
                      <div className=" itemTitle">
                        <Link  to={`/`} >learning Platform</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Home</Link>
                    </div>
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
              
                <div className="twoLine">
                <div className="navItem itemTitle">
                        <Link  to={`/`} className='navLink'>Template</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Instructions</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Style Guide</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Licenses</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Changelog</Link>
                    </div>
                </div>
                <div className="thriLine">
                <div className="navItem itemTitle">
                        <Link  to={`/`} className='navLink'>Template</Link>
                    </div>
                    <div className="follow">
                    <i class="uil uil-facebook-f"></i>
                    </div>
                    <div className="follow">
                    <i class="uil uil-instagram"></i>
                    </div>
                    <div className="follow">
                    <i class="uil uil-youtube"></i>
                    </div>
                    <div className="follow">
                    <i class="uil uil-facebook-f"></i>
                    </div>
                    <div className="follow">
                    <i class="uil uil-twitter"></i>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer