import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Sheet = (props) => {
   
    useEffect(() => {
     
      
        
      const  NavLink = document.querySelectorAll(".nav-link");
    
        function linkAction() {
          setOpen(!open)  
    
        }
    
        NavLink.forEach((n) => n.addEventListener("click", linkAction));
  
    });
  return (
    <div>
        <div className={`RightModal ${open? 'modalOpen':''}`}>

  <i  className="uil uil-multiply modalIcon"></i>

   
 
    <div className="navbarNav navbarModal">
                    <div className="navItem nav-link">
                        <Link  to={`/`} className='navLink '>Courses</Link>
                    </div>
                    <div className="navItem nav-link">
                        <Link  to={`/`} className='navLink '>Free Workshops</Link>
                    </div>
                    <div className="navItem nav-link">
                        <Link  to={`/`} className='navLink '>Blog</Link>
                    </div>
                    <div className="navItem nav-link">
                        <Link  to={`/`} className='navLink '>About</Link>
                    </div>
                    <div className="navItem nav-link">
                        <Link  to={`/`} className='navLink '>Contact</Link>
                    </div>
                </div>
   
  </div>
</div>
 
  )
}

export default Sheet