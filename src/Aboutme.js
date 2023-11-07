import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Aboutme.css';
import headphoto from  './images/about-headsh.png'
import footphoto from "./images/about-foot.png"

function AboutMe() {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
      </nav>
        <div className = 'about-body'>  
          <div className = "bio">
            <h1>Hello!</h1>
            <p>
              I'm Phoenix Sanchez, a third-year Cognitive Science student at UCSD, raised in Lake Tahoe, CA with a passion for extreme sports and the outdoors. Whether it was backcountry snowboarding or surfing in blizzards, I lived and breathed adventure. This environment shaped me, instilling the values of hard work and savoring every moment. These lessons now guide me in all aspects of my life: give your all, but always find joy in what you do.
            </p>
            <h2>Approach to Design</h2>
            <p>
              Design is influenced by the society it's part of. As such, design follows the ever changing culture and needs of the communities that it serves. My approach is simple: understand the culture, and reflect this through design.
            </p>
            
          </div>
          <div className= 'about-head'>
            <img src = {headphoto} />
          </div>
        </div>
      <footer>
        <img src = {footphoto}/>
      </footer>
    </div>
    
  );
}

export default AboutMe;
