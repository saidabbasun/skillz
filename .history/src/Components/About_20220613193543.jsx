import React from "react";
import { Link } from "react-router-dom";
const About = () => {
    const listCart=[
        {IdleDeadline}
    ]
  return (
    <div className="container">
      <div className="contactUs  About">
        <div className="contactLeftWrap">
          
          <div className="Rectangle3"></div>
          <div className="waveLine"></div>
          <div className="bgRectangle">
            <div className="Rectangle1"></div>
            <div className="Rectangle2"></div>
          
          </div>
          
        </div>

        <div className="contactRightWrap">
          <div className="homeTitle">
            A Passion for Teaching
            <hr className="contactHr" />
          </div>

          <p className="homeText contactText">
            A deep-dive on the Instagram algorythm, hashtags, content strategy,
            and branding.
          </p>

          <Link to={`/`} className="homeBtn">
            About Skillz
          </Link>
        </div>
      </div>
      <div className=" workshopsWrap">

<div className="coursesTitle Title ">Recent Articles  
<hr className="coursesHr" />
</div>

<div className="coursesText Text">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  varius enim in eros elementum tristique. Duis cursus, mi quis viverra
  ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
</div>
<Link to={`/`} className="homeBtn ">
View all articles
          </Link>
  </div>
  <div className="cartWrap workshopsCart">
   {listCart.map((data ,ind)=>(
  
       <div key={ind} className="cart">
           <p className="cartTitle">
           {data}
           </p>
           <p className="cartText">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.
           </p>
           <Link to={`/`} className='cartLink'>Learn More</Link>
       
   </div>
   ))}
   </div>
    </div>
  );
};

export default About;
