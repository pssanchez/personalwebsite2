import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import image1 from "./images/websiteheadshot2.png"
import geisel from "./images/webs_geisel.png"
import pecan from "./images/PECANthumb.png"
import chalkbag from "./images/chalkbag.png"
import scooter from "./images/scooter.png"
import surfboard from "./images/surfboard.png"
import TA from "./images/TA.png"
import footer from "./images/footer.png"

const projects = [
  { id: 1, title: 'Project 1', thumbnail:scooter },
  { id: 2, title: 'Project 2', thumbnail:chalkbag },
  { id: 3, title: 'Project 3', thumbnail:pecan },
  { id: 4, title: 'Project 4', thumbnail:surfboard },
  { id: 5, title: 'Project 5', thumbnail:geisel},
  { id: 6, title: 'Project 6', thumbnail:TA},
];

function Home() {
  return (
    <div className='home'>
      <div className="box-container">
        <a href='#contacts'>
          <img src={image1} />
        </a>
        <h1 className="box-heading-h1">PHOENIX SANCHEZ</h1>
        <p className='box-text'> Aspiring UI/UX Designer : Cognitive Science student with a specialization in Interaction and Design</p>
          <div className = "contact">
            <a href="mailto:pssanchez@ucsd.edu">mail</a>
            <p>(530)386-7695</p>
            <a href="https://www.linkedin.com/in/phoenix-sanchez-37a73b26b/" target="_blank">linkedin</a>
          </div>
      </div>
      <div className="projects">
        <div className="project-head">
          <h1>List of Projects</h1>
        </div>
        <div className="project-list">
          {projects.map(project => (
            <Link to={`/project/${project.id}`} key={project.id}>
              <div className="project-box">
                <img src={project.thumbnail} alt={project.title}/>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <footer id="contacts">
          
          <div className='footer-img'>
            <img src ={footer}/>
          </div>
          <div className="footer-text">
            <a href="https://www.linkedin.com/in/phoenix-sanchez-37a73b26b/" target="_blank"> LinkedIn</a>
            <a href="https://github.com/pssanchez" target="_blank"> Github</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
