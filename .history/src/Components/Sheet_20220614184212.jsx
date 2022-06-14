import React from 'react'
import { Link } from 'react-router-dom';


const Sheet = (open,linkAction) => {
   
   
  return (
    <div>
        <div className={`RightModal ${props.open? 'modalOpen':''}`}>

  <i onClick={{linkAction}}  className="uil uil-multiply modalIcon"></i>

   
 
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