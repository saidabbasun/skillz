import React from 'react'
import {Link} from 'react-router-dom';
const Cart = () => {
  return (
    <div className='cartWrap'>
   <img className='cartImg' src="../../assets/images/Course1.png" alt="img" />
   <div className="cartbody">

      <div className="cartText">
      How to Increase Your Engagement on Instagram
      </div>
      <div className="homeAfter">
      Katie Murphy
      </div>
      <div className="oldPrice">
      $ 59.99 USD
      </div>
      <div className="Price">
      $ 59.99 USD
      </div>
      <Link to={`/`} className='cartLink'>Learn More</Link>
   </div>
    </div>
  )
}

export default Cart