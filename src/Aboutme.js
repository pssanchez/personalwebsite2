import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Textchange from './Textchange.js';
import './Aboutme.css';
import headphoto from  './images/about-photo.png'
import footphoto from "./images/about-foot2.png"
import { RevealVertical } from './RevealVertical.js';
import { RevealHorizontal } from './RevealHorizontal.js';

function AboutMe() {
  const navigate = useNavigate();
  return (
    <div> 
        <nav className='about-nav'>
          <p>Phoenix Sanchez</p>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
          </nav> 
        <div className = 'about-body'> 
        
          <div className = "bio">
            <Textchange textArray={['Hola!', 'Sup!', 'Welcome!']} intervalDurationMs={4000} />
            <div className = 'bio-text'>
              <RevealHorizontal>
              <p>
                I'm Phoenix Sanchez, a third-year Cognitive Science student at UCSD, raised in Lake Tahoe, CA with a passion for extreme sports and the outdoors. Whether it was backcountry snowboarding or surfing in blizzards, I lived and breathed adventure. This environment shaped me, instilling the values of hard work and savoring every moment. These lessons now guide me in all aspects of my life: give your all, but always find joy in what you do.
              </p>
              </RevealHorizontal>
            </div>
            <RevealHorizontal>
            <h2>My Philosophy</h2>
            <div className = 'p-text'>
              <p>
                Design is influenced by the society it's part of. As such, design follows the ever changing culture and needs of the communities that it serves. My approach is simple: understand the culture, and reflect this through design.
              </p>
            </div>
            </RevealHorizontal>
            <div className='thanks'>
            <p>Thank You for checking out my website!</p>
          </div>
          </div>
          
          <div className= 'about-head'>
            <img src = {headphoto} />
          </div>
        </div>
      <footer className='foot'>
        <img src = {footphoto}/>
      </footer>
    </div>
    
  );
}

export default AboutMe;
