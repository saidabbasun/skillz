import React from 'react'
import {Link} from 'react-router-dom';
const Workshops = () => {
   const  listCart=[
    'Photography Basics' ,
'Business 101',
'Social Networking Camp']
  return (
    <>
    <div className='container'>
         <div className=" workshopsWrap">

<div className="coursesTitle Title ">Upcoming Free Workshops   
<hr className="coursesHr" />
</div>

<div className="coursesText Text">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  varius enim in eros elementum tristique. Duis cursus, mi quis viverra
  ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
</div>
<Link to={`/`} className="homeBtn ">
View All Workshops
          </Link>
  </div>
    </div>
   {listCart.map((data))}
    </>
  )
}

export default Workshops