import React from 'react'
import {Link} from 'react-router-dom';
import Course from '../../assets/images/Course1.png'
const Cart = () => {
  return (
    <div className='cart'>
   <img className='cartImg' src={Course} alt="img" />
   <div className="cartBody">

      <div className="cartText">
      How to Increase Your Engagement on Instagram
      </div>
      <div className="cartAfter">
      Katie Murphy
      </div>
      <div className="PriceWrap">

    
      <div className="Price oldPrice">
      $ 59.99 USD
      </div>
      <div className="Price ">
      $ 59.99 USD
      </div>
      </div>
      <Link to={`/`} className='cartLink'>Learn More</Link>
   </div>
    </div>
  )
}

export default Cart