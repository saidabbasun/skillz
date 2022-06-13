import React from "react";
import {Link} from 'react-router-dom'

const Courses = () => {
  return (
    <div className="container">
        div.
      <div className="coursesTitle">Featured Courses</div>
      <hr className="coursesHr" />
      <div className="coursesText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </div>
      <Link to={`/`} className="cartBtn">
      View All Courses
                </Link>
    </div>
  );
};

export default Courses;
