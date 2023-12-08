import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import {RevealVertical} from "./RevealVertical.js"
import {RevealHorizontal} from "./RevealHorizontal.js"
import {DelayedReveal} from "./DelayedReveal.js"
import geisel from "./images/UCSDBox.png"
import pecan from "./images/Pecan.png"
import scooter from "./images/spinsc.png"
import surfboard from "./images/surfb.png"
import TA from "./images/TA2.png"
import footer from "./images/home-footer3.png"
import { useNavigate } from 'react-router-dom';


const projects = [
  { id: 1, descritption: 'A look into the common issues users face with the ride share service SPIN, and proposed solutions/redesigns',skills: 'Product Design    |  UX Research   |   2022', thumbnail:scooter },
  { id: 4, descritption: 'A passion project involving 3D modeling of UCSD landmarks using 2D vector graphics and laser cut materials ',skills: 'Product Design    |  3D modeling   |   2023', thumbnail:geisel },
  { id: 2, descritption: 'Proffesional website design and development for a local financial investment family office',skills: 'UI/UX Design    |  Web Development   |   2023', thumbnail:pecan},
  { id: 3, descritption: 'Passion project and side business : handshaping foam surfboard blanks according to customer order specifications',skills: 'Product Design    |   User-Centric Design  |   2023', thumbnail:surfboard},
  { id: 6, descritption: 'A collection of art and culture representing the big three board sports: snowboarding, skateboarding, surfing ',skills: 'Product Design    |   Brand Design  |   coming soon', thumbnail:TA},
  
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className='home'>
      <div className="box-container">
        <nav className='custom-nav'>
          <p>Phoenix Sanchez</p>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
        </nav>
          <RevealHorizontal>
            <div className='box-text'>
            <h2>im phoenix,<br></br> a ux designer</h2>
            <p> currently studying Cognitive Science with a specialization<br></br> in Design at UCSD</p>
            </div>
          </RevealHorizontal>
          <RevealVertical>
            <div className = "contact">
              <a href="mailto:pssanchez@ucsd.edu">mail </a>
              <p> | </p><a href="https://github.com/pssanchez" target="_blank"> github</a><p> | </p>
              <a href="https://www.linkedin.com/in/phoenix-sanchez-37a73b26b/" target="_blank">linkedin</a>
            </div>
          </RevealVertical> 
          <DelayedReveal>
            <div className ="myWork">
              <a href = '#projects'>My Work</a>
              <div class="arrow-down"></div>
            </div>
          </DelayedReveal>
      </div>
        <div className='space'>
        </div>
        <div className="projects" id='projects'>
          <div className="project-list">
            {projects.map(project => (
              <Link to={`/project/${project.id}`} key={project.id} style={{ textDecoration: 'none' }}>
                <RevealHorizontal>
                <div className="project-item">
                  <div className="project-thumbnail">
                    <img src={project.thumbnail} alt={project.title} />
                  </div>
                  <div className="project-description">
                    <h3>{project.descritption}</h3>
                    <p>{project.skills}</p>
                  </div>
                </div>
                <hr className='line-break'></hr>
                </RevealHorizontal>
                </Link>
              ))}
          </div>
        </div>
      <div>
        <footer id="contacts">
          
          <div className='footer-img'>
            <img src ={footer}/>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
