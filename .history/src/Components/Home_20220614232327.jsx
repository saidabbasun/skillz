import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
        <div className="row" id='home'>
            <div className="col5">
                <div className="CourseHome">
                    Featured Course
                </div>
                <p className='homeTitle'>Run your own online learning platform</p>
                <p className="homeText">A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
                <p className="homeAfter">Kathryn Murphy</p>
                <Link to={`/`} className="homeBtn">
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