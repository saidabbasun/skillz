import React from "react";
import { Link } from "react-router-dom";
import Articles1 from '../assets/images/Articles1.png'
const About = () => {
    const listCart=[
        {id:1,img:Articles1, data:'February 8, 2021', text:'The TikTok Algorithm: How to Get the Best Engagement',after:'Dianne Russell'},
        {id:2,img:Articles1, data:'February 8, 2021', text:'The TikTok Algorithm: How to Get the Best Engagement',after:'Dianne Russell'},
        {id:3,img:Articles1, data:'February 8, 2021', text:'The TikTok Algorithm: How to Get the Best Engagement',after:'Dianne Russell'}
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
  
  <div key={ind} className='cart'>
  <img className='cartImg' src={data.img} alt="img" />
  <div className="cartBody">

     <div className="cartText">
     How to Increase Your Engagement on Instagram
     </div>
     <div className="homeAfter">
     Katie Murphy
     </div>
 
  </div>
   </div>
   ))}
   </div>
    </div>
  );
};

export default About;
