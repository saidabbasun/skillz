import React from "react";
import {Link} from 'react-router-dom'
import Cart from "./Cart";
import ContactUs from '../../assets/images/Contact.png'

const Courses = () => {
  return (
    <div className="container">
        <div className="coursesWrap">

      <div className="coursesTitle">Featured Courses
      <hr className="coursesHr" />
      </div>
      
      <div className="coursesText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </div>
      <Link to={`/`} className="homeBtn ">
      View All Courses
                </Link>
        </div>
        <div className="cartWrap">
       <Cart />
       <Cart/>
       <Cart/>
        </div>
        <div className="contactUs">
          <img src={ContactUs} alt="Contact us" />
          <div className="contactRightWrap">
          <p className='homeTitle'>Run your own online learning platform</p>
                <p className="homeText">A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
               
                <Link to={`/`} className="homeBtn">
                Learn More
                </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Courses;