import React from 'react'
import {Link} from 'react-router-dom';
const Workshops = () => {
  return (
    <div>
         <div className=" workshopsWrap">

<div className="coursesTitle">Upcoming Free Workshops   
<hr className="coursesHr" />
</div>

<div className="coursesText">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  varius enim in eros elementum tristique. Duis cursus, mi quis viverra
  ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
</div>
<Link to={`/`} className="homeBtn ">
View All Workshops
          </Link>
  </div>
    </div>
  )
}

export default Workshops