import React from 'react'
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


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
   <div className="caruselWrapper">
   <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
  
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <i class="uil uil-star"></i>
            <div className="caruselText">
          
            
            “Kate’s courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.”
            </div>
            <div className="caruselAfter">
            James Brown, Influencer
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <i class="uil uil-star"></i>
        <div className="caruselText">
       
                        “Kate’s courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.”

            “Kate’s courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.”
            </div>
            <div className="caruselAfter">
            James Brown, Influencer
            </div>
        </SwiperSlide>
      
      </Swiper>
   </div>
    </>
  )
}

export default Workshops