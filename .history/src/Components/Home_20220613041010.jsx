import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col5">
                <div className="Course">
                    <p>Featured Course</p>
                </div>
                <p className='cartTitle'>Run your own online learning platform</p>
                <p className="cartText">A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
                <p className="cartAfter">Kathryn Murphy</p>
                <Link to={`/`} className="cartBtn">
                Learn More
                </Link>
            </div>
            <div className="col7">
                div.
            </div>
        </div>

    </div>
  )
}

export default Home