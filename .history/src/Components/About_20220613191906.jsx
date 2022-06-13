import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container">
      <div className="contactUs  About">
        <div className="contactLeftWrap">
          
          <div className="Rectangle3"></div>
          <div className="bgRectangle">
            <div className="Rectangle1"></div>
            <div className="Rectangle2"></div>
          
          </div>
          
        </div>

        <div className="contactRightWrap">
          <div className="homeTitle">
            A Passion for Teaching
            <hr className="contactHr" />
          </div>

          <p className="homeText contactText">
            A deep-dive on the Instagram algorythm, hashtags, content strategy,
            and branding.
          </p>

          <Link to={`/`} className="homeBtn">
            About Skillz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;