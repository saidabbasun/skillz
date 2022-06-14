import React coursesfrom "react";
import {Link} from 'react-router-dom'
import Cart from "./Cart";
import ContactUs from '../../assets/images/Contact.png'

const Courses = () => {
  return (
    <div className="container"  id="">
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
        <div className="contactUs" id="about">
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
    
  );
};

export default Courses;
