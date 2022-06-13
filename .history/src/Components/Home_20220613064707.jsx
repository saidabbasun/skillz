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
                <p className='HomeTitle'>Run your own online learning platform</p>
                <p className="homeText">A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
                <p className="cartAfter">Kathryn Murphy</p>
                <Link to={`/`} className="cartBtn">
                Learn More
                </Link>
            </div>
            <div className="col7">
            <div className="waveLine"></div>
                <div className="bgRectangle">
              
                    <div className="Rectangle1"></div>
                    <div className="Rectangle2"></div>
                    <div className="Rectangle3"></div>
                   

                </div>
            </div>
        </div>

    </div>
  )
}

export default Home