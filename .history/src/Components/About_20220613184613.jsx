import React from 'react'
import AboutImg from '../assets/images/About.png';
import {Link} from 'react-router-dom';
const About = () => {
  return (
    <div>
          <div className="contactUs">
          <div className="contactLeftWrap">
          <img src={AboutImg} className='contactImg' alt="Contact us" />
          </div>
          
          <div className="contactRightWrap">
          <div className='homeTitle'>A Passion for Teaching
          <hr className="contactHr" />
          </div>
       
         
                <p className="homeText contactText">A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
               
                <Link to={`/`} className="homeBtn">
                About Skillz
                </Link>
            </div>
          </div>
    </div>
  )
}

export default About