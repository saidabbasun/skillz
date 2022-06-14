import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Sheet = () => {
    const [open, setOpen] = useState(true);
    
    const modalShow=()=>{
      setOpen(!open)
          }
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

  <i onClick={modalShow} className="uil uil-multiply"></i>

   
 
    <div className="navbarNav navbarModal">
                    <div className="navItem">
                        <Link  to={`/`} className='navLink nav-link'>Courses</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink nav-link'>Free Workshops</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink nav-link'>Blog</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink nav-link'>About</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink nav-link'>Contact</Link>
                    </div>
                </div>
   
  </div>
</div>
 
  )
}

export default Sheet