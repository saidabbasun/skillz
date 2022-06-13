import React from 'react'
import 
const About = () => {
  return (
    <div>
          <div className="contactUs">
          <div className="contactLeftWrap">
          <img src={ContactUs} className='contactImg' alt="Contact us" />
          </div>
          
          <div className="contactRightWrap">
          <div className='homeTitle'>Get personalized learning recommendations 
          <hr className="contactHr" />
          </div>
       
         
                <p className="homeText contactText">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.</p>
               
                <Link to={`/`} className="homeBtn">
                Contact Us
                </Link>
            </div>
          </div>
    </div>
  )
}

export default About