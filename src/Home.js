import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import {RevealVertical} from "./RevealVertical.js"
import {RevealHorizontal} from "./RevealHorizontal.js"
import {RevealBar} from "./RevealBar.js"
import image1 from "./images/websiteheadshot2.png"
import geisel from "./images/webs_geisel.png"
import pecan from "./images/PECANthumb.png"
import chalkbag from "./images/chalkbag.png"
import scooter from "./images/scooter.png"
import surfboard from "./images/surfboard.png"
import TA from "./images/TA.png"
import footer from "./images/home-footer.png"
import { useNavigate } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Project 1', thumbnail:scooter },
  { id: 2, title: 'Project 2', thumbnail:pecan },
  { id: 3, title: 'Project 3', thumbnail:surfboard},
  { id: 4, title: 'Project 4', thumbnail:geisel},
  { id: 5, title: 'Project 5', thumbnail:chalkbag},
  { id: 6, title: 'Project 6', thumbnail:TA},
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className='home'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
      </nav>
      
      <div className="box-container">
        <a href='#contacts'>
          <img src={image1} />
        </a>
        <RevealBar>
        <h1 className="box-heading-h1">PHOENIX SANCHEZ</h1>
        </RevealBar>
        <RevealVertical>
        <p className='box-text'> Aspiring UI/UX Designer : Cognitive Science student with a specialization in Interaction and Design</p>
          <div className = "contact">
            <a href="mailto:pssanchez@ucsd.edu">mail </a>
            <p> | </p><a href="https://github.com/pssanchez" target="_blank"> github</a><p> | </p>
            <a href="https://www.linkedin.com/in/phoenix-sanchez-37a73b26b/" target="_blank">linkedin</a>
          </div>
          </RevealVertical>
      </div> 
      
     
      <div className="projects">
        <RevealVertical>
        <div className="project-head">
          <h1>My Work</h1>
        </div>
        </RevealVertical>
        <RevealHorizontal>
        <div className="project-list">
          {projects.map(project => (
            <Link to={`/project/${project.id}`} key={project.id}>
              <div className="project-box">
                <img src={project.thumbnail} alt={project.title}/>
              </div>
            </Link>
          ))}
        </div>
        </RevealHorizontal>
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
