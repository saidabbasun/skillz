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
                    .link
                      <div className="oneLine">
                      
                        <p className='navTitle'>learning Platform</p>
                    
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
               
                        <p className='navTitle'>Template</p>
                 
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
                </div>
                <div className="thriLine">
               
                        <p className='navTitle'>Template</p>
                  <div className="followWrap">

                    <div className="follow">
                    <i className="uil uil-facebook-f"></i>
                    </div>
                    <div className="follow">
                    <i className="uil uil-instagram"></i>
                    </div>
                    <div className="follow">
                    <i className="uil uil-youtube"></i>
                    </div>
                    <div className="follow">
                    <i className="uil uil-facebook-f"></i>
                    </div>
                    <div className="follow">
                    <i className="uil uil-twitter"></i>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="footerBottom">
                <p className='text'>?? Skillz Template</p>
                <p className='text'>Powered by Webflow</p>
            </div>
        </div>
    </div>
  )
}

export default Footer