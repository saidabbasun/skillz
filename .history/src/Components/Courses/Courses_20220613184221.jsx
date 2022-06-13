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
      
          </div>
        </div>
    
  );
};

export default Courses;
