import React from 'react'
import {Link} from 'react-router-dom';
const Cart = () => {
  return (
    <div className='cartWrap'>
   <img src="../../assets/images/Course1.png" alt="img" />
   div
      <div className="cartText">
      How to Increase Your Engagement on Instagram
      </div>
      <div className="homeAfter">
      Katie Murphy
      </div>
      <div className="oldPrice">
      $ 59.99 USD
      </div>
      <div className="newPrice">
      $ 59.99 USD
      </div>
      <Link to={`/`} className='cartLink'>Learn More</Link>
    </div>
  )
}

export default Cart