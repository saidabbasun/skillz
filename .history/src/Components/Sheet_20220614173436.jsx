import React, { useEffect, useState } from 'react'

const Sheet = () => {
    const [open, setOpen] = useState(false);
    const [small, setSmall] = useState(false);
    const modalShow=()=>{
      setOpen(!open)
          }
    useEffect(() => {
     
      
        
      const    NavLink = document.querySelectorAll(".nav-link");
    
        function linkAction() {
          setOpen(!open)  
    
        }
    
        NavLink.forEach((n) => n.addEventListener("click", linkAction));
  
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
          setSmall(window.pageYOffset >=100)
        );
      }
    });
  return (
    <div>
        <div className={`RightModal ${open? 'modalOpen':''}`}>
<div className="ModalMenu">
  <i onClick={modalShow} className="uil uil-multiply"></i>
  <form className="  searchForm">
  <i className="uil uil-search"></i> 
      <input className="form-control" type="search" placeholder=" Поиск" aria-label="search"/>
  
    </form>
   
    <ul className="navbar-nav navbarModal">
    <li className="nav-item active">
        <Link className="nav-link" to="/Aktsiya">Акции </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Katalog">Каталлог</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/Dastafka">Доставка </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">О магазине</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Blog">Блог</Link>
      </li>
      </ul>
  </div>
</div>
    </div>
  )
}

export default Sheet