import React from 'react'
import {Link} from 'react-router-dom';
const Workshops = () => {
    listCart=[
        {title:'Photography Basics',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'}
    ]
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
    <div className="cartWrap workshopsCart">
        <div className="cart">
            <p className="cartTitle">
            Photography Basics
            </p>
            <p className="cartText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.
            </p>
            <Link to={`/`} className='cartLink'>Learn More</Link>
        </div>
    </div>
    </>
  )
}

export default Workshops