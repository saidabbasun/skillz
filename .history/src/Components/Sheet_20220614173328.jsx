import React from 'react'

const Sheet = () => {
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