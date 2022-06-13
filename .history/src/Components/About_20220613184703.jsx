import React from 'react'
import AboutImg from '../assets/images/About.png';
import {Link} from 'react-router-dom';
const About = () => {
  return (
    <div>
          <div className="contactUs">
          <div className="contactLeftWrap">
          <div className="col7">
            <div className="waveLine"></div>
                <div className="bgRectangle">
              
                    <div className="Rectangle1"></div>
                    <div className="Rectangle2"></div>
                    <div className="Rectangle3"></div>
                   

                </div>
            </div>
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