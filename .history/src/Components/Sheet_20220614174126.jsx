import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Sheet = () => {
    const [open, setOpen] = useState(false);
    
    const modalShow=()=>{
      setOpen(!open)
          }
    useEffect(() => {
     
      
        
      const    NavLink = document.querySelectorAll(".nav-link");
    
        function linkAction() {
          setOpen(!open)  
    
        }
    
        NavLink.forEach((n) => n.addEventListener("click", linkAction));
  
    });
  return (
    <div>
        <div className={`RightModal ${open? 'modalOpen':''}`}>
<div className="ModalMenu">
  <i onClick={modalShow} className="uil uil-multiply"></i>

   
 
    <div className="navbarNav navbarModal">
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Courses</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Free Workshops</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Blog</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>About</Link>
                    </div>
                    <div className="navItem">
                        <Link  to={`/`} className='navLink'>Contact</Link>
                    </div>
                </div>
      </ul>
  </div>
</div>
    </div>
  )
}

export default Sheet