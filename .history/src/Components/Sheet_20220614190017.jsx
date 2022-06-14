import React from 'react'
import { Link } from 'react-router-dom';


const Sheet = (o,link) => {
   
   
  return (
    <div>
        <div className={`RightModal ${o.o ? 'modalOpen':''}`}>

  <i onClick={link}  className="uil uil-multiply modalIcon"></i>

   
 
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