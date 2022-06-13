import React from "react";

const Courses = () => {
  return (
    <div className="container">
      <div className="coursesTitle">Featured Courses</div>
      <hr className="coursesHr" />
      <div className="coursesText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </div>
      <Lin to={`/`} className="cartBtn">
                Learn More
                </Lin>
    </div>
  );
};

export default Courses;
